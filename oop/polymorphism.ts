class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        // This method can be overridden in subclasses
    }
}

class Dog extends Animal {
    public makeSound(): void {
        console.log('Woof! Woof!');
    }
}

class Cat extends Animal {
    public makeSound(): void {
        console.log('Meow!');
    }
}

const dog = new Dog('Max');
dog.makeSound(); // Woof! Woof!

const cat = new Cat('Molly');
cat.makeSound(); // Meow!
