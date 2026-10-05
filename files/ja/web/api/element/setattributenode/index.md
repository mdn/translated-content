---
title: "Element: setAttributeNode() メソッド"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{ APIRef("DOM") }}

**`setAttributeNode()`** は {{domxref("Element")}} インターフェイスのメソッドで、新しい {{domxref("Attr")}} ノードを指定された要素に追加します。

属性ノードを追加する前に、そのノードに対して作業する必要がない場合（別の要素からの複製など）、代わりに {{domxref("Element.setAttribute()", "setAttribute()")}} メソッドを使用することができます。

## 構文

```js-nolint
setAttributeNode(attribute)
```

### 引数

- `attribute`
  - : 要素に追加する {{domxref("Attr")}} ノードです。

### 返値

置換された属性ノードが、もしあれば、この関数から返されます。

## 例

この例では `align` 属性をある要素から別の要素へコピーしています。

### HTML

```html
<div id="one" lang="en-US">one</div>
<div id="two">two</div>
```

### JavaScript

```js
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNode("lang");

d2.setAttributeNode(a.cloneNode(true));

// 返値: 'en-US'
console.log(d2.attributes[1].value);
```

## メモ

指定された属性が要素に既に存在する場合、その属性は新しい属性に置き換えられ、置き換えられた属性が返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.getAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
