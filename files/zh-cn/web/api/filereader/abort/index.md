---
title: FileReader.abort()
slug: Web/API/FileReader/abort
---

{{APIRef("File API")}}

该方法可以取消 FileReader 的读取操作，触发之后 {{domxref("FileReader.readyState","readyState")}} 为已完成（DONE）。

## 语法

```plain
instanceOfFileReader.abort();
```

### 例外情况

- `DOM_FILE_ABORT_ERR`
  - : 对一个没有正在进行读取操作（{{domxref("FileReader.readyState","readyState")}} 不是 `LOADING`）的 `FileReader` 进行 `abort` 操作，会抛出 `DOM_FILE_ABORT_ERR` 错误。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("FileReader")}}
