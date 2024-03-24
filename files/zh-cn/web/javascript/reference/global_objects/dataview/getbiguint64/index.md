---
title: DataView.prototype.getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
---

{{JSRef}}

{{jsxref("DataView")}} 的 **`getBigUint64()`** 方法，从 `DataView` 的指定的字节偏移量位置读取 8 个字节，并将其解析为一个无符号 64 位整数（unsigned long long）。

{{EmbedInteractiveExample("pages/js/dataview-getbiguint64.html")}}

## 语法

```js-nolint
getBigUint64(byteOffset)
getBigUint64(byteOffset, littleEndian)
```

### 参数

- byteOffset
  - : 表示从视图的开始位置到要读取数据位置的偏移量，以字节为单位。
- `littleEndian` {{optional_inline}}
  - : 指示 64 位整数是以{{Glossary("Endianness", "小端还是大端")}}格式存储。如果值为 `false` 或 `undefined`，则以大端格式读取。

### 返回值

一个 {{jsxref("BigInt")}}。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `byteOffset` 设置导致读取时超出了视图的末尾位置，则抛出该错误。

## 描述

没有对齐约束，可以从任意偏移量获取多字节值。

## 示例

### 使用 `getBigUint64` 方法

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getBigUint64(0); // 0n
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
