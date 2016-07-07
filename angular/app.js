var app = angular.module("zachet", ['ngRoute', "localStorageModule", "localizationModule"])

  .config(function($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/test.html',
              controller: 'appCtrl',
          })
          .otherwise({ 
            templateUrl: 'views/404.html',
          });
  })

  .controller('appCtrl', ['$scope', "$rootScope", "localStorage", "localization",
    function($scope, $rootScope, localStorage, localization) {

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