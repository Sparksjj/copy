var localStorageModule = angular.module("localStorageModule", [])
	.factory('localStorage', function($http, $rootScope){

	addItem = function(key, val){
		localStorage.setItem(key, val)
	};
	getItem = function(key){
		return localStorage.getItem(key)
	};
	removeItem = function(key){
		return localStorage.removeItem(key)
	};
	hasItem = function(key){
		if (localStorage.getItem(key)==null) {
			return false;
		}
		return true;
	}
	return {
		addItem: addItem,
		removeItem: removeItem,
		getItem: getItem,
		hasItem: hasItem
	}
});