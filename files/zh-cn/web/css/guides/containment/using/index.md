---
title: 使用 CSS 局限
slug: Web/CSS/Guides/Containment/Using
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

CSS 局限（CSS containment）通过允许浏览器将页面的一个子树与页面的其余部分隔离，以提高网页的性能。如果浏览器知道页面的某个部分与其余内容是独立的，就可以优化渲染并提升性能。

{{cssxref("contain")}} 和 {{cssxref("content-visibility")}} 属性使开发者能够告知用户代理是否应该渲染元素的内容，以及在元素不在屏幕上时是否应渲染其内容。然后，用户代理在适当的时候对元素应用局限，可能会推迟布局和渲染，直到需要时再进行。

本指南描述了 CSS 局限的基本目标以及如何利用 `contain` 和 `content-visibility` 来提升用户体验。

## 基本示例

网页通常包含多个逻辑上相互独立的部分。CSS 局限使它们在渲染时真正独立处理。

例如，博客通常包含几篇文章，每篇文章包含一个标题和内容，如以下标记所示。

```html
<h1>我的博客</h1>
<article>
  <h2>一篇美文的标题</h2>
  <p>一些内容。</p>
</article>
<article>
  <h2>另一篇美文的标题</h2>
  <p>更多内容。</p>
</article>
```

使用 CSS，我们对每个文章应用 {{cssxref("contain")}} 属性，并赋值为 `content`。`content` 值是 `contain: layout paint style` 的简写：

```css
article {
  contain: content;
}
```

从逻辑上讲，每篇文章都是独立于页面上其他文章的。这些信息通常是已知的，并且对于创建页面的网页开发者来说可能相当明显。然而，浏览器不了解内容的意图，无法假设文章或其他内容部分将完全自包含。

这个属性提供了一种向浏览器解释这一点并明确授权其进行性能优化的方法。它告诉浏览器元素的内部布局与页面的其余部分完全独立，元素的所有内容都在其边界内绘制。没有任何内容可以可见地溢出。

通过在每个 `<article>` 上设置 `contain: content`，我们已经表明了这一点；我们告诉浏览器每篇文章都是独立的。然后，浏览器可以利用这些信息来决定如何渲染每个 `<article>` 内容。例如，它可能不会渲染不在可视区域内的文章。

当在页面末尾追加更多文章时，浏览器无需重新计算布局或重绘前面的内容；它也不需要触及包含元素子树之外的任何区域。然而，如果盒模型属性是相互依赖的，浏览器将需要重新计算布局和重绘。例如，如果 `<article>` 的样式使其尺寸取决于其内容（例如使用 `height: auto`），则浏览器需要考虑其尺寸的变化。

## 关键概念和术语

### `contain` 值

局限有四种类型：布局（layout）、绘制（paint）、尺寸（size）和样式（style）。使用 {{cssxref("contain")}} 属性通过包含这些类型的任何组合来指定要应用于元素的类型或类型。

#### 布局局限

```css
article {
  contain: layout;
}
```

布局通常限定在整个文档范围，这意味着如果移动一个元素，整个文档需要被视为可能有任何元素移动。通过使用 `contain: layout`，你可以告诉浏览器它只需要检查这个元素——元素内部的所有内容都限定在该元素内，并且不影响页面的其余部分，包含盒子建立了一个独立的[格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Formatting_contexts)。

此外：

- {{cssxref("float")}} 布局将在指定元素内独立执行。
- 外边距不会跨越布局局限边界折叠。
- 布局容器是 `absolute` 和 `fixed` 定位子元素的[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)。
- 包含盒子创建了一个[层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)，因此可以使用 {{cssxref("z-index")}}。

> [!NOTE]
> 当使用 {{cssxref("container-type")}} 和 {{cssxref("container-name")}} 属性时，`contain` 的 `style` 和 `layout` 值会自动应用。

#### 绘制局限

```css
article {
  contain: paint;
}
```

