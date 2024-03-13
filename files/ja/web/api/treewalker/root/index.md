---
title: TreeWalker.root
slug: Web/API/TreeWalker/root
---

{{ APIRef("DOM") }}

**`TreeWalker.root`** は読み取り専用のプロパティで、 `TreeWalker` を作成したときに指定したルートノードを返します。

## 値

{{domxref("Node")}} オブジェクトです。

## 例

```js
var treeWalker = document.createTreeWalker(
  document.body, // root として document.body を指定している
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
root = treeWalker.root; // document.body が返却される
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TreeWalker")}} インターフェイス
