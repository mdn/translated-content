---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
tags:
  - API
  - Beacon
  - Method
  - Navigator
  - NeedsExample
  - Networking
  - Reference
  - Web Performance
  - sendBeacon
translation_of: Web/API/Navigator/sendBeacon
---
{{APIRef("HTML DOM")}}

**`navigator.sendBeacon()`** 方法可用于通过 [HTTP POST](/zh-CN/docs/Web/HTTP/Methods/POST) 将少量数据 {{glossary("Asynchronous", "异步")}} 传输到 Web 服务器。

它主要用于将统计数据发送到 Web 服务器，同时避免了用传统技术（如：{{domxref("XMLHttpRequest","XMLHttpRequest")}}）发送分析数据的一些问题。

## 语法

```js
navigator.sendBeacon(url);
navigator.sendBeacon(url, data);
```

### 参数

- `url`
  - : `url` 参数表明 `data` 将要被发送到的网络地址。
- `data` {{Optional_inline}}
  - : `data` 参数是将要发送的 {{jsxref("ArrayBuffer")}}、{{domxref("ArrayBufferView")}}、{{domxref("Blob")}}、{{domxref("DOMString")}}、{{domxref("FormData")}} 或 {{domxref("URLSearchParams")}} 类型的数据。

### 返回值

当用户代理成功把数据加入传输队列时，**`sendBeacon()`** 方法将会返回 `true`，否则返回 `false`。

## 描述

这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向 Web 服务器发送数据。过早的发送数据可能导致错过收集数据的机会。然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。因为用户代理通常会忽略在 {{event("unload")}} 事件处理器中产生的异步 {{domxref("XMLHttpRequest")}}。

过去，为了解决这个问题， 统计和诊断代码通常要在

- 发起一个同步 `XMLHttpRequest` 来发送数据。
- 创建一个 {{HTMLElement("img")}} 元素并设置 `src`，大部分用户代理会延迟卸载（unload）文档以加载图像。
- 创建一个几秒的 no-op 循环。

上述的所有方法都会迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。下一个页面对于这种较差的载入表现无能为力。

这就是 **`sendBeacon()`** 方法存在的意义。使用 **`sendBeacon()`** 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：

- 数据发送是可靠的。
- 数据异步传输。
- 不影响下一导航的载入。

数据是通过 [HTTP POST](/zh-CN/docs/Web/HTTP/Methods/POST) 请求发送的。

### 在会话结束时发送统计数据

网站通常希望在用户完成页面浏览后向服务器发送分析或诊断数据，最可靠的方法是在 {{event("visibilitychange")}} 事件发生时发送数据：

```js
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/log', analyticsData);
  }
});
```

### 避免使用 unload 和 beforeunload

过去，许多网站使用 {{event("unload")}} 或 {{event("beforeunload")}} 事件以在会话结束时发送统计数据。然而这是不可靠的，在许多情况下（尤其是移动设备）浏览器不会产生 `unload`、`beforeunload` 或 `pagehide` 事件。下面列出了一种不触发上述事件的情况：

1. 用户加载了网页并与其交互。
2. 完成浏览后，用户切换到了其它应用程序，而不是关闭选项卡。
3. 随后，用户通过手机的应用管理器关闭了浏览器应用。

此外，`unload` 事件与现代浏览器实现的往返缓存（[bfcache](https://web.dev/bfcache/)）不兼容。在部分浏览器（如：Firefox）通过在 bfcache 中排除包含 `unload` 事件处理器的页面来解决不兼容问题，但这存在性能损失。其它浏览器，例如 Safari 和 Android 上的 Chrome 浏览器则采取用户在同一标签页下导航至其它页面时不触发 `unload` 事件的方法来解决不兼容问题。

Firefox 也会在 bfcache 中排除包含 `beforeunload` 事件处理器的页面。

#### 使用 pagehide 作为回退

可使用 {{event("pagehide")}} 事件来代替部分浏览器未实现的 `visibilitychange` 事件。和 `beforeunload` 与 `unload` 事件类似，这一事件不会被可靠地触发（特别是在移动设备上），但它与 bfcache 兼容。

## 示例

示例代码使用 {{event("visibilitychange")}} 事件来调用 `sendBeacon()` 以发送统计数据。

```js
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/log', analyticsData);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{event("visibilitychange")}} 事件。
- {{domxref("Beacon_API","Beacon API", "" , "true")}} 概述。
- [Don't
  lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) 解释了为什么你应该使用 `visibilitychange` 而不是 `beforeunload`/`unload`。
- [网页生命周期 API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#developer-recommendations-for-each-state) 提供了有关在 Web 应用程序中处理网页生命周期行为的最佳实践。
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle)：处理跨浏览器网页生命周期行为不一致的 JavaScript 库。
- [Back/forward cache](https://web.dev/bfcache/) 解释了什么是往返缓存，以及它对各种网页生命周期事件的影响。
