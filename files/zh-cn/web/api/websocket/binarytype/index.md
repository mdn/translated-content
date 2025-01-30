---
title: WebSocket：binaryType 属性
slug: Web/API/WebSocket/binaryType
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.binaryType`** 属性用于控制通过 WebSocket 连接接收的二进制数据类型。

## 值

一个字符串：

- `"blob"`
  - : 使用 {{domxref("Blob")}} 对象处理二进制数据。这是默认值。
- `"arraybuffer"`
  - : 使用 {{jsxref("ArrayBuffer")}} 对象处理二进制数据。

## 示例

```js
// 创建 WebSocket 连接。
const socket = new WebSocket("ws://localhost:8080");

// 将二进制类型从“blob”更改为“arraybuffer”
socket.binaryType = "arraybuffer";

// 监听消息
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
    // 二进制帧
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // 文本帧
    console.log(event.data);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
