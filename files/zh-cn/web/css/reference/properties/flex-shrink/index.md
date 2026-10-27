---
title: "`flex-shrink` CSS 属性"
short-title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: efbef0da1dbe29be125eb7db0b831a4e4bd9220d
---

**`flex-shrink`** [CSS](/zh-CN/docs/Web/CSS) 属性设置弹性项目的弹性收缩因子。如果所有弹性项目的总尺寸大于弹性容器，则[弹性项目可以收缩](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#flex-shrink_属性)以适应容器，收缩幅度由其 `flex-shrink` 值决定。每条弹性行的[负可用空间](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#正负可用空间)会分配给该行中 `flex-shrink` 值大于 `0` 的弹性项目。

> [!NOTE]
> 建议使用带 `auto` 或 `initial` 等关键字值的 {{cssxref("flex")}} 简写属性，而不是单独设置 `flex-shrink`。[关键字值](/zh-CN/docs/Web/CSS/Reference/Properties/flex#取值)会展开为 {{cssxref("flex-grow")}}、`flex-shrink` 和 {{cssxref("flex-basis")}} 的可靠组合，从而更容易实现常见的弹性布局行为。

{{InteractiveExample("CSS 演示：flex-shrink")}}

```css interactive-example-choice
flex-shrink: 0;
```

```css interactive-example-choice
flex-shrink: 1;
```

```css interactive-example-choice
flex-shrink: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">我会收缩</div>
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
  flex-basis: 300px;
}
```

## 语法

```css
/* <number> 值 */
flex-shrink: 2;
flex-shrink: 0.6;

/* 全局值 */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

## 值

此属性指定为以下值：

- `<number>`
  - : 参见 {{cssxref("&lt;number&gt;")}}。负值无效。默认值为 1。

## 描述

`flex-shrink` 属性指定弹性收缩因子，该因子决定在分配负可用空间时，弹性项目相对于弹性容器中其余弹性项目收缩的程度。

该属性用于处理浏览器计算出弹性项目的 `flex-basis` 值后，发现它们过大而无法放入弹性容器的情形。只要 `flex-shrink` 为正值，项目就会收缩，以免溢出容器。

`flex-grow` 属性按各项目的弹性增长因子按比例分配正可用空间，只需考虑 `flex-grow` 属性的值。`flex-shrink` 属性则负责消除负可用空间，使盒子适应容器而不溢出。消除空间比增加空间更复杂一些。弹性收缩因子会乘以弹性项目的基准尺寸；这样会按项目能够收缩的比例分配负空间。这能避免较小的项目在较大项目明显缩小之前就收缩到 `0px`。

通常，`flex-shrink` 会与 {{cssxref("flex-grow")}} 和 {{cssxref("flex-basis")}} 属性一起使用。在 `flex` 简写中，收缩因子始终是第二个 `<number>`。如果简写只包含一个数字值，则该值会被视为 `flex-grow` 的值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置弹性项目的收缩因子

此示例演示负可用空间如何根据项目的收缩因子进行分配。其中包含五个 `flex-shrink` 值大于 0 的弹性项目，它们的合计宽度大于其父弹性容器的宽度。

#### HTML

```html
<div id="content">
  <div class="box1">A</div>
  <div class="box2">B</div>
  <div class="box3">C</div>
  <div class="box4">D</div>
  <div class="box5">E</div>
</div>
```

#### CSS

我们给每个弹性项目设置 {{cssxref("width")}} 为 `200px`。由于 {{cssxref("flex-basis")}} 属性的默认值是 `auto`，每个项目的 `flex-basis` 为 `200px`。这样五个弹性项目的总宽度为 `1000px`，是容器尺寸的两倍。我们将所有弹性项目设为可收缩，即 `flex-shrink` 值大于 `0`。最后两个项目设置了更大的 `flex-shrink` 值，因此会收缩得更多。

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  width: 200px;
}

.box1,
.box2,
.box3 {
  flex-shrink: 1;
}

.box4 {
  flex-shrink: 1.5;
}

.box5 {
  flex-shrink: 2;
}
```

```css hidden
#content {
  margin: 5px;
}
div {
  font-family: monospace;
  outline: 1px solid;
  line-height: 4em;
  text-align: center;
}
.box1 {
  background-color: red;
}
.box2 {
  background-color: lightblue;
}
.box3 {
  background-color: yellow;
}
.box4 {
  background-color: lightsalmon;
}
.box5 {
  background-color: lightgreen;
}
```

#### 结果

{{EmbedLiveSample("设置弹性项目的收缩因子", 500, 100)}}

弹性项目不会溢出容器，因为它们可以收缩：`500px` 的负可用空间会根据各项目的 `flex-shrink` 值分配给这五个项目。五个项目的收缩值总和为 `1 + 1 + 1 + 1.5 + 2` = `6.5`。因此，`flex-shrink: 1` 的项目宽度会减少 `1/6.5 * 500px` = `76.92px`，`flex-shrink: 1.5` 的项目宽度会减少 `1.5/6.5 * 500px` = `115.38px`，`flex-shrink: 2` 的项目宽度会减少 `2/6.5 * 500px` = `153.85px`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [弹性盒子的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [控制弹性元素在主轴上的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)模块
