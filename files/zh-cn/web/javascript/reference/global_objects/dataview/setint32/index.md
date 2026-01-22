---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
---

**`setInt32()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 32-bit 数 (长整型)。

{{InteractiveExample("JavaScript Demo: DataView.setInt32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## 语法

```plain
dataview.setInt32(byteOffset, value [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节。
- value
  - : 设置的数值。
- littleEndian
  - : {{optional_inline}} Indicates whether the 32-bit int is stored in {{Glossary("Endianness", "little- or big-endian")}} format. If false or undefined, a big-endian value is written.

### 返回

{{jsxref("undefined")}}.

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt32(1, 3);
dataview.getInt32(1); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
