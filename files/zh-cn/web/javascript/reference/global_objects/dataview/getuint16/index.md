---
title: DataView.prototype.getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
---

**`getUint16()`** 方法从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 相对于起始位置偏移 n 个字节处开始，获取一个 16-bit 数 (无符号短整型，2 个字节)。

{{InteractiveExample("JavaScript Demo: DataView.getUint16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // Max unsigned 16-bit integer

console.log(view.getUint16(1));
// Expected output: 65535
```

## 语法

```plain
dataview.getUint16(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，从头开始计算。
- littleEndian
  - : {{optional_inline}} Indicates whether the 16-bit int is stored in {{Glossary("Endianness", "little- or big-endian")}} format. If false or undefined, a big-endian value is read.

### 返回

一个无符号短整型 16 位数。

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getUint16(1); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
