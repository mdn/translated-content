---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileReader`** 接口允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象指定要读取的文件或数据。

文件对象可以从用户使用 {{HTMLElement("input")}} 元素选择文件而返回的 {{domxref("FileList")}} 对象中获取，或者从拖放操作的 {{ domxref("DataTransfer")}} 对象中获取。

`FileReader` 只能访问用户明确选择的文件内容，无论是使用 HTML `<input type="file">` 元素还是通过拖放。它不能用于从用户的文件系统中按路径名读取文件。要按路径名读取客户端文件系统上的文件，请使用[文件系统访问 API](/zh-CN/docs/Web/API/File_System_API)。要读取服务器端文件，请使用 {{domxref("Window/fetch", "fetch()")}}，如果跨源读取，则需要 [CORS](/zh-CN/docs/Web/HTTP/CORS) 权限。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : 返回一个新的 `FileReader` 对象。

有关详细信息和示例，请参阅[在 Web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)。

## 实例属性

- {{domxref("FileReader.error")}} {{ReadOnlyInline}}
  - : 一个表示在读取文件时发生的错误的 {{domxref("DOMException")}}。
- {{domxref("FileReader.readyState")}} {{ReadOnlyInline}}

  - : 表示`FileReader`状态的数字。取值如下：

    | 常量名    | 值  | 描述                   |
    | --------- | --- | ---------------------- |
    | `EMPTY`   | `0` | 还没有加载任何数据。   |
    | `LOADING` | `1` | 数据正在被加载。       |
    | `DONE`    | `2` | 已完成全部的读取请求。 |

- {{domxref("FileReader.result")}} {{ReadOnlyInline}}
  - : 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

## 实例方法

- {{domxref("FileReader.abort()")}}
  - : 中止读取操作。在返回时，`readyState` 属性为 `DONE`。
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : 开始读取指定的 {{domxref("Blob")}} 中的内容，一旦完成，`result` 属性中将包含一个表示文件数据的 {{jsxref("ArrayBuffer")}} 对象。
- {{domxref("FileReader.readAsBinaryString()")}} {{deprecated_inline}}
  - : 开始读取指定的 {{domxref("Blob")}} 中的内容。一旦完成，`result` 属性中将包含一个表示文件中的原始二进制数据的字符串。
- {{domxref("FileReader.readAsDataURL()")}}
  - : 开始读取指定的 {{domxref("Blob")}} 中的内容。一旦完成，`result` 属性中将包含一个表示文件数据的 `data:` URL。
- {{domxref("FileReader.readAsText()")}}
  - : 开始读取指定的 {{domxref("Blob")}} 中的内容。一旦完成，`result` 属性中将包含一个表示所读取的文件内容的字符串。可以指定可选的编码名称。

## 事件

使用 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 方法或通过将事件侦听器分配给此接口的 `oneventname` 属性来侦听这些事件。一旦不再使用 `FileReader`，请使用 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} 删除事件侦听器，以避免内存泄漏。

- {{domxref("FileReader/abort_event", "abort")}}
  - : 当读取被中止时触发，例如因为程序调用了 {{domxref("FileReader.abort()")}} 方法。
- {{domxref("FileReader/error_event", "error")}}
  - : 当读取由于错误而失败时触发。
- {{domxref("FileReader/load_event", "load")}}
  - : 读取成功完成时触发。
- {{domxref("FileReader/loadend_event", "loadend")}}
  - : 读取完成时触发，无论成功与否。
- {{domxref("FileReader/loadstart_event", "loadstart")}}
  - : 读取开始时触发。
- {{domxref("FileReader/progress_event", "progress")}}
  - : 读取数据时定期触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 Web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}
