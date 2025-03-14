---
title: "Document: createAttributeNS() メソッド"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: 7b3dbcfc0bda53b65eee9b025362c9b2c34cfe95
---

{{ ApiRef("DOM") }}

**`Document.createAttributeNS()`** メソッドは、指定した名前空間 URI と修飾名を持つ新しい属性ノードを作成し、それを返します。
作成するオブジェクトは {{domxref("Attr")}} インターフェイスを実装したノードです。DOM は、この方法で具体的な要素にどのような属性を追加することができるかを強制しません。

## 構文

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### 引数

- `namespaceURI`
  - : 文字列で、属性に関連付ける[名前空間 URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) を指定します。
    作成する属性の {{DOMxRef("Attr.namespaceURI", "namespaceURI")}} プロパティは、`namespaceURI` の値で初期化されます。
    [有効な名前空間 URI](#重要な名前空間_uri) を参照してください。
- `qualifiedName`
  - : 文字列で、作成する属性の名前を指定します。
    作成する属性の {{DOMxRef("Attr.name", "name")}} プロパティは `qualifiedName` の値で初期化されます。

### 返値

新しい {{domxref("Attr")}} ノードです。

### 例外

- `NamespaceError` {{domxref("DOMException")}}
  - : [`namespaceURI`](#namespaceuri) の値が有効な [namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) ではない場合に発生します。
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : [`qualifiedName`](#qualifiedname) 値が有効な [XML 名](https://www.w3.org/TR/REC-xml/#dt-name)ではない場合に発生します。例えば、数字、ハイフン、ピリオドで始まったり、英数字、アンダースコア、ハイフン、ピリオド以外の文字を含んでいたりする場合です。

## 重要な名前空間 URI

- [HTML](/ja/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/ja/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/ja/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`

## 例

```js
const node = document.getElementById("svg");
const a = document.createAttributeNS("http://www.w3.org/2000/svg", "viewBox");
a.value = "0 0 100 100";
node.setAttributeNode(a);
console.log(node.getAttribute("viewBox")); // "0 0 100 100"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createElementNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.setAttributeNodeNS()")}}
