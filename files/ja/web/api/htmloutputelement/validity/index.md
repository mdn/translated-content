---
title: "HTMLOutputElement: validity プロパティ"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`validity`** は {{domxref("HTMLOutputElement")}} インターフェイスの読み取り専用プロパティで、この要素が現在置かれている検証状態を表す {{domxref("ValidityState")}} オブジェクトを返します{{HTMLElement("output")}} 要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象となることはありませんが、独自の有効性メッセージが設定されている場合、検証状態が「無効な状態」となる可能性があります。

## 値

{{domxref("ValidityState")}} オブジェクトです。

## 例

次の例は、{{domxref("ValidityState/customError", "customError")}} が設定されている場合、`<output>` が無効な状態にあることを示しています。この状態では、{{domxref("HTMLOutputElement/checkValidity", "checkValidity()")}} は `true` を返しますが、`validityState` の `validity` プロパティは `false` となります。

```js
const output = document.getElementById("myOutput");
output.setCustomValidity("この object 要素は無効です。");
const validityState = output.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(output.checkValidity()); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [学習: クライアント側のフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
