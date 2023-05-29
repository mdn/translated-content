---
title: Window.getComputedStyle()
slug: Web/API/Window/getComputedStyle
---

{{APIRef()}}

## 概要

`Window.getComputedStyle()` 方法可以得到元素於套用啟用之樣式表以及解析其中可能包含的任何基本運算後的所有 CSS 屬性值。

## 語法

```plain
var style = window.getComputedStyle(element[, pseudoElt]);
```

- element
  - : The {{domxref("Element")}} for which to get the computed style.
- pseudoElt {{optional_inline}}
  - : A string specifying the pseudo-element to match. Must be omitted (or `null`) for regular elements.

> **備註：** Prior to Gecko 2.0, the `pseudoElt` parameter was required. No other major browser required this parameter be specified if null. Gecko has been changed to match the behavior of other browsers.

The returned `style` is a _live_ {{domxref("CSSStyleDeclaration")}} object, which updates itself automatically when the element's style is changed.

## 範例

```js
var elem1 = document.getElementById("elemId");
var style = window.getComputedStyle(elem1, null);

// this is equivalent:
// var style = document.defaultView.getComputedStyle(elem1, null);
```

```js
<style>
 #elem-container{
   position: absolute;
   left:     100px;
   top:      200px;
   height:   100px;
 }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  function getTheStyle(){
    var elem = document.getElementById("elem-container");
    var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
    document.getElementById("output").innerHTML = theCSSprop;
   }
  getTheStyle();
</script>
```

```js
function dumpComputedStyles(elem, prop) {
  var cs = window.getComputedStyle(elem, null);
  if (prop) {
    console.log(prop + " : " + cs.getPropertyValue(prop));
    return;
  }
  var len = cs.length;
  for (var i = 0; i < len; i++) {
    var style = cs[i];
    console.log(style + " : " + cs.getPropertyValue(style));
  }
}
```

## 說明

The returned object is of the same type that the object returned from the element's {{domxref("HTMLElement.style", "style")}} property; however, the two objects have different purposes. The object returned from `getComputedStyle` is read-only and can be used to inspect the element's style (including those set by a `<style>` element or an external stylesheet). The `elt.style` object should be used to set styles on a specific element.

The first argument must be an Element (passing a non-Element Node, like a #text Node, will throw an error). Starting in Gecko 1.9.2, returned URL values now have quotes around the URL, like this: `url("http://foo.com/bar.jpg")`.

## `defaultView`

In many code samples online, `getComputedStyle` is used from the `document.defaultView` object. In nearly all cases, this is needless, as `getComputedStyle` exists on the `window` object as well. It's likely the defaultView pattern was some combination of (1) folks not wanting to write a spec for window and (2) making an API that was also usable in Java. However, there is [a single case](https://github.com/jquery/jquery/pull/524#issuecomment-2241183) where the `defaultView`'s method must be used: when using Firefox 3.6 to access framed styles.

## Use with pseudo-elements

getComputedStyle can pull style info from pseudo-elements (for example, `::after`, `::before`, `::marker`, `::line-marker`—see [spec](http://dev.w3.org/csswg/css3-content/#pseudo-elements) here).

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>generated content</h3>

<script>
  var h3 = document.querySelector("h3"),
    result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns ' rocks!'
</script>
```

## 備註

The values returned by `getComputedStyle` are known as {{cssxref("resolved_value", "resolved values")}}. These are usually the same as the CSS 2.1 {{cssxref("computed_value","computed values")}}, but for some older properties like `width`, `height` or `padding`, they are instead the {{cssxref("used_value","used values")}}. Originally, CSS 2.0 defined the computed values to be the "ready to be used" final values of properties after cascading and inheritance, but CSS 2.1 redefined computed values as pre-layout, and used values as post-layout. For CSS 2.0 properties, the `getComputedStyle` function returns the old meaning of computed values, now called **used values**. An example of difference between pre- and post-layout values includes the resolution of percentages that represent the width or the height of an element (also known as its layout), as those will be replaced by their pixel equivalent only in the used value case.

The returned value is, in certain known cases, expressly inaccurate by deliberate intent. In particular, to avoid the so called CSS History Leak security issue, browsers may expressly "lie" about the used value for a link and always return values as if a user has never visited the linked site. See <http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/> and <http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> for details of the examples of how this is implemented. Most other modern browsers have applied similar changes to the application of pseudo-selector styles and the values returned by `getComputedStyle`.

During a CSS transition, `getComputedStyle` returns the original property value in Firefox, but the final property value in WebKit.

In Firefox, properties with the value `auto` return the used value, not the value `auto`. So if you apply `top:auto;` and `bottom:0`; on an element with `height:30px` and its containing block is `height:100px;`, upon requesting the computed style for `top`, Firefox will return `top:70px`, as `100px-30px=70px`.

## 瀏覽器相容性

{{Compat}}

## 規範

- [DOM Level 2 Style: getComputedStyle](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle)
- [CSS Object Model specification](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle)

## 參見

- {{domxref("window.getDefaultComputedStyle")}}
- {{cssxref("resolved_value", "Resolved Value")}}
