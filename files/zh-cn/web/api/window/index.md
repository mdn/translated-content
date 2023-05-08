---
title: Window
slug: Web/API/Window
---

{{APIRef("DOM")}}

`window` 对象表示一个包含 {{glossary("DOM")}} 文档的窗口，其 `document` 属性指向窗口中载入的 [DOM 文档](/zh-CN/docs/Web/API/Document) 。

使用 {{domxref("document.defaultView")}} 属性可以获取指定文档所在窗口。

代表了脚本正在运行的窗口的 `window` 全局变量，被暴露给 Javascript 代码。

`Window` 接口是各种函数、命名空间、对象和构造函数的家，它们不一定与用户界面窗口的概念直接相关。然而，`Window` 接口是一个可以包含这些需要全局可用的项目的合适的地方。其中很多内容都在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)和 [DOM 参考](/zh-CN/docs/Web/API/Document_Object_Model)中有所记载。

在标签式浏览器中，每个标签都由自己的 `Window` 对象表示；在特定标签中运行的 JavaScript 代码所看到的全局 `window` 总是代表代码所运行的标签。也就是说，即使在标签浏览器中，一些属性和方法仍然适用于包含标签的整个窗口，如 {{Domxref("Window.resizeTo", "resizeTo()")}} 和 {{Domxref("Window.innerHeight", "innerHeight")}}。一般来说，任何不能合理地与标签有关的东西都与窗口有关。

{{InheritanceDiagram}}

## 实例属性

_本接口从 {{domxref("EventTarget")}} 接口继承属性。_

注意，对象类型的属性（例如：覆盖内建元素的原型）被列于下面单独的小节之中。

- {{domxref("caches", "Window.caches")}} {{ReadOnlyInline}}
  - : 返回与当前环境相关的 {{domxref("CacheStorage")}} 对象。这个对象可以实现一些功能，如存储供离线使用的资源，以及对请求生成自定义响应。
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : {{domxref("Window.navigator")}} 对象的别名。
- {{domxref("Window.closed")}} {{ReadOnlyInline}}
  - : 此属性表示当前窗口是否关闭。
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : 返回对 console 对象的引用，该对象提供对浏览器调试控制台的访问。
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 返回一个布尔值，表示当前文档是否在 credentialless 的 {{htmlelement("iframe")}} 中加载。参见 [IFrame credentialless](/zh-CN/docs/Web/Security/IFrame_credentialless) 以了解更多细节。
- {{domxref("crypto_property", "Window.crypto")}} {{ReadOnlyInline}}
  - : 返回浏览器的 crypto 对象。
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : 返回对 {{domxref("CustomElementRegistry")}} 对象的引用，该对象可用于注册新的[自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)并获取之前注册的自定义元素的信息。
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : 返回当前显示器中物理像素和设备独立像素之间的比率。
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 返回对 window 所包含的文档的引用。
- {{domxref("Window.frameElement")}} {{ReadOnlyInline}}
  - : 返回窗口被嵌入的元素，如果窗口没有被嵌入，则返回空。
- {{domxref("Window.frames")}} {{ReadOnlyInline}}
  - : 返回当前窗口中的子帧形成的数组。
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : 此属性指示窗口是否以全屏显示。
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : 返回对 history 对象的引用。
- {{domxref("indexedDB", "Window.indexedDB")}} {{ReadOnlyInline}}
  - : 为应用程序提供异步访问索引数据库的能力；返回一个 {{domxref("IDBFactory")}} 对象。
- {{domxref("Window.innerHeight")}} {{ReadOnlyInline}}
  - : 获取浏览器窗口的内容区域的高度，包括（已渲染的）水平滚动条。
- {{domxref("Window.innerWidth")}} {{ReadOnlyInline}}
  - : 获取浏览器窗口的内容区域的宽度，包括（已渲染的）竖直滚动条。
