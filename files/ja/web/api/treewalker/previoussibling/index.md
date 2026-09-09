---
title: "TreeWalker: previousSibling() メソッド"
short-title: previousSibling()
slug: Web/API/TreeWalker/previousSibling
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

**`TreeWalker.nextSibling()`** メソッドは、現在の {{domxref("Node")}} を文書順に前の兄弟ノードに移動させ、見つかった兄弟ノードを返します。そのようなノードが存在しない場合は `null` を返し、現在のノードは変更されません。

## 構文

```js-nolint
previousSibling()
```

### 引数

なし。

### 返値

{{domxref("Node")}} オブジェクトまたは `null` です。

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
const node = treeWalker.previousSibling(); // 前の兄弟要素がないため、null が返される
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
