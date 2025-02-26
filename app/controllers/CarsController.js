import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS READY 🚗');
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


  }
}