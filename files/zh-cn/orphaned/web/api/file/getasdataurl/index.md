---
title: File.getAsDataURL()
slug: orphaned/Web/API/File/getAsDataURL
original_slug: Web/API/File/getAsDataURL
---
{{APIRef("File API") }}

{{non-standard_header}}

{{deprecated_header(7.0)}}

## 概述

`getAsDataURL` 函数返回一个形如 [`data:`](/zh-CN/docs/data_URIs) 的 URL，这个 URL 包含了所涉及到的内容的编码形式。

> **备注：** 这个方法已经废弃，你应该使用 {{domxref("FileReader")}} 对象中的{{domxref("FileReader.readAsDataURL","readAsDataURL()")}} 方法作为替代。

## 语法

```js
var url = instanceOfFile.getAsDataURL();
```

### 返回值

一个形如 [`data:`](/zh-CN/docs/data_URIs) 的 URL 字符串

## 范例

```js
// fileInput 是一个 HTMLInputElement 元素：<input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files 是一个 FileList 对象 (类似 NodeList 对象)
var files = fileInput.files;

// 允许的文件格式数组
var accept = ["image/png"];

// img 是一个 HTMLImgElement 元素：<img id="myimg">
var img = document.getElementById("myimg");

// 假设我们接收第一个所选中的文件类型
if (accept.indexOf(files[0].mediaType) > -1) {
  // 显示图片
  // 和 <img src="data:image/png,<imagedata>"> 效果一样
  img.src = files[0].getAsDataURL();
}
```

## 详细说明

没有其他说明

## 参考文章

- {{domxref("File")}}
- {{domxref("FileReader")}}
