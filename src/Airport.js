'use strict';

function Airport(weather){
this._weather = typeof weather !== 'undefined' ? weather : new Weather();
this._hangar = [];
}

Airport.prototype.planes = function(){
	return this._hangar; };


Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar.pop(plane);
	hello=5;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.isStormy = function() {
	return false;
};
