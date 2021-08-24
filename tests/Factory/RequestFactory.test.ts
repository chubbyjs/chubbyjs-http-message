import { describe, expect, test } from '@jest/globals';
import RequestFactory from '../../src/Factory/RequestFactory';
import Request from '../../src/Request';
import Uri from '../../src/Uri';

describe('RequestFactory', () => {
    describe('createRequest', () => {
        test('with uri as string', () => {
            const requestFactory = new RequestFactory();

            const request = requestFactory.createRequest('POST', 'http://www.example.com/test');

            expect(request).toBeInstanceOf(Request);
            expect(request.getMethod()).toBe('POST');
            expect(request.getUri().toString()).toBe('http://www.example.com/test');
        });

        test('with uri as uri', () => {
            const requestFactory = new RequestFactory();

            const request = requestFactory.createRequest('POST', Uri.fromString('http://www.example.com/test'));

            expect(request).toBeInstanceOf(Request);
            expect(request.getMethod()).toBe('POST');
            expect(request.getUri().toString()).toBe('http://www.example.com/test');
        });
    });
});
