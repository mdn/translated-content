---
title: Element：ariaReadOnly 属性
slug: Web/API/Element/ariaReadOnly
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaReadOnly`** 属性反映 [`aria-readonly`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) 属性的值，指示元素不可编辑，但仍可操作。

> [!NOTE]
> 应尽可能使用 `type="text"` 的 HTML {{htmlelement("input")}} 元素或 {{htmlelement("textarea")}}，因为它们内置语义，无需 ARIA 属性。

## 值

具有以下值之一的字符串：

- `"true"`
  - ：用户不能更改该元素的值。
- `"false"`
  - ：用户可以设置该元素的值。

## 示例

此示例中，ID 为 `txtBoxInput` 的元素上的 `aria-readonly` 属性设为 `"true"`，表示该输入当前为只读。使用 `ariaReadOnly` 将其更新为 `"false"`。

```html
<div id="txtboxMultilineLabel">输入文章的标签</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-readonly="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaReadOnly); // "true"
el.ariaReadOnly = "false";
console.log(el.ariaReadOnly); // "false"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：textbox 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
