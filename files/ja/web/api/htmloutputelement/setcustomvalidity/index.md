---
title: "HTMLOutputElement: setCustomValidity() メソッド"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`setCustomValidity()`** は {{DOMxRef("HTMLOutputElement")}} インターフェイスのメソッドで、この {{htmlelement("output")}} 要素の独自の検証メッセージを設定します。要素に独自の有効性エラーがないことを示すには、空文字列を使用します。

`<output>` 要素は、制約の妥当性検証の対象外です。{{DOMxRef("HTMLOutputElement.reportValidity()", "reportValidity()")}} メソッドを実行しても、ユーザーにカスタムエラーメッセージは表示されませんが、要素の {{DOMxRef("ValidityState")}} の {{DOMxRef("ValidityState.customError", "customError")}} プロパティを `true` に、{{DOMxRef("ValidityState.valid", "valid")}} プロパティを `false` に設定します。

## 構文

```js-nolint
setCustomValidity(string)
```

### 引数

- `string`
  - : エラーメッセージを含む文字列。空文字列を指定すると、独自の有効性エラーがすべて削除されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、`<output>` の {{domxref("HTMLOutputElement.value", "value")}} が 0 以外の数値でない場合、独自のエラーメッセージを設定します。数値である場合は、独自のエラーを空文字列に設定します。

```js
const cart = document.getElementById("cart-form");
const total = cart.elements("total");
if (parseFloat(total.value)) {
  errorOutput.setCustomValidity("");
} else {
  errorOutput.setCustomValidity("エラーがあります");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("output")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLOutputElement.validity")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{domxref("HTMLOutputElement.reportValidity()")}}
- [Form validation](/ja/docs/Web/HTML/Guides/Constraint_validation).
- [学習: クライアント側のフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
