---
title: Event.composedPath()
slug: Web/API/Event/composedPath
tags:
  - メソッド
  - リファレンス
  - ウェブコンポーネント
browser-compat: api.Event.composedPath
---
{{APIRef("Shadow DOM")}}

**`composedPath()`** は {{domxref("Event")}} インターフェイスのメソッドで、イベントの経路をリスナーが呼び出されるオブジェクトの配列で返します。シャドウルートが {{domxref("ShadowRoot.mode")}} が closed の状態で作成された場合、シャドウツリーのノードは含まれません。

## 構文

```js
var composed = Event.composedPath();
```

### 引数

なし。

### 返値

{{domxref("EventTarget")}} オブジェクトの配列で、イベントリスナーが呼び出される予定の一連のオブジェクトを表します。

## 例

この[例](https://mdn.github.io/web-components-examples/composed-composed-path/)では、`<open-shadow>` と `<closed-shadow>` という 2 つの些細なカスタム要素を定義しています。どちらも text 属性の内容を `<p>` 要素のテキストコンテンツとして、要素のシャドウ DOM に挿入します。両者の唯一の違いは、シャドウルートがそれぞれ `open` と `closed` に設定された状態で取り付けられることです。

最初の定義は次のようになります。

```js
customElements.define('open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      let pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(pElem);

  }
});
```

それからそれぞれの要素を 1 つずつをページに挿入します。

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

それから click イベントリスナーを `<html>` 要素に設定します。

```js
document.querySelector('html').addEventListener('click',function(e) {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

まず `<open-shadow>` 要素をクリックし、次に `<closed-shadow>` 要素をクリックすると、 2 つのことに気がつきます。第 1 に、 `click` イベントは常にシャドウの境界を越えて伝搬することができるため、 `composed` プロパティは `true` を返します。第 2 に、 2 つの要素の `composedPath` の値に違いがあります。

`<open-shadow>` 要素の合成パスは次の通りです。

```js
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

それに対して `<closed-shadow>` 要素の合成パスは次の通りです。

```js
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

2 番目の場合、イベントリスナーは `<closed-shadow>` 要素自身までしか伝搬せず、シャドウ境界の内側のノードには伝搬しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
