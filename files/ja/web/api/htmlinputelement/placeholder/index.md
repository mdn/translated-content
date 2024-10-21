---
title: "HTMLInputElement: placeholder プロパティ"
short-title: placeholder
slug: Web/API/HTMLInputElement/placeholder
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

**`placeholder`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、このコントロールに入力できる内容についてのヒントをユーザーに表示します。これは、{{htmlelement("input")}} 要素の [`placeholder`](/ja/docs/Web/HTML/Element/input#placeholder) 属性を反映します。

## 値

文字列です。

## 例

```js
const inputElement = document.getElementById("phone");
console.log(input.placeholder);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{cssxref("::placeholder")}} 擬似要素
- {{CSSXref(":placeholder-shown")}} 擬似クラス
