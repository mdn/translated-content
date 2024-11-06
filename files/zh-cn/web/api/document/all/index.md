---
title: Document：all 属性
slug: Web/API/Document/all
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{DOMxRef("Document")}} 接口的 **`all`** 只读属性会返回以文档节点为根的 {{DOMxRef("HTMLAllCollection")}} 集合。

与其使用 `document.all` 来按文档顺序返回包含所有文档元素的 {{DOMxRef("HTMLAllCollection")}}，不如使用 {{DOMxRef("Document.querySelectorAll")}} 按文档顺序返回包含所有文档元素的 {{DOMxRef("NodeList")}}：

```js
const allElements = document.querySelectorAll("*");
```

## 值

{{DOMxRef("HTMLAllCollection")}}，其中包含文档中的所有元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
