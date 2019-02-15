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
'use strict';

declare const window: any;
const $ = window.jQuery;

/**
 * a-nimate class
 * 
 * @class Animate
 */
class Framation {
  /**
   * is IE browser
   * @type {boolean}
   */
  private isIE: boolean = navigator.userAgent.indexOf('MSIE') >= 0;
  /**
   * support jquery
   * @type {boolean}
   */
  private supportJQuery: boolean = !!(typeof window.jQuery != 'undefined');
  /**
   * animation operate
   * 
   * @type {boolean}
   */
  private isAnimation: boolean = false;
  /**
   * animation enable
   * 
   * @type {boolean}
   */
  private enable: boolean = true;
  /**
   * animation queue
   * 
   * @type {Array}
   */
  private queue: Array<any> = [];
  /**
   * animation target div
   * 
   * @type {boolean}
   */
  private div: HTMLDivElement = window.document.createElement('div');
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
  private cssEase: object = {
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
  private transform: string = this.getVendorPropertyName('transform');


  /**
   * transition
   * 
   * @type {string}
   */
  private transition: string = this.getVendorPropertyName('transition');

  /**
   * transition duration
   * 
   * @type {string}
   */
  private transitionDuration = this.getVendorPropertyName('transitionDuration');

  /**
   * transition timing function
   * 
   * @type {string}
   */
  private transitionTimingFunction = this.getVendorPropertyName('transitionTimingFunction');

  /**
   * transform 3d
   * 
   * @memberof Animate
   * @type {boolean}
   */
  private transform3d = this.checkTransform3dSupport();

  constructor() {
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
  getVendorPropertyName(prop) {
    if (prop in this.div.style) return prop;
    // browser prefix
    const prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    // property
    const prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);
    
    if (prop in this.div.style) return prop;

    prefixes.forEach((prefix, idx) => {
      const vendorProp = prefix + prop_;

      if (vendorProp in this.div.style) {
        return vendorProp;
      }
    })
  }

  /**
   * return support 3d transform
   * 
   * @memberof Animate
   * @function checkTransform3dSupport
   * @return {boolean} transform3d support
   */
  private checkTransform3dSupport() {
    this.div.style[this.transform] = '';
    this.div.style[this.transform] = 'rotateY(90deg)';
    return this.div.style[this.transform] !== '';
  }

  /**
   * return target's transform to object
   * 
   * @memberof Animate
   * @function getTransform
   * @param {Object} style style object
   * @return {Object} transform object
   */
  private getTransform(style) {
    const transform = {};
    const transformStr = style['transform' || this.transform];
    const tempStr = transformStr ? transformStr.match(/[^(^)]+/gi) : null;
    const len = tempStr ? tempStr.length : 0;

    for(let idx = 0; idx < len; idx +=2) {
      transform[tempStr[idx].replace(/\s/g,"")] = tempStr[idx + 1];
    }

    return transform;
  }

  private do() {
    if (this.isAnimation || !this.enable || this.queue.length === 0) return;

    // command queue shift
    const command = this.queue.shift();

    // function & object operate and recursive call
    if (typeof command === 'function') {
      command.call(this);
      this.do();
    } else {
      this.isAnimation = true;

      const target = command && command[0];
      const config = command && command[1];
      const className = command && command[2];
      const style = command && command[3];

      let aniTimer = null;
      let completeTimer = null;

      // IE & suuports jquery
      if (this.isIE && this.supportJQuery) {
        // apply jquery animate
        $(target)
          .animate(style, {
            // duration
            duration: config.time,
            // complete callback
            complete: () => {
              this.isAnimation = false;
              // recursive call
              this.do();
              // style loop
              for(let i in style) {
                // binding style if not number
                if (style[i] != target.style[i]) {
                  target.style[i] = style[i];
                }
              }
            }
          });
      } else {
        // not IE Browser or not support jQuery if browser is IE
        // animation style
        target.style[this.transition] = 'all';
        target.style[this.transitionTimingFunction] = this.cssEase[config.ease] || '_default';
        target.style[this.transitionDuration] = `${config.time}ms`;

        // animation start
        aniTimer = setTimeout(() => {
          clearTimeout(aniTimer);
          // operate transition
          if (style.hasOwnProperty('transform')) {
            // transform string
            let tStr = '';
            const src = this.getTransform(target.style);
            const dest = this.getTransform(style);

            // replace transform
            Object.keys(dest).forEach((key) => {
              src[key] = dest[key];
              
              if (tStr !== '') {
                tStr += ' ';
              }

              tStr += `${key}(${dest[key]})`;
            });

            // delete transform
            delete style['transform'];
            // transform apply
            style[this.transform] = tStr;
          }

          // replace style
          for(let key in style) {
            target.style[key] = style[key];
          }

          // add class
          if (className.addClass !== null) {
            if (this.supportJQuery) {
              $(target).addClass(className.addClass);
            } else if (target.classList && target.className) {
              if (target.classList.search(className.addClass) < 0) {
                target.className = target.classList.toString() + ' ' + className.addClass;
              }
            }
          }

          // remove class
          if (className.removeClass !== null) {
            if (this.supportJQuery) {
              $(target).removeClass(className.removeClass);
            } else if (target.classList.search(className.removeClass) >= 0) {
              target.className = target.className.split(className.removeClass + ' ').join('');
            }
          }

          // call complete callback
          completeTimer = setTimeout(() => {
            clearTimeout(completeTimer);
            this.isAnimation = false;
            target.style[this.transition] = '';
            target.style[this.transitionTimingFunction] = '';
            target.style[this.transitionDuration] = '';
            this.do();
          }, config.time);
        }, config.delay);
      }
    }
  }

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
  clear() {
    delete this.queue;
    this.queue = [];
    return this;
  }

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
  pause() {
    this.enable = false;
    return this;
  }

  /**
   * play animation
   * 
   * @memberof Animate
   * @function play
   * @return {Object} Ani
   */
  play() {
    this.enable = true;
    this.do();
    return this;
  }

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
  set() {
    const target = arguments[0];
    let effect = null;
    const style = {};
    const config = {
      ease: '_default',
      time: 500,
      delay: 1
    };
    const className = {
      addClass: null,
      removeClass: null
    };

    if (typeof arguments[0] === 'function') {
      effect = arguments[0];
    } else {
      effect = {};

      switch (Object.prototype.toString.call(arguments[1])) {
        case '[object String]':
          effect[arguments[1]] = arguments[2];
          break;
        case '[object Object]':
          for(let idx in arguments[1]) {
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
    } else {
      Object.keys(effect).forEach((key) => {
        if (config.hasOwnProperty(key)) {
          config[key] = effect[key]
        } else if (className.hasOwnProperty(key)) {
          className[key] = effect[key];
        } else {
          style[key] = effect[key];
        }
      });

      this.queue.push([target, config, className, style]);
    }

    this.do();
    return this;
  }

  /**
   * destory animate
   * 
   * @memberof Animate
   * @function destroy
   */
  destroy() {
    return null;
  }
}

export default Framation;