---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`aria-activedescendant` 属性用于标识焦点位于 [`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) 微件、[`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)或 [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) 上时当前活动的元素。

## 描述

`aria-activedescendant` 属性为辅助技术提供了一种在交互元素包含多个可聚焦后代时（例如菜单、网格和工具栏），进行焦点管理的方法。与屏幕阅读器在拥有的元素之间移动焦点不同，`aria-activedescendant` 可以在容器元素上使用，引用当前活动的元素，用于在聚焦时向辅助技术用户指示当前活动的元素。

使用 `aria-activedescendant`，浏览器会将 DOM 焦点保持在容器元素或控制容器元素的输入元素上。但是，用户代理将桌面聚焦事件和状态发送给辅助技术，就好像 `aria-activedescendant` 引用的元素具有焦点一样。

此属性仅适用于具有 [`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) 微件、[`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) 或 [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) 角色的元素，其 `id` 被引用为属性值。

该属性用于为辅助技术提供有关焦点位于哪个元素的信息，但实际上不会创建焦点。使用 JavaScript 来更改焦点并管理属性值。除了管理该属性值之外，确保当前活动的后代在聚焦时可见并在视野内（或滚动到视野内）。

在具有 DOM 焦点的元素上设置 `aria-activedescendant` 的值时，确保该值引用所拥有的元素——即 DOM 焦点元素的后代或由 [`aria-owns`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性指示的逻辑后代。

当具有 DOM 焦点的元素是组合框、文本框或搜索框时，请包括 [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 以引用支持 `aria-activedescendant` 的元素。

`aria-activedescendant` 的值引用受控元素所拥有的元素。例如，在组合框中，焦点可能仍然位于组合框上，但组合框元素上的 `aria-activedescendant` 的值引用由组合框控制的弹出列表框的后代。

> [!NOTE]
> 该属性仅支持少数角色。例如，`dialog` 不支持 `aria-activedescendant`。当组合框打开对话框时，DOM 焦点从组合框移动到对话框，因为它不能通过此属性进行引用。

> [!NOTE]
> 当焦点位于 `listbox`、`grid` 或 `tree` 弹出窗口的后代时，DOM 焦点保持在组合框上，并且组合框的 `aria-activedescendant` 设置为引用弹出窗口内的焦点元素的值。

## 值

- ID 引用
  - : 其值为当前具有焦点元素的 `id`。

## 关联角色

仅适用于具有以下角色的元素的属性：

- [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## 规范

{{Specifications}}
