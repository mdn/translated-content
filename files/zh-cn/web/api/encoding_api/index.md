---
title: Encoding API
slug: Web/API/Encoding_API
---

{{DefaultAPISidebar("Encoding API")}}

**Encoding API** 提供了一种机制来处理各种{{Glossary("character encoding", "字符编码文本")}}，包括传统的非 {{Glossary("UTF-8")}} 编码。

API 提供了四个接口：{{domxref("TextDecoder")}}、{{domxref("TextEncoder")}}、{{domxref("TextDecoderStream")}} 和 {{domxref("TextEncoderStream")}}。

{{AvailableInWorkers}}

## 接口

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 一个 [shim](https://github.com/inexorabletash/text-encoding)，允许在不支持的浏览器中使用这个接口。
