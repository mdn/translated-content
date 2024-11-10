---
title: "ElementInternals: shadowRoot プロパティ"
short-title: shadowRoot
slug: Web/API/ElementInternals/shadowRoot
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`shadowRoot`** は {{domxref("ElementInternals")}} インターフェイスの読み取り専用プロパティで、この要素のシャドウルート ({{domxref("ShadowRoot")}}) を返します。

## 値

この要素にシャドウルートがある場合は {{domxref("ShadowRoot")}}、それ以外の場合は `null` です。

## 例

次の例では、{{domxref("HTMLElement.attachInternals()")}} を呼び出した直後に、`shadowRoot` の値をコンソールに出力しています。この時点では値は `null` です。{{domxref("Element.attachShadow()")}} を呼び出した後、要素にはシャドウルートがあり、`shadowRoot` はそれを表すオブジェクトを返します。

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();

    console.log(this.internals_.shadowRoot); // null

    this.attachShadow({ mode: "open" });

    console.log(this.internals_.shadowRoot); // ShadowRoot オブジェクト
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
