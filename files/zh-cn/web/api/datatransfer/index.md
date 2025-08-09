---
title: DataTransfer
slug: Web/API/DataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

`DataTransfer` 对象用于保存拖动并放下（drag and drop）过程中的数据。它可以保存一项或多项数据，这些数据项可以是一种或者多种数据类型。关于拖放的更多信息，请参见 [Drag and Drop](/en-US/DragDrop/Drag_and_Drop).

这个对象可以从所有拖动事件 {{domxref("DragEvent","drag events")}} 的 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性上获取。

## 构造函数

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : 生成并且返回一个新的 `DataTransfer` 对象。

## 属性

### 标准属性

- {{domxref("DataTransfer.dropEffect")}}
  - : 获取当前选定的拖放操作类型或者设置的为一个新的类型。值必须为 `none`, `copy`, `link` 或 `move`。
- {{domxref("DataTransfer.effectAllowed")}}
  - : 提供所有可用的操作类型。必须是 `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` or `uninitialized` 之一。
- {{domxref("DataTransfer.files")}}
  - : 包含数据传输中可用的所有本地文件的列表。如果拖动操作不涉及拖动文件，则此属性为空列表。
- {{domxref("DataTransfer.items")}} {{readonlyInline}}
  - : 提供一个包含所有拖动数据列表的 {{domxref("DataTransferItemList")}} 对象。
- {{domxref("DataTransfer.types")}} {{readonlyInline}}
  - : 一个提供 [`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 事件中设置的格式的 {{domxref("DOMString","strings")}} 数组。

### Gecko 属性

{{SeeCompatTable}}

> [!NOTE]
> 本节中的所有属性为 Gecko 特有。

- {{domxref("DataTransfer.mozCursor")}}
  - : 给出拖动光标的状态。这主要用于在拖动期间控制光标。
- {{domxref("DataTransfer.mozSourceNode")}} {{readonlyInline}}
  - : 按下鼠标按钮按下启动拖动操作时鼠标光标所在的 {{ domxref("Node") }} 。对于外部拖动或调用方无法访问节点，此值为 `null` 。
- {{domxref("DataTransfer.mozUserCancelled")}} {{readonlyInline}}
  - : 此属性仅适用于 `dragend` 事件，如果通过用户按下 escape 取消拖动操作，则为 `true` 。在所有其他情况下，这将为 `false` ，包括由于其他原因（如，放置在无效位置）导致的拖动失败。

### 不推荐的属性

- {{domxref("DataTransfer.mozItemCount")}} {{readonlyInline}} {{deprecated_inline}}
  - : 提供拖动操作中的项目数。在 Firefox71 中删除。

## 方法

### 标准方法

- {{domxref("DataTransfer.clearData()")}}
  - : 删除与给定类型关联的数据。类型参数是可选的。如果类型为空或未指定，则删除与所有类型关联的数据。如果指定类型的数据不存在，或者 data transfer 中不包含任何数据，则该方法不会产生任何效果。
- {{domxref("DataTransfer.getData()")}}
  - : 检索给定类型的数据，如果该类型的数据不存在或 data transfer 不包含数据，则返回空字符串。
- {{domxref("DataTransfer.setData()")}}
  - : 设置给定类型的数据。如果该类型的数据不存在，则将其添加到末尾，以便类型列表中的最后一项将是新的格式。如果该类型的数据已经存在，则在相同位置替换现有数据。
- {{domxref("DataTransfer.setDragImage()")}}
  - : 用于设置自定义的拖动图像。

### Gecko 方法

{{Non-standard_header()}}

> [!NOTE]
> 本节所有方法为 Gecko 专有。

- {{domxref("DataTransfer.addElement()")}}
  - : Sets the drag source to the given element.

### 不推荐的方法

- {{domxref("DataTransfer.mozClearDataAt()")}} {{deprecated_inline}}
  - : Removes the data associated with the given format for an item at the specified index. The index is in the range from zero to the number of items minus one. Removed in Firefox 71.
- {{domxref("DataTransfer.mozGetDataAt()")}} {{deprecated_inline}}
  - : Retrieves the data associated with the given format for an item at the specified index, or null if it does not exist. The index should be in the range from zero to the number of items minus one. Removed in Firefox 71.
- {{domxref("DataTransfer.mozSetDataAt()")}} {{deprecated_inline}}
  - : A data transfer may store multiple items, each at a given zero-based index. `mozSetDataAt()` may only be called with an index argument less than `mozItemCount` in which case an existing item is modified, or equal to `mozItemCount` in which case a new item is added, and the `mozItemCount` is incremented by one. Removed in Firefox 71.
- {{domxref("DataTransfer.mozTypesAt()")}} {{deprecated_inline}}
  - : Holds a list of the format types of the data that is stored for an item at the specified index. If the index is not in the range from 0 to the number of items minus one, an empty string list is returned. Removed in Firefox 71.

## 示例

本文档中的每个方法和属性都有自己的参考页面，每个参考页面中都直接包含了接口的示例或给出了示例的链接。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖与放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖动操作](HTML_Drag_and_Drop_API/Drag_operations)
- [推荐拖动类型](HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 测试 - 粘贴、拖放](https://codepen.io/tech_query/pen/MqGgap)
