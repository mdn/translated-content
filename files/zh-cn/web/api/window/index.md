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
  - : 返回一个布尔值，表示当前文档是否在无凭据（credentialless）的 {{htmlelement("iframe")}} 中加载。参见 [IFrame credentialless](/zh-CN/docs/Web/Security/IFrame_credentialless) 以了解更多细节。
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
  - : 返回当前窗口中的子框架（subframe）形成的数组。
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
  - : 当一个[渐进式 web 应用](/zh-CN/docs/Web/Progressive_web_apps)（PWA）以 `focus-existing`、`navigate-new` 或 `navigate-existing` 的 [`launch_handler`](/zh-CN/docs/Web/Manifest/launch_handler) `client_mode` 值启动时，`launchQueue` 提供对 {{domxref("LaunchQueue")}} 类的访问，这允许为 PWA 实现自定义的启动导航处理。
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
  - : 返回一个 {{domxref("Performance")}} 对象，其中包括 {{domxref("Performance.timing", "timing")}} 和 {{domxref("Performance.navigation", "navigation")}} 属性，每个属性都是提供[性能相关](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)数据的对象。有关其他信息和例子，请参见[使用导航计时](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)。
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
  - : 为 window 上的特定事件类型注册一个事件处理器。
- {{domxref("atob", "Window.atob()")}}
  - : 解码一个使用 base-64 编码的数据字符串。
- {{domxref("Window.alert()")}}
  - : 显示一个警告对话框。
- {{domxref("Window.blur()")}}
  - : 将焦点从窗口上移开。
- {{domxref("btoa", "Window.btoa()")}}
  - : 从一串二进制数据中创建一个 base-64 编码的 ASCII 字符串。
- {{domxref("Window.cancelAnimationFrame()")}}
  - : 取消之前使用 {{domxref("Window.requestAnimationFrame")}} 安排的回调。
- {{domxref("Window.cancelIdleCallback()")}}
  - : 取消之前使用 {{domxref("Window.requestIdleCallback")}} 安排的回调。
- {{domxref("Window.clearImmediate()")}}
  - : 取消使用 `setImmediate()` 设置的重复执行任务。
- {{domxref("clearInterval", "Window.clearInterval()")}}
  - : 取消使用 {{domxref("setInterval()")}} 设置的重复执行任务。
- {{domxref("clearTimeout()", "Window.clearTimeout()")}}
  - : 取消使用 {{domxref("setTimeout()")}} 设置的延时执行任务。
- {{domxref("Window.close()")}}
  - : 关闭当前窗口。
- {{domxref("Window.confirm()")}}
  - : 显示一个带有用户需要回应的信息对话框。
- {{domxref("createImageBitmap", "Window.createImageBitmap()")}}
  - : 接受各种不同的图像源，并返回一个 {{jsxref("Promise")}}，经兑现可得到 {{domxref("ImageBitmap")}}。可以选择将图片源裁剪成以 _(sx, sy)_ 为起点的像素矩形，宽度为 sw，高度为 sh。
- {{domxref("EventTarget.dispatchEvent", "Window.dispatchEvent()")}}
  - : 用于触发事件。
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : 向控制台中写一条消息。
- {{domxref("fetch", "Window.fetch()")}}
  - : 开始从网络获取资源的过程。
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : 在窗口中搜索给定的字符串。
- {{domxref("Window.focus()")}}
  - : 在当前窗口上设置焦点。
- {{domxref("Window.getComputedStyle()")}}
  - : 获取指定元素的计算样式。计算的样式表示该元素的所有 CSS 属性的计算值。
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : 获取指定元素的默认计算样式，忽略作者样式表。
- {{domxref("Window.getSelection()")}}
  - : 返回代表所选项目的 selection 对象。
- {{domxref("Window.matchMedia()")}}
  - : 返回代表指定媒体查询字符串的 {{domxref("MediaQueryList")}} 对象。
- {{domxref("Window.moveBy()")}}
  - : 将当前窗口移动一个指定的偏量值。
- {{domxref("Window.moveTo()")}}
  - : 将窗口移动到指定的坐标。
- {{domxref("Window.open()")}}
  - : 打开一个新窗口。
- {{domxref("Window.postMessage()")}}
  - : 为一个窗口向另一个窗口发送一串数据提供了安全的手段，该窗口不需要与第一个窗口在同一域内。
