---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
tags:
  - プロパティ
  - リファレンス
browser-compat: api.Node.nodeValue
translation_of: Web/API/Node/nodeValue
---
{{APIRef("DOM")}}

**`nodeValue`** は {{domxref("Node")}} インターフェイスのプロパティで、現在のノードの値を返したり設定したりします。

## Value

もしあれば、現在のノードの値を含む文字列です。
文書自身においては、 `nodeValue` は `null` を返します。
テキスト、コメント、 CDATA ノードでは、 `nodeValue` はノードの内容を返します。
属性ノードにおいては、属性の値が返します。

以下の表はノードの種類別の返値を表しています。

| ノード                               | nodeValue の値                      |
| ------------------------------------ | ----------------------------------- |
| {{domxref("CDATASection")}}          | CDATA セクションの中身              |
| {{domxref("Comment")}}               | コメントの中身                      |
| {{domxref("Document")}}              | `null`                              |
| {{domxref("DocumentFragment")}}      | `null`                              |
| {{domxref("DocumentType")}}          | `null`                              |
| {{domxref("Element")}}               | `null`                              |
| {{domxref("NamedNodeMap")}}          | `null`                              |
| {{domxref("ProcessingInstruction")}} | 対象を除く内容物全体                |
| {{domxref("Text")}}                  | テキストノードの中身                |

> **Note:** `nodeValue` が `null` になると定義されている場合は、設定しても効果がありません。

## 例

```html
<div id="d1">Hello world</div>
<!-- コメントの例 -->
<output id="result">結果が出ていません。</output>
```

また、以下のスクリプトを参照してください。

```js
let node = document.getElementsByTagName("body")[0].firstChild;
let result = "<br/>ノード名:<br/>";
while (node) {
  result += node.nodeName + "の値: " + node.nodeValue + "<br/>";
  node = node.nextSibling
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("Example", "100%", "250")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
