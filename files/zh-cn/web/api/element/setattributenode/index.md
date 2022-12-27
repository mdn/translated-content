---
title: Element.setAttributeNode()
slug: Web/API/Element/setAttributeNode
---

{{ APIRef("DOM") }}

`setAttributeNode()` 为指定的 Element 添加属性节点。

## Syntax

```plain
var replacedAttr = element.setAttributeNode(attribute);
```

- `attribute 是添加到 element 中的属性节点`.
- `replacedAttr` 是被替换掉的属性节点。如果存在原有属性，则函数返回原有属性节点。

## Example

```plain
// <div id="one" align="left">one</div>
// <div id="two">two</div>
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNode("align");
d2.setAttributeNode(a.cloneNode(true));
alert(d2.attributes[1].value)
// returns: `left'
```

## Notes

如果 element 中已经存在该属性名的属性，则函数使用新的属性替换掉原有的属性并将原有属性返回

这个方法很少被用到，多数情况下使用函数 [`setAttribute()`](/zh-CN/DOM/element.setAttribute) 修改 element 的属性。

{{ DOMAttributeMethods() }}

## Specification

[DOM Level 2 Core: setAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-887236154) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode))
