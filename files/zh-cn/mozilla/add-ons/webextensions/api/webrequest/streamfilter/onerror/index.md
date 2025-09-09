---
title: webRequest.StreamFilter.onerror
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onerror
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当错误发生时调用的事件处理器。通常发生在传递给 {{WebExtAPIRef("webRequest.filterResponseData()")}} 的请求 ID 无效时。

触发此事件后，{{WebExtAPIRef("webRequest.StreamFilter.error")}} 属性将包含有关错误的更多信息的消息。

请注意，此事件**不**会因网络错误而触发。

## 浏览器兼容性

{{Compat}}

## 示例

该示例添加了用于记录 {{WebExtAPIRef("webRequest.StreamFilter.error")}} 值的 `onerror` 监听器。

```js
function listener(details) {
  // 该示例并不太有用，因为扩展应该会使用“details.requestId”作为参数传递
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`错误：${filter.error}`);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

该示例则为不使用 `"blocking"` 的情况。

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onerror = (event) => {
    console.log(`错误：${filter.error}`); // 错误：Invalid request ID
  };
}

browser.webRequest.onBeforeRequest.addListener(listener, {
  urls: ["<all_urls>"],
  types: ["main_frame"],
});
```

{{WebExtExamples}}