- {{domxref("Window.print()")}}
  - : 打开“打印”对话框，打印当前文档。
- {{domxref("Window.prompt()")}}
  - : 返回用户在提示对话框中输入的文本。
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}}
  - : 返回 {{jsxref("Promise")}}，经兑现可得到包含一个代表本地可用字体的 {{domxref("FontData")}} 对象数组。
- {{domxref("EventTarget.removeEventListener", "Window.removeEventListener()")}}
  - : 从 window 上移除一个事件监听器。
- {{domxref("reportError", "Window.reportError()")}}
  - : 报告一个脚本中的错误，模拟一个未处理的异常。
- {{domxref("Window.requestAnimationFrame()")}}
  - : 告诉浏览器一个动画正在进行中，要求浏览器为下一个动画帧安排窗口的重绘。
- {{domxref("Window.requestIdleCallback()")}}
  - : 启用浏览器空闲期间的任务调度。
- {{domxref("Window.resizeBy()")}}
  - : 按一定的变化量调整当前窗口的大小。
- {{domxref("Window.resizeTo()")}}
  - : 动态地调整窗口的大小。
- {{domxref("Window.scroll()")}}
  - : 将窗口滚动到文档中的一个特定位置。
- {{domxref("Window.scrollBy()")}}
  - : 将窗口中的文档按给定值滚动。
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : 按给定的行数滚动文档。
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : 按给定的页数滚动文档。
- {{domxref("Window.scrollTo()")}}
  - : 将文档滚动至特定坐标。
- {{domxref("Window.setImmediate()")}}
  - : 在浏览器完成其他繁重的任务后执行一个函数。
- {{domxref("setInterval", "Window.setInterval()")}}
  - : 安排一个函数，在给定的毫秒数过去后执行。
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}}
  - : 切换用户调整窗口大小的能力。
- {{domxref("setTimeout", "Window.setTimeout()")}}
  - : 安排函数在给定的时间内执行。
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : 根据窗口的内容确定其大小。
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}}
  - : 显示一个文件选择器，允许用户选择一个文件或多个文件。
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}}
  - : 显示一个文件选择器，允许用户保存一个文件。
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}}
  - : 显示一个目录选择器，允许用户选择一个目录。
- {{domxref("Window.stop()")}}
  - : 该方法停止了窗口的加载。
- {{domxref("Window.updateCommands()")}} {{Non-standard_Inline}}
  - : 更新当前 chrome 窗口（用户界面）的命令状态。

### 已废弃方法

