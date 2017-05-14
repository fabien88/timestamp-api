"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
    return React.createElement("div", null, React.createElement(_head2.default, null, React.createElement("title", null, "Timestamp microservice"), React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" })), React.createElement("div", { className: "container" }, React.createElement("h1", { className: "header" }, "API Basejump: Timestamp microservice"), React.createElement("blockquote", null, "User stories:", React.createElement("ul", null, "1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)"), React.createElement("ul", null, "2) If it does, it returns both the Unix timestamp and the natural language form of that date."), React.createElement("ul", null, "3) If it does not contain a date or Unix timestamp, it returns null for those properties.")), React.createElement("h3", null, "Example usage:"), React.createElement("code", null, "https://timestamp-ms.herokuapp.com/December%2015,%202015"), React.createElement("br", null), React.createElement("code", null, "https://timestamp-ms.herokuapp.com/1450137600"), React.createElement("h3", null, "Example output:"), React.createElement("code", null, '{', "\"unix\": 1450137600, \"natural\": \"December 15, 2015\"", '}')));
};