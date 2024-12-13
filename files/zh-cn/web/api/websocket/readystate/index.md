---
title: WebSocket：readyState 属性
slug: Web/API/WebSocket/readyState
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.readyState`** 只读属性返回 {{domxref("WebSocket")}} 连接的当前状态。

## 值

一个数字，是 {{domxref("WebSocket")}} 接口定义的四个可能状态常量之一：

- `WebSocket.CONNECTING`（0）
  - : 套接字已创建，但连接尚未打开。
- `WebSocket.OPEN`（1）
  - : 连接已打开，准备进行通信。
- `WebSocket.CLOSING`（2）
  - : 连接正在关闭中。
- `WebSocket.CLOSED`（3）
  - : 连接已关闭或无法打开。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
