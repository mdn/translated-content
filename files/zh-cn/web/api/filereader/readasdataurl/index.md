---
title: FileReader：readAsDataURL() 方法
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`readAsDataURL()`** 方法用于读取指定的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象的内容。当读操作完成时，{{domxref("FileReader.readyState","readyState")}} 属性变为 `DONE`，并触发 {{domxref("FileReader/loadend_event", "loadend")}} 事件。此时，{{domxref("FileReader.result","result")}} 属性包含作为 [data: URL](/zh-CN/docs/Web/URI/Reference/Schemes/data) 的数据，将文件的数据表示为 base64 编码字符串。

> [!NOTE]
> 如果不先删除 Base64 编码数据前面的 Data-URL 声明，则 blob 的 {{domxref("FileReader.result","result")}} 无法直接解码为 Base64。要仅检索 Base64 编码的字符串，请首先从结果中删除 `data:*/*;base64,`。

## 语法

```js-nolint
readAsDataURL(blob)
```

### 参数

- `blob`
  - : 从中读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 读取单个文件

#### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="图片预览" />
```

#### JavaScript

```js
function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // 将图像文件转换为 Base64 字符串
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### 结果

{{EmbedLiveSample("读取单个文件", "100%", 240)}}

### 读取多个文件

#### HTML

```html
<input id="browse" type="file" multiple />
<div id="preview"></div>
```

#### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // 确保 `file.name` 符合我们的文件扩展名标准
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);
```

#### 结果

{{EmbedLiveSample("读取多个文件", "100%", 240)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
