---
title: "TreeWalker: firstChild() メソッド"
short-title: firstChild()
slug: Web/API/TreeWalker/firstChild
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

**`TreeWalker.firstChild()`** メソッドは、現在の {{domxref("Node")}} を、現在のノードの最初の可視子ノードに移動し、得られる子ノードを返します。そのような子ノードが存在しない場合は、`null` を返し、現在のノードは変更されません。

## 構文

```js-nolint
firstChild()
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
const node = treeWalker.firstChild(); // ルート要素の最初の子要素を返します。子要素がない場合は null を返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("TreeWalker")}} インターフェイス
