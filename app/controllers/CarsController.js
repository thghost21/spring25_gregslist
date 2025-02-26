import { AppState } from "../AppState.js";

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
    console.log('creating car listing!');
  }
}