---
title: "Node: lastChild プロパティ"
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`lastChild`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、このノードの最後の子ノードを返します。子ノードがない場合は `null` を返します。

> [!NOTE]
> このプロパティは、このノードの最後の子ノードである任意の種類のノードを返す。
> {{domxref("Text")}} や {{domxref("Comment")}} ノードである可能性があります。
> 他の要素の子である最後の {{domxref("Element")}} を取得したい場合は、{{domxref("Element.lastElementChild")}} の使用を検討してください。

## 値

このノードの最後の子である {{domxref("Node")}}、または子ノードがなければ `null` です。

## 例

```js
const tr = document.getElementById("row1");
const corner_td = tr.lastChild;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.firstChild")}}
- {{domxref("Element.lastElementChild")}}
