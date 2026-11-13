---
title: "CustomElementRegistry: getName() メソッド"
short-title: getName()
slug: Web/API/CustomElementRegistry/getName
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

**`getName()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、以前に定義されたカスタム要素の名前を返します。

## 構文

```js-nolint
getName(constructor)
```

### 引数

- `constructor`
  - : カスタム要素のコンストラクターです。

### 返値

以前に定義されたカスタム要素の名前。コンストラクターで定義されたカスタム要素がない場合は `null` となります。

## 例

```js
class MyParagraph extends HTMLElement {
  constructor() {
    const template = document.getElementById("custom-paragraph");
    super() // このスコープの要素を返す
      .attachShadow({ mode: "open" }) // this.shadowRoot を設定して返す
      .append(document.importNode(template.content, true));
  }
}

customElements.define("my-paragraph", MyParagraph);

// my-paragraph のコンストラクターの参照を返す
customElements.getName(MyParagraph) === "my-paragraph";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
