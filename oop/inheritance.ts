class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Dog extends Animal {
    public bark(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Max');
dog.bark(); // Woof! Woof!
dog.move(10); // Max moved 10 meters
