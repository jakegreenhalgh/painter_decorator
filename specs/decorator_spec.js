const assert = require('assert');
const Paint = require('../paint');
const Decorator = require('../decorator');
const Room = require('../room')

describe('Decorator', function() {
    let paint1;
    let paint2;
    let decorator;
    let room

    beforeEach(function() {
        paint1 = new Paint(10)
        paint2 = new Paint (10)
        decorator = new Decorator()
        room = new Room(20)

    })
    it('should start with an empty paint stock', function() {
        const actual = decorator.paint_stock
        assert.deepStrictEqual(actual, [])
    })
    describe("Decorator's Paint", function() {
    it('should be able to add paint to stock', function() {
        decorator.addPaint(paint1)
        const actual = decorator.paint_stock
        assert.deepStrictEqual(actual, [paint1])
    })
    it('should be able to calcualate total paint', function() {
        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        const actual = decorator.totalPaint()
        assert.strictEqual(actual, 20)
    })    
    it('should be able to calculate whether is has enough paint to paint a room', function() {
        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        const actual = decorator.checkPaint(room)
        assert.strictEqual(actual, true)
    })
    it('should be able to paint room if has enough paint in stock', function() {
        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        decorator.paintRoom(room)
        const actual = room.painted
        assert.strictEqual(actual, true);
    })
    it("should be able to remove paint from paint", function() {
        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        decorator.paintRoom(room)
    })
})







})
