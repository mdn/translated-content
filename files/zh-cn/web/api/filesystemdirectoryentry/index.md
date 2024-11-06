---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
---

{{APIRef("File System API")}}{{Non-standard_header}}

[文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API) 的 **`FileSystemDirectoryEntry`** 接口表示文件系统中的目录。它提供了方法，使其能够访问和操作目录中的文件，以及访问目录中的条目。

> [!NOTE]
> 由于这是个非标准的 API，它的规范当前并没有在标准进程中，重要的是要记住，并不是所有浏览器都实现了他，并且实现它的浏览器可能仅仅实现了一小部分。更多细节请查看 [Browser compatibility](#browser_compatibility) 。

## 基本概念

你可以通过调用 {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}} 创建新的目录。如果你打算创建子目录，按需创建每个子目录。如果你尝试使用完整路径创建目录，包含不存在的父目录，会返回错误。所以需要在创建父目录之后，递归添加新的路径来创建层次。

### 示例

下面的代码中，我们创建了一个叫做 "Documents" 的目录。

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

...

function onFs(fs){
  fs.root.getDirectory('Documents', {create:true}, function(directoryEntry){
    //directoryEntry.isFile === false
    //directoryEntry.isDirectory === true
    //directoryEntry.name === 'Documents'
    //directoryEntry.fullPath === '/Documents'

    }, onError);

  }

// Opening a file system with temporary storage
window.requestFileSystem(TEMPORARY, 1024*1024 /*1MB*/, onFs, onError);
```

## 属性

这个接口没有自己的属性，但是从它的父接口 {{domxref("FileSystemEntry")}} 继承了属性。

## 方法

这个接口从它的父接口 {{domxref("FileSystemEntry")}} 继承了方法。

- {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}
  - : 创建 {{domxref("FileSystemDirectoryReader")}} 对象，它可以用于服务目录中的条目。
- {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}
  - : 返回 {{domxref("FileSystemDirectoryEntry")}} 对象，表示位于给定路径的目录，相对于方法调用处的目录。
- {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}
  - : 返回 {{domxref("FileSystemFileEntry")}}对象，表示在目录层次中的一个文件，提供相对于方法调用处目录的路径。

### 废弃的方法

- {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}}
  - : 删除目录和所有内容，包含子目录的内容。它已经从规范中移除。

## 规范

{{Specifications}}

这个 API 没有官方的 W3C 或者 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件系统 API 简介](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}}
