---
title: Blob：slice() 方法
slug: Web/API/Blob/slice
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`slice()`** 方法创建并返回一个新的 `Blob` 对象，该对象包含调用它的 blob 的子集中的数据。

## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
slice(start, end, contentType)
```

### 参数

- `start` {{optional_inline}}
  - : 这个参数代表 {{domxref("Blob")}} 里的第一个会被拷贝进新的 {{domxref("Blob")}} 的字节的索引。如果你传入的是一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。例如，-10 将会是 {{domxref("Blob")}} 的倒数第十个字节。它的默认值是 0。如果你传入的 `start` 的长度大于源 {{domxref("Blob")}} 的长度，那么返回的将会是一个长度为 0 并且不包含任何数据的一个 {{domxref("Blob")}} 对象。
- `end` {{optional_inline}}
  - : 这个参数代表 {{domxref("Blob")}} 里的第一个*不会*被拷贝进新的 {{domxref("Blob")}} 的字节的索引（换句话说，这个索引的字节不会被拷贝）。如果你传入了一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说，-10 将会是 {{domxref("Blob")}} 的倒数第十个字节。它的默认值就是它的原始长度 `size`。
- `contentType` {{optional_inline}}
  - : 给新的 {{domxref("Blob")}} 赋予一个新的内容类型。这将会把它的 `type` 属性设为被传入的值。它的默认值是一个空字符串。

### 返回值

一个新的 {{domxref("Blob")}} 对象，它包含了调用该方法的原始 blob 对象所包含数据的指定子集。原始的 blob 不会被改变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
