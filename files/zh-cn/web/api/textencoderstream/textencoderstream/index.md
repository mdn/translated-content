---
title: TextEncoderStream()
slug: Web/API/TextEncoderStream/TextEncoderStream
---

{{APIRef("Encoding API")}}

**`TextEncoderStream()`** 构造函数创建一个新的 {{domxref("TextEncoderStream")}} 对象，该对象使用 UTF-8 编码将字符串流转换为字节。

## 语法

```js-nolint
new TextEncoderStream()
```

### 参数

无。

## 示例

在此示例中，创建了一个 `TextEncoderStream` 并且使用它去上传一个文本流。

```js
const body = textStream.pipeThrough(new TextEncoderStream());
fetch("/dest", {
  method: "POST",
  body,
  headers: { "Content-Type": "text/plain; charset=UTF-8" },
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
