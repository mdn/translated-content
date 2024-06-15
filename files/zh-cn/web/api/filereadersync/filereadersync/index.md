---
title: FileReaderSync：FileReaderSync() 构造函数
slug: Web/API/FileReaderSync/FileReaderSync
l10n:
  sourceCommit: 1dad49fff047729e8dcca313a45ccb4cc2d2526f
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

> **备注：** 此代码段必须在 {{domxref("Worker")}} 内部使用，因为同步接口不能在主线程上使用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
