abstract class Vehicle {
    abstract drive(): void;
}

class Car extends Vehicle {
    drive(): void {
        console.log('Driving a car');
    }
}

class Bicycle extends Vehicle {
    drive(): void {
        console.log('Riding a bicycle');
    }
}

const car = new Car();
car.drive(); // Driving a car

const bicycle = new Bicycle();
bicycle.drive(); // Riding a bicycle
