---
title: "`flex-basis` CSS 属性"
short-title: flex-basis
slug: Web/CSS/Reference/Properties/flex-basis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`flex-basis`** [CSS](/zh-CN/docs/Web/CSS) 属性设置{{glossary("flex item", "弹性项目")}}的初始主尺寸。除非通过 {{Cssxref("box-sizing")}} 另行设置，否则它设置的是内容盒的尺寸。

> [!NOTE]
> 建议使用带 `auto` 或 `initial` 等关键字值的 {{cssxref("flex")}} 简写属性，而不是单独设置 `flex-basis`。[关键字值](/zh-CN/docs/Web/CSS/Reference/Properties/flex#取值)会展开为 {{cssxref("flex-grow")}}、{{cssxref("flex-shrink")}} 和 `flex-basis` 的可靠组合，有助于实现常见的弹性布局行为。

{{InteractiveExample("CSS 演示：flex-basis")}}

```css interactive-example-choice
flex-basis: auto;
```

```css interactive-example-choice
flex-basis: 0;
```

```css interactive-example-choice
flex-basis: 200px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">项目一</div>
  <div>项目二</div>
  <div>项目三</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```

在此示例中，三个项目上的 {{cssxref("flex-grow")}} 和 {{cssxref("flex-shrink")}} 属性均设置为 `1`，表示弹性项目可以在初始 `flex-basis` 的基础上增大或收缩。

此演示会更改设置在第一个弹性项目上的 `flex-basis` 值，使其增大或收缩以填满可用空间。其他弹性项目的尺寸也会随之变化，它们至少会有 `min-content` 的尺寸。例如，当第一个项目的 `flex-basis` 设为 `200px` 时，它会从 `200px` 开始，然后收缩以适应可用空间。

如果 `flex-basis` 被设为 `auto` 以外的值，而同一弹性项目又设置了 `width`（在 `flex-direction: column` 的情况下则是 `height`），则以 `flex-basis` 的值为准。

## 语法

```css
/* 指定 <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* 固有尺寸关键字 */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 根据弹性项目的内容自动确定尺寸 */
flex-basis: content;

/* 全局值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

`flex-basis` 属性的值可以是关键字 `content`，也可以是一个 `<'width'>`。

### 取值

- `content`
  - : 表示根据弹性项目的内容自动调整尺寸。

- `<'width'>`
  - : 以下任意一种单位：
    - {{cssxref("&lt;length&gt;")}} 设置绝对长度值。
    - {{cssxref("&lt;percentage&gt;")}} 设置包含块内容区域宽度或高度的百分比。`flex-basis` 的百分比值相对于弹性容器解析。如果弹性容器的尺寸不确定，则 `flex-basis` 的使用值为 `content`。
    - `auto` 在横排书写模式下使用 {{cssxref("width")}} 的值，在竖排书写模式下使用 {{cssxref("height")}} 的值；当对应的值也是 `auto` 时，则改用 `content` 值。
    - {{cssxref("max-content")}} 设置固有首选宽度。
    - {{cssxref("min-content")}} 设置固有最小宽度。
    - {{cssxref("fit-content")}} 设置包含块内容区域可能的最大尺寸，受 `min-content` 和 `max-content` 值限制，并根据当前元素的内容计算。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置弹性项目的初始尺寸

#### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis 测试</li>
  <li class="flex flex2">2: flex-basis 测试</li>
  <li class="flex flex3">3: flex-basis 测试</li>
  <li class="flex flex4">4: flex-basis 测试</li>
  <li class="flex flex5">5: flex-basis 测试</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis 测试</li>
</ul>
```

#### CSS

```css
.container {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### 结果

{{EmbedLiveSample('设置弹性项目的初始尺寸', '', '360')}}

### `flex-basis` 的 `0` 与 `0%` 对比

此示例演示在 `flex-direction` 设置为 `column`、且弹性容器和弹性项目都没有设置高度时，`flex-basis` 取值为 `0` 与取值为 `0%` 之间的差异；`0` 是绝对长度，而百分比形式的 `flex-basis` 值会解析为 [`content`](#content) 值。

#### HTML

我们引入了两个结构相同的弹性容器，除 `flex-basis` 值之外，它们的样式相同。每个容器都有两个子元素：一个标题 `<div>` 和一个 `<section>`。`<section>` 元素还有一个内容 `<div>` 子元素，它不会被设为弹性项目，但会被赋予高度。

```html
<div class="container basis-0">
  <div>标题</div>
  <section>
    <div class="content">flex-basis: 0;</div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>标题</div>
  <section>
    <div class="content">flex-basis: 0%;</div>
  </section>
</div>
```

#### CSS

我们将这些容器设置为行内级弹性容器，让它们并排显示，以便更好地比较。我们将 `flex-direction` 设置为 `column`。第一个容器的弹性项目的 `flex-basis` 值为 `0`，第二个容器的弹性项目的 `flex-basis` 值为 `0%`。弹性容器及其弹性项目都没有显式设置高度；不过，`section` 元素的高度至少为 `200px`，其子元素的高度为 `300px`。

```css
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  outline: 1px solid red;

  overflow: auto;
  min-height: 200px;
}

.content {
  background: wheat;
  height: 300px;
}

.container.basis-0 > * {
  flex-basis: 0;
}
.container.basis-0-percent > * {
  flex-basis: 0%;
}
```

#### 结果

{{EmbedLiveSample('flex-basis 的 0 与 0% 对比', '100%', '400')}}

在第一个容器中，`flex-basis: 0`，`<section>` 元素的初始主尺寸为零，随后增长到 `200px` 的最小高度。在第二个容器中，`flex-basis: 0%`，`<section>` 元素的初始主尺寸为 `300px`，这是因为弹性容器没有设置高度，百分比形式的 `flex-basis` 值会解析为 [`content`](#content) 值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("flex")}} 简写属性
- {{cssxref("inline-size")}}
- [弹性布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [控制弹性元素在主轴上的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)模块
