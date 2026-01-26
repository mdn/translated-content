---
title: Firefox 22 for developers
slug: Mozilla/Firefox/Releases/22
---

## Web 开发者需要注意的变化

### HTML

- 实现了 HTML5 中的{{HTMLElement("data")}}元素 ([Firefox bug 839371](https://bugzil.la/839371)).
- The HTML5 {{HTMLElement("time")}} element has been implemented ([Firefox bug 629801](https://bugzil.la/629801)).
- The `range` state of the {{HTMLElement("input")}} element (`<input type="range">`) has been implemented, behind the preference `dom.experimental_forms_range`, only enabled by default on Nightly and Aurora channel ([Firefox bug 841948](https://bugzil.la/841948)).
- The support for the {{HTMLElement("template")}} element, part of the Web component specification has been implemented ([Firefox bug 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) optimizations are enabled, making it possible to compile C/C++ applications to a subset of JavaScript for better performance.
- 实现了 ES6 中的[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)([Firefox bug 846406](https://bugzil.la/846406)).
- The new [Object.is](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) function has been added ([Firefox bug 839979](https://bugzil.la/839979)).
- [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) in generator expressions is now inherited from enclosing lexical scope ([Firefox bug 848051](https://bugzil.la/848051)).
- The ES2015 Proxy {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "preventExtensions")}} trap have been implemented ([Firefox bug 789897](https://bugzil.la/789897)).

### DOM

- 不再支持 `XMLHttpRequest` 中的 `multipart` 属性和 `multipart/x-mixed-replace` 响应。这是一个 Gecko 独有的特性，从来没被标准化过。你可以使用[Server-Sent Events](/zh-CN/docs/Web/API/Server-sent_events), [Web Sockets](/zh-CN/docs/Web/API/WebSockets_API)或者在 progress 事件中查看 `responseText` 属性的变化来实现同样的效果。
- 实现了[Web Notifications](http://notifications.spec.whatwg.org/) ([Firefox bug 782211](https://bugzil.la/782211)).
- {{domxref("XMLHttpRequest/FormData", "FormData")}}对象的`append`方法现在开始接受第三个参数`filename`([Firefox bug 690659](https://bugzil.la/690659)).
- 移除了{{domxref("Node.isSupported")}}方法 ([Firefox bug 801562](https://bugzil.la/801562)).
- {{domxref("Node.setUserData")}} and {{domxref("Node.getUserData")}} has been removed for web content and are deprecated for chrome content ([Firefox bug 842372](https://bugzil.la/842372)).
- The {{domxref("Element.attributes")}} property has been moved there from {{domxref("Node")}} as required by the spec ([Firefox bug 844134](https://bugzil.la/844134)).
- 实现了 Mac OS X 中的{{domxref("DeviceLightEvent", "Ambient Light Events")}}后端。
- Elements in the HTML namespace with local names `<bgsound>`, {{HTMLElement("multicol")}}, and {{HTMLElement("image")}} no longer implement the {{domxref("HTMLSpanElement")}} interface. `<bgsound>` implements {{domxref("HTMLUnknownElement")}} and {{HTMLElement("image")}} implements {{domxref("HTMLElement")}}.
- The {{ domxref("NodeIterator.detach") }} method has been changed to do nothing ([Firefox bug 823549](https://bugzil.la/823549)).
- The {{domxref("BlobEvent")}} interface has been implemented ([Firefox bug 834165](https://bugzil.la/834165)).
- The properties `HTMLMediaElement.crossorigin` and `HTMLInputElement.inputmode` has been removed to match the spec in {{domxref("HTMLMediaElement.crossOrigin")}} and `HTMLInputElement.inputMode`, respectively ([Firefox bug 847370](https://bugzil.la/847370) and [Firefox bug 850346](https://bugzil.la/850346)).
- WebRTC: the Media Stream API and Peer Connection API are now supported by default.
- Web Components: the {{domxref("Document.register")}} method has been implemented ([Firefox bug 783129](https://bugzil.la/783129)).
- The {{domxref("ProgressEvent.initProgressEvent()")}} constructor method has been removed. Uses the standard constructor, {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}} to construc and initialize {{domxref("ProgressEvent")}} ([Firefox bug 843489](https://bugzil.la/843489)).
- Manipulated data associated with a [`cut`](/zh-CN/docs/Web/API/Element/cut_event), [`copy`](/zh-CN/docs/Web/API/Element/copy_event), or [`paste`](/zh-CN/docs/Web/API/Element/paste_event) event can now be accessed via the {{domxref("ClipboardEvent.clipboardData")}} property ([Firefox bug 407983](https://bugzil.la/407983)).
- The {{domxref("HTMLTimeElement")}} interface has been implemented ([Firefox bug 629801](https://bugzil.la/629801)).
- When a {{domxref("Worker")}} constructor is passed an invalid URL, it now throws {{domxref("DOMException")}} of type `SECURITY_ERR` ([Firefox bug 587251](https://bugzil.la/587251)).

### CSS

- Support for [CSS Flexbox layout](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) has been enabled by default ([Firefox bug 841876](https://bugzil.la/841876)).
- Following a spec change, the initial value for {{cssxref("min-width")}} and {{cssxref("min-height")}} has been changed back to `0`, even on flex items ([Firefox bug 848539](https://bugzil.la/848539)).
- Support for CSS Conditionals ({{cssxref("@supports")}} and {{domxref("CSS.supports")}}) has been enabled by default ([Firefox bug 855455](https://bugzil.la/855455)).
- Support for {{cssxref("background-clip")}} and {{cssxref("background-origin")}} properties in the {{cssxref("background")}} shorthand has been implemented ([Firefox bug 570896](https://bugzil.la/570896)).

## 附加组件和 Mozilla 开发者需要注意的变化

- 移除了下面这些方法中的`properties`参数：`nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` and `nsITreeView.getRowProperties()` methods of `nsITreeView`. These methods should now return a string of space-separated property names. ([Firefox bug 407956](https://bugzil.la/407956))
- The `inIDOMUtils.getCSSPropertyNames()` method has been implemented and will return all supported [CSS property](/zh-CN/docs/Web/CSS/Reference) names.
- See [here](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/) for more changes.

### Firefox Developer Tools

- [Font inspector](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) shows which fonts on your computer are applied to the page.
- Visual paint feedback mode shows when and where a page is repainted.
- The dev tools may now be docked to the right side, not just the bottom of the browser.
- Some panes within the dev tools have switched from [XUL to HTML](https://bugzilla.mozilla.org/show_bug.cgi?id=875727). For example, the css rule viewer is now chrome://browser/content/devtools/cssruleview\.xhtml, not `cssruleview.xul`. Instead of adding an overlay directly to extend features of these panes, you may add an overlay and script to the outer xul document, to add load listeners and change these html documents.
- The stack trace is now shown as a breadcrumb near the top, and the script listing is now at the left panel of the debugger.

## 参见

- [Firefox 22 Aurora Release Notes](https://www.mozilla.org/en-US/firefox/22.0a1/auroranotes/)
- [Site Compatibility for Firefox 22](/zh-CN/docs/Site_Compatibility_for_Firefox_22)
- [Add-on Compatibility for Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### 更早期的版本

{{Firefox_for_developers}}
