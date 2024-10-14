---
title: FileReaderSync：FileReaderSync() 构造函数
slug: Web/API/FileReaderSync/FileReaderSync
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

**`FileReaderSync()`** 构造函数创建一个新的 {{domxref("FileReaderSync")}} 对象。

## 语法

```js-nolint
new FileReaderSync()
```

### 参数

无。

## 示例

以下代码片段显示了使用 `FileReaderSync()` 构造函数创建 [`FileReaderSync`](/zh-CN/docs/Web/API/FileReaderSync) 对象以及该对象后续的用法：

```js
function readFile(blob) {
  const reader = new FileReaderSync();
  postMessage(reader.readAsDataURL(blob));
}
```

> [!NOTE]
> 此代码段必须在 {{domxref("Worker")}} 内部使用，因为同步接口不能在主线程上使用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
