---
title: FileReader：readAsText() 方法
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`readAsText()`** 方法用于读取指定的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象的内容。当读操作完成时，{{domxref("FileReader.readyState","readyState")}} 属性更改为 `DONE`，并触发 {{domxref("FileReader/loadend_event", "loadend")}} 事件，并且 {{domxref("FileReader.result","result")}} 属性包含表示文件内容的文本字符串。

> **备注：** {{domxref("Blob.text()")}} 方法是一种较新的基于 Promise 的 API，用于将文件读取为文本。

> [!NOTE]
> 该方法将整个文件的内容加载到内存中，不适合大文件。对于大文件，首选使用 {{domxref("FileReader.readAsArrayBuffer", "readAsArrayBuffer()")}}。

## 语法

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### 参数

- `blob`
  - : 从中读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。
- `encoding` {{optional_inline}}
  - : 指定用于返回数据的编码的字符串。如果未指定此参数，则默认情况下假定为 UTF-8。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<p class="content"></p>
```

### JavaScript

```js
function previewFile() {
  const content = document.querySelector(".content");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // 然后这将显示一个文本文件
      content.innerText = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsText(file);
  }
}
```

### 结果

{{EmbedLiveSample("示例", "100%", 240)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
