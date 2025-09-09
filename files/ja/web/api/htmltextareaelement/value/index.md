---
title: "HTMLTextAreaElement: value プロパティ"
short-title: value
slug: Web/API/HTMLTextAreaElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

**`value`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、この {{htmlelement("textarea")}} 要素の値を文字列で表します。ウィジェットに中身が含まれていない場合は、空文字列が返されます。このプロパティは、このコントロールに含まれる生の値を返したり設定したりします。

## 値

この {{htmlelement("textarea")}} 要素の中身の入った文字列です。

## 例

```js
const textareaElement = document.getElementById("comment");
const oldText = textArea.value;
textArea.value = oldText.toUpperCase();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.textLength")}}
- {{DOMXref("HTMLTextAreaElement.labels")}}
- {{DOMXref("HTMLTextAreaElement.selectionStart")}}
- {{DOMXref("HTMLTextAreaElement.selectionEnd")}}
