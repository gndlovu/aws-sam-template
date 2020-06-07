/* eslint-disable no-undef */
'use strict';

const items = require('../../../src/handlers/Items');
const chai = require('chai');
const expect = chai.expect;
var event = { httpMethod: 'GET' };

describe('getAllItemsFunction test', function () {
    it('verifies successful response', async () => {
        const result = await items.getAllItemsHandler(event);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        const response = JSON.parse(result.body);

        expect(response[0]).to.be.an('object');
        expect(response[0].id).to.be.equal(1);
        expect(response[0].title).to.be.equal('Some title 1');
        expect(response[0].blah).to.be.an('string');
    });
});
