"use strict";
// class Book {
//     private name: string = '';
// }
// let mybook = new Book();
// mybook.name = 'JavaScript入門';
var Book = /** @class */ (function () {
    function Book() {
        this._name = '';
    }
    Object.defineProperty(Book.prototype, "name", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var mybook = new Book();
mybook.name = 'JavaScript入門';
