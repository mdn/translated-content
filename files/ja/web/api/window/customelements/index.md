---
title: "Window: customElements プロパティ"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`customElements`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、 {{domxref("CustomElementRegistry")}} オブジェクトへのリファレンスを返します。これにより、新しい[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)を登録したり、以前に登録したカスタム要素に関する情報を取得したりすることができます。

## 例

このプロパティが使われている最も一般的な例は、新しいカスタム要素を定義・登録するために {{domxref("CustomElementRegistry.define()")}} メソッドにアクセスすることです。例えば次のようにします。

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

しかし、ふつうは以下のように短縮します。

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

[web-components-examples](https://github.com/mdn/web-components-examples/) リポジトリーにより多くの使用例がありますので参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
