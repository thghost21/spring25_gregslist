export class Car {
  // NOTE this constructor takes in a single object as an argument
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
  }
}

// new Car('toyota', 'camry') wack
// new Car({ make: 'toyota', model: 'camry' }) dope