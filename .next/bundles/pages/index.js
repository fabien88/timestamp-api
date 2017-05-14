
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

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
    return React.createElement("div", null, React.createElement(_head2.default, null, React.createElement("title", null, "Timestamp microservice"), React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" })), React.createElement("div", { className: "container" }, React.createElement("h1", { className: "header" }, "API Basejump: Timestamp microservice"), React.createElement("blockquote", null, "User stories:", React.createElement("ul", null, "1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)"), React.createElement("ul", null, "2) If it does, it returns both the Unix timestamp and the natural language form of that date."), React.createElement("ul", null, "3) If it does not contain a date or Unix timestamp, it returns null for those properties.")), React.createElement("h3", null, "Example usage:"), React.createElement("code", null, "https://timestamp-ms.herokuapp.com/December%2015,%202015"), React.createElement("br", null), React.createElement("code", null, "https://timestamp-ms.herokuapp.com/1450137600"), React.createElement("h3", null, "Example output:"), React.createElement("code", null, '{', "\"unix\": 1450137600, \"natural\": \"December 15, 2015\"", '}')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz82OTc1OWNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7a0JBRWU7V0FDZiwyQkFDSSwwQ0FDSSx5Q0FDQSx5REFBTSxLQUFJLGNBQWEsTUFFM0IsMEdBQUssV0FDRCwyQ0FBSSxXQUFVLFlBR2QsaUZBRUksaURBRUEsK01BQ0Esa0lBRUosK0hBQ0EscURBQXFFLHVGQUNyRSx5Q0FDQSxrRkFDQSxnREFDSyxNQURMLEtBSUssNERBSkwiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRpbWVzdGFtcCBtaWNyb3NlcnZpY2U8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy42L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIEFQSSBCYXNlanVtcDogVGltZXN0YW1wIG1pY3Jvc2VydmljZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICAgIFVzZXIgc3RvcmllczpcbiAgICAgICAgICAgIDx1bD4xKSBJIGNhbiBwYXNzIGEgc3RyaW5nIGFzIGEgcGFyYW1ldGVyLCBhbmQgaXQgd2lsbCBjaGVjayB0byBzZWUgd2hldGhlciB0aGF0IHN0cmluZyBcbiAgICAgICAgICAgIGNvbnRhaW5zIGVpdGhlciBhIHVuaXggdGltZXN0YW1wIG9yIGEgbmF0dXJhbCBsYW5ndWFnZSBkYXRlIChleGFtcGxlOiBKYW51YXJ5IDEsIDIwMTYpPC91bD5cbiAgICAgICAgICAgIDx1bD4yKSBJZiBpdCBkb2VzLCBpdCByZXR1cm5zIGJvdGggdGhlIFVuaXggdGltZXN0YW1wIGFuZCB0aGUgbmF0dXJhbCBsYW5ndWFnZSBmb3JtIG9mIHRoYXQgZGF0ZS48L3VsPlxuICAgICAgICAgICAgPHVsPjMpIElmIGl0IGRvZXMgbm90IGNvbnRhaW4gYSBkYXRlIG9yIFVuaXggdGltZXN0YW1wLCBpdCByZXR1cm5zIG51bGwgZm9yIHRob3NlIHByb3BlcnRpZXMuPC91bD5cbiAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICA8aDM+RXhhbXBsZSB1c2FnZTo8L2gzPlxuICAgICAgICA8Y29kZT5odHRwczovL3RpbWVzdGFtcC1tcy5oZXJva3VhcHAuY29tL0RlY2VtYmVyJTIwMTUsJTIwMjAxNTwvY29kZT48YnIgLz5cbiAgICAgICAgPGNvZGU+aHR0cHM6Ly90aW1lc3RhbXAtbXMuaGVyb2t1YXBwLmNvbS8xNDUwMTM3NjAwPC9jb2RlPlxuICAgICAgICA8aDM+RXhhbXBsZSBvdXRwdXQ6PC9oMz5cbiAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICB7J3snfVxuICAgICAgICAgICAgICBcInVuaXhcIjogMTQ1MDEzNzYwMCxcbiAgICAgICAgICAgICAgXCJuYXR1cmFsXCI6IFwiRGVjZW1iZXIgMTUsIDIwMTVcIlxuICAgICAgICAgICAgeyd9J31cbiAgICAgICAgPC9jb2RlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        