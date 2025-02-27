---
title: "HTMLTextAreaElement: rows プロパティ"
short-title: rows
slug: Web/API/HTMLTextAreaElement/rows
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`rows`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、このテキストコントロールのテキストが見える行数を表す正の整数です。これは `<textarea>` 要素の [`rows`](/ja/docs/Web/HTML/Element/textarea#rows) 属性を反映します。

## 値

正の整数です。既定値は `2` です。

## 例

```js
const textareaElement = document.getElementById("comment");
const textLines = textArea.rows;
textArea.rows = textLines + 2;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
- {{DOMXref("HTMLTextAreaElement.wrap")}}
- CSS の {{cssxref("resize")}} プロパティ
