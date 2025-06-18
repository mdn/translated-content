---
title: "Document: fgColor プロパティ"
short-title: fgColor
slug: Web/API/Document/fgColor
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef}}{{Deprecated_header}}

**`fgColor`** は、現在の文書の前景色またはテキストの色を取得または設定します。

### 引数

文字列で、色を表すキーワード ("red" など) または 16 進数の値 (`"#ff0000"` など) です。

## 例

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## メモ

Mozilla Firefox ではこのプロパティの既定値は黒 (16 進数で `#000000`) です。

`document.fgColor` は [DOM Level 2 HTML で非推奨](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)となっています。推奨される代替手段は CSS プロパティの {{Cssxref("color")}} (たとえば `document.body.style.color = "red"`) です。

他の代替手段として `document.body.text` がありますが、上記の CSS による代替手段が設置されたため [HTML 4.01 で非推奨](https://www.w3.org/TR/html401/struct/global.html#adef-text)となっています。

## ブラウザーの互換性

{{Compat}}
