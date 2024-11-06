---
title: aria-atomic
slug: Web/Accessibility/ARIA/Attributes/aria-atomic
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

在 ARIA 实时区域中，`aria-atomic` 全局属性指示辅助技术（如屏幕阅读器）是否基于由 [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性定义的更改通知，呈现所有或仅部分更改区域。

## 描述

实时区域是网页的部分，在用户焦点在其他地方时更新，无论是通过用户交互还是其他方式。由于它们在用户焦点之外更新，因此辅助技术（如屏幕阅读器）可能无法“看到”更新并将其报告给用户。WAI-ARIA 有 4 个属性，允许开发人员识别这些实时区域并告诉辅助技术如何处理它们，包括 [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live)、[`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)、[`aria-busy`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-busy) 和 `aria-atomic`。

当实时区域的内容发生更改时，DOM 从更改的元素经过其祖先以找到首个设置了 `aria-atomic` 的元素。这确定了应该向用户呈现的内容。

如果没有祖先明确设置了 `aria-atomic`，则仅读取已更新的实时区域内容的节点或节点。省略 `aria-atomic` 和显式设置 ARIA 实时区域的祖先节点的差异在于，显式设置 `aria-atomic="false"` 会阻止屏幕阅读器上溯祖先链。两者都导致仅读取更新的节点。当设置为 `aria-atomic="true"` 时，将呈现整个更改的区域，包括更新的节点的 `label`（如果存在）。

## 值

- `false`（默认）
  - : 仅呈现更改的节点或节点。
- `true`
  - : 呈现整个更改的区域，包括作者定义的标签（如果存在）。

## 关联角色

适用于**所有**[角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)。

## 规范

{{Specifications}}

## 参见

- [Event.ariaAtomic](/zh-CN/docs/Web/API/Element/ariaAtomic)
