( function () {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };

    toBuy.addItem = function (itemName, itemQuantity) {
      ShoppingListCheckOffService.addItem(itemName, itemQuantity);
    }

  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  };

  function ShoppingListCheckOffService() {
      var service = this;
      //List of To Buy Items
      var toBuyItems = [];

      //List of already Bought Items
      var alreadyBoughtItems = [];
      toBuyItems = [
        {
          name: 'Cookies',
          quantity: 10
        },
        {
          name: 'Chips',
          quantity: 5
        },
        {
          name: 'Mixture',
          quantity: 20
        },
        {
          name: 'Biscuits',
          quantity: 4
        },
        {
          name: 'Chocolates',
          quantity: 10
        },
        {
          name: 'Pepsi',
          quantity: 3
        },
        { name: 'Eno',
          quantity: 3
        },
        {
          name: 'Pastries',
          quantity: 4
        }
      ];
      service.addItem = function (itemName, itemQuantity) {
        var item = {
          name: itemName,
          quantity: itemQuantity
        };
        alreadyBoughtItems.push(item);
      };

      service.removeItem = function (itemIndex) {
        toBuyItems.splice(itemIndex, 1);
      };

      service.getToBuyItems = function () {
        return toBuyItems;
      };

      service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
      };
    }
})();
