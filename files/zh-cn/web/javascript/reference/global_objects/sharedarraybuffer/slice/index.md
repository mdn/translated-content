---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 实例的 **`slice()`** 方法返回一个新的 {{jsxref("SharedArrayBuffer")}}，其包含当前 `SharedArrayBuffer` 从 `begin` 开始（包含）到 `end` 结束（不含）的字节内容的副本。如果 `begin` 或 `end` 为负数，则表示从数组末尾开始计数的索引，而非从数组的开头。该方法与 {{jsxref("Array.prototype.slice()")}} 的算法相同。

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

## 语法

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

### 参数

- `begin` {{optional_inline}}

  - : 要开始提取的位置索引（从 0 开始）。

    可以使用负数索引，表示从序列末尾开始的偏移量。`slice(-2)` 提取序列的最后两个元素。

    如果 `begin` 未定义，`slice` 将从索引 `0` 开始提取。

- `end` {{optional_inline}}

  - : 要结束提取*前*的位置索引（从 0 开始）。`slice` 提取到但不包括 `end`。

    例如，`slice(1,4)` 提取第二个元素到第四个元素(索引为 1、2 和 3 的元素)。

    可以使用负数索引，表示从序列末尾开始的偏移量。`slice(2,-1)` 提取序列的第三个元素到倒数第二个元素。

    如果省略了 `end`，`slice` 提取到序列的末尾（`sab.byteLength`）。

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
- {{jsxref("Array.prototype.slice()")}}
