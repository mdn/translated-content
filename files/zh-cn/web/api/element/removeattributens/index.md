---
title: Element.removeAttributeNS()
slug: Web/API/Element/removeAttributeNS
---

{{ APIRef("DOM") }}

`removeAttributeNS` 移除元素的指定属性

在 Firefox 3 及更高版本中，此方法会将 DOM 值重置为其默认值。

## 用法

```plain
element.removeAttributeNS(namespace,attrName);
```

- `namespace` 包含当前属性的 namespace 字符串
- `attrName` 当前移除的属性名字符串

## 例子

```plain
// <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//      special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// now: <div id="div1" width="200px" />
```

## Notes

{{ DOMAttributeMethods() }}

## Specification

[DOM Level 2 Core: removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)
