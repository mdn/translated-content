---
title: 弹性盒布局中的盒对齐方式
slug: Web/CSS/Guides/Box_alignment/In_flexbox
---

[Box Alignment](/zh-CN/docs/Web/CSS/Guides/Box_alignment) 规范详细说明了对齐 (alignment) 在各种布局方法中的工作原理; 在此页面中，我们将探讨盒子对齐（box aligment）在 Flexbox 环境中的工作原理。由于此页面旨在详细说明特定于 Flexbox 和框对齐的内容，因此应与[Box Alignment](/zh-CN/docs/Web/CSS/Guides/Box_alignment) 页面一起阅读，该页面详细说明了不同布局方法的框对齐的常见方法。

## 基础示例

在此示例中，使用{{cssxref("justify-content")}}在主轴上对齐三个弹性元素（flex items），并使用{{cssxref("align-items")}}在十字轴上对齐。第一个元素通过将{{cssxref("align-self")}}设置为居中来覆盖在父元素设置的 align-items 值。

```html live-sample___flex-align-items
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三 <br />具有 <br />额外的 <br />文本</div>
</div>
```

```css hidden live-sample___flex-align-items
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___flex-align-items
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## 轴 与 flex-direction

Flexbox 与文档的写入模式有关，因此如果你使用英语并将{{cssxref("justify-content")}}设置为 flex-end，则会将项目对齐到 Flex 容器的末尾。如果你将{{cssxref("flex-direction")}}设置为行，则此对齐将处于内联方向。

但是，在 Flexbox 中，你可以通过将 flex-direction 设置为 column 来更改主轴。在这种情况下，justify-content 将在块方向上对齐项目。因此，在 Flexbox 中工作时最容易考虑主轴和纵轴，如下所示：

- 主轴由`flex-direction`设置方向，通过`justify-content` 属性对齐
- 纵轴穿过主轴，通过`align-content`，`align-self` / `align-items`对齐

### 主轴

- {{cssxref("justify-content")}}

### 纵轴

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### justify-self 在 Flexbox 布局中失效

在主轴上，Flexbox 将我们的内容作为一个组进行处理。计算布置子元素所需的空间量，然后剩余空间可用于分配。 `justify-content`属性控制剩余空间的使用方式。设置`justify-content：flex-end`，额外空间放在所有子元素之前，`justify-content：space-around`，它放在该维度的子元素的两侧，等等。

这意味着在 Flexbox 中，`justify-self`属性没有意义，因为我们总是处理移动整个元素组。

在十字轴上，`align-self`是有意义的，因为我们可能在该维度中的 flex 容器中有额外的空间，其中单个元素可以移动到开始和结束位置。

## 对齐 与 auto margins

在 Flexbox 中有一个特定的用例，我们可能会认为`justify-self`是我们需要的，这就是我们想要分割一组 flex items，也许是为了创建一个分割导航模式。对于此用例，我们可以使用自动边距。设置为 auto 的边距将吸收其维度中的所有可用空间。这就是以自动边距为中心的块的工作原理。通过将左右边距设置为 auto，我们块的两侧都会尝试占用所有可用空间，因此将盒子推入中心。

通过在一组弹性项目中的一个项目上设置 auto 的{{cssxref("margin")}}全部对齐以开始，我们可以创建拆分导航。这适用于 Flexbox 和对齐属性。一旦没有可用于自动边距的空间，该项目的行为与所有其他弹性项目的行为相同，并且收缩以尝试适合空间。

```html live-sample___auto-margins
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div class="push">四</div>
  <div>五</div>
</div>
```

```css hidden live-sample___auto-margins
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## `gap` 属性

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 在子元素之间创建固定大小的差距

在主轴上，`column-gap`属性将在相邻项之间创建固定大小的间隙。

在纵轴上，`row-gap`属性将在相邻的子元素之间创建间距，因此还必须将`flex-wrap`设置为`wrap`,以使其具有任何效果。

```html live-sample___gap
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
  <div>六</div>
</div>
```

```css hidden live-sample___gap
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___gap
.box {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  flex: 1;
}
```

{{EmbedLiveSample("gap")}}

## 参考

### CSS 属性

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("align-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 术语条目

- {{Glossary("Cross axis", "交叉轴")}}
- {{Glossary("Main axis", "主轴")}}

## 指南

- [弹性盒布局中的对齐方式](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
