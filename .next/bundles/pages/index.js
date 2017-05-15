
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

exports.default = function (req) {
    return _react2.default.createElement("div", null, console.log(req), _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, "Timestamp microservice"), _react2.default.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" })), _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("h1", { className: "header" }, "API Basejump: Timestamp microservice"), _react2.default.createElement("blockquote", null, "User stories:", _react2.default.createElement("ul", null, "1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)"), _react2.default.createElement("ul", null, "2) If it does, it returns both the Unix timestamp and the natural language form of that date."), _react2.default.createElement("ul", null, "3) If it does not contain a date or Unix timestamp, it returns null for those properties.")), _react2.default.createElement("h3", null, "Example usage:"), _react2.default.createElement("code", null, "https://timestamp-ms.herokuapp.com/December%2015,%202015"), _react2.default.createElement("br", null), _react2.default.createElement("code", null, "https://timestamp-ms.herokuapp.com/1450137600"), _react2.default.createElement("h3", null, "Example output:"), _react2.default.createElement("code", null, '{', "\"unix\": 1450137600, \"natural\": \"December 15, 2015\"", '}')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9iNWNkZDI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztrQkFBZSxVQUFDLEtBQUQ7V0FDZixxQ0FDQyxjQUFRLElBQ0wsc0JBQUMsOEJBQ0csbURBQ0EsbUVBQU0sS0FBSSxjQUFhLE1BRTNCLG9IQUFLLFdBQ0QscURBQUksV0FBVSxZQUdkLDJGQUVJLDJEQUVBLHlOQUNBLDRJQUVKLHlJQUNBLCtEQUFxRSxpR0FDckUsbURBQ0EsNEZBQ0EsMERBQ0ssTUFETCxLQUlLLDREQUpMO0FBdEJSLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSkgPT4gKFxuPGRpdj5cbntjb25zb2xlLmxvZyhyZXEpfVxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGltZXN0YW1wIG1pY3Jvc2VydmljZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgQVBJIEJhc2VqdW1wOiBUaW1lc3RhbXAgbWljcm9zZXJ2aWNlXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICAgICAgVXNlciBzdG9yaWVzOlxuICAgICAgICAgICAgPHVsPjEpIEkgY2FuIHBhc3MgYSBzdHJpbmcgYXMgYSBwYXJhbWV0ZXIsIGFuZCBpdCB3aWxsIGNoZWNrIHRvIHNlZSB3aGV0aGVyIHRoYXQgc3RyaW5nIFxuICAgICAgICAgICAgY29udGFpbnMgZWl0aGVyIGEgdW5peCB0aW1lc3RhbXAgb3IgYSBuYXR1cmFsIGxhbmd1YWdlIGRhdGUgKGV4YW1wbGU6IEphbnVhcnkgMSwgMjAxNik8L3VsPlxuICAgICAgICAgICAgPHVsPjIpIElmIGl0IGRvZXMsIGl0IHJldHVybnMgYm90aCB0aGUgVW5peCB0aW1lc3RhbXAgYW5kIHRoZSBuYXR1cmFsIGxhbmd1YWdlIGZvcm0gb2YgdGhhdCBkYXRlLjwvdWw+XG4gICAgICAgICAgICA8dWw+MykgSWYgaXQgZG9lcyBub3QgY29udGFpbiBhIGRhdGUgb3IgVW5peCB0aW1lc3RhbXAsIGl0IHJldHVybnMgbnVsbCBmb3IgdGhvc2UgcHJvcGVydGllcy48L3VsPlxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgIDxoMz5FeGFtcGxlIHVzYWdlOjwvaDM+XG4gICAgICAgIDxjb2RlPmh0dHBzOi8vdGltZXN0YW1wLW1zLmhlcm9rdWFwcC5jb20vRGVjZW1iZXIlMjAxNSwlMjAyMDE1PC9jb2RlPjxiciAvPlxuICAgICAgICA8Y29kZT5odHRwczovL3RpbWVzdGFtcC1tcy5oZXJva3VhcHAuY29tLzE0NTAxMzc2MDA8L2NvZGU+XG4gICAgICAgIDxoMz5FeGFtcGxlIG91dHB1dDo8L2gzPlxuICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIHsneyd9XG4gICAgICAgICAgICAgIFwidW5peFwiOiAxNDUwMTM3NjAwLFxuICAgICAgICAgICAgICBcIm5hdHVyYWxcIjogXCJEZWNlbWJlciAxNSwgMjAxNVwiXG4gICAgICAgICAgICB7J30nfVxuICAgICAgICA8L2NvZGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        