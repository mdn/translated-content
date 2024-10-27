---
title: "HTMLButtonElement: reportValidity() メソッド"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
l10n:
  sourceCommit: 8ec1d24d4f935e73f39df9a7d69e58c098ebb003
---

{{APIRef("HTML DOM")}}

**`reportValidity()`** は {{domxref("HTMLButtonElement")}} インターフェイスのメソッドで、 {{domxref("HTMLButtonElement.checkValidity", "checkValidity()")}} メソッドと同じ検証のチェック手順を実行します。値が無効であった場合、このメソッドはその要素に {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントを発行し、（そのイベントがキャンセルされなければ）ユーザーに問題を報告します。

## 構文

```js-nolint
reportValidity()
```

### 引数

なし。

### 返値

要素を検証して問題がなければ `true` を返し、それ以外の場合は `false` を返します。

### 例

この突飛な例は、ボタンを不正なものにする方法を示しています。

#### HTML

いくつかのボタンだけを設置したフォームを作成します。

```html
<form action="#" id="form" method="post">
  <p>
    <input type="submit" value="送信" />
    <button id="example" type="submit" value="fixed">このボタン</button>
  </p>
  <p>
    <button type="button" id="report">reportValidity()</button>
  </p>
</form>

<p id="log"></p>
```

#### CSS

CSS を少し追加し、ボタンに `:valid` および `:invalid` スタイルを設定します。

```css
input[type="submit"],
button {
  background-color: #33a;
  border: none;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: white;
}
button:invalid {
  background-color: #a33;
}
button:valid {
  background-color: #3a3;
}
```

#### JavaScript

この例のボタンに値、内容、検証メッセージの切り替え機能を設置します。

```js
const reportButton = document.querySelector("#report");
const exampleButton = document.querySelector("#example");
const output = document.querySelector("#log");

reportButton.addEventListener("click", () => {
  const reportVal = exampleButton.reportValidity();
  output.innerHTML = `reportValidity の返値: ${reportVal} <br/> 独自のエラー: ${exampleButton.validationMessage}`;
});

exampleButton.addEventListener("invalid", () => {
  console.log("exampleButton で invalid イベントが発行されました。");
});

exampleButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (exampleButton.value == "error") {
    breakOrFixButton("fixed");
  } else {
    breakOrFixButton("error");
  }
  output.innerHTML = `検証メッセージ: ${exampleButton.validationMessage} <br/> 独自のエラー: ${exampleButton.validationMessage}`;
});

const breakOrFixButton = () => {
  const state = toggleButton();
  if (state == "error") {
    exampleButton.setCustomValidity("これは独自のエラーメッセージです。");
  } else {
    exampleButton.setCustomValidity("");
  }
};

const toggleButton = () => {
  if (exampleButton.value == "error") {
    exampleButton.value = "fixed";
    exampleButton.innerHTML = "エラーなし";
  } else {
    exampleButton.value = "error";
    exampleButton.innerHTML = "独自のエラー";
  }
  return exampleButton.value;
};
```

#### 結果

{{EmbedLiveSample("Custom error message", "100%", 220)}}

ボタンは既定で有効です。［このボタン］を有効にすると、値やコンテンツを変更したり、独自のエラーメッセージを追加したりすることができます。［reportValidity()］ ボタンを有効にすると、ボタンの有効性が確認され、独自のエラーメッセージがユーザーに報告され、メッセージによりボタンが制約検証を通らない場合は `invalid` イベントが発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
