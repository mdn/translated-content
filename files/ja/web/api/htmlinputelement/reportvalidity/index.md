---
title: "HTMLInputElement: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref('HTMLInputElement')}} インターフェイスのメソッドで、 {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}} メソッドと同じ検証のチェック手順を実行します。値が無効であった場合、このメソッドはその要素に {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを発行し、（そのイベントがキャンセルされなければ）ユーザーに問題を報告します。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

要素を検証して問題がなければ `true` を返し、それ以外の場合は `false` を返します。

## 例

### 基本的な使用

#### HTML

必須の数値フィールドと、フォームのチェックボタンと送信ボタンの 2 つのボタンを設置したフォームを設置します。

```html
<form action="#" method="post">
  <p>
    <label for="age">年齢 (21 ～ 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">送信</button>
    <button type="button" id="report">reportValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

#### JavaScript

"reportValidity()" ボタンが押された場合、`reportValidity()` メソッドを使用して、入力値が制約を満たしているかどうかを確認します。返値をログに記録します。`false` の場合、検証メッセージも表示し、`invalid` イベントを捕捉します。

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("invalid イベントが発行されました。");
});

reportButton.addEventListener("click", () => {
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" の返値: ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />検証メッセージ: "${ageInput.validationMessage}"`;
  }
});
```

#### 結果

{{EmbedLiveSample("基本的な使用", "100%", 120)}}

`false` の場合、値が未入力、21 未満、65 超、または無効な場合、invalid イベントがコンソールに記録されます。

### 独自のエラーメッセージ

この例は、独自のエラーメッセージが、値が有効であるにもかかわらず、`false` の返値を引き起こす可能性があることを示しています。

#### HTML

前の例の HTML に［問題を修正］ボタンを追加します。

```html-nolint hidden
<form action="#" method="post">
  <p>
    <label for="age">年齢 (21 ～ 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">送信</button>
    <button type="button" id="report">reportValidity()</button>
```

```html
<button type="button" id="fix">問題を修正</button>
```

```html-nolint hidden
   </p>
<p id="log"></p>
</form>
```

#### JavaScript

上記の基本例の JavaScript を拡張し、{{domxref("HTMLInputElement.setCustomValidity()")}} メソッドを使用して独自のエラーメッセージを提供する関数を追加します。 `validateAge()` 関数は、入力が有効であり、`enableValidation` 変数が `true` の場合にのみエラーメッセージを空文字列に設定します。ただし、`enableValidation` は［問題を修正］ボタンが押されるまでは `false` になります。

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");
const fixButton = document.querySelector("#fix");
let enableValidation = false;

fixButton.addEventListener("click", (e) => {
  enableValidation = true;
  fixButton.innerHTML = "エラーを修正しました";
  fixButton.disabled = true;
});

reportButton.addEventListener("click", () => {
  validateAge();
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" の返値: ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />検証メッセージ: "${ageInput.validationMessage}"`;
  }
});

const validateAge = () => {
  const validityState_object = ageInput.validity;
  if (validityState_object.valueMissing) {
    ageInput.setCustomValidity("年齢を入力してください（必須）");
  } else if (ageInput.rangeUnderflow) {
    ageInput.setCustomValidity("値が小さすぎます");
  } else if (ageInput.rangeOverflow) {
    ageInput.setCustomValidity("値が大きすぎます");
  } else if (enableValidation) {
    // 有効でかつ enableValidation が true に設定されている場合は true
    ageInput.setCustomValidity("");
  }
};
```

#### 結果

{{EmbedLiveSample("独自のエラーメッセージ", "100%", 120)}}

年齢を入力する前に［reportValidity()］ボタンを起動すると、`required` の制約検証を満たさないため、`reportValidity()` メソッドは `false` を返します。このメソッドは入力に対して `invalid` イベントを発生させ、ユーザーに問題を報告し、独自のエラーメッセージ「年齢を入力してください（必須）」を表示します。独自のエラーメッセージが設定されている限り、［reportValidity()］ボタンを起動すると、有効な年齢を選択してもエラーが表示され続けます。検証を有効にするには、独自のエラーメッセージを空文字列に設定する必要があります。これは、［問題を修正］ボタンをクリックすることで行います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
