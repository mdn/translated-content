---
title: Firefox 11 技術文件
slug: Mozilla/Firefox/Releases/11
---

{{FirefoxSidebar}}

Firefox 11 shipped on March 13, 2012. This article provides information about the new features and key bugs fixed in this release, as well as links to more detailed documentation for both web developers and add-on developers.

## Changes for Web developers

### HTML

- The attributes `muted` and `loop` on {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements have been implemented.

### DOM

- The {{domxref("element.outerHTML")}} property is now supported on HTML elements.
- [`XMLHttpRequest` supports HTML parsing](/zh-TW/docs/HTML_in_XMLHttpRequest).
- Removed support for using the {{domxref("XMLHttpRequest")}} `responseType` and `withCredentials` attributes when performing synchronous requests. Attempting to do so throws an `NS_ERROR_DOM_INVALID_ACCESS_ERR` exception. This change has been proposed to the W3C for standardization.
- The new {{domxref("window.navigator.mozVibrate()")}} method lets you vibrate the device where supported; this is implemented as `mozVibrate()` on Gecko.
- {{domxref("window.navigator.mozApps")}} returns an [`Apps`](/zh-TW/docs/DOM/Apps) object you can use to install and manage [open web applications](/zh-TW/docs/Apps).
- `MozBeforePaint` events are no longer fired. {{domxref("window.requestAnimationFrame", "mozRequestAnimationFrame()")}} consumers who used these should pass a callback function instead.
- Support for canceling animation frame requests has been added; {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} now returns a request ID value, which you can pass to {{domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} to cancel the request.
- Several {{domxref("Event")}} constructors (`Event`, HTML events, `UIEvent`, and `MouseEvent`) introduced in DOM4 specifications are now supported.
- The {{domxref("window.navigator.mozBattery", "Battery API")}} is now enabled by default.
- Support for the [`defaultMuted`](/zh-TW/docs/DOM/HTMLMediaElement), [`loop`](/zh-TW/docs/DOM/HTMLMediaElement) and [`muted`](/zh-TW/docs/DOM/HTMLMediaElement) properties on [`HTMLMediaElement`](/zh-TW/docs/DOM/HTMLMediaElement) has been added.
- Calling {{domxref("document.mozCancelFullScreen()")}} now restores the previously full-screen element if some other element was in full-screen mode when the current element's {{domxref("element.mozRequestFullScreen()")}} method was called.
- The {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} method no longer supports a no-argument form. This form was not used much and is unlikely to become part of the standard.
- SVG-as-an-image can now be drawn into a canvas without [tainting the canvas](/zh-TW/docs/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F).
- The non-standard `countryCode` property of the `GeoPositionAddress` interface has been removed; see `nsIDOMGeoPositionAddress`.
- [Server-sent events](/zh-TW/docs/Server-sent_events) now support [CORS](/zh-TW/docs/HTTP_access_control).
- In the past, when the user followed a link, the values set on the {{domxref("window.navigator")}} object were retained by the new page. Now a new `navigator` object is created for the new page. This makes Firefox behave like all other browsers.

### CSS

- the [`text-size-adjust`](/zh-TW/docs/CSS/text-size-adjust) property is now supported
- [CSS3](/zh-TW/docs/CSS/CSS3) [Conditional Rules](/zh-TW/docs/CSS/CSS3#Conditional_Rules) are now better supported: nested statements can now be added to [@media](/zh-TW/docs/CSS/@media), [@-moz-document](/zh-TW/docs/CSS/@document). (See [CSS Syntax](/zh-TW/docs/CSS/Syntax) and [CSS at-rules](/zh-TW/docs/CSS/At-rule)).

### JavaScript

_No change._

### SVG

- The {{domxref("SVGSVGElement")}} DOM interface now support the `getElementById` method.

### WebSocket

- [WebSocket](/zh-TW/docs/WebSockets) API now supports binary messages (see {{bug("676439")}}).
- Both the protocol and the API has been updated to the latest draft of the specification and the API has been unprefixed (see {{bug("666349")}} and {{bug("695635")}}).
- Previously, messages sent and received using WebSockets in Firefox were limited to 16 MB in size; they may now be up to 2 GB (although memory capacity limitations may prevent them from being that large, Firefox supports it).

### IndexedDB

- The support for [IDBFactory.cmp()](/zh-TW/docs/IndexedDB/IDBFactory#cmp%28%29) has been added.
- An [IndexedDB key](/zh-TW/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#section_6) can also be of one of the following types: Date, Arrays and Float (and not only String and Integer).

### Network

- The change in Firefox 8 that removed support for double quote characters as delimiters for {{rfc(2231)}} and {{rfc(5987)}} has been reverted, as this broke some sites, including Outlook Web Access.
- The user agent string in HTTP headers now includes an identifier that [lets the server know if the Firefox accessing it is a phone or a tablet](/zh-TW/docs/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators).

### Developer tools

- The [Page Inspector](/zh-TW/docs/Tools/Page_Inspector) now offers a [3D view](/zh-TW/docs/Tools/Page_Inspector/3D_view) if your system supports [WebGL](/zh-TW/docs/WebGL).
- The new [Style Editor](/zh-TW/docs/Tools/Style_Editor) provides a free-form way to edit and compose CSS style sheets in real-time.
- The [View Source feature](/zh-TW/docs/View_source) now uses the new HTML5 parser instead of the old HTML parser.

## Changes for Mozilla and add-on developers

### JavaScript code modules

#### NetUtil.jsm

- [`readInputStreamToString()`](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/NetUtil.html) has a new, optional, parameter to configure the character set interpretation while reading the input stream.

#### New JavaScript code modules

- [`source-editor.jsm`](/zh-TW/docs/JavaScript_code_modules/source-editor.jsm)
  - : Provides a convenient, easy-to-use source code editor that you can use in your add-ons. This is the same editor used by [Scratchpad](/zh-TW/docs/Tools/Scratchpad) and other developer tools integrated into Firefox.

### Interface changes

- The `mozIAsyncHistory` interface has a new method `mozIAsyncHistory.isURIVisited()` to check if a URI has been visited.
- A new interface `mozIVisitStatusCallback` has been added to provide callback handling functionality for `mozIAsyncHistory.isURIVisited()`.
- The `nsIMacDockSupport` interface now supports adding a text badge to the application's icon in the Dock using its new `badgeText` attribute.
- In the `nsINavHistoryResultObserver` interface, you now need to implement `nsINavHistoryResultObserver.containerStateChanged()` instead of the obsolete `containerOpened()` and `containerClosed()` methods.

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsICharsetResolver`
- `nsIDOMNSElement`, see [bug707576](https://bugzilla.mozilla.org/show_bug.cgi?id=707576), use `nsIDOMElement` instead.

### Theme-related changes

- The `omni.jar` file is now called [`omni.ja`](</zh-TW/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Preference changes

- `ui.tooltipDelay`
  - : Specifies the delay, in milliseconds, between the mouse cursor beginning to hover and the display of a tooltip.

### Build system changes

- The `--enable-tracejit` build option has been removed.

### Other changes

- Add-ons that have not been updated in a long time are no longer assumed to be compatible by default; this is currently add-ons that indicate a `maxVersion` of 4.0.

## See also

{{Firefox_for_developers('10')}}
