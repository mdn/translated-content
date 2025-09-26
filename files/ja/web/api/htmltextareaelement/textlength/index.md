---
title: "HTMLTextAreaElement: textLength プロパティ"
short-title: textLength
slug: Web/API/HTMLTextAreaElement/textLength
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`textLength`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスの読み取り専用プロパティで、 {{htmlelement("textarea")}} 要素の値の文字数を UTF-16 コード単位で表す非負の整数です。これは、 {{domxref("HTMLTextAreaElement/value", "value")}} プロパティの値の {{jsxref("String/length", "length")}} にアクセスするショートカットです。

## 値

非負の整数です。

## 例

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.textLength);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.rows")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
- {{DOMXref("HTMLTextAreaElement.minLength")}}
- {{DOMXref("HTMLTextAreaElement.maxLength")}}