- {{domxref("isSecureContext", "Window.isSecureContext")}} {{ReadOnlyInline}}
  - : 返回一个布尔值，表示当前上下文安全（`true`）或不安全（`false`）。
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 当一个[渐进式网络应用](/zh-CN/docs/Web/Progressive_web_apps)（PWA）以 `focus-existing`、`navigate-new` 或 `navigate-existing` 的 [`launch_handler`](/zh-CN/docs/Web/Manifest/launch_handler) `client_mode` 值启动时，`launchQueue` 提供对 {{domxref("LaunchQueue")}} 类的访问，这允许为 PWA 实现自定义的启动导航处理。
- {{domxref("Window.length")}} {{ReadOnlyInline}}
  - : 返回窗口中的帧数。参见 {{domxref("window.frames")}}。
- {{domxref("Window.location")}}
  - : 获取/设置 window 对象的位置，或当前的 URL。
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : 返回 locationbar 对象。
- {{domxref("Window.localStorage")}} {{ReadOnlyInline}}
  - : 返回一个对用于存储数据的本地存储对象的引用，该对象只能由创建它的源访问。
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : 返回 menubar 对象。
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回窗口视口左上角的水平（X）坐标，以屏幕坐标表示。这个值是以 CSS 像素为单位报告的。请参阅 `nsIDOMWindowUtils` 中的 `mozScreenPixelsPerCSSPixel`，以获得转换系数，以便在需要时适应屏幕像素。
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回窗口视口左上角的垂直（Y）坐标，以屏幕坐标表示。这个值是以 CSS 像素为单位报告的。请参阅 `mozScreenPixelsPerCSSPixel`，如果需要的话，可以用一个转换系数来适应屏幕像素。
- {{domxref("Window.name")}}
  - : 获取/设置 window 对象的名称。
- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回当前 `window` 的相关 {{domxref("Navigation")}} 对象。是 {{domxref("Navigation API")}} 的入口点。
- {{domxref("Window.navigator")}} {{ReadOnlyInline}}
  - : 返回对 navigator 对象的引用。
- {{domxref("Window.opener")}}
  - : 返回对打开当前窗口的 window 的引用。
- {{domxref("origin", "Window.origin")}} {{ReadOnlyInline}}
  - : 返回全局对象的源，序列化为一个字符串。
- {{domxref("Window.outerHeight")}} {{ReadOnlyInline}}
  - : 获取浏览器窗口外侧的高度。
- {{domxref("Window.outerWidth")}} {{ReadOnlyInline}}
  - : 获取浏览器窗口外侧的宽度。
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : {{domxref("window.scrollX")}} 的别名。
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : {{domxref("window.scrollY")}} 的别名。
- {{domxref("Window.parent")}} {{ReadOnlyInline}}
  - : 返回对当前窗口或子框架的被继承对象的引用。
- {{domxref("performance_property", "Window.performance")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("Performance")}} 对象，其中包括 {{domxref("Performance.timing", "timing")}} 和 {{domxref("Performance.navigation", "navigation")}} 属性，每个属性都是提供[性能相关](/zh-CN/docs/Web/API/Navigation_timing_API)数据的对象。有关其他信息和例子，请参见[使用导航计时](/zh-CN/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing)。
- {{domxref("Window.personalbar")}} {{ReadOnlyInline}}
  - : 返回 personalbar 对象。
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : 返回与当前上下文相关的 {{domxref("Scheduler")}} 对象。这是使用[优先级任务调度 API](/zh-CN/docs/Web/API/Prioritized_Task_Scheduling_API) 的入口。
- {{domxref("Window.screen")}} {{ReadOnlyInline}}
  - : 返回与该窗口相关的 screen 对象的引用。
- {{domxref("Window.screenX")}} 和 {{domxref("Window.screenLeft")}} {{ReadOnlyInline}}
  - : 这两个属性都返回从用户浏览器视口的左边界到屏幕左侧的水平距离。
- {{domxref("Window.screenY")}} 和 {{domxref("Window.screenTop")}} {{ReadOnlyInline}}
  - : 这两个属性都会返回从用户浏览器视口的上边界到屏幕上侧的垂直距离。
- {{domxref("Window.scrollbars")}} {{ReadOnlyInline}}
  - : 返回 scrollbars 对象。
