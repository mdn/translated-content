---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---

{{JSRef}}

**`slice()`**方法返回一个新的 `ArrayBuffer` ，它的内容是这个 `ArrayBuffer` 的字节副本，从 begin（包括），到 end（不包括）。

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## 语法

```plain
arraybuffer.slice(begin[, end])
```

### 参数

- `begin`
  - : 从零开始的字节索引，切片从这开始。
- `end`
  - : 结束切片的字节索引。如果没指定 end，新的 `ArrayBuffer` 将包含这个 `ArrayBuffer` 从头到尾的所有字节。由 begin 和 end 指定的这个范围夹在当前数组的有效索引范围内。如果新`ArrayBuffer`的长度在计算后为负，它将强制为 0。

### 返回值

一个新的 `ArrayBuffer` 对象。

## 描述

`slice` 方法复制到但不包括由 end 参数指示的字节。如果 begin 或 end 是负数，则指的是从数组末尾开始的索引，而不是从头开始。

## 示例

### 复制一个 `ArrayBuffer`

```js
var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("ArrayBuffer")}}
