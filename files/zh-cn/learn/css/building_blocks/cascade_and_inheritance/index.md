---
title: 层叠与继承
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
translation_of: Learn/CSS/Building_blocks/Cascade_and_inheritance
---
{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

本文旨在让你理解 CSS 的一些最基本的概念——层叠、优先级和继承——这些概念决定着如何将 CSS 应用到 HTML 中，以及如何解决冲突。

尽管与课程的其他部分相比，完成这节课可能看起来没有那么直接的相关性，而且更学术性一些，但是理解这些东西将为您以后节省很多痛苦！我希望您仔细阅读本节，并在继续下一步学习之前，确保您是否理解了这些概念。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机知识，<a
          href="/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装基本的软件</a
        >，<a
          href="/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理</a
        >基本知识，HTML 基础知识 (如果不了解 HTML，请移步
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">学习 HTML 入门</a
        >)，以及 CSS 如何工作的基本常识 (如果不了解 CSS，请移步
        <a href="/en-US/docs/Learn/CSS/First_steps">学习 CSS 第一步</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习层叠、优先级，以及在 CSS 中继承是如何工作的。</td>
    </tr>
  </tbody>
</table>

## 冲突规则

CSS 代表**层叠样式表 (Cascading Style Sheets)**，理解第一个词*cascading*很重要— cascade 的表现方式是理解 CSS 的关键。

在某些时候，在做一个项目过程中你会发现一些应该产生效果的样式没有生效。通常的原因是你创建了两个应用于同一个元素的规则。**cascade**, 和它密切相关的概念是 **specificity**，决定在发生冲突的时候应该使用哪条规则。设计元素样式的规则可能不是期望的规则，因此需要了解这些机制是如何工作的。

这里也有**继承**的概念，也就是在默认情况下，一些 css 属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。

我们来快速的看下正在处理的关键问题，然后依次了解它们是如何相互影响的，以及如何和 css 交互的。虽然这些概念难以理解，但是随着不断的练习，你会慢慢熟悉它的工作原理。

### 层叠

Stylesheets **cascade（样式表层叠）** — 简单的说，css 规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

下面的例子中，我们有两个关于 `h1` 的规则。`h1` 最后显示蓝色 — 这些规则有相同的优先级，所以顺序在最后的生效。

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 400)}}

### 优先级

浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度：

- 一个元素选择器不是很具体 — 会选择页面上该类型的所有元素 — 所以它的优先级就会低一些。
- 一个类选择器稍微具体点 — 它会选择该页面中有特定 `class` 属性值的元素 — 所以它的优先级就要高一点。

举例时间 ! 下面我们再来介绍两个适用于 `h1` 的规则。下面的 `h1` 最后会显示红色 — 类选择器有更高的优先级，因此就会被应用——即使元素选择器顺序在它后面。

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 500)}}

稍后我们会详细解释优先级评分和其他相关内容。

### 继承

继承也需要在上下文中去理解 —— 一些设置在父元素上的 css 属性是可以被子元素继承的，有些则不能。

举一个例子，如果你设置一个元素的 `color` 和 `font-family` ，每个在里面的元素也都会有相同的属性，除非你直接在元素上设置属性。

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 550)}}

一些属性是不能继承的 — 举个例子如果你在一个元素上设置 {{cssxref("width")}} 50% ，所有的后代不会是父元素的宽度的 50% 。如果这个也可以继承的话，CSS 就会很难使用了！

> **备注：** 在 MDN CSS 属性引用页面你会发现一个技术信息框，通常在规范区域的底部，列举了属性的很多数据信息，包括能否被继承。参见 [color property Specifications section](/en-US/docs/Web/CSS/color#Specifications), 例子。

## 理解这些概念是如何协同工作的

这三个概念一起来控制 css 规则应用于哪个元素；在下面的内容中，我们将看到它们是如何协同工作的。有时候会感觉有些复杂，但是当你对 css 有更多经验的时候，你就可以记住它们，即便忘记了细节，可以在网上查到，有经验的开发人员也不会记得所有细节。

## 理解继承

我们从继承开始。下面的例子中我们有一个{{cssxref("ul")}}，里面有两个无序列表。我们已经给 `<ul>` 设置了 **border**， **padding** 和 **font color**.

**color** 应用在直接子元素，也影响其他后代 — 直接子元素`<li>`，和第一个嵌套列表中的子项。然后添加了一个 `special` 类到第二个嵌套列表，其中使用了不同的颜色。然后通过它的子元素继承。

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 700)}}

像 widths (上面提到的), margins, padding, 和 borders 不会被继承。如果 borders 可以被继承，每个列表和列表项都会获得一个边框 — 可能就不是我们想要的结果！

哪些属性属于默认继承很大程度上是由常识决定的。

### 控制继承

CSS 为控制继承提供了五个特殊的通用属性值。每个 css 属性都接收这些值。

- {{cssxref("inherit")}}
  - : 设置该属性会使子元素属性和父元素相同。实际上，就是 "开启继承".
- {{cssxref("initial")}}
  - : 设置属性值和浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 `inherit` 。
