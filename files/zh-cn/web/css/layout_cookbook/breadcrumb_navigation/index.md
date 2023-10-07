---
title: 面包屑导航
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
---

{{CSSRef}}

面包屑导航通过提供返回起始页面的面包屑轨迹，帮助用户了解他们在网站中所处的位置。

![与分隔符一同显示的链接](breadcrumb-navigation.png)

## 要求

这些项通常以行内方式显示，并带有分隔符，以指示各个页面之间的层次结构。

## 指南

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **标注：**
>
> [下载这份示例](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> **备注：** 上述示例使用了两个选择器来向每个除了首项 `li` 元素以外插入内容。也可以仅用一个选择器达到目标：
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> 这种解决方案使用了更加复杂的选择器，但所需规则较少。你可以自由选择更想要的解决方案。

## 做出选择

这种模式使用一个简单的弹性布局摆布，展示了一行 CSS 如何为我们提供导航。分隔符是由 CSS 内容生成属性添加的，你也可以将其换成其他想要的分隔符（样式）。

## 无障碍考虑

我使用了 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) 和 [`aria-current`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性来帮助用户理解这个导航的结构，以及当前页面在结构中的位置。详情请参见相关链接。

注意通过 `content` 添加的箭头 `→` 也会暴露在屏幕阅读器或盲文显示器中。

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)
- [提供面包屑路径](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [使用 aria-current 属性](https://tink.uk/using-the-aria-current-attribute/)
