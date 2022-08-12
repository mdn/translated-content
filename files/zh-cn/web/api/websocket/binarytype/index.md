---
title: WebSocket.binaryType
slug: Web/API/WebSocket/binaryType
tags:
  - 参考
  - 属性
  - 应用编程接口
  - 网页套接字
  - 网页接口
translation_of: Web/API/WebSocket/binaryType
original_slug: Web/API/WebSocket/二进制类型
---
{{APIRef("Web Sockets API")}}

**`WebSocket.binaryType`** 返回 websocket 连接所传输二进制数据的类型。

## 语法

```plain
var binaryType = aWebSocket.binaryType;
```

## 返回值

一条{{DOMXref("DOMString")}}:

- `"blob"`
  - : 如果传输的是 {{domxref("Blob")}} 类型的数据。
- `"arraybuffer"`
  - : 如果传输的是 {{jsxref("ArrayBuffer")}} 类型的数据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.WebSocket.binaryType")}}
