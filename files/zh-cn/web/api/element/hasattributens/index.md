---
title: Element.hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
---

{{ APIRef("DOM") }}

## 概述

`hasAttributeNS` 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）。

## 语法

```plain
result =element.hasAttributeNS(namespace,localName)
```

- `result` 为返回的布尔值：`true` 或 `false`。
- `namespace` 是一个字符串，表示属性的命名空间。
- `localName` 是一个字符串，表示属性的名称。

## 例子

```plain
// 在为属性设置值之前检测该属性是否存在
var d = document.getElementById("div1");
if (d.hasAttributeNS(
        "http://www.mozilla.org/ns/specialspace/",
        "special-align")) {
   d.setAttribute("align", "center");
}
```

## 备注

该方法与[`hasAttribute`](/zh-CN/docs/Web/API/element/hasAttribute)类似，只是要检查的属性由命名空间和名称指定。只有使用命名空间的 XML 文档才使用方法

{{ DOMAttributeMethods() }}

## 规范

[DOM Level 2 Core: hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)
