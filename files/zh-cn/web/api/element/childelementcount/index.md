---
title: Element：childElementCount 属性
slug: Web/API/Element/childElementCount
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.childElementCount`** 只读属性返回该元素的子元素数量。

## 示例

```js
let sidebar = document.getElementById("sidebar");
if (sidebar.childElementCount > 0) {
  // 做点什么
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
