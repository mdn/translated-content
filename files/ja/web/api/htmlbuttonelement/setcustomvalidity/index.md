---
title: "HTMLButtonElement: setCustomValidity() メソッド"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

**`setCustomValidity()`** は {{DOMxRef("HTMLButtonElement")}} インターフェイスのメソッドで、
独自の検証メッセージを {{htmlelement("button")}} 要素に設定します。空文字列を使用すると、要素に独自の検証エラーがないことを示します。

## 構文

```js-nolint
setCustomValidity(string)
```

### 引数

- `string`
  - : エラーメッセージが入った文字列。空文字列を指定すると、独自の検証エラーがすべて除去されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const errorButton = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorButton.setCustomValidity("エラーがあります");
} else {
  errorButton.setCustomValidity("");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("button")}}
- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLButtonElement.validity")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{domxref("HTMLButtonElement.reportValidity()")}}
- [フォーム検証](/ja/docs/Web/HTML/Guides/Constraint_validation).
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} および {{cssxref(":invalid")}} 擬似クラス
