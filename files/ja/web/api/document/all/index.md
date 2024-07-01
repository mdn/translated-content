---
title: "Document: all プロパティ"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{DOMxRef("Document")}} インターフェイスの **`all`** プロパティは読み取り専用で、この文書ノードをルートとした {{DOMxRef("HTMLAllCollection")}} を返します。

`document.all` を使用してこの文書内のすべての要素を文書順に {{DOMxRef("HTMLAllCollection")}} で返す代わりに、{{DOMxRef("Document.querySelectorAll")}} を使用してこの文書内のすべての要素を文書順に {{DOMxRef("NodeList")}} で返すことができます。

```js
const allElements = document.querySelectorAll("*");
```

## 値

文書のすべてのノードを含む {{DOMxRef("HTMLAllCollection")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
