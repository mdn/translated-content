---
title: ValidityState.badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: cfcbb39cc595bd536b107f6771bfb3f8e13bacca
---

{{APIRef("HTML DOM")}}

**`badInput`** は [ValidityState](/ja/docs/Web/API/ValidityState) オブジェクトの読み取り専用のプロパティで、ブラウザーが変換できない入力をユーザーが行ったかどうかを示します。例えば、数値の入力欄に文字列がある場合です。

## 値

論理値です。

## 例

```html
<input type="number" id="age" />
```

```js
const input = document.getElementById("age");
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

- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
- [チュートリアル: フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
