---
title: WebSocket.send()
slug: Web/API/WebSocket/send
---

{{APIRef("Web Sockets API")}}

**`WebSocket.send()`** 方法将需要通过 WebSocket 链接传输至服务器的数据排入队列，并根据所需要传输的 data bytes 的大小来增加 `bufferedAmount`的值。若数据无法传输（例如数据需要缓存而缓冲区已满）时，套接字会自行关闭。

## 语法

```plain
WebSocket.send("Hello server!");
```

### 参数

- `data`

  - : 用于传输至服务器的数据。它必须是以下类型之一：

    - {{domxref("USVString")}}
      - : 文本字符串。字符串将以 UTF-8 格式添加到缓冲区，并且 `bufferedAmount` 将加上该字符串以 UTF-8 格式编码时的字节数的值。
    - {{domxref("ArrayBuffer")}}
      - : 您可以使用一有类型的数组对象发送底层二进制数据；其二进制数据内存将被缓存于缓冲区，`bufferedAmount` 将加上所需字节数的值。
    - {{domxref("Blob")}}
      - : `Blob` 类型将队列 blob 中的原始数据以二进制中传输。 `bufferedAmount` 将加上原始数据的字节数的值。
    - {{domxref("ArrayBufferView")}}
      - : 您可以以二进制帧的形式发送任何 [JavaScript 类数组对象](/zh-CN/docs/Web/JavaScript/Typed_arrays) ；其二进制数据内容将被队列于缓冲区中。值 `bufferedAmount` 将加上必要字节数的值。

### 异常

- `INVALID_STATE_ERR`
  - : 当前连接未处于 `OPEN` 状态。
- `SYNTAX_ERR`
  - : 数据是一个包含未配对代理 (unpaired surrogates) 的字符串。

> **备注：** Gecko 在 Gecko 6.0 中对 `send()` 方法的实现与规范有些不一致；Gecko 返回一个 `boolean` 来告知当前连接是否依旧处于 `OPEN` 状态（同时也可以使用该返回值来判定数据是否已经被完全缓存或者传输）；这个问题在 Gecko 8.0 中被修正。
>
> 而 Gecko 11.0, 支持 {{jsxref("ArrayBuffer")}} 类型但不支持 {{domxref("Blob")}}类型。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
