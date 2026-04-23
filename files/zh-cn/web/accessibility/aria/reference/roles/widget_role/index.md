---
title: ARIA：widget 角色
slug: Web/Accessibility/ARIA/Reference/Roles/widget_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

**`widget`** 角色是一个指示图形用户界面的交互式微件的[抽象角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#6._抽象角色)。

> [!WARNING]
> `widget` 是一个用于本体的抽象角色。此处包含它是为了文档的完整性。它不应由 Web 开发者使用。

## 描述

`widget` 抽象角色是一些交互式 GUI 元素和分组角色的超类角色。`role="widget"` 不应与微件角色混淆，例如 `option`、`menuitem` 和 `searchbox`。

`widget` 角色是几个抽象交互式 GUI 角色的超类角色，包括 [`command`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/command_role)、[`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)、[`input`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)、[`range`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) 和 [`separator`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)（如果可聚焦），这些角色不应由 Web 开发者使用。

抽象的 `widget` 角色也是某些分组角色的超类角色，这些分组角色可以由 Web 开发者使用，包括 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`row`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)、[`separator`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)（当不可聚焦时）和 [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)，在适当情况下可以且应该被使用。当用户导航到微件的这些非抽象角色之一时，键盘事件可以切换到应用程序浏览模式，并将键盘事件传递给浏览器。

## 规范

{{Specifications}}

## 参见

- [ARIA：`roletype` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA：`command` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/command_role)
- [ARIA：`composite` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA：`gridcell` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA：`input` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [ARIA：`range` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA：`row` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA：`separator` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [ARIA：`tab` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
