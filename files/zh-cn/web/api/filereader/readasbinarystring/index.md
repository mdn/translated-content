---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
---

{{APIRef("File API")}} {{non-standard_header}}

`readAsBinaryString` 方法会读取指定的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象，当读取完成的时候，{{domxref("FileReader.readyState","readyState")}} 会变成`DONE`（已完成），并触发 [`loadend`](/zh-CN/docs/Web/API/XMLHttpRequest/loadend_event) 事件，同时 {{domxref("FileReader.result","result")}} 属性将包含所读取文件原始二进制格式。

注意：从 2012 年 7 月 12 日起，该方法已从 W3C 工作草案废除。

## 语法

```plain
instanceOfFileReader.readAsBinaryString(blob);
```

### 参数

- `blob`
  - : 即将被读取的 {{domxref("Blob")}} 或者 {{domxref("File")}} 对象。

## 示例

```js
var canvas = document.createElement("canvas");
var height = 200;
var width = 200;

canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob(function (blob) {
  var reader = new FileReader();

  reader.onloadend = function () {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## 规范

该方法已从 FileAPI 标准移除，请使用 {{domxref("FileReader.readAsArrayBuffer()")}} 代替。

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("FileReader")}}
