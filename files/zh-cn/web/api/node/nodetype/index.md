---
title: Node.nodeType
slug: Web/API/Node/nodeType
---

{{APIRef("DOM")}}

只读属性 **`Node.nodeType`** 表示的是该节点的类型。

## 描述

**`nodeType`** 属性可用来区分不同类型的节点，比如 {{domxref("Element", "元素")}}, {{domxref("Text", "文本")}} 和 {{domxref("Comment", "注释")}}。

## 语法

```plain
var type = node.nodeType;
```

返回一个整数，其代表的是节点类型。其所有可能的值请参考 [节点类型常量](#节点类型常量).

## 常量

### 节点类型常量

| 常量                               | 值   | 描述                                                                                             |
| ---------------------------------- | ---- | ------------------------------------------------------------------------------------------------ |
| `Node.ELEMENT_NODE`                | `1`  | 一个 {{domxref("Element", "元素")}} 节点，例如 {{HTMLElement("p")}} 和 {{HTMLElement("div")}}。  |
| `Node.ATTRIBUTE_NODE`              | 2    | {{domxref("Element","元素")}} 的耦合 {{domxref("Attr", "属性")}}。                               |
| `Node.TEXT_NODE`                   | `3`  | {{domxref("Element")}} 或者 {{domxref("Attr")}} 中实际的 {{domxref("Text", "文字")}}             |
| `Node.CDATA_SECTION_NODE`          | `4`  | 一个 {{domxref("CDATASection")}}，例如 `<!CDATA[[ … ]]>`。                                       |
| `Node.PROCESSING_INSTRUCTION_NODE` | `7`  | 一个用于 XML 文档的 {{domxref("ProcessingInstruction")}} ，例如 `<?xml-stylesheet ... ?>` 声明。 |
| `Node.COMMENT_NODE`                | `8`  | 一个 {{domxref("Comment")}} 节点。                                                               |
| `Node.DOCUMENT_NODE`               | `9`  | 一个 {{domxref("Document")}} 节点。                                                              |
| `Node.DOCUMENT_TYPE_NODE`          | `10` | 描述文档类型的 {{domxref("DocumentType")}} 节点。例如 `<!DOCTYPE html>` 就是用于 HTML5 的。      |
| `Node.DOCUMENT_FRAGMENT_NODE`      | `11` | 一个 {{domxref("DocumentFragment")}} 节点                                                        |
|                                    |      |                                                                                                  |

以下的常量已被弃用且不再使用：`Node.ENTITY_REFERENCE_NODE`（`5`）、`Node.ENTITY_NODE`（`6`）和 `Node.NOTATION_NODE`（`12`）。

## 示例

### 不同的节点类型

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

var fragment = document.createDocumentFragment();
fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

var p = document.createElement("p");
p.textContent = "很久很久以前...";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### 注释

该示例会检查 document 下第一个节点是不是注释，如果不是，则会提醒。

```js
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE) console.log("你应该认真编写代码注释！");
```

## 规范

{{Specifications}}
