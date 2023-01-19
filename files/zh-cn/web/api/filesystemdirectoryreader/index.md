---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
---

{{APIRef("File System API")}}{{Non-standard_header}}

The `FileSystemDirectoryReader` interface of the [File and Directory Entries API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API) lets you access the {{domxref("FileEntry")}}-based objects (generally {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}) representing each entry in a directory.

> **备注：** Because this is a non-standard API, whose specification is not currently on a standards track, it's important to keep in mind that not all browsers implement it, and those that do may implement only small portions of it. Check the [Browser compatibility](#browser_compatibility) section for details.

## Methods

- {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}}
  - : Returns a an array containing some number of the directory's entries. Each item in the array is an object based on {{domxref("FileSystemEntry")}}—typically either {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}.

## Specifications

{{Specifications}}

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}
