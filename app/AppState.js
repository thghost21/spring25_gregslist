import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1996,
      price: 4000,
      mileage: 250000,
      hasCleanTitle: false,
      engineType: '4 cylinder',
      isManualTransmission: true,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1620882814836-88a2c98c0f6d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlhdGF8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'toyota',
      model: 'tacoma',
      year: 1993,
      price: 5000,
      mileage: 175000,
      hasCleanTitle: false,
      engineType: '6 cylinder',
      isManualTransmission: false,
      color: 'blue',
      imgUrl: 'https://images.unsplash.com/photo-1583031849506-4f35952c3fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhY29tYXxlbnwwfHwwfHx8Mg%3D%3D'
    }),
    new Car({
      make: 'porsche',
      model: '911 turbo',
      year: 2018,
      price: 95000,
      mileage: 4000,
      hasCleanTitle: true,
      engineType: '6 cylinder',
      isManualTransmission: true,
      color: 'white',
      imgUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnNjaGV8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'subaru',
      model: 'baja',
      year: 2002,
      price: 16000,
      mileage: 89000,
      hasCleanTitle: true,
      engineType: 'boxer',
      isManualTransmission: false,
      color: 'yellow',
      imgUrl: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg?fill=1:1&resize=1200:*'
    }),
  ]
  houses = [
    new House({ address: '1234 Main Street, Boise ID', year: '2010', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 375000, description: 'modern home', imgUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww' }),
    new House({ address: '1234 Main Street, Boise ID', year: '2010', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 480000, description: 'modern home', imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D' }),
    new House({ address: '1234 Main Street, Boise ID', year: '2020', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 675000, description: 'modern home', imgUrl: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww' }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())