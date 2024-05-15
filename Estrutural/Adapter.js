// Adaptee
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return "requisito específico do Adaptee";
    };
    return Adaptee;
}());
// Adapter
var Adapter = /** @class */ (function () {
    function Adapter(adaptee) {
        this.adaptee = adaptee;
    }
    Adapter.prototype.request = function () {
        return "Adapter: ".concat(this.adaptee.specificRequest());
    };
    return Adapter;
}());
// Usage
var adaptee = new Adaptee();
var adapter = new Adapter(adaptee);
console.log(adapter.request());
