---
title: Node.childNodes
slug: Web/API/Node/childNodes
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.childNodes
translation_of: Web/API/Node/childNodes
---
{{APIRef("DOM")}}

**`childNodes`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティであり、{{domxref("NodeList")}} で指定された要素の子{{domxref("Node", "ノード", "", 1)}}の生きたリストを返し、最初の子ノードは位置 `0` に割り当てられます。子ノードには要素、テキスト、コメントが含まれます。

> **Note:** {{domxref("NodeList")}} が生きたリストであるというのは、新しい子が追加されたり取り除かれたりするたびに、内容が変化するという意味です。

ノードのコレクションの項目はオブジェクトであり、文字列ではありません。ノードオブジェクトからデータを取得するには、そのプロパティを使用してください。例えば、最初の子ノードの名前を取得するには、 `elementNodeReference.childNodes[0].nodeName` を使うことで実現できます。

{{domxref("document")}} オブジェクト自体には 2 つの子があります。文書型宣言と、ルート要素、ふつうは `documentElement` として参照されます。 HTML 文書の場合、後者は {{HTMLElement("html")}} 要素です。

覚えておくべき重要なこととして、 `childNodes` には*すべての*子ノードが含まれ、テキストやコメントなどの要素以外のノードが含まれることです。
要素のみが含まれるコレクションを取得するのであれば、 {{domxref("Element.children")}} を代わりに使用してください。

## 値

このノードの子を含む生きた {{domxref("NodeList")}} です。

> **Note:** `childNodes` を複数回呼び出しても、*同じ* {{domxref("NodeList")}} が返されます。

## 例

### 単純な使用方法

```js
// parg は <p> 要素へのオブジェクト参照です

// まず、要素に子ノードがあるかどうかをチェックします
if (parg.hasChildNodes()) {
  let children = parg.childNodes;

  for (let i = 0; i < children.length; i++) {
    // それぞれの子を children[i] として処理します
    // 注: リストは生きています。子を追加したり取り除いたりすると、リストの `length` が変わります
  }
}
```

### ノードからすべてての子を削除

```js
// これはあるノードからすべての子を取り除くための一つの方法です
// box はある要素へのオブジェクト参照です

while (box.firstChild) {
    // リストは生きているので、呼び出されるたびにインデックスが変わります
    box.removeChild(box.firstChild);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("Element.children")}}
