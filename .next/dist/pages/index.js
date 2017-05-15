"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    return _react2.default.createElement("div", null, console.log(req), _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, "Timestamp microservice"), _react2.default.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" })), _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("h1", { className: "header" }, "API Basejump: Timestamp microservice"), _react2.default.createElement("blockquote", null, "User stories:", _react2.default.createElement("ul", null, "1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)"), _react2.default.createElement("ul", null, "2) If it does, it returns both the Unix timestamp and the natural language form of that date."), _react2.default.createElement("ul", null, "3) If it does not contain a date or Unix timestamp, it returns null for those properties.")), _react2.default.createElement("h3", null, "Example usage:"), _react2.default.createElement("code", null, "https://timestamp-ms.herokuapp.com/December%2015,%202015"), _react2.default.createElement("br", null), _react2.default.createElement("code", null, "https://timestamp-ms.herokuapp.com/1450137600"), _react2.default.createElement("h3", null, "Example output:"), _react2.default.createElement("code", null, '{', "\"unix\": 1450137600, \"natural\": \"December 15, 2015\"", '}')));
};