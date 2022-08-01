---
title: Node.lastChild
slug: Web/API/Node/lastChild
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.lastChild
translation_of: Web/API/Node/lastChild
---
{{APIRef("DOM")}}

**`lastChild`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、このノードの最後の子ノードを返します。
親ノードが要素であった場合、子ノードはふつう、要素ノード、テキストノード、コメントノードの何れかです。
子要素がない場合は `null` を返します。

## Value

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
