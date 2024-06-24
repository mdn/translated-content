---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("File and Directory Entries API")}}

[文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API) 的 `FileSystemDirectoryReader` 接口允许你访问代表目录每个条目的 {{domxref("FileSystemFileEntry")}} 对象（通常是 {{domxref("FileSystemFileEntry")}} 或 {{domxref("FileSystemDirectoryEntry")}}）。

## 实例方法

- {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}}
  - : 返回一个包含一些目录条目的数组，数组的每一项是一个基于 {{domxref("FileSystemEntry")}} 的对象（通常是 {{domxref("FileSystemFileEntry")}} 或 {{domxref("FileSystemDirectoryEntry")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件与目录条目 API 简介](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}
