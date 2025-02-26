import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { loadState, saveState } from "../utils/Store.js";

class CarsService {

  createCar(carData) {

    console.log('raw car data POJO', carData);
    const newCar = new Car(carData)
    console.log('Car!', newCar);

    const cars = AppState.cars
    cars.push(newCar) // length of an array changing will trigger our observer

    console.log('cars after push', AppState.cars);
    this.saveCars()
  }

  deleteCar(carId) {
    const cars = AppState.cars
    // NOTE ALWAYS TRY TO DELETE SOMETHING FROM THE MIDDLE OF THE ARRAY WHEN TESTING SPLICE/FINDINDEX
    const carIndex = cars.findIndex(car => car.id == carId)
    console.log('This is the index', carIndex);
    cars.splice(carIndex, 1)

    this.saveCars()
  }

  saveCars() {
    saveState('cars', AppState.cars)
  }

  loadCars() {
    const carsFromLocalStorage = loadState('cars', [Car])

    if (carsFromLocalStorage.length == 0) {
      AppState.emit('cars') // manually trigger an observer
      return
    }

    AppState.cars = carsFromLocalStorage
  }
}

export const carsService = new CarsService()