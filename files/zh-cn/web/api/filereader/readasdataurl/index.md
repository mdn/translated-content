---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

{{APIRef("File API")}}

`readAsDataURL` 方法会读取指定的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。读取操作完成的时候，{{domxref("FileReader.readyState","readyState")}} 会变成已完成`DONE`，并触发 [`loadend`](/zh-CN/docs/Web/API/XMLHttpRequest/loadend_event) 事件，同时 {{domxref("FileReader.result","result")}} 属性将包含一个`data:`URL 格式的字符串（base64 编码）以表示所读取文件的内容。

## 语法

```js-nolint
readAsDataURL(blob)
```

### 参数

- `blob`
  - : 即将被读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。

## 示例

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="Image preview..." />
```

### JavaScript

```js
function previewFile() {
  var preview = document.querySelector("img");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      preview.src = reader.result;
    },
    false,
  );

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
<input id="browse" type="file" onchange="previewFiles()" multiple />
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {
  var preview = document.querySelector("#preview");
  var files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // 确保 `file.name` 符合我们要求的扩展名
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}
```

> **备注：** Internet Explorer 10 之前的版本并不支持 [`FileReader()`](/zh-CN/docs/Web/API/FileReader)。关于图片文件预览的兼容性解决方案，可以查看[一种可能的跨浏览器图像预览解决方案](https://mdn.dev/archives/media/attachments/2012/07/09/3699/2c8cb1e94f0ee05b22c1c30a3790c70d/crossbrowser_image_preview.html)或者[这个更加完善的示例](https://mdn.dev/archives/media/attachments/2012/07/09/3698/391aef19653595a663cc601c42a67116/image_upload_preview.html)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL()")}}
