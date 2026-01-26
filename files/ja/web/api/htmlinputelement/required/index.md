---
title: "HTMLInputElement: required プロパティ"
short-title: required
slug: Web/API/HTMLInputElement/required
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

**`required`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、フォームを送信する前にユーザーが値を入力しなければならないことを指定します。これは、{{htmlelement("input")}} 要素の [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性を反映します。

HTML の論理属性である `required` 属性は、型が `hidden`、`range`、`color`、`submit`、`reset`、`button`、`image` の場合には無視されますが、これらの入力型において、この属性が存在する場合には `required` プロパティが `true` となり、それ以外の場合には `false` となります。

必須入力に値が入力されていない場合、{{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.valueMissing','valueMissing')}} プロパティは true になります。

## 値

論理値です。

## 例

```js
const inputElement = document.getElementById("name");
console.log(inputElement.required);
inputElement.required = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.validity")}}
- {{cssxref(":required")}} 擬似クラス
