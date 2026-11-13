---
title: webRequest.StreamFilter.onstop
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstop
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当流没有更多要传递的数据时调用的事件处理器。在该事件处理器中，你仍然可以调用过滤器函数，例如 {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}、{{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} 或 {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}。

## 浏览器兼容性

{{Compat}}

## 示例

该示例会在响应中追加“额外的数据”：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    // 传递所有响应数据
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    filter.write(encoder.encode("额外的数据"));
    filter.disconnect();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

上述示例也可以这样实现：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    for (const buffer of data) {
      filter.write(buffer);
    }
    filter.write(encoder.encode("额外的数据"));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
