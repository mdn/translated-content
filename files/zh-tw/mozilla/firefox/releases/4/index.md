---
title: Firefox 4 技術文件
slug: Mozilla/Firefox/Releases/4
---

{{FirefoxSidebar}}

2010 年六月起進入 Beta 測試期的 Firefox 4，增進了效能、加強針對 HTML 5 及其他創新網際科技的支援程度，也更加安全。本文為網頁、附加元件、Gecko 平台開發者們提供這一版的簡要技術相關資訊。

Gecko 1.9.3 即將更名為 Gecko 2，但許多文件還沒有針對此點更新，在接下來的幾個星期中才會有所更動。

以下大部分的功能都已經可以在 [逐日建置版](http://nightly.mozilla.org/)中試用。

> **備註：** 本文、以及本文所連結的其他文件仍持續編修中，很多文件的名稱只是暫定、有些主題的文件也可能會拆成幾份子文件以方便閱讀。中文團隊的目標將僅翻譯這份概覽，其他子文件則有待大家的幫忙。

## Features for web developers

Gecko now uses the [HTML5](/zh-TW/HTML/HTML5) parser, which fixes bugs, improves interoperability, and improves performance. It also lets content embed [SVG](/zh-TW/SVG) and [MathML](/zh-TW/MathML) directly in the HTML markup.

### HTML

- Introduction to the HTML5 parser
  - : A look at what the HTML5 parser means to you, and how to embed SVG and MathML into your content inline.
- [Forms in HTML5](/zh-TW/HTML/HTML5/Forms_in_HTML5)
  - : A look at improvements to web forms in HTML5.
- [HTML5 Sections](/zh-TW/Sections_and_Outlines_of_an_HTML5_document)
  - : Gecko now supports the new HTML5 elements related to sections in a document: {{ HTMLElement("article") }}, {{ HTMLElement("section") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }} and {{ HTMLElement("footer") }}.
- Other HTML5 elements
  - : Gecko now also supports the following new HTML5 elements: {{ HTMLElement("mark") }}, {{ HTMLElement("figure") }} and {{ HTMLElement("figcaption") }}.
- WebSockets
  - : A guide to using the new WebSockets API for real-time communication between a web application and a server.

#### Miscellaneous HTML changes

- {{ HTMLElement("textarea") }} elements are now resizable by default; you can use the {{ cssxref("resize") }} CSS property to disable this.
- `canvas.getContext` and `canvas.toDataURL` no longer throw an exception when called with unrecognized arguments.
- `canvas2dcontext.globalCompositeOperation`, `canvas2dcontext.lineCap` and `canvas2dcontext.lineJoin` no longer throw an exception when set to an unrecognized value.

### CSS

- [CSS transitions](/zh-TW/CSS/CSS_transitions)
  - : New CSS transitions support is available in Firefox 4.
- Computed values in CSS
  - : Support for` calc() `to compute values in CSS is in progress. See [Firefox bug 363249](https://bugzil.la/363249).
- Selector grouping
  - : Support for {{ cssxref(":-moz-any") }} to group selectors and factorize combinators.
- Background image subrectangle support
  - : The {{ cssxref("-moz-image-rect") }} property makes it possible to use subrectangles of images as a background image.
- CSS touch properties
  - : Support for touch properties is added. Details, and real article names, to come later.
- [Privacy and the :visited selector](/zh-TW/CSS/Privacy_and_the_:visited_selector)
  - : Changes have been made to what information can be obtained about the style of visited links using CSS selectors. This may affect some web applications.

#### Miscellaneous CSS changes

- The {{ cssxref("text-shadow") }} property now caps the blur radius to 300px for sanity and performance reasons.
- The {{ cssxref(":-moz-window-inactive") }} pseudoclass has been implemented.
- The {{ cssxref("-moz-tab-size") }} property lets you specify the width in space characters of a tab character (U+0009) when rendering text.
- The CSS3 {{ cssxref("resize") }} property has been implemented.
- The` -moz-background-size `property has been renamed to its final {{ cssxref("background-size") }} naming; `-moz-background-size` is no longer supported.
- The {{ cssxref("oveflow") }} property no longer applies to table-group elements ({{ HTMLElement("thead") }}, {{ HTMLElement("tbody") }}, and {{ HTMLElement("tfoot") }}).

### Graphics and video

- [WebGL](/zh-TW/WebGL)

  - : The developing WebGL standard is now supported by Firefox.

- Optimizing graphics performance
  - : Tips and tricks for getting the most out of graphics and video performance in Firefox 4.
- [Support for WebM video](/En/Media_formats_supported_by_the_audio_and_video_elements#WebM)
  - : The new open [WebM](http://www.webmproject.org/) video format is supported by Gecko 1.9.3; support is included in nightlies as of 9 June.
- Full screen API
  - : Details coming soon.
- SMIL animation
  - : Support for SMIL animation of SVG is now available. See [Firefox bug 482402](https://bugzil.la/482402).
- Using SVG as images and as CSS backgrounds
  - : You can now use SVG with the {{ htmlelement("img") }} element, as well as the background image in CSS. See [Firefox bug 272288](https://bugzil.la/272288), [Firefox bug 276431](https://bugzil.la/276431) and [Firefox bug 231179](https://bugzil.la/231179).

### DOM

- Obtaining boundary rectangles for ranges
  - : The Range object now has `getClientRects()` and `getBoundingClientRect()` methods. See [Firefox bug 396392](https://bugzil.la/396392).
- Capturing mouse events on arbitrary elements
  - : Support for the Internet Explorer-originated `setCapture()` and `releaseCapture()` APIs has been added. See [Firefox bug 503943](https://bugzil.la/503943).
- [Manipulating the browser history](/zh-TW/DOM/Manipulating_the_browser_history)
  - : The existing document history object, available through the {{ domxref("window.history") }} object, now supports the new HTML5 `pushState()` and `replaceState()` methods.
- Touch and multi-touch events
  - : Support has been added for touch and multi-touch events.
- [IndexedDB](/zh-TW/IndexedDB)
  - : The proposed IndexedDB standard, which provides a local database store for web applications, will be supported by Firefox 4.

#### Miscellaneous DOM changes

- The wrapping of a {{ HTMLElement("textarea") }} element can now be controlled via the DOM, via the `wrap` DOM attribute. [Firefox bug 41464](https://bugzil.la/41464)
- DOM {{ domxref("file") }} objects now offer a `url` property.
- DOM {{ domxref("file") }} objects now have a new `click()` method. (Note: not done yet, see [bug 36619](https://bugzilla.mozilla.org/show_bug.cgi?id=36619).)
- [FormData](/En/XMLHttpRequest/Using_XMLHttpRequest#Using_FormData_objects) support for XMLHttpRequest.
- The {{ domxref("element.isContentEditable") }} property has been implemented.
- Added the [`mozSourceNode`](/En/DragDrop/DataTransfer#mozSourceNode) property to the [`DragTransfer`](/En/DragDrop/DataTransfer) object.
- Added the [`selection.modify()`](/zh-TW/DOM/Selection/modify) method to the {{ domxref("Selection") }} object; this lets you easily alter the current text selection or cursor position in a browser window.
- Support for the `window.directories` object and the `directories` feature for {{ domxref("window.open") }}, which are not supported in any other browser, has been removed. Use `personalbar` instead. [Firefox bug 474058](https://bugzil.la/474058)
- The {{ domxref("event.mozInputSource") }} property has been added to DOM user interface events; this non-standard property lets you determine the type of device that generated an event.
- The {{ domxref("document.onreadystatechange") }} event has been implemented.
- The {{ domxref("document.createElement") }} method no longer accepts `<` and `>` around the tag name in quirks mode.

### Security

- [Introducing Content Security Policy](/zh-TW/Security/CSP/Introducing_Content_Security_Policy)
  - : Content Security Policy (CSP) is a Mozilla proposal designed to help web designers and server administrators specify how content on their web sites interacts. The goal is to help detect and mitigate attacks including cross-site scripting and data injection attacks.
- ForceTLS
  - : Details soon.
- The Account Manager
  - : Details soon.

### JavaScript

For an overview of the changes implemented in JavaScript 1.8.5, see [New in JavaScript 1.8.5](/zh-TW/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 will have additional adherence to the ECMAScript 5 standard.

## Changes for Mozilla and add-on developers

For helpful tips on updating existing extensions for Firefox 4, see [Updating extensions for Firefox 4](/zh-TW/Extensions/Updating_extensions_for_Firefox_4).

### JavaScript code modules

- [Services.jsm](/zh-TW/JavaScript_code_modules/Services.jsm)
  - : The `Services.jsm` code module provides getters that make it easy to obtain references to commonly-used services, such as the preferences service or the window mediator, among others.
- [JS-ctypes API](/zh-TW/JavaScript_code_modules/ctypes.jsm)
  - : The JS-ctypes API makes it possible to call C-compatible foreign library functions without using XPCOM.
- [Add-ons Manager](/zh-TW/Addons/Add-on_Manager)
  - : The new Add-ons Manager provides information about installed add-ons, support for managing them, and provides ways to install and remove add-ons.
- [Loading code modules from chrome: URLs](/zh-TW/JavaScript_code_modules/Using#Locating_the_code_module)
  - : You can now load JavaScript code modules using **chrome:** URLs, even inside JAR files.

### DOM changes

- {{ domxref("ChromeWorker") }}
  - : A new type of worker for privileged code; this lets you use things like [js-ctypes](/zh-TW/js-ctypes) from workers in extensions and application code.

### XUL

#### tabbrowser (gBrowser) changes

Several changes were made to the [`<xul:tabbrowser>`](/zh-TW/docs/Mozilla/Tech/XUL/tabbrowser) element that impact extensions that interact with tabs.

- TabClose/TabSelect/TabOpen events no longer bubble up to the [`<xul:tabbrowser>`](/zh-TW/docs/Mozilla/Tech/XUL/tabbrowser) element (gBrowser). Event listeners for those events should be added to gBrowser.tabContainer rather than to gBrowser directly.
- The tab context menu is no longer an anonymous child of the [`<xul:tabbrowser>`](/zh-TW/docs/Mozilla/Tech/XUL/tabbrowser). It can therefore be overlaid directly with [XUL overlays](/zh-TW/XUL_Overlays). It can also be accessed more directly in JS via gBrowser.tabContextMenu. See [this blog post](http://www.gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) for more details.

#### Miscellaneous XUL changes

- The `readonly` attribute now correctly works for fields.
- The [`<xul:resizer>`](/zh-TW/docs/Mozilla/Tech/XUL/resizer) element now lets you use the [`element`](/zh-TW/docs/Mozilla/Tech/XUL/Attribute/element) attribute to specify an element to resize, instead of resizing the window.
- The "active" attribute no longer gets set on active XUL windows. Instead, you can use the new {{ cssxref(":-moz-window-inactive") }} pseudoclass in order to assign different styles to background windows.
- The [`emptytext`](/zh-TW/docs/Mozilla/Tech/XUL/Attribute/emptytext) attribute is now deprecated; you should use [`placeholder`](/zh-TW/docs/Mozilla/Tech/XUL/Attribute/placeholder) instead.
- The [`<xul:popup>`](/zh-TW/docs/Mozilla/Tech/XUL/popup) element is no longer supported; you should use [`<xul:menupopup>`](/zh-TW/docs/Mozilla/Tech/XUL/menupopup) instead.

### Storage

#### Miscellaneous storage API changes

- The `mozIStorageBindingParamsArray` interface now has a length attribute that indicates the number of `mozIStorageBindingParams` objects in the array.
- The `mozIStorageStatement.bindParameters()` now returns an error if the specified `mozIStorageBindingParamsArray` is empty.

### XPCOM

- [XPCOM changes in Gecko 1.9.3](/zh-TW/Extensions/Updating_extensions_for_Firefox_4)
  - : Details about changes to XPCOM that impact compatibility in Firefox 4.
- [Components.utils.getGlobalForObject()](/zh-TW/Components.utils.getGlobalForObject)
  - : This new method returns the global object with which an object is associated; this replaces a common use case of the now-removed `__parent__`.

### Memory management

- [Infallible memory allocation](/zh-TW/Infallible_memory_allocation)
  - : Mozilla now provides infallible memory allocators that are guaranteed not to return null. You should read this article to learn how they work and how to explicitly request fallible versus infallible memory allocation.

## Other changes

- Gopher support removed
  - : The Gopher protocol is no longer supported natively. Continued support is available via the [OverbiteFF](https://addons.mozilla.org/addon/7685/) extension.
- Default plugin removed
  - : The default plugin has been removed. The application plugins folder has also been removed by default, however support for installing plugins via this folder still exists. See [bug 533891](https://bugzilla.mozilla.org/show_bug.cgi?id=533891).
- Extension Manager replaced with AddonManager
  - : [nsIExtensionManager](/zh-TW/XPCOM_Interface_Reference/nsIExtensionManager) has been replaced by [AddonManager](/zh-TW/Addons/Add-on_Manager/AddonManager). Since there is apparently no way at present to obtain the install location from a given extension ID, the closest workaround is to use the directory service to find the profile directory and append "extensions" to it (though this approach will not catch extensions outside of the profile directory or those which are aliased to another location).

## 參考

- [Firefox 3.6 for developers](/zh-TW/Firefox_3.6_for_developers)
- [Firefox 3.5 for developers](/En/Firefox_3.5_for_developers)
- [Firefox 3 for developers](/zh-TW/Firefox_3_for_developers)
- [Firefox 2 for developers](/zh-TW/Firefox_2_for_developers)
- [Firefox 1.5 for developers](/zh-TW/Firefox_1.5_for_developers)
