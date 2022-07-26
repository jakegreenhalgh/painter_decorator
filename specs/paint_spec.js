const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function() {
    let paint;

    beforeEach(function() {
        paint = new Paint(10)
        //have a number of litres of paint
        //be able to check if it is empty
        //be able to empty itself of paint

    })
    it('should have a number of litres of paint', function() {
        const actual = paint.capacity
        assert.strictEqual(actual, 10)
    })

})
