---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem`** 对象表示一个拖动数据项。在一个*拖动操作*中，每一个 {{domxref("DragEvent")}} 都有包含存有拖动数据项的{{domxref("DataTransferItemList","列表", "", 1)}} 的 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性，其中每一项都是一个 `DataTransferItem` 对象。

`DataTransferItem` 主要旨在服务 [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)，它在 HTML 拖放一节中得到定义，但也用于其他 API，如 {{domxref("ClipboardEvent.clipboardData")}} 和 {{domxref("InputEvent.dataTransfer")}}。`DataTransferItem` 的文档将主要讨论拖放操作中该对象的使用方式。你应该参考相应 API 的文档以了解在其他上下文环境中 `DataTransferItem` 的使用方式。

这个接口没有构造函数。

## 实例属性

- {{domxref("DataTransferItem.kind")}} {{readonlyInline}}
  - : 拖动数据项的*种类*，可以是 `string` 或 `file`。
- {{domxref("DataTransferItem.type")}} {{readonlyInline}}
  - : 拖动数据项的类型，通常是 MIME 类型。

## 实例方法

- {{domxref("DataTransferItem.getAsFile()")}}
  - : 返回一个关联拖动数据项的 {{domxref("File")}} 对象（当拖动项不是一个文件时返回 null）。
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref('Promise')}}，其在拖动项为文件时将兑现为 {{domxref('FileSystemFileHandle')}}，而在拖动项为目录时将兑现为 {{domxref('FileSystemDirectoryHandle')}}。
- {{domxref("DataTransferItem.getAsString()")}}
  - : 使用拖动数据项的字符串作为参数执行指定回调函数。
- {{domxref("DataTransferItem.webkitGetAsEntry()")}}
  - : 返回一个基于 {{domxref("FileSystemEntry")}} 的对象来表示文件系统中选中的项目。这通常是一个 {{domxref("FileSystemFileEntry")}} 或 {{domxref("FileSystemDirectoryEntry")}} 对象。

## 示例

这个接口所有的属性和方法都有自己的参考页，请到各自的参考页中查看用法示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
