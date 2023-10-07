---
title: FileReader()
slug: Web/API/FileReader/FileReader
---

使用 **`FileReader()`** 构造器去创建一个新的 FileReader.

更多关于 `FileReader`, 查看[在 Web 应用中使用 files](/zh-CN/docs/Web/API/File/Using_files_from_web_applications)。

## 语法

```js
var reader = new FileReader();
```

### 参数

None.

## 例子

以下代码展示了如何使用 `FileReader()` 构造器创建 [`FileReader`](/zh-CN/docs/Web/API/FileReader) 对象，和[`FileReader`](/zh-CN/docs/Web/API/FileReader)对象的用法。

```js
function printFile(file) {
  var reader = new FileReader();
  reader.onload = function (evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## 规范

{{Specifications}}

## 相关链接

- [Using files from web applications](/zh-CN/docs/Web/API/File/Using_files_from_web_applications)
