---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.previousSibling
translation_of: Web/API/Node/previousSibling
---
{{APIRef("DOM")}}

**`previousSibling`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、指定されたノードの親ノードの {{domxref("Node.childNodes", "childNodes")}} リスト内で、直前にある ノードを返します。指定されたノードがリストの先頭にあった倍は `null` を返します。

> **Note:** ブラウザーはソースのマークアップにあるホワイトスペースを表すために、文書にテキストノードを挿入します。
> そのため、例えば [`Node.firstChild`](/ja/docs/Web/API/Node/firstChild) や `Node.previousSibling` を使用して得たノードが、取得しようとした実際のノードではなく、ホワイトスペースのテキストノードであることがあります。
>
> [DOM でのホワイトスペース](/ja/docs/Web/API/Document_Object_Model/Whitespace)の記事に、この動作に関する詳しい情報があります。
>
> [`previousElementSibling`](/ja/docs/Web/API/Element/previousElementSibling) を使用すると、（テキストノードやその他の要素以外のノードを飛ばして）次の要素を取得することができます。
>
> 子ノードのリストで反対方向に移動する場合は、 [Node.nextSibling](/ja/docs/Web/API/Node/nextSibling) を使用してください。

## 値

現在のノードの直前のノードを表す {{domxref("Node")}} です。
存在しない場合は `null` です。

## 例

次の例では、要素にテキストノードがある場合とない場合の `previousSibling` の動作を示しています。

### 最初の例

この例では、一連の `img` 要素が互いに隣り合っており、その間にホワイトスペースがありません。

```html
<img id="b0"><img id="b1"><img id="b2">
```

```js
document.getElementById("b1").previousSibling;    // <img id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

### 2 番目の例

この例では、 `img` 要素の間にホワイトスペースのテキストノード（改行）があります。

```html
<img id="b0">
<img id="b1">
<img id="b2">
```

```js
document.getElementById("b1").previousSibling;                 // #text
document.getElementById("b1").previousSibling.previousSibling; // <img id="b0">
document.getElementById("b2").previousSibling.previousSibling; // <img id="b1">
document.getElementById("b2").previousSibling;                 // #text
document.getElementById("b2").previousSibling.id;              // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.nextSibling")}}
- {{domxref("Element.previousElementSibling")}}
