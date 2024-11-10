---
title: FileReader：FileReader() 构造函数
slug: Web/API/FileReader/FileReader
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileReader()`** 构造函数创建一个新的 `FileReader` 对象。

有关如何使用 `FileReader` 的详细信息，查看[在 Web 应用中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)。

## 语法

```js-nolint
new FileReader()
```

### 参数

无。

## 示例

以下代码展示了如何使用 `FileReader()` 构造函数创建 {{domxref("FileReader")}} 对象，和该对象的后续使用。

```js
function printFile(file) {
  const reader = new FileReader();
  reader.onload = (evt) => {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 Web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
