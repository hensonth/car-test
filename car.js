var Car = function (speed, color, convertible) {
  this.speed = speed;
  this.color = color;
  this.convertible = convertible;
  this.accelerate = function (num) {
    this.speed = this.speed + num;
    return speed
}}

// Car.prototype.accelerate = function (num) {
//   this.speed = this.speed + num
//   return speed
// }

module.exports = Car
