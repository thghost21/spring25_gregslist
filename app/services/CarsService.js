import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { saveState } from "../utils/Store.js";

class CarsService {

  createCar(carData) {
    console.log('raw car data POJO', carData);
    const newCar = new Car(carData)
    console.log('Car!', newCar);

    const cars = AppState.cars
    cars.push(newCar) // length of an array changing will trigger our observer

    console.log('cars after push', AppState.cars);
  }

  deleteCar(carId) {
    const cars = AppState.cars
    // NOTE ALWAYS TRY TO DELETE SOMETHING FROM THE MIDDLE OF THE ARRAY WHEN TESTING SPLICE/FINDINDEX
    const carIndex = cars.findIndex(car => car.id == carId)
    console.log('This is the index', carIndex);
    cars.splice(carIndex, 1)
  }


}

export const carsService = new CarsService()