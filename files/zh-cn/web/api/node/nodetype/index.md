---
title: Node：nodeType 属性
slug: Web/API/Node/nodeType
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的只读属性 **`nodeType`** 表示该节点的类型。它可用来区分不同类型的{{domxref("Node", "节点", "", 1)}}，比如{{domxref("Element", "元素", "", 1)}}、{{domxref("Text", "文本", "", 1)}}和{{domxref("Comment", "注释", "", 1)}}。

## 值

一个指定节点类型的整数。可能的值有：

- `Node.ELEMENT_NODE`（`1`）
  - : 一个{{domxref("Element", "元素", "", 1)}}节点，例如 {{HTMLElement("p")}} 和 {{HTMLElement("div")}}。
- `Node.ATTRIBUTE_NODE`（`2`）
  - : {{domxref("Element", "元素", "", 1)}}的{{domxref("Attr", "属性", "", 1)}}。
- `Node.TEXT_NODE`（`3`）
  - : {{domxref("Element", "元素", "", 1)}}或者{{domxref("Attr", "属性", "", 1)}}中实际的{{domxref("Text", "文本", "", 1)}}。
- `Node.CDATA_SECTION_NODE`（`4`）
  - : 一个 {{domxref("CDATASection")}}，例如 `<!CDATA[[ … ]]>`。
- `Node.PROCESSING_INSTRUCTION_NODE`（`7`）
  - : 一个用于 XML 文档的 {{domxref("ProcessingInstruction")}}，例如 `<?xml-stylesheet ... ?>` 声明。
- `Node.COMMENT_NODE`（`8`）
  - : 一个{{domxref("Comment", "注释", "", 1)}}节点，例如 `<!-- … -->`。
- `Node.DOCUMENT_NODE`（`9`）
  - : 一个 {{domxref("Document")}} 节点。
- `Node.DOCUMENT_TYPE_NODE`（`10`）
  - : 描述文档类型的 {{domxref("DocumentType")}} 节点。例如 `<!DOCTYPE html>`。
- `Node.DOCUMENT_FRAGMENT_NODE`（`11`）
  - : 一个 {{domxref("DocumentFragment")}} 节点

以下的常量已被弃用且不再使用：`Node.ENTITY_REFERENCE_NODE`（`5`）、`Node.ENTITY_NODE`（`6`）和 `Node.NOTATION_NODE`（`12`）。

## 示例

### 不同的节点类型

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "很久很久以前……";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### 注释

该示例会检查 document 下第一个节点是不是注释，如果不是，则会提醒。

```js
const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("你应该认真编写代码注释！");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
