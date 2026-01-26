---
title: "HTMLButtonElement: validationMessage プロパティ"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

**`validationMessage`** は {{domxref("HTMLButtonElement")}} インターフェイスの読み取り専用プロパティで、（もしあれば）この {{htmlelement("button")}} コントロールが満たさない検証制約を記述したローカライズされたメッセージを表す文字列を返します。このコントロールが制約検証の対象ではない場合（`<button>` の [`type`](/ja/docs/Web/HTML/Reference/Elements/button#type) が `button` または `reset` である場合）、または制約を満たしている場合は空文字列となります。

もし、この `<button>` が制約検証の対象であり（`type` が `submit` に設定されているか既定値、または{{domxref("HTMLButtonElement.willValidate")}} が `true`）、制約が満たされていない場合（{{domxref("ValidityState.customError")}} が null でない）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("button")}}
- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLButtonElement.willValidate")}}
- {{domxref("HTMLButtonElement.validity")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{domxref("HTMLButtonElement.setCustomValidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
