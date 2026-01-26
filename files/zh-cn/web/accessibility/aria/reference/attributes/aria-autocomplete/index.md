---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`aria-autocomplete` 属性指示对于 [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`searchbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) 或 [`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)，输入文本是否可能触发显示用户预期值的一个或多个预测，并指定如果进行预测，预测将如何呈现。

## 描述

自动填充是一种用户界面特性，当用户在输入时，会动态地提供内联建议。建议的文本用于完成字段的数值，在输入光标后动态出现在字段中，如果用户执行导致焦点离开该字段的操作（如按 Tab 键），建议的数值将成为字段的值。

`aria-autocomplete` 属性描述了文本框、搜索框或组合框在动态帮助用户完成文本输入时将使用的自动填充交互模型的类型。它区分了两种模型：**内联**模型（`aria-autocomplete="inline"`），它呈现单个预测值；**列表**模型（`aria-autocomplete="list"`），它在与文本输入相邻的位置或下方显示可能的值的集合，类似于 {{HTMLElement('datalist')}}。第三个值，`aria-autocomplete="both"` 表示接口将同时呈现列表并包含预测值。默认值是 `none`，表示文本框、搜索框或组合框不提供自动填充值。

`aria-autocomplete` 属性仅描述了输入元素的预测行为类型，而不提供功能。实际的自动填充应该使用 HTML 属性或 JavaScript 提供。

如果建议的自动填充值提供的建议值不依赖于用户提供的输入，则考虑为所有人省略自动填充。例如，搜索框输入显示未过滤的最近搜索术语可能对电子商务网站上的营销团队有所帮助，但对于屏幕阅读器用户可能没有帮助。最好不指定 `aria-autocomplete` 的值或将值设置为 `none` 默认时，因为非辅助技术用户可能也不需要该体验。

在实现自动填充功能时，确保建议部分值以选定文本的形式呈现，以便区分用户的输入和建议。确保当建议的值不是所需值时，用户可以轻松地删除建议或继续输入以替换它。

在实现值列表时，当显示建议列表时，DOM 焦点应保留在文本输入上。

- 包括具有建议值 id 的值的 [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)。
- 包括与包含建议值集合的元素的角色匹配的 [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)。
- 管理焦点，如果需要，包括使用 [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)，如果集合容器支持。
- 使用具有 [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) 角色的元素上的 [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 状态来传达列表是否显示。

如果在字段失去焦点时自动接受自动填充列表值，则列表必须包含在支持 `aria-activedescendant` 的角色中，输入字段上的 `aria-activedescendant` 值动态调整为引用包含选定建议的元素。

## 值

- `none`（默认）
  - : 当用户提供输入时，不显示自动建议。
- `inline`
  - : `aria-autocomplete="inline"` 文本提供一种完成提供的输入的方式的建议文本可能会动态插入到插入符后。
- `list`
  - : `aria-autocomplete="list"` 当用户提供输入时，可能会显示包含可能完成提供的输入的值集合的元素。
- both
  - : `aria-autocomplete="both"` 输入同时提供两种模型。当用户提供输入时，可能会显示包含可能完成提供的输入的值集合的元素。如果显示，则集合中的一个值将自动选定，并且完成自动选定值所需的文本将显示在输入的插入符后。

## 关联角色

在以下角色中使用：

- [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) 角色
- [`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) 角色
- 继承自 [`searchbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) 角色

## 规范

{{Specifications}}

## 参见

- [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) 角色
- [`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) 角色
- [`searchbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) 角色
- {{HTMLElement('datalist')}} 元素和 [`<input> list` 属性](/zh-CN/docs/Web/HTML/Reference/Elements/input#list)
- [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性
- [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) 属性
- [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性
- [带有内联和列表自动填充的可编辑组合框示例](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/)
- [Event.ariaAutoComplete](/zh-CN/docs/Web/API/Element/ariaAutoComplete)
