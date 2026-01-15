---
title: Element：ariaActiveDescendantElement 属性
slug: Web/API/ElementInternals/ariaActiveDescendantElement
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

{{domxref("ElementInternals")}} 接口的 **`ariaActiveDescendantElement`** 属性用于表示当焦点位于 [`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) 微件、[`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) 或 [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) 上时的当前活动元素。

[`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 主题包含有关该属性和属性应如何使用的更多信息。

## 值

一个表示活动后代的 {{domxref("HTMLElement")}} 子类，如果没有活动后代，则为 `null`。

## 描述

该属性是 [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性的灵活替代方案。与 `aria-activedescendant` 不同，分配给该属性的元素不必具有 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。

该属性反映元素的 [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 属性（如果已定义），但仅适用于匹配有效范围内的元素的引用 `id` 值。如果设置该属性，则相应的属性会被清除。有关反射元素引用和范围的更多信息，请参见*反射属性*指南中的[反射元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#反射元素引用)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性
- {{domxref("Element.ariaActiveDescendantElement")}}
- *反射属性*指南中的[反射元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#反射元素引用)。
