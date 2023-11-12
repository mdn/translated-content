---
title: contain
slug: Web/CSS/contain
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`contain`** 标示了元素及其内容尽可能独立于文档树的其余部分。局限使 DOM 的一部分得以被隔离，且通过将布局、样式、绘制、尺寸或其任意组合的计算限制于 DOM 子树而非整个页面使性能受益。局限也可用于限制 CSS 计数器和引号的作用域。

{{EmbedInteractiveExample("pages/css/contain.html")}}

有四种类型的 CSS 局限——尺寸、布局、样式和绘制，且均设置在容器上。此属性为五个标准值的子集或两个简写值之一构成的以空格分隔的列表。在容器内对被局限属性的修改不会传播到被局限元素外的页面的其余部分。局限的主要益处在于浏览器无需经常重渲 DOM 或页面布局，由此在静态页面的渲染中带来小幅性能收益，在更动态的应用中带来更多的性能收益。

在有独立元素组的页面上使用 `contain` 属性较为有用，此属性可以防止元素内部在其包围盒外产生副作用。

> **备注：** 为此属性使用 `layout`、`paint`、`strict` 或 `content` 值将创建：
>
> 1. 新的[包含区块](/zh-CN/docs/Web/CSS/Containing_block)（针对其 {{CSSXref("position")}} 属性为 `absolute` 或 `fixed` 的后代元素）。
> 2. 新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)。
> 3. 新的[区块格式化上下文](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)。

## 语法

```css
/* 关键词值 */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* 多个关键词 */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* 全局值 */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

### 取值

`contain` 属性可有下列取值中的任意一个：

- 关键词 `none`，**或**
- 以任意顺序由空格分隔的关键词 `size`（或 `inline-size`）、`layout`、`style` 和 `paint` 中的至少一个，**或**
- 简写值 `strict` 或 `content` 之一

这些关键词有下列含义：

- `none`
  - : 元素照常渲染，不应用局限。
- `strict`
  - : 将所有局限规则应用于元素。此值等价于 `contain: size layout paint style`。
- `content`
  - : 将除 `size` 外的所有局限规则应用于元素。此值等价于 `contain: layout paint style`。
- `size`
  - : 在行向和块向上将尺寸局限应用于元素。元素尺寸可无视子元素单独计算。此值不可与 `inline-size` 结合使用。
- `inline-size`
  - : 将行向尺寸局限应用于元素。元素的行向尺寸可无视子元素单独计算。此值不可与 `size` 结合使用。
- `layout`
  - : 从页面的其余部分中隔离出元素的内部布局。此值意味着元素外的任意内容和元素内部布局互不影响。
- `style`
  - : 对于可在元素及其后代外产生影响的属性，其影响将不会逃离包含元素。计数器和引号的作用域被限制为元素及其内容。
- `paint`
  - : 元素后代不在元素边界外显示。若包含盒在屏外，则浏览器无需绘制其被局限的元素——这些元素因为完全局限于此盒故必定也在屏外。若后代元素溢出包含元素的边界，则此后代元素将被裁剪至包含元素的边框盒。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 绘制局限

下列示例展示了如何使用 `contain: paint` 防止元素后代在元素边界外被绘制。

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px;
  font-size: 25px;
}
```

```html
<div style="contain: paint">
  <p>此文本将被裁剪至盒子边界。</p>
</div>
<div>
  <p>此文本将不被裁剪至盒子边界。</p>
</div>
```

{{EmbedLiveSample("绘制局限", "100%", 280)}}

### 布局局限

考虑下列示例，此示例显示了元素在应用与不应用布局局限时如何表现：

```html
<div class="card" style="contain: layout;">
  <h2>卡片 1</h2>
  <div class="fixed"><p>固定盒 1</p></div>
  <div class="float"><p>浮动盒 1</p></div>
</div>
<div class="card">
  <h2>卡片 2</h2>
  <div class="fixed"><p>固定盒 2</p></div>
  <div class="float"><p>浮动盒 2</p></div>
</div>
<div class="card">
  <h2>卡片 3</h2>
  <!-- …… -->
</div>
```

```css hidden
p {
  margin: 4px;
  padding: 4px;
}

h2 {
  margin-bottom: 4px;
  padding: 10px;
}

div {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 gray;
  padding: 6px;
  margin: 6px;
}
```

```css
.card {
  width: 70%;
  height: 90px;
}

.fixed {
  position: fixed;
  right: 10px;
  top: 10px;
  background: coral;
}

.float {
  float: left;
  margin: 10px;
  background: aquamarine;
}
```

第一张卡片应用了布局局限，其布局被从页面其余部分中隔离开来。我们可以在页面上的其他地方复用这张卡片，无需担心重新计算其他元素的布局。在浮动体与卡片边界重叠时，页面其余部分的元素不受影响。当浏览器重新计算包含元素的子树时，仅有此元素被重新计算。被局限元素之外的任意元素均无需重新计算。此外，固定盒将卡片用作布局容器为自身定位。

第二和第三张卡片无局限。第二张卡片中固定盒的布局上下文为根元素，因此固定盒置于页面右上角。与第二张卡片重叠的浮动体导致第三张卡片出现意外的布局漂移，由 `<h2>` 元素的定位可见此漂移。当出现重新计算时，计算不只限于容器。由此影响性能且干扰页面布局的其余部分。

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### 样式局限

样式局限将[计数器](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)和[引号](/zh-CN/docs/Web/CSS/quotes)的作用域限制为被局限元素。对于 CSS 计数器，{{CSSXref("counter-increment")}} 和 {{CSSXref("counter-set")}} 属性的作用域被限制为此元素，且将元素视为在文档根部。

#### 局限与计数器

下列示例考察了计数器在应用样式局限时如何工作：

```html
<ul>
  <li>元素甲</li>
  <li>元素乙</li>
  <li class="container">元素丙</li>
  <li>元素丁</li>
  <li>元素戊</li>
</ul>
```

```css
body {
  counter-reset: list-items;
}

li::before {
  counter-increment: list-items;
  content: counter(list-items) "：";
}

.container {
  contain: style;
}
```

若无局限，则计数器将在每个元素上从 1 增加到 5。样式局限导致 {{CSSXref("counter-increment")}} 属性的作用域被限制为元素子树，计数器从 1 重新开始：

{{EmbedLiveSample("Containment_and_counters", "100%", 140)}}

#### 局限与引号

CSS 引号受类似影响，与引号相关的 {{CSSXref("content")}} 值的作用域被限制为此元素：

```html
<!-- 有样式局限 -->
<span class="open-quote"
  >外<span style="contain: style;"
    ><span class="open-quote">内</span></span
  ></span
><span class="close-quote">闭</span>
<br />
<!-- 无局限 -->
<span class="open-quote"
  >外<span><span class="open-quote">内</span></span></span
><span class="close-quote">闭</span>
```

```css
body {
  quotes: "【" "】" "〈" "〉";
}
.open-quote:before {
  content: open-quote;
}

.close-quote:after {
  content: close-quote;
}
```

第一个闭引号因为局限而无视内侧的 `span` 并使用外侧 `span` 的闭引号：

{{EmbedLiveSample("Containment_and_quotes", "100%", 40)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)
- [CSS 容器查询](/zh-CN/docs/Web/CSS/CSS_container_queries)
- CSS 属性 {{CSSXref("content-visibility")}}
- CSS 属性 {{CSSXref("position")}}
