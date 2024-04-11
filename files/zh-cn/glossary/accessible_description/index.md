---
title: 无障碍描述
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 6d37e664f5981436dfbba7a67f008a30c5238e00
---

{{GlossarySidebar}}

**无障碍描述**（Accessible Description）是用户界面元素的描述，可以提供额外的信息给辅助技术，帮助用户理解该元素及其上下文。它是与 HTML 元素相关联的文本描述，可以为辅助技术提供元素除{{glossary("accessible name", "无障碍名称")}}之外的描述内容。

元素的无障碍描述是{{glossary("accessibility tree", "无障碍树")}}的一部分，可使 Web 内容对{{glossary("Screen_reader", "屏幕阅读器")}}和其他辅助技术可用，从而让内容对使用这些技术的用户可用。

{{htmlelement("table")}} 的无障碍描述是其首个 {{htmlelement("caption")}} 的内容；{{htmlelement("figure")}} 的是 {{htmlelement("figcaption")}} 的内容；{{htmlelement("summary")}} 的是 {{htmlelement("details")}} 的内容；而 {{htmlelement("input")}} 按钮元素，则是 `value` 属性的值，除非该元素有 `aria-describedby` 或者 `aria-description` 属性（这些属性优先）。

对于其他的元素，它们的描述需要被编程地与相关的元素关联。在这些例子中，如果 `title` 不是该元素的{{glossary("accessible name", "无障碍名称")}}，那么无障碍描述将由 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)、[`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-description) 或 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 属性提供，且按照这个顺序应用该描述。

无障碍描述被简化为文本字符串。例如，如果元素的 `aria-describedby` 属性值是 HTML 元素 {{htmlelement("img")}} 的 `id`，那么无障碍描述就是图片的描述（通常是图片的 `alt` 属性）。

你可以查看页面上任何元素的无障碍描述：查看浏览器开发工具的无障碍选项卡——它其中就提供了当前选定元素的无障碍信息。

## 参见

- {{glossary("accessible name", "无障碍名称")}}术语
- [ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
- [ARIA 属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)
- [无障碍](/zh-CN/docs/Web/Accessibility)
- [学习无障碍](/zh-CN/docs/Learn/Accessibility)
