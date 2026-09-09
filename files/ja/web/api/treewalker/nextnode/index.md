---
title: "TreeWalker: nextNode() メソッド"
short-title: nextNode()
slug: Web/API/TreeWalker/nextNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

**`TreeWalker.nextNode()`** メソッドは、現在の {{domxref("Node")}} を文書順に次の可視ノードに移動させ、見つかったノードを返します。そのようなノードが存在しない場合は `null` を返し、現在のノードは変更されません。

## 構文

```js-nolint
nextNode()
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
const node = treeWalker.nextNode(); // 文書順における次のノードであるため、ルートの最初の子ノードを返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
