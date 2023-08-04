---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
---

{{APIRef("Web Sockets API")}}

## 概要

返回当前 {{domxref("WebSocket")}} 的链接状态，只读。

## 语法

```plain
var readyState = WebSocket.readyState;
```

## 值

以下其中之一

- 0 (`WebSocket.CONNECTING`)
  - : 正在链接中
- 1 (`WebSocket.OPEN`)
  - : 已经链接并且可以通讯
- 2 (`WebSocket.CLOSING`)
  - : 连接正在关闭
- 3 (`WebSocket.CLOSED`)
  - : 连接已关闭或者没有链接成功

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
