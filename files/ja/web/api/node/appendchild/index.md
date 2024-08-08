---
title: "Node: appendChild() メソッド"
slug: Web/API/Node/appendChild
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`appendChild()`** は {{domxref("Node")}} インターフェイスのメソッドで、指定された親ノードの子ノードリストの末尾にノードを追加します。追加しようとしたノードが既に存在していた場合は、 `appendChild()` はその子ノードを現在の位置から新しい位置へ移動します。

指定された子ノードが {{domxref("DocumentFragment")}} であった場合、その
{{domxref("DocumentFragment")}} の内容全体が指定された親ノードの子ノードリストに移動します。

`appendChild()` は、新しく追加されたノードを返します。また、子が {{domxref("DocumentFragment")}} であれば、空になったフラグメントを返します。

> [!NOTE]
> このメソッドとは異なり、 {{domxref("Element.append()")}} メソッドは複数の引数や文字列の追加に対応しています。ノードが要素であった場合は、こちらを使用することができます。

## 構文

```js-nolint
appendChild(aChild)
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
    - `aChild` を挿入すると {{domxref("Document")}} の子の {{domxref("Element")}} が複数になる場合。

## 解説

指定された子ノードが文書内の既存のノードへの参照である場合、 `appendChild()` はそのノードを現在の位置から新しい位置に移動させます。つまり、あるノードが文書内の2点に同時に存在することはできません。新しい親の下にノードを追加する前に、ノードのコピーを作成するには {{domxref("Node.cloneNode()")}} メソッドを使用することができます。`cloneNode` で作成されたコピーは、自動的に同期されるわけではありません。

`appendChild()`は親ノードではなく、新しく追加されたノードを返します。つまり、新しいノードが作成されたらすぐに、そのノードへの参照を失うことなく、追加することができます。

```js
const paragraph = document.body.appendChild(document.createElement("p"));
// 段落に後から要素を追加することも可能です
```

一方で、`appendChild()` は [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) 流に（JQuery のように）使用することはできません。

```js example-bad
// 3 つの段落を追加することはできません。
// 代わりに、3 つの段落は入れ子になります。
document.body
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"));
```

## 例

### 本文に段落を追加

```js
// 新しい段落要素を作成し、文書の body の末尾に追加します。
const p = document.createElement("p");
document.body.appendChild(p);
```

### 入れ子構造の DOM の作成

この例では、いくつかある一時変数をできるだけ使用して、入れ子の DOM 構造を作成することを試みています。

```js
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);
```

以下のような DOM ツリーが生成されます。

```html
<section>
  <ul>
    <li>hello world</li>
  </ul>
</section>
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
