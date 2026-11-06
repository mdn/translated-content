---
title: Element：ariaExpanded 属性
short-title: ariaExpanded
slug: Web/API/Element/ariaExpanded
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaExpanded`** 属性反映 [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性的值，该属性指示由此元素拥有或控制的分组元素处于展开还是折叠状态。

## 值

一个具有以下值之一的字符串：

- `"true"`
  - : 此元素拥有或控制的分组元素处于展开状态。
- `"false"`
  - : 此元素拥有或控制的分组元素处于折叠状态。
- `"undefined"`
  - : 该元素不拥有或不控制可展开的分组元素。

## 示例

在这个示例中，ID 为 `animal` 的元素上的 `aria-expanded` 属性被设置为 "false"。我们使用 `ariaExpanded` 将值更新为 "true"。

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-expanded="false"
    aria-haspopup="true" />
  <button id="animals-button" tabindex="-1" aria-label="Open">▽</button>
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaExpanded); // false
el.ariaExpanded = "true";
console.log(el.ariaExpanded); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
