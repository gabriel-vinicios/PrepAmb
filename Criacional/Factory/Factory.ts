// Product interface
interface Product {
    operation(): string;
}

// Concrete Product
class ConcreteProduct implements Product {
    operation(): string {
        return "operação do ConcreteProduct";
    }
}

// Creator interface
interface Creator {
    factoryMethod(): Product;
}

// Concrete Creator
class ConcreteCreator implements Creator {
    factoryMethod(): Product {
        return new ConcreteProduct();
    }
}

// Usage
const creator: Creator = new ConcreteCreator();
const product: Product = creator.factoryMethod();
console.log(product.operation());