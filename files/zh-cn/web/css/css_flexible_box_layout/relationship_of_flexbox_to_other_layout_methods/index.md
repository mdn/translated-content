---
title: 弹性盒子与其他布局方法的联系
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
---

{{CSSRef}}

在本文中，我们将了解弹性盒子（Flexbox）如何与所有其他 CSS 模块相适应。如果您想学习 flexbox，我们将一起找出需要注意的规范和 flexbox 与一些其他模块不同的原因。

> **备注：** CSS 1 和 CSS 2 是一个单一的整体规范，其中所有 CSS 都定义在一个文档中。随着 CSS 成为一种功能更加丰富的语言，各个部分有不同的发展速度，如何维护一个庞大的规范就成了问题。因此现在的 CSS 是模块化的，不同的 CSS 模块有不同的规范，一起构成了现在的 CSS。这些模块之间相互关联，并且处于不同的开发阶段。

## box alignment 模块

许多人开始关注 flexbox 的最初原因是在 flex 容器中能够很好的对齐其中的元素。flexbox 可以设置在其交叉轴以及主轴上的对齐属性。

这些属性最开始出现在 flexbox 规范中，现在已经成为[Box Alignment 规范](https://www.w3.org/TR/css-align-3/)的一部分。这个规范详细说明了在所有布局中（不仅仅是 flexbox）对齐属性是如何起作用的。对齐属性用于设置元素对齐方式和沿轴的空间分配。

之所以在 flexbox 规范和 box alignment 模块规范中都有对对齐属性的详细描述，是为了确保 flexbox 规范的完成不会受 box alignment 模块规范的影响，因为后者需要详细说明所有的布局类型中的对齐方法。flexbox 规范中有一条注释指出将来一旦 Box Alignment Level 3 完成，它将会取代 flexbox 规范中的相关定义：

> “注意：虽然对齐属性是在 CSS Box Alignment \[CSS-ALIGN-3] 中定义的，但“Flexible Box Layout”在此处重现了相关属性的定义，以免形成规范性的依赖关系，而这可能会减慢规范的发展。这些属性仅适用于 Flex 布局，直到 CSS Box Alignment Level 3 完成并定义其对其他布局模式的效果；此外，在 Box Alignment 模块中定义的任何新值都将应用于 Flexible Box Layout；换句话说，一旦 Box Alignment 模块完成，其中的相关定义将取代此处的定义。”

在本系列的后续文章（在 flex 容器中对齐元素）中，我们将彻底研究 Box Alignment 属性如何应用于 flex 元素。

### gap 属性

属性{{cssxref("row-gap")}} 和 {{cssxref("column-gap")}}，其简写为{{cssxref("gap")}}，近期添加到了盒子布局规范中。这些属性（名称为`grid-row-gap`, `grid-column-gap` and `grid-gap`）最初定义在 CSS 网格布局中。但是他们被重命名并移入盒子布局规范。这样的话，所有的布局方法都可以使用这些属性。不过在浏览器实现 Flex 的这些属性之前只能通过{{cssxref("margin")}} 来控制元素之间的间隙距离。

## Writing Modes

In the [Basic concepts of flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) article, I explained that flexbox is **writing mode aware**. Writing modes are fully detailed in the CSS [Writing Modes specification](https://www.w3.org/TR/css-writing-modes-3/), which details how CSS supports the various different writing modes that exist internationally. We need to be aware of how this will impact our flex layouts as writing mode changes the direction that blocks are laid out in our document. Understanding **block** and **inline** directions is key to new layout methods.

It is worth noting that we might want to change the writing mode of our document for reasons other than publishing content in a language that uses a different writing mode. See [this article](https://24ways.org/2016/css-writing-modes/) for a full description of writing modes and ways to use them, both for content in other languages and for creative reasons.

### The writing modes

The writing modes specification defines the following values of the {{cssxref("writing-mode")}} property, which serve to change the direction that blocks are laid out on the page, to match the direction that blocks lay out when content is formatted in that particular writing mode. You can change the live example below to these modes in order to see what happens to the flex layout.

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

{{EmbedGHLiveSample("css-examples/flexbox/relationship/writing-modes.html", '100%', 360)}}

Note that `sideways-rl` and `sideways-lr` have support only in Firefox currently. There are also some known issues with regard to `writing-mode` and flexbox. You can see more information on browser support in the [MDN documentation for writing-mode](/zh-CN/docs/Web/CSS/writing-mode). However if you are planning on using writing modes in your layout, carefully testing the results is advisable — not least because it would be easy to make things hard to read!

Note that you would not normally use CSS and the `writing-mode` property to change an entire document to another writing mode. This would be done via HTML, by adding a `dir` and `lang` attribute to the `html` element to indicate the document language and default text direction. This would mean that the document would display correctly even if CSS did not load.

## Flexbox and other layout methods

The flexbox specification contains a [definition of what happens](https://www.w3.org/TR/css-flexbox-1/#flex-containers) if an item uses another layout method and then becomes a flex item. For example, if an item is floated and then its parent becomes a flex container. Or, how a flex container behaves as part of layout.

An element set to `display: flex` behaves in most ways like any other block level container that establishes a containing block. Floats will not intrude, and the containers' margins will not collapse.

With regard to flex items, if an item was floated or cleared and then becomes a flex item due to the parent having `display: flex` applied, the floating and clearing will no longer happen, and the item will not be taken out of normal flow in the way that floats are. If you have used the {{cssxref("vertical-align")}} property, as used with `inline-block` or table layout for alignment, this will no longer affect the item and you can use the alignment properties of flexbox instead.

In this next live example the child elements have been floated, and then their container has had `display: flex` added. If you remove `display: flex`, you should see that the `.box` element collapses as we have no clearing applied. This demonstrates that the float is happening. Re-apply `display: flex` and the collapsing does not happen. This is because the items no longer have a float applied, as they have been transformed into flex items.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/floats.html", '100%', 430)}}

## Flexbox and Grid Layout

[CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout) and Flexbox generally act in the same way with regards to overwriting other methods. You might however want to use flexbox as a fallback for grid layout, as there is better support for flexbox in older browsers. This approach works very well. If a flex item becomes a grid item, then the `flex` properties that may have been assigned to the child elements will be ignored.

You can use the Box Alignment properties across both layout methods, so using flexbox as a fallback for grid layout can work very well.

### Flex and grid — what's the difference?

A common question is to ask what the difference is between Flexbox and CSS Grid Layout — why do we have two specifications that sometimes appear to be doing the same thing?

The most straightforward answer to this question is defined in the specifications themselves. Flexbox is a one-dimensional layout method whereas Grid Layout is a two-dimensional layout method. The example below has a flex layout. As already described in the Basic concepts article, flex items can be allowed to wrap but, once they do so, each line becomes a flex container of its own. When space is distributed flexbox does not look at the placement of items in other rows and tries to line things up with each other.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/flex-layout.html", '100%', 750)}}

If we create a very similar layout using Grid, we can control the layout in both rows and columns.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/grid-layout.html", '100%', 700)}}

These examples point to another key difference between these layout methods. In Grid Layout you do the majority of sizing specification on the container, setting up tracks and then placing items into them. In flexbox, while you create a flex container and set the direction at that level, any control over item sizing needs to happen on the items themselves.

In some cases you could happily use either layout method, but as you become confident with both you will find each one suiting different layout needs, and you will end up with both methods in your CSS. There is rarely a right or wrong answer.

As a rule of thumb, if you are adding widths to flex items in order to make items in one row of a wrapped flex container line up with the items above them you really want two-dimensional layout. In this case it is likely that the component would be better laid out using CSS Grid Layout. It isn't the case that you should use flexbox for small components and grid layout for larger ones; a tiny component can be two dimensional, and a large layout can be represented better with layout in one dimension. Try things out — we have a choice in layout method for the first time, so take advantage of it.

For more comparisons of grid and flexbox see the article [Relationship of Grid Layout to other layout methods](/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). This article details many of the ways that Grid Layout differs from flex layout, and demonstrates some of the extra functionality you get when using Grid Layout such as layering of items on the grid. This may also help in your decision as to which layout method to use.

## Flexbox and display: contents

The `contents` value of the {{cssxref("display")}} property is a new value that is described in the spec as follows:

> “The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal. For the purposes of box generation and layout, the element must be treated as if it had been replaced with its children and pseudo-elements in the document tree.”

This value of `display` controls box generation, and whether the element should generate a box that we can style and see on the page, or whether instead the box it would normally create should be removed and the child elements essentially moved up to participate in whatever layout method the parent would have been part of. This is much easier to see with an example.

In the following live example I have a flex container with three child elements. One of these flex items has two elements nested inside it, which would not ordinarily participate in flex layout. Flex layout only applies to the direct children of a flex container.

By adding `display: contents` to the wrapper around the nested elements, you can see that that item has disappeared from the layout, allowing the two sub-children to be laid out as if they were direct children of the flex container. You can try removing the `display: contents` line to see it return.

Note that this only removes the box from the layout; the sub-children don't become direct children in any other way. You can see that as I have used a direct child selector to add the background and borders to the flex items, this has not been applied to our nested children. They have been laid out as flex items, but as they are not direct children they do not get the other styling.

> **警告：** Use of `display: contents` will also remove the element from the accessibility tree – screen readers will not see what's inside, just the same as if you used `display: none`. Use of `contents` should only be for presentational, not content, elements.

Also, having removed the box you cannot then use it to — for example — add a background colour behind the nested sub children. If you remove `display: contents` in this live example you will see that the direct child we are removing has an orange background colour. This also disappears when the box disappears.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/display-contents.html", '100%', 650)}}

Browser support for `display:contents` is limited and required for this demo to work. Firefox supports `display: contents` already, and the value is being implemented in Chrome. Once there is better browser support this feature will be very useful in circumstances where you need the markup for semantic reasons but do not want to display the box that it would generate by default.
