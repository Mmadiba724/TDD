const assert  = require('assert');
const { facto } = require('../index');

describe('testing factorial', function(){
    it('should test 1!', function() {
        assert.equal(facto(1), 1);
    });
});