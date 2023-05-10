---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList`** 对象是一组代表被拖动项的{{domxref("DataTransferItem")}} 对象的列表。在拖动操作期间，每个{{domxref("DragEvent")}} 都有一个 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性，该属性是 `DataTransferItemList`.

该接口没有构造函数

## 属性

- {{domxref("DataTransferItemList.length")}} {{readonlyInline}}
  - : `无符号长整型` ：列表中拖动项的数量。

## 方法

- {{domxref("DataTransferItemList.add()")}}
  - : 向拖动项列表中添加新项 ({{domxref("File")}}对象或{{domxref("DOMString","string")}})，该方法返回一个 {{domxref("DataTransferItem")}} 对象。
- {{domxref("DataTransferItemList.remove()")}}
  - : 根据索引删除拖动项列表中的对象。
- {{domxref("DataTransferItemList.clear()")}}
  - : 清空拖动项列表。
- {{domxref("DataTransferItemList.DataTransferItem()")}}
  - : 取值方法：返回给定下标的{{domxref("DataTransferItem")}}对象。

## 示例

每个方法或属性都有其引用页面，每一个引用页对应也有使用示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
