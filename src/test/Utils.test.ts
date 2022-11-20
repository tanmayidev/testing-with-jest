import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
// tests can be written inside 'it' or 'test', here we are using 'test'
    test('first test', () => {
        const result = Utils.toUpperCase('abc');
        //assertion
        expect(result).toBe('ABC');
    });

});