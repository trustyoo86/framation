<a name="Ani"></a>

## Ani
**Kind**: global class

* [Ani](#Ani)
    * [new Ani()](#new_Ani_new)
    * [.this.isIE](#Ani.this.isIE) : <code>boolean</code>
    * [.this.isAnimation](#Ani.this.isAnimation) : <code>boolean</code>
    * [.this.enable](#Ani.this.enable) : <code>boolean</code>
    * [.this.queue](#Ani.this.queue) : <code>Array</code>
    * [.this.div](#Ani.this.div) : <code>boolean</code>
    * [.this.cssEase](#Ani.this.cssEase) : <code>Object</code>
    * [.this.transform](#Ani.this.transform) : <code>string</code>
    * [.this.transition](#Ani.this.transition) : <code>string</code>
    * [.this.transitionDuration](#Ani.this.transitionDuration) : <code>string</code>
    * [.this.transitionTimingFunction](#Ani.this.transitionTimingFunction) : <code>string</code>
    * [.this.transform3d](#Ani.this.transform3d) : <code>boolean</code>
    * [.getVendorPropertyName()](#Ani.getVendorPropertyName) ⇒ <code>string</code>
    * [.checkTransform3dSupport()](#Ani.checkTransform3dSupport) ⇒ <code>boolean</code>
    * [.getTransform(style)](#Ani.getTransform) ⇒ <code>Object</code>
    * [.clear()](#Ani.clear) ⇒ <code>Object</code>
    * [.pause()](#Ani.pause) ⇒ <code>Object</code>
    * [.play()](#Ani.play) ⇒ <code>Object</code>
    * [.set()](#Ani.set) ⇒ <code>Object</code>
    * [.destroy()](#Ani.destroy)

<a name="new_Ani_new"></a>

### new Ani()
a-nimate class

<a name="Ani.this.isIE"></a>

### Ani.this.isIE : <code>boolean</code>
is IE browser

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.isAnimation"></a>

### Ani.this.isAnimation : <code>boolean</code>
animation operate

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.enable"></a>

### Ani.this.enable : <code>boolean</code>
animation enable

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.queue"></a>

### Ani.this.queue : <code>Array</code>
animation queue

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.div"></a>

### Ani.this.div : <code>boolean</code>
animation target div

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.cssEase"></a>

### Ani.this.cssEase : <code>Object</code>
css ease object

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.transform"></a>

### Ani.this.transform : <code>string</code>
transform

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.transition"></a>

### Ani.this.transition : <code>string</code>
transition

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.transitionDuration"></a>

### Ani.this.transitionDuration : <code>string</code>
transition duration

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.transitionTimingFunction"></a>

### Ani.this.transitionTimingFunction : <code>string</code>
transition timing function

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.this.transform3d"></a>

### Ani.this.transform3d : <code>boolean</code>
transform 3d

**Kind**: static property of [<code>Ani</code>](#Ani)
<a name="Ani.getVendorPropertyName"></a>

### Ani.getVendorPropertyName() ⇒ <code>string</code>
return prop name using browser engine

**Kind**: static method of [<code>Ani</code>](#Ani)
**Returns**: <code>string</code> - prop name
<a name="Ani.checkTransform3dSupport"></a>

### Ani.checkTransform3dSupport() ⇒ <code>boolean</code>
return support 3d transform

**Kind**: static method of [<code>Ani</code>](#Ani)
**Returns**: <code>boolean</code> - transform3d support
<a name="Ani.getTransform"></a>

### Ani.getTransform(style) ⇒ <code>Object</code>
return target's transform to object

**Kind**: static method of [<code>Ani</code>](#Ani)
**Returns**: <code>Object</code> - transform object

| Param | Type | Description |
| --- | --- | --- |
| style | <code>Object</code> | style object |

<a name="Ani.clear"></a>

### Ani.clear() ⇒ <code>Object</code>
clear animation

**Kind**: static method of [<code>Ani</code>](#Ani)
**Returns**: <code>Object</code> - Ani
**Example**
```js
ani1
   .clear();

 ani
   .set(function () {
   });
```
<a name="Ani.pause"></a>

### Ani.pause() ⇒ <code>Object</code>
pause animation

**Kind**: static method of [<code>Ani</code>](#Ani)
**Returns**: <code>Object</code> - Ani
**Example**
```js
ani1
   .set({target, 'left', '50%'})
   .pause();
```
<a name="Ani.play"></a>

### Ani.play() ⇒ <code>Object</code>
play animation

**Kind**: static method of [<code>Ani</code>](#Ani)
**Returns**: <code>Object</code> - Ani
<a name="Ani.set"></a>

### Ani.set() ⇒ <code>Object</code>
animation set

**Kind**: static method of [<code>Ani</code>](#Ani)
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
<a name="Ani.destroy"></a>

### Ani.destroy()
destory animate

**Kind**: static method of [<code>Ani</code>](#Ani)