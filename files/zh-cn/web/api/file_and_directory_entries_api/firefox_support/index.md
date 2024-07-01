---
title: File and Directory Entries API support in Firefox
slug: Web/API/File_and_Directory_Entries_API/Firefox_support
---

{{DefaultAPISidebar("File System API")}} {{Non-standard_header}}

创建原始文件系统 API 是为了让浏览器实现对访问用户存储设备上沙箱虚拟文件系统的支持。标准化规范的工作早在 2012 年就被放弃了，但到那时，谷歌 Chrome 包含了自己的 API 实现。随着时间的推移，许多流行的站点和 Web 应用程序开始使用它，通常不提供任何退回到标准 API 的方法，甚至在使用之前也没有检查 API 是否可用。相反，Mozilla 选择实现其他 api，这些 api 可以用来解决许多相同的问题，比如[IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API);查看博客文章，[为什么 Firefox 中没有文件系统 API](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/)?更多的见解。

这导致许多流行的网站无法在 Chrome 以外的浏览器上正常运行。因此，我们尝试创建一个规范，提供可以达成共识的谷歌 API 的特性。结果是[文件和目录 API 条目](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)。Chrome 提供的这个 API 子集还没有完全指定;但是，出于 web 兼容性的原因，决定在 Firefox 中实现 API 的一个子集;这是在 Firefox 50 中引入的。

本文描述了文件和目录条目 API 的 Firefox 实现与其他实现和/或规范的不同之处。

## Chrome 规范偏差

最大的兼容性问题仍然存在，Chrome 仍然使用旧的名称为许多接口的 API，因为他们实现了一个相关的，但不同的规范：

| 规范名称                        | Google Chrome 使用的名称 |
| ------------------------------- | ------------------------ |
| `FileSystemDirectoryEntry`      | `DirectoryEntry`         |
| `FileSystemDirectoryEntrySync`  | `DirectoryEntrySync`     |
| `FileSystemDirectoryReader`     | `DirectoryReader`        |
| `FileSystemDirectoryReaderSync` | `DirectoryReaderSync`    |
| `FileSystemEntry`               | `Entry`                  |
| `FileSystemEntrySync`           | `EntrySync`              |
| `FileSystemFileEntry`           | `FileEntry`              |
| `FileSystemFileEntrySync`       | `FileEntrySync`          |

请确保在代码中考虑到这一点，允许使用这两个名称。希望 Chrome 能很快更新，使用新的名字！

为了确保你的代码可以在 Chrome 和其他浏览器上运行，你可以包括如下代码：

```js
var FileSystemDirectoryEntry =
  window.FileSystemDirectoryEntry || window.DirectoryEntry;
var FileSystemEntry = window.FileSystemEntry || window.Entry;
```

## Firefox 中的限制

接下来，让我们看看 API 的 Firefox 实现的局限性。概括地说，这些限制可以概括如下：

- 脚本内容不能创建文件系统或启动对文件系统的访问。目前只有两种方法可以访问文件系统条目：

  - {{HTMLElement("input")}}元素，使用{{domxref("HTMLInputElement.webkitEntries")}}属性访问{{domxref("FileSystemEntry")}}对象数组，这些对象描述可以读取的文件系统条目。
  - 通过调用{{domxref("DataTransferItem.getAsEntry()")}}方法来使用拖放操作，该方法允许为拖放区域中的文件获取{{domxref("FileSystemFileEntry")}}或{{domxref("FileSystemDirectoryEntry")}}。

- 你不能用 [`LocalFileSystem.requestFileSystem()`](/zh-CN/docs/Web/API/LocalFileSystem#requestFileSystem) 方法来访问指定的本地文件系统。
- 没有实现 [`LocalFileSystem.resolveLocalFileSystemURL()`](/zh-CN/docs/Web/API/LocalFileSystem#resolveLocalFileSystemURL) 方法。
- 只实现接口的异步版本。任何名称以 "`Sync"` 结尾的接口都不可用。
- Firefox 只支持从文件系统中的文件读取。你不能用他们写入。特别是，用来创建{{domxref("FileSystemFileEntry.createWriter()")}}来处理文件写入的{{domxref("FileWriter")}}方法没有实现，只会返回一个错误。
- Firefox 不支持 `"filesystem:"` URL 方案。

## 参见

- [文件和目录 API 条目](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [介绍文件和目录 API 条目](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [文件和目录 API 条目](https://wicg.github.io/entries-api/)的最新规范，但仍然是早期规范。
- 文件 API 的原始规范：[目录和系统](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html)(通常称为“FileSystem API”);谷歌 Chrome 是唯一一个实现这个废弃 API 的浏览器。
