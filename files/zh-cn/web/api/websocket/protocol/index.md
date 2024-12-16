---
title: WebSocket.protocol
slug: Web/API/WebSocket/protocol
---

{{APIRef("Web Sockets API")}}

**`WebSocket.protocol`** 是个只读属性，用于返回服务器端选中的子协议的名字；这是一个在创建 {{domxref("WebSocket")}} 对象时，在参数 {{domxref("protocols")}} 中指定的字符串，当没有已建立的链接时为空串。

## 语法

```plain
var protocol = aWebSocket.protocol;
```

## 返回值

[`DOMString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
