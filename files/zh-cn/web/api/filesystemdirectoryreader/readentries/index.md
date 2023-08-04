---
title: FileSystemDirectoryReader.readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
---

{{APIRef("File and Directory Entries API")}}

{{domxref("FileSystemDirectoryReader")}} 接口的 **`readEntries()`** 方法用于检索正在读取的目录中的目录条目，并将它们以数组的形式传递给提供的回调函数。

数组中的对象都是 {{domxref("FileSystemEntry")}} 实例。它们要么是代表标准文件的 {{domxref("FileSystemFileEntry")}} 对象，要么是代表目录的 {{domxref("FileSystemDirectoryEntry")}} 对象。

## 语法

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### 参数

- `successCallback`
  - : 在目录中的内容被成功检索时调用的回调函数。该函数接收一个输入参数——文件系统条目对象的数组，其中的每一个对象都基于 {{domxref("FileSystemEntry")}}。通常，它们要么是代表标准文件的 {{domxref("FileSystemFileEntry")}} 对象，要么是代表目录的 {{domxref("FileSystemDirectoryEntry")}} 对象。如果目录中没有剩余的文件，或是你已经调用过 {{domxref("FileSystemDirectoryReader")}} 的 `readEntries()` 方法，则数组为空。
- `errorCallback` {{optional_inline}}
  - : 一个在目录读取发生错误时调用的回调函数。它接收一个输入参数——一个 {{domxref("DOMException")}} 对象，用于描述发生的错误。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

参见 [`DataTransferItem.webkitGetAsEntry()`](/zh-CN/docs/Web/API/DataTransferItem/webkitGetAsEntry#示例) 以获取使用此方法的示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

在 Chrome 77 上，`readEntries()` 只会返回前 100 个 `FileSystemEntry` 实例。为了获取所有的实例，请多次调用 `readEntries()`。

## 参见

- [文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件与目录条目 API 简介](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}
