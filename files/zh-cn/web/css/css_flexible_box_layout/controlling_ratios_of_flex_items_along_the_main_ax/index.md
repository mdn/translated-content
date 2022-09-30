---
title: 控制 Flex 子元素在主轴上的比例
slug: >-
  Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
---

> **备注：** 译者注：在 html 中若一个元素的 css 设置为 display: flex，则这个元素就是 flex container , 其子元素为 flex item，若是直译过来就是弹性容器和弹性项目。但是译者认为直译过来不好理解，且不便记忆（就像我们常说 TCP 而不会说传输控制协议一样），因此在此文中，译者将不会翻译为 flex container 和 flex item，而是翻译为 flex 容器和 flex 子元素。同样，在原文中有些单词（如 items, flex-items，container），我会根据情况译为 flex 容器和 flex 子元素。请各位读者理解。
>
> 如果各位读的不舒服，请阅读原文！

{{CSSRef}}

在这篇指南中我们将探索应用于 flex 子元素的三个属性，它们能使我们在主轴方向上控制 flex 子元素的尺寸和伸缩性— {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, 和 {{cssxref("flex-basis")}}. 充分了解这些属性如何与增长和缩小的 flex 子元素一起工作是掌握 Flex 布局的关键所在。

## 预览

这三个属性控制一个 flex 子元素的以下几个方面：

- `flex-grow`: 这个 flex 子元素得到（伸张）多少 positive free space?
- `flex-shrink`: 从这个 flex 子元素要消除（收缩）多少 negative free space?
- `flex-basis`: 在 flex 子元素未伸张和收缩之前，它的大小是多少？

以上属性通常用一个简写属性{{cssxref("flex")}} 表达。下面的代码设置 `flex-grow` 属性值为 `2`, `flex-shrink` 属性值为 `1` ，`flex-basis` 属性值为`auto`.

```
.item {
  flex: 2 1 auto;
}
```

如果你阅读过文章 [flex 布局的基本概念](Basic_Concepts_of_Flexbox), 那么你应该已经对这些属性有了初步了解。为了让你能明白当你在用它们的时候浏览器在做什么，我们将进一步探讨它们。

## 工作于主轴的重要概念

在考虑 flex 属性如何在主轴方向上控制比率之前，有一些概念值得我们去深究。这涉及到 flex 子元素在任何伸缩之前的自然尺寸，以及自由空间的概念

### Flex 子元素的尺寸

为了计算出有多少可用空间能布局于 flex 子元素，浏览器必须知道这个 item 有多大才能开始。它是如何解决没有应用于绝对单位的宽度和高度的 flex 子元素？

在 [`min-content`](/zh-CN/docs/Web/CSS/width#min-content) 和 [`max-content`](/zh-CN/docs/Web/CSS/width#max-content) 的 CSS 中有一个概念— 这些关键字定义在 [CSS Intrinsic and Extrinsic Sizing Specification](https://drafts.csswg.org/css-sizing-3/#width-height-keywords), 并且可以用一个 [length](/zh-CN/docs/Web/CSS/length)单位代替。

例如下面的例子，我有两段包含一个文本字符串的段落。第一段设置了`min-content`的宽度。在支持这个关键字的浏览器你可以看见文本已尽可能抓住机会来自动换行，变得尽可能小且没有溢出。此之后就是那个字符串的 min-content 大小。本质上讲，字符串中最长的单词决定了大小。

第二段设置了 `max-content`值，且它和 min-content 相反。它会变得尽可能大，没有自动换行的机会。如果 flex 容器太窄，它就会溢出其自身的盒子。

{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}

如果你的浏览器不支持这些属性，那这两段会在块流中被渲染为正常流; 下面的截图展示了预期的渲染。

![The first paragraph is wrapped to the longest word, the second stretched out so as to cause overflow.](ratios-size.png)

记住这种行为，以及 `min-content` 和`max-content` 对我们本文后探索 `flex-grow` 和`flex-shrink` 的影响。

### 正负自由空间

> **备注：** 译者注：positive and negative free space 直译过来就是正负空闲空间，为了读者能良好的阅读下文，译者先大概说下。
>
> Flex 布局中有 flex 容器和 flex 子元素，flex 子元素包含在 flex 容器中，那么当 flex 子元素在主轴上的尺寸（大小）之和小于 flex 容器 的尺寸时，flex 容器中就会有多余的空间没有被填充，这些空间就被叫做 **positive free space**。当 flex 子元素在主轴上的尺寸之和大于 flex 容器的尺寸时，flex 容器的空间就不够用，此时 flex 子元素的尺寸之和减去 flex 容器的尺寸（flex 子元素溢出的尺寸）就是**negative free space**, 这个 negative free space 加上 flex 容器的尺寸刚好可以容纳 flex 子元素。
>
> 为了不翻译花了，译者不对**positive** **free space 和 negative free space**进行翻译，参考翻译是正向自由空间和反向自由空间

去谈论这些属性之前我们需要理解 positive free space 和 negative free space 的概念。当一个 flex 容器有 positive free space 时，它就有更多的空间用于在 flex 容器内显示 flex 子元素。比如说，如果我有 500px 宽的 flex 容器，{{cssxref("flex-direction")}} 属性值为 row, 三个 100px 宽的 flex 子元素，而且我还有 200px 的 positive free space, 那么如果我想让它们（positive free space）填充 flex 容器，它们就可以填充在 flex 子元素之间。

![Image showing space left over after items have been displayed.](basics7.png)

当 flex 子元素的自然尺寸加起来比 flex 容器内的可用空间大时，我们产生了 negative free space. 如果我有一个像上面 500px 宽的 flex 容器，但是三个 flex 子元素每个都为 200px 宽，我就一共需要 600px 宽，因此我就有了 100px 的 negative free space. 这可以从 flex 子元素中删除以使其能适应 flex 容器。

![The items overflow the container](ratios1.png)

我们需要理解 positive free space 的分配和 negative free space 的移除，这样才能理解 flex 属性。

下面的例子我会将属性 {{cssxref("flex-direction")}} 设置为 row, 因此 flex 子元素的尺寸只有来自于它们的宽。我们通过比较 flex 子元素和 flex container 的宽度来计算 positive and negative free space. 你同样可以用`flex-direction: column` 测试每个例子。主轴变为列后，你需要比较 flex 子元素和 flex 容器 的高度来计算 positive and negative free space.

## flex-basis 属性

{{cssxref("flex-basis")}} 属性在任何空间分配发生之前初始化 flex 子元素的尺寸。此属性的初始值为 `auto`. 如果 `flex-basis` 设置为 `auto` , 浏览器会先检查 flex 子元素的主尺寸是否设置了绝对值再计算出 flex 子元素的初始值。比如说你已经给你的 flex 子元素设置了 200px 的宽，则 200px 就是这个 flex 子元素的 `flex-basis`.

如果你的 flex 子元素 为自动调整大小，则`auto` 会解析为其内容的大小。此时你所熟知的 min-content 和 max-content 大小会变得有用，flexbox 会将 flex 子元素的 `max-content` 大小作为 `flex-basis`. 下面的例子可以证明这一点。

在这个例子中我创造了一些列固定的盒子，它们的 `flex-grow` 和`flex-shrink` 都设置为 `0`. 这里我们看看第一个 flex 子元素怎么样了 — 它的 150px 显示宽度被设置为主尺寸— 即设置`flex-basis`为 150px, 然而另外两个 flex 子元素 没有设置宽度而是根据它们内容的宽度设置尺寸，

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}

除了关键字 `auto` 以外，你还可以使用关键字 `content` 作为 `flex-basis`的值。这会导致 `flex-basis` 根据内容大小设置即使 flex 子元素 设置了宽度。这是一个新关键字而且获得浏览器支持的比较少，但是你还是可以通过设置`flex-basis: auto`并确保你的 flex 子元素没有设置宽度来达到相同的效果 , 以便它能自动调整大小。

空间分配时，如果你想 flexbox 完全忽略 flex 子元素的尺寸就设置`flex-basis` 为 `0`. 这基本上告诉 flexbox 所有空间都可以抢占，并按比例分享。随着我们继续关注`flex-grow`，我们将看到这方面的例子。

## flex-grow 属性

{{cssxref("flex-grow")}} 属性指定了**flex 增长值**, 这决定了当 positive free space 分配时，flex 子元素相对于 flex 容器中的其余 flex 子元素的增长程度。

如果你所有的 flex 子元素 设置了相同的`flex-grow`属性值，那么空间将会在 flex 子元素 之间平均分配。如果你想要这种情形，通常你需要使用`1`作为值，而且如果你喜欢你还可以将它们的`flex-grow`都 设置为`88`，或`100`，或`1.2` —这只是个比例。如果 flex-grow 的值全部相同，并且在 flex 容器 中还有 positive free space , 那么它（positive free space）就会平均的分配给所有的 flex 子元素

### 结合`flex-grow` 和`flex-basis`

根据`flex-grow`和`flex-basis`的相互影响，有些东西会变得迷惑起来。让我们考虑三个不同内容大小的 flex 子元素的例子，应用于下列 flex 规则：

`flex: 1 1 auto;`

这个例子中设置`flex-basis`的值为`auto`且没有设置它们的宽，因此它们是自动调整大小的。这意味着 flexbox 的大小决定于全部 flex 子元素内容的`max-content` 大小。在布局完 flex 子元素 之后在 flex 容器中还有一些 positive free space，展示在这幅图片的阴影区域中：

![Images shows the positive free space as a hatched area](ratios2.png)

我们使用与内容大小相等的`flex-basis`，以便从总可用空间（flex 容器的宽度）中减去可用分配空间，然后剩余空间在每个 flex 子元素之间平均分配。我们比较大的 flex 子元素最终会变得更大，因为它一开始就有一个比较大的尺寸，即使它与其他 flex 子元素具有相同数量的分配空间：

![The positive space is distributed between items](ratios3.png)

如果你真正想要的是三个同样尺寸的 flex 子元素，即使它们开始是不同的尺寸，你应该使用这个：

`flex: 1 1 0;`

我们要说的是，为了我们的空间分配，flex 子元素的尺寸计算值是 0--所有空间都用来争夺，并且所有 flex 子元素具有相同的`flex-grow` 值，它们（flex 子元素）每个都获得相等的空间分配。最终结果是三个宽度相等的可伸缩 flex 子元素。

尝试在这个现场示例中将`flex-grow`的值从 1 更改为 0 以查看不同的行为：

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}

