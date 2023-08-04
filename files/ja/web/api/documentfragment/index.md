---
title: DocumentFragment
slug: Web/API/DocumentFragment
l10n:
  sourceCommit: 8f91a466f5a6d1e238ed209f36f9b506fc73ee0d
---

{{ APIRef("DOM") }}

**`DocumentFragment`** インターフェイスは、親ノードを持たない最小限の文書オブジェクト（文書フラグメント）を表します。

これは {{domxref("Document")}} の軽量版として使用され、標準の文書のようにノードで構成される文書構造の一区間を格納します。重要な違いは、文書フラグメントがアクティブな文書ツリー構造の一部ではないことです。フラグメントに対して変更を行っても、文書には影響しません。

{{InheritanceDiagram}}

## コンストラクター

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : 新しい `DocumentFragment` オブジェクトを作成して返します。

## インスタンスプロパティ

_このインターフェイスには固有のプロパティはありませんが、その親である {{domxref("Node")}} から継承したプロパティがあります。_

- {{ domxref("DocumentFragment.childElementCount") }} {{ReadOnlyInline}}
  - : この `DocumentFragment` が持つ子{{domxref("Element","要素")}}の数を表します。
- {{ domxref("DocumentFragment.children") }} {{ReadOnlyInline}}
  - : この `DocumentFragment` オブジェクトの子であるすべての {{domxref("Element")}} 型のオブジェクトを含む、生きた {{domxref("HTMLCollection")}} を返します。
- {{ domxref("DocumentFragment.firstElementChild") }} {{ReadOnlyInline}}
  - : この `DocumentFragment` オブジェクトの最初の子である {{domxref("Element")}} を返します。なければ `null` を返します。
- {{ domxref("DocumentFragment.lastElementChild") }} {{ReadOnlyInline}}
  - : この `DocumentFragment` オブジェクトの最後の子である {{domxref("Element")}} を返します。なければ `null` を返します。

## インスタンスメソッド

_このインターフェイスには、その親である {{domxref("Node")}} から継承したメソッドがあります。_

- {{DOMxRef("DocumentFragment.append()")}}
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この文書フラグメントの最後の子の後に追加します。
- {{DOMxRef("DocumentFragment.prepend()")}}
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この文書フラグメントの最初の子の前に追加します。
- {{domxref("DocumentFragment.querySelector()")}}
  - : この `DocumentFragment` の中で、文書の順序で見た場合に、指定されたセレクターに一致する最初の {{domxref("Element")}} ノードを返します。
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : この `DocumentFragment` の中で、指定されたセレクターに一致するすべての {{domxref("Element")}} ノードの {{domxref("NodeList")}} を返します。
- {{DOMxRef("DocumentFragment.replaceChildren()")}}
  - : `DocumentFragment` の既存の子を、指定された一連の新しい子で置き換えます。
- {{domxref("DocumentFragment.getElementById()")}}
  - : この `DocumentFragment` の中で、文書の順序で見た場合に、指定された ID に一致する最初の {{domxref("Element")}} ノードを返します。機能的には {{domxref("Document.getElementById()")}} と同じです。

## 使用上の注意

`DocumentFragment` の一般的な使用方法は、フラグメントを作成し、その中で DOM サブツリーを組み立て、{{domxref("Node")}} インターフェイスのメソッド、例えば {{domxref("Node.appendChild", "appendChild()")}}、{{domxref("Element.append", "append()")}}、{{domxref("Node.insertBefore", "insertBefore()")}} などを用いて、フラグメントを DOM に追加または挿入することです。 これにより、フラグメントのノードが DOM 内へ移動し、空の `DocumentFragment` が残ります。

このインターフェイスは、ウェブコンポーネントでも活躍します。{{HTMLElement("template")}} 要素は `DocumentFragment` を {{domxref("HTMLTemplateElement.content")}} プロパティに保持しています。

空の `DocumentFragment` は {{domxref("document.createDocumentFragment()")}} メソッドまたはコンストラクターで作成することができます。

## 性能

`DocumentFragment` の性能が高いということは、よく誇張されています。エンジンによっては `DocumentFragment` を使用すると、実際には、ループで文書に追加していくするよりも遅くなる場合があることが[このベンチマーク](https://jsbench.me/02l63eic9j/1)で示されています。しかし、この例の違いは非常に小さいので、性能よりも読みやすさを重視して最適化した方がいいでしょう。

## 例

### HTML

```html
<ul></ul>
```

### JavaScript

```js
const ul = document.querySelector("ul");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.append(li);
}

ul.append(fragment);
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
