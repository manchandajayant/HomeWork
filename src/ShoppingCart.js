class ShoppingCart {
  constructor() {
    this.items = [];
  }

  //Your current Cart
  getItems() {
    return this.items;
  }

  //Your addtions to the Cart
  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }

  //Clear your Cart
  clear() {
    this.items.length = 0;
  }

  //Total cost
  total() {
    const newArray = this.getItems();
    const multiplier = newArray.map(mult => mult.pricePerUnit * mult.quantity);
    var addingCostValues = multiplier.reduce(function(
      accumulator,
      currentvalue
    ) {
      return accumulator + currentvalue;
    },
    0);
    return addingCostValues;
  }
}

const cart = new ShoppingCart();
cart.addItem("item 1", 1, 15.5);
cart.addItem("item 2", 2, 3);
cart.addItem("item 3", 10, 2);
cart.addItem("item 4", 0, 2);
cart.addItem("item 5", 2, 0);
console.log(cart.getItems());
cart.total();
console.log(cart.total());

module.exports = ShoppingCart;
