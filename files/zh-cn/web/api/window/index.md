---
title: Window
slug: Web/API/Window
---

{{APIRef("DOM")}}

`window` 对象表示一个包含 DOM 文档的窗口，其 `document` 属性指向窗口中载入的 [DOM 文档](/zh-CN/docs/Web/API/Document) 。使用 {{ Domxref("document.defaultView") }} 属性可以获取指定文档所在窗口。

`window`作为全局变量，代表了脚本正在运行的窗口，暴露给 Javascript 代码。

本节为 DOM `Window` 对象中可用的所有方法、属性和事件提供简要参考。`window` 对象实现了 `Window` 接口，此接口继承自 [`AbstractView`](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView) 接口。一些额外的全局函数、命名空间、对象、接口和构造函数与 window 没有典型的关联，但却是有效的，它们在 [JavaScript 参考](/zh-CN/docs/JavaScript/Reference) 和 [DOM 参考](/zh-CN/docs/DOM/DOM_Reference) 中列出。

在有标签页功能的浏览器中，每个标签都拥有自己的 `window` 对象；也就是说，同一个窗口的标签页之间不会共享一个 `window` 对象。有一些方法，如 {{ Domxref("window.resizeTo") }} 和 {{ Domxref("window.resizeBy") }} 之类的方法会作用于整个窗口而不是 `window` 对象所属的那个标签。一般而言，如果一样东西无法恰当地作用于标签，那么它就会作用于窗口。

{{InheritanceDiagram}}

## Constructors

See also the [DOM Interfaces](/zh-CN/docs/DOM/DOM_Reference).

- {{domxref("DOMParser")}}
  - : `DOMParser` can parse XML or HTML source stored in a string into a DOM [Document](/zh-CN/docs/DOM/document). `DOMParser` is specified in [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/).
