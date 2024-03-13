---
title: Document.createAttribute()
slug: Web/API/Document/createAttribute
---

{{ ApiRef("DOM") }}

**`Document.createAttribute()`** は、新しい属性ノードを生成して返します。生成されたオブジェクトは {{domxref("Attr")}} を実装したノードです。この方法では DOM は、特定の要素にどんな種類の属性を追加できるかを強制しません。

> **メモ:** 引数に渡される文字列は小文字に変換されます。

## 構文

```js
createAttribute(name);
```

### 引数

- `name` は属性の名前を含む文字列です。

### 返値

{{domxref("Attr")}} ノードです。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : [`name`](#name) が無効な [XML name](https://www.w3.org/TR/REC-xml/#dt-name) である場合（例えば、数字・ハイフン・ピリオドで始まっている場合や、英数字・アンダースコア・ハイフン・ピリオド以外の文字を含む場合）に発生します。

## 例

```js
const node = document.getElementById("div1");
const a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Document.createElement()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
