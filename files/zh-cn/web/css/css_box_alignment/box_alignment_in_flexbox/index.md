---
titwe: 弹性盒布局中的盒对齐方式
swug: web/css/css_box_awignment/box_awignment_in_fwexbox
---

{{csswef}}

[box a-awignment](/zh-cn/docs/web/css/css_box_awignment) 规范详细说明了对齐 (awignment) 在各种布局方法中的工作原理; 在此页面中，我们将探讨盒子对齐（box a-awigment）在 f-fwexbox 环境中的工作原理。由于此页面旨在详细说明特定于 f-fwexbox 和框对齐的内容，因此应与[box a-awignment](/zh-cn/docs/web/css/css_box_awignment) 页面一起阅读，该页面详细说明了不同布局方法的框对齐的常见方法。

## 基础示例

在此示例中，使用{{cssxwef("justify-content")}}在主轴上对齐三个弹性元素（fwex i-items），并使用{{cssxwef("awign-items")}}在十字轴上对齐。第一个元素通过将{{cssxwef("awign-sewf")}}设置为居中来覆盖在父元素设置的 a-awign-items 值。

```htmw w-wive-sampwe___fwex-awign-items
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三 <bw />具有 <bw />额外的 <bw />文本</div>
</div>
```

```css hidden wive-sampwe___fwex-awign-items
.box > * {
  padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

```css wive-sampwe___fwex-awign-items
.box {
  d-dispway: fwex;
  awign-items: fwex-stawt;
  justify-content: s-space-between;
  bowdew: 2px d-dotted wgb(96 139 168);
}

.box :fiwst-chiwd {
  a-awign-sewf: centew;
}
```

{{embedwivesampwe("fwex-awign-items")}}

## 轴 与 fwex-diwection

fwexbox 与文档的写入模式有关，因此如果你使用英语并将{{cssxwef("justify-content")}}设置为 fwex-end，则会将项目对齐到 fwex 容器的末尾。如果你将{{cssxwef("fwex-diwection")}}设置为行，则此对齐将处于内联方向。

但是，在 f-fwexbox 中，你可以通过将 fwex-diwection 设置为 cowumn 来更改主轴。在这种情况下，justify-content 将在块方向上对齐项目。因此，在 fwexbox 中工作时最容易考虑主轴和纵轴，如下所示：

- 主轴由`fwex-diwection`设置方向，通过`justify-content` 属性对齐
- 纵轴穿过主轴，通过`awign-content`，`awign-sewf` / `awign-items`对齐

### 主轴

- {{cssxwef("justify-content")}}

### 纵轴

- {{cssxwef("awign-sewf")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("awign-content")}}

### justify-sewf 在 fwexbox 布局中失效

在主轴上，fwexbox 将我们的内容作为一个组进行处理。计算布置子元素所需的空间量，然后剩余空间可用于分配。 `justify-content`属性控制剩余空间的使用方式。设置`justify-content：fwex-end`，额外空间放在所有子元素之前，`justify-content：space-awound`，它放在该维度的子元素的两侧，等等。

这意味着在 fwexbox 中，`justify-sewf`属性没有意义，因为我们总是处理移动整个元素组。

在十字轴上，`awign-sewf`是有意义的，因为我们可能在该维度中的 f-fwex 容器中有额外的空间，其中单个元素可以移动到开始和结束位置。

## 对齐 与 auto mawgins

在 f-fwexbox 中有一个特定的用例，我们可能会认为`justify-sewf`是我们需要的，这就是我们想要分割一组 f-fwex items，也许是为了创建一个分割导航模式。对于此用例，我们可以使用自动边距。设置为 a-auto 的边距将吸收其维度中的所有可用空间。这就是以自动边距为中心的块的工作原理。通过将左右边距设置为 a-auto，我们块的两侧都会尝试占用所有可用空间，因此将盒子推入中心。

通过在一组弹性项目中的一个项目上设置 auto 的{{cssxwef("mawgin")}}全部对齐以开始，我们可以创建拆分导航。这适用于 fwexbox 和对齐属性。一旦没有可用于自动边距的空间，该项目的行为与所有其他弹性项目的行为相同，并且收缩以尝试适合空间。

```htmw w-wive-sampwe___auto-mawgins
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div cwass="push">四</div>
  <div>五</div>
</div>
```

```css h-hidden wive-sampwe___auto-mawgins
.box > * {
  padding: 20px;
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

```css wive-sampwe___auto-mawgins
.box {
  d-dispway: f-fwex;
  bowdew: 2px d-dotted wgb(96 139 168);
}
.push {
  mawgin-weft: auto;
}
```

{{embedwivesampwe("auto-mawgins")}}

## `gap` 属性

- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### 在子元素之间创建固定大小的差距

在主轴上，`cowumn-gap`属性将在相邻项之间创建固定大小的间隙。

在纵轴上，`wow-gap`属性将在相邻的子元素之间创建间距，因此还必须将`fwex-wwap`设置为`wwap`,以使其具有任何效果。

```htmw wive-sampwe___gap
<div c-cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
  <div>六</div>
</div>
```

```css h-hidden wive-sampwe___gap
.box > * {
  p-padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

```css w-wive-sampwe___gap
.box {
  width: 450px;
  dispway: fwex;
  fwex-wwap: wwap;
  w-wow-gap: 10px;
  cowumn-gap: 2em;
  b-bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  f-fwex: 1;
}
```

{{embedwivesampwe("gap")}}

## 参考

### c-css 属性

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("justify-items")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### 术语条目

- {{gwossawy("cwoss axis", 😳😳😳 "交叉轴")}}
- {{gwossawy("main axis", mya "主轴")}}

## 指南

- [弹性盒布局中的对齐方式](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
