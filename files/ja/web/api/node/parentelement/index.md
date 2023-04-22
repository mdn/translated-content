---
title: "Node: parentElement プロパティ"
slug: Web/API/Node/parentElement
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`parentElement`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、この DOM ノードの親である要素 ({{DOMxRef("Element")}}) を返します。このノードに親ノードがないか、親が DOM の {{DOMxRef("Element")}} でない場合は `null` を返します。

## 値

現在のノードの親ノードである {{domxref("Element")}} を返します。そのようなものがない場合は `null` を返します。

## 例

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.parentNode")}}
