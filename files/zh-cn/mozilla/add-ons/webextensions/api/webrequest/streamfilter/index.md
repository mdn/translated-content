---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

`StreanFilter` 是可用于监控与修改 HTTP 响应的对象。

要创建 `StreamFilter`，请调用 {{WebExtAPIRef("webRequest.filterResponseData()")}} 并传入你想要过滤的 Web 请求的 ID。

你可以认为流过滤器位于网络堆栈和浏览器渲染引擎之间。当 HTTP 响应数据从网络中传递到后将传递给过滤器。在继续将数据传递给渲染引擎供解析和渲染之前，过滤器可以检查和修改数据。过滤器对响应主体具有完全控制权，并且如果没有任何监听器或写调用时，它的默认行为是拥有一个没有内容且永不关闭的流。

过滤器生成四种不同的事件：

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}}，当过滤器准备开始接收响应数据时。
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}}，当过滤器接收到一些响应数据并且可以检查或修改时。
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}}，当过滤器完成接收响应数据时。
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}}，如果在初始化和操作过滤器时发生错误。

通过指派监听器至其相应的属性，你可以监听上述的任一事件：

```js
filter.onstart = (event) => {
  console.log("开始接收数据");
};
```

需要注意，当执行任何事件监听器时，请求都会被阻塞。

过滤器提供了一个 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} 函数。在 `onstart` 事件之后的任何时间，你都可以使用这个函数将数据写入输出流。

如果你为过滤器的任何事件指派了监听器，那么传递给渲染引擎的所有响应数据都是通过你对 `write()` 的调用提供的。因此，如果你添加了监听器但没有调用 `write()`，那么渲染的页面将是空白的。

当你完成与响应的交互后，请调用以下方法之一：

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}：这会断开过滤器与请求的连接，因此响应的其余部分会正常处理。
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}：这会关闭请求，因此不会处理任何额外的响应数据。

过滤器还提供了函数来 {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}}（暂停）和 {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}}（恢复）请求。

## 方法

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : 关闭请求。
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : 断开过滤器与请求的连接。
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : 恢复请求的处理。
- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : 暂停请求的处理。
- {{WebExtAPIRef("webRequest.StreamFilter.write()")}}
  - : 将一些数据写入输出流。

## 属性

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : 当有数据可用时调用的事件处理器。
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : 当发生错误时调用的事件处理器。
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : 当流即将开始接收数据时调用的事件处理器。
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : 当流没有更多数据可提供并且已关闭时调用的事件处理器。
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : 当调用 {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} 时，该属性将描述发生的错误。
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : 描述流的当前状态。

## 浏览器兼容性

{{Compat}}

## 示例

下面的代码会监听 `onstart`、`ondata` 和 `onstop` 事件。它会记录这些事件以及以 {{jsxref("ArrayBuffer")}} 形式表示的响应数据本身：

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("开始接收数据");
  };

  filter.ondata = (event) => {
    console.log(event.data);
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log("接收完成");
    filter.disconnect();
  };

  //return {}; // 不需要
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
