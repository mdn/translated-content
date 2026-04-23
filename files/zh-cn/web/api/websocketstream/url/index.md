---
title: WebSocketStream：url 属性
short-title: url
slug: Web/API/WebSocketStream/url
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("WebSocketStream")}} 接口的只读属性 **`url`** 返回创建 `WebSocketStream` 实例时所用的 WebSocket 服务器的 URL。

## 值

字符串。

## 示例

```js
const wss = new WebSocketStream("wss://example.com/wss");

// 向控制台输出“example.com/wss”
console.log(wss.url);
```

## 规范

目前不属于任何规范。有关标准化进展，参见 https://github.com/whatwg/websockets/pull/48 页面内容。

## 浏览器兼容性

{{Compat}}

## 参见

- developer.chrome.google.cn 上的 [WebSocketStream：将流与 WebSocket API 集成](https://developer.chrome.google.cn/docs/capabilities/web-apis/websocketstream)（2020）
