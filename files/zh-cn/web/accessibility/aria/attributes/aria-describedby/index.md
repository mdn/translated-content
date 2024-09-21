---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

全局的 `aria-describedby` 属性用于标识设置该属性的元素的描述。

## 描述

`aria-describedby` 属性列出了描述对象的元素的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id)。它用于建立微件或组与描述它们的文本之间的关系。

`aria-describedby` 属性不限于表单控件。它还可以用于将静态文本与微件、元素组、带有标题的区域、定义等关联。该属性可与语义 HTML 元素及具有 ARIA [`role`](/zh-CN/docs/Web/Accessibility/ARIA/Roles) 的元素一起使用。

`aria-describedby` 属性与 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性非常相似。虽然 `aria-labelledby` 列出了标签或描述对象本质的元素的 `id`，`aria-describedby` 列出了提供更多用户可能需要的信息的描述元素的 `id`。这两个属性都引用其他元素来计算文本替代，但标签应该简洁，而描述则意在提供更详细的信息；标签描述对象的本质，而描述提供用户可能需要的更多信息。

通过 `aria-describedby` 连接的元素不需要可见。可以引用一个即使被隐藏的元素。例如，表单控件可以有一个默认隐藏的描述，通过诸如“更多信息”图标的显示控件来显示。可视用户点击该图标；对于辅助技术用户，描述直接通过该表单字段的 `aria-describedby` 引用。

`aria-describedby` 属性适用于关联内容包含以纯文本形式表达的描述。如果内容较大、包含有用的语义或具有复杂结构需要用户导航，则使用 [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-details)。`aria-details` 允许辅助技术用户访问关联的结构化内容，并提供额外的导航命令，使理解结构更容易，或者以较小的片段体验信息。

> [!NOTE] 
> `aria-describedby` 的内容应仅为文本字符串。如果内容中有重要的潜在语义，请考虑使用 [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-details)。

## 示例

```html
<button aria-describedby="trash-desc">移到垃圾桶</button>
…
<p id="trash-desc">垃圾桶中的项目将在 30 天后被永久删除。</p>
```

> [!NOTE] 
> `aria-describedby` 属性并不是为了引用外部资源中的描述。由于其值是一个或多个 `id`（如果多个则以空格分隔），因此必须引用同一 DOM 文档中的元素。

## 值

- ID 引用列表
  - : 描述当前元素的元素 `id` 或以空格分隔的 `id` 列表。

## 相关角色

在**所有**角色中使用。可用于所有 HTML 元素。

## 规范

{{Specifications}}

## 参见

- {{HTMLElement('label')}}
- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [浏览器和 AT 对 `aria-describedby` 的支持](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
