---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
---

{{APIRef("File System API")}}{{Non-standard_header}}

[文件系统 API](/zh-CN/DOM/File_API/File_System_API) 的 **`FileSystemFileEntry`** 接口表示文件系统中的文件。它提供了属性，描述文件的属性，以及 {{domxref("FileSystemFileEntry.file", "file()")}} 方法，它创建了可以用于读取文件的 {{domxref("File")}} 对象。

> **备注：** 由于这是个非标准 API，它的规范当前并不在标准化过程中。重要的是要记住，并不是所有浏览器都实现了它，并且实现它的浏览器可能仅仅实现一小部分。点击 [Browser compatibility](#browser_compatibility) 来查看更多细节。

## 属性

从它的父接口 {{domxref("FileSystemEntry")}} 继承属性，但是这个接口没有独特的属性。

## 方法

- {{domxref("FileSystemFileEntry.file", "file()")}}
  - : 创建新的 {{domxref("File")}} 对象，它可以用于读取文件。

### 废弃的方法

- {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} {{Deprecated_Inline}}
  - : 创建新的 {{domxref("FileWriter")}} 对象，它允许写入由文件系统条目表示的对象。

## 基本概念

为了向文件写入内容，通过调用 {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} 创建 {{domxref("FileWriter")}} 对象。为了读取文件，通过调用 {{domxref("FileSystemFileEntry.file", "file()")}}，获取表示其内容的 {{domxref("File")}} 对象。

### 示例

下面的代码创建了一个空文件，叫做 `log.txt`（如果不存在的话），并使用文本 "Meow" 来填充。在成功的回调中，设置了事件处理器，来处理 [`error`](/zh-CN/docs/Web/API/Element/error_event) `error` 和 `writeend` 事件。通过创建 blob，向其追加文本，以及将 blob 传递给 {{domxref("FileWriter.write()")}}，文本数据写入了文件。

```js
function onInitFs(fs) {
  fs.root.getFile(
    "log.txt",
    { create: true },
    function (fileEntry) {
      // Create a FileWriter object for our FileSystemFileEntry (log.txt).
      fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function (e) {
          console.log("Write completed.");
        };

        fileWriter.onerror = function (e) {
          console.log("Write failed: " + e.toString());
        };

        // Create a new Blob and write it to log.txt.
        var bb = new BlobBuilder();
        bb.append("Meow");

        fileWriter.write(bb.getBlob("text/plain"));
      }, errorHandler);
    },
    errorHandler,
  );
}

window.requestFileSystem(window.TEMPORARY, 1024 * 1024, onInitFs, errorHandler);
```

## 规范

{{Specifications}}

这个 API 没有官方的 W3C 或者 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件和驱动器条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件系统 API 简介](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
