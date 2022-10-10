---
title: CharacterData
slug: Web/API/CharacterData
---

{{APIRef("DOM")}}

**`CharacterData`** 介面表示了含有字元的 {{domxref("Node")}} 物件。`CharacterData` 為抽象介面，代表不會有型別為 `CharacterData` 的物件。物件是由其子介面，如 {{domxref("Text")}}、{{domxref("Comment")}} 或 {{domxref("ProcessingInstruction")}} 等非抽象介面來實作。

{{InheritanceDiagram}}

## 屬性

_Inherits properties from its parent, {{domxref("Node")}}, and implements the {{domxref("ChildNode")}} and {{domxref("NonDocumentTypeChildNode")}} interface._

- {{domxref("CharacterData.data")}}
  - : Is a {{domxref("DOMString")}} representing the textual data contained in this object.
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : Returns an `unsigned long` representing the size of the string contained in `CharacterData.data`.
- {{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}
  - : Returns the {{domxref("Element")}} immediately following the specified one in its parent's children list, or `null` if the specified element is the last one in the list.
- {{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}
  - : Returns the {{domxref("Element")}} immediately prior to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.

## 方法

*Inherits methods from its parent, {{domxref("Node")}}, and implements the {{domxref("ChildNode")}} *and {{domxref("NonDocumentTypeChildNode")}}_ interface._

- {{domxref("CharacterData.appendData()")}}
  - : Appends the given {{domxref("DOMString")}} to the `CharacterData.data` string; when this method returns, `data` contains the concatenated {{domxref("DOMString")}}.
- {{domxref("CharacterData.deleteData()")}}
  - : Removes the specified amount of characters, starting at the specified offset, from the `CharacterData.data` string; when this method returns, `data` contains the shortened {{domxref("DOMString")}}.
- {{domxref("CharacterData.insertData()")}}
  - : Inserts the specified characters, at the specified offset, in the `CharacterData.data` string; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Removes the object from its parent children list.
- {{domxref("CharacterData.replaceData()")}}
  - : Replaces the specified amount of characters, starting at the specified offset, with the specified {{domxref("DOMString")}}; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{domxref("CharacterData.substringData()")}}
  - : Returns a {{domxref("DOMString")}} containing the part of `CharacterData.data` of the specified length and starting at the specified offset.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [The DOM interfaces index](/zh-TW/docs/DOM/DOM_Reference).
