---
title: DataView.prototype.setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
---

{{JSRef}}

**`setFloat16()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 16-bit 数 (浮点型)。

{{EmbedInteractiveExample("pages/js/dataview-setfloat16.html")}}

## 语法

```plain
dataview.setFloat16(byteOffset, value [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节。
- value
  - : 设置的数值。
- littleEndian
  - : {{optional_inline}} 表示这个 16 位浮点数是否以 {{Glossary("Endianness", "little- or big-endian")}} 格式存储，如果设置为 false 或者不指定，将用 big-endian 格式写入数值。

### 返回

{{jsxref("undefined")}}.

### 抛出错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat16(1, 3);
dataview.getFloat16(1); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
