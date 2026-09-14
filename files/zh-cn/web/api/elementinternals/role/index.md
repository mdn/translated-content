---
title: ElementInternals：role 属性
slug: Web/API/ElementInternals/role
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Web Components")}}

{{domxref("ElementInternals")}} 接口的 **`role`** 只读属性返回元素的 [WAI-ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles)。例如，复选框可能具有 [`role="checkbox"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)。它反映的是 `role` 属性；除非显式设置，否则不会返回元素的隐式 ARIA 角色。

## 值

一个包含 ARIA 角色的字符串。完整的 ARIA 角色列表可以在 [ARIA 技术页面](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Techniques)上找到。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
