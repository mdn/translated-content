---
title: DataView.prototype.getInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt16
---

{{JSRef}}

**`getInt16()`** 方法从 {{jsxref("DataView")}} 相对于起始位置偏移 n 个字节处开始，获取一个 16-bit 数 (短整型，2 个字节)。

{{InteractiveExample("JavaScript Demo: DataView.getInt16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Max signed 16-bit integer

console.log(view.getInt16(1));
// Expected output: 32767
```

## 语法

```plain
dataview.getInt16(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，从头开始计算。
- littleEndian
  - : {{optional_inline}} 表示该 16 位整数是否以 {{Glossary("Endianness", "little- or big-endian")}} 格式存储的（就是使用的字节序格式，具体参考链接页面）；如果传入的值为 `true`，就表示使用 little-endian（低字节序），如果传入的值为 `false` 或者 `undefined`，则会使用 big-endian（高字节序）方式读值。

### 返回

一个短整型 16 位数。

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt16(1); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
