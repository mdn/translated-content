---
title: ValidityState.badInput
slug: Web/API/ValidityState/badInput
tags:
  - API
  - 制約検証 API
  - HTML DOM
  - プロパティ
  - 読み取り専用
  - ValidityState
translation_of: Web/API/ValidityState/badInput
---
{{APIRef("HTML DOM")}}

**`badInput`** は [ValidityState](/ja/docs/Web/API/ValidityState) オブジェクトの読み取り専用のプロパティで、ブラウザーが変換できない入力をユーザーが行ったかどうかを示します。例えば、数値の入力欄に文字列がある場合です。

## 例

```html
<input type="number" id="age">
```

```js
var input = document.getElementById("age");
if (input.validity.badInput) {
  console.log("Bad input detected…");
} else {
  console.log("Content of input OK.");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ガイド: 制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [チュートリアル: フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
