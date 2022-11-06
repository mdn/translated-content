---
title: TextDecoderStream.fatal
slug: Web/API/TextDecoderStream/fatal
---

{{APIRef("Encoding API")}}

{{domxref("TextDecoderStream")}} 接口的只读属性 **`fatal`** 是一个 {{jsxref("boolean")}}，表示 `TextDecoderStream` 对象的错误模式是否设置为 `fatal`。

两个可能的错误模式为 `fatal` 或者 `replacement`，默认是 `replacement`，它将一个替换字符 `U+FFFD`（�）推送到输出。

## 值

一个 {{jsxref("boolean")}}。如果错误模式设置为 `fatal`，返回 `true`。否则它返回 `false`。

## 示例

```js
stream = new TextDecoderStream();
console.log(stream.fatal); // returns false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
