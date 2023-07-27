---
title: "Element: getAttributeNodeNS() メソッド"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

指定された名前空間と名前を持つ属性の `Attr` ノードを返します。

## 構文

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### 引数

- `namespace` は属性の名前空間を特定する文字列です。
- `nodeName` は属性の名前を指定する文字列です。

### 返値

指定された属性のノードです。

## メモ

`getAttributeNodeNS` は [getAttributeNode](getAttributeNode) よりも、特定の名前空間に含まれる属性を特定することができる点でより具体的です。対応するセッターメソッドは [setAttributeNodeNS](/ja/docs/Web/API/Element/setAttributeNodeNS) です。

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
