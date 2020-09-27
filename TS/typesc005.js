"use strict";
// class Item {
//     constructor(price, tax=10) {
//         this.tax = tax;
//         if (isFinite(price)) {
//             this.price = price;
//         } else {
//             this.price = 0;
//         }
//     }
//     getTax() {
//         return Math.round(this.price * (this.tax / 100));
//     }
// }
// 以下にに書き換える
var Item = /** @class */ (function () {
    function Item(price, tax) {
        if (tax === undefined) {
            this.tax = 10;
        }
        else {
            this.tax = tax;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    Item.prototype.getTax = function () {
        return Math.round(this.price * (this.tax / 100));
    };
    return Item;
}());
var apple = new Item(180);
console.log(apple.tax);
console.log(apple.price);
