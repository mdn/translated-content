---
title: Document.documentElement
slug: Web/API/Document/documentElement
---

{{ApiRef("DOM")}}

**`Document.documentElement`** は、その {{domxref("document")}} のルート要素 (例えば、 HTML 文書の場合は {{HTMLElement("html")}} 要素) である {{domxref("Element")}} を返します。

## 構文

```
const element = document.documentElement
```

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

| 仕様書                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG','#dom-document-documentelement','Document.documentElement')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
