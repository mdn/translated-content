---
title: DataTransferItem
slug: Web/API/DataTransferItem
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem`** 描述了一个拖拽项。在一个拖拽操作*中，*每一个 {{domxref("DragEvent","drag event")}} 都有一个{{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性，它包含一个存有拖拽数据的 {{domxref("DataTransferItemList","list")}} ，其中每一项都是一个 `DataTransferItem` 。

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

## 例子

这个接口所有的属性和方法都有自己的介绍页，请到各自的介绍页中查看示例用法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
