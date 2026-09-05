---
title: Element：ariaAtomic 属性
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaAtomic`** 属性反映了 [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) 属性的值，该属性指示辅助技术是否将根据 [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) 属性定义的更改通知，呈现更改区域的全部内容或仅部分内容。

## 值

具有以下值之一的字符串：

- `"false"`
  - : 辅助技术将仅呈现发生更改的节点。
- `"true"`
  - : 辅助技术将把整个更改区域作为整体呈现，包括作者定义的标签（如果存在）。

## 示例

在此示例中，ID 为 `"clock"` 的元素上的 `aria-atomic` 属性被设置为 `"true"`。通过 `ariaAtomic`，我们将它的值更新为 `"false"`。

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaAtomic); // true
el.ariaAtomic = "false";
console.log(el.ariaAtomic); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
