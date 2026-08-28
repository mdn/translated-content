---
title: Element：role 属性
short-title: role
slug: Web/API/Element/role
l10n:
  sourceCommit: 0b9c68dc63f9c6803cced8d9a76c31012d87b530
---

{{ ApiRef("DOM") }}

{{domxref("Element")}} 接口的 **`role`** 属性返回为元素显式设置的 [WAI-ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles)。

所有 HTML 元素都有隐式 ARIA 角色，即使该角色是 [`generic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)。这种语义关联使工具能够以符合用户对同类对象预期的方式呈现对象并支持与其交互。`role` 属性用于显式设置元素的 ARIA 角色，并覆盖隐式角色。例如，隐式角色为 [`list`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) 的 {{htmlelement("ul")}} 可显式设为 [`role="treegrid"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)。`role` 属性反映显式设置的 `role` 属性值——此例为 `treegrid`；除非显式设置，否则不会返回元素隐式的 `list` 角色。

已定义 ARIA 角色的完整列表见 [ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles)参考页。

## 值

字符串，即 `role` 属性值；若未显式设置则为 `null`。

## 示例

此示例会向 `alt` 属性为空或缺失的图像赋予 [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) `role`：

```js
const images = document.querySelectorAll("img");
images.forEach((image) => {
  if (!image.alt) {
    image.role = "presentation";
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ElementInternals.role")}}
- [ARIA 属性](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes)
