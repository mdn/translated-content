---
title: Document.scrollingElement
slug: Web/API/Document/scrollingElement
---

{{APIRef("DOM")}}**`scrollingElement`** は、{{domxref("Document")}} インターフェースの読み込み専用プロパティです。スクロール可能な {{domxref("Element")}} の参照を返します。スタンダードモードでは、ドキュメントのルート要素である {{domxref("document.documentElement")}} になります。後方互換モードでは、`scrollingElement` は HTML の `body` 要素を返します。`body` 要素が存在しないか、それが [スクロール可能](https://drafts.csswg.org/cssom-view/#potentially-scrollable) な場合は null を返します。

## 構文

```
var element = document.scrollingElement;
```

## 例

```js
var scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
