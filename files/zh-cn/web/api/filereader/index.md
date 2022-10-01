---
title: FileReader
slug: Web/API/FileReader
---

{{APIRef("File API")}}

**`FileReader`** 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象指定要读取的文件或数据。

其中 File 对象可以是来自用户在一个{{ HTMLElement("input") }}元素上选择文件后返回的{{ domxref("FileList") }}对象，也可以来自拖放操作生成的 [`DataTransfer`](/zh-CN/docs/Web/API/DataTransfer)对象，还可以是来自在一个{{ domxref("HTMLCanvasElement") }}上执行`mozGetAsFile()`方法后返回结果。

重要提示：FileReader 仅用于以安全的方式从用户（远程）系统读取文件内容 它不能用于从文件系统中按路径名简单地读取文件。要在 JavaScript 中按路径名读取文件，应使用标准 Ajax 解决方案进行服务器端文件读取，如果读取跨域，则使用 CORS 权限。

{{AvailableInWorkers}}

## 构造函数

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : 返回一个新构造的`FileReader`。

有关详细信息和示例，请参阅[如何在 web 应用程序中使用文件](/zh-CN/Using_files_from_web_applications)。

## 属性

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : 一个{{domxref("DOMException")}}，表示在读取文件时发生的错误。
- {{domxref("FileReader.readyState")}} {{readonlyinline}}

  - : 表示`FileReader`状态的数字。取值如下：

    | 常量名    | 值  | 描述                   |
    | --------- | --- | ---------------------- |
    | `EMPTY`   | `0` | 还没有加载任何数据。   |
    | `LOADING` | `1` | 数据正在被加载。       |
    | `DONE`    | `2` | 已完成全部的读取请求。 |

- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

### 事件处理

- {{domxref("FileReader.onabort")}}
  - : 处理{{event("abort")}}事件。该事件在读取操作被中断时触发。
- {{domxref("FileReader.onerror")}}
  - : 处理{{event("error")}}事件。该事件在读取操作发生错误时触发。
- {{domxref("FileReader.onload")}}
  - : 处理{{event("load")}}事件。该事件在读取操作完成时触发。
- {{domxref("FileReader.onloadstart")}}
  - : 处理{{event("loadstart")}}事件。该事件在读取操作开始时触发。
- {{domxref("FileReader.onloadend")}}
  - : 处理{{event("loadend")}}事件。该事件在读取操作结束时（要么成功，要么失败）触发。
- {{domxref("FileReader.onprogress")}}
  - : 处理{{event("progress")}}事件。该事件在读取{{domxref("Blob")}}时触发。

> **备注：** 因为 `FileReader` 继承自{{domxref("EventTarget")}}，所以所有这些事件也可以通过{{domxref("EventTarget.addEventListener()","addEventListener")}}方法使用。

## 方法

- {{domxref("FileReader.abort()")}}
  - : 中止读取操作。在返回时，`readyState`属性为`DONE`。
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : 开始读取指定的 {{domxref("Blob")}}中的内容，一旦完成，result 属性中保存的将是被读取文件的 {{domxref("ArrayBuffer")}} 数据对象。
- {{domxref("FileReader.readAsBinaryString()")}} {{non-standard_inline}}
  - : 开始读取指定的{{ domxref("Blob") }}中的内容。一旦完成，`result`属性中将包含所读取文件的原始二进制数据。
- {{domxref("FileReader.readAsDataURL()")}}
  - : 开始读取指定的{{ domxref("Blob") }}中的内容。一旦完成，`result`属性中将包含一个`data:` URL 格式的 Base64 字符串以表示所读取文件的内容。
- {{domxref("FileReader.readAsText()")}}
  - : 开始读取指定的{{ domxref("Blob") }}中的内容。一旦完成，`result`属性中将包含一个字符串以表示所读取的文件内容。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- [如何在 web 应用程序中使用文件](/zh-CN/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
