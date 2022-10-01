---
title: 面包屑导航
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
---

{{CSSRef}}

面包屑导航通过提供返回起始页面的面包屑轨迹，帮助用户了解他们在网站中所处的位置。

![Links displayed inline with separators](breadcrumb-navigation.png)

## 要求

这些项通常以内联方式显示，并带有分隔符，以指示各个页面之间的层次结构。

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **备注：** [下载此节的示例](https://github.com/mdn/css-examples/blob/master/css-cookbook/breadcrumb-navigation--download.html)

## 做出的选择

这种模式使用一个简单的 flex 布局摆布，展示了一行 CSS 如何为我们提供导航。分隔符是由 CSS 内容生成属性添加的，你也可以将其换成其他想要的分隔符（样式）。

## 无障碍访问问题

我使用了 `aria-label` 和 `aria-current` 属性来帮助用户理解这个导航的结构，以及当前页面在结构中的位置。详情请参见相关链接。

## 浏览器兼容性

{{Compat}}

## 另请参阅

- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [提供面包屑路径](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [使用 aria-current 属性](https://tink.uk/using-the-aria-current-attribute/)
