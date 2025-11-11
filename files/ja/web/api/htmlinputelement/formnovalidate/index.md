---
title: "HTMLInputElement: formNoValidate プロパティ"
short-title: formNoValidate
slug: Web/API/HTMLInputElement/formNoValidate
l10n:
  sourceCommit: d7ac54d009f0c200d612dee1d1f2a1c633791706
---

{{APIRef("HTML DOM")}}

**`formNoValidate`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、 {{htmlelement("form")}} がこの {{htmlelement("input")}} から送信されたとき、[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)を回避するかどうかを示す論理値です。この `<input>` 要素の [`formnovalidate`](/ja/docs/Web/HTML/Reference/Elements/input#formnovalidate) 属性を反映します。

このプロパティは [`submit`](/ja/docs/Web/HTML/Reference/Elements/input/submit) および [`image`](/ja/docs/Web/HTML/Reference/Elements/input/image) 型の `<input>` 要素でのみ有効です。

この値は、このボタンからフォームを送信する場合、 {{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.noValidate", "noValidate")}} プロパティを上書きします。このプロパティは値を受け取ったり設定したりすることができます。

## 値

論理値です。

## 例

```js
const inputElement = document.getElementById("myInput");
console.log(inputElement.formNoValidate);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.reportValidity()")}}
- {{domxref("HTMLInputElement.checkValidity()")}}
- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formMethod")}}
- {{domxref("HTMLInputElement.formTarget")}}
- [`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image)
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement.noValidate")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)
