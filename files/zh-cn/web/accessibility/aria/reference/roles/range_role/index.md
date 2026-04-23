---
title: ARIA：range 角色
slug: Web/Accessibility/ARIA/Reference/Roles/range_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`range` 抽象角色是一种表示值范围的通用结构角色。

> [!WARNING]
> `range` 角色是一个[抽象角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#6._抽象角色)。此处包含它是为了文档完整性。Web 开发者不应使用此角色。

## 描述

`range` 角色是一个抽象角色。Web 开发者不可以使用此角色。它是接受值范围内的值的元素的结构角色的超类，包括 [`meter`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)、[`progressbar`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) 和 [`slider`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) 角色。对于这三种角色，请分别考虑使用 {{HTMLElement("meter")}} 元素、{{HTMLElement("progress")}} 元素和 {{HTMLElement("input/range")}}。

## 规范

{{Specifications}}

## 参见

- [ARIA：`structure` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA：`meter` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [ARIA：`progressbar` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [ARIA：`scrollbar` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [ARIA：`slider` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [ARIA：`spinbutton` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- {{HTMLElement("input/range")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("progress")}}
