import { parse } from 'path';
import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
// tests can be written inside 'it' or 'test', here we are using 'test'


    /* Jest hooks: beforeAll, beforeEach, afterEach, afterAll */
    beforeEach(() => {
        console.log('before each'); // prints before each test is execute
    })

    beforeAll(() => {
        console.log('before all'); // prints once before all test cases are executed
    })

    test.skip('first test', () => { 
        // test.skip with skip execution of this test ; test.only will execute only this test
        const result = Utils.toUpperCase('abc');
        //assertion
        expect(result).toBe('ABC');
    });


    /* Assertions: expect toBe and toEqual */
    test('parse simple URL', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:');
        // if .toBe() used, we get  "If it should pass with deep equality, replace 'toBe' with 'toEqual' "
        // toEqual is used for objects (for primitives we use toBe)
        expect(parsedUrl.query).toEqual({});
    });

    test('parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);      
        //expect(expectedQuery).toBe(expectedQuery);     
    });

    //test.todo('test invalid URL') 
    // the above can be used when you want to write a test later and it will not throw an error

    /* testing errors: wrapping functions, toThrow, toBeInstanceOf, toHaveProperty */
    test('test invalid URL', () => {
        function expectError() {
            Utils.parseUrl('');
        }
        expect(expectError).toThrowError('Empty url');
    });

    test('test invalid URL with arrow function', () => {
        expect(() => {
            Utils.parseUrl('')
        }).toThrowError('Empty url');
    });

    test.only('test invalid URL with try catch', () => {
        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Empty url!');
        }
    });

});