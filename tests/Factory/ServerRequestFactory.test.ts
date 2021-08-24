import { describe, expect, test } from '@jest/globals';
import ServerRequestFactory from '../../src/Factory/ServerRequestFactory';
import ServerRequest from '../../src/ServerRequest';
import Uri from '../../src/Uri';

describe('ServerRequestFactory', () => {
    describe('createRequest', () => {
        test('with uri as string', () => {
            const serverRequestFactory = new ServerRequestFactory();

            const request = serverRequestFactory.createServerRequest('POST', 'http://www.example.com/test');

            expect(request).toBeInstanceOf(ServerRequest);
            expect(request.getMethod()).toBe('POST');
            expect(request.getUri().toString()).toBe('http://www.example.com/test');
        });

        test('with uri as uri', () => {
            const serverRequestFactory = new ServerRequestFactory();

            const request = serverRequestFactory.createServerRequest(
                'POST',
                Uri.fromString('http://www.example.com/test'),
            );

            expect(request).toBeInstanceOf(ServerRequest);
            expect(request.getMethod()).toBe('POST');
            expect(request.getUri().toString()).toBe('http://www.example.com/test');
        });
    });
});
