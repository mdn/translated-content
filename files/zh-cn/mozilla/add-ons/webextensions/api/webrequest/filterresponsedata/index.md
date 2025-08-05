---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
l10n:
  sourceCommit: 3994f738ebbe4d25e1e68f70cc45be072a22e0c3
---

使用此函数为请求创建一个 {{WebExtAPIRef("webRequest.StreamFilter")}} 对象。流过滤器为 Web 扩展提供了对流的完全控制，能够监控和修改响应。扩展需要负责写入并关闭或断开流，因为默认行为是保持请求打开而没有响应。

你通常在 `webRequest` 事件监听器中调用此函数。

Firefox 对脚本请求使用了优化的字节缓存。此优化的字节缓存会覆盖正常的请求缓存。扩展无法以对其有用的形式访问此缓存中的数据。如果你的扩展需要过滤脚本，请在 {{WebExtAPIRef("webRequest.onBeforeRequest")}} 中创建过滤器。这样可以确保在尝试从缓存加载之前创建过滤器，从而避免使用优化缓存。

## 权限

要使用此 API，你必须取得 `"webRequest"` 和 `"webRequestBlocking"` [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)，并且对于事件监听器，你还需要取得主机的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。此外：

- 从 Firefox 95 开始，要使用此 API 拦截与加载 service worker 脚本相关的请求，还需要 `"webRequestFilterResponse.serviceWorkerScript"` 权限。
- 从 Firefox 110 开始，Manifest V3 扩展还必须请求 `"webRequestFilterResponse"` 权限才能使用此 API。

## 语法

```js-nolint
let filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### 参数

- `requestId`
  - : `string`。要过滤的请求的 ID。可以从传递到任何 `webRequest` 事件监听器的 `details` 对象中获取。

### 返回值

可用于监控和修改响应的 {{WebExtAPIRef("webRequest.StreamFilter")}} 对象。

## 示例

该示例展示了一个最小实现，它通过流数据并在流完成接收数据时关闭流过滤器。代码将从 {{WebExtAPIRef("webRequest")}} 事件监听器中调用，并且事件监听器提供 `details`。

```js
let filter = browser.webRequest.filterResponseData(details.requestId);
filter.ondata = (event) => {
  console.log(`filter.ondata 接收了 ${event.data.byteLength} 字节`);
  filter.write(event.data);
};
filter.onstop = (event) => {
  // 扩展在创建 StreamFilter 后应始终调用 filter.close() 或 filter.disconnect()，否则响应将永远保持活动状态。
  // 如果响应数据的处理已完成，请使用 close。如果任何剩余的响应数据应由 Firefox 处理，请使用 disconnect。
  filter.close();
};
```

该示例截取自 [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response) 扩展示例，在 {{WebExtAPIRef("webRequest.onBeforeRequest")}} 中创建过滤器并使用它来修改响应的第一个块：

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // 仅将 HTTP 响应中的“示例”替换为“WebExtension 示例”。
    str = str.replaceAll("示例", "WebExtension 示例");
    filter.write(encoder.encode(str));
    filter.disconnect();
  };

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

> [!NOTE]
> 上述示例仅适用于未分块或流式传输的小型请求。更高级的示例记录在 {{WebExtAPIRef("webRequest.StreamFilter.ondata")}} 中。

## 浏览器兼容性

{{Compat}}
