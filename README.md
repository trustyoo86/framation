<a name="Animate"></a>

Animation utility plugin using javascript or jquery

## Install

* using npm
```bash
# npm
npm install a-nimate --save
# yarn
yarn add a-nimate
```

* dowonload source & import script
```html
<!doctype html>
<html>
  <head>
    <script src="path/to/a-nimate.min.js"></script>
  </head>
</html>
```

## Usage

* html
```html
<div class="test"></div>
```

* javascript
```javascript
import Animate from 'a-nimate';
// or
const Animate = require('a-nimate');

var ani = new Animate();

ani
  .set(document.querySelector('.test'), {left: '100px', time: 2000})  // test element move left 100px during 2seconds
  .set(document.querySelector('.test'), {left: '200px', time: 2000})  // test element move left 200px during 2seconds after move left 100px
```


## Animate
**Kind**: global class

* [Animate](#Animate)
    * [new Animate()](#new_Animate_new)
    * [.this.isIE](#Animate.this.isIE) : <code>boolean</code>
    * [.this.isAnimation](#Animate.this.isAnimation) : <code>boolean</code>
    * [.this.enable](#Animate.this.enable) : <code>boolean</code>
    * [.this.queue](#Animate.this.queue) : <code>Array</code>
    * [.this.div](#Animate.this.div) : <code>boolean</code>
    * [.this.cssEase](#Animate.this.cssEase) : <code>Object</code>
    * [.this.transform](#Animate.this.transform) : <code>string</code>
    * [.this.transition](#Animate.this.transition) : <code>string</code>
    * [.this.transitionDuration](#Animate.this.transitionDuration) : <code>string</code>
    * [.this.transitionTimingFunction](#Animate.this.transitionTimingFunction) : <code>string</code>
    * [.this.transform3d](#Animate.this.transform3d) : <code>boolean</code>
    * [.getVendorPropertyName()](#Animate.getVendorPropertyName) ⇒ <code>string</code>
    * [.checkTransform3dSupport()](#Animate.checkTransform3dSupport) ⇒ <code>boolean</code>
    * [.getTransform(style)](#Animate.getTransform) ⇒ <code>Object</code>
    * [.clear()](#Animate.clear) ⇒ <code>Object</code>
    * [.pause()](#Animate.pause) ⇒ <code>Object</code>
    * [.play()](#Animate.play) ⇒ <code>Object</code>
    * [.set()](#Animate.set) ⇒ <code>Object</code>
    * [.destroy()](#Animate.destroy)

<a name="new_Animate_new"></a>

### new Animate()
a-nimate class

<a name="Animate.this.isIE"></a>

### Animate.this.isIE : <code>boolean</code>
is IE browser

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.isAnimation"></a>

### Animate.this.isAnimation : <code>boolean</code>
animation operate

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.enable"></a>

### Animate.this.enable : <code>boolean</code>
animation enable

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.queue"></a>

### Animate.this.queue : <code>Array</code>
animation queue

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.div"></a>

### Animate.this.div : <code>boolean</code>
animation target div

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.cssEase"></a>

### Animate.this.cssEase : <code>Object</code>
css ease object

**Kind**: static property of [<code>Animate</code>](#Animate)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _default | <code>string</code> | ease |
| in | <code>string</code> | ease-in |
| out | <code>string</code> | ease-out |
| in-out | <code>string</code> | ease-in-out |
| snap | <code>string</code> | cubic-bezier(0,1,.5,1) |
| easeOutCubic | <code>string</code> | cubic-bezier(.215,.61,.355,1) |
| easeInOutCubic | <code>string</code> | cubic-bezier(.645,.045,.355,1) |
| easeInCirc | <code>string</code> | cubic-bezier(.6,.04,.98,.335) |
| easeOutCirc | <code>string</code> | cubic-bezier(.075,.82,.165,1) |
| easeInOutCirc | <code>string</code> | cubic-bezier(.785,.135,.15,.86) |
| easeInExpo | <code>string</code> | cubic-bezier(.95,.05,.795,.035) |
| easeInOutExpo | <code>string</code> | cubic-bezier(1,0,0,1) |
| easeInQuad | <code>string</code> | cubic-bezier(.55,.085,.68,.53) |
| easeOutQuad | <code>string</code> | cubic-bezier(.25,.46,.45,.94) |
| easeInOutQuad | <code>string</code> | cubic-bezier(.455,.03,.515,.955) |
| easeInQuart | <code>string</code> | cubic-bezier(.895,.03,.685,.22) |
| easeOutQuart | <code>string</code> | cubic-bezier(.165,.84,.44,1) |
| easeInOutQuart | <code>string</code> | cubic-bezier(.77,0,.175,1) |
| easeInQuint | <code>string</code> | cubic-bezier(.755,.05,.855,.06) |
| easeOutQuint | <code>string</code> | cubic-bezier(.23,1,.32,1) |
| easeInOutQuint | <code>string</code> | cubic-bezier(.86,0,.07,1) |
| easeInSine | <code>string</code> | cubic-bezier(.47,0,.745,.715) |
| easeOutSine | <code>string</code> | cubic-bezier(.39,.575,.565,1) |
| easeInOutSine | <code>string</code> | cubic-bezier(.445,.05,.55,.95) |
| easeInBack | <code>string</code> | cubic-bezier(.6,-.28,.735,.045) |
| easeOutBack | <code>string</code> | cubic-bezier(.175, .885,.32,1.275) |
| easeInOutBack | <code>string</code> | cubic-bezier(.68,-.55,.265,1.55) |

<a name="Animate.this.transform"></a>

### Animate.this.transform : <code>string</code>
transform

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.transition"></a>

### Animate.this.transition : <code>string</code>
transition

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.transitionDuration"></a>

### Animate.this.transitionDuration : <code>string</code>
transition duration

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.transitionTimingFunction"></a>

### Animate.this.transitionTimingFunction : <code>string</code>
transition timing function

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.this.transform3d"></a>

### Animate.this.transform3d : <code>boolean</code>
transform 3d

**Kind**: static property of [<code>Animate</code>](#Animate)
<a name="Animate.getVendorPropertyName"></a>

### Animate.getVendorPropertyName() ⇒ <code>string</code>
return prop name using browser engine

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>string</code> - prop name
<a name="Animate.checkTransform3dSupport"></a>

### Animate.checkTransform3dSupport() ⇒ <code>boolean</code>
return support 3d transform

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>boolean</code> - transform3d support
<a name="Animate.getTransform"></a>

### Animate.getTransform(style) ⇒ <code>Object</code>
return target's transform to object

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>Object</code> - transform object

| Param | Type | Description |
| --- | --- | --- |
| style | <code>Object</code> | style object |

<a name="Animate.clear"></a>

### Animate.clear() ⇒ <code>Object</code>
clear animation

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>Object</code> - Ani
**Example**
```js
ani1
   .clear();

 ani
   .set(function () {
   });
```
<a name="Animate.pause"></a>

### Animate.pause() ⇒ <code>Object</code>
pause animation

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>Object</code> - Ani
**Example**
```js
ani1
   .set({target, 'left', '50%'})
   .pause();
```
<a name="Animate.play"></a>

### Animate.play() ⇒ <code>Object</code>
play animation

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>Object</code> - Ani
<a name="Animate.set"></a>

### Animate.set() ⇒ <code>Object</code>
animation set

**Kind**: static method of [<code>Animate</code>](#Animate)
**Returns**: <code>Object</code> - Ani
**Example**
```js
ani1
  .set(target, 'left', '50%') // move target element left 50%
  .set(target2, { time: 1000, left: '0%' }) // move target2 element left 0%
  .set(function () {  // animation pause and start after 2seconds
    var self = this,
        timer = null;

    this.pause();
    console.log('pause');

    timer = setTimeout(function () {
      self.play();
      console.log('play');
    }, 2000);
  })
  .set(target, {ease: 'easeInOutBack', time: 4000, left: '50%', top: '50%'})  // target element set ease and left 50%, top 50% during 4s
  .set(target, {  // target add test class maintain animation 1s
    time: 1000,
    func: function () {
      $(target).addClass('test');
    }
  })
```
<a name="Animate.destroy"></a>

### Animate.destroy()
destory animate