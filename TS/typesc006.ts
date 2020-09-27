// class Book {
//     private name: string = '';
// }

// let mybook = new Book();
// mybook.name = 'JavaScript入門';

class Book {
    private _name: string = '';

    set name(value: string) {
        this._name = value;
    }
}

let mybook = new Book();
mybook.name = 'JavaScript入門';





