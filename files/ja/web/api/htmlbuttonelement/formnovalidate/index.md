---
title: "HTMLButtonElement: formNoValidate プロパティ"
short-title: formNoValidate
slug: Web/API/HTMLButtonElement/formNoValidate
l10n:
  sourceCommit: d7ac54d009f0c200d612dee1d1f2a1c633791706
---

{{APIRef("HTML DOM")}}

**`formNoValidate`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、{{htmlelement("form")}} がこの {{htmlelement("button")}} から送信されたとき、[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)を回避するかどうかを示す論理値です。この `<button>` 要素の [`formnovalidate`](/ja/docs/Web/HTML/Reference/Elements/button#formnovalidate) 属性を反映します。

この値は、このボタンからフォームを送信する場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.noValidate", "noValidate")}} プロパティを上書きします。このプロパティは値を受け取ったり設定したりすることができます。

## 値

論理値です。

## 例

```js
const buttonElement = document.getElementById("myButton");
console.log(buttonElement.formNoValidate);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement.noValidate")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
