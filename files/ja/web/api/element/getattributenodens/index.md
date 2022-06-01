---
title: Element.getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
tags:
  - API
  - DOM
  - メソッド
  - リファレンス
browser-compat: api.Element.getAttributeNodeNS
translation_of: Web/API/Element/getAttributeNodeNS
---
{{ APIRef("DOM") }}

指定された名前空間と名前を持つ属性の `Attr` ノードを返します。

## 構文

```js
attributeNode = element.getAttributeNodeNS(namespace, nodeName)
```

- `attributeNode` は指定された属性のノードです。
- `namespace` は属性の名前空間を特定する文字列です。
- `nodeName` は属性の名前を指定する文字列です。

## 注

`getAttributeNodeNS` は [getAttributeNode](getAttributeNode) よりも、特定の名前空間に含まれる属性を特定することができる点でより具体的です。対応するセッターメソッドは [setAttributeNodeNS](/ja/docs/Web/API/Element/setAttributeNodeNS) です。

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
