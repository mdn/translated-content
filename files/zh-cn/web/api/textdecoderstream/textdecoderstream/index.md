---
title: TextDecoderStream()
slug: Web/API/TextDecoderStream/TextDecoderStream
---

{{APIRef("Encoding API")}}

**`TextDecoderStream()`** 构造函数创建一个新的 {{domxref("TextDecoderStream")}} 对象，该对象用于将二进制编码的文本流转换为字符串。

## 语法

```js-nolint
new TextDecoderStream(label)
new TextDecoderStream(label, options)
```

### 参数

- `label`
  - : 默认为 `utf-8` 的字符串。可以是[任意有效的编码](/zh-CN/docs/Web/API/Encoding_API/Encodings)。
- `options` {{optional_inline}}

  - : 一个具有属性的 `TextDecoderOptions` 对象：

    - `fatal`
      - : 一个布尔值，表示错误的模式。如果是 true，则在 decoder 遇到错误时抛出一个 {{domxref("DOMException")}}。默认值是 `false`。

## 示例

以下示例演示如何从一个 {{domxref("fetch()")}} 中获取并解码二进制数据。如果没有传递任何 `label`，数据的解码类型为 UTF-8。

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
