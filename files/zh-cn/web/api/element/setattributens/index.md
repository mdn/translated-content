---
title: Element.setAttributeNS()
slug: Web/API/Element/setAttributeNS
---

{{ APIRef("DOM") }}

`setAttributeNS` 添加一个新属性或更改具有给定命名空间和名称的一个属性的值。

## 句法

```plain
element.setAttributeNS(namespace,name,value)
```

- `namespace` 是指定属性的命名空间的一个字符串。
- `name` 是标识要设置的属性的一个字符串。
- `value` 是新属性的所需字符串值。

## 范例

```plain
let d = document.getElementById("d1");
d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");
```

## 注释

{{ DOMAttributeMethods() }}

## 规范

[DOM Level 2 Core: setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)
