---
title: "CustomElementRegistry: upgrade() メソッド"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

**`upgrade()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、 {{domxref("Node")}} サブツリー内のすべてのシャドウを含むカスタム要素を、メイン文書に接続する前であってもアップグレードします。

## 構文

```js-nolint
upgrade(root)
```

### 引数

- `root`
  - : アップグレードする、シャドウを含む子孫要素を持つ {{domxref("Node")}} インスタンス。アップグレード可能な子孫要素がない場合、エラーは発生しません。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

HTML 要素が構文解析または作成される際、[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)に対応するタグ名（例: `<my-element>`）が使用されることがあります。要素が作成された時点で、そのカスタム要素のクラスが適切な {{domxref("CustomElementRegistry")}} にまだ登録されていない場合、その要素は未定義の単純な {{domxref("HTMLElement")}} として存在します。これは、他の未知の要素と同様に表示され、動作します。特別な動作やライフサイクルコールバック、独自のプロトタイプメソッドを持たないからです。

**アップグレード**とは、そのような要素の定義が利用できるようになった時点で、その要素を遡及的に本格的な独自の要素に昇格させるプロセスです。要素がアップグレードされると、次のようになります。

1. プロトタイプが、{{domxref("CustomElementRegistry.define()", "define()")}} で登録されたカスタム要素のクラスに置き換えられます。
2. その {{domxref("HTMLElement/connectedCallback", "connectedCallback()")}} およびその他の適切な[ライフサイクルコールバック](/ja/docs/Web/API/Web_components/Using_custom_elements#カスタム要素のライフサイクルコールバック)が呼び出されます。
3. クラスが {{domxref("HTMLElement/observedAttributes", "observedAttributes")}} を定義している場合、すでに値が示されているそれぞれの属性について、{{domxref("HTMLElement/attributeChangedCallback", "attributeChangedCallback()")}} が呼び出されます。

通常、要素は `define()` を通じて定義が登録されると自動的にアップグレードされますが、これはその要素がすでに文書に接続されている場合に限られます。`upgrade()` メソッドは、文書に挿入される前に、接続されていない DOM サブツリー内にある要素（例えば、{{domxref("Document.createElement()")}} によって作成された要素や、{{domxref("DocumentFragment")}} の中に構文解析された要素など）をアップグレードする必要がある場合に役立ちます。

## 例

[HTML 仕様書](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade) から取りました。

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // まだアップグレードされていない

customElements.upgrade(el);
console.assert(el instanceof SpiderMan); // アップグレードされた
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
