---
title: Blob：arrayBuffer() 方法
slug: Web/API/Blob/arrayBuffer
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`arrayBuffer()`** 方法返回一个 {{jsxref("Promise")}}，其会兑现一个包含 blob 二进制数据内容的 {{jsxref("ArrayBuffer")}}。

## 语法

```js-nolint
arrayBuffer()
```

### 参数

无。

### 返回值

一个 promise，会兑现为一个包含 blob 数据（以二进制形式）的 {{jsxref("ArrayBuffer")}}。

### 异常

该方法不会抛出异常，但可能会拒绝返回的 promise。例如，如果用于获取 blob 数据的 reader 抛出异常，就会发生这种情况。在获取数据时抛出的任何异常都会导致 promise 被拒绝。

## 使用说明

{{domxref("FileReader.readAsArrayBuffer()")}} 方法与之类似，但 `arrayBuffer()` 返回一个 promise 对象，而不是像 `FileReader` 接口的方法一样是一个基于事件的 API。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.arrayBuffer()")}}
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
