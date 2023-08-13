---
title: 文件 API
slug: Web/API/File_API
---

{{DefaultAPISidebar("File API")}}

## 概念和基本使用

文件 API 使得 web 应用可以访问文件和其中的内容。

当用户提供文件时，Web 应用可以通过使用[文件 `<input>` 元素](/zh-CN/docs/Web/HTML/Element/input/file)或[拖放](/zh-CN/docs/Web/API/DataTransfer/files)来访问它们。

以这种方式提供的文件集被表示为 {{domxref("FileList")}} 对象，这使得 web 应用能够检索单个 {{domxref("File")}} 对象。反过来，{{domxref("File")}} 对象提供对元数据的访问，如文件的名称、大小、类型和最后修改日期。

可以将 {{domxref("File")}} 对象传递给 {{domxref("FileReader")}} 对象以访问文件的内容。{{domxref("FileReader")}} 接口是异步的，{{domxref("FileReaderSync")}} 接口提供了同步版本，但仅在 [web worker](/zh-CN/docs/Web/API/Web_Workers_API) 中可用。

## 接口

- {{domxref("Blob")}}
  - : Blob 代表“二进制大对象”（类似于文件的不可变的原始数据对象）；{{domxref("Blob")}} 可以作为文本或二进制数据被读取，或者转换为 {{domxref("ReadableStream")}}，其方法可以用来处理数据。
- {{domxref("File")}}
  - : 提供文件的信息并允许网页中的 JavaScript 代码访问其中的内容。
- {{domxref("FileList")}}
  - : 由 HTML {{HTMLElement("input")}} 元素的 `files` 属性返回；这让你可以访问用 `<input type="file">` 元素选择的文件列表。当使用拖放 API 时，它也被用于放入网页内容的文件列表；关于这种用法的细节，请参见 {{domxref("DataTransfer")}} 对象。
- {{domxref("FileReader")}}
  - : 使 web 应用能够异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象来指定要读取的文件或数据。
- {{domxref("FileReaderSync")}}
  - : 使 web 应用能够同步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象来指定要读取的文件或数据。

### 对其他接口的扩展

- {{domxref("URL.createObjectURL()")}}
  - : 创建一个可用于获取 {{domxref("File")}} 或 {{domxref("Blob")}} 对象的 URL。
- {{domxref("URL.revokeObjectURL()")}}
  - : 释放先前通过调用 {{domxref("URL.createObjectURL()")}} 创建的现有对象 URL。

## 示例

### 读取文件

在这个例子中，我们提供了一个[文件 `<input>` 元素](/zh-CN/docs/Web/HTML/Element/input/file)，当用户选择一个文件时，我们把选择的第一个文件的内容作为文本读取，并把结果显示在 {{HTMLElement("div")}} 元素中。

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      output.innerText = reader.result;
    });
    reader.readAsText(file);
  }
});
```

### 运行结果

{{EmbedLiveSample("读取文件", "", "300")}}

## 规范

{{Specifications}}

## 参见

- [`<input type="file">`](/zh-CN/docs/Web/HTML/Element/input/file)：文件 input 元素
- {{domxref("DataTransfer")}} 接口
