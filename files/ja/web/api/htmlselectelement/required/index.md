---
title: "HTMLSelectElement: required プロパティ"
short-title: required
slug: Web/API/HTMLSelectElement/required
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

**`required`** は {{DOMxRef("HTMLSelectElement")}} インターフェイスのプロパティで、フォームを送信する前に、ユーザーが空ではない文字列値を持つオプションを選択しなければならないことを指定します。これは、{{htmlelement("select")}} 要素の [`required`](/ja/docs/Web/HTML/Reference/Elements/select#required) 属性を反映したものです。

## 値

論理値です。

## 例

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.required);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("select")}}
- {{DOMXref("HTMLSelectElement.validity")}}
- {{cssxref(":required")}} 擬似クラス