- {{domxref("Window.back()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 在窗口历史中后退一步。该方法已被废弃，应该使用 {{domxref("History.back", "history.back()")}} 代替。
- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : 注册窗口以捕获所有指定类型的事件。
- {{domxref("Window.forward()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 在窗口历史中前进一步。该方法已被废弃，应该使用 {{domxref("History.forward", "history.forward()")}} 代替。
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : 解除窗口对特定类型事件的捕获。
- {{domxref("Window.showModalDialog()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 显示一个对话框。

## 事件

通过使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或给这个接口的 `oneventname` 属性指定一个事件监听器来监听这些事件。

- {{domxref("Window/error_event", "error")}}
  - : 当一个资源加载失败，或不能使用时触发该事件。例如，如果脚本有一个执行错误，或者图像找不到或无效。
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : 当用户的首选语言发生变化时，在全局范围对象中触发该事件。
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : 以固定的时间间隔触发该事件，显示设备所接受的物理加速力的大小和旋转速率（如果有）。
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : 当磁力计方向传感器提供了关于设备当前方向与地球坐标框架的新数据时，触发该事件。
- {{domxref("Window/resize_event", "resize")}}
  - : 窗口大小发生变化时触发。
- {{domxref("Window/storage_event", "storage")}}
  - : 当一个存储区域（`localStorage` 或 `sessionStorage`）在另一个文档的上下文中被修改时，触发该事件。

### 动画事件

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : 当一个动画意外地中止时，触发该事件。
- {{domxref("Window/animationend_event", "animationend")}}
  - : 当一个动画正常完成时，触发该事件。
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : 当一个动画迭代完成时，触发该事件。
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : 当一个动画开始时，触发该事件。

### 剪切板事件

- {{domxref("Window/copy_event", "copy")}}
  - : 当用户通过浏览器的用户界面启动一个复制动作时，触发该事件。也可通过 {{domxref("HTMLElement/copy_event", "oncopy")}} 属性设置。
- {{domxref("Window/cut_event", "cut")}}
  - : 当用户通过浏览器的用户界面启动一个剪切动作时，触发该事件。也可通过 {{domxref("HTMLElement/cut_event", "oncut")}} 属性设置。
- {{domxref("Window/paste_event", "paste")}}
  - : 当用户通过浏览器的用户界面启动一个粘贴动作时，触发该事件。也可通过 {{domxref("HTMLElement/paste_event", "paste")}} 属性设置。

### 连接事件

- {{domxref("Window/offline_event", "offline")}}
  - : 当浏览器失去了对网络的访问，并且 `navigator.onLine` 的值转换为 `false` 时，触发该事件。
- {{domxref("Window/online_event", "online")}}
  - : 当浏览器获得了对网络的访问，并且 `navigator.onLine` 的值转换为 `true` 时，触发该事件。

### 聚焦事件

- {{domxref("Window/blur_event", "blur")}}
  - : 当一个元素失去焦点时，触发该事件。
- {{domxref("Window/focus_event", "focus")}}
  - : 当一个元素获得焦点时，触发该事件。

### Gamepad 事件

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : 当浏览器检测到游戏板已被连接或首次使用游戏板的按钮/轴时启动。
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : 当浏览器检测到游戏板被断开连接时启动。

### 历史记录事件

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : 当 URL 的片段标识符（URL 中以 `#` 符号开头及其后面的部分）发生变化时，触发该事件。
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : 当浏览器隐藏了当前的文档，而在切换到显示会话历史中的另一个文档时触发该事件。例如，当用户点击“后退”按钮或点击“前进”按钮在会话历史中移动时，就会发生这种情况。
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : 当浏览器因导航任务而使文件可见时触发该事件，不仅包括页面首次加载时，还包括用户在同一标签内导航到另一个页面后再返回该页面等情况。
- {{domxref("Window/popstate_event", "popstate")}}
  - : 当活动的历史条目改变时，触发该事件。

### 加载和卸载事件

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : 当窗口、文档及其资源即将被卸载时，触发该事件。
- {{domxref("Window/load_event", "load")}}
  - : 当整个页面加载完毕时触发该事件，包括所有依赖资源，如样式表图片。
- {{domxref("Window/unload_event", "unload")}}
  - : 当文档或子资源正在被卸载时触发，触发该事件。

### 清单事件

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : 当浏览器成功地将一个页面安装为一个应用程序时，触发该事件。
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : 当用户即将被提示安装一个 web 应用程序时，触发该事件。

### 消息事件

- {{domxref("Window/message_event", "message")}}
  - : 窗口收到消息时触发该事件，例如从另一个浏览上下文中调用 {{domxref("Window/postMessage", "Window.postMessage()")}}。
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : 当 `Window` 对象收到无法反序列化的消息时，触发该事件。

### 打印事件

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : 在相关文档开始打印或打印预览关闭后，触发该事件。
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : 当相关文件即将被打印或预览打印时，触发该事件。

### Promise 拒绝事件

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : 每当一个 JavaScript {{jsxref("Promise")}} 被拒绝时，不管是否有处理程序来捕捉拒绝，都会触发该事件。
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : 当 JavaScript {{jsxref("Promise")}} 被拒绝，但没有处理程序来捕获拒绝时，触发该事件。

### 渐变事件

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : 当 [CSS 渐变](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)被取消时，触发该事件。
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : 当 [CSS 渐变](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)完成时，触发该事件。
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : 当 [CSS 渐变](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)首次创建时，触发该事件。
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : 当 [CSS 渐变](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)真正开始时，触发该事件。

### 已废弃事件

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : 当设备的方向改变时，触发该事件。
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当显示器可供呈现时，触发该事件。
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当兼容的 VR 设备被连接到电脑上时，触发该事件。
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当兼容的 VR 设备从电脑上断开时，触发该事件。
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当显示器不再可供呈现时，触发该事件。
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当 VR 设备的呈现状态发生变化时触发该事件，即从呈现状态变成不呈现状态，或者反之亦然。

## 接口

参见 [DOM 参考文档](/zh-CN/docs/Web/API/Document_Object_Model)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
