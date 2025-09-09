---
title: WebSocket.close()
slug: Web/API/WebSocket/close
---

{{APIRef("Web Sockets API")}}

**`WebSocket.close()`** 方法关闭 {{domxref("WebSocket")}} 连接或连接尝试（如果有的话）。如果连接已经关闭，则此方法不执行任何操作。

## 语法

```js-nolint
close()
close(code)
close(code, reason)
```

### 参数

- `code` {{optional_inline}}
  - : 一个数字状态码，它解释了连接关闭的原因。如果没有传这个参数，默认使用 1005。{{domxref("CloseEvent")}}的允许的状态码见[状态码列表](/zh-CN/docs/Web/API/CloseEvent#status_codes) 。
- `reason` {{optional_inline}}
  - : 一个人类可读的字符串，它解释了连接关闭的原因。这个 UTF-8 编码的字符串不能超过 123 个字节。

### 抛出的异常

- `INVALID_ACCESS_ERR`
  - : 一个无效的`code`
- `SYNTAX_ERR`
  - : `reason` 字符串太长（超过 123 字节）

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
