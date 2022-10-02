---
title: File
slug: Web/API/File
---

{{APIRef}}

文件（**`File`**）接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。

通常情况下， `File` 对象是来自用户在一个 {{HTMLElement("input")}} 元素上选择文件后返回的 {{domxref("FileList")}} 对象，也可以是来自由拖放操作生成的 {{domxref("DataTransfer")}} 对象，或者来自 {{domxref("HTMLCanvasElement")}} 上的 `mozGetAsFile`() API。在 Gecko 中，特权代码可以创建代表任何本地文件的 File 对象，而无需用户交互（有关详细信息，请参阅[注意事项](#注意事项)。

`File` 对象是特殊类型的 {{domxref("Blob")}}，且可以用在任意的 Blob 类型的 context 中。比如说， {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, 及 {{domxref("XMLHttpRequest", "", "send()")}} 都能处理 `Blob` 和 `File`。

参考 [从 Web 应用程序使用文件](/zh-CN/docs/Using_files_from_web_applications) 了解更多信息和例子。

## 构造函数

- {{domxref("File.File", "File()")}}
  - : 返回一个新构建的文件对象（`File`）。

## 属性

`File` 接口也继承了 {{domxref("Blob")}} 接口的属性：

- {{domxref("File.lastModified")}} {{readonlyinline}}
  - : 返回当前 `File` 对象所引用文件最后修改时间，自 UNIX 时间起始值（1970 年 1 月 1 日 00:00:00 UTC）以来的毫秒数。
- {{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{deprecated_inline}}
  - : 返回当前 `File` 对象所引用文件最后修改时间的 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象。
- {{domxref("File.name")}} {{readonlyinline}}
  - : 返回当前 `File` 对象所引用文件的名字。
- {{domxref("File.size")}} {{readonlyinline}}
  - : 返回文件的大小。
- {{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}
  - : 返回 {{domxref("File")}} 相关的 path 或 URL。
- {{domxref("File.type")}} {{readonlyinline}}
  - : 返回文件的 [多用途互联网邮件扩展类型（MIME Type）](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## 方法

_`File` 接口没有定义任何方法，但是它从 {{domxref("Blob")}} 接口继承了以下方法：_

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : 返回一个新的 `Blob` 对象，它包含有源 `Blob` 对象中指定范围内的数据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 注意事项

- 在 Gecko 中，你可以从 Chrome 代码中使用这个 API。详细内容参见 [Using the DOM File API in chrome code](/zh-CN/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)。若要从 chrome 代码，JSM 和引导范围中使用它，你必须使用 `Cu.importGlobalProperties(['File']);` 来导入它。
- 从 Gecko 6.0 {{geckoRelease("6.0")}} 开始，在特权代码（比如扩展中的代码）中，可以将一个 `nsIFile` 对象传入 `File` 构造函数，从而生成一个 File 对象。
- 从 Gecko 8.0 {{geckoRelease("8.0")}} 开始，在 XPCOM 组件代码中，你可以直接使用 `new File` 来创建一个 `File` 对象，而不需要像以前那样必须实例化一个 `nsIDOMFile` 对象。`File` 对象和 {{domxref("Blob")}} 相反，使用第二个参数作为文件名。文件名可以是任意的字符串。

  ```plain
  new File( Array parts, String filename, BlobPropertyBag properties);
  ```

- 下列非标准属性及方法在 Gecko 7 {{geckoRelease("7.0")}} 中就被移除了： {{domxref("File.fileName")}}、{{domxref("File.fileSize")}}、{{domxref("File.getAsBinary()")}}、{{domxref("File.getAsDataURL()")}}、{{domxref("File.getAsText()","File.getAsText(string encoding)")}} ({{bug("661876")}})。应当使用 {{domxref("File.name")}}、{{domxref("Blob.size")}}，和 {{domxref("FileReader")}} 的方法来代替。

## 参见

- [如何在 Web 应用程序中使用文件](/zh-CN/docs/Using_files_from_web_applications)
- {{domxref("FileReader")}}
- [在 chrome 代码中使用 DOM File API 读取文件](/zh-CN/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)（适用于被授权在 Gecko 中运行的代码，例如 Firefox 拓展的代码）
