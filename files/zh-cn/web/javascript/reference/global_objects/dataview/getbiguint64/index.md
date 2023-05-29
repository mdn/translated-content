---
title: DataView.prototype.getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
---

{{JSRef}}

**`getBigUint64()`** 方法，从 {{jsxref("DataView")}} 的指定偏移量位置获取一个无符号 64 位整数 (unsigned long long)。

{{EmbedInteractiveExample("pages/js/dataview-getbiguint64.html")}}

## 语法

```plain
dataview.getBigUint64(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，按**字节**偏移，从 DataView 读取一个整数
- littleEndian
  - : {{optional_inline}} 指出 64 位整数以 {{Glossary("Endianness", "little- or big-endian")}} 类型存储。如果值为 `false` or `undefined`, 读取一个大端数值。

### 返回值

A {{jsxref("BigInt")}}.

### 异常

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the `getBigUint64` method

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getBigUint64(0); // 0n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
