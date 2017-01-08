webpackJsonp([0],{

/***/ 0:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	exports.Root = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Header = __webpack_require__(/*! ./components/Header */ 178);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Root = exports.Root = function Root() {
	   return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_Header2.default, { subText: 'Welcome to digital consulting' }),
	      _react2.default.createElement(
	         'p',
	         null,
	         'thank you'
	      )
	   );
	};
	
	_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('app'));

/***/ },

/***/ 178:
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Header = function Header(_ref) {
	   var subText = _ref.subText;
	   return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	         'h1',
	         null,
	         'Fateh Inc.'
	      ),
	      _react2.default.createElement(
	         'p',
	         null,
	         subText
	      )
	   );
	};
	
	Header.propTypes = {
	   subText: _react.PropTypes.string.isRequired
	};
	
	exports.default = Header;

/***/ }

});
//# sourceMappingURL=bundle.js.map