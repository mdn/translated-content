---
title: Node.nodeType
slug: Web/API/Node/nodeType
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.nodeType
translation_of: Web/API/Node/nodeType
---
{{APIRef("DOM")}}

**`nodeType`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティであり、整数値でこのノードがなんであるかを識別します。これは様々なノードの種類、例えば {{domxref("Element", "elements")}}, {{domxref("Text", "text")}}, {{domxref("Comment", "comments")}} を見分けます。

## 値

整数値で、このノードの種類を識別します。可能な値は次の通りです。

- `Node.ELEMENT_NODE` (`1`)
  - : {{HTMLElement("p")}} や {{HTMLElement("div")}} などの {{domxref("Element")}} ノードです。
- `Node.ATTRIBUTE_NODE` (`2`)
  - : {{domxref("Element")}} の {{domxref("Attr", "Attribute")}} ノードです。
- `Node.TEXT_NODE` (`3`)
  - : {{domxref("Element")}} や {{domxref("Attr")}} の中に存在する {{domxref("Text")}} です。
- `Node.CDATA_SECTION_NODE`(`4`)
  - : `<!CDATA[[ … ]]>` のような {{domxref("CDATASection")}} です。
- `Node.PROCESSING_INSTRUCTION_NODE` (`7`)
  - : `<?xml-stylesheet … ?>` のような XML 文書の {{domxref("ProcessingInstruction")}} です。
- `Node.COMMENT_NODE` (`8`)
  - : `<!-- … -->` のような {{domxref("Comment")}} ノードです。
- `Node.DOCUMENT_NODE` (`9`)
  - : {{domxref("Document")}} ノードです。
- `Node.DOCUMENT_TYPE_NODE` (`10`)
  - : `<!DOCTYPE html>` のような {{domxref("DocumentType")}} ノードです。
- `Node.DOCUMENT_FRAGMENT_NODE` (`11`)
  - : A {{domxref("DocumentFragment")}} node.

`Node.ENTITY_REFERENCE_NODE` (`5`), `Node.ENTITY_NODE` (`6`), `Node.NOTATION_NODE` (`12`) は非推奨になっており、使用されなくなっています。

## 例

## 様々な種類のノード

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "昔々…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### コメント

次の例は、ノードの最初の要素がコメントノードであるかをチェックし、そうでない場合にメッセージを表示するものです。

```js
const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("コメントを入れてください。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
