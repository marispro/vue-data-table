(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DataTable"] = factory();
	else
		root["DataTable"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1e38":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "20d1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.js": "3fab",
	"./es.js": "34c1",
	"./pt-br.js": "cd52"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "20d1";

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "270f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "2e43":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	perPageText: "Mostrando :entries datos",
	infoText: "Mostrando :first hasta :last de :total datos",
	infoFilteredText: "Mostrando :first hasta :last de :filtered (filtrado de :total datos)",
	nextButtonText: "Siguiente",
	previousButtonText: "Anterior",
	paginationSearchText: "Ir a la página",
	paginationSearchButtonText: "IR",
	searchText: "buscar:",
	emptyTableText: "No se encontraron datos que coincidan con la búsqueda",
	downloadText: "exportar cómo:",
	downloadButtonText: "DESCARGAR"
});


/***/ }),

/***/ "3532":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3fab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	perPageText: "Show :entries entries",
	infoText: "Showing :first to :last of :total entries",
	infoFilteredText: "Showing :first to :last of :filtered (filtered from :total entries)",
	nextButtonText: "Next",
	previousButtonText: "Previous",
	paginationSearchText: "Go to page",
	paginationSearchButtonText: "GO",
	searchText: "search:",
	emptyTableText: "No matching records found",
	downloadText: "export as:",
	downloadButtonText: "DOWNLOAD"
});


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4e64":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "55b0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var classof = __webpack_require__("f5df");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5bce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_PerPage_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1e38");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_PerPage_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_PerPage_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "67c7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var requireObjectCoercible = __webpack_require__("1d80");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "813e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_Table_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eaad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_Table_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_Table_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "81f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_ExportData_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("67c7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_ExportData_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_ExportData_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "87a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SortingIndex_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3532");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SortingIndex_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SortingIndex_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8874":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SearchFilter_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4e64");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SearchFilter_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SearchFilter_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9907":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_DataTable_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("270f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_DataTable_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_DataTable_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var hasOwn = __webpack_require__("1a2d");
var inheritIfRequired = __webpack_require__("7156");
var isPrototypeOf = __webpack_require__("3a9b");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var thisNumberValue = __webpack_require__("408a");
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb7a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cd52":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	perPageText: "Exibindo :entries dados",
	infoText: "Exibindo :first até :last de :total dados",
	infoFilteredText: "Exibindo :first até :last de :filtered (filtrado de :total dados)",
	nextButtonText: "Próximo",
	previousButtonText: "Anterior",
	paginationSearchText: "Ir para página",
	paginationSearchButtonText: "IR",
	searchText: "pesquisar:",
	emptyTableText: "Nenhum dado correspondente à pesquisa foi encontrado",
	downloadText: "exportar como:",
	downloadButtonText: "BAIXAR"
});


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("e330");
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d704":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SortingIcon_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb7a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SortingIcon_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_SortingIcon_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e57f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_EntriesInfo_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2e43");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_EntriesInfo_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_EntriesInfo_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "eaad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DataTable", function() { return /* reexport */ DataTable; });
__webpack_require__.d(__webpack_exports__, "languageServiceProvider", function() { return /* reexport */ languageServiceProvider; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataTable.vue?vue&type=template&id=10672964&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table"},[(_vm.showPerPage)?_c('data-table-per-page',_vm._b({on:{"set-per-page":_vm.setPerPageFromUserInput}},'data-table-per-page',_vm.propsPerPage,false)):_vm._e(),(_vm.showSearchFilter)?_c('data-table-search-filter',_vm._b({on:{"set-search":_vm.setSearch}},'data-table-search-filter',_vm.propsSearchFilter,false)):_vm._e(),_c('data-table-table',_vm._b({on:{"sort-column":_vm.sortColumn}},'data-table-table',_vm.propsTable,false)),(_vm.showPagination)?_c('data-table-pagination',_vm._b({on:{"set-page":_vm.setPage}},'data-table-pagination',_vm.propsPagination,false)):_vm._e(),(_vm.showDownloadButton)?_c('data-table-export-data',_vm._b({},'data-table-export-data',_vm.propsExportData,false)):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DataTable.vue?vue&type=template&id=10672964&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntriesInfo/EntriesInfo.vue?vue&type=template&id=05052353&
var EntriesInfovue_type_template_id_05052353_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-info",staticStyle:{"padding-top":"10px"}},[_vm._v(" "+_vm._s(_vm.entriesInfoText)+" ")])}
var EntriesInfovue_type_template_id_05052353_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EntriesInfo/EntriesInfo.vue?vue&type=template&id=05052353&

// CONCATENATED MODULE: ./src/components/EntriesInfo/EntriesInfo.js?vue&type=script&lang=js&
/* harmony default export */ var EntriesInfovue_type_script_lang_js_ = ({
	name: "DataTableEntriesInfo",
	props: {
		entriesInfoText: {
			type: String,
			required: true
		}
	}
});

// CONCATENATED MODULE: ./src/components/EntriesInfo/EntriesInfo.js?vue&type=script&lang=js&
 /* harmony default export */ var EntriesInfo_EntriesInfovue_type_script_lang_js_ = (EntriesInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/EntriesInfo/EntriesInfo.scss?vue&type=style&index=0&lang=scss&
var EntriesInfovue_type_style_index_0_lang_scss_ = __webpack_require__("e57f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/EntriesInfo/EntriesInfo.vue






/* normalize component */

var component = normalizeComponent(
  EntriesInfo_EntriesInfovue_type_script_lang_js_,
  EntriesInfovue_type_template_id_05052353_render,
  EntriesInfovue_type_template_id_05052353_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EntriesInfo = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PerPage/PerPage.vue?vue&type=template&id=df2b114c&
var PerPagevue_type_template_id_df2b114c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-per-page"},[_c('span',[_vm._v(_vm._s(_vm.textBeforeOptions))]),_c('select',{domProps:{"value":_vm.currentPerPage},on:{"input":function($event){return _vm.$emit('set-per-page')}}},_vm._l((_vm.perPageSizes),function(length,i){return _c('option',{key:i,domProps:{"value":length}},[_vm._v(" "+_vm._s(length)+" ")])}),0),_c('span',[_vm._v(_vm._s(_vm.textAfterOptions))])])}
var PerPagevue_type_template_id_df2b114c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PerPage/PerPage.vue?vue&type=template&id=df2b114c&

// CONCATENATED MODULE: ./src/components/PerPage/PerPage.js?vue&type=script&lang=js&
/* harmony default export */ var PerPagevue_type_script_lang_js_ = ({
	name: "DataTablePerPage",
	computed: {
		textBeforeOptions() {
			return this.perPageText.split(":entries")[0].trim();
		},
		textAfterOptions() {
			return (this.perPageText.split(":entries")[1] || "").trim();
		}
	},
	methods: {
		stringNotEmpty(string) {
			return string !== "";
		}
	},
	props: {
		perPageText: {
			type: String,
			required: true
		},
		currentPerPage: {
			type: Number,
			required: true
		},
		perPageSizes: {
			type: Array,
			required: true
		}
	}
});

// CONCATENATED MODULE: ./src/components/PerPage/PerPage.js?vue&type=script&lang=js&
 /* harmony default export */ var PerPage_PerPagevue_type_script_lang_js_ = (PerPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/PerPage/PerPage.scss?vue&type=style&index=0&lang=scss&
var PerPagevue_type_style_index_0_lang_scss_ = __webpack_require__("5bce");

// CONCATENATED MODULE: ./src/components/PerPage/PerPage.vue






/* normalize component */

var PerPage_component = normalizeComponent(
  PerPage_PerPagevue_type_script_lang_js_,
  PerPagevue_type_template_id_df2b114c_render,
  PerPagevue_type_template_id_df2b114c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PerPage = (PerPage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExportData/ExportData.vue?vue&type=template&id=09f32b83&
var ExportDatavue_type_template_id_09f32b83_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-export-data"},[_c('span',[_vm._v(_vm._s(_vm.downloadText))]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedExport),expression:"selectedExport"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selectedExport=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.allowedExports),function(exportType,i){return _c('option',{key:i,domProps:{"value":exportType}},[_vm._v(" "+_vm._s(exportType)+" ")])}),0),_c('button',{staticClass:"btn btn-primary",on:{"click":function($event){return _vm.download()}}},[_vm._v(" "+_vm._s(_vm.downloadButtonText)+" ")])])}
var ExportDatavue_type_template_id_09f32b83_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ExportData/ExportData.vue?vue&type=template&id=09f32b83&

// CONCATENATED MODULE: ./node_modules/export-from-json/dist/esm/utils.js
function isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
}
function assert(condition, msg) {
    if (!condition)
        throw new Error(msg);
}
function getValues(data) {
    return Object.keys(data).map(function (key) { return data[key]; });
}
function getKeys(data) {
    return Object.keys(data);
}
function getEntries(data) {
    return Object.keys(data).map(function (key) { return [key, data[key]]; });
}
function normalizeFileName(fileName, extension, fileNameFormatter) {
    var suffix = '.' + extension;
    var extensionPattern = new RegExp("(\\" + extension + ")?$");
    return fileNameFormatter(fileName).replace(extensionPattern, suffix);
}
function normalizeXMLName(name) {
    '555xmlHello .  world!'.trim().replace(/^([0-9,;]|(xml))+/, '');
    return name.replace(/[^_a-zA-Z 0-9:\-\.]/g, '').replace(/^([ 0-9-:\-\.]|(xml))+/i, '').replace(/ +/g, '-');
}
function indent(spaces) {
    return Array(spaces + 1).join(' ');
}
function stripHTML(text) {
    return text.replace(/([<>&])/g, function (_, $1) {
        switch ($1) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return '';
        }
    });
}

// CONCATENATED MODULE: ./node_modules/export-from-json/dist/esm/processors.js
function generateDataURI(content, type, byBlob) {
    switch (type) {
        case 'txt': {
            var blobType = 'text/plain;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'css': {
            var blobType = 'text/css;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'html': {
            var blobType = 'text/html;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'json': {
            var blobType = 'text/json;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'csv': {
            var blobType = 'text/csv;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'xls': {
            var blobType = 'text/application/vnd.ms-excel;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'xml': {
            var blobType = 'text/application/xml;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        default: {
            return '';
        }
    }
}
function downloadFile(content, type, fileName, byBlob) {
    if (fileName === void 0) { fileName = 'download'; }
    if (byBlob === void 0) { byBlob = true; }
    var dataURI = generateDataURI(content, type, byBlob);
    var anchor = document.createElement('a');
    anchor.href = dataURI;
    anchor.download = fileName;
    anchor.setAttribute('style', 'visibility:hidden');
    document.body.appendChild(anchor);
    anchor.dispatchEvent(new MouseEvent('click', {
        bubbles: false,
        cancelable: false,
        view: window,
    }));
    document.body.removeChild(anchor);
}

// CONCATENATED MODULE: ./node_modules/export-from-json/dist/esm/converters.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function _createFieldsMapper(fields) {
    if (!fields
        || isArray(fields) && !fields.length
        || !isArray(fields) && !getKeys(fields).length)
        return function (item) { return item; };
    var mapper = isArray(fields)
        ? fields.reduce(function (map, key) {
            var _a;
            return (__assign(__assign({}, map), (_a = {}, _a[key] = key, _a)));
        }, Object.create(null))
        : fields;
    return function (item) {
        if (isArray(item)) {
            return item
                .map(function (i) { return getEntries(i).reduce(function (map, _a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (key in mapper) {
                    map[mapper[key]] = value;
                }
                return map;
            }, Object.create(null)); })
                .filter(function (i) { return getKeys(i).length; });
        }
        return getEntries(item).reduce(function (map, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (key in mapper) {
                map[mapper[key]] = value;
            }
            return map;
        }, Object.create(null));
    };
}
function _prepareData(data) {
    var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide a valid JSON';
    try {
        return (typeof data === 'string' ? JSON.parse(data) : data);
    }
    catch (_a) {
        throw new Error(MESSAGE_VALID_JSON_FAIL);
    }
}
function _createJSONData(data, replacer, space) {
    if (replacer === void 0) { replacer = null; }
    var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide valid JSON object';
    try {
        return JSON.stringify(data, replacer, space);
    }
    catch (_a) {
        throw new Error(MESSAGE_VALID_JSON_FAIL);
    }
}
function _createTableMap(data) {
    return data.map(getEntries).reduce(function (tMap, rowKVs, rowIndex) {
        return rowKVs.reduce(function (map, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var columnValues = map[key] || Array.from({ length: data.length }).map(function (_) { return ''; });
            columnValues[rowIndex] =
                (typeof value !== 'string' ? JSON.stringify(value) : value) || '';
            map[key] = columnValues;
            return map;
        }, tMap);
    }, Object.create(null));
}
function _createTableEntries(tableMap, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    return beforeTableEncode(getEntries(tableMap).map(function (_a) {
        var _b = __read(_a, 2), fieldName = _b[0], fieldValues = _b[1];
        return ({
            fieldName: fieldName,
            fieldValues: fieldValues,
        });
    }));
}
function createCSVData(data, delimiter, beforeTableEncode) {
    if (delimiter === void 0) { delimiter = ','; }
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    if (!data.length)
        return '';
    var tableMap = _createTableMap(data);
    var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
    var head = tableEntries.map(function (_a) {
        var fieldName = _a.fieldName;
        return fieldName;
    })
        .join(delimiter) + '\r\n';
    var columns = tableEntries.map(function (_a) {
        var fieldValues = _a.fieldValues;
        return fieldValues;
    })
        .map(function (column) { return column.map(function (value) { return "\"" + value.replace(/\"/g, '""') + "\""; }); });
    var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn.map(function (value, rowIndex) { return "" + value + delimiter + column[rowIndex]; }); });
    return head + rows.join('\r\n');
}
function _renderTableHTMLText(data, beforeTableEncode) {
    assert(data.length > 0);
    var tableMap = _createTableMap(data);
    var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
    var head = tableEntries.map(function (_a) {
        var fieldName = _a.fieldName;
        return fieldName;
    })
        .join('</b></th><th><b>');
    var columns = tableEntries.map(function (_a) {
        var fieldValues = _a.fieldValues;
        return fieldValues;
    })
        .map(function (column) { return column.map(function (value) { return "<td>" + value + "</td>"; }); });
    var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn
        .map(function (value, rowIndex) { return "" + value + column[rowIndex]; }); });
    return "\n    <table>\n      <thead>\n        <tr><th><b>" + head + "</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>" + rows.join("</tr>\n        <tr>") + "</tr>\n      </tbody>\n    </table>\n  ";
}
function createXLSData(data, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    if (!data.length)
        return '';
    var content = "<html>\n  <head>\n    <meta charset=\"UTF-8\">\n  </head >\n  <body>\n    " + _renderTableHTMLText(data, beforeTableEncode) + "\n  </body>\n</html >\n";
    return content;
}
function createXMLData(data) {
    var content = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE base>\n" + _renderXML(data, 'base') + "\n";
    return content;
}
function _renderXML(data, tagName, arrayElementTag, spaces) {
    if (arrayElementTag === void 0) { arrayElementTag = 'element'; }
    if (spaces === void 0) { spaces = 0; }
    var tag = normalizeXMLName(tagName);
    var indentSpaces = indent(spaces);
    if (data === null || data === undefined) {
        return indentSpaces + "<" + tag + " />";
    }
    var content = isArray(data)
        ? data.map(function (item) { return _renderXML(item, arrayElementTag, arrayElementTag, spaces + 2); }).join('\n')
        : typeof data === 'object'
            ? getEntries(data)
                .map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _renderXML(value, key, arrayElementTag, spaces + 2);
            }).join('\n')
            : indentSpaces + '  ' + stripHTML(String(data));
    var contentWithWrapper = indentSpaces + "<" + tag + ">\n" + content + "\n" + indentSpaces + "</" + tag + ">";
    return contentWithWrapper;
}

