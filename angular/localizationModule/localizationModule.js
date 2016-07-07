var localizationModule = angular.module("localizationModule", [])
	.factory('localization', function($http, $rootScope){

	getLocal = function(loc){
		var staticTranslate = [];

		switch(loc){
			
    	    case "ru":
    	    	/*add http request and return data*/
    	      $rootScope.$emit('chengeLang', {loc: "ru"})
    	      return staticTranslate
    	      break;
    	    case "en":
    	    	/*add http request and return data*/
    	      $rootScope.$emit('chengeLang', {loc: "en"})
    	      return staticTranslate
    	      break;
    	  }

		}

	return {
		getLocal: getLocal,
	}
});