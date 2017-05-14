"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseReq = undefined;

var _dateformat = require("dateformat");

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseReq = exports.parseReq = function parseReq(req) {
    try {
        var param = decodeURI(req.url.substr(1));
        var date = new Date(Date.parse(param));
        if (param > 0) {
            date = new Date(param * 1000);
        }

        return {
            natural: (0, _dateformat2.default)(date, "mmmm dd, yyyy"),
            unix: date.getTime() / 1000
        };
    } catch (e) {
        return {
            natural: null,
            unix: null
        };
    }
};