绘制局限本质上将盒子裁剪到[主盒子](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model#主盒子)的内边距边缘。不能有可见的溢出。`paint` 局限的其他附加说明与 `layout` 局限相同（见上文）。

另一个优点是，如果应用了局限的元素不在屏幕上，浏览器不需要绘制其子元素——因为它们完全被该盒子包含，也不在屏幕上。

#### 尺寸局限

```css
article {
  contain: size;
}
```

单独使用尺寸局限时，性能优化并不显著。然而，尺寸局限意味着被尺寸局限限制的元素的子元素的尺寸不能影响元素本身的尺寸——其尺寸的计算方式就好像它没有子节点一样。

如果在元素上设置 `contain: size`，需要使用 {{cssxref("contain-intrinsic-size")}} 或顺序为 {{cssxref("contain-intrinsic-width")}} 和 {{cssxref("contain-intrinsic-height")}} 的全称属性来指定元素的尺寸。如果没有设置尺寸，元素在大多数情况下可能会变为零尺寸。

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### 样式局限

```css
article {
  contain: style;
}
```

尽管名称如此，样式局限并不提供像[影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 或 {{cssxref("@scope")}} 那样的域限（scoped）样式。`style` 值的主要用途为防止 [CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)可在元素中被更改的情形出现，此情形可影响树的其余部分。

使用 `contain: style` 将确保由 {{cssxref("counter-increment")}} 和 {{cssxref("counter-set")}} 属性所创建的新计数器的作用域被限制为此子树。

你可以通过包含多个以空格分隔的值（如 `contain: layout paint`）或使用两个[特殊值](#特殊值)之一来包含多个局限类型。

#### 特殊值

`contain` 有两个特殊值，它们是前三种或所有四种局限类型的简写：

- `content`
- `strict`

我们在上面的示例中遇到了第一个。使用 `contain: content` 启用 `layout`、`paint` 和 `style` 局限。由于它省略了 `size`，因此是可以广泛应用的安全值。

`contain: strict` 声明的行为与声明 `contain: size layout paint style`（包括四个以空格分隔的值）相同，提供了最大的局限。由于它应用了 `size` 局限，因此使用起来更具风险；存在由于依赖子元素的尺寸导致盒子最终变为零尺寸的风险。

为了消除这种风险，请在使用 `strict` 时始终设置尺寸：

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

上述内容等同于：

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

当你有大量内容且这些内容经常不在屏幕上时，你可以从重局限中受益——例如，如果所有博客文章都在博客首页上以无限滚动的方式可见——可以使用 `content-visibility: auto` 一次性应用所有局限。

{{cssxref("content-visibility")}} 属性控制元素是否渲染其内容，并强制应用一组强局限，允许用户代理有机会在不需要时省略大量布局和渲染工作。此属性使用户代理得以在不需要时跳过元素的渲染工作（包括布局和绘制）——由此使页面的初始加载明显变快。

其可能的值包括：

- `visible`：默认行为——元素的内容按正常方式布局和渲染。
- `hidden`：元素[跳过其内容](#跳过其内容)。跳过的内容将无法通过用户代理的特性（如页面查找、标签顺序导航等）访问，也无法被选择或聚焦。
- `auto`：元素开启布局局限、样式局限和绘制局限，就像设置了 `contain: content`。如果元素不[与用户相关](#与用户相关)，它也会跳过其内容。与 `hidden` 不同，跳过的内容仍然可以用于用户交互，保持可聚焦、可选择、在常规标签顺序中，并可用于内容搜索。

### 与用户相关

用户代理有一个内容[与用户相关](https://drafts.csswg.org/css-contain/#relevant-to-the-user)的概念。如果满足以下任一条件，元素就变得“与用户相关”：

- 元素出现在视口中，或出现在视口周围用户代理定义的外边距内（视口尺寸的 50%，以给应用准备元素可见性变化的时间）。
- 元素或其内容获得焦点。
- 元素或其内容被选中，例如通过鼠标光标拖动文本或通过其他高亮操作。
- 元素或其内容被放置在{{glossary("top layer", "顶层")}}中。

当设置 `content-visibility: auto`，并且浏览器确定内容与用户相关时，浏览器将渲染该内容。

### 跳过其内容

当你在元素上设置 `content-visibility: hidden` 时，你告诉浏览器该元素与用户无关，因此其[内容应被跳过](https://drafts.csswg.org/css-contain/#skips-its-contents)并且不进行渲染。这有助于提升性能。

当在元素上设置 `content-visibility: auto` 并且浏览器确定其内容与用户无关时，浏览器也会跳过该元素的内容。

当元素跳过其内容时：

- 它启用了布局、样式、绘制和尺寸局限。
- 它的内容不会被绘制，就像设置了 {{cssxref("visibility", "visibility: hidden")}} 一样。
- 它的内容不会接收指针事件，就像设置了 {{cssxref("pointer-events", "pointer-events: none")}} 一样。

这两种情况下都会发生上述情况，但使用 `content-visibility: auto` 时，内容仍然可以被搜索、接收焦点，并且可以从不相关变为相关。而 `content-visibility: hidden` 则不具备这种情况。

> [!NOTE]
> 要对从 `content-visibility: hidden` 到可见值的过渡进行动画处理，需要设置 {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} 和 {{cssxref("@starting-style")}} 样式。请参阅[过渡 `display` 和 `content-visibility`](/zh-CN/docs/Web/CSS/Guides/Transitions/Using#过渡_display_和_content-visibility) 了解更多信息。

## 参见

- [CSS 局限模块](/zh-CN/docs/Web/CSS/Guides/Containment)
- [学习：CSS 性能优化](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS 容器查询](/zh-CN/docs/Web/CSS/Guides/Containment/Container_queries)
- [CSS 局限介绍](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)，来自 Igalia.com（2019）
- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件
