---
title: Firefox 16 for developers
slug: Mozilla/Firefox/Releases/16
---

{{FirefoxSidebar}}

Firefox 16 shipped on October 9, 2012. This article lists key changes that are useful for not only Web developers to know about, but also Firefox and Gecko developers as well as add-on developers.

## Web 开发

### HTML

- The {{HTMLElement("meter")}} element is now supported.
- Support for the HTML Microdata API has been added. ([bug 591467](https://bugzilla.mozilla.org/show_bug.cgi?id=591467))
- {{HTMLElement("canvas")}} now supports the CSS `currentColor` in all case. ({{bug("629882")}})
- {{HTMLElement("input")}} now allows filtering based on arbitrary mimetypes in `accept` ({{bug("565274")}}).
- Two new attributes, `width` and `height` have been added to the {{HTMLElement("input")}} element ([bug 683855](https://bugzilla.mozilla.org/show_bug.cgi?id=683855)).

### CSS

- 实现了标准的不带前缀的 [CSS Transforms](/zh-CN/docs/CSS/Using_CSS_transforms). ([bug 745523](https://bugzilla.mozilla.org/show_bug.cgi?id=745523))
- Support for reverse animation direction (keywords `reverse` and `alternate-reverse` on the {{cssxref("animation-direction")}} property) has been added. ([bug 655920](https://bugzilla.mozilla.org/show_bug.cgi?id=655920)).
- You can now animate the CSS {{cssxref("height")}} and {{cssxref("width")}} properties.
- The {{cssxref("animation-duration")}} and {{cssxref("transition-duration")}} CSS properties now reject negative values (and do not handle them as `0s` anymore) ([bug 773102](https://bugzilla.mozilla.org/show_bug.cgi?id=773102)).
- Support for the standard, unprefixed version of [CSS Transforms](/zh-CN/docs/CSS/Using_CSS_transforms) has been landed ([bug 745523](https://bugzilla.mozilla.org/show_bug.cgi?id=745523)). {{cssxref("&lt;length&gt;")}} cannot be used for translation values in `matrix()` and `matrix3d()` anymore ([Firefox bug 719054](https://bugzil.la/719054)).
- Support for the standard, unprefixed version of [CSS Gradients](/zh-CN/docs/CSS/Using_CSS_gradients) has been landed. Note that the syntax has changed significantly since the prefixed version, so you should read up on this ([bug 752187](https://bugzilla.mozilla.org/show_bug.cgi?id=752187)).
- The {{cssxref("box-sizing", "-moz-box-sizing")}} implementation has been updated to apply to table cells too ([bug 338554](https://bugzilla.mozilla.org/show_bug.cgi?id=338554)).
- Support for the standard, unprefixed version of {{cssxref("calc")}} has been landed ([bug 771678](https://bugzilla.mozilla.org/show_bug.cgi?id=771678)).
- The {{cssxref("&lt;resolution&gt;")}} CSS data type has been extended to support the `dppx`([bug 741644](https://bugzilla.mozilla.org/show_bug.cgi?id=741644)).
- On screen, for [media queries](/zh-CN/docs/CSS/Media_queries), `dppx`, `dpi`, and `dpcm` are now representing values based on CSS pixels and no more with the physical units ([bug 771390](https://bugzilla.mozilla.org/show_bug.cgi?id=771390)).
- Three new pseudo-classes `:-moz-meter-optimum`, `:-moz-meter-sub-optimum`, and `:-moz-meter-sub-sub-optimum` have been added for accessing/styling a {{HTMLElement("meter")}} element in a paraticular state ([bug 660238](https://bugzilla.mozilla.org/show_bug.cgi?id=660238)).
- The {{cssxref("-moz-appearance")}} property gains two new values: `meterbar` and `meterchunk`. They represent components inside the {{HTMLElement("meter")}} element ([bug 659999](https://bugzilla.mozilla.org/show_bug.cgi?id=659999)).
- The {{cssxref("min-width")}} and {{cssxref("min-height")}} now supports the `auto`keyword for flex items (and resolves to `0` for other items) ({{bug("763689")}}).

### API/DOM

- 在{{ domxref("HTMLInputElement") }} 接口上添加了两个新的 `width` 和 `height`属性 . ([bug 683855](https://bugzilla.mozilla.org/show_bug.cgi?id=683855))
- IndexedDB 属性和方法取消前缀。([bug 726378](https://bugzilla.mozilla.org/show_bug.cgi?id=726378))
- The [Battery API](/zh-CN/docs/DOM/window.navigator.battery) is now unprefixed.
- The Vibration API has been unprefixed.
- The non-standard `Keyboard` interface, prefixed as `mozKeyboard`, now has the `Keyboard.setSelectedOption()` and `Keyboard.setValue()` methods, as well as the `Keyboard.onfocuschange`. _This interface, only available for Firefox OS, has been removed in Firefox 31._
- The [`java`](/zh-CN/docs/LiveConnect_Reference/java) and [`Packages`](/zh-CN/docs/LiveConnect_Reference/Packages) global objects have been removed. See [LiveConnect](/zh-CN/docs/LiveConnect).
- The `CSSRule.type` associated with {{domxref("CSSNamespaceRule")}} has been updated from `UNKNOWN_RULE` (`0`) to `NAMESPACE_RULE` (`10`) ([bug 765590](https://bugzilla.mozilla.org/show_bug.cgi?id=765590)).
- WebSMS API: {{domxref("SmsRequest")}} has been superseded by the more general {{domxref("DOMRequest")}}.
- The non-standard {{domxref("Element.scrollTopMax")}} and {{domxref("Element.scrollLeftMax")}} read-only properties have been added ([Firefox bug 766937](https://bugzil.la/766937)).
- The second parameter of {{domxref("Blob.blob", "Blob()")}}, when set to `null` or `undefined`, is now being handled as an empty dictionary ([Firefox bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) objects now offer `isFinite()`, `toInteger()`, and `isInteger()` methods. ([bug 761480](https://bugzilla.mozilla.org/show_bug.cgi?id=761480), [bug 761495](https://bugzilla.mozilla.org/show_bug.cgi?id=761495))
- The Harmony [spread operator](http://wiki.ecmascript.org/doku.php?id=harmony:spread) is now supported in [`Array`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Array) initializers ([bug 574130](https://bugzilla.mozilla.org/show_bug.cgi?id=574130)). Note it is not yet supported in calls ([bug 762363](https://bugzilla.mozilla.org/show_bug.cgi?id=762363)).
- The experimental {{jsxref("TypedArray.prototype.move()")}} method has been added (available in Aurora and Nightly channels only) ([Firefox bug 730873](https://bugzil.la/730873)).

### WebGL

_No change_

### SVG

_No change_

### MathML

- The `lspace` and `rspace` attributes of {{MathMLElement("mo")}} now correctly default to `thickmathspace`.

### 网络

### Developer tools

- There's now a handy developer toolbar you can access by going to Tools > Web Developer > Developer Toolbar, or by pressing Ctrl-Shift-V (Cmd-Opt-V on Mac OS X). This toolbar offers a command line interface as well as buttons for quickly accessing useful tools. The graphical command line interface ([GCLI](/zh-CN/docs/Tools/GCLI)) is easy to expand and additional commands are expected in the future. Type "help" to get a list of supported commands.
- The Web Console now displays an error count so you can quickly see how much work you have ahead of you.
- The Scratchpad now offers a list of recently opened files.

## Changes for Open Web App developers

- Initial [Open Web App support](/zh-CN/docs/Apps/Getting_Started) has been implemented in the desktop versions of Firefox (that is, on Windows, Mac OS X, and Linux).

## 附加组件开发变更

### 修改接口

`nsIPrivateDOMEvent` has been merged into `nsIDOMEvent`. ({{bug("761613")}})

#### 新增接口

#### 废弃接口
