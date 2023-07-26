---
title: Firefox 8 技術文件
slug: Mozilla/Firefox/Releases/8
---

{{FirefoxSidebar}}

Firefox 8 was released on November 8, 2011. This article provides information both for [web developers](/zh-TW/Firefox_8_for_developers#Changes_for_web_developers) and for add-on and [Mozilla project developers](/zh-TW/Firefox_8_for_developers#Changes_for_Mozilla_and_add-on_developers) to help take full advantage of the features of this release.

## Changes for web developers

### HTML

- The [元素的畫面佈局與外觀呈現。">`HTMLImageElement`](/zh-TW/docs/Web/API/HTMLImageElement) `crossOrigin` property has been added and the [`crossorigin`](/zh-TW/docs/Web/HTML/Element/img#crossorigin) attribute has been added to the [`<img>`](/zh-TW/docs/Web/HTML/Element/img) element. (see [bug 664299](https://bugzilla.mozilla.org/show_bug.cgi?id=664299))
- The [`HTMLSelectElement.add()`](</zh-TW/docs/Web/API/HTMLSelectElement#add()>) method now supports either an item or index of an item that the new item should be inserted before. Previously it only supported an item. (see [bug 666200](https://bugzilla.mozilla.org/show_bug.cgi?id=666200))
- The `HTMLIsIndexElement` constructor has been removed. No elements have implemented this interface since before Firefox 4.
- The HTML5 "context menu" feature (`contextmenu` attribute), which lets you add custom element specific items to native context menu, is now supported (the implementation is still experimental awaiting changes in the specification; see [bug 617528](https://bugzilla.mozilla.org/show_bug.cgi?id=617528)).
- Support for the [`accesskeylabel`](/zh-TW/HTML/Global_attributes#accesskeylabel) attribute has been added to all elements.
- The [element is used to create interactive controls for web-based forms in order to accept data from the user.">`<input>`](/zh-TW/docs/Web/HTML/Element/input) and [`<textarea>`](/zh-TW/docs/Web/HTML/Element/textarea) elements now support the `selectionDirection` attribute, and their `setSelectionRange()` methods have been updated to support optionally specifying a direction.
- Most elements now get a focus ring drawn around them if they've been made focusable by using the `tabindex` attribute and the user then focuses the element.
- In a set of nested [`<label>`](/zh-TW/docs/Web/HTML/Element/label) elements click events do no longer trigger multiple elements, which caused Firefox to stop responding in the past (see [s">bug 646157](https://bugzilla.mozilla.org/show_bug.cgi?id=646157)).

### DOM

- The [`insertAdjacentHTML`](/zh-TW/docs/Web/API/Element/insertAdjacentHTML) method has been implemented.
- [`BlobBuilder`](/zh-TW/docs/Web/API/BlobBuilder) now has a `getFile()` method that returns the content of the blob as a file.
- The [`FileReaderSync`](/zh-TW/docs/Web/API/FileReaderSync) interface (part of the FileAPI) has been implemented.
- Event handling in nested [`<label>`](/zh-TW/docs/Web/HTML/Element/label)s has been fixed.
- You can now use [`window.postMessage()`](/zh-TW/docs/Web/API/Window/postMessage) to pass [`File`](/zh-TW/docs/Web/API/File) and [元素 DOM 物件的 files 屬性（property）。你可以操作 FileList 物件來存取使用者透過 \&lt;input type="file"> 元素所選取的檔案，或由拖放操作所產生的檔案（請參考 DataTransfer 物件的更多使用細節）。'>`FileList`](/zh-TW/docs/Web/API/FileList) objects between windows.
- When editing [`element.contenteditable`](/zh-TW/docs/Web/API/Element/contenteditable) areas, exiting a heading by pressing return, or exiting list editing mode by pressing return twice, now returns to paragraph entry mode (that is, paragraphs inside [`<p>`](/zh-TW/docs/Web/HTML/Element/p) blocks) instead of separating lines by [元素會產生文字的斷行（carriage-return、CR 或是確認鍵）。此元素主要用於寫詩或寫住址，這種斷行有所意義的時候。">`<br>`](/zh-TW/docs/Web/HTML/Element/br) elements.
- Fixed a bug that prevents justification from taking effect properly when applied to the first line in a [`element.contenteditable`](/zh-TW/docs/Web/API/Element/contenteditable) area.
- Fixed a bug that caused pressing delete or backspace at the beginning of a [`element.contenteditable`](/zh-TW/docs/Web/API/Element/contenteditable) area to affect the previous `contenteditable` block if one is present.
- [`document.getSelection()`](/zh-TW/docs/Web/API/Document/getSelection) now returns the same `Selection` object as [`window.getSelection()`](/zh-TW/docs/Web/API/Window/getSelection), instead of _stringifying_ it.
- The HTML5 `selectionDirection` property makes it possible to define the direction of the selection in an editable text.
- [`HTMLMediaElement`](/zh-TW/docs/Web/API/HTMLMediaElement) now have a `seekable` property that return a [`TimeRanges`](/zh-TW/docs/Web/API/TimeRanges) object.
- The [`HTMLMediaElement`](/zh-TW/docs/Web/API/HTMLMediaElement)`.preload` attribute now correctly reflects as an _enumerated value_.
- [`crossOrigin` property](/zh-TW/HTML/CORS_settings_attributes) defaults to "Anonymous" when an invalid value is used.
- [`window.navigator.cookieEnabled`](/zh-TW/docs/Web/API/Window/navigator/cookieEnabled) now returns correct information when the default cookie setting is overridden on a per-site basis.

### JavaScript

- [`RegExp.exec()`](/zh-TW/JavaScript/Reference/Global_Objects/RegExp/exec) and [`RegExp.test()`](/zh-TW/JavaScript/Reference/Global_Objects/RegExp/test) called with no arguments now match against the string "undefined".
- [`String.search()`](/zh-TW/JavaScript/Reference/Global_Objects/String/search) and [`String.match()`](/zh-TW/JavaScript/Reference/Global_Objects/String/match) called with no arguments or `undefined` now match against the empty string and thus match every string.
- Support for watchlists has been implemented with the new (non-standard) [`watch()`](/zh-TW/JavaScript/Reference/Global_Objects/Object/watch) and [`unwatch()`](/zh-TW/JavaScript/Reference/Global_Objects/Object/unwatch) methods.

### CSS

- [`resolution`](/zh-TW/docs/Web/CSS/resolution) now accepts [`<number>`](/zh-TW/docs/Web/CSS/number), not just [`<integer>`](/zh-TW/docs/Web/CSS/integer) values as per the specification.
- Hyphenation rules have been added for many new languages when using [`hyphens`](/zh-TW/docs/Web/CSS/hyphens).
- Handling of [`background-size`](/zh-TW/docs/Web/CSS/background-size) has been revised to more closely match the specification.
- In the past, [`text-decoration`](/zh-TW/docs/Web/CSS/text-decoration) in quirks mode had line thickness and position adjusted on descendant text to match the descendant. Now standards mode and quirks mode rendering are more similar.
- Horizontal positioning for elements has been brought more in line with the specification in many cases. Documentation for this is forthcoming, but for now, see [bug 682780](https://bugzilla.mozilla.org/show_bug.cgi?id=682780), comment 23 for details.
- [SVG images are now scaled properly](/zh-TW/CSS/Scaling_of_SVG_backgrounds) when used as background images.

### Network

- Double quotes are no longer accepted as a delimiter for [RFC 2231](https://tools.ietf.org/html/rfc2231) or [RFC 5987](https://tools.ietf.org/html/rfc5987) encoding, as per those RFCs.
- MIME header field parser (`Content-Disposition`) now requires "=" in parameters.
- Scripts are no longer downloaded when JavaScript is disabled.
- SSL 2.0 is no longer supported.

### WebSockets

- The [`WebSocket`](/zh-TW/WebSockets/WebSockets_reference/WebSocket) object's [`send()`](</en/WebSockets/WebSockets_reference/WebSocket#send()>) method no longer incorrectly returns a Boolean value.
- The [`WebSocket`](/zh-TW/WebSockets/WebSockets_reference/WebSocket) object's [`close()`](</en/WebSockets/WebSockets_reference/WebSocket#close()>) method now matches the current draft of the standard, and close events now properly use the [`CloseEvent`](/zh-TW/WebSockets/WebSockets_reference/CloseEvent) interface.
- The [`WebSocket`](/zh-TW/WebSockets/WebSockets_reference/WebSocket) object's `extensions` attribute is now supported.
- The WebSocket constructor now supports an array of protocols as well as a single protocol string.
- Mixed content is not allowed with WebSockets; that is, you can no longer open a connection to a non-secure WebSocket server from secure content.
- Connection errors with WebSockets now trigger the `onerror` handler.
- [WebSocket](/zh-TW/WebSockets) API has been updated to the latest draft of the specification (see [bug 674890](https://bugzilla.mozilla.org/show_bug.cgi?id=674890), [bug 674527](https://bugzilla.mozilla.org/show_bug.cgi?id=674527), and [bug 674716](https://bugzilla.mozilla.org/show_bug.cgi?id=674716)).
- The deflate-stream extension to WebSockets has been disabled; it has been deprecated, and was breaking compatibility with some sites.

### WebGL

- [Cross-domain textures](/zh-TW/WebGL/Cross-Domain_Textures) can now be allowed with CORS approval.
- Cross-process rendering with Direct2D/Direct3D 10.

### MathML

- Support for the `displaystyle` attribute on the top-level [`"><math>`](/zh-TW/docs/Web/MathML/Element/math) element has been added.
- The interpretation of negative row numbers for the `align` attribute on [`"><mtable>`](/zh-TW/docs/Web/MathML/Element/mtable) has been corrected.

### Developer tools

- The [`console`](/zh-TW/Tools/Web_Console#The_console_object) object has a new `dir()` method, which displays an interactive list of the properties on a specified object.

## Changes for Mozilla and add-on developers

See [Updating add-ons for Firefox 8](/zh-TW/Firefox/Updating_add-ons_for_Firefox_8) for a guide to changes you're likely to have to make to make your add-ons compatible with Firefox 8.

> **備註：** Firefox 8 requires that binary components be recompiled, as do all major releases of Firefox. See [Binary Interfaces](/En/Developer_Guide/Interface_Compatibility#Binary_Interfaces) for details.

### XPCOM

- [`Components.utils`](/zh-TW/Components.utils)
  - : The new methods [`Components.utils.createObjectIn()`](/zh-TW/Components.utils.createObjectIn) and [`Components.utils.makeObjectPropsNormal()`](/zh-TW/Components.utils.makeObjectPropsNormal) have been created to make it easier to create objects in specific compartments.

#### Other XPCOM related changes

- You can now instantiate DOM [`File`](/zh-TW/docs/Web/API/File) objects from component code by simply doing new File, instead of having to instantiate an [`nsIDOMFile`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMFile) directly.
- The `nsTPtrArray` array type has been removed. Its functionality is now all available on `nsTArray`, which now offers the `SafeElementAt()` method when instantiated using a pointer type. See the section on [`SafeElementAt()`](/zh-TW/XPCOM_array_guide#Bounds-safe_access_to_elements) in the [XPCOM array guide](/zh-TW/XPCOM_array_guide) for more information.

### Workers

It is no longer possible to access XPCOM objects from ChromeWorkers. XPConnect has been disabled in worker contexts as of [bug 649537](https://bugzilla.mozilla.org/show_bug.cgi?id=649537).

### XUL

- A bug in [`document.execCommand()`](/zh-TW/docs/Web/API/Document/execCommand) that occurred when calling it on the value of [`contentDocument`](/zh-TW/docs/XUL/Property/contentDocument) has been fixed. Since Firefox 3, this resulted in errors instead of working correctly.
- [Bootstrapped add-ons](/zh-TW/Extensions/Bootstrapped_extensions) can now load chrome using a [`chrome.manifest`](/zh-TW/Chrome_Registration) file. See the section [Adding user interface with a chrome.manifest](/zh-TW/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) for details.
- [XUL images](/zh-TW/XUL/image) now shrink down with the same ratio in both directions when specifying maximum sizes.

### Changes to the build system

- The following build configuration options have been removed:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- When compiling IDL files to headers, the header file `jspubtd.h` is automatically included when needed. Manual inclusions of `jspubtd.h` and/or `jsapi.h` in IDL files that use jsval or \[implicit_jscontext] are no longer necessary.

### Chrome registration

- The [`platformversion`](/zh-TW/Chrome_Registration#platformversion) flag can be used in the chrome.manifest to specify Gecko version compatibility.

### Interface changes

- The [`mozIJSSubScriptLoader.loadSubScript()`](</zh-TW/docs/XPCOM_Interface_Reference/mozIJSSubScriptLoader#loadSubScript()>) method now loads scripts from the startup cache when possible.
- The `ownerWindow` attribute has been removed from the [`nsIAccessNode`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessNode) interface.
- The [`nsIDOMStorageWindow`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMStorageWindow) interface has been merged into the [`nsIDOMWindow`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindow) interface.
- All members of the [`nsIDOMWindowInternal`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowInternal) interface have been moved into the [`nsIDOMWindow`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindow) interface. The interface itself (with no members) remains available for compatibility until Firefox 9.
- In order to improve performance, callback handling for asynchronous Places database updates has been changed. See the new [`mozIVisitInfoCallback.handleResult()`](</zh-TW/docs/XPCOM_Interface_Reference/mozIVisitInfoCallback#handleResult()>) and [`mozIVisitInfoCallback.handleError()`](</zh-TW/docs/XPCOM_Interface_Reference/mozIVisitInfoCallback#handleError()>) methods, which replace the old single method for both error and success condition handling.
- The [`nsIMemoryReporter`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporter) `KIND_MAPPED` attribute has been deprecated in favor of `KIND_NONHEAP`, new unit types `UNITS_COUNT_CUMULATIVE` and `UNITS_PERCENTAGE` have been added.
- The [`nsIMemoryReporterManager`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporterManager) interface has a new `explicit` attribute, which reports the total size of explicit memory allocations.
- The [`nsIMemoryReporterManager`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporterManager) interface has a new `resident` attribute, which reports the amount of physical memory used.
- The [`nsINetworkLinkService`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINetworkLinkService) interface has a new attribute, `linkType`. This attribute provides the type of network connection in use. All Operating Systems currently return `LINK_TYPE_UNKNOWN`. Android support was backed out due to perceived security concerns.
- The [`nsISelection2`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelection2) interface has been merged into the [`nsISelectionPrivate`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelectionPrivate) interface.
- The [`nsISelection3`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelection3) interface has been merged into the [`nsISelection`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelection) interface.
- The [`nsISessionStartup`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISessionStartup) attribute state is now a [`jsval`](/En/SpiderMonkey/JSAPI_Reference/Jsval) instead of a string, for performance reasons.
- The [`nsIDocShell`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDocShell) attribute `isActive` is now `false` for minimized windows.
- The [`nsIDownloadHistory.addDownload()`](</zh-TW/docs/XPCOM_Interface_Reference/nsIDownloadHistory#addDownload()>) method now saves the the target where the download is saved on the local file system.

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

The [`nsIWorkerFactory`](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWorkerFactory) interface has been removed as well. Workers can still be created using the `Worker` and `ChromeWorker` constructors.

### Other changes

- When a window is minimized, un-minimized, or switches between full screen and windowed mode, it receives a `sizemodechange` event.
- You can now [use the `extensions.autoDisableScopes` preference](/zh-TW/Installing_extensions#Preventing_automatic_install_from_specific_locations) to disable automatic installation of add-ons from specific add-on install locations.
- The new [`document.mozSyntheticDocument`](/zh-TW/docs/Web/API/Document/mozSyntheticDocument) property on [`Document`](/zh-TW/docs/Web/API/Document) objects lets you determine whether a document is synthetic (that is, something like a standalone image, video, or audio file) rather than a full, standard DOM document. This can be useful, for example, if you want to present different user interface in this situation (such as adding contextual items differently depending on this case).
- You can now specify a filter when opening `about:config`; for example, "about:config?filter=sessionstore" will show only session storage related preferences.

## See also

- [Firefox 7 for developers](/zh-TW/Firefox_7_for_developers)
- [Firefox 6 for developers](/zh-TW/Firefox_6_for_developers)
- [Firefox 5 for developers](/zh-TW/Firefox_5_for_developers)
- [Firefox 4 for developers](/zh-TW/Firefox_4_for_developers)
- [Firefox 3.6 for developers](/zh-TW/Firefox_3.6_for_developers)
- [Firefox 3.5 for developers](/En/Firefox_3.5_for_developers)
- [Firefox 3 for developers](/zh-TW/Firefox_3_for_developers)
- [Firefox 2 for developers](/zh-TW/Firefox_2_for_developers)
- [Firefox 1.5 for developers](/zh-TW/Firefox_1.5_for_developers)
