---
title: Firefox 126 的开发者说明
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: e6fcda9d35359bbfec32ddb42086468701f57ee5
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 126 中影响开发者的变更信息。Firefox 126 于 [2024 年 5 月 14 日](https://whattrainisitnow.com/release/?version=126)发布。

## 为 Web 开发者带来的变化

### 开发者工具

- 添加了用于禁用拆分控制台的选项（[Firefox bug 1731635](https://bugzil.la/1731635)）。

### HTML

没有值得注意的变化。

### MathML

#### 移除

- 垂直居中运算符（+、=、< 等）的自动调整已默认禁用。这种行为并未在 MathML Core 中定义，这只是为非数学字体的问题提供的一种解决方案。仍可以通过将 `mathml.centered_operators.disabled` 配置设为 `false` 来启用此特性。（[Firefox bug 1890531](https://bugzil.la/1890531)）。

### CSS

- 现已支持 {{cssxref("zoom")}} 属性。其可用于增加或减小元素及其内容的大小（[Firefox bug 390936](https://bugzil.la/390936)）。

### JavaScript

没有值得注意的变化。

### HTTP

- 现已支持新的 `Content-Encoding` HTTP 标头的指令 [`zstd`](/zh-CN/docs/Web/HTTP/Headers/Content-Encoding#zstd)，允许解码服务器发送的、使用 {{glossary("Zstandard compression", "Zstandard 压缩")}}算法编码的内容（[Firefox bug 1871963](https://bugzil.la/1871963)）。

### API

- 现已支持 [`IDBFactory.databases()`](/zh-CN/docs/Web/API/IDBFactory/databases)，其用于枚举可用的 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 数据库（[Firefox bug 934640](https://bugzil.la/934640)）。
- 现在支持使用 [`IDBTransaction.durability`](/zh-CN/docs/Web/API/IDBTransaction/durability) 来查询用于创建特定事务的持久性提示（[Firefox bug 1878143](https://bugzil.la/1878143)）。
- [`URL.parse()`](/zh-CN/docs/Web/API/URL/parse_static) 静态方法现已支持创建 [`URL`](/zh-CN/docs/Web/API/URL) 对象。如果传递的参数未定义有效的 `URL`，则返回 `null`，因此可以作为使用 [`URL` 构造函数](/zh-CN/docs/Web/API/URL/URL)创建 `URL` 对象的不抛出异常的替代方法（[Firefox bug 1823354](https://bugzil.la/1823354)）。
- 现已支持[屏幕唤醒锁 API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API)，其用于请求在应用程序处于活动状态时不要使屏幕变暗或锁定。这对于导航和阅读应用程序以及其他的因为在使用时屏幕可能不会接收到通常会使其保持唤醒状态的常规触摸输入的应用程序特别有用。在安全上下文中，可以通过 {{domxref("Navigator.wakeLock")}}（会返回一个 {{domxref("WakeLock")}}）访问 API。其允许你请求一个用于监视唤醒锁的状态并手动释放它的 {{domxref("WakeLockSentinel")}}（[Firefox bug 1589554](https://bugzil.la/1589554)、[Firefox bug 1874849](https://bugzil.la/1874849)）。
- 现已支持所有的 [`RTCIceCandidate`](/zh-CN/docs/Web/API/RTCIceCandidate) 属性和方法（除了未实现的 `relayProtocol` 和 `url` 属性），并与规范相匹配。已对 `RTCIceCandidate` 的属性进行了以下更改：

  - 已将以下属性变为只读：[`candidate`](/zh-CN/docs/Web/API/RTCIceCandidate/candidate)、[`sdpMid`](/zh-CN/docs/Web/API/RTCIceCandidate/sdpMid)、[`sdpMLineIndex`](/zh-CN/docs/Web/API/RTCIceCandidate/sdpMLineIndex) 和 [`usernameFragment`](/zh-CN/docs/Web/API/RTCIceCandidate/usernameFragment)。
  - 已添加以下属性：[`foundation`](/zh-CN/docs/Web/API/RTCIceCandidate/foundation)、[`component`](/zh-CN/docs/Web/API/RTCIceCandidate/component)、[`priority`](/zh-CN/docs/Web/API/RTCIceCandidate/priority)、[`address`](/zh-CN/docs/Web/API/RTCIceCandidate/address)、[`protocol`](/zh-CN/docs/Web/API/RTCIceCandidate/protocol)、[`port`](/zh-CN/docs/Web/API/RTCIceCandidate/port)、[`type`](/zh-CN/docs/Web/API/RTCIceCandidate/type)、[`tcpType`](/zh-CN/docs/Web/API/RTCIceCandidate/tcpType)、[`relatedAddress`](/zh-CN/docs/Web/API/RTCIceCandidate/relatedAddress)、[`relatedPort`](/zh-CN/docs/Web/API/RTCIceCandidate/relatedPort) 和 [`usernameFragment`](/zh-CN/docs/Web/API/RTCIceCandidate/usernameFragment)。

  （[Firefox bug 1322186](https://bugzil.la/1322186)）。

- 现已支持 {{domxref("Element.currentCSSZoom")}} 只读属性，其用于获取元素的实际 CSS [zoom](/zh-CN/docs/Web/CSS/zoom)（[Firefox bug 1880189](https://bugzil.la/1880189)）。

#### DOM

- 定义自定义元素的状态并使用 CSS 选择器进行匹配的特性现已默认可用。自定义状态被表示为可以添加到或从元素的 {{domxref("ElementInternals.states")}} 属性（{{domxref("CustomStateSet")}}）中移除的自定义标识符。CSS [`:state()`](/zh-CN/docs/Web/CSS/:state) 伪类以自定义标识符为参数，并在自定义元素的状态集中存在该标识符时匹配该元素（[Firefox bug 1887543](https://bugzil.la/1887543)）。
- 现已支持 {{domxref("Selection.direction")}} 属性，其用于指示范围的方向（[Firefox bug 1867058](https://bugzil.la/1867058)）。

#### 媒体、WebRTC 和 Web 音频

#### 移除

- 现已从 [`HTMLMarqueeElement`](/zh-CN/docs/Web/API/HTMLMarqueeElement) 中删除字幕事件 [`bounce`](/zh-CN/docs/Web/API/HTMLMarqueeElement#bounce)、[`finish`](/zh-CN/docs/Web/API/HTMLMarqueeElement#finish) 和 [`start`](/zh-CN/docs/Web/API/HTMLMarqueeElement#start)，同时删除的还有在 [`<marquee>` HTML 元素](/zh-CN/docs/Web/HTML/Element/marquee)上定义的相应的[事件处理器属性](/zh-CN/docs/Web/HTML/Element/marquee#事件处理器)（[Firefox bug 1689705](https://bugzil.la/1689705)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### WebDriver BiDi

- 已为 `network.addIntercept` 命令添加了 `contexts` 参数，其用于限制对特定顶级浏览上下文的网络请求拦截（[Firefox bug 1884935](https://bugzil.la/1882260)）。
- `session.subscribe` 和 `session.unsubscribe` 现在都会在参数 `events` 或 `contexts` 的值为空数组时引发 `invalid argument` 错误（[Firefox bug 1884935](https://bugzil.la/1887871)）。
- 已更新对 `storage.getCookies` 命令的实现，以与 Gecko 默认的 cookie 行为保持一致。这允许删除用户的 `network.cookie.cookieBehavior` 偏好设置（预期仅会用于我们的 CDP 实现）（[Firefox bug 1884935](https://bugzil.la/1879503)）。
- 已移除 `browsingContext.locateNodes` 命令的 `ownership` 和 `sandbox` 参数，因为它们不再被需要（[Firefox bug 1884935](https://bugzil.la/1838152)）。
- 已改进 `session.new` 命令在未指定任何能力时的错误消息（[Firefox bug 1885495](https://bugzil.la/1838152)）。

## 为附加组件开发者带来的变化

- {{WebExtAPIRef("commands.onCommand")}} 事件现在将 `tab` 参数传递给事件监听器。这使得扩展可以将触发的快捷键应用于发出该事件的页面，而无需调用 `tabs.query()` 方法（[Firefox bug 1843866](https://bugzil.la/1843866)）。
- {{WebExtAPIRef("runtime.MessageSender")}} 类型现在包含 `origin` 属性。这使得消息或连接请求可以查看打开连接的页面或框架。这对于在 URL 中未明确显示来源的情况下确定来源是否可信非常有用（[Firefox bug 1787379](https://bugzil.la/1787379)）。
- 现已支持 `"webRequestAuthProvider"` 权限。这为 Manifest V3 中用于 {{WebExtAPIRef("webRequest.onAuthRequired")}} 的请求权限提供了与 Chrome 的兼容性（[Firefox bug 1820569](https://bugzil.la/1820569)）。
- 现在提供 [`options_page` 清单键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page)来作为 [`options_ui`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) 键的别名。这是为了使扩展更好地与 Chrome 兼容（[Firefox bug 1816960](https://bugzil.la/1816960)）。
- {{WebExtAPIRef("tabs.captureVisibleTab")}} 方法现在也可以通过 `activeTab` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)启用，这提供了与 Chrome 和 Safari 的兼容性（[Firefox bug 1784920](https://bugzil.la/1784920)）。

### 其他

## 实验性 Web 特性

这些特性是 Firefox 126 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `true`。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面上找到更多这样的特性。

- **可跨越影子 DOM 边界的选择**：`dom.shadowdom.selection_across_boundary.enabled`。

  {{domxref("Selection.getComposedRanges()")}} 方法现在可用于获取影子 DOM 中具有锚点或焦点的节点的选择范围——前提是传递了包含这些节点的 {{domxref("ShadowRoot")}} 对象。`Selection` 的 {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}、{{domxref("Selection.collapse()","collapse()")}} 和 {{domxref("Selection.extend()","extend()")}} 方法也已修改，以接受影子根中的节点（[Firefox bug 1867058](https://bugzil.la/1867058)）。

- **CSS `shape()` 函数**：`layout.css.basic-shape-shape.enabled`。

  你可以在 {{cssxref("clip-path")}} 和 {{cssxref("offset-path")}} 属性中使用 [`shape()`](/zh-CN/docs/Web/CSS/basic-shape/shape) 函数来定义形状。此函数使你可以更精细地控制可被定义的形状，并提供了比 {{cssxref("path","path()")}} 函数更多的优点（参见 [Firefox bug 1823463](https://bugzil.la/1823463) 以了解 `shape()` 函数在 `clip-path` 中的支持；参见 [Firefox bug 1884424](https://bugzil.la/1884424) 以了解 `shape()` 函数在 `offset-path` 中的支持；参见 [Firefox bug 1884425](https://bugzil.la/1884425) 以了解 `shape()` 的插值支持）。

## 更早期的版本

{{Firefox_for_developers}}
