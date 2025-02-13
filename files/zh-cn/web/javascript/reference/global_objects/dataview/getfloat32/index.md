---
title: DataView.prototype.getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
---

{{JSRef}}

**`getFloat32()`**方法从相对于{{jsxref("DataView")}} 的起始位置偏移 n 个字节处获取一个 32-bit 浮点数 (单精度浮点数，4 个字节).

{{InteractiveExample("JavaScript Demo: DataView.getFloat32()")}}

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
dataview.getFloat32(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，为从视图的开始位置到读取数值的位置的偏移。
- littleEndian
  - : {{optional_inline}} 表示这个 32 位浮点数是否以 {{Glossary("Endianness", "little- or big-endian")}} 格式存储，如果设置为 false 或者不指定，将用 big-endian 格式读取数值。

### 返回

一个带符号的 32 位浮点数。

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 设置导致读数值时超出了视图的末尾就会抛出错误。

## 说明

没有对齐约束; 多字节值可以从任何偏移处获取。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getFloat32(1); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
