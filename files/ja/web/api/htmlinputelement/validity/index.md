---
title: "HTMLInputElement: validity プロパティ"
short-title: validity
slug: Web/API/HTMLInputElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

**`validity`** は {{domxref("HTMLInputElement")}} インターフェイスの読み取り専用プロパティで、この要素の有効状態を表す {{domxref("ValidityState")}} オブジェクトを返します。

## 値

{{domxref("ValidityState")}} オブジェクトです。

## 例

次の例では、選択要素の妥当性状態を取得し、妥当でない場合は処理します。

```js
const input = document.getElementById("myInput");
const validityState = input.validity;
if (!validityState.valid) {
  // それぞれの妥当性状態を検査
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
