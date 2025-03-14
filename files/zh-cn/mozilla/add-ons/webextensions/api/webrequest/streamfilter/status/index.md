---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

描述当前请求状态的字符串，是下列取值之一：

- `"uninitialized"`
  - : 过滤器尚未完全初始化。不能调用任何过滤器函数。
- `"transferringdata"`
  - : 底层通道当前正在传输数据，这些数据将在一个或多个 {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}} 事件中传递给扩展。扩展可以调用过滤器函数，例如 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}、{{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} 或 {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}。
- `"finishedtransferringdata"`
  - : 底层通道已经完成了数据传输。在这种状态下，扩展仍然可以使用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} 函数写入响应数据。
- `"suspended"`
  - : 数据传输当前被暂停。在这种状态下，扩展可以通过调用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} 函数恢复请求，并可以使用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} 函数写入响应数据。
- `"closed"`
  - : 扩展通过调用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} 函数关闭了请求。过滤器将不再触发任何事件，扩展不能再调用任何过滤器函数。
- `"disconnected"`
  - : 扩展通过调用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} 函数将过滤器从请求中断开。所有后续数据将直接传递，不经过过滤器。过滤器将不再触发任何事件，扩展不能再调用任何过滤器函数。
- `"failed"`
  - : 发生了错误，同时过滤器已经从请求中断开。扩展可以在 {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}} 中找到错误消息，并且不能再调用任何过滤器函数。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  console.log(filter.status); // uninitialized

  filter.onstart = (event) => {
    console.log(filter.status); // transferringdata
  };

  filter.ondata = (event) => {
    console.log(filter.status); // transferringdata
    // pass through the response data
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log(filter.status); // finishedtransferringdata
    filter.disconnect();
    console.log(filter.status); // disconnected
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
