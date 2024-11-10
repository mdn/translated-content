---
title: "HTMLTextAreaElement: validationMessage プロパティ"
short-title: validationMessage
slug: Web/API/HTMLTextAreaElement/validationMessage
l10n:
  sourceCommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{APIRef("HTML DOM")}}

**`validationMessage`** は {{domxref("HTMLTextAreaElement")}} インターフェイスの読み取り専用プロパティで、この {{htmlelement("textarea")}} コントロールが満たしていない検証制約をを記述したローカライズされたメッセージを表す文字列を（もしあれば）返します。 コントロールが制約検証の対象ではない場合（{{domxref("HTMLTextAreaElement.willValidate")}} が `false` の場合）、または制約を満たしている場合は、空文字列が返されます。

もし、この `<textarea>` 要素が制約検証の対象（`willValidate` が `true`）であり、制約が満たされていない場合（{{domxref("HTMLInputElement.validity")}} オブジェクトの `valid` プロパティが `false`）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 例

```js
const textarea = document.getElementById("myTextArea");
const errorMessage = textarea.validationMessage;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.willValidate")}}
- {{domxref("HTMLTextAreaElement.validity")}}
- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{domxref("HTMLTextAreaElement.setCustomValidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
