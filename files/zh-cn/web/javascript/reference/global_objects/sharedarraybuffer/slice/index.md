---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: a37335abeaad31f9fafc56cfaa641db2337777a3
---

{{jsxref("SharedArrayBuffer")}} 实例的 **`slice()`** 方法返回一个新的 `SharedArrayBuffer`，其包含当前 `SharedArrayBuffer` 从 `start` 开始（包含）到 `end` 结束（不含）的字节内容的副本。如果 `start` 或 `end` 为负数，则表示从数组末尾开始计数的索引，即与从开头开始的方向相反。

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.slice()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer); // Create the view
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));

console.log(sliced);
// Expected output: Int32Array [42, 0]
```

## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 参数

- `start` {{optional_inline}}
  - : 要开始提取的位置索引（从 0 开始），将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负数索引将会从缓冲区末尾开始计算——如果 `start < 0`，那么将会使用 `start + buffer.length`。
    - 如果 `start < -buffer.length` 或省略了 `start`，则会使用 `0`。
    - 如果 `start >= buffer.length`，则不会提取任何内容。
- `end` {{optional_inline}}
  - : 要结束提取的位置索引（从 0 开始），将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。`slice()` 提取到但不包括 `end`。
    - 负数索引将会从缓冲区末尾开始计算——如果 `end < 0`，那么将会使用 `end + buffer.length`。
    - 如果 `end < -buffer.length`，则会使用 `0`。
    - 如果 `end >= buffer.length` 或省略了 `end`，则会使用 `buffer.length`，则会导致直到末尾的所有元素都被提取。
    - 如果标准化后的 `end` 位置在 `start` 位置之前，则不会提取任何内容。

### 返回值

一个新的 {{jsxref("SharedArrayBuffer")}}，包含提取的元素。

## 示例

### 使用 slice()

```js
const sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.slice()")}}
