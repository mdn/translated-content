---
title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`aria-label` 属性定义了一个字符串值，用于为交互元素提供标签。

## 描述

有时，元素的默认{{Glossary("accessible_name", "无障碍名称")}}缺失，或者无障碍名称并不准确描述元素的内容，且在 DOM 中没有可见内容可以与对象相关联以赋予其含义。一个常见的示例是包含 SVG 或没有任何文本的图标字体的按钮。（查看这个关于[为什么不应该使用图标字体的视频](https://www.youtube.com/watch?v=9xXBYcWgCHA)。）

在交互元素没有无障碍名称或无障碍名称不准确，且在 DOM 中没有可见内容可以通过 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性引用时，可以使用 `aria-label` 属性定义一个字符串，为设置了该属性的交互元素提供标签。这样做为交互元素提供了无障碍名称。

以下代码示例演示了如何使用 `aria-label` 属性为 `<button>` 元素提供无障碍名称的示例。在这个示例中，按钮包含一个 SVG 图形并且缺乏文本内容，使得对于屏幕阅读器用户理解其功能（在本例中为“关闭”）而言，`aria-label` 是必不可少的。

```html
<button aria-label="关闭" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> [!NOTE]
> `aria-label` 用于交互元素，或当 DOM 中没有可见文本可以作为标签时，通过其他 ARIA 声明使元素变为交互元素的情况。

大多数内容都有一个从其直接包装元素的文本内容生成的无障碍名称。无障碍名称也可以通过某些属性或相关元素创建。

默认情况下，按钮的无障碍名称是在 {{HTMLElement('button')}} 标签之间的内容，图像的无障碍名称是其 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt) 属性的内容，表单输入的无障碍名称是相关的 {{HTMLElement('label')}} 元素的内容。

如果这些选项都不可用，或者如果默认的无障碍名称不合适，则使用 `aria-label` 属性定义元素的无障碍名称。

> [!NOTE]
> 虽然 `aria-label` 可以用于任何可以具有无障碍名称的元素，但在实践中，它仅支持交互元素、[小部件](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#2._小部件角色)、[地标](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#3._地标角色)、图像和 iframe。

在使用 `aria-label` 时，还需要考虑 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)：

- 在用于标注元素的文本*不*可见的情况下，可以使用 `aria-label`。如果存在可见文本用于标记元素，请改用 `aria-labelledby`。
- `aria-label` 和 `aria-labelledby` 的目的相同。两者都为元素提供无障碍名称。如果元素没有可见名称可以引用，则使用 `aria-label` 为用户提供可识别的无障碍名称。如果 DOM 中存在标签文本，并且可以引用它以获得良好的用户体验，则最好使用 `aria-labelledby`。不要在同一元素上同时使用 `aria-labelledby` 和 `aria-label`，因为如果两者都应用，则 `aria-labelledby` 会优先于 `aria-label`。

在使用 `aria-label` 时，还需要考虑以下额外的准则：

- `aria-label` 属性可以与常规的语义 HTML 元素一起使用；不限于指定了 [ARIA `role`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles) 的元素。

- 不要“滥用” `aria-label`。记住它主要是为辅助技术设计的。为了提供额外的指示或澄清 UI，请使用可见文本和 `aria-describedby` 或 [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)，而不是 `aria-label`。说明应该对所有用户都无障碍，而不仅仅是屏幕阅读器用户（或者最好使你的 UI 更直观）。

  > [!NOTE]
  > 由于 `aria-label` 内容在辅助技术之外不显示，请考虑让所有用户看到重要信息。

- 并非所有元素都可以获得无障碍名称。`aria-label` 和 `aria-labelledby` 均不应该与 `code`、`term` 和 `emphasis` 这样的行内结构角色以及未映射到辅助技术 API 的角色（包括 `none`）一起使用。`aria-label` 属性适用于链接、视频、表单控件以及具有[地标角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#3._地标角色)或[小部件角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#2._小部件角色)的元素；当 DOM 中不存在可见标签时，`aria-label` 提供了无障碍名称。

- 如果为 {{HTMLElement('iframe')}} 分配了 `title`，为 {{HTMLElement('img')}} 定义了 `alt` 属性，或为 {{HTMLElement('input')}} 添加了 {{HTMLElement('label')}}，则不需要 `aria-label`。但是，如果存在 `aria-label` 属性，则它将优先于 iframe 的 `title`，图像的 `alt` 或 input 的 `<label>` 文本作为该元素的无障碍名称。

## 值

- `<string>`
  - : 一个文本字符串，将作为对象的无障碍名称。

## 关联接口

- {{domxref("Element.ariaLabel")}}
  - : [`ariaLabel`](/zh-CN/docs/Web/API/Element/ariaLabel) 属性是 {{domxref("Element")}} 接口的一部分，反映了 `aria-label` 属性的值。
- {{domxref("ElementInternals.ariaLabel")}}
  - : [`ariaLabel`](/zh-CN/docs/Web/API/Element/ariaLabel) 属性是 {{domxref("ElementInternals")}} 接口的一部分，反映了 `aria-label` 属性的值。

## 关联角色

几乎所有角色中都使用 `aria-label` 属性，**除了**不能由作者提供无障碍名称的角色。

aria-label 属性**不**受支持的角色有：

- [`code`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`definition`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`term`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## 规范

{{Specifications}}

## 参见

- {{HTMLElement('label')}} 元素
- [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- MDN 博客中的[使用 HTML 地标角色来提高无障碍性](/en-US/blog/aria-accessibility-html-landmark-roles/)（2023）
