---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
---

{{APIRef("Encoding API")}}

{{domxref('Encoding API','','',' ')}} 的 **`TextEncoderStream`** 接口将一个字符串流转换为 UTF-8 编码的字节。它与 {{domxref("TextEncoder")}} 的流形式等价。

## 构造函数

- {{domxref("TextEncoderStream.TextEncoderStream","TextEncoderStream()")}}
  - : 创建一个新的 `TextEncoderStream` 对象。

## 属性

- {{DOMxRef("TextEncoderStream.encoding")}}{{ReadOnlyInline}}
  - : 总是返回"`utf-8`"。
- {{DOMxRef("TextEncoderStream.readable")}}{{ReadOnlyInline}}
  - : 返回此对象控制的 {{domxref("ReadableStream")}} 实例。
- {{DOMxRef("TextEncoderStream.writable")}}{{ReadOnlyInline}}
  - : 返回此对象控制的 {{domxref("WritableStream")}} 实例。

## 示例

- [流式传输结构化数据和 HTML 示例](https://streams.spec.whatwg.org/demos/)
- [一个使用 `TextDecoderStream` 流式处理 fetch 请求的示例](https://glitch.com/~fetch-request-stream)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TextDecoderStream")}}
- [Streams API 概念](/zh-CN/docs/Web/API/Streams_API/Concepts)
- [Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
