---
title: Blob.slice
slug: Web/API/Blob/slice
---

{{APIRef("File API")}}

**`Blob.slice()`** 方法用于创建一个包含源 {{domxref("Blob")}}的指定字节范围内的数据的新 {{domxref("Blob")}} 对象。

> **备注：** 在某些浏览器和版本上具有供应商前缀：例如：Firefox 12 及更早版本的 blob.mozSlice() 和 Safari 中的 blob.webkitSlice(). slice() 方法的旧版本，没有供应商前缀，具有不同的语义，并且已过时。

## 语法

```
var blob = instanceOfBlob.slice([start [, end [, contentType]]]};
```

### 参数

- `start` {{ optional_inline() }}
  - : 这个参数代表 {{domxref("Blob")}} 里的下标，表示第一个会被会被拷贝进新的 {{domxref("Blob")}} 的字节的起始位置。如果你传入的是一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说，-10 将会是 {{domxref("Blob")}} 的倒数第十个字节。它的默认值是 0，如果你传入的 start 的长度大于源 {{domxref("Blob")}} 的长度，那么返回的将会是一个长度为 0 并且不包含任何数据的一个 {{domxref("Blob")}} 对象。
- `end` {{ optional_inline() }}
  - : 这个参数代表的是 {{domxref("Blob")}} 的一个下标，这个下标 -1 的对应的字节将会是被拷贝进新的{{domxref("Blob")}} 的最后一个字节。如果你传入了一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说， -10 将会是 {{domxref("Blob")}} 的倒数第十个字节。它的默认值就是它的原始长度 (`size`).
- `contentType` {{ optional_inline() }}
  - : 给新的 {{domxref("Blob")}} 赋予一个新的文档类型。这将会把它的 type 属性设为被传入的值。它的默认值是一个空的字符串。

### 返回值

一个新的 {{domxref("Blob")}} 对象，它包含了原始 {{domxref("Blob")}} 对象的某一个段的数据。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参见

- {{domxref("Blob")}}
- {{domxref("BlobBuilder")}}
