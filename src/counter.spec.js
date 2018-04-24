import { increaseCount, reducer } from './counter';

describe('Counter', function() {
    it('should have a default state', function() {
        const result = reducer();
        expect(result.count).toEqual(0);
    });

    it('should increase the count', function() {
        const action = increaseCount();
        const result = reducer(undefined, action);
        expect(result.count).toEqual(1);
    });

    it('should increase the count by custom count value', function() {
        const action = increaseCount(5);
        const result = reducer(undefined, action);
        expect(result.count).toEqual(5);
    });
});