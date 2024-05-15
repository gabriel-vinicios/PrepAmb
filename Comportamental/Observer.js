// Concrete Subject
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
        this.state = 0;
    }
    ConcreteSubject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    ConcreteSubject.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.state);
        }
    };
    ConcreteSubject.prototype.setState = function (state) {
        this.state = state;
        this.notify();
    };
    return ConcreteSubject;
}());
// Concrete Observer
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (state) {
        console.log("Observer ".concat(this.name, "recebeu update de estado: ").concat(state));
    };
    return ConcreteObserver;
}());
// Usage
var subject = new ConcreteSubject();
var observer1 = new ConcreteObserver("Observer 1");
var observer2 = new ConcreteObserver("Observer 2");
subject.attach(observer1);
subject.attach(observer2);
subject.setState(1);
subject.setState(2);
subject.detach(observer1);
subject.setState(3);
