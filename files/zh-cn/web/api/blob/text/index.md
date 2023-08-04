---
title: Blob.text()
slug: Web/API/Blob/text
---

{{APIRef("File API")}}

**`text()`** 方法返回一个 {{jsxref("Promise")}} 对象，包含 blob 中的内容，使用 UTF-8 格式编码。

## 语法

```js
var textPromise = blob.text();

blob.text().then(text => /* 执行的操作…… */);

var text = await blob.text();
```

### 参数

无须提供任何参数。

### 返回值

返回一个 promise 对象，以 resolve 状态返回一个以文本形式包含 blob 中数据的 {{domxref("USVString")}}。并且该数据**总是**被识别为 UTF-8 格式。

## 使用须知

{{domxref("FileReader")}} 的 {{domxref("FileReader.readAsText", "readAsText()")}} 方法是一个与之类似的方法，它对 `Blob` 和 {{domxref("File")}} 对象都适用。下面是两个主要的不同之处：

- `Blob.text()` 返回的是一个 promise 对象，而 `FileReader.readAsText()` 是一个基于事件的 API。
- `Blob.text()` 总是使用 UTF-8 进行编码，而 `FileReader.readAsText()` 可以使用不同编码方式，取决于 blob 的类型和一个指定的编码名称。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("Body.text()")}}
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsText()")}}
