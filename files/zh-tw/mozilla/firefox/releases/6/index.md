---
title: Firefox 6 技術文件
slug: Mozilla/Firefox/Releases/6
---

{{FirefoxSidebar}}

Firefox 6, based on Gecko 6.0, was released on August 16, 2011. This article provides links to information about the changes that affect developers in this release.

## Changes for web developers

### HTML

- The HTML5 [`<progress>`](/zh-TW/docs/Web/HTML/Element/progress) element, which lets you create a progress bar, is now supported.
- The parsing of the HTML5 [`<track>`](/zh-TW/docs/Web/HTML/Element/track) element, which specifies text tracks for media elements, is now supported. This element should appear in the DOM now, though its behavior is still not implemented.
- The [`<iframe>`](/zh-TW/docs/Web/HTML/Element/iframe) element is now clipped correctly by its container when the container's corners have been rounded using the [`border-radius`](/zh-TW/docs/Web/CSS/border-radius) property.
- [`<form>`](/zh-TW/docs/Web/HTML/Element/form) elements' text [element is used to create interactive controls for web-based forms in order to accept data from the user.">`<input>`](/zh-TW/docs/Web/HTML/Element/input) fields no longer support the XUL [`maxwidth`](/zh-TW/docs/XUL/Property/maxwidth) property; this was never intentional, and is in violation of the HTML specification. You should instead use the [`size`](/zh-TW/docs/Web/HTML/Element/input#size) attribute to set the maximum width of input fields.
- The [元素 可以被使用於對腳本程式(JaveScript) 繪圖 .舉例來說, 它能用來畫圖,組合照片,甚至作動畫. 你也許(應該) 在\<canvas>區段內提供替代方案的內容 .這內容將能被一些不支援\<canvas>以及無法使用 Javescript 功能的瀏覽器所渲染 .">`<canvas>`](/zh-TW/docs/Web/HTML/Element/canvas) [元素上以 "2d" 為參數呼叫 getContext() 方法：'>`CanvasRenderingContext2d`](/zh-TW/docs/Web/API/CanvasRenderingContext2d) properties `fillStyle` and `strokeStyle` used to ignore garbage included after a valid color definition; now this is correctly treated as an error. For example, "red blue" as a color used to be treated as "red", when it should have been ignored.
- The width and height of [元素 可以被使用於對腳本程式(JaveScript) 繪圖 .舉例來說, 它能用來畫圖,組合照片,甚至作動畫. 你也許(應該) 在\<canvas>區段內提供替代方案的內容 .這內容將能被一些不支援\<canvas>以及無法使用 Javescript 功能的瀏覽器所渲染 .">`<canvas>`](/zh-TW/docs/Web/HTML/Element/canvas) elements can now properly be set to 0px; previously, these were getting arbitrarily set to 300px when you tried to do that.
- Support for the HTML [custom data attributes](/zh-TW/HTML/Global_attributes#data-*) (data-\*) has been added. The DOM [`element.dataset`](/zh-TW/docs/Web/API/Element/dataset) property allows to access them.
- When a [`<textarea>`](/zh-TW/docs/Web/HTML/Element/textarea) element receives focus, the text insertion point is now placed, by default, at the beginning of the text rather than at the end. This makes Firefox's behavior consistent with other browsers.

### CSS

- [`-moz-text-decoration-color`](/zh-TW/docs/Web/CSS/text-decoration-color)
  - : This new property lets you set the color used by text decorations, such as underlines, overlines, and strikethroughs.
- [`-moz-text-decoration-line`](/zh-TW/docs/Web/CSS/text-decoration-line)
  - : This new property lets you set the kind of text decorations added to an element.
- [`-moz-text-decoration-style`](/zh-TW/docs/Web/CSS/text-decoration-style)
  - : This new property lets you set the style of text decorations, such as underlines, overlines, and strikethroughs. Styles include single-strokes, double strokes, wavy lines, dotted lines, and so forth.
- [`-moz-hyphens`](/zh-TW/docs/Web/CSS/hyphens)
  - : This new property lets you control how hyphenation of words during line wrapping is handled.
- [`-moz-orient`](/zh-TW/docs/Web/CSS/orient)
  - : A new (currently Mozilla-specific) property which lets you control the vertical or horizontal orientation of certain elements (particularly [`<progress>`](/zh-TW/docs/Web/HTML/Element/progress)).
- [`::-moz-progress-bar`](/zh-TW/docs/Web/CSS/::-moz-progress-bar)
  - : A Mozilla-specific pseudo-element that lets you style the area of an [`<progress>`](/zh-TW/docs/Web/HTML/Element/progress) element representing the completed portion of a task.

#### Other changes

- The [`@-moz-document`](/zh-TW/docs/Web/CSS/@-moz-document) property has a new `regexp()` function, which lets you match the document's URL to a [regular expression](/zh-TW/JavaScript/Guide/Regular_Expressions).
- The [`azimuth`](/zh-TW/docs/Web/CSS/azimuth) CSS property is no longer supported, as we have removed what little code we had for the `aural` media group. It was never significantly implemented, so it made more sense to remove the crufty implementation for the time being rather than try to patch it up.
- In the past, the [`:hover`](/zh-TW/docs/Web/CSS/:hover) pseudoclass was not applied to class selectors when in quirks mode; for example, `.someclass:hover` did not work. This quirk has been removed.
- The [`:indeterminate`](/zh-TW/docs/Web/CSS/:indeterminate) pseudo-class can be applied to [`<progress>`](/zh-TW/docs/Web/HTML/Element/progress) elements. This is non-standard, but we hope it will be adopted by other browsers, because it will be useful.
- The `-moz-win-exclude-glass` value has been added to the [`-moz-appearance`](/zh-TW/docs/Web/CSS/-moz-appearance) CSS property in order to exclude opaque regions in Aero Glass glaze effects on Windows systems.
- [bug 658949](https://bugzilla.mozilla.org/show_bug.cgi?id=658949) changed how the hash (#) symbol is treated in data URIs which may break CSS stylesheets which contain such a symbol if it is not escaped.

### DOM

- [Using media queries from code](/zh-TW/CSS/Using_media_queries_from_code)
  - : You can now test the result of a media query string programmatically using the [`window.matchMedia()`](/zh-TW/docs/Web/API/Window/matchMedia) method and the [`MediaQueryList`](/zh-TW/docs/Web/API/MediaQueryList) interface.
- [Touch events](/zh-TW/DOM/Touch_events)
  - : Firefox 6 adds support for W3C standard touch events; these make it easy to interpret one or more touches at a time on touch-sensitive surfaces such as touch screens and trackpads.
- [Server-sent events](/zh-TW/Server-sent_events)
  - : Server-sent events make it possible for a web application to ask a server to send events just like any locally-created DOM event.

- `navigator.securityPolicy`, which has returned an empty string for a long time, has been removed outright.
- [`BlobBuilder`](/zh-TW/docs/Web/API/BlobBuilder) is now implemented, although for now it's prefixed (so you need to use `MozBlobBuilder`).
- The [`document.height`](/zh-TW/docs/Web/API/Document/height) and [元素的寬度有多少像素。">`document.width`](/zh-TW/docs/Web/API/Document/width) have been removed. [bug 585877](https://bugzilla.mozilla.org/show_bug.cgi?id=585877)
- The [`DocumentType`](/zh-TW/docs/Web/API/DocumentType) object's `entities` and `notations` properties, which were never implemented and always returned `null`, have been removed, since they've been removed from the specification anyway.
- The `DOMConfiguration` interface and the `document.domConfig` property that used it have both been removed; they were never supported and have since been removed from the DOM specification.
- The `hashchange` event now correctly includes [the `newURL` and `oldURL` fields](/zh-TW/DOM/window.onhashchange#The_hashchange_event).
- The [`FileReader`](/zh-TW/docs/Web/API/FileReader) interface's `abort()` method now throws an exception when used if no file read is in progress.
- The [`window.postMessage()`](/zh-TW/docs/Web/API/Window/postMessage) method now uses [the structured clone algorithm](/zh-TW/DOM/The_structured_clone_algorithm) to let you pass JavaScript objects instead of just strings from one window to another.
- The [`window.history`](/zh-TW/docs/Web/API/Window/history) API now uses [the structured clone algorithm](/zh-TW/DOM/The_structured_clone_algorithm) to serialize the objects you pass to the `pushState()` and `replaceState()` methods; this lets you use more complex objects (including those that contain cyclic graphs of references).
- You can now [detect when printing has been initiated and has completed](/zh-TW/Printing#Detecting_print_requests) by listening for the new `beforeprint` and `afterprint` events.
- The `document.strictErrorChecking` property has been removed, since it was never implemented and was removed from the DOM specification.
- The standard [`event.defaultPrevented`](/zh-TW/docs/Web/API/Event/defaultPrevented) property is now supported; you should use this instead of the non-standard `getPreventDefault()` method to detect whether or not [`event.preventDefault()`](/zh-TW/docs/Web/API/Event/preventDefault) was called on the event.
- The [`window.top`](/zh-TW/docs/Web/API/Window/top) property is now properly read only.
- DOM views, which we never documented, have been removed. This was a bit of implementation detail that was unnecessarily complicating things, so we got rid of it. If you notice this change, you're probably doing something wrong.
- The `EventTarget` function [`addEventListener()`](/zh-TW/XPCOM_Interface_Reference/nsIDOMEventTarget)'s `useCapture` parameter is now optional, as it is in WebKit (and as per the latest version of the specification).
- The `mozResponseArrayBuffer` property of the [`XMLHttpRequest`](/zh-TW/DOM/XMLHttpRequest) object has been replaced with the `responseType` and `response` properties.
- The [`element.dataset`](/zh-TW/docs/Web/API/Element/dataset) property has been added to the [`HTMLElement`](/zh-TW/DOM/HTMLElement) interface allowing access to the [`data-*` global attributes](/zh-TW/HTML/Global_attributes#data-*) of an element.
- The [`CustomEvent`](/zh-TW/docs/Web/API/CustomEvent) interface has been implemented. (see [bug 427537](https://bugzilla.mozilla.org/show_bug.cgi?id=427537))
- For security reasons, `data:` and `javascript:` URIs no longer inherit the security context of the current page when the user enters them in the location bar; instead, a new, empty, security context is created. This means that script loaded by entering `javascript:` URIs in the location bar no longer has access to DOM methods and the like, for example. These URIs continue to work as before when used by script, however.

### JavaScript

- In the past, it was possible to use the `new` operator on several built-in functions (eval, parseInt, Date.parse...) that should not have allowed it, according to the specification. This behavior is no longer supported. Using the `new` operator in this way was never officially supported and was not widely done, so it's unlikely that this change affects you.
- ECMAScript Harmony [WeakMaps](/zh-TW/JavaScript/Reference/Global_Objects/WeakMap) have been added as a prototype implementation.

### SVG

- The [`pathLength`](/zh-TW/docs/Web/SVG/Attribute/pathLength) attribute is now supported.
- SVG patterns, gradients, and filters now work correctly when loaded from [`data:` URLs](/zh-TW/data_URIs).

### MathML

- The implementation of [`"><mstyle>`](/zh-TW/docs/Web/MathML/Element/mstyle) has been corrected.

### Accessibility (ARIA)

- A state change event is now correctly sent when the value of `aria-busy` changes.
- An attribute change event is now correctly sent when `aria-sort` occurs.

### Networking

- [WebSockets](/zh-TW/WebSockets)
  - : WebSockets was updated to protocol version 07 for Firefox 6. In addition, the global `WebSocket` object has been renamed to `MozWebSocket` to prevent it from incorrectly being used to detect the availability of unprefixed WebSockets.

- Parsing of the `Content-Disposition` header has been fixed to properly interpret backslash-escaped ASCII characters as just that character itself. Previously it was incorrectly replacing that character with an underscore ("\_").
- The value of the path field on `Set-Cookie` headers is now interpreted correctly when quotes are used; previously, they were being treated as part of the path string instead of as delimiters. **This change may affect compatibility with some web sites**, so authors should check their code.
- The [`Upgrade`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) request header is now supported; you can request an upgrade of an HTTP channel to another protocol by calling [`nsIHttpChannelInternal.HTTPUpgrade()`](</zh-TW/docs/XPCOM_Interface_Reference/nsIHttpChannelInternal#HTTPUpgrade()>).

### Other changes

- Support for microsummaries has been removed; these were never widely used, were not very discoverable, and continuing to support them was making improvements to the Places (bookmark and history) architecture difficult.
- WebGL now supports the [`OES_texture_float`](http://www.khronos.org/registry/gles/extensions/OES/OES_texture_float.txt) extension.
- The new [Scratchpad](/zh-TW/Tools/Scratchpad) tool provides a handy place to experiment with JavaScript code.
- The `console.trace()` method has been added to the [ConsoleAPI](/zh-TW/Tools/Web_Console) (see [bug 585956](https://bugzilla.mozilla.org/show_bug.cgi?id=585956)).

## Changes for Mozilla and add-on developers

For an overview of the changes you may need to make in order to make your add-on compatible with Firefox 6, see [Updating add-ons for Firefox 6](/zh-TW/Firefox/Updating_add-ons_for_Firefox_6).

> **備註：** Firefox 6 requires that binary components be recompiled, as do all major releases of Firefox. See [Binary Interfaces](/En/Developer_Guide/Interface_Compatibility#Binary_Interfaces) for details.

### JavaScript code modules

#### FileUtils.jsm

- The `openSafeFileOutputStream()` method now opens files with the `DEFER_OPEN` [behavior flag](/zh-TW/XPCOM_Interface_Reference/nsIFileOutputStream#Behavior_flag_constants) instead of attempting to open them immediately.

#### XPCOMUtils.jsm

- The new [`importRelative()`](</en/JavaScript_code_modules/XPCOMUtils.jsm#importRelative()>) method lets you load one JavaScript code module from a path relative to the path of another JavaScript code module. This makes it easier to build modules that depend on each other.

### XPCOM

- [`nsCOMArray<T>`](/zh-TW/XPCOM_array_guide#nsCOMArray.3cT.3e) now has a [`RemoveObjectsAt()`](/zh-TW/XPCOM_array_guide#Deleting_objects) method for removing multiple objects at once from the array.

### Using the DOM from chrome

- [Using the DOM File API in chrome code](/zh-TW/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Although you've always been able to use the DOM File API from chrome code, the [`File`](/zh-TW/docs/Web/API/File) constructor now supports specifying a local pathname string when used from chrome. In addition, you can also specify the file to access using the DOM File API using an [`nsIFile`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile) object.

### Interface changes

- [`nsINavHistoryQueryOptions`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions) now supports sorting in frecency order using the new `SORT_BY_FRECENCY_ASCENDING` and `SORT_BY_FRECENCY_DESCENDING` constants.
- [`nsIFilePicker`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFilePicker) has a new [`nsIFilePicker.addToRecentDocs`](/zh-TW/docs/XPCOM_Interface_Reference/nsIFilePicker#addToRecentDocs) attribute, which lets you indicate that the selected file should be added to the user's "recent documents" list if there is one. This attribute has no effect when in private browsing mode.
- [`nsINavBookmarkObserver`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavBookmarkObserver) methods with item ID parameters now require a GUID as well.
- [`nsIPrefBranch.clearUserPref()`](</zh-TW/docs/XPCOM_Interface_Reference/nsIPrefBranch#clearUserPref()>) no longer throws an exception if the specified preference doesn't exist or has no user-set value. Instead, it simply does nothing.
- The [`nsIMemoryReporter`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporter) interface now provides support for indicating the kind of memory being described (mapped, heap, or other).
- The [`nsISHEntry`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISHEntry) `stateData` attribute now returns a [`nsIStructuredCloneContainer`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIStructuredCloneContainer).
- [`nsIURI`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) has a new [`nsIURI.ref`](/zh-TW/docs/XPCOM_Interface_Reference/nsIURI#ref) attribute, which returns the reference portion (the part after the "#") of the URI. It also has new methods [`nsIURI.cloneIgnoringRef()`](</zh-TW/docs/XPCOM_Interface_Reference/nsIURI#cloneIgnoringRef()>) which clones the [`nsIURI`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) without the ref member and [`nsIURI.equalsExceptRef()`](</zh-TW/docs/XPCOM_Interface_Reference/nsIURI#equalsExceptRef()>) which compares to another [`nsIURI`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) ignoring the ref member.

#### New interfaces

- [`mozIAsyncFavicons`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIAsyncFavicons)
  - : A new service that lets you access the favicon service asynchronously.
- [`nsIEventSource`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEventSource)
  - : _Details forthcoming._
- [`nsIGSettingsCollection`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGSettingsCollection)
  - : _Details forthcoming._
- [`nsIGSettingsService`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGSettingsService)
  - : _Details forthcoming._
- [`nsIHttpUpgradeListener`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIHttpUpgradeListener)
  - : The callback interface for handling HTTP upgrade requests via the [`nsIHttpChannelInternal.HTTPUpgrade()`](</zh-TW/docs/XPCOM_Interface_Reference/nsIHttpChannelInternal#HTTPUpgrade()>) method.
- [`nsIStructuredCloneContainer`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIStructuredCloneContainer)
  - : A container for objects that have been serialized using the [structured clone algorithm](/zh-TW/HTML/Structured_clones).
- [`nsITelemetry`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITelemetry)
  - : Implements telemetry support to allow recording of telemetry data to be used to present histograms for performance tracking purposes. See [bug 649502](https://bugzilla.mozilla.org/show_bug.cgi?id=649502) and [bug 585196](https://bugzilla.mozilla.org/show_bug.cgi?id=585196).
- [`nsITimedChannel`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITimedChannel)
  - : See [bug 576006](https://bugzilla.mozilla.org/show_bug.cgi?id=576006).
- [`nsIWebSocketListener`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebSocketListener)
  - : See [bug 640003](https://bugzilla.mozilla.org/show_bug.cgi?id=640003).
- [`nsIWebSocketProtocol`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebSocketProtocol)
  - : See [bug 640003](https://bugzilla.mozilla.org/show_bug.cgi?id=640003).

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsIDOMDocumentEvent` (see [bug 655517](https://bugzilla.mozilla.org/show_bug.cgi?id=655517))
- `nsIDOMDocumentTraversal` (see [bug 655514](https://bugzilla.mozilla.org/show_bug.cgi?id=655514))
- `nsIDOMDocumentRange` (see [bug 655513](https://bugzilla.mozilla.org/show_bug.cgi?id=655513))
- `IWeaveCrypto` (see [bug 651596](https://bugzilla.mozilla.org/show_bug.cgi?id=651596))
- `nsIDOM3DocumentEvent` (see [bug 481863](https://bugzilla.mozilla.org/show_bug.cgi?id=481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (see [bug 637253](https://bugzilla.mozilla.org/show_bug.cgi?id=637253))
- `nsIPluginInstance` (see [bug 637253](https://bugzilla.mozilla.org/show_bug.cgi?id=637253))
- `nsIHTMLEditRules` (see [bug 633750](https://bugzilla.mozilla.org/show_bug.cgi?id=633750))
- [`nsIXSLTProcessorObsolete`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXSLTProcessorObsolete) (see [bug 649534](https://bugzilla.mozilla.org/show_bug.cgi?id=649534))

### Other changes

- [Using preferences from application code](/zh-TW/Mozilla/Preferences/Using_preferences_from_application_code)
  - : A new static API is available for easily accessing preferences; this is only available to application code and can't be used by add-ons.

## See also

- [Firefox 5 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/1.5)
