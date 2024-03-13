---
title: HTMLAnchorElement.download
slug: Web/API/HTMLAnchorElement/download
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.download`** 属性是一个{{jsxref("DOMString")}} ，表明链接的资源将被下载，而不是显示在浏览器中。该值表示下载文件的建议名称。如果该名称不是基础操作系统的有效文件名，浏览器将对其进行调整。

> **备注：** 该值对于下载行为来说不一定是有用的，同时也不能决定下载行为是否发生。

## 语法

```
var dnload = anchorElt.download;
anchorElt.download = dnload;
```

## 规范

{{Specifications}}

## 浏览器的兼容性

{{Compat}}
