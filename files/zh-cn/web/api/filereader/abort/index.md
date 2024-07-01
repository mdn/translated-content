---
title: FileReader：abort() 方法
slug: Web/API/FileReader/abort
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`abort()`** 方法中止读取操作。返回后，{{domxref("FileReader.readyState","readyState")}} 将为 `DONE`。

## 语法

```js-nolint
abort()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
