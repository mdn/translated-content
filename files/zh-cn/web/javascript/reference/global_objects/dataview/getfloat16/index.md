---
title: DataView.prototype.getFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat16
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

{{jsxref("DataView")}} 实例的 **`getFloat16()`** 方法从相对于当前 `DataView` 的起始位置偏移指定个字节处读取 2 个字节，并将其解释为 16 位浮点数。如果没有对齐约束；则可以从边界内的任意偏移位置处获取多字节值。

{{InteractiveExample("JavaScript Demo: DataView.getFloat16()")}}

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
getFloat16(byteOffset)
getFloat16(byteOffset, littleEndian)
```

### 参数

- `byteOffset`
  - : 从视图的开始位置到读取数值的位置的偏移量，以字节为单位。
- `littleEndian` {{optional_inline}}
  - : 指示数据是否以[小端或大端序](/zh-CN/docs/Glossary/Endianness)格式存储。如果为 `false` 或 `undefined`，则以大端序读取数值。

### 返回值

从 `-65504` 到 `65504` 之间的浮点数。

### 异常

- {{jsxref("RangeError")}}
  - : 如果设置的 `byteOffset` 会导致读取超出视图的末尾，则抛出此异常。

## 示例

### 使用 getFloat16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat16(1)); // 0.00001537799835205078
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `DataView.prototype.getFloat16` 的 polyfill](https://github.com/zloirock/core-js#float16-methods)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
