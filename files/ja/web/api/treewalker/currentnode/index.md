---
title: "TreeWalker: currentNode プロパティ"
short-title: currentNode
slug: Web/API/TreeWalker/currentNode
l10n:
  sourceCommit: 732ac4c3e442b1b5ddc5f08ec83d69dead2a04e8
---

{{ APIRef("DOM") }}

**`TreeWalker.currentNode`** プロパティは、この {{domxref("TreeWalker")}} が現在指している {{domxref("Node")}} を表します。

## 値

{{domxref("Node")}} です。

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
root = treeWalker.currentNode; // 最初の要素であるため、ルート要素
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TreeWalker")}} インターフェイス
