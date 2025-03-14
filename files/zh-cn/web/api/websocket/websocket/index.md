---
title: WebSocket()
slug: Web/API/WebSocket/WebSocket
---

{{APIRef("Web Sockets API")}}
**`WebSocket()`**构造函器会返回一个 {{domxref("WebSocket")}} 对象。

## 语法

```plain
var aWebSocket = new WebSocket(url [, protocols]);
```

### 参数

- `url`
  - : 要连接的 URL；这应该是 WebSocket 服务器将响应的 URL。
- `protocols` {{optional_inline}}
  - : 一个协议字符串或者一个包含协议字符串的数组。这些字符串用于指定子协议，这样单个服务器可以实现多个 WebSocket 子协议（例如，你可能希望一台服务器能够根据指定的协议（`protocol`）处理不同类型的交互）。如果不指定协议字符串，则假定为空字符串。

### 抛出异常

- `SECURITY_ERR`
  - : 正在尝试连接的端口被阻止。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
