import { generateId } from "../utils/GenerateId.js";


export class House {
  /**
   * @param {{ address: string; year: number; bedrooms: number; bathrooms: number; sqft: number; price: number; description: string; imgUrl: string; id?: any; }} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.address = data.address
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseHTMLTemplate() {
    return `
      <div class="shadow bg-light d-flex mb-4">
            <img src="${this.imgUrl}"
                  alt="house" class="car-img">
                <div class="p-3 flex-grow-1">
                  <h3>${this.address}</h3>
                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="fs-3">${this.price}</p>
                      <p>${this.description}</p>
                      <div class="d-flex gap-2 align-items-center">
                        <span>${this.sqft}</span>
                      </div>
                    </div>
                    <div class="fs-5">
                      <p>${this.bedrooms} bed / ${this.bathrooms} bath</p>
                    </div>
                  </div>
                </div>
        </div>
    
    `
  }
}