- {{cssxref("revert")}}
  - : 将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值。在许多情况下，此值的作用类似于 `unset`。
- {{cssxref("revert-layer")}}
  - : 将应用于选定元素的属性值重置为在上一个[层叠层](/zh-CN/docs/Web/CSS/@layer)中建立的值。
- {{cssxref("unset")}}
  - : 将属性重置为自然值，也就是如果属性是自然继承那么就是 `inherit`，否则和 `initial` 一样

> **备注：** 见 {{SectionOnPage("/zh-CN/docs/Web/CSS/Cascade", "CSS 声明的源")}} 有更多信息和具体是怎么工作的。

下面的例子你可以通过修改 css 来查看它们的功能，写代码是掌握 html 和 css 最好的办法。

例子：

1. 第二个列表项有类 `my-class-1` 。它设置了内部元素来继承属性。如果你删除这个类，它会如何改变链接的颜色？
2. 你知道为什么第三个和第四个链接会是这样的颜色？ 如果不知道看看之前的内容。
3. 哪个链接的颜色会改变如果你对 `<a>` 添加一个新样式 — 例如 `a { color: red; }`?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 700)}}

### 重设所有属性值

CSS 的 shorthand 属性 `all` 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个 (`inherit`, `initial`, `unset`, or `revert`)。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

下面的例子中有两个**blockquote** 。第一个用元素本身的样式 ，第二个设置 `all` 为 `unset`

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 700)}}

试着将 `all` 改成其他可能的值然后观察有什么不一样。

## 理解层叠

我们现在明白了为什么嵌套在 html 结构中的段落和应用于正文中的 css 颜色相同，从入门课程中，我们了解了如何将文档中的任何修改应用于某个对象的 css，无论是把 css 指定某个元素还是创建一个类。现在，我们将要了解层叠如何定义在不止一个元素的时候怎么应用 css 规则。

有三个因素需要考虑，根据重要性排序如下，前面的更重要：

1. 重要程度
2. 优先级
3. 资源顺序

我们从下往上，看看浏览器是如何决定该应用哪个 css 规则的。

### 资源顺序

我们已经看到了顺序对于层叠的重要性。如果你有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。

### 优先级

在你了解了顺序的重要性后，会发现在一些情况下，有些规则在最后出现，但是却应用了前面的规则。这是因为前面的有更高的**优先级** — 它范围更小，因此浏览器就把它选择为元素的样式。

就像前面看到的，类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。

这里需要注意虽然我们考虑的是选择器，以及应用在选中对象上的规则，但不会覆盖所有规则，只有相同的属性。

这样可以避免重复的 CSS。一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。举个例子，在下面的样式中我给 2 级标题定义了通用样式，然后创建了一些类只修改部分属性的值。最初定义的值应用于所有标题，然后更具体的值通过对应类来实现。

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 700)}}

现在让我们来看看浏览器如何计算优先级。我们已经知道一个元素选择器比类选择器的优先级更低会被其覆盖。本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。

一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数：

1. **千位**： 如果声明在 {{htmlattrxref("style")}} 的属性（内联样式）则该位得一分。这样的声明没有选择器，所以它得分总是 1000。
2. **百位**： 选择器中包含 ID 选择器则该位得一分。
3. **十位**： 选择器中包含类选择器、属性选择器或者伪类则该位得一分。
4. **个位**：选择器中包含元素、伪元素选择器则该位得一分。

> **备注：** 通用选择器 (`*`)，组合符 (`+`, `>`, `~`, ' ')，和否定伪类 (`:not`) 不会影响优先级。

> **警告：** 在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。

下面有几个单独的例子，有空可以看看。试着思考下，理解为什么优先级是这样定的。我们还没有深入介绍选择器，不过你可以在 MDN 上面找到每个选择器的详细信息 [selectors reference](/en-US/docs/Web/CSS/CSS_Selectors).

| 选择器                                    | 千位 | 百位 | 十位 | 个位 | 优先级 |
| ----------------------------------------- | ---- | ---- | ---- | ---- | ------ |
| `h1`                                      | 0    | 0    | 0    | 1    | 0001   |
| `h1 + p::first-letter`                    | 0    | 0    | 0    | 3    | 0003   |
| `li > a[href*="en-US"] > .inline-warning` | 0    | 0    | 2    | 2    | 0022   |
| `#identifier`                             | 0    | 1    | 0    | 0    | 0100   |
| 内联样式                                  | 1    | 0    | 0    | 0    | 1000   |

在我们继续之前，先看看这个例子。

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 700)}}

这里发生了什么？ 首先，我们先看看最上面的选择器规则，你会发现，我们已经把优先级计算出来放在最前面的注释里。

- 前面两个选择器都是链接背景颜色的样式 — 第二个赢了使得背景变成蓝色因为它多了一个 ID 选择器：优先级 201 vs. 101。
- 第三四个选择器都是链接文本颜色样式 — 第二个（第四个）赢了使得文本变成白色因为它虽然少一个元素选择器，但是多了一个类选择器，多了 9 分。所以优先级是 113 vs. 104。
- 第 5 到 7 个选择器都是鼠标悬停时链接边框样式。第六个显然输给第五个优先级是 23 vs. 24 — 少了个元素选择器。 第七个，比第五第六都高 — 子选择器数量相同，但是有一个元素选择器变成类选择器。所以最后优先级是 33 vs. 23 和 24。

