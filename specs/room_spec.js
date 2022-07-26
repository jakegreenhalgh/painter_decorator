const assert = require('assert');
const Room = require('../room');

describe('Room', function() {
    let room;

    beforeEach(function() {
        room = new Room(20)
    })
    it('should have an area in square meters', function() {
        const actual = room.area
        assert.strictEqual(actual, 20)
    })
    it('should start not painted', function() {
        const actual = room.painted
        assert.strictEqual(actual, false)
    })})

