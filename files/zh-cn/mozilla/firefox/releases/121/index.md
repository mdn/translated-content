---
title: Firefox 121 的开发者说明
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 6534b4d3f496ff00832e465de36e7488188d0776
---

本文提供了有关 Firefox 121 中影响开发者的变更信息。Firefox 121 于 [2023 年 12 月 19 日](https://whattrainisitnow.com/release/?version=121)发布。

## 为 Web 开发者带来的变化

### HTML

- `<iframe>` 现已支持[懒加载](/zh-CN/docs/Web/Performance/Guides/Lazy_loading)，这允许开发者提示特定的 `<iframe>` 仅在可见时才进行加载。这可以减少页面加载时需要获取的资源（某些 `<iframe>` 可能根本不需要获取）以加快初始加载的时间。提示可以通过 `<iframe>` 元素上的 [`loading`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#loading) 属性或 JavaScript 中的 {{domxref("HTMLIFrameElement.loading")}} 属性提供。（[Firefox bug 1622090](https://bugzil.la/1622090)）。

### CSS

- 已更新 {{CSSXRef("text-wrap")}} 属性，添加了对 `balance` 和 `stable` 值的支持。`balance` 值用于短的内容块（例如标题），它将确保内容在多行上分布时平衡且易于阅读。`stable` 值确保可编辑的内容在用户编辑时不会被重排（[Firefox bug 1731541](https://bugzil.la/1731541)）。
- 现已支持 {{cssxref(":has", ":has()")}} 选择器（通常被称为*父选择器*）。它允许开发者根据相关联的元素为某个元素应用样式，例如，`li:has(ul)` 将匹配包含子列表的列表，`h1:has(+ p)` 将匹配后面紧跟段落的标题。
- 现已支持 [`text-indent`](/zh-CN/docs/Web/CSS/Reference/Properties/text-indent) CSS 属性的 [`each-line`](/zh-CN/docs/Web/CSS/Reference/Properties/text-indent#each-line) 和 [`hanging`](/zh-CN/docs/Web/CSS/Reference/Properties/text-indent#hanging) 属性值（[Firefox bug 784648](https://bugzil.la/784648)），以允许开发者更轻松地指定某些文本缩进样式。此外，开发者现在可以结合多个 `text-indent` 属性值以产生更多创意，例如 `text-indent: 3em hanging each-line`。

### JavaScript

- 现已支持 {{jsxref("Promise.withResolvers()")}} 静态方法。该方法将 `resolve` 和 `reject` 回调函数暴露在与返回的 {{jsxref("Promise")}} 相同的作用域中，允许在其构造之后定义兑现或拒绝该 promise 的代码（[Firefox bug 1845586](https://bugzil.la/1845586)）。

- {{jsxref("Date.parse()")}} 现在接受几种额外的日期格式：
  - 年份大于 9999 的 `YYYY-MMM-DD` 格式（例如 `19999-Jan-01`）（[Firefox bug 1858851](https://bugzil.la/1858851)）
  - `MMM-DD-YYYY` 格式（例如 `Jan-01-1970`）（[Firefox bug 1863489](https://bugzil.la/1863489)）
  - 非 ISO 日期格式的毫秒值（例如 `Jan 1 1970 10:00:00.050`）（[Firefox bug 1863125](https://bugzil.la/1863125)）
  - 现在会忽略格式开头的星期，例如：
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    星期不需要是正确的，或者根本不是星期几；例如，`foo 1970-01-01` 也是有效的（[Firefox bug 1617562](https://bugzil.la/1617562)）。

- 其他 {{jsxref("Date.parse()")}} 的修复：
  - `YYYY-M-DD` 和 `YYYY-MM-D` 不再被假定为 GMT，就像 ISO 日期 `YYYY-MM-DD` 一样（[Firefox bug 1783731](https://bugzil.la/1783731)）。
  - 所有格式的毫秒值都被截断为 3 位数，而不是进行四舍五入（[Firefox bug 746529](https://bugzil.la/746529)）。

### API

- 现已支持 {{domxref("WebTransportSendStream")}} 接口的 {{domxref("WebTransportSendStream.sendOrder", "sendOrder")}} 属性，其允许在创建流之后读取和更改传出的 [WebTransport API](/zh-CN/docs/Web/API/WebTransport_API) 的*双向*流的相对优先级。请注意，这不能用于修改单向流的优先级，因为 Firefox 将其实现为 {{domxref("WritableStream")}} 而不是 {{domxref("WebTransportSendStream")}}。（有关更多信息，请参阅 [Firefox bug 1853444](https://bugzil.la/1853444)。）

### WebAssembly

- WebAssembly 现已支持尾调用优化，使用新的 `return_call` 和 `return_call_indirect` 替代 [`call`](/zh-CN/docs/WebAssembly/Reference/Control_flow/call) 指令。这提高了性能，减少了堆栈空间的使用，并增强了与使用尾调用的编程语言的兼容性。（[Firefox bug 1858855](https://bugzil.la/1846789)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### WebDriver BiDi

- 添加了 [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) 事件，该事件在丢弃浏览上下文时触发（[Firefox bug 1694390](https://bugzil.la/1694390)）。
- 添加了对 [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) 和 [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) 命令的 `userActivation` 参数的支持，该参数允许在模拟用户操作时执行 JavaScript。（[Firefox bug 1845488](https://bugzil.la/1845488)）。
- 添加了对 [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) 事件的 `defaultValue` 字段的支持，该字段允许用户检索提示的默认值（[Firefox bug 1851761](https://bugzil.la/1851761)）。
- 将 [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) 命令的 `viewportOptions` 参数重命名为 `boxOptions`（[Firefox bug 1859258](https://bugzil.la/1859258)）。
- 移除了 [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) 命令的 `scrollIntoView` 参数，其已被下面的 `origin` 参数取代（[Firefox bug 1862649](https://bugzil.la/1862649)）。
- 添加了对 [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) 命令的 `origin` 参数的支持，该参数允许定义屏幕截图的原点和边界。接受的值为 `"document"` 和 `"viewport"`（[Firefox bug 1840999](https://bugzil.la/1840999)）。
- 在序列化 `Window` 对象时，序列化后的值现包含 `context` 属性，该属性被设置为 `Window` 对象的上下文 id，该 id 也可以与 Marionette 交换以引用特定的窗口和框架（[Firefox bug 1841049](https://bugzil.la/1841049)）。
- 修复了嵌套在数据结构（数组、映射等）中的节点（Node）的序列化失败的错误（[Firefox bug 1861000](https://bugzil.la/1861000)）。
- 修复了 [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) 命令会返回不正确的导航 id 的错误（[Firefox bug 1861655](https://bugzil.la/1861655)）。

#### Marionette

- 添加了对 `Window` 和 `Frame` 对象的序列化和反序列化的支持（[Firefox bug 1274251](https://bugzil.la/1274251)）。

## 实验性 Web 特性

以下特性是在 Firefox 121 中新推出的，但默认情况下处于禁用状态。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项并将其设置为 `true`。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面上找到更多此类特性。

- 自定义元素状态伪类：`dom.element.customstateset.enabled`
  - : 自定义元素可以通过 {{domxref("ElementInternals.states","states")}} 属性将其内部状态暴露为 {{domxref("CustomStateSet")}}。CSS 自定义状态伪类（例如 `:--somestate`）可以匹配该元素的状态。（[Firefox bug 1861466](https://bugzil.la/1861466)）
- HTML select 元素的 `showPicker()` 方法：`dom.select.showPicker.enabled`
  - : {{domxref("HTMLSelectElement.showPicker()")}} 方法以编程方式运行浏览器用于 {{HTMLElement("select")}} 元素的选择器，该方法需要由用户交互触发。（[Firefox bug 1854112](https://bugzil.la/1854112)）

## 为附加组件开发者带来的变化

- 修复了当 manifest.json 的 `background` 键包含 `service_worker` 和 `scripts` 声明时会导致后台页面无法启动的错误（[Firefox bug 1860304](https://bugzil.la/1860304)）。

  > [!NOTE]
  > 顺便说一下，Chrome 121 中的更改会导致在指定了 `service_worker` 属性时忽略 `scripts` 属性。以前，Chrome 拒绝加载同时包含这两个属性的扩展（[Chromium bug 1418934](https://crbug.com/1418934)）。有关更多信息，请参阅[清单 `background` 键的浏览器支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#浏览器支持)。

## 更早期的版本

{{Firefox_for_developers}}
