---
title: 分块导航
slug: Web/CSS/Layout_cookbook/Split_Navigation
---

{{CSSRef}}

一种导航样式，其中一个或多个元素与其余导航项之间是分离的。

![Items separated into two groups.](split-navigation.png)

## 需求

一种常见的导航样式是将一个元素推离其他元素。我们可以使用伸缩盒子 (Flexbox) 实现这一点，而不需要将两组项目放入两个单独的伸缩容器 (flex containers) 中。

## 指南

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> **备注：** [下载这份示例](https://github.com/mdn/css-examples/blob/master/css-cookbook/split-navigation--download.html)

## 做出选择

这一样式结合了自动外边距 (auto margins) 与伸缩盒子两种方法来把项目分离开。

自动外边距会吸收其应用方向上的所有可用空间。这就是利用自动外边距实现居中的工作原理—— 块的两侧都有一个试图占用所有空间的空白，从而将块推到了中间。

在这种情况下，左侧的自动边距会占用所有可用空间，并将项目推到右侧。您可以将类`push`应用到列表中的任何项目上。

## 浏览器兼容性

各种布局方法具有不同的浏览器支持。有关所使用属性的基本支持的详细信息，请参见下表。

#### Flexbox

{{Compat}}

## 参见

- [CSS Flexible Box Layout](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
