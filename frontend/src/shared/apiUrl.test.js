import { apiUrl } from "./apiUrl";
import { expect } from 'chai';

describe('API URL', () => {
    it('is a valid url', () => {
        const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        var isValidUrl = urlPattern.test(apiUrl);

        expect(isValidUrl).to.equal(true);
    })
})