### flex items 设置不同的 flex-grow 值

我们对`flex-grow`和`flex-basis`如何工作的理解使我们能够通过分配不同的`flex-grow`值来进一步控制我们单个 flex 子元素 大小。如果我们设置`flex-basis`值为`0`则所用空间都可以被分配，我们可以给每个 flex 子元素分配不同的`flex-grow`值。在下面的示例中，我会使用下面的值：

- 设置第一个 flex item 的`flex-grow`值为`1`.
- 设置第二个 flex item 的`flex-grow`值为`1`.
- 设置第三个 flex item 的`flex-grow`值为`2`.

`flex-basis`值为 `0` 意味着可用空间会根据设置分配。我们需要增加 flex 增长值，就需要在 flex 容器中用 positive free space 的总大小除以 flex-grow 值之和，在这个例子中为 4. 我们就可以根据个体值（flex-basis 值）分配空间 — 第一个 flex 子元素得到一个单位 , 第二个 flex 子元素得到一个单位，第三个 flex 子元素得到二个单位。也就是说第三个 flex 子元素是第一个和第二个 flex item 的两倍。

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}

记住你要在这里使用正值。这是一个项目和另一个项目之间的比例。你还可以使用大的数字，或者小数 — 这取决于你。把上例中分配的值更改为`.25`，`.25`和`.50` 并去测试— 你会得到相同的结果。

