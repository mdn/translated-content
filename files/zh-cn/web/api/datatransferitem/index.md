---
title: DataTransferItem
slug: Web/API/DataTransferItem
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem`** 对象表示一个拖拽项。在一个拖拽操作中，每一个 {{domxref("DragEvent")}} 都有一个{{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性，它包含存有拖拽数据的{{domxref("DataTransferItemList","列表", "", 1)}}，其中每一项都是一个 `DataTransferItem` 。

`DataTransferItem` 主要是为 [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 设计的，并且在 HTML 拖拽部分中依然有所规定，但现在它也被其他 API 使用，例如 {{domxref("ClipboardEvent.clipboardData")}} 和 {{domxref("InputEvent.dataTransfer")}}。关于 `DataTransferItem` 的文档主要讨论它在拖拽操作中的用途，对于在其他上下文中如何使用 `DataTransferItem`，请参考相关 API 的文档。

这个接口没有构造函数。

## 属性

- {{domxref("DataTransferItem.kind")}} {{readonlyInline}}
  - : 拖拽项的种类，`string` 或是 `file`。
- {{domxref("DataTransferItem.type")}} {{readonlyInline}}
  - : 拖拽项的类型，一般是一个 MIME 类型。

## 方法

- {{domxref("DataTransferItem.getAsFile()")}}
  - : 返回一个关联拖拽项的 {{domxref("File")}} 对象（当拖拽项不是一个文件时返回 null）。
- {{domxref("DataTransferItem.getAsString()")}}
  - : 使用拖拽项的字符串作为参数执行指定回调函数。
- {{domxref("DataTransferItem.webkitGetAsEntry()")}} {{Non-standard_inline}}
  - : 返回一个基于 {{domxref("FileSystemEntry")}} 的对象来表示文件系统中选中的项目。通常是返回一个{{domxref("FileSystemFileEntry")}} 或是 {{domxref("FileSystemDirectoryEntry")}} 对象。

## 示例

这个接口所有的属性和方法都有自己的参考页，请到各自的参考页中查看用法示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
