---
title: 文件与目录条目 API
slug: Web/API/File_and_Directory_Entries_API
---

{{DefaultAPISidebar("File and Directory Entries API")}}

文件与目录条目（File and Directory Entries）API 模拟一个 web 应用可以导航和访问的本地文件系统。你可以在虚拟的沙箱文件系统中开发一个读、写、创建文件或者目录的应用。

## 访问文件系统

有两种方法可以访问当前规范草案中定义的文件系统：

- 当处理用于拖放的 [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件时，你可以调用 {{domxref("DataTransferItem.webkitGetAsEntry()")}} 来为被放置（dropped）的项获取 {{domxref("FileSystemEntry")}}。如果结果不是 `null`，那么它就是一个被放置的文件或目录，你可以使用文件系统调用来处理它。
- {{domxref("HTMLInputElement.webkitEntries")}} 属性允许你访问当前选定文件的 {{domxref("FileSystemFileEntry")}} 对象，但前提是将它们拖放到文件选择器（[Firefox bug 1326031](https://bugzil.la/1326031)）。如果 {{domxref("HTMLInputElement.webkitdirectory")}} 为真，则 {{HTMLElement("input")}} 元素是一个目录选择器，你将得到表示每个选择的目录的 {{domxref("FileSystemDirectoryEntry")}} 对象。

## 接口

文件与目录条目 API 包含以下接口：

- {{domxref("FileSystem")}}
  - : 表示文件系统。
- {{domxref("FileSystemEntry")}}
  - : 表示文件系统中单个条目的基本接口。这是由表示文件或目录的其它接口实现的。
- {{domxref("FileSystemFileEntry")}}
  - : 表示文件系统中的单个文件。
- {{domxref("FileSystemDirectoryEntry")}}
  - : 表示文件系统中的单个目录。
- {{domxref("FileSystemDirectoryReader")}}
  - : 该接口通过调用 {{domxref("FileSystemDirectoryEntry.createReader()")}} 创建，提供了允许读取目录内容的功能。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [介绍文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Firefox 中的文件与目录条目 API 支持](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
