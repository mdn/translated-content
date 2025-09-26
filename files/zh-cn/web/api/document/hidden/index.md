---
title: Document：hidden 属性
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{ ApiRef("DOM") }}

**`Document.hidden`** 只读属性返回一个表示页面是否被视为隐藏的布尔值。

{{domxref("Document.visibilityState")}} 属性提供了另一种确定页面是否隐藏的方法。

## 值

布尔值，如果页面隐藏则为 `true`，否则为 `false`。

## 示例

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // 修改行为……
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.visibilityState")}}
