---
title: "HTMLInputElement: defaultChecked プロパティ"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

**`defaultChecked`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、要素の既定のチェック状態を指定します。このプロパティは、 {{htmlelement("input")}} 要素の [`checked`](/ja/docs/Web/HTML/Reference/Elements/input#checked) 属性を反映します。

論理値の [`checked`](/ja/docs/Web/HTML/Reference/Elements/input#checked) 属性は、 `radio` ([`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)) および `checkbox` ([`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)) の入力型に対して有効です。この属性が存在すると、`defaultChecked` プロパティが `true` に設定されます。

## 値

論理値です。

## 例

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.defaultChecked);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{cssxref(":default")}} 擬似クラス
- {{cssxref(":checked")}} 擬似クラス
