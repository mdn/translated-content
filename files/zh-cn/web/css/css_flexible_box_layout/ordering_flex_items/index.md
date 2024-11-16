---
title: Flex 项排序
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
---

{{CSSRef}}

Flexbox 和 Grid 等新的布局方法为内容的顺序控制提供了可能。在本文中，我们将介绍使用 Flexbox 时如何更改内容的视觉顺序。我们还将从无障碍的角度考虑重新排序项目的影响。

## 反转项目的显示

{{cssxref("flex-direction")}} 属性有如下四个值：

- `row`
- `column`
- `row-reverse`
- `column-reverse`

前两个值使项目保持与它们在文档源顺序中出现的顺序相同，并从起始行开始顺序显示它们。

![The items are displayed in a row starting on the left.](basics1.png)

![The items are displayed as a column starting from the top ](align10.png)

后两个值通过调换开始和结束行来进行项目的反转。

![The items are displayed in reverse order starting on the right-hand line.](align9.png)

![The items are displayed in a column in reverse order starting at the bottom line.](align11.png)

请记住，起始行与写入模式有关。上面两个示例说明了 `row` 和 `row-reverse` 在从左到右的语言是怎么工作的如英语。如果你使用的是右到左的语言，如阿拉伯语，则 `row` 的起始行将在右边， `row-reverse` 起始行会在左边。

![Flex containers with Arabic letters showing how row starts from the right hand side and row-reverse from the left.](order-rtl.png)

这看起来似乎是一种以相反顺序显示事物的简洁方式，但是你应该注意，这些项目只以相反顺序显示。在这个问题上，规范说明如下：

> “注意：Flex 布局的重新排序功能仅会影响视觉渲染，保留语音顺序和基于源顺序的导航。这使作者能够操纵视觉呈现，同时保持非 CSS UA 和线性模型（例如语音和顺序导航）的原始顺序不变。” - [Ordering and Orientation](https://www.w3.org/TR/css-flexbox-1/#flow-order)

如果你的项目是链接或者用户可以选择的其他元素，那么选项卡的顺序就是这些项目在文档源中出现的顺序，而不是你的视觉顺序。

如果使用反向值或以其他方式重新排序项，则应考虑是否实际需要更改源中的逻辑顺序。该规范继续警告不要使用重新排序来修复源代码中的问题：

> “作者不得使用 flex-flow / flex-direction 的顺序或反向值来代替正确的源顺序，因为这会破坏文档的无障碍。_”_

> [!NOTE]
> 近几年来，Firefox 出现了一个错误，即它会尝试遵循视觉顺序而不是源顺序，从而使其行为与其他浏览器不同。现在，此问题已得到解决。你应始终将源顺序作为文档的逻辑顺序，因为所有最新的用户代理都将遵循该规范并遵循该规范。

在下面的实时示例中，我添加了一种焦点样式，以便当你从一个链接到另一个标签时，可以看到突出显示的样式。如果使用`flex-direction`更改顺序，则可以看到制表符顺序如何继续遵循源中列出的项目的顺序。

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

与更改`flex-direction`的值不会更改项目导航到的顺序相同，更改此值不会更改绘制顺序。它仅是项目的视觉反转。

## `order` 属性

除了颠倒显示弹性项目的顺序之外，你还可以使用{{cssxref("order")}} 属性指定单个项目并更改其在视觉顺序中的显示位置。.

`order`属性旨在按顺序排列项目。这意味着为项目分配了代表其组的整数。然后，按照该整数（最低的值）首先按照视觉顺序放置项目。如果多个项目具有相同的整数值，则在该组中按照源顺序对项目进行布局。

例如，我有 5 个弹性条目，并按如下所示分配`order`值：

- Source item 1: `order: 2`
- Source item 2: `order: 3`
- Source item 3: `order: 1`
- Source item 4: `order: 3`
- Source item 5: `order: 1`

这些项目将按以下顺序显示在页面上：

- Source item 3: `order: 1`
- Source item 5: `order: 1`
- Source item 1: `order: 2`
- Source item 2: `order: 3`
- Source item 4: `order: 3`

![Items have a number showing their source order which has been rearranged.](order-property.png)

你可以在下面的实时示例中使用这些值，并查看如何更改顺序。另外，尝试将`flex-direction`更改为`row-reverse`，看看会发生什么—切换了起始行，以便从相反的一侧开始排序。

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

弹性项目默认 `order` 值为 `0`, 因此整数值大于 0 的项目，将会显示在那些未指定 `order` 值的项目之后。

你还可以按顺序使用负值，这很有用。如果要先显示一个项目，并保持所有其他项目的顺序不变，则可以将该项目的顺序设为`-1`。由于该值小于 0，因此始终会首先显示该项目。

在下面的实时代码示例中，我使用 Flexbox 布置了项目。通过更改在 HTML 中为其分配了类`active`，你可以更改首先显示的项目，你可以更改首先显示哪个项目，因此在布局顶部变为全宽，而在其下方显示其他项目。

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

这些项目以规范中描述的顺序修改的文档顺序显示。在显示项目之前，将考虑 order 属性的值。

Order 还会更改项目的绘制顺序; 对于`order`较低的项目将首先绘制，对于`order`值较高的项目将随后绘制。

## order 属性和无障碍

使用 order 属性对于无障碍具有与使用`flex-direction`更改方向完全相同的含义。使用`order`可以更改项目的绘制顺序和外观。它不会更改项目的顺序导航顺序。因此，如果用户在项目之间切换，他们可能会发现自己以非常混乱的方式在布局中跳跃。

通过浏览此页面上的任何实时示例，你可以了解订单如何给不使用某种指点设备的任何人带来奇怪的体验。要了解有关视觉顺序和逻辑顺序的这种分离以及它为无障碍带来的一些潜在问题的更多信息，请参见以下资源。

- [Flexbox and the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [HTML Source Order vs CSS Display Order](http://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html)
- [The Responsive Order Conflict for Keyboard Focus](https://alastairc.ac/2017/06/the-responsive-order-conflict)

## order 使用示例

有时在某些地方，弹性项目的逻辑顺序和可视顺序与视觉顺序是分开的，这很有帮助。仔细使用`order`属性可以使一些有用的通用模式易于实现。

你可能有一个设计，也许是显示新闻的卡片。新闻项的标题是突出显示的关键内容，并且如果用户在标题之间使用键盘制表符按键（tab）以查找要阅读的内容，则可能是用户可能会跳转到的元素。该卡还带有日期；我们要创建的最终设计就是这样。

![A design component with a date, then heading and then content.](order-card.png)

视觉上，日期显示在源中标题上方。但是，如果卡是由屏幕阅读器读出的，则我希望标题先公布，然后再公布日期。我们可以使用`order`属性来做到这一点。

The card is going to be our flex container, with `flex-direction` set to column. I then give the date an `order` of `-1`. This pulls it up above the heading.

该卡将成为我们的伸缩容器，`flex-direction`设置为 column。然后，我将日期定为`-1`。这将其拉到标题上方。

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

这些小的调整是`order`属性有意义的情况。保持逻辑顺序为文档的阅读和制表符顺序，并以最易于访问和结构化的方式进行维护。然后使用`order`进行纯粹的视觉设计调整。这样做时，请注意不要重新排序在用户四处浏览时可能由键盘访问的项目。尤其是在使用较新的布局方法时，应确保浏览器测试包括仅使用键盘而不是鼠标或触摸屏来测试站点。你将快速查看你的开发选择是否使绕过内容变得困难。
