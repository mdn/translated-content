---
title: Node.isDefaultNamespace
slug: Web/API/Node/isDefaultNamespace
---

{{ ApiRef() }}

### 概述

`isDefaultNamespace` 接受一个命名空间 URI 作为参数，如果该命名空间是当前节点的默认命名空间，则返回`true`,否则返回`false`.

### 语法

```plain
result = node.isDefaultNamespace(namespaceURI)
```

- `result` 为 `true` 或 `false`.
- `namespaceURI` 为一个命名空间 URI.

### 例子

```plain
var XULNS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var el = document.getElementsByTagNameNS(XULNS, 'textbox')[0];
alert(el.isDefaultNamespace(XULNS)); // true
```

### 规范

- [DOM Level 3 Core: isDefaultNamespace](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace)
- [Code snippets: isDefaultNamespace](/zh-CN/Code_snippets/IsDefaultNamespace)
