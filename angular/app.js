var app = angular.module("zachet", ['ngRoute', "localStorageModule", "localizationModule" , "productModule"])

  .config(["$routeProvider", "$locationProvider",  function($routeProvider, $locationProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/test.html',
              controller: 'appCtrl',
          })
          .when('/home', {
              templateUrl: 'views/home.html',
              controller: 'appCtrl',
          })
          .when('/category', {
              templateUrl: 'views/category.html',
              controller: 'appCtrl',
          })
          .when('/product', {
              templateUrl: 'views/product.html',
              controller: 'productController',

          })
          .otherwise({ 
            templateUrl: 'views/404.html',
          });
  }])


  .controller('appCtrl', ['$scope', "$rootScope", "localStorage", "localization", "$location",
    function($scope, $rootScope, localStorage, localization, $location) {

    $scope.staticTranslate = [];

    if (localStorage.hasItem("local")) {
      $scope.staticTranslate = localization.getLocal(localStorage.getItem("local"));
      $scope.loc = localStorage.getItem("local");
    }else{
      $scope.loc = "en";
    }


    $scope.changeLanguage = function($event){
      var lan = $event.srcElement.innerText;
      $scope.staticTranslate = localization.getLocal(lan);
      localStorage.addItem('local', lan);
    }

    $scope.chekLang = function(lang){
      if (lang == $scope.loc) {
        return "current-lan";
      }
    }

    $rootScope.$on("chengeLang", function(e, data){
      $scope.loc = data.loc;
    })
}])