---
title: "Element: getAttributeNode() メソッド"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

この要素の指定された属性を、`Attr` ノードとして返します。

## 構文

```js-nolint
getAttributeNode(attrName)
```

### 引数

- `attrName` は属性の名前を表す文字列です。

### 返値

指定の属性の `Attr` ノードです。

## 例

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top");
```

## メモ

HTML 文書としてフラグが立てられた DOM 内の HTML 要素に対して呼び出された場合、`getAttributeNode` は処理前に引数を小文字にします。

`Attr` ノードは `Node` を継承していますが、文書ツリーの一部と考えることはできません。一般の `Node` 属性、例えば [parentNode](/ja/docs/Web/API/Node/parentNode)、 [previousSibling](/ja/docs/Web/API/Node/previousSibling)、[nextSibling](/ja/docs/Web/API/Node/nextSibling) などは `Attr` ノードでは `null` になります。しかしながら、 `ownerElement` プロパティではこの属性が属している要素を取得することができます。

要素の属性の値を取得するためには、通常 `getAttributeNode` の代わりに [getAttribute](/ja/docs/Web/API/Element/getAttribute) が使用されます。

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