// CONCATENATED MODULE: ./node_modules/export-from-json/dist/esm/exportFromJSON.js



function exportFromJSON_exportFromJSON(_a) {
    var data = _a.data, _b = _a.fileName, fileName = _b === void 0 ? 'download' : _b, extension = _a.extension, _c = _a.fileNameFormatter, fileNameFormatter = _c === void 0 ? function (name) { return name.replace(/\s+/, '_'); } : _c, fields = _a.fields, _d = _a.exportType, exportType = _d === void 0 ? 'txt' : _d, _e = _a.replacer, replacer = _e === void 0 ? null : _e, _f = _a.space, space = _f === void 0 ? 4 : _f, _g = _a.processor, processor = _g === void 0 ? downloadFile : _g, _h = _a.withBOM, withBOM = _h === void 0 ? false : _h, _j = _a.delimiter, delimiter = _j === void 0 ? ',' : _j, _k = _a.beforeTableEncode, beforeTableEncode = _k === void 0 ? function (i) { return i; } : _k;
    var MESSAGE_IS_ARRAY_FAIL = 'Invalid export data. Please provide an array of object';
    var MESSAGE_UNKNOWN_EXPORT_TYPE = "Can't export unknown data type " + exportType + ".";
    var MESSAGE_FIELD_INVALID = "Can't export string data to " + exportType + ".";
    if (typeof data === 'string') {
        switch (exportType) {
            case 'txt':
            case 'css':
            case 'html': {
                return processor(data, exportType, normalizeFileName(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
            }
            default:
                throw new Error(MESSAGE_FIELD_INVALID);
        }
    }
    var fieldsMapper = _createFieldsMapper(fields);
    var safeData = fieldsMapper(_prepareData(data));
    var JSONData = _createJSONData(safeData, replacer, space);
    switch (exportType) {
        case 'txt':
        case 'css':
        case 'html': {
            return processor(JSONData, exportType, normalizeFileName(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
        }
        case 'json': {
            return processor(JSONData, exportType, normalizeFileName(fileName, extension !== null && extension !== void 0 ? extension : 'json', fileNameFormatter));
        }
        case 'csv': {
            assert(isArray(safeData), MESSAGE_IS_ARRAY_FAIL);
            var BOM = '\ufeff';
            var CSVData = createCSVData(safeData, delimiter, beforeTableEncode);
            var content = withBOM ? BOM + CSVData : CSVData;
            return processor(content, exportType, normalizeFileName(fileName, extension !== null && extension !== void 0 ? extension : 'csv', fileNameFormatter));
        }
        case 'xls': {
            assert(isArray(safeData), MESSAGE_IS_ARRAY_FAIL);
            var content = createXLSData(safeData, beforeTableEncode);
            return processor(content, exportType, normalizeFileName(fileName, extension !== null && extension !== void 0 ? extension : 'xls', fileNameFormatter));
        }
        case 'xml': {
            var content = createXMLData(safeData);
            return processor(content, exportType, normalizeFileName(fileName, extension !== null && extension !== void 0 ? extension : 'xml', fileNameFormatter));
        }
        default:
            throw new Error(MESSAGE_UNKNOWN_EXPORT_TYPE);
    }
}
(function (exportFromJSON) {
    exportFromJSON.types = {
        txt: 'txt',
        css: 'css',
        html: 'html',
        json: 'json',
        csv: 'csv',
        xls: 'xls',
        xml: 'xml',
    };
    exportFromJSON.processors = { downloadFile: downloadFile };
})(exportFromJSON_exportFromJSON || (exportFromJSON_exportFromJSON = {}));
/* harmony default export */ var esm_exportFromJSON = (exportFromJSON_exportFromJSON);

// CONCATENATED MODULE: ./node_modules/export-from-json/dist/esm/index.js

/* harmony default export */ var esm = (esm_exportFromJSON);

// CONCATENATED MODULE: ./src/components/ExportData/ExportData.js?vue&type=script&lang=js&


/* harmony default export */ var ExportDatavue_type_script_lang_js_ = ({
	name: "DataTableExportButton",
	data() {
		return {
			selectedExport: ""
		};
	},
	methods: {
		download() {
			esm({
				data: this.data,
				fileName: this.downloadFileName,
				exportType: this.selectedExport
			});
		}
	},
	props: {
		data: Array,
		allowedExports: Array,
		downloadButtonText: String,
		downloadFileName: String,
		downloadText: String
	},
	watch: {
		allowedExports: {
			handler(value) {
				this.selectedExport = value[0];
			},
			immediate: true
		}
	}
});

// CONCATENATED MODULE: ./src/components/ExportData/ExportData.js?vue&type=script&lang=js&
 /* harmony default export */ var ExportData_ExportDatavue_type_script_lang_js_ = (ExportDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ExportData/ExportData.scss?vue&type=style&index=0&lang=scss&
var ExportDatavue_type_style_index_0_lang_scss_ = __webpack_require__("81f5");

// CONCATENATED MODULE: ./src/components/ExportData/ExportData.vue






/* normalize component */

var ExportData_component = normalizeComponent(
  ExportData_ExportDatavue_type_script_lang_js_,
  ExportDatavue_type_template_id_09f32b83_render,
  ExportDatavue_type_template_id_09f32b83_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ExportData = (ExportData_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination/Pagination.vue?vue&type=template&id=4a5659a5&
var Paginationvue_type_template_id_4a5659a5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-pagination"},[_c('ul',{staticClass:"pagination"},[_c('li',{staticClass:"page-item",class:{ disabled: _vm.isFirstPage },on:{"click":function($event){return _vm.setCurrentPage(_vm.previousPage)}}},[_c('span',{staticClass:"page-link"},[_vm._v(" "+_vm._s(_vm.previousButtonText)+" ")])]),_vm._l((_vm.pagination),function(page,i){return _c('li',{key:i,staticClass:"page-item",class:{
					active: _vm.currentPage === page,
					disabled: page === '...'},on:{"click":function($event){return _vm.setCurrentPage(page)}}},[_c('span',{staticClass:"page-link"},[_vm._v(" "+_vm._s(page)+" ")])])}),_c('li',{staticClass:"page-item",class:{ disabled: _vm.isLastPage },on:{"click":function($event){return _vm.setCurrentPage(_vm.nextPage)}}},[_c('span',{staticClass:"page-link"},[_vm._v(" "+_vm._s(_vm.nextButtonText)+" ")])])],2)])}
