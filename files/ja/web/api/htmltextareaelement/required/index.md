---
title: "HTMLTextAreaElement: required プロパティ"
short-title: required
slug: Web/API/HTMLTextAreaElement/required
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`required`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、フォームを送信する前にユーザーが値を入力しなければならないことを指定します。これは、{{htmlelement("textarea")}} 要素の [`required`](/ja/docs/Web/HTML/Element/textarea#required) 属性を反映します。

## 値

論理値です。

## 例

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.required);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.validity")}}
- {{cssxref(":required")}} 擬似クラス