- {{domxref("Window.GeckoActiveXObject")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Image")}}
  - : Used for creating an {{domxref("HTMLImageElement")}}.
- {{domxref("Option")}}
  - : Used for creating an {{domxref("HTMLOptionElement")}}
- {{domxref("Window.QueryInterface")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.StaticRange")}} {{experimental_inline}} {{readonlyinline}}
  - : Returns a {{domxref('StaticRange.StaticRange','StaticRange()')}} constructor which creates a {{domxref('StaticRange')}} object.
- {{domxref("Worker")}}
  - : Used for creating a [Web worker](/zh-CN/docs/DOM/Using_web_workers)
- {{domxref("Window.XMLSerializer")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XPCNativeWrapper")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XPCSafeJSObjectWrapper")}}
  - : {{todo("NeedsContents")}}

## 属性

这个接口从 {{domxref("EventTarget")}} 接口继承属性，也从 `WindowOrWorkerGlobalScope` 这个 mixin 中继承属性。

注意，对象类型的属性（例如：覆盖内建元素的原型）被列于下面单独的小节之中。

- {{domxref("Window.closed")}} {{Non-standard_inline}} {{readOnlyInline}}
  - : 这个属性指示当前窗口是否关闭。
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : 返回 console 对象的引用，该对象提供了对浏览器调试控制台的访问。
- {{domxref("Window.content")}} 和 `Window._content` {{Non-standard_inline}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回当前 window 的 content 元素的引用。通过带下划线的过时变种方法不再可以获得 Web content。
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : returns a reference to the {{domxref("CustomElementRegistry")}} object, which can be used to register new [custom elements](/zh-CN/docs/Web/Web_Components/Using_custom_elements) and get information about previously registered custom elements.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : 返回浏览器 crypto 对象。
- {{domxref("Window.defaultStatus")}} {{Deprecated_Inline}}
  - : 获取或设置指定窗口的状态栏文本。
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 返回当前显示器的物理像素和设备独立像素的比例。
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 返回对当前窗口所包含文档的引用。
- {{domxref("Window.DOMMatrix")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMMatrix")}} object, which represents 4x4 matrices, suitable for 2D and 3D operations.
- {{domxref("Window.DOMMatrixReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMMatrixReadOnly")}} object, which represents 4x4 matrices, suitable for 2D and 3D operations.
- {{domxref("Window.DOMPoint")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMPoint")}} object, which represents a 2D or 3D point in a coordinate system.
- {{domxref("Window.DOMPointReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMPointReadOnly")}} object, which represents a 2D or 3D point in a coordinate system.
- {{domxref("Window.DOMQuad")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMQuad")}} object, which provides represents a quadrilaterial object, that is one having four corners and four sides.
- {{domxref("Window.DOMRect")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRect")}} object, which represents a rectangle.
- {{domxref("Window.DOMRectReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRectReadOnly")}} object, which represents a rectangle.
- {{domxref("Window.event")}} {{ReadOnlyInline}}
  - : Returns the **current event**, which is the event currently being handled by the JavaScript code's context, or `undefined` if no event is currently being handled. The {{domxref("Event")}} object passed directly to event handlers should be used instead whenever possible.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : 返回嵌入窗口的元素，如果未嵌入窗口，则返回 null。
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : 返回当前窗口中所有子窗体的数组。
- {{domxref("Window.fullScreen")}}
  - : 此属性表示窗口是否以全屏显示。
- {{domxref("Window.globalStorage")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Gecko 13 (Firefox 13) 开始废弃。使用 {{domxref("Window.localStorage")}} 替代它。
    原本是：用于存储跨页面数据的多重存储对象。
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : 返回一个对 history 对象的引用。
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : 获得浏览器窗口的内容区域的高度，包含水平滚动条 (如果有的话)。
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : 获得浏览器窗口的内容区域的宽度，包含垂直滚动条 (如果有的话)。
- {{domxref("Window.isSecureContext")}} {{experimental_inline}} {{readOnlyInline}}
  - : 指出上下文环境是否能够使用安全上下文环境的特征。
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : 返回窗口中的 frames 数量。参见 {{domxref("window.frames")}}。
- {{domxref("Window.location")}}
  - : 获取、设置 window 对象的 location，或者当前的 URL.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : 返回 locationbar 对象，其可视性可以在窗口中切换。
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : 返回用来存储只能在创建它的源下访问的数据的本地存储对象的引用
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : 返回菜单条对象，它的可视性可以在窗口中切换
- {{domxref("Window.messageManager")}}
  - : 返回窗口的 [message manager](/zh-CN/docs/The_message_manager) 对象。
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}} {{Deprecated_inline}}
  - : 返回当前动画循环开始经过的毫秒数
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.
- {{domxref("Window.name")}}
  - : 获取/设置窗口的名称。
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : 返回对 navigator 对象的引用。
- {{domxref("Window.opener")}}
  - : 返回对打开当前窗口的那个窗口的引用。
- {{domxref("Window.orientation")}} {{non-standard_inline}} {{deprecated_inline}} {{readOnlyInline}}
  - : Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : 返回浏览器窗口的外部高度。
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : 返回浏览器窗口的外部宽度。
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : {{domxref("window.scrollX")}}的别名。
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{readOnlyInline}}
  - : {{domxref("window.scrollY")}}的别名。
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : 返回当前窗口或子窗口的父窗口的引用。
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Returns a {{domxref("Performance")}} object, which includes the {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}} attributes, each of which is an object providing [performance-related](/zh-CN/docs/Navigation_timing) data. See also [Using Navigation Timing](/zh-CN/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing) for additional information and examples.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : 返回 personalbar 对象，它的可视性可以在窗口中切换。
- {{domxref("Window.pkcs11")}} {{Deprecated_Inline}}
  - : Formerly provided access to install and remove PKCS11 modules.
- {{domxref("Window.returnValue")}}
  - : The return value to be returned to the function that called {{domxref("window.showModalDialog()")}} to display the window as a modal dialog.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : Returns a reference to the screen object associated with the window.
- {{domxref("Window.screenX")}} and {{domxref("Window.screenLeft")}} {{readOnlyInline}}
  - : Both properties return the horizontal distance from the left border of the user's browser viewport to the left side of the screen.
- {{domxref("Window.screenY")}} and {{domxref("Window.screenTop")}} {{readOnlyInline}}
  - : Both properties return the vertical distance from the top border of the user's browser viewport to the top side of the screen.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : Returns the scrollbars object, whose visibility can be toggled in the window.
- {{domxref("Window.scrollMaxX")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.
- {{domxref("Window.scrollMaxY")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled horizontally.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled vertically.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Returns an object reference to the window object itself.
- {{domxref("Window.sessionStorage")}}
  - : Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.sidebar")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Returns a reference to the window object of the sidebar.
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) speech synthesis functionality.
- {{domxref("Window.status")}}
  - : Gets/sets the text in the statusbar at the bottom of the browser.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : Returns the statusbar object, whose visibility can be toggled in the window.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : Returns the toolbar object, whose visibility can be toggled in the window.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : Returns a reference to the topmost window in the window hierarchy. This property is read only.
- {{domxref("Window.visualViewport")}} {{readOnlyInline}}
  - : Returns a {{domxref("VisualViewport")}} object which represents the visual viewport for a given window.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Returns a reference to the current window.
- `window[0]`, `window[1]`, etc.
  - : Returns a reference to the `window` object in the frames. See {{domxref("Window.frames")}} for more details.

### Properties implemented from elsewhere

- {{domxref("caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("indexedDB")}} {{readonlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext")}} {{readOnlyinline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("origin")}} {{readOnlyinline}}
  - : Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)

## 方法

_This interface inherits methods from the {{domxref("EventTarget")}} interface and implements methods from `WindowOrWorkerGlobalScope` and {{domxref("EventTarget")}}._

- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("Window.back()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Moves back one in the window history. This method is obsolete; you should instead use {{domxref("History.back", "window.history.back()")}}.
- {{domxref("Window.blur()")}}
  - : Sets focus away from the window.
- {{domxref("Window.cancelAnimationFrame()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.clearImmediate()")}}
  - : Cancels the repeated execution set using `setImmediate`.
- {{domxref("Window.close()")}}
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("Window.disableExternalCapture()")}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("Window.enableExternalCapture()")}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.find()")}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Moves the window one document forward in the history. This method is obsolete; you should instead use {{domxref("History.forward", "window.history.forward()")}}.
- {{domxref("Window.getAttention()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Flashes the application icon.
- {{domxref("Window.getAttentionWithCycleCount()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Returns the browser to the home page.
- {{domxref("Window.matchMedia()")}}
  - : Returns a {{domxref("MediaQueryList")}} object representing the specified media query string.
- {{domxref("Window.maximize()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.minimize()")}} (top-level XUL windows only)
  - : Minimizes the window.
- {{domxref("Window.moveBy()")}}
  - : Moves the current window by a specified amount.
- {{domxref("Window.moveTo()")}}
  - : Moves the window to the specified coordinates.
- {{domxref("Window.open()")}}
  - : 打开一个新窗口。
- {{domxref("Window.postMessage()")}}
  - : 为一个窗口向另一个窗口发送数据字符串提供了一种安全方法，该窗口不必与第一个窗口处于相同的域中。
- {{domxref("Window.print()")}}
  - : 打开打印对话框以打印当前文档。
- {{domxref("Window.prompt()")}}
  - : 返回用户在提示对话框中输入的文本。
- {{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : 释放捕获特定类型事件的窗口。
- {{domxref("Window.requestAnimationFrame()")}}
  - : 告诉浏览器一个动画正在进行中，请求浏览器为下一个动画帧重新绘制窗口。
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : 启用在浏览器空闲期间对任务进行调度。
- {{domxref("Window.resizeBy()")}}
  - : 将当前窗口调整到一定的大小。
- {{domxref("Window.resizeTo()")}}
  - : 动态调整窗口。
- {{domxref("Window.restore()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.routeEvent()")}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.scroll()")}}
  - : 滚动窗口到文档中的特定位置。
- {{domxref("Window.scrollBy()")}}
  - : 按给定的数量在窗口中滚动文档。
- {{domxref("Window.scrollByLines()")}} {{Non-standard_inline}}
  - : 按给定行数滚动文档。
- {{domxref("Window.scrollByPages()")}} {{Non-standard_inline}}
  - : 按指定页数滚动当前文档。
- {{domxref("Window.scrollTo()")}}
  - : 滚动到文档中的特定坐标集。
- {{domxref("Window.setImmediate()")}}
  - : 在浏览器完成其他繁重任务后执行一个函数。
- {{domxref("Window.setResizable()")}} {{Non-standard_inline}}
  - : 切换用户调整窗口大小的能力。
- {{domxref("Window.sizeToContent()")}} {{Non-standard_inline}}
  - : 根据内容设置窗口大小。
- {{domxref("Window.stop()")}}
  - : 这个方法停止窗口加载。
- {{domxref("Window.updateCommands()")}} {{Non-standard_inline}}
  - : 更新当前 chrome 窗口 (UI) 命令的状态。

### Methods implemented from elsewhere

- {{domxref("EventTarget.addEventListener()")}}
  - : Register an event handler to a specific event type on the window.
- {{domxref("atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{domxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("EventTarget.removeEventListener")}}
  - : Removes an event listener from the window.
- {{domxref("setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.

### Obsolete methods

- {{domxref("Window.showModalDialog()")}} {{Deprecated_Inline}}
  - : Displays a modal dialog. **This method was removed completely in Chrome 43, and Firefox 55.**

## Event handlers

These are properties of the window object that can be set to establish event handlers for the various things that can happen in the window that might be of interest.

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface._

> **备注：** Starting in Gecko 9.0, you can now use the syntax `if ("onabort" in window)` to determine whether or not a given event handler property exists. This is because event handler interfaces have been updated to be proper web IDL interfaces. See [DOM event handlers](/zh-CN/docs/DOM/DOM_event_handlers) for details.

- {{domxref("Window.onappinstalled")}}
  - : Called when the page is installed as a webapp. See `appinstalled` event.
- {{domxref("Window.onbeforeinstallprompt")}}
  - : An event handler property dispatched before a user is prompted to save a web site to a home screen on mobile.
- {{domxref("Window.ondevicelight")}}
  - : An event handler property for any ambient light levels changes
- {{domxref("Window.ondevicemotion")}}
  - : Called if accelerometer detects a change (For mobile devices)
- {{domxref("Window.ondeviceorientation")}}
  - : Called when the orientation is changed (For mobile devices)
- {{domxref("Window.ondeviceorientationabsolute")}} {{non-standard_inline}} Chrome only
  - : An event handler property for any device orientation changes.
- {{domxref("Window.ondeviceproximity")}}
  - : An event handler property for device proximity event
- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the [`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) event fires).
- {{domxref("Window.onpaint")}}
  - : An event handler property for paint events on the window.
- {{domxref("Window.onrejectionhandled")}} {{experimental_inline}}
  - : An event handler for handled {{jsxref("Promise")}} rejection events.
- {{domxref("Window.onuserproximity")}}
  - : An event handler property for user proximity events.
- {{domxref("Window.onvrdisplayconnect")}}
  - : Represents an event handler that will run when a compatible VR device has been connected to the computer (when the `vrdisplayconnected` event fires).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Represents an event handler that will run when a compatible VR device has been disconnected from the computer (when the `vrdisplaydisconnected` event fires).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Represents an event handler that will run when a display is able to be presented to (when the `vrdisplayactivate` event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Represents an event handler that will run when a display can no longer be presented to (when the `vrdisplaydeactivate` event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
- {{domxref("Window.onvrdisplayblur")}}
  - : Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the `vrdisplayblur` event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Represents an event handler that will run when presentation to a display has resumed after being blurred (when the `vrdisplayfocus` event fires).
- {{domxref("Window.onvrdisplaypresentchange")}}
  - : represents an event handler that will run when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa (when the `vrdisplaypresentchange` event fires).

### Event handlers implemented from elsewhere

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Called when the loading of a resource has been aborted, such as by a user canceling the load while it is still in progress
- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Called when the print dialog box is closed. See [`afterprint`](/zh-CN/docs/Web/API/Window/afterprint_event) event.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Called when the print dialog box is opened. See [`beforeprint`](/zh-CN/docs/Web/API/Window/beforeprint_event) event.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : An event handler property for before-unload events on the window.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : Called after the window loses focus, such as due to a popup.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : An event handler property for change events on the window.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : Called after the ANY mouse button is pressed & released
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : Called when a double click is made with ANY mouse button.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Called after the window is closed
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Called when the RIGHT mouse button is pressed
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Called when a resource fails to load OR when an error occurs at runtime. See [`error`](/zh-CN/docs/Web/API/Element/error_event) event.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Called after the window receives or regains focus. See [`focus`](/zh-CN/docs/Web/API/Element/focus_event) events.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : An event handler property for [`hashchange`](/zh-CN/docs/Web/API/Window/hashchange_event) events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("GlobalEventHandlers.oninput")}}
  - : Called when the value of an \<input> element changes
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : Called when you begin pressing ANY key. See [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event) event.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : Called when a key (except Shift, Fn, and CapsLock) is in pressed position. See [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event) event.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : Called when you finish releasing ANY key. See [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event) event.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : An event handler property for [`languagechange`](/zh-CN/docs/Web/API/Window/languagechange_event) events on the window.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Called after all resources and the DOM are fully loaded. WILL NOT get called when the page is loaded from cache, such as with back button.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Is an event handler representing the code to be called when the [`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event) event is raised.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : Called when ANY mouse button is pressed.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : Called continously when the mouse is moved inside the window.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : Called when the pointer leaves the window.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : Called when the pointer enters the window
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : Called when ANY mouse button is released
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Called when network connection is lost. See [`offline`](/zh-CN/docs/Web/API/Window/offline_event) event.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Called when network connection is established. See [`online`](/zh-CN/docs/Web/API/Window/online_event) event.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Called when the user navigates away from the page, before the onunload event. See [`pagehide`](/zh-CN/docs/Web/API/Window/pagehide_event) event.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Called after all resources and the DOM are fully loaded. See [`pageshow`](/zh-CN/docs/Web/API/Window/pageshow_event) event.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Called when a back button is pressed.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : Called when a form is reset
- {{domxref("GlobalEventHandlers.onresize")}}
  - : Called continuously as you are resizing the window.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : Called when the scroll bar is moved via ANY means. If the resource fully fits in the window, then this event cannot be invoked
- {{domxref("GlobalEventHandlers.onwheel")}}
  - : Called when the mouse wheel is rotated around any axis
- {{domxref("GlobalEventHandlers.onselect")}}
  - : Called after text in an input field is selected
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : Is an event handler representing the code to be called when the `selectionchange` event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Called when there is a change in session storage or local storage. See [`storage`](/zh-CN/docs/Web/API/Window/storage_event) event
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Called when a form is submitted
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : An event handler for unhandled {{jsxref("Promise")}} rejection events.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Called when the user navigates away from the page.

## Events

Listen to these events using [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`error`](/zh-CN/docs/Web/API/Window/error_event)
  - : Fired when when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
    Also available via the {{domxref("GlobalEventHandlers/onerror", "onerror")}} 属性。
- [`languagechange`](/zh-CN/docs/Web/API/Window/languagechange_event)
  - : Fired at the global scope object when the user's preferred language changes.
    Also available via the [`onlanguagechange`](/zh-CN/docs/Web/API/Window/languagechange_event) 属性。
- [`orientationchange`](/zh-CN/docs/Web/API/Window/orientationchange_event)
  - : Fired when the orientation of the device has changed.
    Also available via the [`onorientationchange`](/zh-CN/docs/Web/API/Window/onorientationchange) 属性。
- [`devicemotion`](/zh-CN/docs/Web/API/Window/devicemotion_event)
  - : Fired at a regular interval, indicating the amount of physical force of acceleration the device is receiving and the rate of rotation, if available.
- [`deviceorientation`](/zh-CN/docs/Web/API/Window/deviceorientation_event)
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
- `{{domxref("Document/defaultView/resize_event", "resize")}}`
  - : Fired when the window has been resized.
    Also available via the [`onresize`](/zh-CN/docs/Web/API/GlobalEventHandlers/onresize) 属性。
- `{{domxref("Document/defaultView/storage_event", "storage")}}`
  - : Fired when a storage area (`localStorage` or `sessionStorage`) has been modified in the context of another document.
    Also available via the [`onstorage`](/zh-CN/docs/Web/API/Window/storage_event) 属性。

### Animation events

- [`animationcancel`](/zh-CN/docs/Web/API/Window/animationcancel_event)
  - : Fired when an animation unexpectedly aborts.
    Also available via the [`onanimationcancel`](/zh-CN/docs/Web/API/GlobalEventHandlers/onanimationcancel) 属性。
- [`animationend`](/zh-CN/docs/Web/API/Window/animationend_event)
  - : Fired when an animation has completed normally.
    Also available via the [`onanimationend`](/zh-CN/docs/Web/API/GlobalEventHandlers/onanimationend) 属性。
- [`animationiteration`](/zh-CN/docs/Web/API/Window/animationiteration_event)
  - : Fired when an animation iteration has completed.
    Also available via the [`onanimationiteration`](/zh-CN/docs/Web/API/GlobalEventHandlers/onanimationiteration) 属性。
- [`animationstart`](/zh-CN/docs/Web/API/Window/animationstart_event)
  - : Fired when an animation starts.
    Also available via the [`onanimationstart`](/zh-CN/docs/Web/API/GlobalEventHandlers/onanimationstart) 属性。

### Clipboard events

- [`clipboardchange`](/zh-CN/docs/Web/API/Window/clipboardchange_event)
  - : Fired when the system clipboard content changes.
- [`copy`](/zh-CN/docs/Web/API/Window/copy_event)
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the [`oncopy`](/zh-CN/docs/Web/API/HTMLElement/oncopy) 属性。
- [`cut`](/zh-CN/docs/Web/API/Window/cut_event)
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the [`oncut`](/zh-CN/docs/Web/API/HTMLElement/oncut) 属性。
- [`paste`](/zh-CN/docs/Web/API/Window/paste_event)
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the [`onpaste`](/zh-CN/docs/Web/API/HTMLElement/onpaste) 属性。

### Connection events

- [`offline`](/zh-CN/docs/Web/API/Window/offline_event)
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` has switched to `false`.
    Also available via the {{domxref("WindowEventHandlers.onoffline", "onoffline")}} 属性。
- [`online`](/zh-CN/docs/Web/API/Window/online_event)
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` has switched to `true`.
    Also available via the {{domxref("WindowEventHandlers.ononline", "ononline")}} 属性。

### Focus events

- [`blur`](/zh-CN/docs/Web/API/Window/blur_event)
  - : Fired when an element has lost focus.
    Also available via the [`onblur`](/zh-CN/docs/Web/API/GlobalEventHandlers/onblur) 属性。
- [`focus`](/zh-CN/docs/Web/API/Window/focus_event)
  - : Fired when an element has gained focus.
    Also available via the [`onfocus`](/zh-CN/docs/Web/API/GlobalEventHandlers/onfocus) property

### Gamepad events

- [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event)
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
    Also available via the [`ongamepadconnected`](/zh-CN/docs/Web/API/Window/ongamepadconnected) 属性。
- [`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event)
  - : Fired when the browser detects that a gamepad has been disconnected.
    Also available via the [`ongamepaddisconnected`](/zh-CN/docs/Web/API/Window/ongamepaddisconnected) property

### History events

- [`hashchange`](/zh-CN/docs/Web/API/Window/hashchange_event)
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
    Also available via the [`onhashchange`](/zh-CN/docs/Web/API/Window/hashchange_event) 属性。
- [`pagehide`](/zh-CN/docs/Web/API/Window/pagehide_event)
  - : Sent when the browser hides the current document while in the process of switching to displaying in its palce a different document from the session's history. This happens, for example, when the user clicks the Back button or when they click the Forward button to move ahead in session history.
    Also available through the [`onpagehide`](/zh-CN/docs/Mozilla/Tech/XUL/Attribute/onpagehide) event handler 属性。
- [`pageshow`](/zh-CN/docs/Web/API/Window/pageshow_event)
  - : Sent when the browser makes the document visible due to navigation tasks, including not only when the page is first loaded, but also situations such as the user navigating back to the page after having navigated to another within the same tab.
    Also available using the [`onpageshow`](/zh-CN/docs/Mozilla/Tech/XUL/Attribute/onpageshow) event handler 属性。
- `{{domxref("Document/defaultView/popstate_event", "popstate")}}`
  - : Fired when the active history entry changes.
    Also available using the [`onpopstate`](/zh-CN/docs/Web/API/Window/popstate_event) event handler 属性。

### Load & unload events

- [`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event)
  - : Fired when the window, the document and its resources are about to be unloaded.
    Also available via the [`onbeforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event) 属性。
- [`DOMContentLoaded`](/zh-CN/docs/Web/API/Window/DOMContentLoaded_event)
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- [`load`](/zh-CN/docs/Web/API/Window/load_event)
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets images.
    Also available via the [`onload`](/zh-CN/docs/Web/API/GlobalEventHandlers/onload) 属性。
- [`unload`](/zh-CN/docs/Web/API/Window/unload_event)
  - : Fired when the document or a child resource is being unloaded.
    Also available via the [`onunload`](/zh-CN/docs/Web/API/Window/unload_event) 属性。

### Manifest events

- [`appinstalled`](/zh-CN/docs/Web/API/Window/appinstalled_event)
  - : Fired when the browser has successfully installed a page as an application.
    Also available via the [onappinstalled](/zh-CN/docs/Web/API/Window/onappinstalled) 属性。
- [`beforeinstallprompt`](/zh-CN/docs/Web/API/Window/beforeinstallprompt_event)
  - : Fired when a user is about to be prompted to install a web application.
    Also available via the [`onbeforeinstallprompt`](/zh-CN/docs/Web/API/Window/onbeforeinstallprompt) 属性。

### Messaging events

- [`message`](/zh-CN/docs/Web/API/Window/message_event)
  - : Fired when the window receives a message, for example from a call to [`Window.postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) from another browsing context.
    Also available via the [`onmessage`](/zh-CN/docs/Web/API/Window/message_event) 属性。
- [`messageerror`](/zh-CN/docs/Web/API/Window/messageerror_event)
  - : Fired when a `Window` object receives a message that can't be deserialized.
    Also available via the [`onmessageerror`](/zh-CN/docs/Web/API/Window/messageerror_event) 属性。

### Print events

- [`afterprint`](/zh-CN/docs/Web/API/Window/afterprint_event)
  - : Fired after the associated document has started printing or the print preview has been closed.
    Also available via the [`onafterprint`](/zh-CN/docs/Web/API/Window/afterprint_event) 属性。
- [`beforeprint`](/zh-CN/docs/Web/API/Window/beforeprint_event)
  - : Fired when the associated document is about to be printed or previewed for printing.
    Also available via the [`onbeforeprint`](/zh-CN/docs/Web/API/Window/beforeprint_event) 属性。

### Promise rejection events

- [`rejectionhandled`](/zh-CN/docs/Web/API/Window/rejectionhandled_event)
  - : Sent every time a JavaScript {{jsxref("Promise")}} is rejected, regardless of whether or not there is a handler in place to catch the rejection.
    Also available through the [`onrejectionhandled`](/zh-CN/docs/Web/API/Window/rejectionhandled_event) event handler 属性。
- [`unhandledrejection`](/zh-CN/docs/Web/API/Window/unhandledrejection_event)
  - : Sent when a JavaScript {{jsxref("Promise")}} is rejected but there is no handler in place to catch the rejection.
    Also available using the [`onunhandledrejection`](/zh-CN/docs/Web/API/Window/unhandledrejection_event) event handler 属性。

### Transition events

- [`transitioncancel`](/zh-CN/docs/Web/API/Window/transitioncancel_event)
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) is canceled.
    Also available via the [`ontransitioncancel`](/zh-CN/docs/Web/API/GlobalEventHandlers/ontransitioncancel) 属性。
- [`transitionend`](/zh-CN/docs/Web/API/Window/transitionend_event)
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) has completed.
    Also available via the [`ontransitionend`](/zh-CN/docs/Web/API/GlobalEventHandlers/ontransitionend) 属性。
- [`transitionrun`](/zh-CN/docs/Web/API/Window/transitionrun_event)
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) is first created.
    Also available via the [`ontransitionrun`](/zh-CN/docs/Web/API/GlobalEventHandlers/ontransitionrun) 属性。
- [`transitionstart`](/zh-CN/docs/Web/API/Window/transitionstart_event)
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) has actually started.
    Also available via the [`ontransitionstart`](/zh-CN/docs/Web/API/GlobalEventHandlers/ontransitionstart) 属性。

### WebVR events

- [`vrdisplayactivate`](/zh-CN/docs/Web/API/Window/vrdisplayactivate_event)
  - : Fired when a VR display becomes available to be presented to, for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
    Also available via the [`onvrdisplayactivate`](/zh-CN/docs/Web/API/Window/onvrdisplayactivate) 属性。
- [`vrdisplayblur`](/zh-CN/docs/Web/API/Window/vrdisplayblur_event)
  - : Fired when presentation to a VR display has been paused for some reason by the browser, OS, or VR hardware.
    Also available via the [`onvrdisplayblur`](/zh-CN/docs/Web/API/Window/onvrdisplayblur) 属性。
- [`vrdisplayconnect`](/zh-CN/docs/Web/API/Window/vrdisplayconnect_event)
  - : Fired when a compatible VR display is connected to the computer.
    Also available via the [`onvrdisplayconnect`](/zh-CN/docs/Web/API/Window/onvrdisplayconnect) 属性。
- [`vrdisplaydeactivate`](/zh-CN/docs/Web/API/Window/vrdisplaydeactivate_event)
  - : Fired when a VR display can no longer be presented to, for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
    Also available via the [`onvrdisplaydeactivate`](/zh-CN/docs/Web/API/Window/onvrdisplaydeactivate) 属性。
- [`vrdisplaydisconnect`](/zh-CN/docs/Web/API/Window/vrdisplaydisconnect_event)
  - : Fired when a compatible VR display is disconnected from the computer.
    Also available via the [`onvrdisplaydisconnect`](/zh-CN/docs/Web/API/Window/onvrdisplaydisconnect) 属性。
- [`vrdisplayfocus`](/zh-CN/docs/Web/API/Window/vrdisplayfocus_event)
  - : Fired when presentation to a VR display has resumed after being blurred.
    Also available via the [`onvrdisplayfocus`](/zh-CN/docs/Web/API/Window/onvrdisplayfocus) 属性。
- [`vrdisplaypresentchange`](/zh-CN/docs/Web/API/Window/vrdisplaypresentchange_event)
  - : fired when the presenting state of a VR display changes — i.e. goes from presenting to not presenting, or vice versa.
    Also available via the [`onvrdisplaypresentchange`](/zh-CN/docs/Web/API/Window/onvrdisplaypresentchange) 属性。
- [`vrdisplaypointerrestricted`](/zh-CN/docs/Web/API/Window/vrdisplaypointerrestricted_event)
  - : Fired when the VR display's pointer input is restricted to consumption via a [pointerlocked element](/zh-CN/docs/Web/API/Pointer_Lock_API).
    Also available via the [`onvrdisplaypointerrestricted`](/zh-CN/docs/Web/API/Window/onvrdisplaypointerrestricted) 属性。
- [`vrdisplaypointerunrestricted`](/zh-CN/docs/Web/API/Window/vrdisplaypointerunrestricted_event)
  - : Fired when the VR display's pointer input is no longer restricted to consumption via a [pointerlocked element](/zh-CN/docs/Web/API/Pointer_Lock_API).
    Also available via the [`onvrdisplaypointerunrestricted`](/zh-CN/docs/Web/API/Window/onvrdisplaypointerunrestricted) 属性。

## 接口

See [DOM Reference](/zh-CN/docs/DOM/DOM_Reference)

## 浏览器兼容性

{{Compat}}

## 参见

- [Working with windows in chrome code](/zh-CN/docs/Working_with_windows_in_chrome_code)
