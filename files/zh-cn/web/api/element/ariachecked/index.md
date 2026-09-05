---
title: Element：ariaChecked 属性
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaChecked`** 属性反映 [`aria-checked`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性的值，该属性指示复选框、单选按钮及其他具有选中状态的小部件当前的“选中”状态。

> [!NOTE]
> 应尽可能使用 `type="checkbox"` 的 HTML {{htmlelement("input")}} 元素，因为该元素内置语义，无需 ARIA 属性。

## 值

具有以下值之一的字符串：

- `"true"`
  - ：元素已选中。
- `"mixed"`
  - ：指示三态复选框或 menuitemcheckbox 的混合状态值。
- `"false"`
  - ：元素支持被选中，但当前未选中。
- `"undefined"`
  - ：元素不支持被选中。

## 示例

此示例中，ID 为 `checkBoxInput` 的元素的 `aria-checked` 属性设为 `"false"`，表示该输入框当前未选中。使用 `ariaChecked` 将其更新为 `"true"`。

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">记住我的偏好设置</label>
```

```js
let el = document.getElementById("checkBoxInput");
console.log(el.ariaChecked); // "false"
el.ariaChecked = "true";
console.log(el.ariaChecked); // "true"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：checkbox 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
