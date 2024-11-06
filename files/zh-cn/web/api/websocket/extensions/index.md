---
title: WebSocket.extensions
slug: Web/API/WebSocket/extensions
---

{{APIRef("Web Sockets API")}}

**`WebSocket.extensions`**是只读属性，返回服务器已选择的扩展值。目前，链接可以协定的扩展值只有空字符串或者一个扩展列表。

The **`WebSocket.extensions`** read-only property returns the extensions selected by the server. This is currently only the empty string or a list of extensions as negotiated by the connection.

## 语法

```plain
var extensions = aWebSocket.extensions;
```

## 返回值

A {{domxref("DOMString")}}.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
