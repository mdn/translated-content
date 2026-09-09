---
title: "Element: getAttributeNodeNS() メソッド"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

**`getAttributeNodeNS()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素の指定された名前空間付き属性を {{domxref("Attr")}} ノードとして返します。要素にその名前空間で指定された名前の属性がない場合は、`null` を返します。

このメソッドは、名前空間付き属性の[インスタンスプロパティ](/ja/docs/Web/API/Attr#instance_properties)が必要な場合に役立ちます。
名前空間付き属性の値のみが必要な場合は、代わりに {{domxref("Element.getAttributeNS()", "getAttributeNS()")}} メソッドを使用することができます。

HTML 文書を扱っており、リクエストされた属性を特定の名前空間に所属するものとして指定する必要がない場合は、代わりに {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} メソッドを使用してください。

## 構文

```js-nolint
getAttributeNodeNS(namespace, localName)
```

### 引数

- `namespace`
  - : 属性の名前空間を指定する文字列です。名前空間を明示的に指定しない場合は `null` です。
- `nodeName`
  - : 属性の名前を指定する文字列です。

### 返値

その属性に対応する `Attr` ノードです。または、要素がその名前空間で指定された名前の属性を保有していない場合は `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.setAttributeNodeNS()")}}
