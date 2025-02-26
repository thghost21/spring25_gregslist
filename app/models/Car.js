export class Car {
  // NOTE this constructor takes in a single object as an argument
  // NOTE the JS docs are not necessary, but they will give you better intellisense when using this class
  /**
   * @param {{
   * make: string; 
   * model: string; 
   * year: number; 
   * price: number; 
   * mileage: number; 
   * hasCleanTitle: boolean; 
   * engineType: string; 
   * color: string; 
   * isManualTransmission: boolean;
   * imgUrl: string }} data
   */
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.mileage = data.mileage
    this.color = data.color
    this.year = data.year
    this.price = data.price
    this.engineType = data.engineType
    this.hasCleanTitle = data.hasCleanTitle
    this.isManualTransmission = data.isManualTransmission
    this.imgUrl = data.imgUrl
  }
}

// new Car('toyota', 'camry') wack
// new Car({ make: 'toyota', model: 'camry' }) dope