---
title: Firefox 14 for developers
slug: Mozilla/Firefox/Releases/14
---

{{FirefoxSidebar}}

Firefox 14 shipped on July 17, 2012. This article lists key changes that are useful for not only Web developers to know about, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- {{ HTMLElement("progress") }}元素不在错误的归为一个表单元素，因此不再有一个`form`属性。
- The default modifier keys for the [`accesskey`](/zh-CN/HTML/Global_attributes) of HTML contents on Mac are changed to Control+Option. This is the same as WebKit-based browsers on Mac.

### DOM

- [input](/zh-CN/DOM/DOM_event_reference/input) events are fired also on editing host element of [contenteditable](/zh-CN/DOM/element.contentEditable) editor and root element of [designMode](/zh-CN/DOM/document.designMode) editor.
- {{ domxref("DOMException", "DOMException.code") }}已被废弃，根据最新的 DOM Level 4 规范。
- {{ domxref("Range.insertNode()") }} method now works correctly when used on collapsed ranges.
- The {{ domxref("BlobBuilder", "MozBlobBuilder") }} interface has been deprecated in favor of the constructor on {{ domxref("Blob") }}. If you use `MozBlobBuilder` you'll see a warning message in the Web Console.
- The {{domxref("Blob.Blob", "Blob()")}} constructor is now available to workers ([Firefox bug 736686](https://bugzil.la/736686)).
- Support for the [Mutation Observers](/zh-CN/DOM/DOM_Mutation_Observers) has been landed. It is designed as a replacement for the Mutation Events in DOM3, which has a number of issues regarding performance.
- The {{ domxref("HTMLImageElement") }} interface's `x` and `y` properties were removed in Gecko 7.0 but restored in this release for compatibility reasons.
- {{ domxref("Document") }}上的方法`execCommandShowHelp()`和`queryCommandText()`,没有任何作用，已被删除。
- The `GeoPositionAddress` interface, an obsolete part of the [Geolocation](/zh-CN/Using_geolocation) API, has been removed.
- {{ domxref("Storage", "localStorage/sessionStorage") }} now correctly return `undefined` instead of `null` for undeclared keys through property access.
- The {{domxref("ImageData")}} object has been implemented ([Firefox bug 550309](https://bugzil.la/550309)).
- Attributes and methods related to child nodes on {{domxref("Attr")}} interface where obsoleted ([Firefox bug 737122](https://bugzil.la/737122)).

### CSS

- The {{ cssxref("text-transform") }} and {{ cssxref("font-variant") }} CSS properties have been fixed to correctly handle the `i` → `İ` and `ı` → `I` [Turkic](http://en.wikipedia.org/wiki/Turkic_languages)-specific case pairs.
- The Dutch IJ digraph is now correctly handled by `text-transform: capitalization`. Similarly the Greek letter `Σ`, which has two lowercase forms, `σ` and `ς`, is now correctly handled by `text-transform: lowercase`.
- Support for the `skew()` function has been removed from {{cssxref("transform")}} property, as it has been removed from the draft standard.
- The syntax for {{ cssxref("border-image") }} has been updated to match the latest revision of the specification; it no longer accepts a trailing slash ("/").

### JavaScript

_No change._

### MathML

- The syntax of the `statusline` action type on {{ MathMLElement("maction") }} elements has been adjusted to follow the MathML specification.

### HTTP

- Gecko 开始支持新的[HTTP](/zh-CN/HTTP) [`308 永久重定向`](/zh-CN/HTTP/HTTP_response_codes#308) 状态码。由于 Gecko 并不区分永久重定向和临时重定向，所以该状态码的表现行为和[`307 临时重定向`](/zh-CN/HTTP/HTTP_response_codes#307)状态码是一样的，和 302 以及 301 状态码的区别是，它们禁止用户代理改变重定之后的 HTTP 方法 (`POST` 还是 `POST`, `GET` 还是 `GET`).

## Changes for Mozilla and add-on developers

### JavaScript 代码模块

#### source-editor.jsm

- Added a keyboard shortcut to toggle commenting for the current selection (Ctrl-/ or Cmd-/ on Mac OS X).
- Added the Ctrl-\[ and Ctrl-] keyboard shortcuts for moving the text input position to the beginning and end of the current block.
- Added the new [`getLineStart()`](/zh-CN/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) and [`getLineEnd()`](/zh-CN/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) methods.

### XUL

- 在 `<window>` 元素上添加了新的 `fullscreenbutton` 属性；将该属性设置为`true`，会在窗口上添加一个进入全屏模式的按钮。

### 接口

- `nsILocalFile`接口被合并到`nsIFile`接口中。([bug 682360](https://bugzilla.mozilla.org/show_bug.cgi?id=682360)).
- The methods in `nsIPlacesImportExportService` for importing bookmarks have all been removed in favor of the [`BookmarkHTMLUtils.jsm`](/zh-CN/JavaScript_code_modules/BookmarkHTMLUtils.jsm) JavaScript code module.
- `nsIDOMGeoPositionAddress` 接口已被移除。

### 拼写检查

- Dictionary names are now parsed as full [BCP 47](http://tools.ietf.org/html/bcp47) language tags ([bug 730209](https://bugzilla.mozilla.org/show_bug.cgi?id=730209), [bug 741842](https://bugzilla.mozilla.org/show_bug.cgi?id=741842)). Developers are encouraged to not hard-code the name of their language in their dictionary names.

## 相关链接

{{Firefox_for_developers('13')}}
