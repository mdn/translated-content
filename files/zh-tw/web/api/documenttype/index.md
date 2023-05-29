---
title: DocumentType
slug: Web/API/DocumentType
---

{{APIRef("DOM")}}

**`DocumentType`** 介面表示了一個代表文件類型的 {{domxref("Node")}} 節點。

{{InheritanceDiagram}}

## 屬性

_此介面繼承了其父介面 {{domxref("Node")}} 的屬性，以及實作了 {{domxref("ChildNode")}} 介面。_

- {{domxref("DocumentType.entities")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : A {{domxref("NamedNodeMap")}} of entities declared in the DTD. Every node in this map implements the {{domxref("Entity")}} interface.
- {{domxref("DocumentType.internalSubset")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : A {{domxref("DOMString")}} of the internal subset, or `null` if there is none. Eg `"<!ELEMENT foo (bar)>"`.
- {{domxref("DocumentType.name")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}}, eg `"html"` for `<!DOCTYPE HTML>`.
- {{domxref("DocumentType.notations")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : A {{domxref("NamedNodeMap")}} with notations declared in the DTD. Every node in this map implements the {{domxref("Notation")}} interface.
- {{domxref("DocumentType.publicId")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}}, eg `"-//W3C//DTD HTML 4.01//EN"`, empty string for HTML5.
- {{domxref("DocumentType.systemId")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}}, eg `"http://www.w3.org/TR/html4/strict.dtd"`, empty string for HTML5.

## 方法

_此介面繼承了其父介面 {{domxref("Node")}} 的方法，以及實作了 {{domxref("ChildNode")}} 介面。_

- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Removes the object from its parent children list.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [The DOM interfaces index.](/zh-TW/docs/DOM/DOM_Reference)
- {{domxref("Entity")}}
- {{domxref("Notation")}}
