'use strict';

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed

describe('Feature Test', function() {

	var plane
	var airport


// before each test we need to define variable

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

  describe('under normal conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

		it('planes can be instructed to land at an airport', function() {
			plane.land(airport);
			expect(airport.planes()).toContain(plane);
			console.log('test running')
		});


	it('planes can be instructed to takeoff', function() {
			plane.land(airport);
			plane.takeoff();
			expect(airport.planes()).not.toContain(plane);
		});

	});


// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
  describe('under stormy conditions',function(){

    it('blocks takeoff when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });
  });
});
