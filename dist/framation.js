(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Framation"] = factory();
	else
		root["Framation"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Framation.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Framation.ts":
/*!**************************!*\
  !*** ./src/Framation.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * a-nimate jquery and javascript animation util
 *
 * @author kern
 * @since 2018.04.02 - draft
 * @example
 *  import Ani from 'a-nimate';
 *
 *  const target = ducment.getElementById('id');
 *  const target2 = document.getElementById('id2');
 *  const ani1 = new Ani();
 *  const ani2 = new Ani();
 *
 *  ani1
 *    .set(target, 'left', '50%') // move target element left 50%
 *    .set(target2, { time: 1000, left: '0%' }) // move target2 element left 0%
 *    .set(function () {  // animation pause and start after 2seconds
 *      var self = this,
 *          timer = null;
 *
 *      this.pause();
 *      console.log('pause');
 *
 *      timer = setTimeout(function () {
 *        self.play();
 *        console.log('play');
 *      }, 2000);
 *    })
 *    .set(target, {ease: 'easeInOutBack', time: 4000, left: '50%', top: '50%'})  // target element set ease and left 50%, top 50% during 4s
 *    .set(target, {  // target add test class maintain animation 1s
 *      time: 1000,
 *      func: function () {
 *        $(target).addClass('test');
 *      }
 *    })
 */

Object.defineProperty(exports, "__esModule", { value: true });
var $ = window.jQuery;
/**
 * a-nimate class
 *
 * @class Animate
 */
var Framation = /** @class */ (function () {
    function Framation() {
        /**
         * is IE browser
         * @type {boolean}
         */
        this.isIE = navigator.userAgent.indexOf('MSIE') >= 0;
        /**
         * support jquery
         * @type {boolean}
         */
        this.supportJQuery = typeof window.jQuery != 'undefined';
        /**
         * animation operate
         *
         * @type {boolean}
         */
        this.isAnimation = false;
        /**
         * animation enable
         *
         * @type {boolean}
         */
        this.enable = true;
        /**
         * animation queue
         *
         * @type {Array}
         */
        this.queue = [];
        /**
         * animation target div
         *
         * @type {boolean}
         */
        this.div = window.document.createElement('div');
        /**
         * css ease object
         *
         * @type {Object}
         * @property {string} _default ease
         * @property {string} in ease-in
         * @property {string} out ease-out
         * @property {string} in-out ease-in-out
         * @property {string} snap cubic-bezier(0,1,.5,1)
         * @property {string} easeOutCubic cubic-bezier(.215,.61,.355,1)
         * @property {string} easeInOutCubic cubic-bezier(.645,.045,.355,1)
         * @property {string} easeInCirc cubic-bezier(.6,.04,.98,.335)
         * @property {string} easeOutCirc cubic-bezier(.075,.82,.165,1)
         * @property {string} easeInOutCirc cubic-bezier(.785,.135,.15,.86)
         * @property {string} easeInExpo cubic-bezier(.95,.05,.795,.035)
         * @property {string} easeInOutExpo cubic-bezier(1,0,0,1)
         * @property {string} easeInQuad cubic-bezier(.55,.085,.68,.53)
         * @property {string} easeOutQuad cubic-bezier(.25,.46,.45,.94)
         * @property {string} easeInOutQuad cubic-bezier(.455,.03,.515,.955)
         * @property {string} easeInQuart cubic-bezier(.895,.03,.685,.22)
         * @property {string} easeOutQuart cubic-bezier(.165,.84,.44,1)
         * @property {string} easeInOutQuart cubic-bezier(.77,0,.175,1)
         * @property {string} easeInQuint cubic-bezier(.755,.05,.855,.06)
         * @property {string} easeOutQuint cubic-bezier(.23,1,.32,1)
         * @property {string} easeInOutQuint cubic-bezier(.86,0,.07,1)
         * @property {string} easeInSine cubic-bezier(.47,0,.745,.715)
         * @property {string} easeOutSine cubic-bezier(.39,.575,.565,1)
         * @property {string} easeInOutSine cubic-bezier(.445,.05,.55,.95)
         * @property {string} easeInBack cubic-bezier(.6,-.28,.735,.045)
         * @property {string} easeOutBack cubic-bezier(.175, .885,.32,1.275)
         * @property {string} easeInOutBack cubic-bezier(.68,-.55,.265,1.55)
         */
        this.cssEase = {
            '_default': 'ease',
            'in': 'ease-in',
            'out': 'ease-out',
            'in-out': 'ease-in-out',
            'snap': 'cubic-bezier(0,1,.5,1)',
            'easeOutCubic': 'cubic-bezier(.215,.61,.355,1)',
            'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
            'easeInCirc': 'cubic-bezier(.6,.04,.98,.335)',
            'easeOutCirc': 'cubic-bezier(.075,.82,.165,1)',
            'easeInOutCirc': 'cubic-bezier(.785,.135,.15,.86)',
            'easeInExpo': 'cubic-bezier(.95,.05,.795,.035)',
            'easeOutExpo': 'cubic-bezier(.19,1,.22,1)',
            'easeInOutExpo': 'cubic-bezier(1,0,0,1)',
            'easeInQuad': 'cubic-bezier(.55,.085,.68,.53)',
            'easeOutQuad': 'cubic-bezier(.25,.46,.45,.94)',
            'easeInOutQuad': 'cubic-bezier(.455,.03,.515,.955)',
            'easeInQuart': 'cubic-bezier(.895,.03,.685,.22)',
            'easeOutQuart': 'cubic-bezier(.165,.84,.44,1)',
            'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
            'easeInQuint': 'cubic-bezier(.755,.05,.855,.06)',
            'easeOutQuint': 'cubic-bezier(.23,1,.32,1)',
            'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
            'easeInSine': 'cubic-bezier(.47,0,.745,.715)',
            'easeOutSine': 'cubic-bezier(.39,.575,.565,1)',
            'easeInOutSine': 'cubic-bezier(.445,.05,.55,.95)',
            'easeInBack': 'cubic-bezier(.6,-.28,.735,.045)',
            'easeOutBack': 'cubic-bezier(.175, .885,.32,1.275)',
            'easeInOutBack': 'cubic-bezier(.68,-.55,.265,1.55)'
        };
        /**
         * transform
         *
         * @type {string}
         */
        this.transform = this.getVendorPropertyName('transform');
        /**
         * transition
         *
         * @type {string}
         */
        this.transition = this.getVendorPropertyName('transition');
        /**
         * transition duration
         *
         * @type {string}
         */
        this.transitionDuration = this.getVendorPropertyName('transitionDuration');
        /**
         * transition timing function
         *
         * @type {string}
         */
        this.transitionTimingFunction = this.getVendorPropertyName('transitionTimingFunction');
        /**
         * transform 3d
         *
         * @memberof Animate
         * @type {boolean}
         */
        this.transform3d = this.checkTransform3dSupport();
        this.isAnimation = false;
        this.enable = true;
    }
    /**
     * return prop name using browser engine
     *
     * @memberof Animate
     * @function getVendorPropertyName
     * @return {string} prop name
     */
    Framation.prototype.getVendorPropertyName = function (prop) {
        if (prop in this.div.style)
            return prop;
        // browser prefix
        var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
        // property
        var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);
        if (prop in this.div.style)
            return prop;
        var self = this;
        console.log('prefixes', prefixes);
        for (var idx = 0; idx < prefixes.length; ++idx) {
            var vendorProp = prefixes[idx] + prop_;
            if (vendorProp in self.div.style) {
                return vendorProp;
            }
        }
    };
    /**
     * return support 3d transform
     *
     * @memberof Animate
     * @function checkTransform3dSupport
     * @return {boolean} transform3d support
     */
    Framation.prototype.checkTransform3dSupport = function () {
        this.div.style[this.transform] = '';
        this.div.style[this.transform] = 'rotateY(90deg)';
        return this.div.style[this.transform] !== '';
    };
    /**
     * return target's transform to object
     *
     * @memberof Animate
     * @function getTransform
     * @param {Object} style style object
     * @return {Object} transform object
     */
    Framation.prototype.getTransform = function (style) {
        var transform = {};
        var transformStr = style['transform' || false];
        var tempStr = transformStr ? transformStr.match(/[^(^)]+/gi) : null;
        var len = tempStr ? tempStr.length : 0;
        for (var idx = 0; idx < len; idx += 2) {
            transform[tempStr[idx].replace(/\s/g, "")] = tempStr[idx + 1];
        }
        return transform;
    };
    Framation.prototype.do = function () {
        var _this = this;
        if (this.isAnimation || !this.enable || this.queue.length === 0)
            return;
        // command queue shift
        var command = this.queue.shift();
        // function & object operate and recursive call
        if (typeof command === 'function') {
            command.call(this);
            this.do();
        }
        else {
            this.isAnimation = true;
            var target_1 = command && command[0];
            var config_1 = command && command[1];
            var className_1 = command && command[2];
            var style_1 = command && command[3];
            var aniTimer_1 = null;
            var completeTimer_1 = null;
            // IE & suuports jquery
            if (this.isIE && this.supportJQuery) {
                // apply jquery animate
                $(target_1)
                    .animate(style_1, {
                    // duration
                    duration: config_1.time,
                    // complete callback
                    complete: function () {
                        _this.isAnimation = false;
                        // recursive call
                        _this.do();
                        // style loop
                        for (var i in style_1) {
                            // binding style if not number
                            if (style_1[i] != target_1.style[i]) {
                                target_1.style[i] = style_1[i];
                            }
                        }
                    }
                });
            }
            else {
                // not IE Browser or not support jQuery if browser is IE
                // animation style
                target_1.style[this.transition] = 'all';
                target_1.style[this.transitionTimingFunction] = this.cssEase[config_1.ease] || '_default';
                target_1.style[this.transitionDuration] = config_1.time + "ms";
                // animation start
                aniTimer_1 = setTimeout(function () {
                    clearTimeout(aniTimer_1);
                    // operate transition
                    if (style_1.hasOwnProperty('transform')) {
                        // transform string
                        var tStr_1 = '';
                        var src_1 = _this.getTransform(target_1.style);
                        var dest_1 = _this.getTransform(style_1);
                        // replace transform
                        Object.keys(dest_1).forEach(function (key) {
                            src_1[key] = dest_1[key];
                            if (tStr_1 !== '') {
                                tStr_1 += ' ';
                            }
                            tStr_1 += key + "(" + dest_1[key] + ")";
                        });
                        // delete transform
                        delete style_1['transform'];
                        // transform apply
                        style_1[_this.transform] = tStr_1;
                    }
                    // replace style
                    for (var key in style_1) {
                        target_1.style[key] = style_1[key];
                    }
                    // add class
                    if (className_1.addClass !== null) {
                        if (_this.supportJQuery) {
                            $(target_1).addClass(className_1.addClass);
                        }
                        else if (target_1.classList && target_1.className) {
                            if (target_1.classList.search(className_1.addClass) < 0) {
                                target_1.className = target_1.classList.toString() + ' ' + className_1.addClass;
                            }
                        }
                    }
                    // remove class
                    if (className_1.removeClass !== null) {
                        if (_this.supportJQuery) {
                            $(target_1).removeClass(className_1.removeClass);
                        }
                        else if (target_1.classList.search(className_1.removeClass) >= 0) {
                            target_1.className = target_1.className.split(className_1.removeClass + ' ').join('');
                        }
                    }
                    // call complete callback
                    completeTimer_1 = setTimeout(function () {
                        clearTimeout(completeTimer_1);
                        _this.isAnimation = false;
                        target_1.style[_this.transition] = '';
                        target_1.style[_this.transitionTimingFunction] = '';
                        target_1.style[_this.transitionDuration] = '';
                        _this.do();
                    }, config_1.time);
                }, config_1.delay);
            }
        }
    };
    /**
     * clear animation
     *
     * @memberof Animate
     * @function clear
     * @return {Object} Ani
     * @example
     *  ani1
     *    .clear();
     *
     *  ani
     *    .set(function () {
     *    });
     */
    Framation.prototype.clear = function () {
        delete this.queue;
        this.queue = [];
        return this;
    };
    /**
     * pause animation
     *
     * @memberof Animate
     * @function pause
     * @return {Object} Ani
     * @example
     *  ani1
     *    .set({target, 'left', '50%'})
     *    .pause();
     */
    Framation.prototype.pause = function () {
        this.enable = false;
        return this;
    };
    /**
     * play animation
     *
     * @memberof Animate
     * @function play
     * @return {Object} Ani
     */
    Framation.prototype.play = function () {
        this.enable = true;
        this.do();
        return this;
    };
    /**
     * animation set
     *
     * @memberof Animate
     * @function set
     * @return {Object} Ani
     * @example
     *  ani1
     *   .set(target, 'left', '50%') // move target element left 50%
     *   .set(target2, { time: 1000, left: '0%' }) // move target2 element left 0%
     *   .set(function () {  // animation pause and start after 2seconds
     *     var self = this,
     *         timer = null;
     *
     *     this.pause();
     *     console.log('pause');
     *
     *     timer = setTimeout(function () {
     *       self.play();
     *       console.log('play');
     *     }, 2000);
     *   })
     *   .set(target, {ease: 'easeInOutBack', time: 4000, left: '50%', top: '50%'})  // target element set ease and left 50%, top 50% during 4s
     *   .set(target, {  // target add test class maintain animation 1s
     *     time: 1000,
     *     func: function () {
     *       $(target).addClass('test');
     *     }
     *   })
     */
    Framation.prototype.set = function () {
        var target = arguments[0];
        var effect = null;
        var style = {};
        var config = {
            ease: '_default',
            time: 500,
            delay: 1
        };
        var className = {
            addClass: null,
            removeClass: null
        };
        if (typeof arguments[0] === 'function') {
            effect = arguments[0];
        }
        else {
            effect = {};
            switch (Object.prototype.toString.call(arguments[1])) {
                case '[object String]':
                    effect[arguments[1]] = arguments[2];
                    break;
                case '[object Object]':
                    for (var idx in arguments[1]) {
                        effect[idx] = arguments[1][idx];
                    }
                    break;
                default:
                    throw new Error('a-nimate type error: this type is not defined.');
            }
        }
        // queue push
        if (typeof arguments[0] === 'function') {
            this.queue.push(effect);
        }
        else {
            Object.keys(effect).forEach(function (key) {
                if (config.hasOwnProperty(key)) {
                    config[key] = effect[key];
                }
                else if (className.hasOwnProperty(key)) {
                    className[key] = effect[key];
                }
                else {
                    style[key] = effect[key];
                }
            });
            this.queue.push([target, config, className, style]);
        }
        this.do();
        return this;
    };
    /**
     * destory animate
     *
     * @memberof Animate
     * @function destroy
     */
    Framation.prototype.destroy = function () {
        return null;
    };
    return Framation;
}());
exports.default = Framation;


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=framation.js.map