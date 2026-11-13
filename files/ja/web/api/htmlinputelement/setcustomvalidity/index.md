---
title: "HTMLInputElement: setCustomValidity() メソッド"
short-title: setCustomValidity()
slug: Web/API/HTMLInputElement/setCustomValidity
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement.setCustomValidity()`** メソッドは、その要素にカスタム検証メッセージを設定します。

## 構文

```js-nolint
setCustomValidity(message)
```

### 引数

- `message`
  - : 検証エラーに使用するメッセージです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

なし。

## 例

この例では、 input 要素の ID を渡し、値が不足しているか、低すぎるか、高すぎるかによって、異なるエラーメッセージを設定します。さらに、同じ要素で [`reportValidity()`](/ja/docs/Web/API/HTMLInputElement/reportValidity) メソッドを呼び出す必要があります。そうしないと何も起こりません。

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("That's too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

エラーがない場合は、メッセージを空文字列に設定することが重要です。エラーメッセージが空でない限り、フォームは検証を通過せず、送信されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- {{domxref('ValidityState')}}
