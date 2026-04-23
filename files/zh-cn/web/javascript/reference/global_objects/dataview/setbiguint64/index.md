---
title: DataView.prototype.setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
---

**`setBigUint64()`** 方法在距 DataView 的起始位置的指定字节偏移处存储一个无符号的 64 位整数（unsigned long long 类型）值。

{{InteractiveExample("JavaScript Demo: DataView.setBigUint64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in an unsigned 64-bit integer
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// Expected output: 18446744073709551615n
```

## 语法

```plain
dataview.setBigUint64(byteOffset, value [, littleEndian])
```

### 参数说明

- byteOffset
  - : 字节偏移量，为从视图的起始位置到数据存储位置的字节字节偏移量。
- value
  - : 作为一个 BigInt 类型设置的数值。满足一个无符号的 64 位整数的最大可能数值是 `2n ** 64n - 1n` (`18446744073709551615n`)。当发生溢出时，将会变成 0。
- littleEndian
  - : 为可选参数，表示这个 64 位整数是否以 little-endian 或者 big-endian 格式存储。如果设置为 false 或者未指定（undefined），将会写入一个 big-endian（大端模式：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端）格式的数值。

### 返回值

{{jsxref("undefined")}}.

### 抛出的错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 设置导致存储该数值时超出了视图的末尾位置，将会抛出错误。

## 示例

### 使用 `setBigUint64` 方法

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(0); // 3n
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
