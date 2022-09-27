---
title: CSS 常见问题
slug: Learn/CSS/Howto/CSS_FAQ
original_slug: Web/CSS/Common_CSS_Questions
---

## 为什么有效的 CSS 没有正确的渲染？

浏览器使用 DOCTYPE 声明来选择是否使用更符合 Web 标准或兼容旧浏览器的 bug 的模式。在你的 HTML 的开始使用一个正确的和现代的 DOCTYPE 声明将改善浏览器标准执行。

现代浏览器主要有两种渲染模式：

- *怪异模式*：又称向后兼容模式，允许将传统网页渲染为作者意图。旧浏览器使用的非标准渲染规则。不完整的、不正确的、缺少 DOCTYPE 声明或已知的 DOCTYPE 声明中普遍使用 2001 年以前的文件将在怪异模式中呈现。
- *标准模式*：浏览器试图严格遵守 W3C 标准。新 HTML 网页有望被设计为符合标准的浏览器，这样做的结果就是，用现代 DOCTYPE 声明的页面将被用标准模式呈现。

基于 Gecko 的浏览器，有三分之一 _[Almost Standards Mode](/zh-CN/docs/Gecko's_%22Almost_Standards%22_Mode)_，只有一些小怪癖。

这是最常用的触发标准模式或准标准模式的 DOCTYPE 声明列表：

```html
<!DOCTYPE html> /* 这一行是 HTML5 的 doctype 声明。使用该声明会使现代浏览器使用 HTML5 解析器处理页面，这是推荐的 doctype 声明。*/
```

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

请尽可能地使用 HTML 5 DOCTYPE。

## 为什么有效的 CSS 完全没有被渲染？

可能的原因如下：

- 引入的 CSS 文件路径写错了。

- 为了使浏览器渲染样式文件，CSS 样式表必须用 `text/css` 的 MIME。如果 Web 服务器没有使用这种类型处理文件，则 CSS 也不会被应用。

## `id` 和 `class` 有什么不同？

HTML 元素可以拥有一个 `id`/或 `class` 属性。 `id` 属性为元素指定应用一个有效名称，只能有一个具有该名称的元素。`class` 属性指定一个类名的元素，而这个名称可以被页面内的许多元素被使用。CSS 允许你可以对特定的 `id` 和/或类名的元素应用样式。

- 当你想要将样式规则应用于多个块和元素时，你应该使用 class 选择符。

- 当你想给一个特定元素或块应用样式规则时就使用 ID 选择符。此样式将只用于与该特定 id 匹配的元素。

较少样式的样式表通常性能更高。因此建议尽可能多地使用类，保留 id 作为特定用途（比如链接 label 标签和 form 元素或者为语义上唯一的元素应用样式）：

- 使用类名可以让样式具有可扩展性——即使目前只有一个元素使用这个规则集来定义样式，未来可能会添加更多。

- 类名可以让你同时为多个元素赋予样式，减少样式表的大小，避免了为每一个 id 选择器撰写同样的样式信息。越小的样式表带来的性能体验也就越好。

- 类名选择器比 id 选择器的[优先级](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#优先级)更低，所以可以很方便地覆盖它们。

> **备注：** 在这篇文档中更深入层次的了解 [CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)。

## 我如何还原属性的默认值？

最初 CSS 没有提供“default”关键字和还原默认属性的值，唯一途径是显式地重新声明该属性。例如：

```css
/* 标题元素的默认颜色为黑色 */
h1 { color: red; }
h1 { color: black; }
```

从 CSS2 开始，情况就不一样了。关键字 [initial](/zh-CN/docs/Web/CSS/initial) 现在是一个有效的 CSS 属性。它将给定的 CSS 属性值重置为默认值。

```css
/* 标题元素的默认颜色为黑色 */
h1 { color: red; }
h1 { color: initial; }
```

## 我如何才可以从一个样式中衍生出另一种样式？

CSS 不允许这样做（请查阅 [Eric Meyer's note about the Working Group's stance](http://archivist.incutio.com/viewlist/css-discuss/2685)）。但是，将多个类分配给单个元素，可以提供相同的效果。[CSS 变量](/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 也提供了一种方法来定义在多处复用的样式信息。

## 我该如何给一个元素分配多个类？

HTML 元素可以通过列出的类属性，用空格分开它们。

```html
<style type="text/css">
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
... content of today's news ...
</div>
```

如果相同的属性中声明的规则，解决冲突首先通过特异性，然后根据 CSS 声明的顺序。在 `class` 属性类的顺序是不相关的。

## 为什么我的样式规则不能正确地工作？

在语法上正确的样式规则可能在某些情况下不适用。你可以使用调试工具 CSS 面板的[规则视图](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)来调试这类问题。下面列出了最常见的忽略样式规则的实例：

### HTML 元素层次结构

CSS 应用于 HTML 元素依靠于元素的层次结构。在任何 CSS 特异性或优先级规则中，子元素定义的样式会覆盖父元素的样式。

```css
.news { color: black; }
.corpName { font-weight: bold; color: red; }
```

```html
<!-- news 的文字是黑色的，但是 corpName 是红色且加粗的 -->
<div class="news">
   (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on Thursday...
</div>
```

在某些复杂的 HTML 层级中，如果某条规则看起来被忽略了，请检查该元素是否处于拥有其他样式的另一个元素之内。

### 显式重定义样式规则

在 CSS 样式表中，顺序 **非常** 重要。如果先定义了一个规则，然后又重新定义了同样的规则，会使用最后一个定义。

```css
#stockTicker { font-weight: bold; }
.stockSymbol { color: red; }
/*  其他规则            */
/*  其他规则            */
/*  其他规则            */
.stockSymbol { font-weight: normal; }
```

```html
<!-- 除了”GE“以外，大部分文字都是加粗的，“GE”本身是红色不加粗的 -->
<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

为了避免此类错误，请对特定选择器仅定义一次规则，将属于那个选择器的规则归类于此组。

### 使用便捷属性

使用便捷属性的好处是语法更加紧凑。仅使用一部分便捷属性完全没有问题，但要注意，没有声明的属性将自动重置为默认状态，这意味着单个属性较靠前的规则可能会被隐式覆盖。

```css
#stockTicker { font-size: 12px; font-family: Verdana; font-weight: bold; }
.stockSymbol { font: 14px Arial; color: red; }
```

```html
<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

在前一个示例中，问题发生在不同元素的规则中；但在同一个元素中问题也可能出现，因为顺序是 **重要** 的。

```css
#stockTicker {
    font-weight: bold;
    font: 12px Verdana;  /* font-weight is now normal */
}
```

### 使用 `*` 选择器

`*` 通配符选择器可以指代任何元素，必须小心使用。

```css
body * { font-weight: normal; }
#stockTicker { font: 12px Verdana; }
.corpName { font-weight: bold; }
.stockUp { color: red; }
```

```html
<div id="section">
    NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

在这个示例中，`body *` 选择器应用于 body 内部任何层级的所有元素，包含了 `.stockUp` 类。故应用于 `.corpName` 类的 `font-weight: bold;` 样式就会被应用于所有元素的 `font-weight: normal;` 覆盖。

由于速度缓慢，尽量不要使用 \* 选择器，特别是不作为选择器的首个元素时。

### CSS 中的优先级

当某个元素应用了多个规则时，规则的选择依赖于样式的 [优先级](/zh-CN/docs/Web/CSS/Specificity)。内联样式（HTML 的 `style` 属性）最高，ID 选择器次之，再其次是类选择器，最后是元素名称选择器。

```css
div { color: black; }
#orange { color: orange; }
.green { color: green; }
```

```html
<div id="orange" class="green" style="color: red;">This is red</div>
```

当选择器具有多个部分时，规则会更加复杂。有关优先级计算的更多信息，请参阅 [CSS 2.1 Specification 6.4.3 章节](https://www.w3.org/TR/CSS21/cascade.html#specificity)。

## -moz-\*， -ms-\*， -webkit-\*， -o-\* 以及 -khtml-\* 属性有什么用？

这些被称为 *前缀属性* 的属性是 CSS 标准的扩展。这些是出于测试目的的使用，不至于污染标准命名空间，防止标准扩展时产生兼容性问题。

不推荐在生产环境网站中使用这些属性，它们已经产生了巨大的网页兼容性混乱。例如，很多开发者只使用了 `-webkit-` 前缀版本的属性，但非前缀的版本已经在所有浏览器中得到支持，没有基于 Webkit 的浏览器很有可能会在今后丢失显示效果。这个问题过于严重，以至于其他浏览器也开始实现 `-webkit-` 前缀属性的别名以提升网站兼容性，即 [Compatibility Living Standard](https://compat.spec.whatwg.org/)。

实际上，大部分浏览器在实现实验性功能时都不使用 CSS 前缀，或者仅在 Nightly 浏览器版本或相似机制上实现它们。

如果需要使用前缀，建议先写带前缀的属性，然后再写不带前缀的标准版本。这样就可以在标准版本支持的时候覆盖掉前缀版本。例如：

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

> **备注：** 为更深层次了解处理前缀属性，请参阅 [跨浏览器测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing) 模块的 [处理常见的 HTML 和 CSS 问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)。

> **备注：** 为了解 Mozilla 前缀属性 CSS 的更多信息，请参阅 [Mozilla CSS 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)。

## z-index 属性与定位有什么关系？

z-index 属性指定了元素的栈序。

有较高 z-index/栈序的元素总是在有着较低 z-index/栈序的元素之前。z-index 只会在有着指定 position（`position:absolute`、`position:relative` 或 `position:fixed`）的元素上工作。

> **备注：** 请参阅 [定位](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning) 文章，特别是 [介绍 z-index](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning#介绍_z-index) 部分来深入学习。
