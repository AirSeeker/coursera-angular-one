(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var buyItems = this;
		buyItems.items = ShoppingListCheckOffService.getListOfBuyItems();
		buyItems.message = ShoppingListCheckOffService.getMessageBuyList();
		buyItems.messageShow = ShoppingListCheckOffService.getMessageBuy();

		buyItems.buy = function(name, quantity, index){
			 ShoppingListCheckOffService.buyItem(name, quantity, index);
			 buyItems.messageShow = ShoppingListCheckOffService.getMessageBuy();
			 document.getElementsByClassName("boughtList").style.display = 'none';

		};
	};

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var broughtItems = this;
		broughtItems.items = ShoppingListCheckOffService.getListOfBoughtItems();
		broughtItems.message = ShoppingListCheckOffService.getMessageBoughtList();
		broughtItems.messageShow = ShoppingListCheckOffService.getMessageBought();
	};

	function ShoppingListCheckOffService(){
		var service = this;

		var listOfBuyItems = [
			{ name: "cookies", quantity: 10 },
			{ name: "milk", quantity: 2 },
			{ name: "chocolate", quantity: 4 },
			{ name: "soda", quantity: 5 },
			{ name: "fruit", quantity: 100 }
		];
		var listOfBoughtItems = [];
		var messageBuyList = 'Everything is bought!';
		var messageBoughtList = 'Nothing bought yet.';
		var listOfBuyItemsMessage = false;
		var listOfBoughtItemsMessage = true;

		service.getListOfBoughtItems = function(){
			return listOfBoughtItems;
		};
		service.getListOfBuyItems = function(){
			return listOfBuyItems;
		};
		service.getMessageBought = function(){
			return listOfBoughtItemsMessage;
		};
		service.getMessageBoughtList = function(){
			return messageBoughtList;
		};
		service.getMessageBuyList = function(){
			return messageBuyList;
		};
		service.getMessageBuy = function(){
			return listOfBuyItemsMessage;
		};

		service.buyItem = function(name, quantity, index){
				var item = { name: name, quantity: quantity }
				listOfBoughtItems.push(item);
				listOfBuyItems.splice(index, 1);
				if(listOfBoughtItems.length > 0){
					listOfBoughtItemsMessage = false;
				}
				if(listOfBuyItems.length === 0){
					listOfBuyItemsMessage = true;
				}
		};
	}
})();
