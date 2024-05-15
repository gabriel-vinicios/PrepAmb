// Target interface
interface Target {
  request(): string;
}

// Adaptee
class Adaptee {
  specificRequest(): string {
    return "requisito específico do Adaptee";
  }
}

// Adapter
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    return `Adapter: ${this.adaptee.specificRequest()}`;
  }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request());