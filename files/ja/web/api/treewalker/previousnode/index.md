---
title: "TreeWalker: previousNode() メソッド"
short-title: previousNode()
slug: Web/API/TreeWalker/previousNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

**`TreeWalker.previousNode()`** メソッドは、現在の {{domxref("Node")}} を文書順に前の可視ノードに移動させ、見つかったノードを返します。そのようなノードが存在しないか、このオブジェクト構築時に定義されたルートノードよりも前である場合は `null` を返し、現在のノードは変更されません。

## 構文

```js-nolint
previousNode()
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
const node = treeWalker.previousNode(); // 親がないので null を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
