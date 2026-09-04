---
title: "TreeWalker: filter プロパティ"
short-title: filter
slug: Web/API/TreeWalker/filter
l10n:
  sourceCommit: 169a9199209be8c6db80e1cd56238456f2641203
---

{{ APIRef("DOM") }}

**`TreeWalker.filter`** 読み取り専用プロパティは、{{domxref("TreeWalker")}} に関連付けられた `NodeFilter` を返します。

`TreeWalker` を生成する際、フィルタ－オブジェクトが 3 番目の引数として渡され、それぞれのノードに対してそのメソッド `acceptNode()` が呼び出され、そのノードを受け入れるかどうかが決定されます。

## 値

`NodeFilter` オブジェクトです。

## 例

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
nodeFilter = treeWalker.filter; // この場合は document.body
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
