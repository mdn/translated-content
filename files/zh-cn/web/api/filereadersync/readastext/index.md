---
title: FileReaderSync：readAsText() 方法
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

{{DOMxRef("FileReaderSync")}} 接口的 **`readAsText()`** 方法允许以同步方式读取 {{DOMxRef("File")}} 或 {{DOMxRef("Blob")}} 对象并将其转换为字符串。此接口仅在 [worker](/zh-CN/docs/Web/API/Worker) 中[可用](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)，因为它支持同步 I/O，可能导致潜在的阻塞。

## 语法

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### 参数

- `blob`
  - : 要读取的 {{DOMxRef("File")}} 或 {{DOMxRef("Blob")}} 对象。
- `encoding` {{optional_inline}}
  - : 此可选参数指定要使用的编码（例如 `iso-8859-1` 或 `UTF-8`）。如果不存在，该方法将对其应用检测算法以确定其编码。

### 返回值

表示输入数据的字符串。

### 异常

此方法可能引发以下异常：

- `NotFoundError` {{domxref("DOMException")}}
  - : 如果无法找到 DOM {{DOMxRef("File")}} 或 {{DOMxRef("Blob")}} 对象表示的资源，例如因为它已被删除，则抛出该异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果检测到以下有问题的情况之一，则抛出该异常：
    - 资源已被第三方修改；
    - 同时执行太多读取；
    - 资源指向的文件对于从 Web 上使用来说是不安全的（比如它是系统文件）。
- `NotReadableError` {{domxref("DOMException")}}
  - : 如果由于权限问题（例如并发锁）而无法读取资源，则抛出该异常。
- `EncodingError` {{domxref("DOMException")}}
  - : 如果资源是 data URL 并且超出每个浏览器定义的限制长度，则抛出该异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件 API](/zh-CN/docs/Web/API/File_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{ domxref("Blob") }}
