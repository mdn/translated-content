---
title: "ElementInternals: willValidate プロパティ"
short-title: willValidate
slug: Web/API/ElementInternals/willValidate
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`willValidate`** は {{domxref("ElementInternals")}} インターフェイスの読み取り専用プロパティで、この要素が[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の候補である送信可能要素である場合に `true` を返します。

制約検証の候補から除外される要素には、`disabled`、`hidden`、`readonly`の属性を持つ要素、`type=button` や `type=reset` の入力要素、{{htmlelement("datalist")}} 要素や `<datalist>` 要素の祖先を持つ要素などがあります。

## 値

要素が制約検証の候補であれば `true`、そうでなければ `false` です。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素の `formAssociated` プロパティが `true` に設定されていない場合に発生します。

## 例

次の例は `formAssociated` が `true` に設定されたカスタムチェックボックスコンポーネントを表示させており、`willValidate` の値はコンソールにログ出力されます。

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
console.log(element.internals_.willValidate); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
