---
title: "CustomElementRegistry: get() メソッド"
short-title: get()
slug: Web/API/CustomElementRegistry/get
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

**`get()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、以前定義したカスタム要素のコンストラクターを返します。

## 構文

```js-nolint
get(name)
```

### 引数

- `name`
  - : カスタム要素の名前です。

### 返値

名前付きのカスタム要素のコンストラクター、またはその名前のカスタム要素がない場合は {{jsxref("undefined")}} です。

## 例

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      const template = document.getElementById("custom-paragraph");
      super() // このスコープの要素を返す
        .attachShadow({ mode: "open" }) // this.shadowRoot を設定して返す
        .append(document.importNode(template.content, true));
    }
  },
);

// my-paragraph のコンストラクターの参照を返す
const ctor = customElements.get("my-paragraph");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
