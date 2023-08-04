---
title: Flexbox 典型用例
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
---

{{CSSRef}}

在这个文档中，我们将看一些常见 flexbox 的用例—这些都是比其他布局更合理的方法。

**为什么选择 flexbox？**

在浏览器完美支持的环境中，你选择使用 flexbox 的原因是你希望把一堆元素不是放在这个方向就是那个方向。因为在放置元素过程中，你想控制元素在那个方向的维度，或者控制他们彼此之间的间距。flexbox 就是为此设计的。. 又可以阅读[Relationship of Flexbox to other layout methods](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)来了解更多关于 flexbox 和 CSS Grid 布局的区别，在这篇文章里面，我们会讨论 flexbox 如何运用与 CSS 整体布局。

在现实中，为了便于对齐，我们通常会选择用 Flexbox 作为替代品，来完成即使用 Grid 布局更好的情况。一旦盒子对齐（Box Alignment）被盒模型所实行，这种情况就会得到改善。在这个教程中，我们会介绍一些会在现在使用 flexbox 的用例。

## 导航

导航的一个常见特征，就是使用水平条的样式去呈现一系列元素。这一模式看起来很简单，但是在 flexbox 出现之前却是很难实现的。它成为一个最简单的 flexbox 示例，可以被被看成是 flexbox 理想的使用场景。

当我们有一组元素需要水平排列展示，很可能在末尾会多出一些空间。我们需要决定如何去处理这些额外的空间，通常有多种不同的方案。我们要么在元素外部展示这些空间即使用间距或包裹的方式来分隔开不同元素，要么将空间吸收至元素内部即需要一个方法来允许元素拉伸以占满额外空间。

### 在元素外部处理空间分布

为了让多余的空间分布在多个元素之间或周围，我们使用 flexbox 中相应的对齐属性以及 {{cssxref("justify-content")}} 属性。你可以通过 [Aligning Items in a flex container](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) 来阅读更多关于这个专门用来处理主轴（main axis）对齐的属性。

在下面的示例中，我们让各元素都展示为其自身的尺寸，通过使用 `justify-content: space-between` 使元素之间拥有相同的空间。你可以通过 `space-around` 的值来改变空间分布的方式，在浏览器支持的环境下还可以使用 `space-evenly`。你也可以使用 `flex-start` 让空间展示在所有元素末尾。使用 `flex-end` 让空间展示在所有元素之前， `center` 可以剧中所有元素。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}

### 让元素自己处理空间分布

导航的另一个不同模式是让元素自己去决定如何处理额外的空间，而不是将空间分布在它们之间。在这种情况下，我们使用 {{cssxref("flex")}} 属性来允许各元素彼此成比例的拉伸和收缩，正如 [Controlling ratios of flex items along the main axis](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) 所描述。

如果我想让导航中的所有元素都等宽，会使用 `flex: auto`，这是 `flex: 1 1 auto` 的简写形式。所有元素都在它们的 flex-basis 尺寸上进行自动的收缩。这意味着，较长的元素会获得更多的空间。因为 flex-basis 的值被设置为 0，所以所有空间都会被平均分配。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}

## 拆分导航

另一种在主轴上对齐元素的方式就是使用自动边距。这种方式将创造出一部分元素左对齐而另一部分右对齐的导航栏设计。

这儿我们使用在 [Using auto margins for main axis alignment](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#Using_auto_margins_for_main_axis_alignment) 这篇文章中介绍的自动边距技术。所有的元素在主轴上按照弹性盒布局的默认设定 `flex-start` 进行对齐，同时我们给那个需要右对齐的元素添加 `margin-left: auto;` 样式。你可以尝试将那个类名转移到其他元素上以改变（向右）分割作用的位置。

在这个例子里我们也为每个元素启用了 `margin` 属性来控制元素间的间隔，并给容器添加负边距以保证元素与容器的接洽处没有缝隙。在弹性盒布局实现盒式对齐规范中的 `gap` 属性前，如果我们想要控制元素的间隔就不得不使用使用边距属性。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}

## 元素居中

在弹性盒布局到来之前，开发者们曾开玩笑说网页设计中最难的部分是垂直居中。现在，使用弹性盒布局中的对齐属性，这会变得很简单，如下例所示。

你可以修改对齐方式，用 `flex-start` 使元素对齐到交叉轴的开始处或者用 `flex-end` 使元素对齐到交叉轴的结束处。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}

在未来，我们可能不需要为了元素的居中而创建一个弹性盒容器，因为盒对齐属性最终会在块布局中实现。但是现在，假如你想在一个元素中居中另一个，弹性盒布局是一个很好的选择。在上面的例子中，将一个元素放入弹性盒容器里之后，要么在容器中使用 `align-items`，要么在元素中使用 `align-self` 来达到所需的效果。

## 绝对底部

