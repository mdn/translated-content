---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

恢复之前调用 {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} 暂停的请求。

你只能在 {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} 事件触发后调用此函数。

## 语法

```js-nolint
StreamFilter.resume()
```

### 参数

无。

### 返回值

无。

## 浏览器兼容性

{{Compat}}

## 示例

下述示例使用 `suspend`/`resume` 来推迟一个网络请求。

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
