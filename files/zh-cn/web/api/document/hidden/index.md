---
title: Document.hidden
slug: Web/API/Document/hidden
---

{{ ApiRef("DOM") }}

**`Document.hidden`** （只读属性）返回布尔值，表示页面是（true）否（false）隐藏。

## 语法

```
var string = document.hidden
```

## 示例

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.hidden);
  // Modify behavior...
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
