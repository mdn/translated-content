---
title: 居中一个元素
slug: Web/CSS/Layout_cookbook/Center_an_element
---

{{CSSRef}}

在这份指南中你将了解到把一个盒子居中放置在另一个之中的方法。在伸缩盒子模型 (flexbox) 出现之前，要做到同时垂直与水平居中是很困难的，而现在利用盒子对齐属性 (Box Alignment) 就很直截了当了。

![an element centered inside a larger box](cookbook-center.png)

## 需求

把一个项目同时垂直与水平居中地放置在一个盒子中

## 指南

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> **备注：** [下载这份示例](https://github.com/mdn/css-examples/blob/master/css-cookbook/center--download.html)

## 做出选择

要将一个盒子居中放置在另一个之中，我们需要让作为容器的盒子变成伸缩容器。再将 {{cssxref("align-items")}} 设置为 center 来实现块方向的轴 (block axis) 上的居中，并把 {{cssxref("justify-content")}} 设置为 center 来实现文字方向的轴 (inline axis) 上的居中。

将来我们可能不需要将父容器设置为伸缩容器就可以居中元素，因为此处使用的“盒子对齐”属性也被指定为适用于块布局。然而，当前在块布局上对盒子对齐属性的支持仍然是有限的，因此目前使用伸缩盒子来实现居中还是最可靠的方法。

## 浏览器兼容性

{{Compat}}

## MDN 上相关的资源

- [Box Alignment in Flexbox](/zh-CN/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [CSS Box alignment guide](/zh-CN/docs/Web/CSS/CSS_Box_Alignment)
