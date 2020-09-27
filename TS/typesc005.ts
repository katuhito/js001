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

class Item {
    public tax: number;
    public price: number;

    constructor(price: number, tax?: number) {
        if (tax === undefined) {
            this.tax = 10;
        } else {
            this.tax = tax;
        }
        if (isFinite(price)) {
            this.price = price;
        } else {
            this.price = 0;
        }
    }

    public getTax(): number {
        return Math.round(this.price * (this.tax / 100));
    }
}

let apple: Item = new Item(180);
console.log(apple.tax);
console.log(apple.price);



