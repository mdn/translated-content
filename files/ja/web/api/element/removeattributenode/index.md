---
title: element.removeAttributeNode
slug: Web/API/Element/removeAttributeNode
---

{{ ApiRef("DOM") }}

### Summary

`removeAttributeNode` removes the specified attribute from the current element.

### Syntax

```
removedAttr =element.removeAttributeNode(attributeNode)
```

- `attributeNode` is the `Attr` node that needs to be removed.
- `removedAttr` is the removed `Attr` node.

### Example

```
// <div id="top" align="center" />
var d = document.getElementById("top");
var d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align has a default value, center,
// so the removed attribute is immediately
// replaced: <div id="top" align="center" />
```

### Notes

If the removed Attribute has a default value it is immediately replaced. The replacing attribute has the same namespace URI and local name, as well as the original prefix, when applicable.

{{ DOMAttributeMethods() }}

### Specification

[DOM Level 2 Core: removeAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-D589198) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttributeNode))
