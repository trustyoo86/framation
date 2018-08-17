/**
 * a-nimate class
 *
 * @class Animate
 */
declare class Framation {
    /**
     * is IE browser
     * @type {boolean}
     */
    private isIE;
    /**
     * support jquery
     * @type {boolean}
     */
    private supportJQuery;
    /**
     * animation operate
     *
     * @type {boolean}
     */
    private isAnimation;
    /**
     * animation enable
     *
     * @type {boolean}
     */
    private enable;
    /**
     * animation queue
     *
     * @type {Array}
     */
    private queue;
    /**
     * animation target div
     *
     * @type {boolean}
     */
    private div;
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
    private cssEase;
    /**
     * transform
     *
     * @type {string}
     */
    private transform;
    /**
     * transition
     *
     * @type {string}
     */
    private transition;
    /**
     * transition duration
     *
     * @type {string}
     */
    private transitionDuration;
    /**
     * transition timing function
     *
     * @type {string}
     */
    private transitionTimingFunction;
    /**
     * transform 3d
     *
     * @memberof Animate
     * @type {boolean}
     */
    private transform3d;
    constructor();
    /**
     * return prop name using browser engine
     *
     * @memberof Animate
     * @function getVendorPropertyName
     * @return {string} prop name
     */
    getVendorPropertyName(prop: any): any;
    /**
     * return support 3d transform
     *
     * @memberof Animate
     * @function checkTransform3dSupport
     * @return {boolean} transform3d support
     */
    private checkTransform3dSupport();
    /**
     * return target's transform to object
     *
     * @memberof Animate
     * @function getTransform
     * @param {Object} style style object
     * @return {Object} transform object
     */
    private getTransform(style);
    private do();
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
    clear(): this;
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
    pause(): this;
    /**
     * play animation
     *
     * @memberof Animate
     * @function play
     * @return {Object} Ani
     */
    play(): this;
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
    set(): this;
    /**
     * destory animate
     *
     * @memberof Animate
     * @function destroy
     */
    destroy(): any;
}
export = Framation;
