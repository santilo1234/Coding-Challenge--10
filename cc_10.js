//Task 1

class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
        }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log('Insufficient stock');
        }
    }
}


//Test Cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


//Task 2
class Order {
    constructor (orderID, product, quantity) {
        if(product.stock >= quantity) {
            this.orderID = orderID;
            this.product = product;
            this.quantity = quantity;
            product.updateStock(quantity);
        } else {
            console.log ("Order cannot be placed due to insufficient stock");
        }

    }

    getOrderDetails() {
        this.totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}


//Test Cases
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)


