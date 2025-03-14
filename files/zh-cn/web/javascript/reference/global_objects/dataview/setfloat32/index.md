---
title: DataView.prototype.setFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat32
---

{{JSRef}}

**`setFloat32()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 32-bit 数 (浮点型)。

{{InteractiveExample("JavaScript Demo: DataView.setFloat32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat32(1, Math.PI);

console.log(view.getFloat32(1));
// Expected output: 3.1415927410125732
```

## 语法

```plain
dataview.setFloat32(byteOffset, value [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节。
- value
  - : 设置的数值。
- littleEndian
  - : {{optional_inline}} Indicates whether the 32-bit float is stored in {{Glossary("Endianness", "little- or big-endian")}} format. If false or undefined, a big-endian value is written.

### 返回

{{jsxref("undefined")}}.

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat32(1, 3);
dataview.getFloat32(1); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