不管你使用的是弹性盒还是网格来进行布局，这些布局方式都只对弹性盒容器或者网格容器的（直接）子元素生效。这也意味着即使你的 `content` 长度不定，组件在高度上仍会充满整个弹性盒容器或者网格容器。但任何使用常规块布局的方法都会导致 `content` 内容较少时 `footer` 上升到 `content` 下方而不是容器的底部。![Two card components showing that the internals of the component do not stretch with the wrapper.](flex-cards.png)

弹性盒就能解决常规块布局的问题。我们创建一个弹性盒容器，并启用 {{cssxref("flex-direction")}}`: column` 。之后我们在 `content` 部分启用 `flex: 1` —— `flex: 1 1 0` 的缩略形式，这个元素就可以在 `flex-basis` 为零的基础上伸缩。因为这是唯一一个可以延伸的元素，它会占据所有在弹性盒容器中可以占据的空间，同时将 `footer` 推至底部。如果你移除例子里的属性 `flex` 你就会看见 `footer` 回到 `content` 底部。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}

## 媒体对象

媒体对象是网页设计中的常见模式：这种模式下，一侧具有图片或其他元素，另一侧具有文本。理想情况下，媒体对象应该可以翻转：即把图片从左侧移动到右侧。

这种模式随处可见，用于评论、以及其他需要显示图片和描述的地方。使用 flexbox 可以允许包含图片的媒体对象部分从图片中获取其尺寸调整信息，并对媒体对象的主体进行弹性布局，以占用剩余空间。

在下面的实例中，您可以看到我们的媒体对象。使用对齐属性来将交叉轴上的元素对齐到`flex-start`，然后为`.content` flex 元素设置为`flex: 1`。与上面的列布局卡片模式一样，启用`flex: 1`表示此部分卡片可以延伸。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}

Some things that you might want to try in this live example relate to the different ways you might want to constrain the media object in your design.

为避免图片过大，可以在为图片添加{{cssxref("max-width")}}。由于媒体对象那一侧使用的是 flexbox 的初始值，它可以缩小但不会延伸，且其 `flex-basis` 值是 auto。应用于图片的任何{{cssxref("width")}} 或 max-width 将会成为 flex-basis。

```css
.image img {
  max-width: 100px;
}
```

你也可以允许双方按比例延伸和缩小。如果将两边都设置为`flex: 1`，它们从{{cssxref("flex-basis")}}为 0 增长和缩小，因此最终会得到两个大小相等的列。你可以将内容作为指南，并将其都设置为 `flex: auto`，这种情况下，它们将从内容的大小或直接应用于弹性元素的任何大小（例如图片的宽度）延伸和缩小。

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

You could also give each side different {{cssxref("flex-grow")}} factors, for example setting the side with the image to `flex: 1` and the content side to `flex: 3`. This will mean they use a `flex-basis` of `auto` but distribute that space at different rates according to the `flex-grow` factor you have assigned. The flex properties we use to do this are described in detail in the guide [Controlling ratios of flex items along the main axis](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Flipping the media object

To switch the display of the media object so that the image is on the right and the content is on the left we can use the `flex-direction` property set to `row-reverse`. The media object now displays the other way around. I have achieved this in the live example by adding a class of `flipped` alongside the existing `.media` class. This means you can see how the display changes by removing that class from the html.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}

## Form controls

Flexbox is particularly useful when it comes to styling form controls. Forms have lots of markup and lots of small elements that we typically want to align with each other. A common pattern is to have an {{htmlelement("input")}} element paired with a {{htmlelement("button")}}, perhaps for a search form or where you simply want your visitor to enter an email address.

Flexbox makes this type of layout easy to achieve. I have contained my `<button>` and `<input>` field in a wrapper which I have given a border and set to `display: flex`. I then use the flex properties to allow the `<input>` field to grow, while the button does not grow. This means we have a pair of fields, with the text field growing and shrinking as the available space changes.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}

You could add a label or icon to the left as easily as we popped the button onto the right. I have added a label, and other than some styling for background colour I didn't need to change the layout. The stretchy input field now has a little less space to play with but it uses the space left after the two items are accounted for.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}

Patterns like this can make it much easier to create a library of form elements for your design, which easily accommodate additional elements being added. You are taking advantage of the flexibility of flexbox by mixing items that do not grow with those that do.

## 结论

当了解上面的这些示例时，你已经满怀希望的想象怎么找到最好的方式使用弹性盒子布局实现你想要的结果。大部分情况下，你拥有不止一种选择。将可以变化的内容和不能变化的混合在一起，通过内容来决定他们的大小或者允许弹性布局设置按比例分配空间。要因地制宜，对症下药。

先考虑一下用什么方法展示你的内容比较好，然后在了解怎么用弹性布局或其他布局方法实现你的想法。
