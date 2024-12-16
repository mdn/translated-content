---
title: FileSystem
slug: Web/API/FileSystem
---

{{APIRef("File System API")}} {{non-standard_header}}

在 [File System API](/zh-CN/docs/DOM/File_API/File_System_API) 中，一个 [FileSystem 对象](/zh-CN/docs/DOM/File_API/File_System_API/FileSystem)代表着一个文件系统。这个对象是调用 [requestFileSystem()](/zh-CN/docs/Web/API/File_and_Directory_Entries_API#requestfilesystem) 成功的一个标志。FileSystem 对象有两个属性。

## 关于本文档

本文档的上次更新是 2012 年 3 月 2 日，引用来源是 2011 年 4 月 9 日的草案 [W3C Specifications (Working Draft)](https://www.w3.org/TR/2011/WD-file-system-api-20110419/)。
[该草案](https://www.w3.org/TR/file-system-api/)似乎已经被放弃了，任何实现不应该参考这份草案，也不该引用它。

## 基本概念

你可以通过调用 [`window.requestFileSystem()`](/zh-CN/docs/Web/API/File_and_Directory_Entries_API#requestfilesystem) 来请求对一个沙盒文件系统的访问权限。调用 `requestFileSystem()` 会创建一个新的沙盒存储空间。成功调用之后会返回一个 [`FileSystem 对象`](/zh-CN/docs/DOM/File_API/File_System_API/FileSystem)。它有两个属性：名称和文件系统的根目录。

[`FileSystem 对象`](/zh-CN/docs/DOM/File_API/File_System_API/FileSystem)是你访问文件系统所必须的，所以你最好为它创建一个引用，然后储存起来。

## 属性

| 属性   | 类型               | 解释                                                                             |
| ------ | ------------------ | -------------------------------------------------------------------------------- |
| `name` | `只读的 DOMString` | 文件系统的名称。The name must be unique across the list of exposed file systems. |
| `root` | `只读的目录实体`   | 文件系统的根目录。                                                               |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件与目录条目 API 介绍](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}、{{domxref("FileSystemFileEntry")}} 和 {{domxref("FileSystemDirectoryEntry")}}
