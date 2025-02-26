import { AppState } from "../AppState.js";
import { homesService } from "../services/HomesService.js";
import { getFormData } from "../utils/FormHandler.js";


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
  createHomeListing() {
    event.preventDefault()
    console.log('home Listing pressed');

    const homeListingElem = event.target
    const rawHomeListing = getFormData(homeListingElem)
    console.log(rawHomeListing);

    homesService.createHome(rawHomeListing)




  }
}