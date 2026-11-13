---
title: TextEncoderStream：readable 属性
slug: Web/API/TextEncoderStream/readable
l10n:
  sourceCommit: 0f42b8ccf6bef96f27e678163954b3a363b9dcf6
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

{{domxref("TextEncoderStream")}} 接口的 **`readable`** 只读属性返回一个 {{domxref("ReadableStream")}}。

## 值

{{domxref("ReadableStream")}}。

## 示例

该示例演示了如何从 `TextEncoderStream` 对象返回一个 `ReadableStream`。

```js
const stream = new TextEncoderStream();
console.log(stream.readable); // 一个 ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
