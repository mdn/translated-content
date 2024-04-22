---
title: CSS 常见问题
slug: Learn/CSS/Howto/CSS_FAQ
---

{{LearnSidebar}}

在本篇文章中，你会发现一些有关 CSS 的常见问题，这些问题及其解答可能会有助于你成为一名网站开发人员。

## 为什么有效的 CSS 没有正确的渲染？

浏览器使用 `DOCTYPE` 声明来选择是否使用更符合 Web 标准或兼容旧浏览器缺陷的模式。在你的 HTML 的开始使用一个正确的和现代的 `DOCTYPE` 声明将改善浏览器标准执行。

现代浏览器主要有两种渲染模式：

- _怪异模式_：又称向后兼容模式，允许按照旧版浏览器使用的非标准渲染规则，按作者的意图呈现旧版网页。如果文档中存在不完整、不正确或缺失的 `DOCTYPE` 声明，或已知的 2001 年以前常用的 `DOCTYPE` 声明，则会以怪异模式渲染。
- _标准模式_：浏览器试图严格遵守 W3C 标准。新的 HTML 页面预计是为符合标准的浏览器设计的，因此，带有现代 `DOCTYPE` 声明的页面将使用标准模式渲染。

有三分之一的基于 Gecko 的浏览器处于[接近标准模式](https://zh.wikipedia.org/wiki/怪异模式#接近标准模式)，只是有一些怪异行为。

这是最常用的触发标准模式的 `DOCTYPE` 声明：

```html
<!doctype html>
```

你应该尽可能使用上述 doctype 声明。还有其他有效的传统 doctype 说明，它们会触发标准模式或接近标准模式：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## 为什么有效的 CSS 完全没有被渲染？

可能的原因如下：

- 引入的 CSS 文件路径写错了。
- 为了使浏览器渲染样式文件，CSS 样式表必须用 `text/css` 的 MIME 类型。如果 Web 服务器没有使用这种类型处理文件，则 CSS 也不会被应用。

## `id` 和 `class` 有什么不同？

HTML 元素可以拥有一个 `id` 和（或）`class` 属性。`id` 属性为元素指定应用一个有效名称，只能有一个具有该名称的元素。`class` 属性指定一个类名的元素，而这个名称可以被页面内的许多元素被使用。CSS 允许你可以对特定的 `id` 和/或类名的元素应用样式。

- 当你想要将样式规则应用于多个块和元素时，你应该使用特定于类的样式。
- 当你想给一个特定元素或块应用样式规则时就使用特定于 id 的样式。此样式将只用于与该特定 id 匹配的元素。

一般建议尽量使用类，只有在特定用途（如连接标签和表单元素或用于必须在语义上唯一的样式元素）绝对必要时才使用 id：

- 使用类名可以让样式具有可扩展性——即使目前只有一个元素使用这个规则集来定义样式，未来可能会添加更多。
- 类名可以让你同时为多个元素赋予样式，减少样式表的大小，避免了为每一个 id 选择器撰写同样的样式信息。越小的样式表带来的性能体验也就越好。
- 类名选择器比 id 选择器的[优先级](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#优先级)更低，所以可以很方便地覆盖它们。

> **备注：** 参见 [CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)，以了解详情。

## 我如何还原属性的默认值？

最初 CSS 没有提供“default”关键字和还原默认属性的值，唯一途径是显式地重新声明该属性。例如：

```css
/* 标题元素的默认颜色为黑色 */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

从 CSS2 开始，情况就不一样了。关键字 [initial](/zh-CN/docs/Web/CSS/initial) 现在是一个有效的 CSS 属性值。它将给定的 CSS 属性值重置为默认值。

```css
/* 标题元素的默认颜色为黑色 */
h1 {
  color: red;
}
h1 {
  color: initial;
}
```

## 我如何才可以从一个样式中衍生出另一种样式？

CSS 并不完全允许用一种样式来定义另一种样式。但是，将多个类分配给单个元素，可以提供相同的效果。[CSS 变量](/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)也提供了一种方法来定义在多处复用的样式信息。

## 我该如何给一个元素分配多个类？

HTML 元素可以通过列出的类属性，用空格分开它们。

```html
<style>
  .news {
    background: black;
    color: white;
  }
  .today {
    font-weight: bold;
  }
</style>

<div class="news today">这是今天的新闻内容。</div>
```

如果两个规则中都声明了相同的属性，则首先通过特异性解决冲突，然后根据 CSS 声明的顺序解决冲突。`class` 属性中类的顺序与此无关。

## 为什么我的样式规则不能正确地工作？

在语法上正确的样式规则可能在某些情况下不适用。你可以使用调试工具 *CSS 面板*的[规则视图](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)来调试这类问题。下面列出了最常见的忽略样式规则的实例：

### HTML 元素层次结构

CSS 应用于 HTML 元素依靠于元素的层次结构。在任何 CSS 特异性或优先级规则中，子元素定义的样式会覆盖父元素的样式。

```css
.news {
  color: black;
}
.corpName {
  font-weight: bold;
  color: red;
}
```

```html
<!-- news 的文字是黑色的，但是 corpName 是红色且加粗的 -->
<div class="news">
  (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on
  Thursday...
</div>
```

在某些复杂的 HTML 层级中，如果某条规则看起来被忽略了，请检查该元素是否处于拥有其他样式的另一个元素之内。

### 显式重定义样式规则

在 CSS 样式表中，顺序**非常**重要。如果先定义了一个规则，然后又重新定义了同样的规则，会使用最后一个定义。

```css
#stockTicker {
  font-weight: bold;
}
.stockSymbol {
  color: red;
}
/*  其他规则            */
/*  其他规则            */
/*  其他规则            */
.stockSymbol {
  font-weight: normal;
}
```

```html
<!-- 除了”GE“以外，大部分文字都是加粗的，“GE”本身是红色不加粗的 -->
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0 ...</div>
```

为了避免此类错误，请对特定选择器仅定义一次规则，将属于那个选择器的规则归类于此组。

### 使用简写属性

使用简写属性的好处是语法更加紧凑。仅使用一部分简写属性完全没有问题，但要注意，没有声明的属性将自动重置为默认状态，这意味着单个属性较靠前的规则可能会被隐式覆盖。

```css
#stockTicker {
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}
.stockSymbol {
  font: 14px Arial;
  color: red;
}
```

```html
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0 ...</div>
```

在前一个示例中，问题发生在不同元素的规则中；但在同一个元素中问题也可能出现，因为顺序是**重要**的。

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight 现在为 normal */
}
```

### 使用 `*` 选择器

`*` 通配符选择器可以指代任何元素，必须小心使用。

```css
body * {
  font-weight: normal;
}
#stockTicker {
  font: 12px Verdana;
}
.corpName {
  font-weight: bold;
}
.stockUp {
  color: red;
}
```

```html
<div id="section">
  NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

在这个示例中，`body *` 选择器应用于 body 内部任何层级的所有元素，包含了 `.stockUp` 类。故应用于 `.corpName` 类的 `font-weight: bold;` 样式就会被应用于所有元素的 `font-weight: normal;` 覆盖。

由于速度缓慢，尽量不要使用 \* 选择器，特别是不作为选择器的首个元素时。

### CSS 中的优先级

当某个元素应用了多个规则时，规则的选择依赖于样式的[优先级](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#优先级)。内联样式（HTML 的 `style` 属性）最高，ID 选择器次之，再其次是类选择器，最后是元素名称选择器。{{htmlelement("div")}} 的文本颜色将是红色的。

```css
div {
  color: black;
}
#orange {
  color: orange;
}
.green {
  color: green;
}
```

```html
<div id="orange" class="green" style="color: red;">我是红的</div>
```

当选择器具有多个部分时，规则会更加复杂。有关优先级计算的更多信息，请参阅 [CSS 优先级文档](/zh-CN/docs/Web/CSS/Specificity)。

## -moz-\*， -ms-\*， -webkit-\*， -o-\* 以及 -khtml-\* 属性有什么用？

这些被称为*前缀属性*的属性是 CSS 标准的扩展。这些是出于测试目的的使用，不至于污染标准命名空间，防止标准扩展时产生兼容性问题。

不推荐在生产环境网站中使用这些属性，它们已经产生了巨大的网页兼容性混乱。例如，很多开发者只使用了 `-webkit-` 前缀版本的属性，但非前缀的版本已经在所有浏览器中得到支持，没有基于 Webkit 的浏览器很有可能会在今后丢失显示效果。这个问题过于严重，以至于其他浏览器也开始实现 `-webkit-` 前缀属性的别名以提升网站兼容性，即[兼容性动态标准](https://compat.spec.whatwg.org/)。

实际上，大部分浏览器在实现实验性功能时都不使用 CSS 前缀，或者仅在 Nightly 浏览器版本或相似机制上实现它们。

如果需要使用前缀，建议先写带前缀的属性，然后再写不带前缀的标准版本。这样就可以在标准版本支持的时候覆盖掉前缀版本。例如：

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> **备注：** 为更深层次了解处理前缀属性，请参阅[跨浏览器测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)模块的[处理常见的 HTML 和 CSS 问题——处理 CSS 前缀](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#处理_css_前缀)。

> **备注：** 请参阅 [Mozilla CSS 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)和 [WebKit CSS 扩展](/zh-CN/docs/Web/CSS/WebKit_Extensions)，以了解浏览器前缀 CSS 属性的列表。

## z-index 属性与定位有什么关系？

z-index 属性指定了元素的栈序。

具有较高 z-index/栈序的元素总是渲染于具有较低 z-index/栈序的元素之前。z-index 只会在有着指定 position（`position:absolute`、`position:relative` 或 `position:fixed`）的元素上工作。

> **备注：** 请参阅[定位](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)文章，特别是[介绍 z-index](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning#介绍_z-index) 部分来深入学习。
