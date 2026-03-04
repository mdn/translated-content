---
title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: f81599343ec5bd4571b3adaa1c6e4d5ded60b8e1
---

`aria-label` 属性定义了用于为元素命名的字符串值（只要该元素的角色没有[禁止命名](#关联角色)）。

## 描述

有时，元素缺少定义默认{{Glossary("accessible_name", "无障碍名称")}}，或者无障碍名称并不准确描述元素的内容，且在 DOM 中没有可见内容可以与对象相关联以赋予其含义。一个常见的示例是包含 SVG 图标但没有随附任何文本的按钮。

当元素不在[禁止列表](#关联角色)中，没有无障碍名称或或无障碍名称不准确，且在 DOM 中没有可见内容可以通过 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性引用时，你可以使用 `aria-label` 属性为设置了该属性的交互元素提供标签字符串，进而能为交互元素提供无障碍名称。

以下代码示例演示了如何使用 `aria-label` 属性为 `<button>` 元素提供无障碍名称的示例。在这个示例中，按钮由一个 SVG 图形组成而未包含任何文本内容。因此，要让屏幕阅读器用户理解按钮的功能（此示例中即“关闭”）而言，你就必须要使用 `aria-label`。

```html
<button aria-label="关闭">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="black" />
  </svg>
</button>
```

```js
document.querySelector("button").addEventListener("click", () => {
  myDialog.close();
});
```

> [!NOTE]
> `aria-label` 旨在命名隐式或显式角色并不禁止命名的元素。若元素包含可参考的可见标签，且能从中取得元素命名时，我们强烈建议优先使用 `aria-labelledby` 而非 `aria-label`。

大多数内容都有一个从其直接包装元素的文本内容生成的无障碍名称。无障碍名称也可以通过某些属性或相关元素创建。

默认情况下，按钮的无障碍名称是在 {{HTMLElement('button')}} 标签之间的内容，图像的无障碍名称是其 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt) 属性的内容，表单输入的无障碍名称是与之关联的 {{HTMLElement('label')}} 元素的内容。

如果上述选项都不可用，或者如果默认的无障碍名称不合适，则你可以使用 `aria-label` 属性定义元素的无障碍名称。

> [!NOTE]
> 虽然 `aria-label` 可以用于任何可以具有无障碍名称的元素，但在实践中，它仅支持交互元素、[小部件](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#2._小部件角色)、[地标](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#3._地标角色)、图像和 iframe。

在使用 `aria-label` 时，你还需要同时考虑 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)：

- 当用于标注元素的文本*不*可见时，你可以使用 `aria-label`。如果存在可见文本用于标记元素，请改用 `aria-labelledby`。
- `aria-label` 和 `aria-labelledby` 的目的相同，均为元素提供无障碍名称。如果元素没有可引用的可见名称，则请使用 `aria-label` 为用户提供可识别的无障碍名称。如果 DOM 中存在标签文本，并且通过引用这一文本可以获得良好的用户体验，则最好使用 `aria-labelledby`。不要在同一元素上同时使用 `aria-labelledby` 和 `aria-label`，因为在同时使用情况下 `aria-labelledby` 会优先于 `aria-label`。

在使用 `aria-label` 时，还需要考虑以下额外的准则：

- `aria-label` 属性可以与常规的语义 HTML 元素一起使用；不限于指定了 [ARIA `role`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles) 的元素。
- 不要“滥用”`aria-label`。记住它主要是为辅助技术设计的。若要提供额外的指示或明确 UI，请使用可见文本和 `aria-describedby` 或 [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) 而非 `aria-label`。文本说明应该对所有用户都无障碍，而不应只是屏幕阅读器用户（或者最好使你的 UI 更直观）。

  > [!NOTE]
  > 由于 `aria-label` 内容在辅助技术之外不显示，请考虑让所有用户看到重要信息。

- 并非所有元素都可以获得无障碍名称。`aria-label` 和 `aria-labelledby` 均不应该与 `code`、`term` 和 `emphasis` 这样的行内结构角色以及未映射到辅助技术 API 的角色（包括 `none`）一起使用。`aria-label` 属性适用于链接、视频、表单控件以及具有[地标角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#3._地标角色)或[小部件角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#2._小部件角色)的元素；当 DOM 中不存在可见标签时，`aria-label` 提供了无障碍名称。
- 如果为 {{HTMLElement('iframe')}} 分配了 `title`，为 {{HTMLElement('img')}} 定义了 `alt` 属性，或为 {{HTMLElement('input')}} 添加了 {{HTMLElement('label')}}，则不需要 `aria-label`。但是，如果存在 `aria-label` 属性，则它将优先于 iframe 的 `title`，图像的 `alt` 或 input 的 `<label>` 文本作为该元素的无障碍名称。

## 值

- `<string>`
  - : 一个文本字符串，将作为对象的无障碍名称。

## 关联接口

- {{domxref("Element.ariaLabel")}}
  - : {{domxref("Element")}} 接口的 [`ariaLabel`](/zh-CN/docs/Web/API/Element/ariaLabel) 属性反映了 `aria-label` 属性的值。
- {{domxref("ElementInternals.ariaLabel")}}
  - : {{domxref("ElementInternals")}} 接口的 [`ariaLabel`](/zh-CN/docs/Web/API/Element/ariaLabel) 属性反映了 `aria-label` 属性的值。

## 关联角色

几乎所有角色中都使用 `aria-label` 属性，**除了**不能由开发者提供无障碍名称的角色。

`aria-label` 属性**不**受支持的角色有：

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