var Paginationvue_type_template_id_4a5659a5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Pagination/Pagination.vue?vue&type=template&id=4a5659a5&

// CONCATENATED MODULE: ./src/components/Pagination/Pagination.js?vue&type=script&lang=js&
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
	name: "DataTablePagination",
	data() {
		return {
			pageToGo: 1
		};
	},
	methods: {
		setCurrentPage(page) {
			this.$emit("set-page", Number(page));
		}
	},
	props: {
		paginationSearchButtonText: String,
		paginationSearchText: String,
		previousButtonText: String,
		nextButtonText: String,
		isFirstPage: Boolean,
		isLastPage: Boolean,
		numberOfPages: Number,
		previousPage: Number,
		currentPage: Number,
		nextPage: Number,
		pagination: Array
	},
	watch: {
		currentPage(value) {
			this.pageToGo = value;
		},
		pageToGo(value) {
			if (value > this.numberOfPages) {
				return this.numberOfPages;
			}
			if (value < 1) {
				return 1;
			}
			return value;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Pagination/Pagination.js?vue&type=script&lang=js&
 /* harmony default export */ var Pagination_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Pagination/Pagination.scss?vue&type=style&index=0&lang=scss&
var Paginationvue_type_style_index_0_lang_scss_ = __webpack_require__("fc77");

// CONCATENATED MODULE: ./src/components/Pagination/Pagination.vue






/* normalize component */

var Pagination_component = normalizeComponent(
  Pagination_Paginationvue_type_script_lang_js_,
  Paginationvue_type_template_id_4a5659a5_render,
  Paginationvue_type_template_id_4a5659a5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchFilter/SearchFilter.vue?vue&type=template&id=b67807e0&
var SearchFiltervue_type_template_id_b67807e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-search-filter"},[_c('input',{staticClass:"form-control form-control-sm form-input-bordered",attrs:{"type":"search","placeholder":_vm.searchText},domProps:{"value":_vm.search},on:{"input":function($event){return _vm.$emit('set-search')}}})])}
var SearchFiltervue_type_template_id_b67807e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SearchFilter/SearchFilter.vue?vue&type=template&id=b67807e0&

// CONCATENATED MODULE: ./src/components/SearchFilter/SearchFilter.js?vue&type=script&lang=js&
/* harmony default export */ var SearchFiltervue_type_script_lang_js_ = ({
	name: "DataTableSearchFilter",
	props: {
		searchText: String,
		search: String
	}
});

// CONCATENATED MODULE: ./src/components/SearchFilter/SearchFilter.js?vue&type=script&lang=js&
 /* harmony default export */ var SearchFilter_SearchFiltervue_type_script_lang_js_ = (SearchFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SearchFilter/SearchFilter.scss?vue&type=style&index=0&lang=scss&
var SearchFiltervue_type_style_index_0_lang_scss_ = __webpack_require__("8874");

// CONCATENATED MODULE: ./src/components/SearchFilter/SearchFilter.vue






/* normalize component */

var SearchFilter_component = normalizeComponent(
  SearchFilter_SearchFiltervue_type_script_lang_js_,
  SearchFiltervue_type_template_id_b67807e0_render,
  SearchFiltervue_type_template_id_b67807e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchFilter = (SearchFilter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/Table.vue?vue&type=template&id=5723608a&
var Tablevue_type_template_id_5723608a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-table"},[_c('table',{class:_vm.tableClass},[_c('thead',[_c('tr',_vm._l((_vm.columns),function(column,i){return _c('th',{key:i,class:column.classes,style:(column.styles),attrs:{"data-sorting":column.sortingMode,"class":column.classes},on:{"click":function($event){return _vm.$emit('sort-column', column)}}},[_c('div',{staticClass:"column-content"},[_c('span',[_vm._v(_vm._s(column.title))]),(column.sortingIndex > 0)?_c(_vm.sortingIndexComponent,{tag:"component",attrs:{"index":column.sortingIndex}}):_vm._e(),(column.sortable)?_c(_vm.sortingIconComponent,{tag:"component"}):_vm._e()],1)])}),0)]),_c('tbody',[(_vm.isEmpty)?_c('tr',[_c('td',{staticClass:"empty-table-cell",attrs:{"colspan":_vm.numberOfColumns}},[_vm._v(" "+_vm._s(_vm.emptyTableText)+" ")])]):_vm._e(),_vm._l((_vm.dataDisplayed),function(data,i){return _c('tr',{key:i},_vm._l((_vm.columns),function(column,j){return _c('td',{key:j},[(column.component)?_c(column.component,{tag:"component",attrs:{"data":data[column.key],"column":column}}):(typeof data[column.key] == 'object')?_c('span',{class:data[column.key].classes,style:(data[column.key].styles)},[_vm._v(" "+_vm._s(data[column.key].text)+" ")]):_c('span',[_vm._v(_vm._s(data[column.key]))])],1)}),0)})],2),(_vm.footerComponent !== null)?_c(_vm.footerComponent,_vm._b({tag:"component"},'component',{ data: _vm.data, dataDisplayed: _vm.dataDisplayed, dataFiltered: _vm.dataFiltered },false)):_vm._e()],1)])}
var Tablevue_type_template_id_5723608a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/Table.vue?vue&type=template&id=5723608a&

// CONCATENATED MODULE: ./src/components/Table/Table.js?vue&type=script&lang=js&
/* harmony default export */ var Tablevue_type_script_lang_js_ = ({
	name: "DataTableTable",
	props: {
		tableClass: String,
		columns: Array,
		data: Array,
		dataDisplayed: Array,
		dataFiltered: Array,
		emptyTableText: String,
		footerComponent: [Object, String],
		isEmpty: Boolean,
		numberOfColumns: Number,
		sortingIconComponent: Object,
		sortingIndexComponent: Object,
	},
});

// CONCATENATED MODULE: ./src/components/Table/Table.js?vue&type=script&lang=js&
 /* harmony default export */ var Table_Tablevue_type_script_lang_js_ = (Tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/Table.scss?vue&type=style&index=0&lang=scss&
var Tablevue_type_style_index_0_lang_scss_ = __webpack_require__("813e");

// CONCATENATED MODULE: ./src/components/Table/Table.vue






/* normalize component */

var Table_component = normalizeComponent(
  Table_Tablevue_type_script_lang_js_,
  Tablevue_type_template_id_5723608a_render,
  Tablevue_type_template_id_5723608a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Table = (Table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortableColumn/SortingIcon.vue?vue&type=template&id=e118a89a&
var SortingIconvue_type_template_id_e118a89a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var SortingIconvue_type_template_id_e118a89a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-sorting-icons"},[_c('div',{staticClass:"icon asc"}),_c('div',{staticClass:"icon desc"})])}]


// CONCATENATED MODULE: ./src/components/SortableColumn/SortingIcon.vue?vue&type=template&id=e118a89a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortableColumn/SortingIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SortingIconvue_type_script_lang_js_ = ({
  name: "DataTableSortingIcon"
});
// CONCATENATED MODULE: ./src/components/SortableColumn/SortingIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SortableColumn_SortingIconvue_type_script_lang_js_ = (SortingIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SortableColumn/SortingIcon.scss?vue&type=style&index=0&lang=scss&
var SortingIconvue_type_style_index_0_lang_scss_ = __webpack_require__("d704");

// CONCATENATED MODULE: ./src/components/SortableColumn/SortingIcon.vue






/* normalize component */

var SortingIcon_component = normalizeComponent(
  SortableColumn_SortingIconvue_type_script_lang_js_,
  SortingIconvue_type_template_id_e118a89a_render,
  SortingIconvue_type_template_id_e118a89a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SortingIcon = (SortingIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"028a572e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortableColumn/SortingIndex.vue?vue&type=template&id=6874d07c&
var SortingIndexvue_type_template_id_6874d07c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"data-table-sorting-index"},[_vm._v(" "+_vm._s(_vm.index)+" ")])}
var SortingIndexvue_type_template_id_6874d07c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SortableColumn/SortingIndex.vue?vue&type=template&id=6874d07c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortableColumn/SortingIndex.vue?vue&type=script&lang=js&

//
//
//
//
//
/* harmony default export */ var SortingIndexvue_type_script_lang_js_ = ({
  name: "DataTableSortingIndex",
  props: {
    index: {
      type: Number,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/SortableColumn/SortingIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var SortableColumn_SortingIndexvue_type_script_lang_js_ = (SortingIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SortableColumn/SortingIndex.scss?vue&type=style&index=0&lang=scss&
var SortingIndexvue_type_style_index_0_lang_scss_ = __webpack_require__("87a1");

// CONCATENATED MODULE: ./src/components/SortableColumn/SortingIndex.vue






/* normalize component */

var SortingIndex_component = normalizeComponent(
  SortableColumn_SortingIndexvue_type_script_lang_js_,
  SortingIndexvue_type_template_id_6874d07c_render,
  SortingIndexvue_type_template_id_6874d07c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SortingIndex = (SortingIndex_component.exports);
// CONCATENATED MODULE: ./src/helpers.js
/**
 * Performs a case-insensitive comparison of two strings
 * @param {String} a
 * @param {String} b
 * @returns {Boolean}
 */
function compareStrings(a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
}

/**
 * Capitalize first letter and separate words by space
 * @param {String} str
 * @returns {String}
 */
function toTitleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).replace(/[-_]/gui, " ");
}

/**
 * Replace multiple substrings in the given string from the matching arrays.
 * @param {string} target
 * @param {Array} searchValues
 * @param {Array} replacements
 * @returns {String}
 */
function stringReplaceFromArray(target, searchValues, replacements) {
	for (let i = 0; i < searchValues.length; i++) {
		target = target.replace(searchValues[i], replacements[i]);
	}
	return target;
}

/**
 * Get an array with the numbers in the specified range
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step=1
 * @returns {Array}
 */
function range(min, max, step = 1) {
	var range = [];
	for (let i = min; i <= max; i += step) {
		range.push(i);
	}
	return range;
}

/**
 * Indicates if the variable is null, undefined, or empty string
 * @param {*} variable
 * @returns {Boolean}
 */
function isNullable(variable) {
	return variable === null || variable === "" || variable === undefined;
}

/**
 * Sort an array, but skip null values in the array
 * @param {Array} array
 * @param {Function} compareFunction
 * @returns {void}
 */
function arraySafeSort(array, compareFunction) {
	array.sort(function(a, b) {
		return isNullable(a) || isNullable(b) ? 0 : compareFunction(a, b);
	});
}

/**
 * Sort an array of objects (representing the table) by the given column
 * @param {Array} data
 * @param {Array} column
 * @returns {void}
 */
function sortDataByColumn(data, column) {
	const { key } = column;
	let compareFunction;

	/* pick up the compare function, allowing user to set a custom one */
	if (column.sortingFunction) {
		compareFunction = column.sortingFunction;
	} else if (column.type === "number") {
		compareFunction = (a, b) => Number(a[key]) - Number(b[key]);
	} else {
		compareFunction = function(a, b){
			let valA = typeof a[key] === 'object' ? a[key].text : a[key];
			let valB = typeof b[key] === 'object' ? b[key].text : b[key];

			return compareStrings(valA, valB);
		};
	}

	/* sort */
	if (column.sortingMode === "desc") {
		arraySafeSort(data, (a, b) => compareFunction(b, a));
	} else {
		arraySafeSort(data, (a, b) => compareFunction(a, b));
	}
}

/**
 * Cross-browser utility to get the event target value
 * @returns {*}
 */
function getEventTargetValue(event) {
	event = event || window.event;
	var target;
	if (event !== undefined) {
		target = event.target || event.srcElement;
	}
	if (target !== undefined) {
		return target.value;
	}
	return null;
}

// CONCATENATED MODULE: ./src/lang.js
/**
 * The following block of code is used to automatically register the
 * lang files. It will recursively scan the lang directory and
 * register them with their "basename".
 */
const files = __webpack_require__("20d1");
const translations = {};
files.keys().forEach(function(key) {
	const translation = files(key).default;
	const lang = key.replace("./", "").split(".")[0];
	translations[lang] = translation;
});

/* utility for the user to change or add new translations */
const languageServiceProvider = {
	setLang(lang, translation) {
		translations[lang] = translation;
	},
	removeLang(lang) {
		delete translations[lang];
	},
	setLangText(lang, key, text) {
		translations[lang][key] = text;
	}
};

/* harmony default export */ var src_lang = (translations);


// CONCATENATED MODULE: ./src/parser.js



function parseColumnProps(props) {
	let columns = props.columns || props.columnKeys.map(key => ({ key }));
	const { defaultColumn } = props;
	columns = columns.map(function(column, i) {
		let title = column.title || toTitleCase(column.key);
		return {
			...defaultColumn,
			index: 0,
			...column,
			sortingIndex: -1,
			sortingMode: "",
			id: i,
			title
		};
	});

	/* order the columns by the index, so the user can
	set a custom order for the columns to be displayed */
	columns.sort(function(a, b) {
		if (a.index !== b.index) {
			return a.index - b.index;
		}
		return a.id - b.id;
	});
	return columns;
}

function parseTextProps(props) {
	const { lang, text } = props;
	return { ...src_lang[lang], ...text };
}

// CONCATENATED MODULE: ./src/components/DataTable.js?vue&type=script&lang=js&











/* harmony default export */ var DataTablevue_type_script_lang_js_ = ({
	name: "DataTable",
	components: {
		DataTableEntriesInfo: EntriesInfo,
		DataTableSearchFilter: SearchFilter,
		DataTablePagination: Pagination,
		DataTablePerPage: PerPage,
		DataTableTable: Table,
		DataTableExportData: ExportData
	},
	computed: {
		/**
		 * Get the total number of columns
		 * @var {Number}
		 */
		numberOfColumns() {
			return this.parsedColumns.length;
		},

		/**
		 * Get the column that should be used in searches
		 * @var {Array}
		 */
		searchableColumns() {
			return this.parsedColumns.filter(column => column.searchable);
		},

		/**
		 * Get the column that should be used in searches
		 * @var {Array}
		 */
		sortableColumns() {
			return this.parsedColumns.filter(column => column.sortable);
		},

		//
		// ─── DATA ───────────────────────────────────────────────────────────────────────
		//

		/**
		 * The data displayed in the current table page
		 * @var {Array}
		 */
		dataDisplayed() {
			const { lastEntry, firstEntry, dataSorted } = this;
			// we need to subtract 1 due to array index
			// we need also to subtract 1 for the first
			// item to appear
			const end = lastEntry;
			const start = Math.max(0, firstEntry - 1);
			return dataSorted.slice(start, end);
		},

		/**
		 * The data filtered by search text
		 * @var {Array}
		 */
		dataFiltered() {
			const { searchableColumns, data, search } = this;
			if (isNullable(search)) {
				return data;
			}
			return data.filter(function(row) {
				return searchableColumns.some(function(column) {
					const cell = column.key,
						value = row[cell];
					if (typeof value === "string") {
						return value
							.toLowerCase()
							.includes(search.toLowerCase());
					}
					if (typeof value === "number") {
						return value.toString().includes(search);
					}
					return false;
				});
			});
		},

		/**
		 * The data after sorting it by the desirable columns
		 * @var {Array}
		 */
		dataSorted() {
			var { dataFiltered: data, columnsBeingSorted } = this;

			// do not sort if there is no rows or no data to sort
			if (columnsBeingSorted.length === 0 || data.length === 0) {
				return data;
			}

			// create a copy of data and columns
			data = [...data];
			var columns = [...columnsBeingSorted];

			// reverse the columns, so that the first columns
			// will be the last to be sorted. Doing this, we
			// can sort by multiple columns in such way that
			// the columns that were select first will have
			// priority in the process.
			columns.reverse();
			columns.forEach(column => sortDataByColumn(data, column));
			return data;
		},

		/**
		 * Indicates if there are no rows to shown
		 * @var {Boolean}
		 */
		isEmpty() {
			return this.dataDisplayed.length === 0;
		},

		//
		// ─── PER PAGE ───────────────────────────────────────────────────────────────────
		//

		/**
		 * Get the index of the first record being displayed in the current page
		 * @var {Integer}
		 */
		firstEntry() {
			const { dataFiltered, currentPerPage, currentPage } = this;
			if (dataFiltered.length === 0) {
				return 0;
			}
			return currentPerPage * (currentPage - 1) + 1;
		},

		/**
		 * Get the index of the last record being displayed in the current page
		 * @var {Integer}
		 */
		lastEntry() {
			return Math.min(
				this.filteredEntries,
				this.firstEntry + this.currentPerPage - 1
			);
		},

		/**
		 * Get the number of records
		 * @var {Integer}
		 */
		totalEntries() {
			return this.data.length;
		},

		/**
		 * Get the number of records
		 * @var {Integer}
		 */
		filteredEntries() {
			return this.dataFiltered.length;
		},

		/**
		 * The text containing how many rows are being shown
		 * @var {String}
		 */
		entriesInfoText() {
			const {
				infoText,
				infoFilteredText,
				firstEntry,
				lastEntry,
				filteredEntries,
				totalEntries
			} = this;
			const replacements = [
				firstEntry,
				lastEntry,
				filteredEntries,
				totalEntries
			];
			const searchValues = [":first", ":last", ":filtered", ":total"];
			var text = infoText;
			if (totalEntries !== filteredEntries) {
				text = infoFilteredText;
			}
			// we take the text provided by the user, then
			// replace the placeholders with the actual
			// values, and return the result
			return stringReplaceFromArray(text, searchValues, replacements);
		},
		//
		// ─── PAGINATION ─────────────────────────────────────────────────────────────────
		//

		/**
		 * Get the number of pages
		 * @var {Number}
		 */
		numberOfPages() {
			return Math.max(
				Math.ceil(this.filteredEntries / this.currentPerPage),
				1
			);
		},

		/**
		 * Alias for the number of pages
		 * @var {Number}
		 */
		lastPage() {
			return this.numberOfPages;
		},

		/**
		 * Whether this is the last page of the table
		 * @var {Boolean}
		 */
		isLastPage() {
			return this.currentPage === this.numberOfPages;
		},

		/**
		 * Whether this is the first page of the table
		 * @var {Boolean}
		 */
		isFirstPage() {
			return this.currentPage === 1;
		},

		/**
		 * Get the number of the previous page
		 * @var {Number}
		 */
		previousPage() {
			return this.currentPage - 1;
		},

		/**
		 * Get the number of the next page
		 * @var {Number}
		 */
		nextPage() {
			return this.currentPage + 1;
		},

		/**
		 * Get the text to be shown in pagination menu
		 * @var {Array}
		 */
		pagination() {
			// extract the variables from "this"
			// so we don't have to type this.prop
			// every time we access it.
			const { lastPage, currentPage, nextPage, previousPage } = this;
			if (lastPage === 1) {
				return [1];
			}
			if (lastPage <= 7) {
				return range(1, lastPage);
			}
			if (lastPage > 7 && currentPage <= 4) {
				return [1, 2, 3, 4, 5, "...", lastPage];
			}
			if (lastPage > 8 && lastPage > currentPage + 3) {
				return [
					1,
					"...",
					previousPage,
					currentPage,
					nextPage,
					"...",
					lastPage
				];
			}
			if (lastPage > 7 && lastPage <= currentPage + 3) {
				return [
					1,
					"...",
					lastPage - 3,
					lastPage - 2,
					lastPage - 1,
					lastPage
				];
			}
		},

		//
		// ─── BINDINGS ────────────────────────────────────────────────────
		//

		/**
		 * The props for the PerPage component
		 * @var {Object}
		 */
		propsPerPage() {
			return {
				currentPerPage: this.currentPerPage,
				perPageSizes: this.perPageSizes,
				perPageText: this.perPageText,
			};
		},

		/**
		 * The props for the SearchFilter component
		 * @var {Object}
		 */
		propsSearchFilter() {
			return {
				search: this.search,
				searchText: this.searchText,
			};
		},

		/**
		 * The props for the Table component
		 * @var {Object}
		 */
		propsTable() {
			return {
				columns: this.parsedColumns,
				data: this.data,
				dataDisplayed: this.dataDisplayed,
				dataFiltered: this.dataFiltered,
				emptyTableText: this.emptyTableText,
				footerComponent: this.footerComponent,
				isEmpty: this.isEmpty,
				numberOfColumns: this.numberOfColumns,
				sortingIconComponent: this.sortingIconComponent,
				sortingIndexComponent: this.sortingIndexComponent,
				tableClass: this.tableClass,
			};
		},

		/**
		 * The props for the EntriesInfo component
		 * @var {Object}
		 */
		propsEntriesInfo() {
			return {
				entriesInfoText: this.entriesInfoText
			};
		},

		/**
		 * The props for the Pagination component
		 * @var {Object}
		 */
		propsPagination() {
			return {
				currentPage: this.currentPage,
				isFirstPage: this.isFirstPage,
				isLastPage: this.isLastPage,
				nextButtonText: this.nextButtonText,
				nextPage: this.nextPage,
				numberOfPages: this.numberOfPages,
				pagination: this.pagination,
				paginationSearchButtonText: this.paginationSearchButtonText,
				paginationSearchText: this.paginationSearchText,
				previousButtonText: this.previousButtonText,
				previousPage: this.previousPage,
			};
		},

		/**
		 * The props for the DownloadButton component
		 * @var {Object}
		 */
		propsExportData() {
			return {
				allowedExports: this.allowedExports,
				data: this.dataDisplayed,
				downloadButtonText: this.downloadButtonText,
				downloadFileName: this.downloadFileName,
				downloadText: this.downloadText,
			};
		}
	},

	mounted() {
		this.setDefaults();
	},

	data() {
		return {
			currentPage: 1,
			currentPerPage: 10,
			parsedColumns: [],
			columnsBeingSorted: [],
			perPageText: "",
			downloadText: "",
			downloadButtonText: "",
			emptyTableText: "",
			infoText: "",
			infoFilteredText: "",
			nextButtonText: "",
			previousButtonText: "",
			paginationSearchText: "",
			paginationSearchButtonText: "",
			search: "",
			searchText: ""
		};
	},

	methods: {
		/**
		 * Indicates if a page is valid
		 * @param {Object} props
		 * @returns {Boolean}
		 */
		isValidPage(page) {
			return (
				typeof page === "number" &&
				page <= this.numberOfPages &&
				page > 0 &&
				page !== this.currentPage
			);
		},
		/**
		 * Parse columns (assign default values while enabling customization)
		 * @returns {void}
		 */
		parseColumnProps() {
			var parsedColumns = parseColumnProps(this.$props);
			Object.assign(this, { parsedColumns });
		},

		/**
		 * Parse the text (choose correct translation while enabling custom text)
		 * @returns {void}
		 */
		parseTextProps() {
			Object.assign(this, parseTextProps(this.$props));
		},

		/**
		 * Set the given column to be sorted.
		 * This actually does not sort the column, but only set which columns are being sorted.
		 * This is probably the ugliest block of code in VueFormBuilder.
		 * I'm ashamed of it.
		 * @param {Object} column
		 * @returns {void}
		 */
		sortColumn(column) {
			if (!column.sortable) {
				return;
			}
			if (this.sortingMode === "single") {
				for (let col of this.sortableColumns) {
					if (col.id !== column.id) {
						col.sortingMode = "";
						col.sortingIndex = -1;
					}
				}
				if (column.sortingMode === "") {
					column.sortingMode = "asc";
					this.columnsBeingSorted = [column];
					return;
				}
				if (column.sortingMode === "asc") {
					column.sortingMode = "desc";
					this.columnsBeingSorted = [column];
					return;
				}
				column.sortingMode = "";
				this.columnsBeingSorted = [];
				return;
			}
			if (column.sortingMode === "") {
				column.sortingMode = "asc";
				column.sortingIndex = this.columnsBeingSorted.length + 1;
				this.columnsBeingSorted.push(column);
				return;
			}
			if (column.sortingMode === "asc") {
				column.sortingMode = "desc";
				this.columnsBeingSorted.splice(
					column.sortingIndex - 1,
					1,
					column
				);
				return;
			}
			column.sortingMode = "";
			column.sortingIndex = -1;
			this.columnsBeingSorted = this.columnsBeingSorted.filter(function(c) {
				return c.id !== column.id;
			});
			this.columnsBeingSorted.forEach(function(col, i) {
				col.sortingIndex = i + 1;
			});
		},

		/**
		 * Set the default values of some attributes
		 * @returns {void}
		 */
		setDefaults() {
			this.setPerPage(this.defaultPerPage);
		},

		/**
		 * Set the current page being displayed
		 * @param {Number}
		 * @returns {void}
		 */
		setPage(value) {
			if (this.isValidPage(value)) {
				this.currentPage = value;
			}
		},

		/**
		 * Set the current rows per page
		 * @param {Number}
		 * @returns {void}
		 */
		setPerPage(value) {
			var previousFirstEntry, newPerPage, newCurrentPage;
			// before updating the value of currentPerPage,
			// we need to store the current firstEntry.
			// We will use it to change the current page.
			previousFirstEntry = this.firstEntry;
			newPerPage = this.currentPerPage;

			if (!this.perPageSizes.includes(newPerPage)) {
				newPerPage = this.perPageSizes[0];
			}
			if (this.perPageSizes.includes(value)) {
				newPerPage = value;
			}
			this.currentPerPage = newPerPage;

			// update current per page so that
			// the user will see the same first
			// rows that were being displayed
			newCurrentPage = Math.floor(previousFirstEntry / newPerPage) + 1;
			this.setPage(newCurrentPage);
		},

		/**
		 * Set the current rows per page from the user input
		 * @param {Number}
		 * @returns {void}
		 */
		setPerPageFromUserInput() {
			const value = Number(getEventTargetValue());
			this.setPerPage(value);
		},

		/**
		 * Set the value being searched
		 * @param {String}
		 * @returns {void}
		 */
		setSearch() {
			const value = getEventTargetValue() || "";
			this.search = value.trim();
			this.currentPage = 1;
		}
	},

	props: {
		allowedExports: {
			type: Array,
			default: () => ["xls", "csv", "json", "txt"]
		},
		columns: {
			type: Array,
			required: false
		},
		columnKeys: {
			type: Array,
			required: false
		},
		data: {
			type: Array,
			required: true
		},
		defaultColumn: {
			type: Object,
			required: false,
			default: function() {
				return {
					sortable: true,
					searchable: true,
					type: "string"
				};
			}
		},
		defaultPerPage: {
			type: Number,
			default: 10
		},
		downloadFileName: {
			type: String,
			default: "download",
		},
		footerComponent: {
			type: [Object, String],
			default: null
		},
		perPageSizes: {
			type: Array,
			default: () => [10, 25, 50, 100]
		},
		lang: {
			type: String,
			default: "en"
		},
		showEntriesInfo: {
			type: Boolean,
			default: true
		},
		showPerPage: {
			type: Boolean,
			default: true
		},
		showDownloadButton: {
			type: Boolean,
			default: true
		},
		showPagination: {
			type: Boolean,
			default: true
		},
		showSearchFilter: {
			type: Boolean,
			default: true
		},
		sortingMode: {
			type: String,
			default: "multiple",
			validator: value => ["multiple", "single", "disabled"].includes(value)
		},
		sortingIndexComponent: {
			type: Object,
			default: function() {
				return SortingIndex;
			}
		},
		sortingIconComponent: {
			type: Object,
			default: function() {
				return SortingIcon;
			}
		},
		tableClass: {
			type: String,
			default: "table table-striped table-hover"
		},
		text: {
			type: Object,
			required: false
		}
	},
	watch: {
		columns: {
			handler: "parseColumnProps",
			deep: true,
			immediate: true
		},
		columnKeys: {
			handler: "parseColumnProps",
			deep: true,
			immediate: true
		},
		text: {
			handler: "parseTextProps",
			deep: true,
			immediate: true
		},
		lang: {
			handler: "parseTextProps"
		}
	}
});

// CONCATENATED MODULE: ./src/components/DataTable.js?vue&type=script&lang=js&
 /* harmony default export */ var components_DataTablevue_type_script_lang_js_ = (DataTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DataTable.scss?vue&type=style&index=0&lang=scss&
var DataTablevue_type_style_index_0_lang_scss_ = __webpack_require__("9907");

// CONCATENATED MODULE: ./src/components/DataTable.vue






/* normalize component */

var DataTable_component = normalizeComponent(
  components_DataTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DataTable = (DataTable_component.exports);
// CONCATENATED MODULE: ./src/main.js




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (DataTable);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fc77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_Pagination_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("55b0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_Pagination_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_Pagination_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=DataTable.umd.js.map