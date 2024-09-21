---
title: aria-current
slug: Web/Accessibility/ARIA/Attributes/aria-current
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

一个非空的 `aria-current` 状态在一个元素上表示该元素代表了在容器或一组相关元素中的当前项。

## 描述

当你有一组相关元素时，例如多个链接在面包屑导航中，或多个步骤在多步骤流程中，其中一个元素通过不同的样式来指示这是当前的元素时，`aria-current` 应该被用来通知辅助技术用户这个元素的状态，正如视觉上所呈现的样式一样。

在面包屑列表中，当一条链接被样式化以表示用户当前所在的页面时，应该在该链接上设置 `aria-current="page"`。在一个基于步骤的多步骤流程中，例如多页调查或多步骤结账或注册流程，当当前步骤的图标视觉上不同以表示这是当前步骤时，该图标的容器应该设置 `aria-current="step"` 以供那些可能无法“看到”视觉差异的辅助技术用户使用。

`aria-current` 属性表示在其上设置的元素，值不为 `false`，代表该元素在容器或一组相关元素中的当前项。只应在一组元素中标记一个元素为当前元素。

`aria-current` 属性接受一个有限的[值](#值)，包括 `page`、`step`、`location`、`date`、`time`、`true` 和 `false`。任何不在此列表中的非空字符串值都被视为设置了 `aria-current="true"`，而不是默认的 `false` 值。如果属性不存在、为空字符串、没有值，或者设置为 `aria-current="false"`，则不会向用户公开该属性。

当某项被选中而不是当前时，例如在 [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role) 中的 [`tablist`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tablist_role)，使用 [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected) 来指示当前显示的 tabpanel。

> [!NOTE]
> 不要使用 `aria-current` 作为 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)、[`option`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)、[`row`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role) 或 [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role) 中 [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected) 的替代品。

## 示例

面包屑中的“当前页面”应该设置 `aria-current="page"`。

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">Web technology for developers</a>
    </li>
    <li>
      <a href="../../../../">Accessibility</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">ARIA States and Properties</a>
    </li>
    <li>
      <a href="./" aria-current="page">ARIA: `aria-current` attribute</a>
    </li>
  </ol>
</nav>
```

如果代表当前页面的元素在面包屑中不是链接，则 `aria-current` 是可选的。

## 值

- `page`
  - : 代表一组页面中的当前页面，例如在面包屑中指向当前文档的链接。
- `step`
  - : 代表一个过程中的当前步骤，例如在一个枚举的多步骤结账流程中的当前步骤。
- `location`
  - : 代表环境或上下文中的当前地点，例如在流程图中视觉上高亮显示的当前组件。
- `date`
  - : 代表一组日期中的当前日期，例如在日历中的当前日期。
- `time`
  - : 代表一组时间中的当前时间，例如在时间表中的当前时间。
- `true`
  - : 代表一组中的当前项。
- `false` (默认)
  - : 不代表一组中的当前项。

## 关联接口

- {{domxref("Element.ariaCurrent")}}
  - : [`ariaCurrent`](/zh-CN/docs/Web/API/Element/ariaCurrent) 属性，作为 {{domxref("Element")}} 接口的一部分，反映了 `aria-current` 属性的值。
- {{domxref("ElementInternals.ariaCurrent")}}
  - : {{domxref("ElementInternals")}} 接口的 [`ariaCurrent`](/zh-CN/docs/Web/API/ElementInternals/ariaCurrent) 属性反映了 `aria-current` 属性的值。

## 相关角色

适用于所有角色；但 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)、[`option`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)、[`row`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role) 和 [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role) 中应使用 [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected)

## 规范

{{Specifications}}

## 参见

- [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [使用 `aria-current` 的面包屑导航](/zh-CN/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)
