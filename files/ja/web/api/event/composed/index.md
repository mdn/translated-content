---
title: "Event: composed プロパティ"
short-title: composed
slug: Web/API/Event/composed
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM")}}

**`composed`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントがシャドウ DOM 境界を越えて標準 DOM に伝播するかどうかを示す論理値を返すものです。

UA から送られるすべての UI イベントは合成されます（クリック/タッチ/マウスオーバー/コピー/ペーストなど）。他のほとんどの種類のイベントは合成されないので、`false` を返します。これには、例えば `composed` オプションを `true` に設定せずに作成された合成イベントも含まれます。

伝播は {{domxref("Event.bubbles", "bubbles")}} プロパティが `true` である場合にのみ発生します。ただし、合成されたイベントのみをキャプチャした場合は、ホスト側でも `AT_TARGET` フェーズであるかのように処理されます。イベントがシャドウルートを通って DOM ルートに到達するパスを決定するには、 {{domxref("Event.composedPath", "composedPath()")}} を呼び出すことで行えます。

## 値

論理値で、イベントがシャドウルート（つまり、シャドウ DOM の中で、イベントが伝播し始めた最初のノード）に到達した後、シャドウ DOM から標準 DOM に伝播する場合は `true` となります。

この値が `false` の場合、シャドウルートはイベントが提供される最後のノードとなります。

## 例

この[例](https://mdn.github.io/web-components-examples/composed-composed-path/)では、`<open-shadow>` と `<closed-shadow>` という 2 つの些細なカスタム要素を定義しています。どちらも text 属性の内容を `<p>` 要素のテキストコンテンツとして、要素のシャドウ DOM に挿入します。両者の唯一の違いは、シャドウルートがそれぞれ `open` と `closed` に設定された状態で取り付けられることです。

2 つの定義は次のようになります。

```js
customElements.define(
  "open-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({
        mode: "open",
      });

      shadowRoot.appendChild(pElem);
    }
  },
);

customElements.define(
  "closed-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({
        mode: "closed",
      });

      shadowRoot.appendChild(pElem);
    }
  },
);
```

それからそれぞれの要素を 1 つずつをページに挿入します。

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

それから click イベントリスナーを `<html>` 要素に設定します。

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

まず `<open-shadow>` 要素をクリックし、次に `<closed-shadow>` 要素をクリックすると、 2 つのことに気がつきます。

1. `click` イベントは常にシャドウの境界を越えて伝播することができるため、 `composed` プロパティは `true` を返します。
2. 2 つの要素の `composedPath` の値に違いがあります。

`<open-shadow>` 要素の合成パスは次の通りです。

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

それに対して `<closed-shadow>` 要素の合成パスは次の通りです。

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

2 番目の場合、イベントリスナーは `<closed-shadow>` 要素自身までしか伝播せず、シャドウ境界の内側のノードには伝播しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
