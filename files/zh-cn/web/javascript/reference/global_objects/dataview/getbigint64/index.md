---
title: getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
---

**`getBigInt64()`** 方法从 {{jsxref("DataView")}} 开始获取一个指定偏移量的有符号 64 位整数 (long long) 。

{{InteractiveExample("JavaScript Demo: DataView.getBigInt64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in a signed 64-bit integer
const max = 2n ** (64n - 1n) - 1n;

const view = new DataView(buffer);
view.setBigInt64(1, max);

console.log(view.getBigInt64(1));
// Expected output: 9223372036854775807n
```

## 语法

```plain
dataview.getBigInt64(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，以字节为单位。指明视图开始读取数据的偏移量。
- littleEndian
  - : {{optional_inline}} 指明该 64 位整型数值的存储方式（ {{Glossary("Endianness", "大小端模式")}}）。如果为 `false` 或 `undefined`, 则按大端方式读取数据。

### 返回值

一个 {{jsxref("BigInt")}}.

### 异常抛出

- {{jsxref("RangeError")}}
  - : 如果 `byteOffset` 设置的偏移量超出了视图的范围，则抛出该异常。

## 简介

- 没有对齐约束;
- 可以从任何偏移量获取多字节值。

## 示例

### 使用 `getBigInt64` 方法

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getBigInt64(0); // 0n
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
