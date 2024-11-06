---
title: "ElementInternals: form プロパティ"
short-title: form
slug: Web/API/ElementInternals/form
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`form`** は {{domxref("ElementInternals")}} インターフェイスの読み取り専用プロパティで、この要素に関連付けられた {{domxref("HTMLFormElement")}} を返します。

## 値

{{domxref("HTMLFormElement")}} です。

## 例

次の例では、 ID が `myForm` のフォーム内にカスタムチェックボックスコンポーネントを配置しています。
コンソールに `form.length` を出力すると、 {{domxref("HTMLFormElement.length")}} という値が得られます。

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <custom-label for="custom-checkbox">Join newsletter</custom-label>
</form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;
  #internals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    console.log(this.#internals.form.length);
  }
}

window.customElements.define("custom-checkbox", CustomCheckbox);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
