---
title: Element：ariaAutoComplete 属性
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaAutoComplete`** 属性反映了 [`aria-autocomplete`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) 属性的值，该属性指示对于组合框（`combobox`）、搜索框（`searchbox`）或文本框（`textbox`），输入文本是否可能触发显示用户预期值的一个或多个预测，并指定如果进行预测，预测将如何呈现。

## 值

具有以下值之一的字符串：

- `"inline"`
  - : 当用户输入时，建议文本可能被动态插入到光标之后，以提示一种完成当前输入的方式。
- `"list"`
  - : 当用户输入时，可能会显示一个元素，其中包含一组可完成当前输入的候选值。
- `"both"`
  - : 同时提供上述两种模型。当用户输入时，可能会显示包含一组候选值的元素；如果显示，集合中的一个值会被自动选中，且完成该选中值所需的文本会显示在输入框的光标之后。
- `"none"`
  - : 当用户输入时，不会显示任何试图预测用户打算如何完成输入的自动建议。

## 示例

在此示例中，ID 为 `animal` 的元素上的 `aria-autocomplete` 属性被设置为 `"inline"`。通过 `ariaAutoComplete`，我们将它的值更新为 `"list"`，这是调用 `listbox` 弹出框的组合框的预期值。

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="inline"
    aria-controls="animals-listbox"
    aria-expanded="false"
    aria-haspopup="listbox" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaAutoComplete); // inline
el.ariaAutoComplete = "list";
console.log(el.ariaAutoComplete); // list
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
