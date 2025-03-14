---
title: "Node: nodeName プロパティ"
slug: Web/API/Node/nodeName
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`nodeName`** は {{domxref("Node")}} の読み取り専用プロパティで、現在のノードの名前を文字列で返します。

## 値

文字列です。ノードの種類によって、次のような値になります。

- {{domxref("Attr")}}
  - : {{domxref("Attr.name")}} の値で、この属性の*修飾名*です。
- {{domxref("CDATASection")}}
  - : `"#cdata-section"` という文字列です。
- {{domxref("Comment")}}
  - : `"#comment"` という文字列です。
- {{domxref("Document")}}
  - : `"#document"` という文字列です。
- {{domxref("DocumentFragment")}}
  - : `"#document-fragment"` という文字列です。
- {{domxref("DocumentType")}}
  - : {{domxref("DocumentType.name")}} の値です。
- {{domxref("Element")}}
  - : {{domxref("Element.tagName")}} の値です。これは HTML 要素であればその要素のタグの*大文字の*名前であり、 XML 要素（SVG や MathML の要素）であればその要素のタグの*小文字の*名前です。
- {{domxref("ProcessingInstruction")}}
  - : {{domxref("ProcessingInstruction.target")}} の値です。
- {{domxref("Text")}}
  - : `"#text"` という文字列です。

## 例

この例では、様々なノードのノード名を表示します。

```html
こちらは HTML です。
<div id="d1">Hello world</div>
<!-- コメントの例 -->
テキスト<span>テキスト</span> テキスト<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">まだ出力されていません。</output>
```

また、スクリプトは以下の通りです。

```js
let node = document.querySelector("body").firstChild;
let result = "ノード名:<br/>";
while (node) {
  result += `${node.nodeName}<br/>`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("Example", "100%", "450")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.tagName")}}
- {{domxref("Attr.name")}}
- {{domxref("DocumentType.name")}}
- {{domxref("ProcessingInstruction.target")}}
