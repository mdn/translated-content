---
title: "HTMLInputElement: validationMessage プロパティ"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

**`validationMessage`** は {{domxref("HTMLInputElement")}} インターフェイスの読み取り専用プロパティで、（もしあれば）この {{htmlelement("input")}} コントロールが満たしていない検証制約を記述したローカライズされたメッセージを表す文字列を返します。

この `<input>` 要素が制約検証の対象ではない場合（{{domxref("HTMLInputElement.willValidate")}} が `false` の場合）、または制約を満たしている場合は空文字列 (`""`) となります。

もし、この要素が制約の検証対象（`willValidate` が `true`）であり、制約が満たされていない場合（{{domxref("HTMLInputElement.validity")}} オブジェクトの `valid` プロパティが `false`）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 例

```js
const input = document.getElementById("myInput");
const errorMessage = input.validationMessage;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.willValidate")}}
- {{domxref("HTMLInputElement.validity")}}
- {{domxref("HTMLInputElement.checkValidity()")}}
- {{domxref("HTMLInputElement.reportValidity()")}}
- {{domxref("HTMLInputElement.setCustomValidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
