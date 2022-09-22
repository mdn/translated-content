---
title: element.setAttributeNS
slug: Web/API/Element/setAttributeNS
---

{{ ApiRef() }}

### 概要

`setAttributeNS` は指定の名前空間と名前で新しい属性を追加したり、属性の値を変更します。

### 構文

```
element.setAttributeNS(namespace,name,value)
```

- `namespace` は属性の名前空間を指定する文字列です。
- `name` はセットしたい属性を特定する文字列です。
- `value` は新しい属性の希望する文字列値です。

### 例

```
var d = document.getElementById("d1");
d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");
```

### Notes

{{ DOMAttributeMethods() }}

### 仕様

[DOM Level 2 Core: setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)
