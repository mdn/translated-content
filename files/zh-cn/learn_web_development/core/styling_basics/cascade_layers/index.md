---
title: 层叠层
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
---

这一课的目的是向你介绍[层叠层](/zh-CN/docs/Web/CSS/Reference/At-rules/@layer)，这是一个更高级的特性，它建立在 [CSS 层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)和 [CSS 优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)的基本概念之上。

如果你是 CSS 的新手，刚开始可能会觉得这部分的内容与本课程的其他部分相比不太相关，而且有些学术化。然而，了解层叠层的基本知识对于你在项目中遇到它们时会非常有帮助。随着你对 CSS 的不断使用，理解层叠层以及如何充分利用它们的功能将能够避免在处理来自不同团队、插件和开发人员的 CSS 代码库时遇到的很多问题。

当你使用来自多个源的 CSS，或当存在冲突的 CSS 选择器和竞争优先级时，又或者当你考虑使用 [`!important`](/zh-CN/docs/Web/CSS/Reference/Values/important) 时，层叠层最为相关。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>对 CSS 如何工作有一定的了解，包括层叠和优先级（学习
        <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS 入门</a>和<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">层叠和继承</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习层叠层是如何工作的。
      </td>
    </tr>
  </tbody>
</table>

应用于元素的每个 CSS 属性，只能有一个值。你可以通过在浏览器的开发者工具中检查元素来查看应用于元素的所有属性值。工具的“样式”面板显示了应用在被检查元素上的所有属性值，以及匹配的选择器和 CSS 源文件。具有优先权的来源（origin）的选择器将其值应用于匹配的元素。

除了应用的样式外，“样式”面板还显示了与选定元素匹配但由于层叠、优先级或源顺序而未应用的被划掉的值。划掉的样式可能来自具有相同优先权（precedence）来源但具有较低优先级（specificity），或者来源和优先级相同，但在代码库中较早出现。对于任何应用的属性值，可能有来自许多不同来源的几个声明被划掉。如果你看到一个划掉的样式，它有一个具有更高优先级的选择器，这意味着该值的来源或重要性较低。

通常情况下，随着网站复杂度的增加，样式表数量也会增加，这使得样式表的源顺序变得更加重要和复杂。层叠层简化了在这样的代码库维护样式表的复杂程度。层叠层是显式优先级容器，提供了对最终应用的 CSS 声明更简单和更强大的控制能力，使 web 开发者能够在不必与优先级抗争的情况下，优先考虑 CSS 的部分。

要了解层叠层，必须很好地理解 CSS 层叠。下面的小节提供了层叠的重要概念的快速回顾。

## CSS 层叠概念的回顾

CSS 中的 C 代表“层叠”。这是样式层叠在一起的方法。用户代理经过几个非常明确定义的步骤来确定每个元素的每个属性的值。我们将在这里简要列出这些步骤，然后深入研究第 4 步——层叠层，就是你来到这里学习的内容：

1. **相关声明**：找到所有具有匹配每个元素的选择器的声明代码块。
2. **重要性**：根据规则是普通还是重要对规则进行排序。重要的样式是指设置了 [`!important`](/zh-CN/docs/Web/CSS/Reference/Values/important) 标志的样式。
3. **来源**：在两个按重要性划分的分组内，按作者、用户或用户代理这几个来源对规则进行排序。
4. **层**：在六个按重要性和来源划分的分组内，按层叠层进行排序。普通声明的层顺序是从创建的第一个到最后一个，然后是未分层的普通样式。对于重要的样式，这个顺序是反转的，但保持未分层的重要样式优先权最低。
5. **优先级**：对于来源层中优先权相同的竞争样式，按[优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)对声明进行排序。
6. **出现顺序**：当两个来源层的优先权相同的选择器具有相同的优先级时，最后声明的具有最高优先级的选择器的属性值获胜。

对于每一步，只有“仍在运行”的声明才会进入下一轮“竞争”。如果只有一个声明在运行，那么它就“赢了”，后续的步骤就没有意义了。

### 来源和层叠

