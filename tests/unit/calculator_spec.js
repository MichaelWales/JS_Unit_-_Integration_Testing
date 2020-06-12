var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 to 4 and get 5', function() {
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  });

  it('should subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  });

  it('should multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  });

  it('should divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  });

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.equal(123, calculator.runningTotal)
  });

  it('should chain multiple operations together', function() {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(9, calculator.previousTotal)
  });

  it('should clear the running total without affecting the calulation', function() {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.previousTotal, 3);
    assert.equal(calculator.runningTotal, 0);
  });

});