## `flex-shrink` 属性

{{cssxref("flex-shrink")}} 属性指定了**flex 缩小值**, 它确定在分配 negative free space 时，flex 子元素相对于 flex 容器中其余 flex 子元素收缩的程度。

该属性用于处理浏览器计算 flex 子元素的`flex-basis`值的情形，并检测它们太大以至于无法适应 flex 容器。只要 flex-shrink 有正值则 flex 子元素就会收缩以至于它们不会溢出 flex 容器。

因此 `flex-grow` 用于添加可用空间，`flex-shrink` 减少空间来使盒子适应它们的容器而不溢出。

下一个示例中我的 flex 容器有三个 flex 子元素，我已经给它们每一个（flex 子元素）设置了 200px 的宽度，并且设置容器 (flex 容器）500px 宽。设置`flex-shrink` 为 `0` 的 flex 子元素 不允许收缩以致于它们溢出了盒子。

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}

改变 `flex-shrink` 值为 `1` 你会发现每个 flex 子元素 都收缩了同样大小的量，现在所有 flex 子元素都适应盒子。这样做后它们已变得比它们的初始宽度还小。

### 结合`flex-shrink` 和`flex-basis`

你可以看见 `flex-shrink`和`flex-grow` 工作的一样好。但是它们有两个原因使它们不完全一样。

