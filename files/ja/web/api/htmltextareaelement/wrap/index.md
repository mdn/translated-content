---
title: "HTMLTextAreaElement: wrap プロパティ"
short-title: wrap
slug: Web/API/HTMLTextAreaElement/wrap
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`wrap`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、コントロールがフォーム送信用の値をどのように折り返し表示するかを示します。これは `<textarea>` 要素の [`wrap`](/ja/docs/Web/HTML/Element/textarea#wrap) 属性を反映しています。 `"hard"` 値は、 {{domxref("HTMLTextAreaElement.cols", "cols")}} 属性も設定されている場合にのみ効果があることに注意してください。

## 値

利用可能な値は [`wrap`](/ja/docs/Web/HTML/Element/textarea#wrap) を参照してください。既定値は `"soft"` です。

## 例

```js
const textareaElement = document.getElementById("comment");
const oldWrap = textArea.wrap;
textArea.wrap = "hard"; // フォーム送信で (CR+LF) を追加
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
