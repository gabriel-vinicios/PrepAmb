var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someMethod = function () {
        console.log("Método da instância Singleton.");
    };
    return Singleton;
}());
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2);
singleton1.someMethod();
singleton2.someMethod();
