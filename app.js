var fromCar = require('./car')

var yellowCar = new fromCar(0, 'yellow', true)
var redCar = new fromCar(0, 'red', true)

// yellowCar.accelerate(20)

// console.log('yellowCar speed is ' + yellowCar.speed)

yellowCar.accelerate(50)

console.log('yellowCar new speed is ' + yellowCar.speed)

yellowCar.setColor('black')

console.log('yellowCar new color is ' + yellowCar.color)
