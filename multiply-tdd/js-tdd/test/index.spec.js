const assert = require('assert');
const { multiply } = require('../index');


describe('test multiply', function() {

    it('should test 1 by 1', function() {
        assert.equal(multiply(1, 1), 1);
    })
    it('should test 3 by 3', function() {
        assert.equal(multiply(3, 3), 9);
    })
    it('should test 4 by 4', function() {
        assert.equal(multiply(4, 4), 16);
    })
    it('should test 23 by 45', function() {
        assert.equal(multiply(23, 45), 23*45);
    })
})