---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
---

{{APIRef("File API")}}

{{domxref("FileReader")}} 接口提供的 **`readAsArrayBuffer()`** 方法用于启动读取指定的 {{domxref("Blob")}} 或 {{domxref("File")}} 内容。当读取操作完成时，{{domxref("FileReader.readyState","readyState")}} 变成 `DONE`（已完成），并触发 {{event("loadend")}} 事件，同时 {{domxref("FileReader.result","result")}} 属性中将包含一个 {{domxref("ArrayBuffer")}} 对象以表示所读取文件的数据。

## 语法

```plain
instanceOfFileReader.readAsArrayBuffer(blob);
```

### 参数

- `blob`
  - : 即将被读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("FileReader")}}
