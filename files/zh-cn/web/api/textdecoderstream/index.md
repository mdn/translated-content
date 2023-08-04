---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
---

{{APIRef("Encoding API")}}

{{domxref('Encoding API','','',' ')}} 接口的 **`TextDecoderStream`** 方法将二进制编码（如 UTF-8 等）的文本流转换为字符串流。它与 {{domxref("TextDecoder")}} 的流形式等价。

## 构造函数

- {{domxref("TextDecoderStream.TextDecoderStream","TextDecoderStream()")}}
  - : 创建一个新的 `TextDecoderStream` 对象。

## 属性

- {{DOMxRef("TextDecoderStream.encoding")}}{{ReadOnlyInline}}
  - : 一种编码。
- {{DOMxRef("TextDecoderStream.fatal")}}{{ReadOnlyInline}}
  - : 一个 {{jsxref("boolean")}}，表示错误是否是致命的。
- {{DOMxRef("TextDecoderStream.ignoreBOM")}}{{ReadOnlyInline}}
  - : 一个 {{jsxref("boolean")}}，表示是否忽略字节顺序标记。
- {{DOMxRef("TextDecoderStream.readable")}}{{ReadOnlyInline}}
  - : 返回此对象控制的 {{domxref("ReadableStream")}} 实例。
- {{DOMxRef("TextDecoderStream.writable")}}{{ReadOnlyInline}}
  - : 返回此对象控制的 {{domxref("WritableStream")}} 实例。

## 示例

- [流式传输结构化数据和 HTML 示例](https://streams.spec.whatwg.org/demos/)
- [一个使用 `TextDecoderStream` 流式处理 fetch 请求的示例](https://glitch.com/~fetch-request-stream)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TextEncoderStream")}}
- [Streams API 概念](/zh-CN/docs/Web/API/Streams_API/Concepts)
- [Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
