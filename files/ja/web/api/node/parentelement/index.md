---
title: Node.parentElement
slug: Web/API/Node/parentElement
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.parentElement
translation_of: Web/API/Node/parentElement
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
