---
title: TextDecoderStream.encoding
slug: Web/API/TextDecoderStream/encoding
---

{{APIRef("Encoding API")}}

{{domxref("TextDecoderStream")}} 接口的只读属性 **`encoding`** 返回一个字符串，其中包含指定的 encoder 使用的编码算法的名称。

## 值

一个小写的 ASCII 字符串。

## 示例

从一个 `TextDecoderStream` 返回 `encoding` 的值。

```js
stream = new TextDecoderStream();
console.log(stream.encoding); // returns the default "utf-8"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
