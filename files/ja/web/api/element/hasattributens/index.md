---
title: element.hasAttributeNS
slug: Web/API/Element/hasAttributeNS
---

{{ ApiRef() }}

### 概要

`hasAttributeNS` は現在の要素が指定した属性を所有するか否かを示す boolean 値を返します。

### 構文

```
result =element.hasAttributeNS(namespace,localName)
```

- `result` は `true` もしくは `false` の boolean 値です。
- `namespace` は属性の名前空間を特定する文字列です。
- `localName` は属性の名前です。

### 例

```
// 値をセットする前に属性が存在しているか検証します。
var d = document.getElementById("div1");
if (d.hasAttributeNS(
        "http://www.mozilla.org/ns/specialspace/",
        "special-align")) {
   d.setAttribute("align", "center");
}
```

### 注記

{{ DOMAttributeMethods() }}

### 仕様

[DOM Level 2 Core: hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)
