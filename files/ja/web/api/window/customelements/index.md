---
title: "Window: customElements プロパティ"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: 26c6aca187b3718498886f9fba6c1cc4f4833b5d
---

{{APIRef("Web Components")}}

**`customElements`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、グローバルな {{domxref("CustomElementRegistry")}} オブジェクトへの参照を返します。これにより、新しい[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)を登録したり、以前に登録したカスタム要素に関する情報を取得したりすることができます。

グローバルレジストリーはデフォルトでカスタム要素の登録に使用されますが、シャドウルートでは、定義された要素名における潜在的な衝突を避けるために、[スコープ付きカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries)を使用することができます。

## 値

{{domxref("CustomElementRegistry")}} です。

## 例

### 基本的な使い方

このプロパティが使われている最も一般的な例は、新しいカスタム要素を定義・登録するために {{domxref("CustomElementRegistry.define()")}} メソッドにアクセスすることです。

例えば次のようにします。

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

なお、カスタム要素のクラスは、以下に示すように、通常は `define()` の呼び出しの直後に定義されます。

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("element-details-template");
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        document.importNode(template.content, true),
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
