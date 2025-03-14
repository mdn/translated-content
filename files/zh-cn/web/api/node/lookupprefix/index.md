---
title: Node.lookupPrefix
slug: Web/API/Node/lookupPrefix
---

{{APIRef("DOM")}}

返回一个和指定命名空间 URI 绑定的命名空间前缀。如果没有，返回 `null`。如果有多个绑定的前缀，返回的结果根据浏览器实现而定。

根据 [bug 312019](https://bugzilla.mozilla.org/show_bug.cgi?id=312019), 该方法对动态指定的命名空间不起作用.(也就是通过[Node.prefix](/zh-CN/docs/DOM/Node.prefix)指定的).

### 相关链接

- [http://www.w3.org/TR/DOM-Level-3-Cor...amespacePrefix](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix)
- [Code snippets: lookupPrefix](/en-US/Code_snippets/LookupPrefix)
