---
title: "Document: documentElement プロパティ"
short-title: documentElement
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: 376da6eeed886361367923824132ccfc5ac1177d
---

{{ApiRef("DOM")}}

**`documentElement`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、 {{domxref("document")}} のルート要素である {{domxref("Element")}} を返します（例えば、HTML 文書の場合は {{HTMLElement("html")}} 要素）。

## 値

{{domxref("Element")}} オブジェクトです。

## 例

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier は <head> や <body> などの
// ルート要素の直接の子である NodeList

for (const child of firstTier) {
  // ルート要素のそれぞれの直接の子に対する処理
}
```

## メモ

空ではない HTML 文章の場合、 `documentElement` は常に {{HTMLElement("html")}} 要素を返します。空ではない XML 文章の場合、 `documentElement` は常に文章のルート要素である何らかの要素を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
