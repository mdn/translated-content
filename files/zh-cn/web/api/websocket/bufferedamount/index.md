---
title: WebSocket：bufferedAmount 属性
short-title: bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.bufferedAmount`** 只读属性返回已通过 [`send()`](/zh-CN/docs/Web/API/WebSocket/send) 调用排入队列、但尚未发送到网络的数据字节数。当所有排队的数据发送完毕后，该值会重置为零。当连接关闭时，该值不会自动重置为零；如果你继续调用 [`send()`](/zh-CN/docs/Web/API/WebSocket/send)，这个数值会继续增加。

## 值

一个 `unsigned long`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
