---
title: "HTMLTextAreaElement: cols プロパティ"
short-title: cols
slug: Web/API/HTMLTextAreaElement/cols
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`cols`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、複数行テキストコントロールの見える幅を、平均的な文字幅における文字数で表す正の整数です。これは `<textarea>` 要素の [`cols`](/ja/docs/Web/HTML/Reference/Elements/textarea#cols) 属性を反映します。

## 値

正の整数です。既定値は `20` です。

## 例

```js
const textareaElement = document.getElementById("comment");
textArea.cols = 80;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.rows")}}
- {{DOMXref("HTMLTextAreaElement.wrap")}}
- CSS {{cssxref("resize")}} property
