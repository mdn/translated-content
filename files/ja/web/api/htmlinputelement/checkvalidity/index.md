---
title: "HTMLInputElement: checkValidity() メソッド"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

**`checkValidity()`** は {{domxref("HTMLInputElement")}} インターフェイスのメソッドで、その要素が適用された[制約検証](/ja/docs/Web/HTML/Constraint_validation)ルールを満たしているかどうかを示す論理値を返します。false の場合は、メソッドは要素上で {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントも発行します。`checkValidity()` には既定でブラウザーの動作が設定されていないため、この `invalid` イベントをキャンセルしても効果はありません。

> [!NOTE]
> HTML の {{htmlelement("input")}} 要素で、{{domxref("HTMLInputElement.validationMessage", "validationMessage")}} が null 以外の値を持つものは不正なものと見なされ、CSS の {{cssxref(":invalid")}} 擬似クラスに一致し、`checkValidity()` が false を返すようになります。 {{domxref("HTMLInputElement.setCustomValidity()")}} メソッドを使用して、{{domxref("HTMLInputElement.validationMessage")}} を空文字列に設定すると、{{domxref("HTMLInputElement.validity", "validity")}} 状態が妥当となります。

## 構文

```js-nolint
checkValidity()
```

### 引数

なし。

### 返値

要素の値に妥当性の問題がなければ `true` を返し、そうでなければ `false` を返します。

## 例

### HTML

必須の数値フィールドと、フォームのチェックボタンと送信ボタンの 2 つのボタンを設置したフォームを設置します。

```html
<form action="#" method="post">
  <p>
    <label for="age">年齢 (21 ～ 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">送信</button>
    <button type="button" id="check">checkValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

### JavaScript

```js
const output = document.querySelector("#log");
const checkButton = document.querySelector("#check");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("invalid イベントが発行されました。");
});

checkButton.addEventListener("click", () => {
  const checkVal = ageInput.checkValidity();
  output.innerHTML = `checkValidity が ${checkVal} を返しました。`;
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 220)}}

`false` の場合、値が未入力、21 未満、65 超、または無効な場合、invalid イベントがコンソールに記録されます。ユーザーにエラーを報告するには、代わりに {{domxref("HTMLInputElement.reportValidity()")}} を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.reportValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
