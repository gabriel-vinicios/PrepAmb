// Concrete Product
var ConcreteProduct = /** @class */ (function () {
    function ConcreteProduct() {
    }
    ConcreteProduct.prototype.operation = function () {
        return "operação do ConcreteProduct";
    };
    return ConcreteProduct;
}());

// Concrete Creator
var ConcreteCreator = /** @class */ (function () {
    function ConcreteCreator() {
    }
    ConcreteCreator.prototype.factoryMethod = function () {
        return new ConcreteProduct();
    };
    return ConcreteCreator;
}());
// Usage
var creator = new ConcreteCreator();
var product = creator.factoryMethod();
console.log(product.operation());
