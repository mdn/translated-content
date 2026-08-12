---
title: "TreeWalker: root プロパティ"
short-title: root
slug: Web/API/TreeWalker/root
l10n:
  sourceCommit: 169a9199209be8c6db80e1cd56238456f2641203
---

{{ APIRef("DOM") }}

**`TreeWalker.root`** は読み取り専用のプロパティで、この {{domxref("TreeWalker")}} を作成したときに指定したルートノードを {{domxref("Node")}} で返します。

## 値

{{domxref("Node")}} オブジェクトです。

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
  false,
);
root = treeWalker.root; // この場合は document.body
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TreeWalker")}} インターフェイス
