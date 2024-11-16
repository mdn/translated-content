---
title: "Document: scrollingElement プロパティ"
short-title: scrollingElement
slug: Web/API/Document/scrollingElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`scrollingElement`** は、{{domxref("Document")}} インターフェイスの読み込み専用プロパティです。スクロール可能な {{domxref("Element")}} の参照を返します。標準モードでは、文書のルート要素である {{domxref("document.documentElement")}} になります。

後方互換モードでは、`scrollingElement` は HTML の `body` 要素を返します。`body` 要素が存在しないか、それが[おそらくスクロール可能](https://drafts.csswg.org/cssom-view/#potentially-scrollable)な場合は null を返します。

## 構文

文書をスクロールさせる {{domxref("Element")}} で、通常はルート要素です（標準モードでない場合を除く）。

## 例

```js
const scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
