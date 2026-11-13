---
title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: 3810b129d05f1076d271c4498cbecdec30ad1d39
---

`aria-checked` 属性指示复选框、单选按钮和其他小部件的当前“已选中”状态。

> [!NOTE]
> 在可能的情况下，请使用带有 `type="checkbox"` 和 `type="radio"` 的 HTML {{htmlelement("input")}} 元素，因为它们具有内置语义，并且不需要 ARIA 属性。

## 描述

`aria-checked` 属性指示元素是否被选中（`true`）、未选中（`false`）或者选中状态不确定（`mixed`），表示它既未被选中也未取消选中。`mixed` 值受到 [`checkbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) 和 [`menuitemcheckbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) 的三态输入角色支持。

`mixed` 值不受 [`radio`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)、[`menuitemradio`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) 或 [`switch`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) 以及继承自这些角色的元素支持。如果不支持 `mixed`，则值将为 false。

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">订阅时事通讯</label>
```

`tabindex` 属性是为了启用焦点。需要 JavaScript 切换 `aria-checked` 状态。如果此复选框是可提交表单的一部分，则需要更多 JavaScript 来设置名称和值。

以上代码也可以写为：

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">订阅时事通讯</label>
```

通过使用具有 `type="checkbox"` 的 {{htmlelement("input")}} 元素而不是 ARIA，无需任何 JavaScript。

## 值

- false
  - : 元素支持被选中，但当前未被选中。
- true
  - : 元素被选中。
- mixed
  - : 仅适用于 [`checkbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) 和 [`menuitemcheckbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)，相当于 `indeterminate`，表示既不选中也不取消选中的混合模式值。
- undefined（默认）
  - : 元素不支持被选中。

## 关联角色

适用于以下角色：

- [`checkbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## 关联接口

- {{domxref("Element.ariaChecked")}}
  - : {{domxref("Element")}} 接口的 [`ariaChecked`](/zh-CN/docs/Web/API/Element/ariaChecked) 属性反映了 `aria-checked` 属性的值。
- {{domxref("ElementInternals.ariaChecked")}}
  - : {{domxref("ElementInternals")}} 接口的 [`ariaChecked`](/zh-CN/docs/Web/API/Element/ariaChecked) 属性反映了 `aria-checked` 属性的值。

```js
myHTMLElement.ariaChecked = true;
```

## 规范

{{Specifications}}

## 参见

- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/radio)
- [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [双态复选框示例](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/)—w3.org
- [混合状态复选框示例](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/)—w3.org
