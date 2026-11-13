---
title: HTML inert 全局属性
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`inert`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)是一个表示该元素及其所有平级树后代变为*惰性*的布尔属性。使用 [`showModal()`](/zh-CN/docs/Web/API/HTMLDialogElement/showModal) 生成的模态 {{htmlelement("dialog")}} 不会继承自其祖先的惰性状态，而是只能通过显式设置自身 `inert` 属性来使其成为惰性的。

具体来说，`inert` 做了这些事情：

- 防止用户点击元素时触发 {{domxref("Element/click_event", "click")}} 事件。
- 通过阻止元素获得焦点，防止触发 {{domxref("Element/focus_event", "focus")}} 事件。
- 防止元素中的任何内容在使用浏览器的“在页面中查找”功能时被找到或匹配。
- 防止用户在元素内选择文本——类似于使用 CSS 属性 {{cssxref("user-select")}} 来禁用文本选择。
- 防止用户编辑元素中本可编辑的任何内容。
- 通过将元素及其内容排除在无障碍树之外，使其对辅助技术不可见。

```html
<div inert>
  <!-- 内容 -->
</div>
```

`inert` 属性可用于标记不应具有交互性的内容区域。当元素被设置为 `inert` 时，该元素及其所有后代元素（包括通常具有交互性的元素，如链接、按钮和表单控件）将被禁用，因为它们无法获得焦点或被点击。

`inert` 属性还可以添加到应处于屏幕外或隐藏状态的元素上。当元素处于 `inert` 状态时，该元素及其所有后代元素将从标签顺序和无障碍树中移除。

> [!NOTE]
> 虽然 `inert` 是一个全局属性，可应用于任何元素，但通常用于内容部分。要使单个控件“惰性”，请考虑使用 [`disabled`](/zh-CN/docs/Web/HTML/Reference/Attributes/disabled) 属性，以及 CSS [`:disabled`](/zh-CN/docs/Web/CSS/Reference/Selectors/:disabled) 样式。

## 无障碍考虑

在使用 `inert` 属性时，请务必仔细考虑其无障碍性。默认情况下，无法通过视觉方式判断一个元素或其子树是否为非活动状态。作为 Web 开发者，有责任明确标识出哪些内容部分是活跃的，哪些是静态的。

在提供内容非交互性的视觉和非视觉提示时，请记住视觉视口可能仅包含内容的某些部分。用户可能已放大到内容的某个小区域，或根本无法查看内容。非交互性部分若未明显标识为非交互性，可能导致用户感到沮丧并产生糟糕的用户体验。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HTMLElement("dialog")}} 元素
- {{domxref("HTMLElement.inert")}} HTML DOM 属性
- [介绍 inert](https://web.developers.google.cn/articles/inert)
- [“inert”属性终于要登陆 Web 了！](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
