---
title: DataView.prototype.setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

{{jsxref("DataView")}} 实例的 **`setFloat16()`** 接受一个数字，并将其以 16 位浮点数的形式存储在从当前 `DataView` 的指定偏移位置开始处的 2 字节中。如果没有对齐约束；则可以在边界内的任意偏移位置处存储多字节值。

{{InteractiveExample("JavaScript Demo: DataView.setFloat16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat16(1, Math.PI);

console.log(view.getFloat16(1));
// Expected output: 3.140625
```

## 语法

```js-nolint
setFloat16(byteOffset, value)
setFloat16(byteOffset, value, littleEndian)
```

### 参数

- `byteOffset`
  - : 从视图的开始位置到存储数据的位置的偏移量，以字节为单位。
- `value`
  - : 要设置的值。有关数据如何编码为字节序的详细信息，请参见[值编码与标准化](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#值编码与标准化)。
- `littleEndian` {{optional_inline}}
  - : 指示数据是否以[小端或大端序](/zh-CN/docs/Glossary/Endianness)格式存储。如果为 `false` 或 `undefined`，则以大端序写入数值。

### 返回值

{{jsxref("undefined")}}。

### 异常

- {{jsxref("RangeError")}}
  - : 如果设置的 `byteOffset` 会导致存储到视图的末尾之外，则抛出此异常。

## 示例

### 使用 setFloat16()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setFloat16(0, 3);
dataview.getFloat16(1); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `DataView.prototype.setFloat16` 的 polyfill](https://github.com/zloirock/core-js#float16-methods)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
