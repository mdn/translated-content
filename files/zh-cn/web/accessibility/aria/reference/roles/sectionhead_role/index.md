---
title: ARIA：sectionhead 角色
slug: Web/Accessibility/ARIA/Reference/Roles/sectionhead_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

**`sectionhead` 角色**是一个抽象角色，是其相关部分主题标签或摘要的超类角色。

> [!WARNING]
> `sectionhead` 是一个[抽象角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#6._抽象角色)。此处包含该角色是为了文档完整性。它不应由 Web 开发者使用。

## 描述

结构化 `sectionhead` 角色是一个抽象角色，用于标识其所标记部分的标签或摘要的子类角色。Web 开发者不可以使用该角色。它的四个子类角色分别为 [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)、[`heading`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)、[`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) 和 [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)。这些角色在 HTML 中有等效元素，例如，`columnheader` 对应 {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}}，`rowheader` 对应 {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}}，而任何 HTML 标题（{{HTMLElement("Heading_Elements", "h1")}} 至 {{HTMLElement("Heading_Elements", "h6")}}）都可对应 `heading`。目前，`tab` 角色尚无对应的 HTML 元素。

## 规范

{{Specifications}}

## 参见

- [ARIA：`structure` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA：`columnheader` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA：`heading` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [ARIA：`rowheader` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA：`tab` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
