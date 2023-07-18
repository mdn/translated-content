---
title: CSS 局限
slug: Web/CSS/CSS_containment
---

{{CSSRef}}

CSS 局限规范的目标在于通过允许浏览器从页面的其余部分中隔离出页面子树而改善性能。若浏览器知道页面的某一部分为独立的，则可优化渲染并改善性能。

此外，此规范允许开发者标示元素究竟是否应当渲染其内容，以及在屏外时是否应当渲染其内容。由此允许用户代理在恰当的时候在元素上应用局限，并有望将布局和渲染推迟至需要时再进行。

此规范定义了 CSS 属性 {{CSSXref("contain")}} 和 {{CSSXref("content-visibility")}}。本文档描述了此规范的基本目标。CSS 容器查询的细节见 [CSS 容器查询](/zh-CN/docs/Web/CSS/CSS_container_queries)。

## 基本示例

许多网页包含若干互相独立的部分，例如下列标记代码中所罗列的文章标题和内容。

```html
<h1>我的博客</h1>
<article>
  <h2>好文标题</h2>
  <p>此处为内容。</p>
</article>
<article>
  <h2>另一文章的另一标题</h2>
  <p>此处为更多的内容。</p>
</article>
```

在 CSS 中，每篇文章有应用了带 `content` 值的 {{CSSXref("contain")}} 属性。

```css
article {
  contain: content;
}
```

每篇文章均与页面上的其他文章相独立，因此给了这些文章 `contain: content` 向浏览器标示此情况，然后浏览器可以据此决定如何渲染内容。例如浏览器可能不会渲染可见区域之外的文章。

如果给每个 `<article>` 带 `content` 值的 `contain` 属性，那么在插入新元素时，浏览器无需重新计算布局或重绘包含元素子树之外的任意区域。如果 `<article>` 的样式尺寸取决于其内容（如有 `height: auto`），那么浏览器可能需要考虑到其尺寸的变化。

我们通过 `contain` 属性说明了每篇文章都是独立的。

`content` 值为 `contain: layout paint style` 的简写。此值告诉浏览器元素的内部布局与页面其余部分完全分离，且元素的方方面面均绘制在其边界的内部，不会出现可见溢出。

创建页面的 web 开发者通常知晓这一（其实相当显然的）信息。然而浏览器无法猜测你的意图，不能假设文章将完全自成一体。因此此属性让你可以向浏览器说明这一点，并允许浏览器据此做出性能优化。

## 关键概念和术语

### `contain` 的值

{{CSSXref("contain")}} 属性的值标示了你想应用于元素的局限类型。

#### 布局局限

```css
article {
  contain: layout;
}
```

布局的作用域通常为整个文档，即若移动一个元素，则需视为整个文档的所有元素均可被移动至任意位置。通过使用 `contain: layout` 可以告诉浏览器只需检查此元素——元素内任意内容的作用域均被限制为此元素，不会影响页面的其余部分，且包含盒将建立独立的格式化上下文。

此外：

- 浮动（`float`）布局将独立进行。
- 外边距将不会越过布局局限边界发生折叠。
- 布局容器将作为绝对（`absolute`）或相对（`fixed`）定位后代的包含区块。
- 包含盒将创建层叠上下文，故可使用 {{CSSXref("z-index")}}。

#### 绘制局限

```css
article {
  contain: paint;
}
```

绘制局限主要将盒子裁剪至主盒的内边距边，不会出现可见溢出。关于布局（`layout`）局限的描述（见上文）也适用于绘制（`paint`）局限。

另一优点在于若包含盒在屏外，则浏览器无需绘制其被局限的元素——这些元素因为被完全局限于此盒故必然也在屏外。

#### 尺寸局限

```css
article {
  contain: size;
}
```

尺寸局限在单独使用时不会提供较大的性能优化。然而此局限意味着此元素的子元素尺寸无法影响元素本身的尺寸——计算其尺寸时视为无子元素。

若启用 `contain: size`，则还需使用 {{CSSXref("contain-intrinsic-size")}}（或等价的全称属性）指定应用此值的元素的尺寸。若不手动给予其尺寸，则多数时候元素尺寸将变为零。

#### 样式局限

```css
article {
  contain: style;
}
```

尽管名称如此，但是样式局限不提供如由 [Shadow DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 可得的域限（scoped）样式。其主要用途为防止 [CSS 计数器](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)可在元素中被更改的情形出现，此情形可影响树的其余部分。

使用 `contain: style` 将确保由 {{CSSXref("counter-increment")}} 和 {{CSSXref("counter-set")}} 属性所创建的新计数器的作用域被限制为此子树。

#### 特殊值

`contain` 有两个特殊值：

- `content`
- `strict`

在上述示例中见到了第一个值。使用 `contain: content` 将启用布局（`layout`）和绘制（`paint`）局限。规范将此值描述为“对于广泛应用而言相当保险”。由于此值不应用尺寸（`size`）局限，故不会面临盒子尺寸因为依赖于其子元素尺寸而变为零的风险。

为获得尽可能多的局限，请使用 `contain: strict`，此值效果与 `contain: size layout paint style` 相同：

```css
contain: strict;
```

### `content-visibility`

{{CSSXref("content-visibility")}} 控制元素是否渲染其内容，以及施加一组强局限，由此允许用户代理有机会在不需要时省略大片的布局和渲染工作。此属性使用户代理得以在不需要时跳过元素的渲染工作（包括布局和绘制）——由此使页面的初始加载明显变快。

其可取值为：

- `visible`：默认行为——元素内容照常进行布局和渲染。
- `hidden`：元素跳过其内容。被跳过的内容必须不可被例如页内查找和 tab 键顺序导航等用户代理特性访问，亦不可被选中或获得焦点。
- `auto`：元素启用布局局限、样式局限和绘制局限。若元素不与用户相关，则元素还跳过其内容。与 `hidden` 不同的是，被跳过的内容必须仍可照常被例如页内查找和 tab 键顺序导航等用户代理特性访问，且必须照常可获得焦点或被选中。

### 与用户相关

此规范提及了[与用户相关](https://drafts.csswg.org/css-contain/#relevant-to-the-user)这一概念。与用户相关的元素因为可见或用户正在交互所以应被渲染。

确切而言，若下列任意条件为真则元素与用户相关：

- 元素出现于视口或视口周围由用户代理所定义的外边距（视口尺度的 50%，给予应用在元素可见性改变时做准备的时间）内。
- 元素或其内容获得焦点。
- 元素或其内容被选中，例如用鼠标光标在文本上拖拽或进行其他突显操作。
- 元素或其内容被置于[顶层](https://drafts.csswg.org/css-position-4/#top-layer)。

### 跳过其内容

此规范提及了[跳过其内容](https://drafts.csswg.org/css-contain/#skips-its-contents)这一概念。此概念意味着所指元素与用户无关，且为改善性能将不被渲染。

确切而言，在元素跳过其内容时：

- 元素启用布局、样式、绘制和尺寸局限。
- 不绘制其内容，视为设置了 {{CSSXref("visibility", "visibility: hidden")}}。
- 其内容不接收指示器事件，视为设置了 {{CSSXref("pointer-events", "pointer-events: none")}}。

## 参考

### CSS 属性

- {{CSSXref("contain")}}
- {{CSSXref("content-visibility")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 局限介绍](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
- {{DOMXref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件
