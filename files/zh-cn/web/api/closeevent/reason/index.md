---
title: CloseEvent：reason 属性
short-title: reason
slug: Web/API/CloseEvent/reason
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

{{domxref("CloseEvent")}} 接口的只读属性 **`reason`** 返回服务器为关闭连接而提供的 [WebSocket 连接关闭原因](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6)；即一个简洁的人类可读的关闭原因说明。

## 值

字符串。

## 示例

以下示例将 `reason` 的值打印到控制台。

```js
WebSocket.onclose = (event) => {
  console.log(event.reason);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html)（WebSocket 协议规范）
