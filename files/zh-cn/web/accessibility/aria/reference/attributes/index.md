---
title: ARIA 状态及属性
slug: Web/Accessibility/ARIA/Reference/Attributes
---

这个页面列出了 MDN 上讨论的所有 WAI-ARIA 属性的参考页面。

ARIA 属性用于修改无障碍树中定义的元素的状态和属性。

> [!NOTE]
> ARIA 仅用于修改无障碍树，进而改变辅助技术向用户呈现内容的方式。ARIA 不会改变元素的功能或行为。当使用非语义化的 HTML 元素来实现其他功能时，你必须使用 JavaScript 来控制元素的实际行为、焦点以及 ARIA 状态。

## ARIA 特性类别

ARIA 的状态和属性（合称为“特性”）共有 4 类：

### 微件（widget）特性

- [`aria-autocomplete`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### 活动区域特性

- [`aria-busy`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

### 拖放特性

- [`aria-dropeffect`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-grabbed`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)

### 关系特性

- [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

## 全局 ARIA 特性

无论是否应用了 ARIA 角色，某些状态和属性始终适用于所有的 HTML 元素。它们被定义为“全局”特性。所有角色和基本标记元素都支持全局状态和属性。

上面所列出的许多特性都是全局的，这意味着除非被“特别禁止”，它们可以被包含在任意的元素中：

- [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-current`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-dropeffect`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-grabbed`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-owns`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)

除了 `aria-label` 和 `aria-labelledby` 这两个被“特别禁止”的属性，其他属性是全局适用的。这两个被“特别禁止”的属性无法在具有 [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) 角色或与其同义的 [`none`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) 角色的元素上使用。

## MDN 上介绍的状态和属性

以下是 <abbr>MDN</abbr> 上介绍的 <abbr>WAI-ARIA</abbr> 状态和属性。

{{SubpagesWithSummaries}}

## 参见

- [使用 ARIA：角色、状态和属性](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Techniques)
