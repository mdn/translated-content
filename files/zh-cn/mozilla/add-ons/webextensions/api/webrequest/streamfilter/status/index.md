---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

描述当前请求状态的字符串，可以取以下值之一：

- `"uninitialized"`
  - : 过滤器尚未完全初始化。此时不能调用任何过滤器函数。
- `"transferringdata"`
  - : 底层通道当前正在传输数据，且数据将在一个或多个 {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}} 事件中传递给扩展。此时扩展可以调用过滤器函数，例如 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}、{{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} 或 {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}。
- `"finishedtransferringdata"`
  - : 底层通道已经完成了数据的传输。此时扩展仍然可以使用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} 函数写入响应数据。
- `"suspended"`
  - : 当前数据传输已被暂停。此时扩展可以通过调用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} 函数恢复请求，并可以使用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} 函数写入响应数据。
- `"closed"`
  - : 扩展通过调用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} 函数关闭了请求。过滤器将不再触发任何事件，扩展也不能再调用任何过滤器函数。
- `"disconnected"`
  - : 扩展通过调用过滤器的 {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} 函数将过滤器从请求中断开。所有后续数据将直接传递而不经过过滤器。过滤器将不再触发任何事件，扩展也不能再调用任何过滤器函数。
- `"failed"`
  - : 发生了错误且过滤器已经从请求中断开。扩展可以在 {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}} 中找到错误消息，并且不能再调用任何过滤器函数。

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
