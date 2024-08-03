---
title: FileReaderSync
slug: Web/API/FileReaderSync
l10n:
  sourceCommit: 1dad49fff047729e8dcca313a45ccb4cc2d2526f
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

**`FileReaderSync`** 接口允许同步读取 {{DOMxRef("File")}} 或 {{DOMxRef("Blob")}} 对象。此接口仅在 [worker](/zh-CN/docs/Web/API/Worker) 中[可用](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)，因为它支持可能导致潜在的阻塞的同步 I/O。

## 构造函数

- {{domxref("FileReaderSync.FileReaderSync", "FileReaderSync()")}}
  - : 返回一个新的 `FileReaderSync` 对象。

## 实例属性

该接口没有任何属性。

## 实例方法

- {{DOMxRef("FileReaderSync.readAsArrayBuffer","FileReaderSync.readAsArrayBuffer()")}}
  - : 此方法将指定的 {{DOMxRef("Blob")}} 或 {{DOMxRef("File")}} 转换为将输入数据表示为二进制字符串的 {{jsxref("ArrayBuffer")}}。
- {{DOMxRef("FileReaderSync.readAsBinaryString","FileReaderSync.readAsBinaryString()")}} {{deprecated_inline}}
  - : 此方法将指定的 {{DOMxRef("Blob")}} 或 {{DOMxRef("File")}} 转换为表示输入数据的二进制字符串。此方法已弃用，请考虑使用 `readAsArrayBuffer()` 代替。
- {{DOMxRef("FileReaderSync.readAsText","FileReaderSync.readAsText()")}}
  - : 此方法将指定的 {{DOMxRef("Blob")}} 或 {{DOMxRef("File")}} 转换为将输入数据表示为文本字符串的字符串。可选的 **`encoding`** 参数指示要使用的编码（例如，iso-8859-1 或 UTF-8）。如果不存在，该方法将对其应用检测算法以确定其编码。
- {{DOMxRef("FileReaderSync.readAsDataURL","FileReaderSync.readAsDataURL()")}}
  - : 此方法将指定的 {{DOMxRef("Blob")}} 或 {{DOMxRef("File")}} 转换为将输入数据表示为 data URL 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("FileReader")}}
- {{DOMxRef("Blob")}}
- {{DOMxRef("File")}}
