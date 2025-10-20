---
title: DataView.prototype.getInt16()
short-title: getInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("DataView")}} 实例的 **`getInt16()`** 方法从该 `DataView` 指定的字节偏移位置开始读取 2 个字节，并将其解释为一个 16 位有符号整数。该方法没有对齐限制；多字节值可以从边界范围内的任意偏移位置读取。

{{InteractiveExample("JavaScript 演示：DataView.prototype.getInt16()")}}

```js interactive-example
// 创建一个以字节为单位指定大小的 ArrayBuffer
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // 最大的有符号 16 位整数

console.log(view.getInt16(1));
// 预期输出：32767
```

## 语法

```js-nolint
getInt16(byteOffset)
getInt16(byteOffset, littleEndian)
```

### 参数

- `byteOffset`
  - : 表示从视图起始位置开始读取数据的偏移量（以字节为单位）。
- `littleEndian` {{optional_inline}}
  - : 指示数据的存储格式是[小端序还是大端序](/zh-CN/docs/Glossary/Endianness)。如果为 `false` 或 `undefined`，则按大端序读取值。

### 返回值

一个取值范围为 -32768 至 32767（含边界值）的整数。

### 异常

- {{jsxref("RangeError")}}
  - : 当设置的 `byteOffset` 导致读取超出视图末尾时，会抛出此异常。

## 示例

### 使用 getInt16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt16(1)); // 258
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int16Array")}}
