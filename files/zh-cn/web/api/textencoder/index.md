---
title: TextEncoder
slug: Web/API/TextEncoder
---

{{APIRef("Encoding API")}}

**`TextEncoder`** 接受代码点流作为输入，并提供 UTF-8 字节流作为输出。

## 构造函数

- {{domxref("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : 返回一个新构造的 `TextEncoder`，它默认使用 UTF-8 编码将代码点流转换成字节流。

## 属性

_`TextEncoder` 接口不继承任何属性。_

- {{domxref("TextEncoder.prototype.encoding")}} {{readonlyInline}}
  - : 总是返回 "`utf-8`"。

## 方法

_`TextEncoder` 接口不继承任何方法。_

- {{domxref("TextEncoder.encode()")}}
  - : 接受一个 {{domxref("USVString")}} 作为输入，返回一个包含文本的 {{jsxref("Uint8Array")}}，其中的文本使用 UTF-8 编码。
- {{DOMxRef("TextEncoder.encodeInto()")}}
  - : 接受一个 字符串进行编码，使用目标 {{jsxref("Uint8Array")}}，将生成的 UTF-8 编码文本放入，并且返回一个指示编码进度的对象。此方法的性能可能会比更早出现的 `encode()` 方法好一些。

## 示例

```js
const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("TextDecoder")}} 接口描述了逆操作。
- [Node.js 支持从 v11.0.0 全局导出](https://nodejs.org/api/util.html#util_class_util_textencoder)
