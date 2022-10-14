---
title: Shapes from box values
slug: Web/CSS/CSS_Shapes/From_box_values
---

{{CSSRef}}

A straightforward way to create a shape is to use a value from the CSS Box Model. This article explains how to do this.

创建形状的一个简单方法是使用 CSS 框模型中的值。本文将解释如何执行此操作

The [box values](https://drafts.csswg.org/css-shapes-1/#shapes-from-box-values) allowable as a shape value are:
允许作为形状值的框值为：

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

The `border-radius` values are also supported, this means that you can have something in your page with a curved border, and your shape can follow the created shape.
还支持边框半径值，这意味着您的页面中可以有带曲线边框的内容，并且您的形状可以跟随创建的形状。

## CSS box model

The values listed above correspond to the various parts of the CSS Box Model. A box in CSS has content, padding, border, and margin.
上面列出的值对应于 CSS 方框模型的各个部分。CSS 中的框具有内容、填充、边框和边距。

![The Box Model consists of the margin, border, padding and content boxes.](box-model.png)

By using Box Values for Shapes we can wrap our content around the edges defined by these values. In all of the examples below I am using an element which has padding, a border, and a margin defined in order that you can see the different ways in which content will flow.
通过对形状使用框值，我们可以将内容环绕在这些值定义的边上。在下面的所有示例中，我都使用了一个元素，该元素具有填充、边框和边界，以便您可以看到内容的不同流动方式。

### margin-box

The `margin-box` is the shape defined by the outside margin edge and includes the corner radius of the shape, should {{cssxref("border-radius")}} have been used in defining the element.
边界框是由外部边界边定义的形状，包括形状的角半径（如果边界半径已用于定义元素）。

In the example below, we have a circular purple item which is a {{htmlelement("div")}} with a height, width, and background colour. The `border-radius` property has been used to create a circle by setting `border-radius: 50%`. As the element has a margin, you can see that the content is flowing around the circular shape and the margin applied to it.
在下面的示例中，我们有一个圆形的紫色项，它是一个带有高度、宽度和背景色的\<div>项。border radius 属性已用于通过设置 border radius:50% 创建圆。由于元素有一个边距，您可以看到内容围绕圆形流动，并且应用于圆形的边距。

{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}

### border-box

The `border-box` value is the shape defined by the outside border edge. This shape follows all of the normal border radius shaping rules for the outside of the border. You still have a border, even if you have not used the CSS {{cssxref("border")}} property. In this case it will be the same as `padding-box`, the shape defined by the outside padding edge.
边框值是由外部边框边缘定义的形状。此形状遵循边框外部的所有常规边框半径形状规则。即使没有使用 css border 属性，您仍然有边框。在这种情况下，它将与由外部填充边定义的形状 padding box 相同。

In the example below you can see how the text now follows the line created by the border. Change the border size and the content follows it.
在下面的示例中，您可以看到文本现在是如何遵循由边框创建的行的。更改边框大小和内容。

{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}

### padding-box

The `padding-box` value defines the shape enclosed by the outside padding edge. This shape follows all of the normal border radius shaping rules for the inside of the border. If you have no padding then `padding-box` is the same as `content-box`.
填充框值定义由外部填充边缘包围的形状。此形状遵循边框内部的所有常规边框半径形状规则。如果没有填充，则填充框与内容框相同。

{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}

### content-box

The `content-box` value defines the shape enclosed by the outside content edge. Each corner radius of this box is the larger of 0 or border-radius − border-width − padding. This Means that it is impossible to have a negative value here.
内容框值定义由外部内容边缘包围的形状。此框的每个角半径都是 0 或 border radius-border width-padding 中的较大值。这意味着这里不可能有负值。

{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}

## When to use the box values

Using box values is a simple way to create shapes, however this is by nature only going to work with very simple shapes that can be defined using the well-supported `border-radius` property. The examples shown above show one such use case. You can create a circular shape using border-radius and then curve text around it.
使用框值是创建形状的一种简单方法，但这本质上只适用于可以使用受良好支持的 border radius 属性定义的非常简单的形状。上面显示的示例显示了一个这样的用例。可以使用边框半径创建圆形，然后围绕它弯曲文本。

You can create some interesting effects however with just this simple technique. In my final example of this section, I have floated two elements left and right, giving each a border-radius of 100% in the direction closest to the text.
不过，您可以使用这个简单的技术来创建一些有趣的效果。在本节的最后一个示例中，我将左右浮动两个元素，使每个元素在最接近文本的方向上具有 100% 的边框半径。

{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}

For more complex shapes you will need to use one of the [basic shapes](/zh-CN/docs/Web/CSS/CSS_Shapes/Basic_Shapes) as a value, or define your Shape from an image as covered in other guides in this section.
对于更复杂的形状，您需要使用其中一个基本形状作为值，或者根据本节其他指南中介绍的图像定义形状。
