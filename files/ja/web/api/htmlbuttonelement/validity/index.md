---
title: "HTMLButtonElement: validity プロパティ"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

**`validity`** は {{domxref("HTMLButtonElement")}} インターフェイスの読み取り専用プロパティで、この要素の有効状態を表す {{domxref("ValidityState")}} オブジェクトを返します。

## 値

{{domxref("ValidityState")}} オブジェクトです。

## 例

次の例は、 `<button>` に {{domxref("ValidityState/customError", "customError")}} が設定されている場合、不正な状態にあることを示しています。この状態では、`validityState` の `validity` プロパティは `false` ですが、{{domxref("HTMLButtonElement/checkValidity", "checkValidity()")}} は、ボタンの {{domxref("HTMLButtonElement/type", "type")}} が `"submit"` でない場合、[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象ではないため、`true` を返します。

```js
const button = document.getElementById("myButton");
button.setCustomValidity("This button is invalid.");
const validityState = button.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(button.checkValidity()); // ボタンの種類が "submit" の場合は false、そうでなければ true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
