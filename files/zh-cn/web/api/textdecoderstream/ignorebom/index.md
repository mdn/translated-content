---
title: TextDecoderStream.ignoreBOM
slug: Web/API/TextDecoderStream/ignoreBOM
---

{{APIRef("Encoding API")}}

{{domxref("TextDecoderStream")}} 接口的只读属性 **`ignoreBOM`** 返回一个 {{jsxref("boolean")}}，表示是否忽略字节顺序标记（BOM）。

## 值

一个 {{jsxref("boolean")}}，初始值是 `false`。

## 示例

```js
stream = new TextDecoderStream();
console.log(stream.ignoreBOM); // returns false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
