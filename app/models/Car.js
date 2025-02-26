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

  get cardHTMLTemplate() {
    return `
     <div class="col-12">
      <div class="shadow bg-light d-flex mb-4">
        <img
          src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg?fill=1:1&resize=1200:*"
          alt="baja" class="car-img">
        <div class="p-3 flex-grow-1">
          <h3>2000 Subaru Baja</h3>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fs-3">$6000</p>
              <p>This car has a clean title approved by <span class="mdi mdi-dog"></span></p>
              <div class="d-flex gap-2 align-items-center">
                <span>Color</span>
                <div class="color-bubble"></div>
              </div>
            </div>
            <div class="fs-5">
              <p>4 Cylinder</p>
              <p>3000 miles</p>
              <p><span class="mdi mdi-car-shift-pattern"></span></p>
              <p><span class="mdi mdi-refresh-auto"></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

// new Car('toyota', 'camry') wack
// new Car({ make: 'toyota', model: 'camry' }) dope