---
title: Firefox 5 技術文件
slug: Mozilla/Firefox/Releases/5
---

{{FirefoxSidebar}}

Firefox 5，基於 Gecko 5.0，在 2011 年六月 21 日發行。本文將提供這次發行會對開發者所生影響之資訊。

## 網路開發者的改變

### HTML

- 所有的 HTML 元素現在都有 {{ domxref("element.accessKey", "accessKey") }} 屬性，{{ domxref("element.blur()", "blur()") }}、{{ domxref("element.click()", "click()") }}、{{ domxref("element.focus()", "focus()") }} 方法也是。這些都在 {{ domxref("HTMLElement") }} 介面受到規範化。
- 為了遵從 HTML5 規範，移除了針對 UTF-7 與 UTF-32 [字符集](/zh-TW/Character_Sets_Supported_by_Gecko)的支援。
- 處於怪異模式（quirks mode）的時候，空白的 {{ HTMLElement("map") }} 支持非空匹配時，再也不跳過。需要更多資訊，請參閱 [Gecko notes](/zh-TW/HTML/Element/map#Gecko_notes) 的 {{ HTMLElement("map") }} 元素。
- 針對 Android 的 Firefox mobile，{{ cssxref("@font-face") }} 現在支援 WOFF 字型。
- 出於安全考量，WebGL [再也不加載來自其他網域的紋理](/zh-TW/WebGL/Cross-Domain_Textures)。[HTTP access control](/zh-TW/HTTP_access_control) support should be coming sometime in the future to make this possible more securely.

#### Canvas improvements

- The {{ HTMLElement("canvas") }} 2D drawing context now supports specifying an `ImageData` object as the input to the `createImageData()` method; this [creates a new `ImageData` object](/En/HTML/Canvas/Pixel_manipulation_with_canvas#Creating_an_ImageData_object) initialized with the same dimensions as the specified object, but still with all pixels preset to transparent black. This was documented as implemented already but was not.
- Specifying non-finite values when adding color stops through a call to the {{ domxref("CanvasGradient") }} method `addColorStop()` now correctly throws `INDEX_SIZE_ERR` instead of `SYNTAX_ERR`.
- The {{ domxref("HTMLCanvasElement") }} method `toDataURL()` now correctly lower-cases the specified MIME type before matching.
- `getImageData()` now correctly accepts rectangles that extend beyond the bounds of the canvas; pixels outside the canvas are returned as transparent black.
- `drawImage()` and `createImageData()` now handle negative arguments in accordance with the specification, by flipping the rectangle around the appropriate axis. **We need an article about [CSS sizing](http://dev.w3.org/csswg/css3-images/#default-sizing) and how this works.**
- Specifying non-finite values when calling `createImageData()` now properly throws a `NOT_SUPPORTED_ERR` exception.
- `createImageData()` and `getImageData()` now correctly return at least one pixel's worth of image data if a rectangle smaller than one pixel is specified.
- Specifying a negative radius when calling `createRadialGradient()` now correctly throws `INDEX_SIZE_ERR`.
- Specifying a `null` or `undefined` image when calling `createPattern()` or `drawImage()` now correctly throws a `TYPE_MISMATCH_ERR` exception.
- Specifying invalid values for `globalAlpha` no longer throws a `SYNTAX_ERR` exception; these are now correctly silently ignored.
- Specifying invalid values when calling `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, or `arc()` no longer throws an exception; these calls are now correctly silently ignored.
- Setting the value of `shadowOffsetX`, `shadowOffsetY`, or `shadowBlur` to an invalid value is now silently ignored.
- Setting the value of `rotate` or `scale` to an invalid value is now silently ignored.

### CSS

- [CSS animations](/zh-TW/CSS/CSS_animations)
  - : Support for CSS animations has been added, using the `-moz-` prefix for now.

### DOM

- The {{ domxref("selection") }} object's [`modify()`](/zh-TW/DOM/Selection/modify) method has been changed so that the "word" selection granularity no longer includes trailing spaces; this makes it more consistent across platforms and matches the behavior of WebKit's implementation.
- The {{ domxref("window.setTimeout()") }} method now clamps to send no more than one timeout per second in inactive tabs. In addition, it now clamps nested timeouts to the smallest value allowed by the HTML5 specification: 4 ms (instead of the 10 ms it used to clamp to).
- Similarly, the {{ domxref("window.setInterval()") }} method now clamps to no more than one interval per second in inactive tabs.
- [`XMLHttpRequest`](/zh-TW/DOM/XMLHttpRequest) now [supports the `loadend` event](/zh-TW/DOM/XMLHttpRequest/Using_XMLHttpRequest#Detecting_any_load_end_condition) for progress listeners. This is sent after any transfer is finished (that is, after the `abort`, `error`, or `load` event). You can use this to handle any tasks that need to be performed regardless of success or failure of a transfer.
- The {{ domxref("Blob") }} and, by extension, the {{ domxref("File") }} objects' `slice()` method has been removed and replaced with a new, proposed syntax that makes it more consistent with [`Array.slice()`](/zh-TW/JavaScript/Reference/Global_Objects/Array/slice) and [`String.slice()`](/zh-TW/JavaScript/Reference/Global_Objects/String/slice) methods in JavaScript. This method is named [`mozSlice()`](</en/DOM/Blob#mozSlice()>) for now.
- The value of {{ domxref("window.navigator.language") }} is now determined by looking at the value of the `Accept-Language` [HTTP header](/zh-TW/HTTP/Headers).
- The {{ domxref("Node.prefix") }} property is now read only, as required by the DOM specification.
- The {{ domxref("HTMLVideoElement") }} now supports experimental properties to get information about video paint statistics like frame rates.

### JavaScript

- Regular expressions are no longer callable as if they were functions; this change has been made in concert with the WebKit team to ensure compatibility (see [WebKit bug 28285](https://webkit.org/b/28285). This feature had existed for a long time but was never documented (at least, not here on MDC).
- The [`Function.prototype.isGenerator()`](/zh-TW/JavaScript/Reference/Global_Objects/Function/isGenerator) method is now supported; this lets you determine if a function is a [generator](/zh-TW/JavaScript/Guide/Iterators_and_Generators#Generators.3a_a_better_way_to_build_Iterators).
- The following [reserved words](/zh-TW/JavaScript/Reference/Reserved_Words) were previously only treated as reserved when in strict mode; now they're always treated as reserved: `class`, `enum`, `export`, `extends`, `import`, and `super`.
- DOM documents created in chrome code may no longer be exposed to sandboxed scripts.
- The JSON parser has been re-written for improved speed and compliance. This includes a fix for {{ bug("572279") }}.

### SVG

- The {{ SVGAttr("class") }} SVG attribute can now be animated.
- The following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed like arrays; in addition, they have a `length` property indicating the number of items in the lists: {{ domxref("SVGLengthList") }}, {{ domxref("SVGNumberList") }}, {{ domxref("SVGPathSegList") }}, and {{ domxref("SVGPointList") }}.

### HTTP

- Firefox no longer sends the `Keep-Alive` HTTP header; we weren't formatting it correctly, and it was redundant since we were also sending the {{ httpheader("Connection") }} or {{ httpheader("Proxy-Connection") }} header with the value "keep-alive" anyway.
- The HTTP transaction model has been updated to be more intelligent about reusing connections in the persistent connection pool; instead of treating the pool as a [FIFO](https://zh.wikipedia.org/wiki/FIFO) queue, Necko now attempts to sort the pool with connections with the largest [congestion window](https://zh.wikipedia.org/wiki/congestion_window) (CWND) first. This can reduce the round-trip time (RTT) of HTTP transactions by avoiding the need to grow connections' windows in many cases.
- Firefox now handles the `Content-Disposition` HTTP response header more effectively if both the `filename` and `filename*` parameters are provided; it looks through all provided names, using the `filename*` parameter if one is available, even if a `filename` parameter is included first. Previously, the first matching parameter would be used, thereby preventing a more appropriate name from being used. See [Firefox bug 588781](https://bugzil.la/588781).

### MathML

- Support for [embellished operators](http://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Developer tools

- The [Web Console's `Console` object](/zh-TW/Using_the_Web_Console#The_console_object) now has a `debug()` method, which is an alias for its `log()` method; this improves compatibility with certain existing sites.

## Changes for Mozilla and add-on developers

For a guide to updating your add-on for Firefox 5, please see [Updating add-ons for Firefox 5](/zh-TW/Firefox/Updating_add-ons_for_Firefox_5).

> **備註：** Firefox 5 requires that binary components be recompiled, as do all major releases of Firefox. See [Binary Interfaces](/En/Developer_Guide/Interface_Compatibility#Binary_Interfaces) for details.

### Changes to JavaScript code modules

#### New JavaScript code modules

- The [`Dict.jsm`](/zh-TW/JavaScript_code_modules/Dict.jsm) code module was added; it provides an API for dictionaries of key/value pairs.

#### NetUtil.jsm

- The [`asyncFetch()`](</en/JavaScript_code_modules/NetUtil.jsm#asyncFetch()>) method now supports specifying the input source as an `nsIInputStream`.

### Interface changes

- The `nsIHttpChannelInternal` interface has new attributes providing access to information about the channels' endpoints' addresses and ports. This information is provided primarily for debugging purposes.
- The {{ HTMLElement("canvas") }} element's {{ htmlattrxref("width", "canvas") }} and {{ htmlattrxref("height", "canvas") }} attributes are now reflected in IDL as unsigned integers instead of signed (see [`HTMLCanvasElement`](/zh-TW/DOM/HTMLCanvasElement)).
- The `nsIAppStartup2` and `nsIAppStartup_MOZILLA_2_0` interfaces have been merged into the `nsIAppStartup` interface.
- The `nsIDocShell_MOZILLA_2_0_BRANCH` interface has been merged into the `nsIDocShell` interface.
- The `nsIFocusManager_MOZILLA_2_0_BRANCH` interface has been merged into the `nsIFocusManager` interface.
- The `nsIHTMLEditor_MOZILLA_2_0_BRANCH` interface has been merged into the `nsIHTMLEditor` interface.

#### New interfaces

- `nsIDOMAnimationEvent` added. {{domxref("AnimationEvent")}}

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsICiter` (see {{ bug("633066") }})
- `nsIDOM3Document` (see {{ bug("639849") }})
- `nsIFIXptrEvaluator`
- `nsISelectElement` (see {{ bug("619996") }})

### Debugging aids

- The new [">`DebugOnly<T>`](/En/Namespace/Mozilla/DebugOnly%3CT%3E) helper makes it possible to declare variables only for `DEBUG` builds.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/zh-TW/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) and [`JS_DoubleToUint32()`](/zh-TW/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) have been added, for converting [`jsdouble`](/zh-TW/SpiderMonkey/JSAPI_Reference/jsdouble) values into C integers and unsigned integers.

### Build system changes

- You can now build Firefox without a `mozconfig` file; the [`--enable-application` setting](/zh-TW/Configuring_Build_Options#Choose_an_application) now defaults to "browser". After pulling or downloading the code, you can simply `configure && make` (or `make -f client.mk`) to build Firefox.

## See also

{{Firefox_for_developers('4')}}
