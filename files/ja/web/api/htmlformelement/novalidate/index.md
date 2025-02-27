---
title: "HTMLFormElement: noValidate プロパティ"
short-title: noValidate
slug: Web/API/HTMLFormElement/noValidate
l10n:
  sourceCommit: d7ac54d009f0c200d612dee1d1f2a1c633791706
---

{{APIRef("HTML DOM")}}

**`noValidate`** は {{domxref("HTMLFormElement")}} インターフェイスのプロパティで、この {{htmlelement("form")}} が送信された際に[制約検証](/ja/docs/Web/HTML/Constraint_validation)をバイパスするかどうかを示す論理値です。これは `<form>` e要素の [`novalidate`](/ja/docs/Web/HTML/Element/form#novalidate) 属性を反映したもので、この属性が存在する場合は値は `true` となります。

この属性が設定されていない場合、または値が `false` に設定されている場合、フォームは検証されます。フォームを送信するために使用するコントロールに対して、JavaScript または HTML の `formnovalidate` 属性を使用して、 {{domxref("HTMLInputElement.formNoValidate")}} または {{domxref("HTMLButtonElement.formNoValidate")}} プロパティを `true` に設定することで、これを無効にすることができます。

このプロパティは受け取ったり設定したりすることができます。

## 値

論理値です。

## 例

```js
const element = document.getElementById("myForm");
console.log(element.noValidate);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLFormElement.reportValidity()")}}
- {{domxref("HTMLFormElement.checkValidity()")}}
- {{domxref("HTMLFormElement.action")}}
- {{domxref("HTMLFormElement.enctype")}}
- {{domxref("HTMLFormElement.method")}}
- {{domxref("HTMLFormElement.target")}}
- {{HTMLElement("form")}}
- [学習: クライアント側フォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [ガイド: 制約検証](/ja/docs/Web/HTML/Constraint_validation)
