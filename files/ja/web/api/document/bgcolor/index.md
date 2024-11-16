---
title: "Document: bgColor プロパティ"
short-title: bgColor
slug: Web/API/Document/bgColor
l10n:
  sourceCommit: 23fb12ae62339140281b9aad2c9f856e2e5a4762
---

{{APIRef("DOM")}} {{Deprecated_Header}}

非推奨の `bgColor` プロパティは、現在の文書の背景色を取得または設定します。

## 値

文字列で、色を色名（`"white"` 等）または 16 進値（`"#FFFFFF"` 等）で表します。

## 例

```js
document.bgColor = "darkblue";
```

## メモ

Firefox ではこのプロパティの初期値は白 (16 進表記で `#FFFFFF`) となっています。

`document.bgColor` は [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) で非推奨になっています。推奨される代替方法は、 CSS の {{Cssxref("background-color")}} を使用することで、 `document.body.style.backgroundColor` で DOM を通してアクセスできます。もう一つの代替手段である `document.body.bgColor` は、 HTML 4.01 で CSS に代替されたため非推奨となっています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
