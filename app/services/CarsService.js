import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";

class CarsService {
  createCar(carData) {
    console.log('raw car data POJO', carData);
    const newCar = new Car(carData)
    console.log('Car!', newCar);

    const cars = AppState.cars
    cars.push(newCar) // length of an array changing will trigger our observer

    console.log('cars after push', AppState.cars);
  }
}

export const carsService = new CarsService()