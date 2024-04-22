---
title: TextEncoder
slug: Web/API/TextEncoder
---

{{APIRef("Encoding API")}}

**`TextEncoder`** 接受码位流作为输入，并提供 UTF-8 字节流作为输出。

{{AvailableInWorkers}}

## 构造函数

- {{domxref("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : 返回一个新构造的 `TextEncoder`，它默认使用 UTF-8 编码将码位流转换成字节流。

## 属性

_`TextEncoder` 接口不继承任何属性。_

- {{domxref("TextEncoder.prototype.encoding")}} {{readonlyInline}}
  - : 总是返回 `utf-8`。

## 方法

_`TextEncoder` 接口不继承任何方法。_

- {{domxref("TextEncoder.encode()")}}
  - : 接受一个字符串作为输入，返回一个包含 UTF-8 编码的文本的 {{jsxref("Uint8Array")}}。
- {{DOMxRef("TextEncoder.encodeInto()")}}
  - : 接受一个字符串（编码的对象）和一个目标 {{jsxref("Uint8Array")}}（用于放入生成的 UTF-8 编码的文本）作为输入，并且返回一个指示编码进度的对象。此方法的性能可能会比更早出现的 `encode()` 方法好一些。

## 示例

```js
const encoder = new TextEncoder();
const view = encoder.encode("€");
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("TextDecoder")}} 接口描述了逆操作。
- [Node.js 从 v11.0.0 开始支持全局导出](https://nodejs.org/api/util.html#util_class_util_textencoder)
