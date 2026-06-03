---
title: webRequest.StreamFilter.write()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
l10n:
  sourceCommit: 2de85adef3b988bf47549446b2254a7f533b7649
---

向输出流写入响应数据。

你只能在 {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} 事件触发后调用此函数。

## 语法

```js-nolint
filter.write(
  data    // ArrayBuffer 或 Uint8Array
)
```

### 参数

- `data`
  - : [`Uint8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 或 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)：包含要传递给浏览器渲染引擎的数据的字节数组。

### 返回值

无。

## 浏览器兼容性

{{Compat}}

## 示例

该示例使用 `write()` 将响应的第一个数据块中的“示例”替换为“WebExtension 示例”。

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // 只将 HTTP 响应中所有的“示例”替换为“WebExtension 示例”
    str = str.replaceAll("示例", "WebExtension 示例");
    filter.write(encoder.encode(str));
    filter.disconnect();
  };

  //return {}; // 不需要返回任何内容
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
