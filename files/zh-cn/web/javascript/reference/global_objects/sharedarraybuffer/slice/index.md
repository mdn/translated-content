---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
---

{{JSRef}}

**`SharedArrayBuffer.prototype.slice()`** 方法返回一个新的{{jsxref("SharedArrayBuffer")}} 副本，其内容是`该 SharedArrayBuffer`的字节从`begin`开始 (包含`begin`)，直到`end`结束 (不包含`end`)。如果`begin`或`end`是负的，它指的是从数组末尾开始的索引。此方法与 {{jsxref("Array.prototype.slice()")}} 具有相同的算法。

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

## 语法

```plain
sab.slice()
sab.slice(begin)
sab.slice(begin, end)
```

### 参数

- `begin` {{optional_inline}}
  - : 从零开始的索引，从该索引开始提取。可以使用一个负索引，表示从序列末尾开始的偏移量。 `slice(-2)`提取序列中的最后两个元素。If `begin` is undefined, `slice` begins from index `0`.如果`begin`为 undefined，`slice`则从索引为`0`处开始。
- `end` {{optional_inline}}
  - : 从零开始的索引，在此索引*之前*终止提取。 `slice` 执行提取到索引为 `end` 的位置 (不包含`end`)。例如，`slice(1,4)` 提取第二个元素到第四个元素（索引为 1、2 和 3 的元素）。可以使用一个负索引，表示从序列末尾开始的偏移量。 `slice(2,-1)` 提取序列中从第三个元素开始，到倒数第二个元素结束的全部元素。如果省略 `end`，则 `slice` 一直提取到序列的末尾（`sab.byteLength`）。

### 返回值

一个包含被提取出的元素的新 {{jsxref("SharedArrayBuffer")}} 。

## 示例

```js
var sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Array.prototype.slice()")}}
