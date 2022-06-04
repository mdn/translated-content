---
title: Node.appendChild()
slug: Web/API/Node/appendChild
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.appendChild
translation_of: Web/API/Node/appendChild
---
{{APIRef("DOM")}}

**`appendChild()`** は {{domxref("Node")}} インターフェイスのメソッドで、指定された親ノードの子ノードリストの末尾にノードを追加します。追加しようとしたノードが既に存在していた場合は、 `appendChild()` はその子ノードを現在の位置から新しい位置へ移動します（他のノードに追加する前に、そのノードを親ノードから取り除く必要はありません）。

これは、 1 つのノードが同時に文書の 2 か所に存在できないということです。したがって、すでにノードに親がある場合、最初にノードが取り除かれた後、新しい位置に追加されます。
{{domxref("Node.cloneNode()")}} メソッドを使用すると、新しい親ノード以下に追加する前に、ノードのコピーを作成することができます。
`cloneNode` で作成したコピーは自動的に同期されません。

指定された子ノードが {{domxref("DocumentFragment")}} であった場合、その 
{{domxref("DocumentFragment")}} の内容全体が指定された親ノードの子ノードリストに移動します。

> **Note:** このメソッドとは異なり、 {{domxref("Element.append()")}} メソッドは複数の引数や文字列の追加に対応しています。ノードが要素であった場合は、こちらを使用することができます。

`appendChild()` は子要素を返すので、メソッドチェーンは動作しません。

```js
let aBlock = document.createElement('block').appendChild( document.createElement('b') );
```

`aBlock` に `<b></b>` を追加するだけですが、 `block` に対して複数の `appendChild` を連鎖させるなど、それ以外の操作を連鎖せることはできません。

## 構文

```js
appendChild(aChild);
```

### 引数

- `aChild`
  - : 指定された親ノードに追加するノード（ふつうは要素）。

### 返値

{{domxref("Node")}} で追加された子ノード (`aChild`) を返します。
ただし、 `aChild` が {{domxref("DocumentFragment")}} であった場合は、空の {{domxref("DocumentFragment")}} を返します。

### 例外

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : DOM ツリーの制約に違反した場合に発生します。すなわち、以下のいずれかが発生する場合です。
    - `aChild` の親が {{domxref("Document")}}, {{domxref("DocumentFragment")}}, {{domxref("Element")}} のいずれにもならない場合。
    - `aChild` を挿入すると循環参照になる場合。すなわち `aChild` がこのノードの祖先である場合。
    - `aChild` が {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Element")}}, {{domxref("CharacterData")}} のいずれでもない場合。
    - 現在のノードが {{domxref("Text")}} であり、親ノードが {{domxref("Document")}} になる場合。
    - 現在のノードが {{domxref("DocumentType")}} であり、その親が {{domxref("Document")}} にならない場合。 _doctype_ は常に _document_ の直下になければならないからです。
    - このノードの親が {{domxref("Document")}} で `aChild` が {{domxref("DocumentFragment")}} であり、複数の {{domxref("Element")}} の子、または {{domxref("Text")}} の子がある場合。
    -`aChild` を挿入すると {{domxref("Document")}} の子の {{domxref("Element")}} が複数になる場合。

## 例

```js
// 新しい段落要素を作成し、文書の body の末尾に追加します。
let p = document.createElement("p");
document.body.appendChild(p);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.append()")}}
