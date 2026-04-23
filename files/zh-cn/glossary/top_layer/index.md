---
title: 顶层
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

**顶层**是一个跨越整个视口的宽度和高度，并位于网页文档中显示的所有其他层的顶部的层。它由浏览器创建，用于包含应该显示在页面上所有其他内容之上的元素。

在层叠上下文中，位于顶层的元素会生成一个新的[层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)，其对应的 {{cssxref("::backdrop")}} 伪元素也会生成一个新的层叠上下文。

会出现在顶层的元素包括：

- 全屏元素，即通过成功调用 {{domxref("Element.requestFullscreen()")}} 而显示在全屏模式中的元素。
- 通过成功调用 {{domxref("HTMLDialogElement.showModal()")}} 而显示为模态框的 {{htmlelement("dialog")}} 元素。
- 通过成功调用 {{domxref("HTMLElement.showPopover()")}} 而显示的弹出元素。

一些浏览器，例如 Chrome，会在一个特殊的 DOM 树条目中显示位于顶层的元素。例如：

![在 Chrome 开发者工具中显示在顶层的元素](top_layer_devtools.png)

请注意，顶层是一个内部浏览器概念，而不能直接从代码中操作。你可以使用 CSS 和 JavaScript 来定位位于顶层的元素，但不能直接定位顶层本身。

## 参见

- [层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}} 元素、{{domxref("HTMLDialogElement")}} 接口
- [Popover API](/zh-CN/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} 伪类
