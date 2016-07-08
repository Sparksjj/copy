productModule.controller('productController', ['$scope', '$rootScope', 'productsHistory',
function($scope, $rootScope, productsHistory){
	$scope.productsHistory = productsHistory.getHistory();

	/*add product in history from server*/
	productsHistory.addHistory({name: 'Phone "PRO-HMO 2016 ns-5', price: "999"})

	/*hide block if no history*/
	$scope.hasHistory = function(){
		return $scope.productsHistory.length
	}
}]);