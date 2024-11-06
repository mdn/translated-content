---
title: Blob：text() 方法
slug: Web/API/Blob/text
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`text()`** 方法返回一个 {{jsxref("Promise")}}，其会兑现一个包含 blob 内容的 UTF-8 格式的字符串。

## 语法

```js-nolint
text()
```

### 参数

无。

### 返回值

一个 promise，其会兑现一个包含作为文字字符串的 blob 数据的字符串。数据*总是*被假定为 UTF-8 格式。

## 使用说明

{{domxref("FileReader")}} 的 {{domxref("FileReader.readAsText", "readAsText()")}} 方法是一个与之类似的更老的方法，它对 `Blob` 和 {{domxref("File")}} 对象都适用。下面是两个主要的不同之处：

- `Blob.text()` 返回一个 promise 对象，而 `FileReader.readAsText()` 是一个基于事件的 API。
- `Blob.text()` 总是使用 UTF-8 进行编码，而 `FileReader.readAsText()` 可以使用不同编码方式，取决于 blob 的类型和一个指定的编码名称。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.text()")}}
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsText()")}}
