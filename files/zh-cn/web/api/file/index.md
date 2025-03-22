---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 0a24354d9ac0cac0b9c6f47de27cbf758c9f32f4
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`File`** 接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。

`File` 对象通常从用户使用 {{HTMLElement("input")}} 元素选择文件返回的 {{DOMxRef("FileList")}} 对象中检索，或者从拖放操作返回的 {{DOMxRef("DataTransfer")}} 对象中检索。

`File` 对象是一种特定类型的 {{DOMxRef("Blob")}}，并且可以在 Blob 可以使用的任何上下文中使用。特别地，以下 API 都接受 `Blob` 对象和 `File` 对象：

- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}
- {{DOMxRef("Window.createImageBitmap()")}} 和 {{DOMxRef("WorkerGlobalScope.createImageBitmap()")}}
- {{domxref("Window/fetch", "fetch()")}} 方法的 [`body`](/zh-CN/docs/Web/API/RequestInit#body) 选项
- {{DOMxRef("XMLHttpRequest.send()")}}

参见[在 Web 应用程序使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)了解更多信息和例子。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("File.File", "File()")}}
  - : 返回一个新构建的 `File` 对象。

## 实例属性

_`File` 接口还继承了 {{DOMxRef("Blob")}} 接口的属性。_

- {{DOMxRef("File.lastModified")}} {{ReadOnlyInline}}
  - : 返回文件的最后修改时间，以 UNIX 纪元（1970 年 1 月 1 日午夜）以来的毫秒为单位。
- {{DOMxRef("File.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回 `File` 对象引用的文件的最后修改时间的 {{JSxRef("Date")}}。
- {{DOMxRef("File.name")}} {{ReadOnlyInline}}
  - : 返回 `File` 对象引用的文件的名称。
- {{DOMxRef("File.webkitRelativePath")}} {{ReadOnlyInline}}
  - : 返回 `File` 对象相对于 URL 的路径。

## 实例方法

_`File` 接口还继承了 {{DOMxRef("Blob")}} 接口的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 Web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("FileReader")}}
