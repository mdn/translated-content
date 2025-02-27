---
title: FileReaderSync：readAsBinaryString() 方法
slug: Web/API/FileReaderSync/readAsBinaryString
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{deprecated_header}} {{AvailableInWorkers("worker_except_service")}}

> [!NOTE]
> 此方法已弃用，取而代之的是 {{DOMxRef("FileReaderSync.readAsArrayBuffer","readAsArrayBuffer()")}}。

{{DOMxRef("FileReaderSync")}} 接口的 **`readAsBinaryString()`** 方法允许以同步方式读取 {{DOMxRef("File")}} 或 {{DOMxRef("Blob")}} 对象并将其转换为字符串。此接口仅在 [worker](/zh-CN/docs/Web/API/Worker) 中[可用](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)，因为它支持同步 I/O，可能导致潜在的阻塞。

## 语法

```js-nolint
readAsBinaryString(blob)
```

### 参数

- `blob`
  - : 要读取的 {{DOMxRef("File")}} 或 {{DOMxRef("Blob")}} 对象。

### 返回值

表示输入数据的字符串。

### 异常

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
