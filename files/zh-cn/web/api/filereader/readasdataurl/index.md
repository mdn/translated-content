---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

{{APIRef("File API")}}

`readAsDataURL` 方法会读取指定的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。读取操作完成的时候，{{domxref("FileReader.readyState","readyState")}} 会变成已完成`DONE`，并触发 {{event("loadend")}} 事件，同时 {{domxref("FileReader.result","result")}} 属性将包含一个`data:`URL 格式的字符串（base64 编码）以表示所读取文件的内容。

## 语法

```
instanceOfFileReader.readAsDataURL(blob);
```

### 参数

- `blob`
  - : 即将被读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。

## 示例

### HTML

```html
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Image preview...">
```

### JavaScript

```js
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### 演示

{{EmbedLiveSample("示例", "100%", 240)}}

## 读取多个文件的例子

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // 确保 `file.name` 符合我们要求的扩展名
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}
```

> **备注：** Internet Explorer 10 之前的版本并不支持 [`FileReader()`](/zh-CN/docs/Web/API/FileReader) 。关于图片文件预览的兼容性解决方案，可以查看 [crossbrowser possible solution for image preview](https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html) 或者 [this more powerful example](https://mdn.mozillademos.org/files/3698/image_upload_preview.html) 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL()")}}

{{APIRef("File API")}}
