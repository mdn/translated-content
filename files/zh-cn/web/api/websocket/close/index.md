---
title: WebSocket：close() 方法
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.close()`** 方法关闭 {{domxref("WebSocket")}} 连接或连接尝试（如果存在）。如果连接已经是 `CLOSED` 状态，此方法不会执行任何操作。

> [!NOTE]
> 关闭连接的过程以[关闭握手](https://www.rfc-editor.org/info/rfc6455/#section-1.4)开始，`close()` 方法在启动该关闭握手之前不会丢弃先前已发送的消息；即使用户代理仍在忙于发送这些消息，握手也只会在消息发送完成后才开始。

## 语法

```js-nolint
close()
close(code)
close(code, reason)
```

### 参数

- `code` {{optional_inline}}
  - : 一个表示关闭原因的整数 [WebSocket 连接关闭代码](https://www.rfc-editor.org/info/rfc6455/#section-7.1.5)值：
    - 如果未指定，则会自动设置连接的关闭代码：正常关闭时为 `1000`，否则为 [`1001`-`1015` 范围内的另一个标准值](https://www.rfc-editor.org/info/rfc6455/#section-7.4.1)，表示连接被关闭的实际原因。
    - 如果指定了该参数，此 `code` 参数的值会覆盖连接的关闭代码的自动设置，改为设置自定义代码。该值必须是整数：`1000`，或你自己选择的 `3000`-`4999` 范围内的自定义代码。如果指定了 `code` 值，也应指定 [`reason`](#reason) 值。

- `reason` {{optional_inline}}
  - : 一个字符串，提供自定义的 [WebSocket 连接关闭原因](https://www.rfc-editor.org/info/rfc6455/#section-7.1.6)（对关闭原因的简洁可读说明）。该值的长度不得超过 123 字节（以 UTF-8 编码）。

    > [!NOTE]
    > 由于 [UTF-8 使用两个到四个字节](/zh-CN/docs/Glossary/UTF-8)来编码任何非 [ASCII](/zh-CN/docs/Glossary/ASCII) 字符，包含非 ASCII 字符的 123 个字符的 `reason` 值可能会超过 123 字节的限制。

    如果指定了 `reason` 值，也应指定 [`code`](#code) 值。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 如果 [`code`](#code) 既不是等于 `1000` 的整数，也不是 `3000` – `4999` 范围内的整数，则抛出。
- `SyntaxError` {{domxref("DOMException")}}
  - : 如果 UTF-8 编码后的 [`reason`](#reason) 值长度超过 123 字节，则抛出。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/)（WebSocket 协议规范）
