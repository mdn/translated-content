---
title: element.setAttributeNode
slug: Web/API/Element/setAttributeNode
---

{{ ApiRef("DOM") }}

### Summary

`setAttributeNode()` adds a new `Attr` node to the specified element.

### Syntax

```
replacedAttr =element.setAttributeNode(attribute)
```

- `attribute` is the `Attr` node to set on the element.
- `replacedAttr` is the replaced attribute node, if any, returned by this function.

### Example

```
// <div id="one" align="left">one</div>
// <div id="two">two</div>
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNode("align");
d2.setAttributeNode(a);
alert(d2.attributes[1].value)
// returns: `left'
```

### Notes

If the attribute named already exists on the element, that attribute is replaced with the new one and the replaced one is returned.

This method is seldom used, with [`setAttribute()`](/ja/DOM/element.setAttribute) usually being used to change element's attributes.

{{ DOMAttributeMethods() }}

### Specification

[DOM Level 2 Core: setAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-887236154) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode))
