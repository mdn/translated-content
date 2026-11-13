---
title: Element：ariaPosInSet 属性
slug: Web/API/Element/ariaPosInSet
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaPosInSet`** 属性反射 [`aria-posinset`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) 属性的值。该属性定义了当前列表项或树形结构中元素的编号或位置。

## 值

一个包含整型的字符串。

## 示例

在本示例中，ID 为 `article2` 的元素上的 `aria-posinset` 属性被设置为“2”。通过使用 `ariaPosInSet`，我们将该值更新为“3”。

```html
<article id="article1" aria-posinset="1">…</article>
<article id="article2" aria-posinset="2">…</article>
```

```js
let el = document.getElementById("article2");
console.log(el.ariaPosInSet); // “2”
el.ariaPosInSet = "3";
console.log(el.ariaPosInSet); // “3”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