即使它微不足道，但规范中的定义内容是 `flex-shrink`不全相同与 negative space 的一个原因，正如`flex-grow`不全相同于 positive space 一样：

> “注意：当分配 negative space 时，flex 基本大小乘以 flex 增长值。这会根据 flex 子元素能够缩小的比例（多少）分配 negative space, 其它亦如此。在较大的 flex 子元素 明显缩小之前，较小的 flex 子元素 不会缩小到 0.”

第二个原因是在 negative free space 消除期间 flexbox 会阻止小的 flex 子元素缩小到 0. 这些 flex 子元素会以`min-content`的大小进行铺设 —这个大小是它们利用任何可以利用的自动断行机会后所变成的。

在下面的例子中，在 `flex-basis` 解析为内容大小的位置你会看到 `min-content` 的铺设。如果你改变 flex 容器的宽度——比如增加到 700px 宽，再减少 flex 子元素的宽度，你会看到前两个 flex 子元素将换行，但是它们绝不会小于 `min-content` 的大小。随着盒子变得越来越小，第三个 flex 子元素随后从空间中溢出。

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}

在实践中，收缩行为会倾向于给你合理的结果。你通常不希望自己的内容完全消失，或者文本框比自己的最小内容要小，因此上述规则对于需要缩小以适应容器的内容的合理行为而言是有意义的。

### Giving items different `flex-shrink` factors

在 `flex-grow`值相同的情形下，你可以给 flex 子元素 设置不同的 `flex-shrink` 值。假如你想让一个 flex 子元素 比它的兄弟元素收缩的更快或更慢，或者不再收缩，这会改变它的默认行为。

在下面的示例中第一个 flex 子元素设置 `flex-shrink` 的值为 1, 第二个为 `0` (因此它将不会收缩), 第三个为 `4`. 第三个 flex 子元素比第一个收缩的更快。任意设置不同的值 — 你可以给 `flex-grow` 使用小数或者大一点的数。选择对于你来说任意合理的数。

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}

## 掌握 Flex items 的大小

真正理解 flex 子元素如何工作的关键是理解有多少东西参与影响 flex 子元素。思考以下方面，哪些是我们在这些指南中已经讨论过了的：

### 什么设置 flex item 的基本大小？

1. `flex-basis` 设置为`auto`吗，这个 flex 子元素设置了宽度吗？如果设置了，flex 子元素的大小将会基于设置的宽度。
2. `flex-basis` 设为 `auto` 还是`content` (在支持的浏览器中)? 如果是`auto`, flex 子元素的大小为原始大小。
3. `flex-basis` 是不为`0`的长度单位吗？如果是这样那这就是 flex 子元素的大小。
4. `flex-basis` 设为 `0`呢？如果是这样，则 flex 子元素的大小不在空间分配计算的考虑之内。

### 我们有可用空间吗？

flex 子元素没有 positive free space 就不会增长，没有 negative free space 就不会缩小。

1. 如果我们把所有的 flex 子元素的宽度相加（如果在列方向工作则为高度），那么总和是否小于 flex 容器的总宽度（或高度）？如果是这样，那么你有 positive free space，并且 `flex-grow` 会发挥作用。
2. 如果我们把所有的 flex 子元素的宽度相加（如果在列方向工作则为高度），那么总和是否大于 flex 容器的总宽度（或高度）？如果是这样，那么你有 negative free space，并且 `flex-shrink` 会发挥作用。

### 分配空间的其他方式

如果我们不想空间添加到 flex 子元素中，记住你可以在 flex 容器中使用指南中所描述的对准属性来处理 flex 子元素之间或者 flex 子元素周围的空闲空间，以致可以对齐 flex 子元素。{{cssxref("justify-content")}} 属性能够在 flex 子元素之间或 flex 子元素周围分配空闲空间。您还可以在 flex 子元素上使用自动边距 (auto margins) 来吸收空间并在 flex 子元素之间创建间距。

随着所有的 flex 工具的使用，你会发现大多数任务都可以实现，尽管在开始时可能需要一些实验。
