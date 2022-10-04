---
title: Firefox 3.6 for developers
slug: Mozilla/Firefox/Releases/3.6
---

{{FirefoxSidebar}}

[Firefox 3.6](http://www.firefox.com/) offers support for new and developing web standards, increased performance, and an overall better experience for web users and developers. This page provides links to articles covering the new capabilities of Firefox 3.6.

## For web site and application developers

### CSS

- [Using gradients](/zh-CN/CSS/Using_CSS_gradients)
  - : Firefox 3.6 adds support for the proposed [`-moz-linear-gradient`](/zh-CN/docs/Web/CSS/-moz-linear-gradient) and [`-moz-radial-gradient`](/zh-CN/docs/Web/CSS/-moz-radial-gradient) properties for [`background`](/zh-CN/docs/Web/CSS/background).
- [Multiple backgrounds](/zh-CN/CSS/Multiple_backgrounds)
  - : The [`background`](/zh-CN/docs/Web/CSS/background) property (as well as [`background-color`](/zh-CN/docs/Web/CSS/background-color), [`background-image`](/zh-CN/docs/Web/CSS/background-image), [`background-position`](/zh-CN/docs/Web/CSS/background-position), [`background-repeat`](/zh-CN/docs/Web/CSS/background-repeat), and [`background-attachment`](/zh-CN/docs/Web/CSS/background-attachment)) now supports multiple backgrounds. This lets you specify multiple backgrounds that are rendered atop one another in layers.
- [Mozilla-specific media features](/zh-CN/CSS/Media_queries#Mozilla-specific_media_features)
  - : Media features have been added for Mozilla-specific system metrics, so that [media queries](/zh-CN/CSS/Media_queries) can be used to more safely check on the availability of features such as touch support.
- [Scaling background images](/zh-CN/CSS/Scaling_background_images)
  - : The `background-size` property from the [CSS 3 Backgrounds and Borders draft](http://dev.w3.org/csswg/css3-background/) is now supported under the name [`-moz-background-size`](/zh-CN/docs/Web/CSS/-moz-background-size).
- [WOFF font support](/zh-CN/WOFF)
  - : [`@font-face`](/zh-CN/docs/Web/CSS/@font-face) now supports the WOFF downloadable font file format.
- [Pointer events](/zh-CN/CSS/pointer-events)
  - : The [`pointer-events`](/zh-CN/docs/Web/CSS/pointer-events) property lets content specify whether or not an element may be the target of mouse pointer events.

#### Miscellaneous CSS changes

- The [`rem`](/zh-CN/CSS/length#Relative_length_units) length unit from [CSS3 Values and Units](http://www.w3.org/TR/css3-values/#lengths) is now supported. [bug 472195](https://bugzilla.mozilla.org/show_bug.cgi?id=472195)
- [`image-rendering`](/zh-CN/docs/Web/CSS/image-rendering) is supported for images, background images, videos and canvases. [bug 423756](https://bugzilla.mozilla.org/show_bug.cgi?id=423756)
- [`text-align`](/zh-CN/docs/Web/CSS/text-align):end is now supported. [bug 299837](https://bugzilla.mozilla.org/show_bug.cgi?id=299837)
- DOM changes to elements using the table [`display`](/zh-CN/docs/Web/CSS/display) types now work much better.
- Added [`:-moz-locale-dir(ltr)`](</zh-CN/docs/Web/CSS/:-moz-locale-dir(ltr)>) and [`:-moz-locale-dir(rtl)`](</zh-CN/docs/Web/CSS/:-moz-locale-dir(rtl)>) to make it easier to customize layouts based on whether the user interface is being displayed using a left-to-right or a right-to-left locale. [bug 478416](https://bugzilla.mozilla.org/show_bug.cgi?id=478416)
- Added support for the [`:indeterminate`](/zh-CN/docs/Web/CSS/:indeterminate) pseudo-class, which matches `checkbox` [`input`](/zh-CN/HTML/Element/Input) elements whose `indeterminate` attribute is `true`.
- Windowed plugins are no longer displayed in CSS transforms, because they can't be transformed properly by the compositor.

### HTML

- [Using files from web applications](/zh-CN/Using_files_from_web_applications)
  - : Support for the new HTML5 File API has been added to Gecko, making it possible for web applications to access local files selected by the user. This includes support for selecting multiple files using the `input type="file"` HTML element's new `multiple` attribute.
- HTML5 video supports poster frames
  - : The `poster` attribute is now supported for the [`video`](/zh-CN/HTML/Element/Video) element, allowing content to specify a poster frame to be displayed until the video begins to play.
- Checkboxes and radio buttons support the `indeterminate` property
  - : HTML [`input`](/zh-CN/HTML/Element/Input) elements of types `checkbox` and `radio` now support the indeterminate property, which allows a third, "indeterminate" state.
- Canvas image smoothing can be controlled
  - : The new [`mozImageSmoothingEnabled`](/zh-CN/Canvas_tutorial/Using_images#Controlling_image_scaling_behavior) property can be used to turn on and off image smoothing when scaling in [`canvas`](/zh-CN/HTML/Element/canvas) elements.
- Asynchronous script execution
  - : By setting the `async` attribute on a [`script`](/zh-CN/HTML/Element/Script) element, the `script` will not block loading or display of the rest of the page. Instead the `script` executes as soon as it is downloaded.

### JavaScript

Gecko 1.9.2 引入了 JavaScript 1.8.2, 该版本的 JavaScript 添加了许多来自[ECMAScript 5](/zh-CN/JavaScript/ECMAScript_5_support_in_Mozilla)的新的语言特性：

- [`Date.parse()`](/zh-CN/JavaScript/Reference/Global_Objects/Date/parse)方法现在可以解析符合 ISO 8601 标准的日期格式字符串，像这样 YYYY-MM-DD.
- 函数从原型链[`prototype`](/zh-CN/JavaScript/Reference/Global_Objects/Function/prototype)上继承的属性不会再被遍历到。

### DOM

- Web workers 可以自行终止
  - : [Workers](/zh-CN/DOM/Using_web_workers) 开始支持[`nsIWorkerScope.close()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIWorkerScope#close()>) 方法，该方法允许它们终止自身的运行。
- 支持文件的拖放
  - : [`DataTransfer`](/zh-CN/DragDrop/DataTransfer)对象提供的拖拽监听器现在可以包含一个被拖拽的文件列表。
- Checking to see if an element matches a specified CSS selector
  - : The new [`element.mozMatchesSelector`](/zh-CN/docs/Web/API/Node/mozMatchesSelector) method lets you determine whether or not an element matches a specified CSS selector. See [bug 518003](https://bugzilla.mozilla.org/show_bug.cgi?id=518003).
- [Detecting device orientation](/zh-CN/Detecting_device_orientation)
  - : Content can now detect the orientation of the device if it has a supported accelerometer, using the [`MozOrientation`](/zh-CN/DOM/MozOrientation) event. Firefox 3.6 supports the accelerometer in Mac laptops.
- [Detecting document width and height changes](/zh-CN/DOM/Detecting_document_width_and_height_changes)
  - : The new `MozScrollAreaChanged` event is dispatched whenever the document's `scrollWidth` and/or `scrollHeight` properties change.

#### Miscellaneous DOM changes

- The `getBoxObjectFor()` method has been **removed**, as it was non-standard and exposed even more non-standard stuff to the web. See [bug 340571](https://bugzilla.mozilla.org/show_bug.cgi?id=340571). Also affects [MooTools](http://mootools.net/) which uses this call for Gecko detection; this has been fixed in the latest version of MooTools, so be sure to update.
- The new [`mozInnerScreenX`](/zh-CN/DOM/window.mozInnerScreenX) and [`mozInnerScreenY`](/zh-CN/DOM/window.mozInnerScreenY) properties on DOM windows have been added; these return the screen coordinates of the top-left corner of the window's viewport.
- The new `mozScreenPixelsPerCSSPixel` attribute on the [`nsIDOMWindowUtils`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils) interface, accessible only to chrome, provides a conversion factor between CSS pixels and screen pixels; this value can vary based on the zoom level of the content.
- When the page's URI's document fragment identifier (the part after the "#" (hash) character) changes, a new `hashchange` event is sent to the page. See [window.onhashchange](/zh-CN/DOM/window.onhashchange) for more information. [bug 385434](https://bugzilla.mozilla.org/show_bug.cgi?id=385434)
- The attribute [`document.readyState`](/zh-CN/DOM/document.readyState) is now supported. [bug 347174](https://bugzilla.mozilla.org/show_bug.cgi?id=347174)
- Support for HTML5's [`element.classList`](/zh-CN/DOM/element.classList) to allow easier handling of the class attribute. [bug 501257](https://bugzilla.mozilla.org/show_bug.cgi?id=501257)
- `localName` and `namespaceURI` in HTML documents now behave like they do in XHTML documents: `localName` returns in lower case and `namespaceURI` for HTML elements is `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/zh-CN/DOM/element.getElementsByTagNameNS) no longer lowercases its argument, so upper-case ASCII letters in the argument make matches against HTML elements fail. The same is true for [`document.getElementsByTagNameNS`](/zh-CN/DOM/document.getElementsByTagNameNS).
- Support has been added for addresses in geolocation via the [`nsIDOMGeoPositionAddress`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPositionAddress) interface and a new field added to [`nsIDOMGeoPosition`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPosition).
- The [`window.getComputedStyle`](/zh-CN/docs/Web/API/Window/getComputedStyle) function now returns quotes within `url()` values.

### XPath

- 支持 choose() 方法
  - : [XPath](/zh-CN/XPath)开始支持[`choose()`](/zh-CN/XPath/Functions/choose)`方法`.

## For XUL and add-on developers

If you're an extension developer, you should start by reading [Updating extensions for Firefox 3.6](/zh-CN/Updating_extensions_for_Firefox_3.6), which offers a helpful overview of what changes may affect your extension. Plug-in developers should read [Updating plug-ins for Firefox 3.6](/zh-CN/Updating_plug-ins_for_Firefox_3.6).

### New features

- [Detecting device orientation](/zh-CN/Detecting_device_orientation)
  - : Content can now detect the orientation of the device if it has a supported accelerometer, using the [`MozOrientation`](/zh-CN/DOM/MozOrientation) event. Firefox 3.6 supports the accelerometer in Mac laptops.
- [Monitoring HTTP activity](/zh-CN/Monitoring_HTTP_activity)
  - : You can now monitor HTTP transactions to observe requests and responses in real time.
- [Working with the Windows taskbar](/zh-CN/Working_with_the_Windows_taskbar)
  - : It's now possible to customize the appearance of windows in the taskbar in Windows 7 or later. _This has been disabled by default in Firefox 3.6._

### Places

- Places queries can now use the `redirectsMode` attribute on the [`nsINavHistoryQueryOptions`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions) interface to specify whether or not to include redirected pages in results.
- Added the new [`nsIFaviconService.expireAllFavicons()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIFaviconService#expireAllFavicons()>) method to the [`nsIFaviconService`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFaviconService) interface.

### Storage

- [Locale-aware collation of data is now supported by the Storage API](</zh-cn/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 added several new collation methods to provide optimized collation (sorting) of results using locale-aware techniques.
- [Properties on a statement can now be enumerated](/zh-CN/mozIStorageStatementParams#Enumeration_of_properties)
  - : You can now use a [`for..in`](/zh-CN/JavaScript/Reference/Statements/for...in) enumeration to enumerate all the properties on a statement.
- mozIStorageStatement's getParameterIndex changed behavior between 3.5 and 3.6.
  - : See [bug 528166](https://bugzilla.mozilla.org/show_bug.cgi?id=528166) for details.
- Asynchronously bind multiple sets of parameters and execute a statement.
  - : See [bug 490085](https://bugzilla.mozilla.org/show_bug.cgi?id=490085) for details. Documentation coming soon.

### Preferences

- The [`nsIContentPrefService`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPrefService) interface has two new methods: [`nsIContentPrefService.getPrefsByName()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIContentPrefService#getPrefsByName()>) and [`nsIContentPrefService.removePrefsByName()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIContentPrefService#removePrefsByName()>).

### Themes

See [Updating themes for Firefox 3.6](/zh-CN/Updating_themes_for_Firefox_3.6) for a list of changes related to themes.

- [Lightweight themes](/zh-CN/Themes/Lightweight_themes)
  - : Firefox 3.6 supports lightweight themes; these are easy-to-create themes that simply apply a background to the top (URL bar and button bar) and bottom (status bar) of browser windows. This is an integration of the existing [Personas](http://www.getpersonas.com/) theme architecture into Firefox.

### Miscellaneous

- Firefox will no longer load third-party components installed in its internal components directory. This helps to ensure stability by preventing buggy third-party components from being executed. Developers that install components this way must [repackage their components as XPI packages](/zh-CN/Migrating_raw_components_to_add-ons) so they can be installed as standard add-ons.
- `contents.rdf` is no longer supported for registering chrome in extensions. You must now use the [`chrome.manifest`](/zh-CN/Install_Manifests) file instead. See [bug 492008](https://bugzilla.mozilla.org/show_bug.cgi?id=492008).
- Added support for hiding the menu bar automatically. See [bug 477256](https://bugzilla.mozilla.org/show_bug.cgi?id=477256).
- Added support for the `container-live-role` attribute to objects. See [bug 391829](https://bugzilla.mozilla.org/show_bug.cgi?id=391829).
- The `tabs-closebutton` binding has been removed. See [bug 500971](https://bugzilla.mozilla.org/show_bug.cgi?id=500971).
- Added support to [`nsISound`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISound) for playing sounds based on events that have occurred. See [bug 502799](https://bugzilla.mozilla.org/show_bug.cgi?id=502799).
- The syntax for the [`nsITreeView`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITreeView) methods [`nsITreeView.canDrop()`](</zh-CN/docs/XPCOM_Interface_Reference/nsITreeView#canDrop()>) and [`nsITreeView.drop()`](</zh-CN/docs/XPCOM_Interface_Reference/nsITreeView#drop()>) has changed to support the new drag & drop API introduced in Gecko 1.9. See [bug 455590](https://bugzilla.mozilla.org/show_bug.cgi?id=455590).
- Added support to snap the mouse cursor to the default button of dialog or wizard on Windows, see [bug 76053](https://bugzilla.mozilla.org/show_bug.cgi?id=76053). This is processed automatically by dialog and wizard element. But if a XUL application creates a window using the `window` element and it has a default button, it needs to call [`nsIDOMChromeWindow.notifyDefaultButtonLoaded()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow#notifyDefaultButtonLoaded()>) during the window's `onload` event handler.
- The [`nsILocalFileMac`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILocalFileMac) interface has had two methods removed: `setFileTypeAndCreatorFromMIMEType()` and `setFileTypeAndCreatorFromExtension()`.
- The new [`NetUtils.jsm`](/zh-CN/JavaScript_code_modules/NetUtil.jsm) code module provides an easy-to-use method for asynchronously copying data from an input stream to an output stream.
- The new [`openLocationLastURL.jsm`](/zh-CN/JavaScript_code_modules/openLocationLastURL.jsm) code module makes it easy to read and change the value of the "Open Location" dialog box's remembered URL while properly taking private browsing mode into account.
- On Windows, the [`nsIScreen`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScreen) interface now reports 24 bit per pixel color depths when the graphics driver claims 32 bits, since 24 more accurately represents the actual number of color pixels in use.
- Menu bars can now be hidden on Windows, using the new [`autohide`](/zh-CN/docs/Mozilla/Tech/XUL/Attribute/autohide) attribute on the [`toolbar`](/zh-CN/docs/Mozilla/Tech/XUL/toolbar) XUL element.
- The [`loadOneTab`](/zh-CN/docs/Mozilla/Tech/XUL/Method/loadOneTab) and [`addTab`](/zh-CN/docs/Mozilla/Tech/XUL/Method/addTab) methods now accept a new `relatedToCurrent` parameter and, in addition, allow the parameters to be specified by name, since nearly all of the parameters are optional.
- The "[hidden](/zh-CN/Install_Manifests#hidden)" property is no longer supported in install manifests; it's no longer possible to prevent the user from seeing add-ons in the add-on manager window.
- The `@mozilla.org/webshell;1` component no longer exists; you need to use `@mozilla.org/docshell;1` instead.
- You can now register with the update-timer category to schedule timer events without having to instantiate the object that the timer will eventually call into; it will instead be instantiated when it's needed. See [`nsIUpdateTimerManager.registerTimer()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIUpdateTimerManager#registerTimer()>) for details.
- The [`NPN_GetValue()`](/zh-CN/NPN_GetValue) function no longer provides access to XPCOM through the variable values `NPNVserviceManager`, `NPNVDOMelement`, and `NPNVDOMWindow`. This is part of the work toward making plugins run in separate processes in a future version of Gecko.
- Plugins are no longer scriptable through XPCOM (IDL) interfaces, [NPRuntime](/zh-CN/Gecko_Plugin_API_Reference/Scripting_plugins) is the API to use for making plugins scriptable, and [`NPP_GetValue()`](/zh-CN/NPP_GetValue) is no longer called to with the value `NPPVpluginScriptableInstance` or `NPPVpluginScriptableIID`. This is part of the work toward making plugins run in separate processes in a future version of Gecko.

## Firefox/Gecko 开发

Certain changes are only really interesting if you work on the internals of Firefox itself.

### Interfaces merged

The following interfaces have been combined together:

- `nsIPluginTagInfo2` has been merged into `nsIPluginTagInfo`.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, and `nsIPluginInstancePeer3` have all been merged into `nsIPluginInstance`.
- `nsIWindowlessPlugInstPeer` has been merged into `nsIPluginInstance`.
- `nsIPluginManager` and `nsIPluginManager2` have been merged into `nsIPluginHost`.

### Interfaces removed

The following interfaces have been removed entirely because they were unused, unimplemented, or obsolete:

- `nsIFullScreen`
- `nsIDOMSVGListener`
- `nsIDOMSVGZoomListener`
- `nsIInternetConfigService`
- `nsIDKey`
- `nsIEventHandler`
- `nsIJRILiveConnectPIPeer`
- `nsIJRILiveConnectPlugin`
- `nsIScriptablePlugin`
- `nsIClassicPluginFactory`
- `nsIFileUtilities`

### Interfaces moved

The following interfaces have been relocated from their previous IDL files into new ones:

- `nsIDOMNSCSS2Properties` is now located in its own IDL file (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- [`nsIUpdateTimerManager`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIUpdateTimerManager) is now located in its own IDL file.

A large number of interfaces have been moved. See [Interfaces moved in Firefox 3.6](/zh-CN/Interfaces_moved_in_Firefox_3.6) for a complete list.

### Other interface changes

The following assorted changes have been made:

- The `nsIPlugin` interface now inherits from [`nsISupports`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) instead of [`nsIFactory`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory).
- The `nsIPluginHost` interface now inherits from [`nsISupports`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) instead of [`nsIFactory`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory).
- The `nsIFrame` interface now inherits from `nsQueryFrame` instead of [`nsISupports`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports).
- The [`nsIDeviceContext`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDeviceContext) method `getPaletteInfo()` has been removed, as it was never implemented.
- The [`nsIScriptContext`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScriptContext) method `reportPendingException()` has been removed, since it was no longer being used.

### Changes in accessibility code

- The EVENT`_REORDER` [accessibility event](/zh-CN/XPCOM_Interface_Reference/nsIAccessibleEvent) is now sent when the children of frames and iframes change, as well as when the main document's children change. See [bug 420845](https://bugzilla.mozilla.org/show_bug.cgi?id=420845).
- The [`nsIAccessibleTable.selectRow()`](</zh-CN/docs/XPCOM_Interface_Reference/nsIAccessibleTable#selectRow()>) now correctly removes any current selection before selecting the specified row.

## 相关链接

- [Firefox 5 for developers](/zh-CN/Firefox_5_for_developers)
- [Firefox 4 for developers](/zh-CN/Firefox_4_for_developers)
- [Firefox 3.5 for developers](/zh-CN/Firefox_3.5_for_developers)
- [Firefox 3 for developers](/zh-CN/Firefox_3_for_developers)
- [Firefox 2 for developers](/zh-CN/Firefox_2_for_developers)
- [Firefox 1.5 for developers](/zh-CN/Firefox_1.5_for_developers)
