---
title: element.hasAttribute
slug: Web/API/Element/hasAttribute
---

{{ApiRef}}

## 概要

hasAttribute

は指定の要素が指定の属性を持つか否かを示す真偽値を返します。

## 構文

```
var result = element.hasAttribute(attName);
```

- `result` : true または false の戻り値を保有
- `attName` : 属性の名前を表す文字列を指定

## 例

対象属性の存在をチェックし、無い場合にのみ属性を設定する例を以下に示します。

```js
var d = document.getElementById("div1"); // 対象要素を取得

if ( !d.hasAttribute("align") ) {
  d.setAttribute("align", "center");
}
```

## 注記

{{DOMAttributeMethods}}

## 仕様書

- [DOM Level 2 Core: hasAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttr)
- [DOM Level 3 Core: hasAttribute](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-ElHasAttr)
