/*!
 * node-jsonp - test/index.test.js
 * Updated by:
 *    Nenad Petkovic
 * Original author:
 *    ngot <zhuanghengfei@gmail.com>
 */

'use strict';

/**
 * Module dependencies.
 */

const JSONP = require('../');
const querystring = require('querystring');
require('should');

// See http://doc.jsfiddle.net/use/echo.html
const ENDPOINT = 'http://jsfiddle.net/echo/jsonp/';

describe('index.js', function () {
    it('querystring jsonp', function (done) {
        let obj = {
            a: 'a',
            b: 'b',
        };
        let qs = querystring.encode(obj);
        JSONP(ENDPOINT + '?' + qs, function (res) {
            res.should.eql(obj);
            done();
        });
    });

    it('param jsonp', function (done) {
        let obj = {
            a: 'a',
            b: 'b',
        };
        JSONP(ENDPOINT, obj, function (res) {
            res.should.eql(obj);
            done();
        });
    });

    it('method', function (done) {
        let obj = {
            a: 'a',
            b: 'b',
        };
        JSONP(ENDPOINT, obj, 'callback', function (res) {
            res.should.eql(obj);
            done();
        });
    });
});
