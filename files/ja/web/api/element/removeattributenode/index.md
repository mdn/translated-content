---
title: "Element: removeAttributeNode() メソッド"
short-title: removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`removeAttributeNode()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素から指定された属性を除去します。

## 構文

```js-nolint
removeAttributeNode(attributeNode)
```

### 引数

- `attributeNode`
  - : この要素から除去する属性ノードです。

### 返値

除去された属性ノードです。

### 例外

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : 要素の属性リストに属性ノードが含まれていない場合に発生します。

## 例

```js
// Given: <div id="top" align="center" />
const d = document.getElementById("top");
const d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align is now removed: <div id="top" />
```

## メモ

削除された属性に既定値がある場合、それは直ちに置き換えられます。置換される属性は、同じ名前空間 URI とローカル名、そして必要に応じて元の接頭辞を持ちます。

`removeAttributeNodeNS` メソッドはありません。`removeAttributeNode` メソッドは、名前空間付き属性と名前空間付きでない属性の両方を削除することができます。

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
