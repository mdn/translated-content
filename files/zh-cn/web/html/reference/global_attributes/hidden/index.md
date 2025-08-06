---
title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
---

[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) `hidden` 是一个布尔属性，表示一个元素尚未或者不再相关。例如，它可以被用来隐藏一个页面元素直到登录完毕。如果一个元素设置了这个属性，它就不会被显示。

`hidden`属性不能用于隐藏那些可以在其他板块中合理显示的内容。例如，用`hidden`属性去隐藏一个选项卡对话框种的面板是不正确的，因为选项卡界面只不过是溢出显示的一种——一个可以等量于一个只显示所有 form 表单控件的拥有滚动条的大页面。类似地，用 `hidden` 属性在某个特定板块中隐藏一部分内容也是不正确的，——如果某些内容被标记为隐藏，它将从所有版块中隐藏，包括例如屏幕阅读器。

隐藏元素不应与非隐藏元素链接，作为隐藏元素的后代的元素仍然是活动的，这意味着脚本元素仍然可以执行，表单元素仍然可以提交。

比如说，用 `href` 标签链接到一个带有 `hidden` 标签的区块是不对的。如果这个区块和这个页面不相干，或者这个区块不适用于这个页面，那没有任何理由需要链接到它。

不过，你还是可以使用 ARIA `aria-describedby` 标签去引用本身是隐藏的一些描述。

类似的，你也可以将一个带有 hidden 标签的 canvas 元素作为屏幕外的缓存区域，或者在表单控件中引用一个已经隐藏的表单。

> [!NOTE]
> 改变具有 hidden 属性的元素的 CSS 的 {{cssxref("display")}} 属性将覆盖该行为。例如，元素被设置为 `display: flex` 将会导致元素显示出来，尽管设置了 hidden 属性

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。
- [aria-hidden](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)属性
