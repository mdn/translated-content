---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

[`Blob`](/zh-CN/docs/Web/API/Blob) 对象的 **`type`** 属性给出文件的 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)。如果类型无法确定，则返回空字符串。

### 语法

```plain
var mimetype = instanceOfFile.type
```

### 值

字符串

### 例子

```js
// fileInput 是一个 HTMLInputElement，HTML Input 元素：<input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files 是一个 FileList 对象（与 NodeList 相似，是多个 File 对象的集合）
var files = fileInput.files;

// 仅允许 *.png, *.jpeg *.gif 类型的图片文件
var allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (var i = 0; i < files.length; i++) {
    // 检查文件的文件类型是否属于 allowFileTypes 中的一种
    if (allowedFileTypes.indexOf(files[i].type) > -1) {
        // 对符合条件的文件进行处理
    }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
