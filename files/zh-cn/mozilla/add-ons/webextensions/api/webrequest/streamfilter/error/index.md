---
title: webRequest.StreamFilter.error
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

包含在 {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}} 事件触发后的错误消息的字符串。

## 浏览器兼容性

{{Compat}}

## 示例

该示例添加了记录 `error` 值的 {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}} 监听器。

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`发生错误：${filter.error}`);
  };

  //return {}; // 不需要返回任何内容
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
