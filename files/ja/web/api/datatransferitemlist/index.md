---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItemList`** object is a list of {{domxref("DataTransferItem")}} objects representing items being dragged. During a _drag operation_, each {{domxref("DragEvent")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property and that property is a `DataTransferItemList`.

This interface has no constructor.

## Properties

- {{domxref("DataTransferItemList.length")}} {{readonlyInline}}
  - : An `unsigned long` that is the number of drag items in the list.

## Methods

- {{domxref("DataTransferItemList.add()")}}
  - : Adds an item (either a {{domxref("File")}} object or a {{domxref("DOMString","string")}}) to the drag item list and returns a {{domxref("DataTransferItem")}} object for the new item.
- {{domxref("DataTransferItemList.remove()")}}
  - : Removes the drag item from the list at the given index.
- {{domxref("DataTransferItemList.clear()")}}
  - : Removes all of the drag items from the list.
- {{domxref("DataTransferItemList.DataTransferItem()")}}
  - : Getter that returns a {{domxref("DataTransferItem")}} at the given index.

## Example

Each of this interface's methods and properties has a reference page, and each reference page has an example of its usage.

## Specifications

| Specification                                                                                                            | Status                           | Comment                                                |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------ |
| {{SpecName('HTML WHATWG', 'interaction.html#datatransferitemlist','DataTransferItemList')}} | {{Spec2('HTML WHATWG')}} |                                                        |
| {{SpecName('HTML5.1', 'editing.html#datatransferitemlist','DataTransferItemList')}}         | {{Spec2('HTML5.1')}}     | Not included in W3C HTML5 {{Spec2('HTML5 W3C')}} |
|                                                                                                                          |                                  |                                                        |

## Browser compatibility

{{Compat("api.DataTransferItemList")}}
