---
title: Element.setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
---

{{ APIRef("DOM") }}

`setAttributeNodeNS` 可以给一个元素添加一个新的命名空间的属性节点。

（如果对中文有疑惑，请直接阅读原文）

## Syntax

```plain
replacedAttr = element.setAttributeNodeNS(attributeNode)
```

- `replacedAttr` 是被替换的节点，如果存在，由此函数返回。
- `attributeNode` 是一个属性节点。

## Example

```plain
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
            myNS:special-align="utterleft">one</div>
// <div id="two">two</div>


var myns = "http://www.mozilla.org/ns/specialspace";
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
alert(d2.attributes[1].value) // returns: `utterleft'
```

## Notes

如果指定的属性在元素上存在，接着此属性被新的属性替换的话被替换的属性会被返回。

注意：如果你尝试设置的时候没有克隆那个节点，Mozia 会抛出一个 NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR："Attribute already in use" 错误，因为 DOM 需要克隆属性之后才能重复使用（不像其他节点一样可以被删除）。

{{ DOMAttributeMethods() }}

## Specification

[DOM Level 2 Core: setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)
