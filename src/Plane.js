'use strict';



function Plane() {
}
Plane.prototype.land = function(airport){
airport.clearForLanding(this);
this._location = airport;
};

Plane.prototype.takeoff = function(airport){
this._location.clearForTakeOff('');
};

// FizzBuzz.prototype.play = function(number) {

// // return this

// if (this.isDivisibleBy(15, number)) {
//     return 'fizzbuzz';
//  }

// if (this.isDivisibleBy(5, number)) {
// 		return 'buzz';
// }

// if (this.isDivisibleBy(3, number)) {
// 		return 'fizz';
// }

// return number;

// };


// FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
// 	return number % divisor === 0
// }

// //  !!!!!!!!!!!!!!!!!
// // 
// // To see what you're doing in the console run this code
// // FizzBuzz.prototype.printOneToHundred = function() {
// // for (var i = 1; i <= 100; i++) {
// //   console.log(this.play(i));
// // } 
// // }
// // !!!!!!!!!!!!