import { generateId } from "../utils/GenerateId";


export class House {
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


}