### !important

有一个特殊的 CSS 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用 — `!important`。用于修改特定属性的值， 能够覆盖普通规则的层叠。

看看这个例子，有两个段落，其中一个有 ID。

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 700)}}

让我们看看会发生什么 — 如果有什么疑问，试着删除一些属性：

1. 你会发现第三个规则 {{cssxref("color")}} 和 {{cssxref("padding")}} 的值被应用了，但是 {{cssxref("background-color")}} 没有。为什么？ 应该三个都应用，因为顺序规则是后面覆盖前面。
2. 无论如何， 上面的规则赢了，因为类选择器比元素选择器有更高的优先级。
3. 两个元素都有 `better`{{htmlattrxref("class")}}，但是第二个有 {{htmlattrxref("id")}} 。因为 ID 选择器比类选择器优先级更高 (一个页面只能有一个独特的 ID，但是很多元素都有相同的类 — ID 对于目标非常独特)，红色背景和 1 pixel black border 应该都被应用到第二个元素，第一个元素应该是灰色背景和 no border，根据类选择器。
4. 第二个元素有红色背景但是没有边框。为什么？因为 `!important` 声明在第二条规则里 — 在 `border: none` 后面，说明即使计算优先级低这个属性也使用这个值。

> **备注：** 覆盖 `!important` 唯一的办法就是另一个 `!important` 具有 相同*优先级* 而且顺序靠后，或者更高优先级。

了解 `!important` 是为了在阅读别人代码的时候知道有什么作用。 **但是，强烈建议除了非常情况不要使用它。** `!important` 改变了层叠的常规工作方式，它会使调试 CSS 问题非常困难，特别是在大型样式表中。

在一种情况下，你可能不得不使用它：当你不能编辑核心的 CSS 模块，不能用任何其他方式覆盖，而你又真的想要覆盖一个样式时。但说真的，如果可以避免的话就不要用它。

## CSS 位置的影响

最后，也很有用，CSS 声明的重要性取决于样式表中指定的——它让用户可以设置自定义样式表来覆盖开发人员定义的样式。例如用户可能视力受损，并想在所有网页上设置两倍的正常字体大小，以便更容易进行阅读。

## 简而言之

相互冲突的声明将按以下顺序适用，后一种声明将覆盖前一种声明：

1. 用户代理样式表中的声明 (例如，浏览器的默认样式，在没有设置其他样式时使用)。
2. 用户样式表中的常规声明 (由用户设置的自定义样式)。
3. 作者样式表中的常规声明 (这些是我们 web 开发人员设置的样式)。
4. 作者样式表中的`!important`声明
5. 用户样式表中的`!important` 声明

对于 web 开发人员的样式表来说，覆盖用户样式表是有意义的，因此设计可以按预期进行，但是有时用户充足的理由覆盖 web 开发人员样式，正如上面提到的—这可以通过在他们的规则中使用`!important`来实现。

## 主动学习：玩转层叠

在这种主动学习中，我们希望您尝试编写一个新的规则，它将覆盖我们默认应用于链接的颜色和背景颜色。您可以使用我们在[控制继承](#控制继承) 节中查看的一个特殊值来在一个新规则中编写一个声明，该声明将重置背景颜色为白色，而不使用实际的颜色值吗？

如果你犯了一个错误，你总是可以用重置按钮重置它。如果你真的卡住了，看看这里的解决方案 [进入](https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-cascade)。

{{EmbedGHLiveSample("css-examples/learn/cascade/task.html", '100%', 700)}}

## 接下来做什么呢？

如果您理解了本文的大部分内容，那么就做得很好了—您已经开始熟悉 CSS 的基本机制。接下来，我们将详细讨论选择器。

如果您没有完全理解层叠，优先级和继承，也请不要担心！这绝对是我们到目前为止在课程中所涉及到的最复杂的事情，即使是专业的 web 开发人员有时也会觉得棘手。我们建议您在继续学习这门课程的过程中，反复阅读这篇文章几次，并继续思考它。

如果您开始遇到样式没有按照预期应用的奇怪问题，请回到这里。这可能是一个特殊的问题。

{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

## 模块目录

1. [层叠与继承](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)

    - [标签，类，ID 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [属性选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [伪类和伪元素](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [关系选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)
4. [背景与边框](/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [处理不同文字方向的文本](/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [溢出的内容](/zh-CN/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [值和单位](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [在 CSS 中调整大小](/zh-CN/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [图像、媒体和表单元素](/zh-CN/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [样式化表格](/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [调试 CSS](/zh-CN/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [组织 CSS](/zh-CN/docs/Learn/CSS/Building_blocks/Organizing)[](/zh-CN/docs/Learn/CSS/Building_blocks/Organizing)