有三种[层叠来源类型](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#来源类型)：用户代理样式表、用户样式表和作者样式表。浏览器根据来源和重要性将每个声明分为六个来源分组。有八个优先权级别：六个来源分组、正在过渡的属性和正在动画的属性。优先权的顺序是从具有最低优先权的普通用户代理样式，到当前应用的动画中的样式，到具有最高优先权的重要用户代理样式，再到正在过渡的样式：

1. 用户代理普通样式
2. 用户普通样式
3. 作者普通样式
4. 正在动画的样式
5. 作者重要样式
6. 用户重要样式
7. 用户代理重要样式
8. 正在过渡的样式

“用户代理”指的是浏览器。“用户”指的是是网站访问者。“作者”指的是你，开发者。用 {{HTMLElement('style')}} 元素直接在元素上声明的样式是作者样式。不包括动画和过渡样式，用户代理普通样式具有最低优先权；用户代理重要样式具有最高优先权。

### 来源和优先级

对于每个属性，“获胜”的声明是来自基于权重（普通或重要）具有优先权的来源的声明。暂时忽略层，来自具有最高优先权的来源的值将被应用。如果获胜来源对于一个元素有多个属性声明，那么将比较这些竞争属性值的选择器的[优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)。不同来源之间的选择器从不比较优先级。

在下面的例子中，有两个链接。第一个没有应用作者样式，所以只有用户代理样式被应用（以及你个人的用户样式，如果有的话）。第二个被作者样式设置了 [`text-decoration`](/zh-CN/docs/Web/CSS/Reference/Properties/text-decoration) 和 [`color`](/zh-CN/docs/Web/CSS/Reference/Properties/color)，即使作者样式表中的选择器具有 [`0-0-0`](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity#选择器类型) 的优先级。作者样式“获胜”的原因是，当来自不同来源的样式发生冲突时，具有优先权的来源的规则被应用，而不管没有优先权的来源中的优先级如何。

```html live-sample___basic-cascade
<p><a href="https://example.org">User agent styles</a></p>
<p><a class="author" href="https://example.org">Author styles</a></p>
```

```css live-sample___basic-cascade
:where(a.author) {
  text-decoration: overline;
  color: red;
}
```

{{EmbedLiveSample("basic-cascade")}}

在撰写本文时，用户代理样式表中“竞争”的选择器是 `a:any-link`，它具有 `0-1-1` 的优先级权重。虽然这大于作者样式表中 `0-0-0` 的选择器，但即使你当前的用户代理中的选择器不同，也没关系：作者和用户代理来源之间从不比较优先级权重。了解更多关于[如何计算优先级权重](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity#优先级是如何计算的？)。

来源优先权总是胜过选择器优先级。如果一个元素属性被多个来源中的普通样式声明所设置，那么作者样式表将总是覆盖用户或用户代理样式表中声明的冗余普通属性。如果样式是重要的，那么用户代理样式表将总是胜过作者和用户样式。层叠来源优先权确保了不同来源之间的优先级冲突永远不会发生。

在继续之前，还有一件事要注意：当具有优先权的来源中竞争的声明具有相同的优先级时，出现顺序才变得相关。

## 层叠层的概述

我们现在了解了“层叠来源优先权”，那么什么是“层叠层优先权”呢？我们将通过解释层叠层是什么，它们如何排序以及如何为层叠层分配样式来回答这个问题。我们将介绍[普通层](#创建层叠层)、[嵌套层](#嵌套层的概述)和匿名层。首先让我们讨论层叠层是什么以及它们解决了哪些问题。

### 层叠层的优先权顺序

类似于我们有六个基于来源和重要性的优先权级别，层叠层使我们能够在这些来源中创建子来源级别的优先权。

在六个来源中的每一个，都可以有多个层叠层。[层创建的顺序](/zh-CN/docs/Web/CSS/Reference/At-rules/@layer)非常重要。层创建的顺序确定了同一来源内层的优先权顺序。

在普通来源中，层按照创建的顺序排序。优先权顺序是从首个创建的层到最后一个层，然后是未分层的普通样式。

对于重要样式，这个顺序是相反的。所有未分层的重要样式会层叠在一起，形成一个隐式层，优先权高于所有非过渡的普通样式。未分层的重要样式的优先权低于任何重要分层样式。在同一来源内，先前声明的层中的重要样式优先于后续声明的层中的重要样式。

在本教程的其余部分，我们将讨论限制在作者样式上，但请记住层也可以存在于用户和用户代理样式表中。

### 层叠层可以解决的问题

大型代码库可能会有来自多个团队、组件库、框架和第三方的样式。无论包含了多少样式表，所有这些样式都会层叠在一个单一的来源中：*作者*样式表。

将许多来源的样式层叠在一起，特别是来自不同团队的样式，可能会导致问题。不同团队可能有不同的方法论；一个团队可能有自己的降低优先级的最佳实践，而另一个团队可能有自己的在每个选择器中包含 `id` 的标准。

优先级冲突可能会迅速升级。Web 开发人员可能通过添加 `!important` 标志来进行“快速修复”。虽然这可能看起来是一种简单的解决方案，但它通常只是将优先级战争从普通声明转移到重要声明。

就像层叠来源在用户、用户代理和作者样式之间提供了力量平衡一样，层叠层提供了一种结构化的方式来组织和平衡单一来源内的关注点，就好像来源中的每个层都是一个子来源。可以为每个团队、组件和第三方创建一个层，其中的样式优先权基于层的顺序。

层内的规则层叠在一起，而不会与层外的样式规则竞争。层叠层使得可以优先考虑整个样式表而不必担心这些子来源之间的优先级。

层的优先权始终高于选择器的优先级。具有优先权的层中的样式“胜出”于具有较低优先权的层。输掉的层中选择器的优先级是无关紧要的。在层内竞争的属性值的优先级仍然会受到注意，但是在层之间没有优先级的问题，因为每个属性对应的最高优先权层才会被考虑。

### 嵌套层叠层可以解决的问题

层叠层允许创建嵌套层。每个层叠层可以包含嵌套层。

例如，可以将组件库导入到 `components` 层中。常规层叠层将组件库添加到作者来源中，消除与其他作者样式的优先级冲突。在 `components` 层内部，开发人员可以选择定义各种主题，每个主题作为单独的嵌套层。这些嵌套层的顺序可以根据媒体查询（参见下面的[层创建和媒体查询](#层创建和媒体查询)部分），例如视口大小或[方向](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/orientation)来定义。这些嵌套层提供了一种创建不基于优先级冲突的主题的方式。

嵌套层的能力非常适用于开发组件库、框架、第三方小部件和主题的任何人。

创建嵌套层的能力还消除了层名称冲突的担忧。我们将在[嵌套层](#嵌套层的概述)部分介绍这一点。

> “作者可以创建表示元素默认值、第三方库、主题、组件、覆盖和其他样式问题的层，并且能够以明确的方式对层的层叠进行重新排序，而无需更改每个层内的选择器或优先级，也无需依赖出现顺序来解决跨层的冲突。”
>
> ——[层叠与继承规范](https://www.w3.org/TR/css-cascade-5/#layering)。

## 创建层叠层

可以使用以下任一方法创建层叠层：

- 使用 `@layer` 声明 at 规则，使用 `@layer` 后跟一个或多个层的名称来声明层。这将创建一个没有分配任何样式的具名层。
- 使用 `@layer` 块 at 规则，在块中的所有样式都将添加到一个命名或未命名的层中。
- 使用具有 `layer` 关键字或 `layer()` 函数的 [`@import`](/zh-CN/docs/Web/CSS/Reference/At-rules/@import) 规则，将导入文件的内容分配到该层中。

在尚未初始化具有相同名称的层的情况下，这三种方法中的任何一种都会创建一个层。如果在 `@layer` at 规则或带有 `layer()` 的 `@import` 中没有提供层名称，则将创建一个新的匿名层。

> [!NOTE]
> 层的优先顺序是它们创建的顺序。不在层中的样式，或者称为“未分层样式”，会层叠到最终的隐式标签中。

在讨论嵌套层之前，让我们对创建层的三种方法进行详细介绍。

### 用于具名层的 @layer 声明 at 规则

层的顺序由 CSS 中层出现的顺序确定。使用 `@layer` 后跟一个或多个层的名称而不分配任何样式是定义[层顺序](#根据层的顺序确定优先权)的一种方式。

[`@layer`](/zh-CN/docs/Web/CSS/Reference/At-rules/@layer) CSS at 规则用于声明层叠层，并在存在多个层叠层时定义优先权顺序。以下规则按照列出的顺序声明了三个层：

```css
@layer theme，layout，utilities;
```

通常，你需要在 CSS 的第一行声明这个 `@layer`（当然要用对你的站点有意义的层名称），以便完全控制层的顺序。

如果上述声明是站点 CSS 的第一行，那么层的顺序将是 `theme`、`layout` 和 `utilities`。如果在上述语句之前已经创建了一些层，只要同名的层还不存在，这三个层就会被创建并添加到现有层列表的末尾。但是，如果同名的层已经存在，那么上述语句只会创建两个新层。例如，如果 `layout` 已经存在，只会创建 `theme` 和 `utilities`, 但在这种情况下的层顺序将是 `layout`、`theme` 和 `utilities`。

### 用于具名层和匿名层的 @layer 块 at 规则

可以使用块 `@layer` at 规则来创建层。如果一个 `@layer` at 规则后跟一个标识符和一个块样式，则该标识符用于命名该层，该规则中的样式被添加到该层的样式中。如果具有指定名称的层不存在，则会创建一个新层。如果具有指定名称的层已经存在，则会将样式添加到先前存在的层中。如果在使用 `@layer` 创建块样式时没有指定名称，则该规则中的样式将被添加到一个新的匿名层中。

在下面的示例中，我们使用了四个块和一个内联的 `@layer` at 规则。这个 CSS 按列出的顺序执行以下操作：

1. 创建一个命名的 `layout` 层
2. 创建一个未命名的匿名层
3. 声明三个层的列表并只创建两个新层 `theme` 和 `utilities`，因为 `layout` 已经存在
4. 向已经存在的 `layout` 层添加额外的样式
5. 创建第二个未命名的匿名层

```css
/* 文件：layers1.css */

/* 未分层的样式 */
body {
  color: #333;
}

/* 创建第一个层：`layout` */
@layer layout {
  main {
    display: grid;
  }
}

/* 创建第二个层：一个未命名的匿名层 */
@layer {
  body {
    margin: 0;
  }
}

/* 创建第三和第四个层：`theme` 和 `utilities` */
@layer theme，layout，utilities；
/* 向已经存在的 `layout` 层添加样式 */
@layer layout {
  main {
    color: #000;
  }
}

/* 创建第五个层：一个未命名的匿名层 */
@layer {
  body {
    margin: 1vw;
  }
}
```

在上面的 CSS 中，我们创建了五个层：`layout`、`<anonymous(01)>`、`theme`、`utilities` 和 `<anonymous(02)>`——按这个顺序——第六个隐含的未分层样式层包含在 `body` 样式块中。层的顺序是层的创建顺序，未分层样式的隐含层总是在最后的。一旦创建了层之后就无法改变层的顺序。

我们将一些样式分配给名为 `layout` 的层。如果指定的具名层不存在，则在 `@layer` at 规则中指定名称（无论是否向层分配样式）都会创建该层；这会将该层添加到现有层名称系列的末尾。如果指定的具名层已经存在，该命名块内的所有样式都会附加到之前存在的层中的样式——通过重用现有的层名称指定样式不会创建新层。

通过在不命名层的情况下将样式分配给层来创建匿名层。只能在创建时向未命名的层添加样式。

> [!NOTE]
> 后续使用不带层名的 `@layer` 会创建额外的未命名层；它不会将样式附加到先前存在的未命名层。

`@layer` at 规则创建一个命名或未命名的层，或者如果指定的具名层已经存在，则将样式附加到该层。我们称第一个匿名层为 `<anonymous(01)>`，第二个为 `<anonymous(02)>`，这只是为了便于解释。这些实际上是未命名的层。没有办法引用它们或向它们添加额外的样式。

在层之外声明的所有样式都会加入到一个隐含的层中。在上面的示例代码中，第一条声明为 `body` 设置了 `color: #333` 属性。这是在任何层之外声明的。即使未分层的样式具有更低的优先级并且在出现顺序上排在前面，正常的未分层声明也优先于正常的分层声明。这解释了为什么即使未分层的 CSS 在代码块中先被声明，包含这些未分层样式的隐含层的优先权却如同它是最后声明的层一样。

在 `@layer theme, layout, utilities;` 这一行中，声明了一系列层，只创建了 `theme` 和 `utilities` 层；`layout` 已经在第一行中创建。请注意，此声明不会更改已经创建层的顺序。目前没有办法重新排序已声明的层。

在下面的交互式示例中，我们将样式分配给两个层，在此过程中创建并命名了它们。因为它们在首次使用时已经存在，所以在最后一行声明它们没有任何影响。

```html live-sample___layer-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___layer-order
@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}

/* this does nothing */
@layer site, page;
```

{{EmbedLiveSample("layer-order")}}

试着将最后一行 `@layer site, page;` 移到第一行。会发生什么？

#### 层创建和媒体查询

如果你使用[媒体](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)或[特性](/zh-CN/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)查询来定义层，且媒体不匹配或特征不被支持，则不会创建该层。下面的示例展示了改变设备或浏览器的尺寸可能会改变层的顺序。在这个示例中，我们只在更宽的浏览器中创建 `site` 层。然后我们按顺序为 `page` 和 `site` 层分配样式。

```html live-sample___media-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___media-order
@media (min-width: 50em) {
  @layer site;
}

@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}
```

{{EmbedLiveSample("media-order")}}

在宽屏上，`site` 层在第一行被声明，这意味着 `site` 的优先权低于 `page`。否则在窄屏上，`site` 的优先权高于 `page`，因为它在后面被声明。如果不起作用，请将媒体查询中的 `50em` 改为 `10em` 或 `100em`。

### 使用 @import 将样式表导入具名层和匿名层

[`@import`](/zh-CN/docs/Web/CSS/Reference/At-rules/@import) 规则允许用户直接从其他样式表导入样式规则到 CSS 文件或 {{htmlelement('style')}} 元素中。

导入样式表时，必须在样式表或 `<style>` 块中的任何 CSS 样式之前定义 `@import` 语句。`@import` 语句必须出现在最前面，在任何样式之前，但可以在创建一个或多个层而不向这些层分配任何样式的 `@layer` 规则之后（`@import` 也可以在 [`@charset`](/zh-CN/docs/Web/CSS/Reference/At-rules/@charset) 规则之后）。

你可以将样式表导入具名层、嵌套具名层或匿名层。以下层分别将样式表导入 `components` 层、`components` 层中的嵌套 `dialog` 层和一个未命名层：

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

你可以将多个 CSS 文件导入到单个层中。以下声明将两个单独的文件导入到单个 `social` 层中：

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

你可以使用[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)和[特性查询](/zh-CN/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)根据特定条件导入样式并创建层。以下将样式表导入到 `international` 层，但前提是浏览器支持 `display: ruby`，而且被导入的文件取决于屏幕的宽度。

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and
  (width >= 32rem);
```

> [!NOTE]
> 没有与链接样式表的 {{HTMLElement('link')}} 方法相对应的方法。当你无法在样式表内部使用 `@layer` 时，请使用 `@import` 将样式表导入到层中。

### 嵌套层的概述

嵌套层是具名层或匿名层中的子层。每个层叠层（即使是匿名的）都可以包含嵌套层。导入到另一个层中的层会成为该层中的嵌套层。

### 嵌套层的优点

嵌套层的能力使团队可以创建层叠层，而不用担心其他团队会将它们导入到一个层中。同样，嵌套使你可以将第三方样式表导入到一个层中，而不用担心该样式表本身是否具有层。因为层可以嵌套，所以你不必担心外部和内部样式表之间会有冲突的层名称。

### 创建嵌套层叠层

嵌套层可以使用与常规层相同的方法创建。例如，可以使用点表示法，在 `@layer` 规则后跟一个或多个层名称来创建。多个点和层名称表示多重嵌套。

如果你在一个块 `@layer` at 规则内嵌套另一个块 `@layer` at 规则，无论是否命名，嵌套的块都会成为一个嵌套层。类似地，当一个样式表被使用包含 `layer` 关键字或 `layer()` 函数的 `@import` 声明导入时，样式会被分配到该具名或匿名层。如果 `@import` 语句包含层，那么这些层会成为该匿名或具名层中的嵌套层。

让我们看下面的例子：

```css
@import url("components-lib.css") layer(components);
@import url("narrowtheme.css") layer(components.narrow);
```

在第一行中，我们将 `components-lib.css` 导入 `components` 层。如果该文件包含任何层，无论命名与否，这些层都会成为 `components` 层中的嵌套层。

第二行将 `narrowtheme.css` 导入 `narrow` 层，`narrow` 是 `components` 的子层。嵌套的 `components.narrow` 会作为 `components` 层中的最后一个层创建，除非 `components-lib.css` 已经包含一个 `narrow` 层，在这种情况下，`narrowtheme.css` 的内容会被附加到 `components.narrow` 嵌套层。可以使用 `components.<layerName>` 模式向 `components` 层添加更多命名嵌套层。如前所述，可以创建未命名层，但随后无法访问它们。

让我们看另一个例子，其中我们使用以下语句[将 `layers1.css` 导入一个具名层](#用于具名层和匿名层的_layer_块_at_规则)：

```css
@import url(layers1.css) layer(example);
```

这将创建一个单一的具名层 `example`，其中包含一些声明和五个嵌套层——`example.layout`、`example.<anonymous(01)>`、`example.theme`、`example.utilities` 和 `example.<anonymous(02)>`。

要向命名的嵌套层添加样式，应使用点表示法：

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## 根据层的顺序确定优先权

层的顺序决定了它们的优先权顺序。因此，层的顺序非常重要。与层叠根据来源和重要性进行排序的方式相同，层叠也会根据来源层和重要性对每个 CSS 声明进行排序。

### 常规层叠层的优先权顺序

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

上述代码创建了两个具名层和一个未命名层。假设这三个文件（`A.css`、 `B.css` 和 `C.css`）本身不包含任何额外的层。以下列表显示了在这些文件内外声明的样式将以从最低（1）优先权到最高（10）优先权进行排序。

1. firstLayer 普通样式（`A.css`）
2. secondLayer 普通样式（`B.css`）
3. 未分层普通样式（`C.css`）
4. 内联普通样式
5. 动画样式
6. 未分层重要样式（`C.css`）
7. secondLayer 重要样式（`B.css`）
8. firstLayer 重要样式（`A.css`）
9. 内联重要样式
10. 过渡样式

在层中声明的普通样式具有最低的优先权，并按照创建层的顺序进行排序。在最先创建的层中声明的普通样式具有最低的优先权，而在最后创建的层中声明的普通样式在所有层中具有最高的优先权。换句话说，如果存在冲突的话，在 `firstLayer` 中声明的普通样式将被列表中任何后续的样式覆盖。

接下来是在层外声明的任何样式。`C.css` 中的样式没有导入到层中，并将覆盖任何来自 `firstLayer` 和 `secondLayer` 的冲突样式。在层外声明的普通样式总是比层内的普通样式具有更高的优先权。

内联样式是使用 [`style`属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/style)声明的。以这种方式声明的普通内联样式将优先于在未分层和分层样式表中找到的普通样式（`firstLayer - A.css`，`secondLayer - B.css` 和 `C.css`）。

动画样式比所有普通样式都具有更高的优先权，包括内联普通样式。

重要样式，即包含 `!important` 标志的属性值，优先于我们列表中前面提到的任何样式。它们的排序顺序与普通样式的顺序相反。在层外声明的任何重要样式的优先权都低于在层内声明的样式。在层中找到的重要样式也按层的创建顺序进行排序。对于重要样式，最后创建的层具有最低的优先权，而首先创建的层在声明的层中具有最高的优先权。

内联重要样式再次优先于在其他地方声明的重要样式。

过渡样式具有最高的优先权。当正在过渡普通属性值时，它优先于所有其他属性值声明，甚至是内联重要样式；但是只在过渡时。

```html live-sample___layer-precedence
<div>
  <h1 style="color: yellow; background-color: maroon !important;">
    Inline styles
  </h1>
</div>
```

```css live-sample___layer-precedence
@layer A, B;

h1 {
  font-family: sans-serif;
  margin: 1em;
  padding: 0.2em;
  color: orange;
  background-color: green;
  text-decoration: overline pink !important;
  box-shadow: 5px 5px lightgreen !important;
}

@layer A {
  h1 {
    color: grey;
    background-color: black !important;
    text-decoration: line-through grey;
    box-shadow: -5px -5px lightblue !important;
    font-style: normal;
    font-weight: normal !important;
  }
}

@layer B {
  h1 {
    color: aqua;
    background: yellow !important;
    text-decoration: underline aqua;
    box-shadow: -5px 5px magenta !important;
    font-style: italic;
    font-weight: bold !important;
  }
}
```

{{EmbedLiveSample("layer-precedence")}}

在这个例子中，有两个没有样式的内联层 `A` 和 `B`，一块不分层样式，以及两个具名层 `A` 和 `B` 中的样式块。

使用 `style` 属性在 `h1` 元素上添加的内联样式，设置了普通的 `color` 和重要的 `background-color`。普通内联样式覆盖所有分层和未分层普通样式。重要内联样式覆盖所有分层和未分层，普通和重要的作者样式。作者样式无法覆盖重要的内联样式。

普通的 `text-decoration` 和重要的 `box-shadow` 不是 `style` 内联样式的一部分，因此可以被覆盖。对于普通的非内联样式，未分层样式具有优先权。对于重要样式，分层顺序也很重要。虽然普通未分层样式覆盖层中设置的所有普通样式，但对于重要样式，优先权顺序被反转了；未分层重要样式的优先权低于分层重要样式。

仅在层内声明的两个样式是具有普通重要性的 `font-style`，和具有 `!important` 标志的 `font-weight`。对于普通样式，后声明的 `B` 层覆盖了先声明的 `A` 层中的样式。对于普通样式，后面的层优先于前面的层。重要样式的优先权顺序相反。对于重要的 `font-weight` 声明，被先声明的 `A` 层优先于后声明的 `B` 层。

你可以通过将第一行从 `@layer A, B;` 更改为 `@layer B, A;` 来反转层顺序。试一试。这会改变哪些样式，哪些保持不变？为什么？

层的顺序由层在 CSS 中出现的顺序设置。在第一行中，我们使用 `@layer` 后跟层的名称声明了层，而没有分配任何样式，以分号结束。如果我们省略这一行，结果将是相同的。为什么？我们按顺序 A 然后 B 在命名的 @layer 块中分配了样式规则。这两层是在第一行中创建的。如果不是这样，这些规则块将按该顺序创建它们。

我们包含第一行的原因有两个：第一，这样你可以轻松编辑该行并切换顺序，第二，因为大多数时候你会发现首先声明顺序层是你的层顺序管理的最佳实践。

总结：

- 层的优先权顺序是创建层的顺序。
- 一旦创建，就无法更改层顺序。
- 普通样式的层优先权是创建层的顺序。
- 未分层普通样式优先于有层普通样式。
- 重要样式的层优先权被反转，早期创建的层具有优先权。
- 所有有层的重要样式都优先于未分层的重要（和普通）样式。
- 普通内联样式优先于所有普通样式，无论是否分层。
- 重要内联样式优先于所有其他样式，正在过渡的样式除外。
- 作者样式无法覆盖重要内联样式（过渡除外，但这是临时的）。

### 嵌套层叠层的优先权顺序

嵌套层的层叠优先权顺序与常规层类似，但包含在层内。优先权顺序基于嵌套层创建的顺序。层中的非嵌套样式优先于嵌套的普通样式，对于重要样式则相反。嵌套层之间的优先级权重并不重要，但它在嵌套层内的冲突样式中确实很重要。

下面创建并向 `components` 层和 `components.narrow` 嵌套层添加样式，然后创建并追加样式到新的 `components.wide` 层：

```css
@import url("components-lib.css") layer(components);
@import url("narrowtheme.css") layer(components.narrow);

@layer components {
  :root {
    --theme: red;
    font-family: serif !important;
  }
}
@layer components.narrow {
  :root {
    --theme: blue;
    font-family: sans-serif !important;
  }
}
@layer components.wide {
  :root {
    --theme: purple;
    font-family: cursive !important;
  }
}
```

因为未分层普通样式优先于分层普通样式，并且在层内，非嵌套样式优先于普通嵌套样式，所以 `red` 优先于其他 `theme` 颜色。

对于重要样式，分层样式优先于未分层样式，并且早期声明的层中的重要样式优先于后来声明的层。在这个例子中，嵌套层的创建顺序是 `components.narrow`，然后是 `components.wide`，所以 `components.narrow` 中的重要样式优先于 `components.wide` 中的重要样式，这意味着 `sans-serif` 获胜。

## 技能测试！

你已经阅读完本文，但是你还记得最重要的信息吗？在继续学习之前，你可以找到一些进一步的测试来验证你已经掌握了这些信息——请参阅[技能测试：层叠—任务 2](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#任务_2)。

## 总结

如果你理解了本文中的大部分内容，那么恭喜——你现在已经熟悉了 CSS 层叠层的基本机制。接下来，我们将详细了解[盒模型](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model)。
