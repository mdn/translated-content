---
title: Element：ariaDisabled 属性
slug: Web/API/Element/ariaDisabled
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaDisabled`** 属性反映 [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) 属性的值，指示元素可感知但已禁用，因此不可编辑，也无法进行其他操作。

> [!NOTE]
> 应尽可能使用 `type="button"` 的 HTML {{htmlelement("input")}} 元素或 {{htmlelement("button")}} 元素，因为它们内置语义，无需 ARIA 属性。

## 值

具有以下值之一的字符串：

- `"true"`
  - ：元素及其所有可聚焦后代均被禁用但可感知，用户无法更改其值。
- `"false"`
  - ：元素已启用。

## 示例

此示例中，ID 为 `saveChanges` 的元素上的 `aria-disabled` 属性设为 `"true"`，表示该输入当前已禁用。使用 `ariaDisabled` 将该值更新为 `"false"`。

```html
<div id="saveChanges" tabindex="0" role="button" aria-disabled="true">Save</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaDisabled); // "true"
el.ariaDisabled = "false";
console.log(el.ariaDisabled); // "false"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
