import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS READY 🚗');

    AppState.on('cars', this.drawCars) //observer

    this.drawCars()
  }

  drawCars() {
    const cars = AppState.cars

    let carCardsContent = ''

    cars.forEach(car => carCardsContent += car.cardHTMLTemplate)

    const carListingsElem = document.getElementById('carListings')

    carListingsElem.innerHTML = carCardsContent
  }

  createCarListing() {
    event.preventDefault() // this stops the page from refreshing
    const carFormElem = event.target

    // NOTE pass getFormData a Form HTML Element and it will return you an object
    const rawCarData = getFormData(carFormElem)

    rawCarData.hasCleanTitle = rawCarData.hasCleanTitle == 'on'
    rawCarData.isManualTransmission = rawCarData.isManualTransmission == 'on'

    // NOTE make sure your data is structured correctly before passing it down to the service
    console.log('raw car data', rawCarData);

    carsService.createCar(rawCarData)

    // @ts-ignore
    carFormElem.reset()

    Pop.toast('You just listed a car!')
  }

  deleteCarListing(carId) {
    const confirmed = window.confirm('Are you sure you want to delete this car listing?')

    if (!confirmed) {
      return
    }

    console.log('deleting car with the id of ' + carId);
  }
}