---
title: CSS 代码示例编写指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 4680281518d584657960f984b3b720d79b3119ab
---

下面的指南涵盖了如何为 MDN Web 文档编写 CSS 示例代码。

## CSS 代码示例常规指南

### 格式的选择

关于正确缩进、空格和行长度的意见一直存在争议。对这些主题的讨论会分散注意力，从而影响内容的创建和维护。

在 MDN Web 文档中，我们使用 [Prettier](https://prettier.io/) 作为代码格式化工具，以保持代码风格的一致性（并避免偏离主题讨论）。你可以参考我们的[配置文件](https://github.com/mdn/content/blob/main/.prettierrc.json)来了解当前的规则，并阅读 [Prettier 的文档](https://prettier.io/docs/en/index.html)。

Prettier 格式化所有代码并保持风格一致。尽管如此，你仍需要遵循一些额外的规则。

### 规划 CSS

在深入研究和编写大量 CSS 之前，请谨慎规划你的样式。你需要哪些通用样式，需要创建哪些不同的布局，需要创建哪些特定的覆盖样式，它们是否可重用？最重要的是，你需要尽量**避免过多的覆盖**。如果你发现自己总是编写了一些样式，然后又在几个规则之后取消它们，那么你可能需要重新考虑你的策略。

### 使用弹性/相对单位

为了在尽可能广泛的设备上获得最大的灵活性，建议使用 em 和 rem 或百分比和视口单位等相对单位来设置容器、填充等的大小，如果你希望它们随视口宽度变化。你可以在我们的 [CSS 值与单位指南](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#相对长度单位)中阅读更多相关内容。

### 不要使用预处理器

请不要在示例代码中使用预处理器语法，例如 [Sass](https://sass-lang.com/)、[Less](https://lesscss.org/) 或 [Stylus](https://stylus-lang.com/)。在 MDN Web 文档中，我们记录的是原生 CSS 语言。使用预处理器只会增加理解示例的难度，可能会让读者感到困惑。

### 不要使用特定的 CSS 方法论

本着与之前的指南一致的精神，请勿使用特定的 CSS 方法论（例如 [BEM](https://getbem.com/naming/) 或 [SMACSS](https://smacss.com/)）来编写 MDN Web 文档中的示例代码。尽管它们是有效的 CSS 语法，但命名约定可能会让不熟悉这些方法论的人感到困惑。

### 不要使用重置

为了最大程度地跨平台控制 CSS，很多人都使用 CSS 重置来删除所有样式，然后再自行构建内容。这当然有它的优点，但特别是在现代世界，CSS 重置可能是一种矫枉过正，导致花费大量额外的时间来重新实现一些一开始并不完全损坏的东西，比如默认的边距、列表样式等。

如果你真的觉得需要使用重置，请考虑使用 [Nicolas Gallagher 的 normalize.css](https://necolas.github.io/normalize.css/)，它旨在使跨浏览器的样式更加一致，消除我们总是需要删除的一些默认样式的烦恼（例如 `<body>` 上的边距），并修复一些错误。

## !important

`!important` 是最后的手段，通常只有在你需要覆盖某些东西而没有其他方法时才会使用。使用 `!important` 是一种不好的做法，你应该尽可能避免使用它。

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS 注释

使用 CSS 风格的注释来注释那些不是自我说明的代码。另外请注意，在星号和注释之间留一个空格。

```css example-good
/* 这是 CSS 风格的注释 */
```

将注释放在它们所引用的代码之前的单独的一行中，如下所示：

```css example-good
h3 {
  /* 创建红色阴影，向右和向下偏移 1 个像素，模糊半径为 2 个像素 */
  text-shadow: 1px 1px 2px red;
  /* 将字体大小设置为文档默认字体大小的两倍 */
  font-size: 2rem;
}
```

## 使用双引号包裹值

在可以或应该包含引号的地方，请使用引号（并使用双引号）。例如：

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## 全写和简写规则

通常，在教授 CSS 语法的细节时，使用全写属性比使用简写属性更清晰明了（除非你通过示例来解释简写属性）。请记住，MDN Web 文档上的示例的目的是教会人们，而不是显得高明或高效。我们在这里解释为什么推荐使用全写规则。

- 通常很难理解简写的含义。在下面的示例中，需要一定的时间才能分析出 {{cssxref("font")}} 语法的作用。

  ```css
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  而下面的样式更清晰：

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- CSS 简写可能会带来潜在的陷阱——为你没有显式设置的语法部分设置默认值，这可能会导致你在层叠中设置的值意外重置，或者产生其他预期的效果。例如，{{cssxref("grid")}} 属性为未指定的项目设置了以下所有默认值：

  - {{cssxref("grid-template-rows")}}: `none`
  - {{cssxref("grid-template-columns")}}: `none`
  - {{cssxref("grid-template-areas")}}: `none`
  - {{cssxref("grid-auto-rows")}}: `auto`
  - {{cssxref("grid-auto-columns")}}: `auto`
  - {{cssxref("grid-auto-flow")}}: `row`
  - {{cssxref("column-gap")}}: `0`
  - {{cssxref("row-gap")}}: `0`
  - {{cssxref("column-gap")}}: `normal`
  - {{cssxref("row-gap")}}: `normal`

- 有些简写仅在你按照特定的顺序包含不同的值的组成部分时才能按预期工作。CSS 动画就是这样的。在下面的示例中，预期的顺序被写成了注释：

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

  在该示例中，第一个可以解析为 [`<time>`](/zh-CN/docs/Web/CSS/time) 的值会被赋值给 [`animation-duration`](/zh-CN/docs/Web/CSS/animation-duration) 属性，第二个可以解析为时间的值会被赋值给 [`animation-delay`](/zh-CN/docs/Web/CSS/animation-delay)。（更多信息请参阅 [animation 语法](/zh-CN/docs/Web/CSS/animation#语法)的详细内容。）

## 移动优先的媒体查询

在包含针对不同目标视口大小的[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)样式的样式表中，首先包含窄屏/移动设备的样式，然后再添加任何其他媒体查询。通过连续的媒体查询添加更宽视口大小的样式。遵循这个规则有很多优点，这些优点在[移动优先](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)文章中有详细的解释。

```css example-good
/* 适用于窄屏的默认 CSS 布局 */

@media (min-width: 480px) {
  /* 适用于中宽屏的 CSS */
}

@media (min-width: 800px) {
  /* 适用于宽屏的 CSS */
}

@media (min-width: 1100px) {
  /* 适用于超宽屏的 CSS */
}
```

## 选择器

- 请不要使用 ID 选择器，因为它们：

  - 灵活性较差；在你需要多个此类选择器时，就不应该再添加了。
  - 难以覆盖，因为它们的优先级高于类。

  ```css example-good
  .editorial-summary {
    /* ... */
  }
  ```

  ```css example-bad
  #editorial-summary {
    /* ... */
  }
  ```

## 移除属性的值

在移除边框（或其他任何可以使用 `0` 或 `none` 作为值的属性）时，请使用 `0` 而不是 `none`：

```css example-good
border: 0;
```

## 参见

[CSS 参考索引](/zh-CN/docs/Web/CSS/Reference#索引)——浏览 CSS 属性参考页面，查看一些好的、简洁的、有意义的 CSS 片段。我们在“试一试”部分的交互式示例通常是按照本页面所述的指南编写的。
