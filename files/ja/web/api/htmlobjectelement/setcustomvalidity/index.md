---
title: "HTMLObjectElement: setCustomValidity() メソッド"
short-title: setCustomValidity()
slug: Web/API/HTMLObjectElement/setCustomValidity
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`setCustomValidity()`** は {{domxref("HTMLObjectElement")}} インターフェイスのメソッドで、この要素に独自の検証メッセージを設定します。

## 構文

```js-nolint
setCustomValidity(errorMessage)
```

### 引数

- `errorMessage`
  - : 検証エラーに使用するメッセージです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

なし。

## 例

この例では、 input 要素の ID を渡し、値が不足しているか、低すぎるか、高すぎるかによって、異なるエラーメッセージを設定します。さらに、同じ要素で [reportValidity](/ja/docs/Web/API/HTMLFormElement/reportValidity) メソッドを呼び出す必要があり、さもなければ何も起こりません。

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("ここに記入するんだ！");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("もっと高い数字が必要だ!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("高すぎる!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

エラーがない場合は、メッセージを空文字列に設定することが重要です。エラーメッセージが空でない限り、フォームは検証を通らず、送信されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('validityState')}}
- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.valid')}}
- {{domxref('validityState.customError')}}
