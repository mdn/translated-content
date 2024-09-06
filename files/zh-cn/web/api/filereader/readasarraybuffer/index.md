---
title: FileReader：readAsArrayBuffer() 方法
slug: Web/API/FileReader/readAsArrayBuffer
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`readAsArrayBuffer()`** 方法用于开始读取指定 {{domxref("Blob")}} 或 {{domxref("File")}} 的内容。当读取操作完成时，{{domxref("FileReader.readyState","readyState")}} 属性变为 `DONE`，并触发 {{domxref("FileReader/loadend_event", "loadend")}} 事件。此时，{{domxref("FileReader.result","result")}} 属性包含一个表示文件数据的 {{jsxref("ArrayBuffer")}}。

> **备注：** {{domxref("Blob.arrayBuffer()")}} 方法是一种较新的基于 Promise 的 API，用于将文件读取为数组缓冲区。

## 语法

```js-nolint
readAsArrayBuffer(blob)
```

### 参数

- `blob`
  - : 从中读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
