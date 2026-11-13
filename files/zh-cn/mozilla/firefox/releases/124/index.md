---
title: Firefox 124 的开发者说明
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

本文提供了有关 Firefox 124 中影响开发者的变更信息。Firefox 124 于 [2024 年 2 月 20 日](https://whattrainisitnow.com/release/?version=124)发布。

## 为 Web 开发者带来的变化

### HTML

没有值得注意的变化。

### CSS

- {{cssxref("text-wrap")}} 属性现已被转换为简写属性，其涵盖了成员属性 {{cssxref("text-wrap-mode")}} 和 {{cssxref("text-wrap-style")}}。（[Firefox bug 1758391](https://bugzil.la/1758391)）。

### JavaScript

没有值得注意的变化。

### SVG

- {{cssxref("::first-letter")}} 和 {{cssxref("::first-line")}} CSS 伪元素现在可应用于 {{SVGElement("text")}} SVG 元素。例如，这允许你使用 CSS 更改 `<text>` 元素的第一个字母/行的填充、描边或字体。（[Firefox bug 1302722](https://bugzil.la/1302722)）。

### API

- 现已支持 [`AbortSignal.any()`](/zh-CN/docs/Web/API/AbortSignal/any_static)，这允许创建可用于从多个信号源中终止操作的复合信号。([Firefox bug 1830781](https://bugzil.la/1830781))。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### WebDriver BiDi

- 实现了 [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) 命令，其允许用户检索 cookie。此命令接受两个可选参数。客户端可以提供 `filter` 参数，以仅返回符合特定条件的 cookie。`partition` 参数可用于构建分区键并检索[由相应分区持有](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning)的 cookie。（[Firefox bug 1854580](https://bugzil.la/1854580)）
- 实现了 [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie) 命令，其用于创建新的 cookie。用户可以在 `cookie` 参数中提供有关 cookie 的信息，并可选地提供 `partition` 参数以构建应持有该 cookie 的分区的分区键。（[Firefox bug 1854582](https://bugzil.la/1854582)）
- 实现了一些用于拦截请求的命令：
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept)：允许用户定义用于在网络事件生命周期的各个阶段拦截网络请求的 URL 模式。此命令返回表示创建的网络拦截的唯一 ID。（[Firefox bug 1826192](https://bugzil.la/1826192)）
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept)：允许根据其唯一 ID 删除拦截。（[Firefox bug 1826193](https://bugzil.la/1826193)）
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth)：允许恢复在 `AuthRequired` 阶段拦截的请求。客户端可以使用“action”参数来取消（“cancel”）、使用用户名和密码来提供凭据（“provideCredentials”），或者回退到“default”来让浏览器显示身份验证提示。（[Firefox bug 1826196](https://bugzil.la/1826196)）
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest)：用于取消在 `BeforeRequestSent` 或 `ResponseStarted` 阶段拦截的请求。（[Firefox bug 1853883](https://bugzil.la/1853883)）
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest)、[network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) 和 [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) 也已经可用，但目前只支持“request”参数，并且只可用于恢复被阻止的请求。在未来的版本中，将支持额外的、用于修改请求和响应的参数。（[Firefox bug 1874206](https://bugzil.la/1874206) 和 [Firefox bug 1853882](https://bugzil.la/1853882)）
- 实现了一些围绕“用户上下文”的命令，这些命令在 Firefox 中以[容器](https://support.mozilla.org/en-US/kb/how-use-firefox-containers)形式实现：
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext)：创建新的用户上下文并返回新用户上下文的唯一 ID。（[Firefox bug 1870848](https://bugzil.la/1870848)）
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext)：可用于通过指定其唯一 ID 来删除任何非默认的用户上下文。（[Firefox bug 1870849](https://bugzil.la/1870849)）
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts)：允许客户端检索所有可用的用户上下文的列表，包括默认用户上下文。（[Firefox bug 1870847](https://bugzil.la/1870847)）
- 添加了对 [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) 命令的“userContext”参数的支持，该参数允许将新的浏览上下文（标签页或窗口）分配给特定的用户上下文（Firefox 容器）。（[Firefox bug 1874918](https://bugzil.la/1874918)）
- 更新 [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) 类型，以包含“userContext”字段，该字段是拥有当前浏览上下文的标签页的用户上下文的唯一 ID。（[Firefox bug 1874920](https://bugzil.la/1874920)）
- 添加了对 [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript) 命令的“contexts”参数的支持，该参数允许客户端通过指定顶级浏览上下文以仅将预加载脚本添加到特定的浏览上下文树（标签页）中。（[Firefox bug 1858458](https://bugzil.la/1858458)）
- 修复了 [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) 无法关闭窗口中的最后一个标签页的错误。（[Firefox bug 1873948](https://bugzil.la/1873948)）

#### Marionette

- 修复了[获取元素文本](https://w3c.github.io/webdriver/#dfn-get-element-text)的一个错误：在未指定自定义文本时，它会忽略 Web 组件的 slot 值。（[Firefox bug 1865381](https://bugzil.la/1865381)）

## 为附加组件开发者带来的变化

- 添加了 {{WebExtAPIRef("runtime.onPerformanceWarning")}} 事件，允许扩展在浏览器检测到扩展自身存在运行时性能问题（例如内容脚本运行缓慢）时获取信息。（[Firefox bug 1861445](https://bugzil.la/1861445)）。

## 实验性 Web 特性

这些特性是 Firefox 124 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `true`。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面上找到更多这样的特性。

- **Growable `SharedArrayBuffer`**：`javascript.options.experimental.sharedarraybuffer_growable`。

  {{jsxref("SharedArrayBuffer")}} 现在可以使用 {{jsxref("SharedArrayBuffer.prototype.grow()")}} 方法进行增大。缓冲允许的最大大小由 [`SharedArrayBuffer()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength)的 `options.maxByteLength` 参数指定。{{jsxref("SharedArrayBuffer.prototype.growable")}} 和 {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} 属性分别指示缓冲是否可以增大以及其允许的最大大小。（[Firefox bug 1842773](https://bugzil.la/1842773)。）

- **Resizable `ArrayBuffer`**：`javascript.options.experimental.arraybuffer_resizable`。

  {{jsxref("ArrayBuffer")}} 现在可以使用 {{jsxref("ArrayBuffer.prototype.resize()")}} 方法来调整大小。缓冲允许的最大大小由 [`ArrayBuffer()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength)的 `options.maxByteLength` 参数指定。{{jsxref("ArrayBuffer.prototype.resizable")}} 和 {{jsxref("ArrayBuffer.prototype.maxByteLength")}} 属性分别指示缓冲是否可以调整大小以及其允许的最大大小。（[Firefox bug 1842773](https://bugzil.la/1842773)。）

## 更早期的版本

{{Firefox_for_developers}}
