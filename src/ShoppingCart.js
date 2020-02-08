class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }

  clear() {
    this.items.length = 0;
  }

  // cost() {
  //   return this.items * this.items.pricePerUnit[2];
  // }

  total() {
    const tot = this.items.reduce(total => {
      return total + mult;
    }, 0);
    return tot;
  }
}

// const cart = new ShoppingCart();
// cart.addItem("eggs", 6, 8);
// cart.addItem("ble", 8, 8);
// cart.addItem("ble", 8, 8);
// //console.log(cart.getItems());
// // console.log(cart.getItems());
// console.log(cart.cost());

module.exports = ShoppingCart;
