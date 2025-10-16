---
title: webRequest.StreamFilter.onstart
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstart
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当流被打开且准备开始传递数据时调用的事件处理器。从这时起扩展就可以调用过滤器函数，例如 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}、{{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} 或 {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}。

## 浏览器兼容性

{{Compat}}

## 示例

该示例会将页面内容替换为“替换的文字”：

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("开始接收数据");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("替换的文字"));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
