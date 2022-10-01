---
title: DataView.prototype.getFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat64
---

{{JSRef}}

**`getFloat64()`** 方法从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)相对于起始位置偏移 n 个字节处开始，获取一个 64-bit 数 (双精度浮点型，8 个字节)。

{{EmbedInteractiveExample("pages/js/dataview-getfloat64.html")}}

## 语法

```plain
dataview.getFloat64(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，从头开始计算。
- littleEndian
  - : {{optional_inline}} Indicates whether the 64-bit float is stored in {{Glossary("Endianness", "little- or big-endian")}} format. If false or undefined, a big-endian value is read.

### 返回

一个双精度浮点型 64 位数。

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 例子

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getFloat64(1); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
