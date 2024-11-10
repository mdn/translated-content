---
title: "HTMLInputElement: readOnly プロパティ"
short-title: readOnly
slug: Web/API/HTMLInputElement/readOnly
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

**`readOnly`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} の値をユーザーが変更できないことを示します。これは {{htmlelement("input")}} 要素の [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) 論理属性を反映したもので、属性が存在する場合は `true` を返し、省略されている場合は `false` を返します。

{{domxref("HTMLInputElement.disabled", "disabled")}} プロパティが true であるフォームコントロールとは異なり、`readOnly` プロパティが true の値である場合、クリックやコントロール内の選択ができなくはなりません。

HTML の `readonly` 属性は、型が `hidden`、`range`、`color`、`checkbox`、`radio`、`file`、`submit`、`reset`、`button`、`image` の場合には無視されますが、これらの入力型では、属性が存在する場合は `readOnly` プロパティが `true`、それ以外は `false` となります。

## 値

論理値です。

## 例

```js
const inputElement = document.getElementById("total");
console.log(inputElement.readOnly);
inputElement.readOnly = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.disabled")}}
- {{cssxref(":read-only")}} 擬似クラス
