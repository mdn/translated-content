---
title: "ElementInternals: validity プロパティ"
short-title: validity
slug: Web/API/ElementInternals/validity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`validity`** は {{domxref("ElementInternals")}} インターフェイスの読み取り専用プロパティで、制約検証に関して要素が取り得るさまざまな検証状態を表す {{domxref("ValidityState")}} オブジェクトを返します。

## 値

{{domxref("ValidityState")}} オブジェクトです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素が `formAssociated` プロパティが `true` に設定されていない場合に発生します。

## 例

次の例は、`formAssociated` を `true` に設定したカスタムチェックボックスコンポーネントを表示させており、`validity.valid` の値がコンソールにログ出力されます。

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.validity.valid);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
