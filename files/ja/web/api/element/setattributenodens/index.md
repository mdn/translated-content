---
title: element.setAttributeNodeNS
slug: Web/API/Element/setAttributeNodeNS
---

\<breadcrumbs>\</breadcrumbs>{{ ApiRef("DOM") }}== Summary ==

### 概要

\<code>setAttributeNodeNS\</code> adds a new attribute node with the specified namespace and name. `setAttributeNodeNS` は指定の名前空間と名前で新しい属性ノードを追加します。== Syntax ==

### 構文

```
replacedAttr = element.setAttributeNodeNS(attributeNode)
```

\* \<code>replacedAttr\</code> is the replaced attribute node, if any, returned by this function. \* \<code>attributeNode\</code> is an \<code>Attr\</code> node.

- `replacedAttr` は、この関数によって返されるのであれば、置き換えられた属性ノードです。
- `attributeNode` は `Attr` ノードです.

### Example

```
// <div id="one" special-align="utterleft">one</div>
// <div id="two">two</div>

var myns = "http://www.mozilla.org/ns/specialspace";
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a);

alert(d2.attributes[1].value) // returns: `utterleft'
```

### 注記

If the specified attribute already exists on the element, then that attribute is replaced with the new one and the replaced one is returned. 指定の属性が既に存在しているときは、その属性新しいものに置き換えられ、置き換えられたものが戻り値として返されます。

{{ DOMAttributeMethods() }}== Specification ==

### 仕様

[DOM Level 2 Core: setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)
