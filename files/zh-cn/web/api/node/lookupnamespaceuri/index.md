---
title: Node.lookupNamespaceURI
slug: Web/API/Node/lookupNamespaceURI
---

{{APIRef("DOM")}}

返回当前节点上与指定命名空间前缀绑定的命名空间 URI，如果没有，返回`null，如果参数为 null`,返回默认的命名空间。

根据 [bug 312019](https://bugzilla.mozilla.org/show_bug.cgi?id=312019), 该方法对动态指定的命名空间不起作用。（也就是通过 [Node.prefix](/zh-CN/docs/Web/API/Element/prefix) 指定的）。

### 相关链接

- [http://www.w3.org/TR/DOM-Level-3-Cor...upNamespaceURI](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI)
- [Code snippets: lookupNamespaceURI](/zh-CN/Code_snippets/LookupNamespaceURI)
