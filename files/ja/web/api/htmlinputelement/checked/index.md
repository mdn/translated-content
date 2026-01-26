---
title: "HTMLInputElement: checked プロパティ"
short-title: checked
slug: Web/API/HTMLInputElement/checked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

**`checked`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、要素の現在のチェック状態、つまり、あるフォームコントロールがチェック済みかどうかを指定します。

論理プロパティである `checked` は、 `radio` ([`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)) および `checkbox` ([`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)) 入力型に関連します。

HTML の [`checked`](/ja/docs/Web/HTML/Reference/Elements/input#checked) 属性が存在することは、チェックボックスが既定でチェックされていることを示します。ただし、そのチェックボックスが現在チェックされているかどうかは示しません。チェックボックスの状態が変更された場合、このコンテンツ属性は変更を反映しません。`HTMLInputElement` の `checked` IDL プロパティのみが更新されます。`checked` 属性は、 {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}} プロパティによって反映されます。

ラジオ入力の `checked` プロパティが `true` の場合、同じ {{DOMxRef("HTMLInputElement.name", "name")}} を持つ他のラジオ入力はすべて `false` です。同じ名前を持つラジオボタングループ内のいずれかのラジオボタンが {{DOMxRef("HTMLInputElement.required", "required")}} の場合、グループ内のボタンが 1 つでもチェックされると、グループ内の各ラジオボタンに対する {{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.valueMissing','valueMissing')}} プロパティは `false` になります。

チェックボックスの値はフォームを送信する際に送信データに含まれます。チェックボックスの `checked` 値に影響を与えるものとして、 {{DOMxRef("HTMLInputElement.indeterminate")}} プロパティの値があります。

## 値

論理値です。

## 例

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.checked);
inputElement.checked = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.validity")}}
- {{cssxref(":checked")}} 擬似クラス
