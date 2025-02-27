---
title: "Document: rootElement プロパティ"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** は {{domxref("Element")}} を返します。これは
{{SVGElement("svg")}} 要素の場合は {{domxref("document")}} のルート要素で、それ以外の場合は `null` です。これはすべてのルート要素を返す {{domxref("Document.documentElement")}} に置き換えられて非推奨になりました。

## 値

{{SVGElement("svg")}} 要素の場合は {{domxref("document")}} のルート要素で、それ以外の場合は `null` です。

文書が空ではない SVG 要素の場合、`rootElement` は {{domxref("SVGSVGElement")}} となり、 `documentElement` と同じものになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
