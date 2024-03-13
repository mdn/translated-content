---
title: "Element: setAttributeNode() メソッド"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`setAttributeNode()`** メソッドは、新しい `Attr` ノードを指定された要素に追加します。

### 構文

```js-nolint
setAttributeNode(attribute)
```

### 引数

- `attribute` は要素に追加する `Attr` ノードです。

### 返値

置換された属性ノードが、もしあれば、この関数から返されます。

## 例

この例では `align` 属性をある要素から別の要素へコピーしています。

### HTML

```html
<div id="one" align="left">one</div>
<div id="two">two</div>
```

### JavaScript

```js
let d1 = document.getElementById("one");
let d2 = document.getElementById("two");
let a = d1.getAttributeNode("align");

d2.setAttributeNode(a.cloneNode(true));

// 返値: 'left'
alert(d2.attributes[1].value);
```

## メモ

指定された属性が要素に既に存在する場合、その属性は新しい属性に置き換えられ、置き換えられた属性が返されます。

このメソッドが使われることはあまりなく、通常は {{domxref("Element.setAttribute()")}} が要素の属性を変更するために使われます。

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
