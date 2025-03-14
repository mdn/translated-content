---
title: "HTMLTextAreaElement: readOnly プロパティ"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`readOnly`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、このコントロールの値をユーザーが変更できないことを示します。{{domxref("HTMLTextAreaElement.disabled", "disabled")}} 属性とは異なり、`readonly` 属性ではクリックやコントロール内の選択ができなくはなりません。これは、この {{htmlelement("textarea")}} 要素の [`readonly`](/ja/docs/Web/HTML/Element/textarea#readonly) 属性を反映します。

## 値

論理値です。

## 例

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.readOnly);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.disabled")}}
- {{cssxref(":read-only")}} 擬似クラス
