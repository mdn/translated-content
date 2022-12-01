---
title: TextEncoderStream.encoding
slug: Web/API/TextEncoderStream/encoding
---

{{APIRef("Encoding API")}}

{{domxref("TextEncoderStream")}} 接口的只读属性 **`encoding`** 返回一个字符串，其中包含当前 `TextEncoderStream` 对象使用的编码算法的名称。

## 值

一个使用 `utf-8` 编码的字符串。

## 示例

以下示例演示如何从一个 `TextEncoderStream` 对象返回 `encoding`。

```js
stream = new TextEncoderStream();
console.log(stream.encoding);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
