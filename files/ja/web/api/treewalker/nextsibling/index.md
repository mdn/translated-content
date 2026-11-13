---
title: "TreeWalker: nextSibling() メソッド"
short-title: nextSibling()
slug: Web/API/TreeWalker/nextSibling
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

**`TreeWalker.nextSibling()`** メソッドは、現在の {{domxref("Node")}} を文書順に次の兄弟ノードに移動させ、見つかった兄弟ノードを返します。そのようなノードが存在しない場合は `null` を返し、現在のノードは変更されません。

## 構文

```js-nolint
nextSibling()
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
treeWalker.firstChild();
const node = treeWalker.nextSibling(); // ルート要素の最初の子要素が兄弟要素を持っていない場合、null を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
