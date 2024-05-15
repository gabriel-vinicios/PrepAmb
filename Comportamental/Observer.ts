// Subject interface
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }
  
  // Concrete Subject
  class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: number = 0;
  
    attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    detach(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(): void {
      for (const observer of this.observers) {
        observer.update(this.state);
      }
    }
  
    setState(state: number): void {
      this.state = state;
      this.notify();
    }
  }
  
  // Observer interface
  interface Observer {
    update(state: number): void;
  }
  
  // Concrete Observer
  class ConcreteObserver implements Observer {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    update(state: number): void {
      console.log(`Observer ${this.name} recebeu update de estado: ${state}`);
    }
  }
  
  // Usage
  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserver("Observer 1");
  const observer2 = new ConcreteObserver("Observer 2");
  
  subject.attach(observer1);
  subject.attach(observer2);
  
  subject.setState(1);
  subject.setState(2);
  
  subject.detach(observer1);
  
  subject.setState(3);