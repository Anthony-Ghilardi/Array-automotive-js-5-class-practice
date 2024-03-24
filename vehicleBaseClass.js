class Vehicle {
    constructor(color, type, driveTrain, year, passenger){
        this.color = color;
        this.type = type;
        this.driveTrain = driveTrain;
        this.year = year;
        this.passenger = passenger;
    }
    showVehicle(){
        console.log(`Color: ${this.color}, Type: ${this.type}, Drivetrain: ${this.driveTrain}, Year: ${this.year}, Max passeners: ${this.passenger}`)
    }
}

let car1 = new Vehicle("Blue", "SUV", "4WD", "2024", "6");
let car2 = new Vehicle("Red", "Truck", "4WD", "2024", "5");
let car3 = new Vehicle("Orange", "Sedan", "2WD", "2024", "5");
let car4 = new Vehicle("Purple", "Compact-SUV", "4WD", "2024", "5");
let car5 = new Vehicle("Midnight", "Sedan", "2WD", "2024", "5");

car1.showVehicle();
car2.showVehicle();
car3.showVehicle();
car4.showVehicle();
car5.showVehicle();