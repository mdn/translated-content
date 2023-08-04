---
title: "Node: parentNode プロパティ"
slug: Web/API/Node/parentNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`parentNode`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、 DOM ツリー内の特定のノードの親ノードを返します。

`Document` および `DocumentFragment` [ノード](/ja/docs/Web/API/Node/nodeType)には親が付くことはないので、 `parentNode` は常に `null` になります。
ノードが生成されてからツリーに割り当てられていない場合も `null` を返します。

## 値

現在のノードの親に当たる {{domxref("Node")}} です。要素の親になるのは `Element` ノード、 `Document` ノード、 `DocumentFragment` ノードの何れかです。

## 例

```js
if (node.parentNode) {
  // ノードがツリーの中にある場合は、ツリーから取り除く
  node.parentNode.removeChild(node);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Domxref("Node.firstChild")}}
- {{Domxref("Node.lastChild")}}
- {{Domxref("Node.childNodes")}}
- {{Domxref("Node.nextSibling")}}
- {{Domxref("Node.parentElement")}}
- {{Domxref("Node.previousSibling")}}
- {{Domxref("Node.removeChild")}}
