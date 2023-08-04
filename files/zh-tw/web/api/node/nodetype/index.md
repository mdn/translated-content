---
title: Node.nodeType
slug: Web/API/Node/nodeType
---

{{APIRef("DOM")}}

**`Node.nodeType`** 唯讀屬性表示了節點物件的類型。

## 描述

The **`nodeType`** property can be used to distinguish different kind of nodes, such that {{domxref("Element", "elements")}}, {{domxref("Text", "text")}} and {{domxref("Comment", "comments")}}, from each other.

## 語法

```plain
var type = node.nodeType;
```

Returns an integer value which specifies the type of the node; possible values are listed in [Node type constants](#節點類型常數).

## 常數

### 節點類型常數

| Constant                                                           | Value | Description                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("Node.ELEMENT_NODE")}} {{readonlyinline}}                | `1`   | 表示元素的 {{domxref("Element")}} 節點，如 {{HTMLElement("body")}}、{{HTMLElement("a")}}、{{HTMLElement("p")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}}、{{HTMLElement("html")}}、{{HTMLElement("h1")}} 或 {{HTMLElement("div")}}。 |
| `Node.ATTRIBUTE_NODE`                                              | 2     | An {{domxref("Attr", "Attribute")}} of an {{domxref("Element")}}.                                                                                                                                                                               |
| {{domxref("Node.TEXT_NODE")}} {{readonlyinline}}                   | `3`   | 於表示元素的 {{domxref("Element")}} 節點或表示 {{Glossary("attribute", "HTML 元素屬性")}}的 {{domxref("Attr")}} 節點中，表示了實際文字字元的 {{domxref("Text")}} 節點，它包括了換行與空格。                                                     |
| `Node.CDATA_SECTION_NODE`                                          | `4`   | A {{domxref("CDATASection")}}.                                                                                                                                                                                                                  |
| {{domxref("Node.PROCESSING_INSTRUCTION_NODE")}} {{readonlyinline}} | `7`   | A {{domxref("ProcessingInstruction")}} of an XML document such as `<?xml-stylesheet ... ?>` declaration.                                                                                                                                        |
| {{domxref("Node.COMMENT_NODE")}} {{readonlyinline}}                | `8`   | 表示註解的 {{domxref("Comment")}} 節點。                                                                                                                                                                                                        |
| {{domxref("Node.DOCUMENT_NODE")}} {{readonlyinline}}               | `9`   | 表示文件的 {{domxref("Document")}} 節點。                                                                                                                                                                                                       |
| {{domxref("Node.DOCUMENT_TYPE_NODE")}} {{readonlyinline}}          | `10`  | 表示文件類型的 {{domxref("DocumentType")}} 節點，例如 HTML5 的 `<!DOCTYPE html>`。                                                                                                                                                              |
| {{domxref("Node.DOCUMENT_FRAGMENT_NODE")}} {{readonlyinline}}      | `11`  | A {{domxref("DocumentFragment")}} node.                                                                                                                                                                                                         |

The following constants have been deprecated and are not in use anymore: `Node.ENTITY_REFERENCE_NODE` (`5`), `Node.ENTITY_NODE` (`6`), and `Node.NOTATION_NODE` (`12`).

## 範例

### Different types of nodes

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

var fragment = document.createDocumentFragment();
fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

var p = document.createElement("p");
p.textContent = "Once upon a time...";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### Comments

This example checks if the first node inside the document element is a comment node, and if it is not, displays a message.

```js
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
```

## 規範

{{Specifications}}
