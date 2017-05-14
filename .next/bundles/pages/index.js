
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement("div", null, _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, "Timestamp microservice"), _react2.default.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" })), _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("h1", { className: "header" }, "API Basejump: Timestamp microservice"), _react2.default.createElement("blockquote", null, "User stories:", _react2.default.createElement("ul", null, "1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)"), _react2.default.createElement("ul", null, "2) If it does, it returns both the Unix timestamp and the natural language form of that date."), _react2.default.createElement("ul", null, "3) If it does not contain a date or Unix timestamp, it returns null for those properties.")), _react2.default.createElement("h3", null, "Example usage:"), _react2.default.createElement("code", null, "https://timestamp-ms.herokuapp.com/December%2015,%202015"), _react2.default.createElement("br", null), _react2.default.createElement("code", null, "https://timestamp-ms.herokuapp.com/1450137600"), _react2.default.createElement("h3", null, "Example output:"), _react2.default.createElement("code", null, '{', "\"unix\": 1450137600, \"natural\": \"December 15, 2015\"", '}')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/ubuntu/workspace/timestamp/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ubuntu/workspace/timestamp/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz84NTc4NDExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztrQkFBZTtXQUNmLHFDQUNJLHNCQUFDLDhCQUNHLG1EQUNBLG1FQUFNLEtBQUksY0FBYSxNQUUzQixvSEFBSyxXQUNELHFEQUFJLFdBQVUsWUFHZCwyRkFFSSwyREFFQSx5TkFDQSw0SUFFSix5SUFDQSwrREFBcUUsaUdBQ3JFLG1EQUNBLDRGQUNBLDBEQUNLLE1BREwsS0FJSyw0REFKTDtBQXJCUixFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbjxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UaW1lc3RhbXAgbWljcm9zZXJ2aWNlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICBBUEkgQmFzZWp1bXA6IFRpbWVzdGFtcCBtaWNyb3NlcnZpY2VcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICBVc2VyIHN0b3JpZXM6XG4gICAgICAgICAgICA8dWw+MSkgSSBjYW4gcGFzcyBhIHN0cmluZyBhcyBhIHBhcmFtZXRlciwgYW5kIGl0IHdpbGwgY2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhhdCBzdHJpbmcgXG4gICAgICAgICAgICBjb250YWlucyBlaXRoZXIgYSB1bml4IHRpbWVzdGFtcCBvciBhIG5hdHVyYWwgbGFuZ3VhZ2UgZGF0ZSAoZXhhbXBsZTogSmFudWFyeSAxLCAyMDE2KTwvdWw+XG4gICAgICAgICAgICA8dWw+MikgSWYgaXQgZG9lcywgaXQgcmV0dXJucyBib3RoIHRoZSBVbml4IHRpbWVzdGFtcCBhbmQgdGhlIG5hdHVyYWwgbGFuZ3VhZ2UgZm9ybSBvZiB0aGF0IGRhdGUuPC91bD5cbiAgICAgICAgICAgIDx1bD4zKSBJZiBpdCBkb2VzIG5vdCBjb250YWluIGEgZGF0ZSBvciBVbml4IHRpbWVzdGFtcCwgaXQgcmV0dXJucyBudWxsIGZvciB0aG9zZSBwcm9wZXJ0aWVzLjwvdWw+XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgPGgzPkV4YW1wbGUgdXNhZ2U6PC9oMz5cbiAgICAgICAgPGNvZGU+aHR0cHM6Ly90aW1lc3RhbXAtbXMuaGVyb2t1YXBwLmNvbS9EZWNlbWJlciUyMDE1LCUyMDIwMTU8L2NvZGU+PGJyIC8+XG4gICAgICAgIDxjb2RlPmh0dHBzOi8vdGltZXN0YW1wLW1zLmhlcm9rdWFwcC5jb20vMTQ1MDEzNzYwMDwvY29kZT5cbiAgICAgICAgPGgzPkV4YW1wbGUgb3V0cHV0OjwvaDM+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgeyd7J31cbiAgICAgICAgICAgICAgXCJ1bml4XCI6IDE0NTAxMzc2MDAsXG4gICAgICAgICAgICAgIFwibmF0dXJhbFwiOiBcIkRlY2VtYmVyIDE1LCAyMDE1XCJcbiAgICAgICAgICAgIHsnfSd9XG4gICAgICAgIDwvY29kZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        