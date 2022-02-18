---
title: CustomElementRegistry.get()
slug: Web/API/CustomElementRegistry/get
tags:
  - API
  - CustomElementRegistry
  - 実験的
  - メソッド
  - リファレンス
  - ウェブコンポーネント
  - カスタム要素
  - get
browser-compat: api.CustomElementRegistry.get
---
{{APIRef("CustomElementRegistry")}}

**`get()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、以前定義したカスタム要素のコンストラクターを返します。

## 構文

```js
constructor = customElements.get(name);
```

### 引数

- name
  - : コンストラクターの参照を返したいカスタム要素の名前です。

### 返値

名前付きのカスタム要素のコンストラクター、またはその名前のカスタム要素がない場合は `undefined` です。

## 例

```js
customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      let templateContent = document.getElementById('my-paragraph').content;
      super() // このスコープの要素を返す
        .attachShadow({mode: 'open'}) // this.shadowRoot を設定して返す
        .append(templateContent.cloneNode(true));
  }
})

// my-paragraph のコンストラクターの参照を返す
let ctor = customElements.get('my-paragraph');
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
