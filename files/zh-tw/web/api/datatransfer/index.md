---
title: DataTransfer
slug: Web/API/DataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer`** 物件被用來保存使用者於拖放操作過程中的資料，其中可能包含了一至多項資料以及多種資料類型。要瞭解拖放操作的更多細節，請參考[拖放操作](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API)一文。

`DataTransfer` 只能是每一種 {{domxref("DragEvent")}} 型別物件的共同屬性－{{domxref("DragEvent.dataTransfer","dataTransfer")}}，不能夠被單獨建立。

## 屬性

### Standard properties

- {{domxref("DataTransfer.dropEffect")}}
  - : Gets the type of drag-and-drop operation currently selected or sets the operation to a new type. The value must be `none` `copy` `link` or `move`.
- {{domxref("DataTransfer.effectAllowed")}}
  - : Provides all of the types of operations that are possible. Must be one of `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` or `uninitialized`.
- {{domxref("DataTransfer.files")}}
  - : Contains a list of all the local files available on the data transfer. If the drag operation doesn't involve dragging files, this property is an empty list.
- {{domxref("DataTransfer.items")}} {{readonlyInline}}
  - : Gives a {{domxref("DataTransferItemList")}} object which is a list of all of the drag data.
- {{domxref("DataTransfer.types")}} {{readonlyInline}}
  - : An array of {{domxref("DOMString","strings")}} giving the formats that were set in the {{event("dragstart")}} event.

### Gecko properties

{{SeeCompatTable}}

> **備註：** All of the properties in this section are Gecko-specific.

- {{domxref("DataTransfer.mozCursor")}}
  - : Gives the drag cursor's state. This is primarily used to control the cursor during tab drags.
- {{domxref("DataTransfer.mozItemCount")}} {{readonlyInline}}
  - : Gives the number of items in the drag operation.
- {{domxref("DataTransfer.mozSourceNode")}} {{readonlyInline}}
  - : The {{ domxref("Node") }} over which the mouse cursor was located when the button was pressed to initiate the drag operation. This value is `null` for external drags or if the caller can't access the node.
- {{domxref("DataTransfer.mozUserCancelled")}} {{readonlyInline}}
  - : This property applies only to the `dragend` event, and is `true` if the user canceled the drag operation by pressing escape. It will be `false` in all other cases, including if the drag failed for any other reason, for instance due to a drop over an invalid location.

## 方法

### Standard methods

- {{domxref("DataTransfer.clearData()")}}
  - : Remove the data associated with a given type. The type argument is optional. If the type is empty or not specified, the data associated with all types is removed. If data for the specified type does not exist, or the data transfer contains no data, this method will have no effect.
- {{domxref("DataTransfer.getData()")}}
  - : Retrieves the data for a given type, or an empty string if data for that type does not exist or the data transfer contains no data.
- {{domxref("DataTransfer.setData()")}}
  - : Set the data for a given type. If data for the type does not exist, it is added at the end, such that the last item in the types list will be the new format. If data for the type already exists, the existing data is replaced in the same position.
- {{domxref("DataTransfer.setDragImage()")}}
  - : Set the image to be used for dragging if a custom one is desired.

### Gecko methods

{{SeeCompatTable}}

> **備註：** All of the methods in this section are Gecko-specific.

- {{domxref("DataTransfer.addElement()")}}
  - : Sets the drag source to the given element.
- {{domxref("DataTransfer.mozClearDataAt()")}}
  - : Removes the data associated with the given format for an item at the specified index. The index is in the range from zero to the number of items minus one.
- {{domxref("DataTransfer.mozGetDataAt()")}}
  - : Retrieves the data associated with the given format for an item at the specified index, or null if it does not exist. The index should be in the range from zero to the number of items minus one.
- {{domxref("DataTransfer.mozSetDataAt()")}}
  - : A data transfer may store multiple items, each at a given zero-based index. `mozSetDataAt()` may only be called with an index argument less than `mozItemCount` in which case an existing item is modified, or equal to `mozItemCount` in which case a new item is added, and the `mozItemCount` is incremented by one.
- {{domxref("DataTransfer.mozTypesAt()")}}
  - : Holds a list of the format types of the data that is stored for an item at the specified index. If the index is not in the range from 0 to the number of items minus one, an empty string list is returned.

## 範例

Every method and property listed in this document has its own reference page and each reference page either directly includes an example of the interface or has a link to an example.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Drag and drop](/Web/Guide/HTML/Drag_and_drop)
- [Drag Operations](/Web/Guide/HTML/Drag_operations)
- [Recommended Drag Types](/Web/Guide/HTML/Recommended_Drag_Types)
- [Dragging and Dropping Multiple Items](/Web/Guide/HTML/Dragging_and_Dropping_Multiple_Items)
