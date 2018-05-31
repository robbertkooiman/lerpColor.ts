'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('colorLerp function test', () => {
    it('should return #7f7f7f', () => {
        var result = index.lerpColor('#000000', '#ffffff', 0.5);
        expect(result).to.equal('#7f7f7f');
    });
});