
class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {

        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Método da instância Singleton.");
    }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2);

singleton1.someMethod();
singleton2.someMethod();
