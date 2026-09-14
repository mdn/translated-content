---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

关闭请求。在调用后，后续的响应数据不再会传递给浏览器的渲染引擎，也不会再给扩展传递更多的过滤器事件。

请注意此函数与 {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} 之间的区别。使用 `disconnect()` 后，浏览器将继续处理任何进一步的响应数据，但这些数据将无法通过过滤器访问。使用 `close()` 后，浏览器将忽略尚未传递到渲染引擎的任何响应数据。

当你不再需要与响应进行交互时，应始终第一时间调用 `disconnect()` 或 `close()`。

你只能在 {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} 事件触发后调用此函数。

## 语法

```js-nolint
filter.close()
```

### 参数

无。

### 返回值

无。

## 浏览器兼容性

{{Compat}}

## 示例

该示例将替换页面内容为“替换内容”：

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("开始接收数据");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("替换内容"));
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
