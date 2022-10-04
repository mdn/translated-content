---
title: Axes
slug: Web/XPath/Axes
---

{{ XsltRef() }} There are thirteen different axes in the [XPath](cn/XPath) specification. An axis represents a relationship to the context node, and is used to locate nodes relative to that node on the tree. The following is an extremely brief description of the thirteen available axes and the degree of support available in [Gecko](cn/Gecko).

For further information on using XPath expressions, please see the [For Further Reading](cn/Transforming_XML_with_XSLT/For_Further_Reading) section at the end of [Transforming XML with XSLT](cn/Transforming_XML_with_XSLT) document.

- [ancestor](cn/XPath/Axes/ancestor)
  - : Indicates all the ancestors of the context node beginning with the parent node and traveling through to the root node.
- [ancestor-or-self](cn/XPath/Axes/ancestor-or-self)
  - : Indicates the context node and all of its ancestors, including the root node.
- [attribute](cn/XPath/Axes/attribute)
  - : Indicates the attributes of the context node. Only elements have attributes. This axis can be abbreviated with the at sign (`@`).
- [child](cn/XPath/Axes/child)
  - : Indicates the children of the context node. If an XPath expression does not specify an axis, is understood by default. Since only the root node or element nodes have children, any other use will select nothing.
- [descendant](cn/XPath/Axes/descendant)
  - : Indicates all of the children of the context node, and all of their children, and so forth. Attribute and namespace nodes are **not** included - the `parent` of an `attribute` node is an element node, but `attribute` nodes are not the children of their parents.
- [descendant-or-self](cn/XPath/Axes/descendant-or-self)
  - : Indicates the context node and all of its descendants. Attribute and namespace nodes are **not** included - the `parent` of an `attribute` node is an element node, but `attribute` nodes are not the children of their parents.
- [following](cn/XPath/Axes/following)
  - : Indicates all the nodes that appear after the context node, except any `descendant`, `attribute`, and `namespace` nodes.
- [following-sibling](cn/XPath/Axes/following-sibling)
  - : Indicates all the nodes that have the same parent as the context node and appear after the context node in the source document.
- [namespace](cn/XPath/Axes/namespace)
  _(not supported)_
  - : Indicates all the nodes that are in scope for the context node. In this case, the context node must be an element node.
- [parent](cn/XPath/Axes/parent)
  - : Indicates the single node that is the parent of the context node. It can be abbreviated as two periods (`..`).
- [preceding](cn/XPath/Axes/preceding)
  - : Indicates all the nodes that precede the context node in the document except any `ancestor`, `attribute` and `namespace` nodes.
- [preceding-sibling](cn/XPath/Axes/preceding-sibling)
  - : Indicates all the nodes that have the same parent as the context node and appear before the context node in the source document.
- [self](cn/XPath/Axes/self)
  - : Indicates the context node itself. It can be abbreviated as a single period (`.`).
