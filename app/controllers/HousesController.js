import { AppState } from "../AppState.js";


export class HousesController {
  constructor() {
    this.drawHouses()
    console.log('im working');

  }

  drawHouses() {
    let houses = AppState.houses
    let houseHTML = ''

    houses.forEach(house => houseHTML += house.houseHTMLTemplate)

    const houseHTMLElem = document.getElementById('houseCards')
    houseHTMLElem.innerHTML = houseHTML
  }
}