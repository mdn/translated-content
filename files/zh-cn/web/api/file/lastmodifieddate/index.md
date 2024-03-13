---
title: File.lastModifiedDate
slug: Web/API/File/lastModifiedDate
---

{{APIRef("File API")}}

## 概述

返回当前文件的最后修改日期，如果无法获取到文件的最后修改日期，则使用当前日期来替代。

## 示例

```js
// fileInput 是一个 HTMLInputElement 元素：<input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files 是一个 FileList 对象 (类似于 NodeList 对象)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  alert(
    files[i].name + " has a last modified date of " + files[i].lastModifiedDate,
  );
}
```
