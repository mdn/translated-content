---
title: webRequest.StreamFilter.suspend()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/suspend
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

暂停请求。在调用此函数后一直到通过调用 {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} 恢复请求之前都不会再传递更多数据。

你只能在 {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} 事件触发后调用此函数。

## 语法

```js-nolint
filter.suspend()
```

### 参数

无。

### 返回值

无。

## 浏览器兼容性

{{Compat}}

## 示例

该示例使用 `suspend`/`resume` 来推迟一个网络请求。

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    filter.suspend();

    setTimeout(() => {
      filter.resume();
      filter.disconnect();
    }, 1000);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