- {{domxref("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 窗口在水平方向上可以滚动的最大偏移量，即文档宽度减去视口宽度。
- {{domxref("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 窗口在竖直方向上可以滚动的最大偏移量，即文档高度减去视口高度。
- {{domxref("Window.scrollX")}} {{ReadOnlyInline}}
  - : 返回文档已经被水平滚动的像素数。
- {{domxref("Window.scrollY")}} {{ReadOnlyInline}}
  - : 返回文档已经被竖直滚动的像素数。
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : 返回对 window 对象本身的引用。
- {{domxref("Window.sessionStorage")}}
  - : 返回对用于存储数据的会话存储对象的引用，这些数据只能由创建它的源访问。
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("SpeechSynthesis")}} 对象，这是使用 [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) 语音合成功能的入门点。
- {{domxref("Window.statusbar")}} {{ReadOnlyInline}}
  - : 返回 statusbar 对象。
- {{domxref("Window.toolbar")}} {{ReadOnlyInline}}
  - : 返回 toolbar 对象。
- {{domxref("Window.top")}} {{ReadOnlyInline}}
  - : 返回对窗口层次结构中最顶层窗口的引用。这个属性是只读的。
- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("VisualViewport")}} 对象，代表一个给定窗口的视觉视口。
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : 返回对当前 window 的引用。
- `window[0]`、`window[1]` 等
  - : 以逐帧形式返回对 `window` 对象的引用，要了解更多细节，参见 {{domxref("Window.frames")}}。

### 已废弃属性

- {{domxref("Window.content")}} 和 `Window._content` {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 返回对当前窗口中的内容元素的引用。从 Firefox 57 开始（最初是 Nightly-only），这两个版本都只能从 chrome（的特权）代码中获得，而不再对 web 提供。
- {{domxref("Window.defaultStatus")}} {{Deprecated_Inline}}
  - : 获取/设置给定窗口的状态栏文本。
- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回**当前事件**，即当前由 JavaScript 代码的上下文处理的事件，如果当前没有事件被处理，则返回 `undefined`。应尽可能使用直接传递给事件处理程序的 {{domxref("Event")}} 对象来代替。
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回一个带有向浏览器添加外部搜索提供者的功能的对象。
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回视口相对于设备自然方向的度数（以 90 度为增量）。
- {{domxref("Window.returnValue")}} {{Deprecated_Inline}}
  - : 返回给调用 {{domxref("window.showModalDialog()")}} 的函数的返回值，以便将该窗口显示为模态对话框。
- {{domxref("Window.sidebar")}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 返回对侧边栏的 window 对象的一个引用。
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : 获取/设置浏览器底部状态栏中的文本。

## 实例方法

_本接口从 {{domxref("EventTarget")}} 接口继承方法。_

- {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}}
  - : Register an event handler to a specific event type on the window.
- {{domxref("atob", "Window.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("Window.blur()")}}
  - : Sets focus away from the window.
- {{domxref("btoa", "Window.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("Window.cancelAnimationFrame()")}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.clearImmediate()")}}
  - : Cancels the repeated execution set using `setImmediate`.
- {{domxref("clearInterval", "Window.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()", "Window.clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("Window.close()")}}
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("createImageBitmap", "Window.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("EventTarget.dispatchEvent", "Window.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : Writes a message to the console.
- {{domxref("fetch", "Window.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
- {{domxref("Window.matchMedia()")}}
  - : Returns a {{domxref("MediaQueryList")}} object representing the specified media query string.
- {{domxref("Window.moveBy()")}}
  - : Moves the current window by a specified amount.
- {{domxref("Window.moveTo()")}}
  - : Moves the window to the specified coordinates.
- {{domxref("Window.open()")}}
  - : Opens a new window.
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- {{domxref("Window.print()")}}
  - : Opens the Print Dialog to print the current document.
- {{domxref("Window.prompt()")}}
  - : Returns the text entered by the user in a prompt dialog.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an array of {{domxref("FontData")}} objects representing the font faces available locally.
- {{domxref("EventTarget.removeEventListener", "Window.removeEventListener()")}}
  - : Removes an event listener from the window.
- {{domxref("reportError", "Window.reportError()")}}
  - : Reports an error in a script, emulating an unhandled exception.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
- {{domxref("Window.requestIdleCallback()")}}
  - : Enables the scheduling of tasks during a browser's idle periods.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
- {{domxref("Window.scroll()")}}
  - : Scrolls the window to a particular place in the document.
- {{domxref("Window.scrollBy()")}}
  - : Scrolls the document in the window by the given amount.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : Scrolls the document by the given number of lines.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : Scrolls the current document by the specified number of pages.
- {{domxref("Window.scrollTo()")}}
  - : Scrolls to a particular set of coordinates in the document.
- {{domxref("Window.setImmediate()")}}
  - : Executes a function after the browser has finished other heavy tasks.
- {{domxref("setInterval", "Window.setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}}
  - : Toggles a user's ability to resize a window.
- {{domxref("setTimeout", "Window.setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : Sizes the window according to its content.
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}}
  - : Shows a file picker that allows a user to select a file or multiple files.
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}}
  - : Shows a file picker that allows a user to save a file.
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}}
  - : Displays a directory picker which allows the user to select a directory.
- {{domxref("Window.stop()")}}
  - : This method stops window loading.
- {{domxref("Window.updateCommands()")}} {{Non-standard_Inline}}
  - : Updates the state of commands of the current chrome window (UI).

### 已废弃方法

- {{domxref("Window.back()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Moves back one in the window history. This method is deprecated; you should instead use {{domxref("History.back", "history.back()")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.forward()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Moves the window one document forward in the history. This method is deprecated; you should instead use {{domxref("History.forward", "history.forward()")}}.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("Window.showModalDialog()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Displays a modal dialog.

## 事件

通过使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或给这个接口的 `oneventname` 属性指定一个事件监听器来监听这些事件。

- {{domxref("Window/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Fired at the global scope object when the user's preferred language changes.
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : Fired at a regular interval, indicating the amount of physical force of acceleration the device is receiving and the rate of rotation, if available.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
- {{domxref("Window/resize_event", "resize")}}
  - : Fired when the window has been resized.
- {{domxref("Window/storage_event", "storage")}}
  - : Fired when a storage area (`localStorage` or `sessionStorage`) has been modified in the context of another document.

### 动画事件

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
- {{domxref("Window/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.

### 剪切板事件

- {{domxref("Window/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncopy", "oncopy")}} property.
- {{domxref("Window/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncut", "oncut")}} property.
- {{domxref("Window/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/onpaste", "onpaste")}} property.

### 连接事件

- {{domxref("Window/offline_event", "offline")}}
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` has switched to `false`.
- {{domxref("Window/online_event", "online")}}
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` has switched to `true`.

### 聚焦事件

- {{domxref("Window/blur_event", "blur")}}
  - : Fired when an element has lost focus.
- {{domxref("Window/focus_event", "focus")}}
  - : Fired when an element has gained focus.

### Gamepad 事件

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.

### 历史记录事件

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Sent when the browser hides the current document while in the process of switching to displaying in its place a different document from the session's history. This happens, for example, when the user clicks the Back button or when they click the Forward button to move ahead in session history.
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Sent when the browser makes the document visible due to navigation tasks, including not only when the page is first loaded, but also situations such as the user navigating back to the page after having navigated to another within the same tab.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Fired when the active history entry changes.

### 加载和卸载事件

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- {{domxref("Window/load_event", "load")}}
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets images.
- {{domxref("Window/unload_event", "unload")}}
  - : Fired when the document or a child resource is being unloaded.

### 清单事件

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Fired when the browser has successfully installed a page as an application.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Fired when a user is about to be prompted to install a web application.

### 消息事件

- {{domxref("Window/message_event", "message")}}
  - : Fired when the window receives a message, for example from a call to {{domxref("Window/postMessage", "Window.postMessage()")}} from another browsing context.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Fired when a `Window` object receives a message that can't be deserialized.

### 打印事件

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.

### Promise 拒绝事件

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Sent every time a JavaScript {{jsxref("Promise")}} is rejected, regardless of whether or not there is a handler in place to catch the rejection.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Sent when a JavaScript {{jsxref("Promise")}} is rejected but there is no handler in place to catch the rejection.

### 渐变事件

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed.
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created.
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started.

### 已废弃事件

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Fired when the orientation of the device has changed.
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a display is able to be presented to.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a compatible VR device has been connected to the computer.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a compatible VR device has been disconnected from the computer.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a display can no longer be presented to.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa.

## 接口

参见 [DOM 参考文档](/zh-CN/docs/Web/API/Document_Object_Model)。

## 浏览器兼容性

{{Compat}}
