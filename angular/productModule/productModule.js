var productModule = angular.module("productModule", [])
	.factory('productsHistory', function(localStorage){

	hasInHistory= function(product, history){
		var flag = false;
		history.forEach(function(el){
			if (el.name == product.name) {
				flag = !flag;
			};
		});

		return	flag;
	}

	addHistory = function(product){
		var historyStr = localStorage.getItem("productsHistory");
		var history = [];		

		if (historyStr != null) {
			history = angular.fromJson(historyStr);
			if(hasInHistory(product, history)) return;
			if(history.length >= 6){
				history.forEach(function(el, i){

					if (i == history.length-1) {
						history[i] = product;
					}else{
						history[i]=history[i+1]
					}

				})

			}else{
				history.push(product);
			}

		}else {
			history.push(product);
		}
		
		localStorage.addItem('productsHistory', angular.toJson(history));

	}

	getHistory = function(){
		if(localStorage.hasItem("productsHistory")){
			return angular.fromJson(localStorage.getItem('productsHistory'));
		};
		return [];
	}

	hasHistory = function(){
		if(localStorage.hasItem("productsHistory")){
			return true;
		};
		return false;
	}

	return{
		addHistory: addHistory,
		getHistory: getHistory,
		hasHistory: hasHistory
	}
});