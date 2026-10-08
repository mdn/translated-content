---
title: "Element: getAttributeNode() メソッド"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

**`getAttributeNode()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素の指定された属性を {{domxref("Attr")}} ノードとして返します。要素に指定された名前の属性がない場合は、`null` を返します。

このメソッドは、属性の[インスタンスプロパティ](/ja/docs/Web/API/Attr#instance_properties)が必要な場合に役立ちます。
属性の値のみが必要な場合は、代わりに {{domxref("Element.getAttribute()", "getAttribute()")}} メソッドを使用することができます。

## 構文

```js-nolint
getAttributeNode(attrName)
```

### 引数

- `attrName`
  - : 属性の名前を指定する文字列。HTML 文書としてフラグ付けされた DOM 内の HTML 要素に対してこのメソッドが呼び出された場合、その名前は小文字に正規化されます。

### 返値

その属性に対応する `Attr` ノードです。または、要素が指定された名前の属性を保有していない場合は `null` です。

> [!NOTE]
> `Attr` ノードは `Node` を継承していますが、文書ツリーの一部と考えることはできません。一般の `Node` 属性、例えば [`parentNode`](/ja/docs/Web/API/Node/parentNode)、[`previousSibling`](/ja/docs/Web/API/Node/previousSibling)、[`nextSibling`](/ja/docs/Web/API/Node/nextSibling) などは `Attr` ノードでは `null` になります。しかしながら、{{domxref("Attr.ownerElement", "ownerElement")}} プロパティではこの属性が属している要素を取得することができます。

## 例

```js
// html: <div id="top" />
const t = document.getElementById("top");
const idAttr = t.getAttributeNode("id");
console.log(idAttr.value); // "top"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
