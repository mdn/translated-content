---
title: "HTMLTextAreaElement: disabled プロパティ"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`disabled`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、この複数行テキストコントロールが無効で操作できないかどうかを示します。これは {{htmlelement("textarea")}} 要素の [`disabled`](/ja/docs/Web/HTML/Element/textarea#autocomplete) 属性を反映します。 `false` の場合でも、それを格納する要素（例えば {{htmlelement("fieldset")}}）が無効になっている場合に、このテキストエリアが、無効になる場合があります。

## 値

論理値です。

## 例

```js
const textareaElement = document.getElementById("comment");
if (commentsDisabled) {
  textareaElement.disabled = true;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.readOnly")}}
