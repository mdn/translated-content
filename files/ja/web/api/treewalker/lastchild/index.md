---
title: "TreeWalker: lastChild() メソッド"
short-title: lastChild()
slug: Web/API/TreeWalker/lastChild
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

**`TreeWalker.lastChild()`** メソッドは、現在の {{domxref("Node")}} を、現在のノードの最後の可視子ノードに移動し、得られる子ノードを返します。そのような子ノードが存在しない場合は、`null` を返し、現在のノードは変更されません。

## 構文

```js-nolint
lastChild()
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
);
const node = treeWalker.lastChild(); // ルート要素の可視の最後の子要素を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
