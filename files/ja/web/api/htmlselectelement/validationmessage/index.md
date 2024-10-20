---
title: "HTMLSelectElement: validationMessage プロパティ"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

**`validationMessage`** は {{domxref("HTMLSelectElement")}} インターフェイスの読み取り専用プロパティで、{{htmlelement("select")}} コントロールが満たさない（もしあれば）検証制約を記述したローカライズされたメッセージを表す文字列を返します。これは、コントロールが制約検証の対象ではない場合（{{domxref("HTMLSelectElement.willValidate")}} が `false` の場合）、または制約を満たしている場合は空文字列となります。

もし、この `<select>` 要素が制約の検証対象（`willValidate` が `true`）であり、制約が満たされていない場合（{{domxref("HTMLSelectElement.validity")}} オブジェクトの `valid` プロパティが `false`）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 例

```js
const select = document.getElementById("mySelect");
const errorMessage = select.validationMessage;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("select")}}
- {{domxref("HTMLSelectElement")}}
- {{domxref("HTMLSelectElement.willValidate")}}
- {{domxref("HTMLSelectElement.validity")}}
- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{domxref("HTMLSelectElement.reportValidity()")}}
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
