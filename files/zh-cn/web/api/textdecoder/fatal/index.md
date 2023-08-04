---
title: TextDecoder.fatal
slug: Web/API/TextDecoder/fatal
---

{{APIRef("Encoding API")}}

{{domxref("TextDecoder")}} 接口的只读属性 **`fatal`** 是一个{{jsxref('Boolean', '布尔值', '', '1')}}，表示错误模式是否是致命的。

如果这个值是 `true`，那么当解码器在解码时遇到格式错误的数据时，将抛出 {{jsxref("TypeError")}} 错误。如果值是 `false`，则解码器将使用替换字符 `U+FFFD`（�）替换无效的数据。属性值在 [`TextDecoder()` 构造函数](/zh-CN/docs/Web/API/TextDecoder/TextDecoder)中设置。

## 值

一个{{jsxref("boolean", '布尔值', '', '1')}}，如果错误模式设置为 `fatal`，它将返回 `true`。否则返回 `false`，表示错误模式是“replacement”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
