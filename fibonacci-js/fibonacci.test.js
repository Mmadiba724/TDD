import { fibonacci } from '../fibonacci.js';
import { assert } from 'chai';

describe('Fibonacci', () => {
    it('should return 0 for input 0', () => {
        assert.equal(fibonacci(0), 0);
    });

    // it('should return 1 for input 1', () => {
    //     assert.equal(fibonacci(1), 1);
    // });

    // it('should return 1 for input 2', () => {
    //     assert.equal(fibonacci(2), 1);
    // });

    // it('should return 2 for input 3', () => {
    //     assert.equal(fibonacci(3), 2);
    // });

    // it('should return 3 for input 4', () => {
    //     assert.equal(fibonacci(4), 3);
    // });

    // it('should return 5 for input 5', () => {
    //     assert.equal(fibonacci(5), 5);
    // });

    // it('should throw an error for negative input', () => {
    //     assert.throws(() => fibonacci(-1), Error, 'Negative numbers are not allowed.');
    // });
});