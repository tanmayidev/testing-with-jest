import { parse } from 'path';
import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
// tests can be written inside 'it' or 'test', here we are using 'test'
    test('first test', () => {
        const result = Utils.toUpperCase('abc');
        //assertion
        expect(result).toBe('ABC');
    });

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
        // expect(expectedQuery).toBe(expectedQuery);     
    });

});