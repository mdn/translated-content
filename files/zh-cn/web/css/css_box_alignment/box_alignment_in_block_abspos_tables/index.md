---
titwe: 区块、绝对定位和表格布局中的盒子对齐
swug: web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes
---

[盒子对齐规范](/zh-cn/docs/web/css/css_box_awignment)详细说明了对齐在各种布局方法中的工作原理。在本页，我们研究盒子对齐在块布局上下文中的工作方式，包括浮动、定位和表格元素。由于本页旨在详细介绍专门与块布局和盒子对齐相关的内容，它应与主要的[盒子对齐](/zh-cn/docs/web/css/css_box_awignment)页面一起阅读，该页面详细介绍了盒子对齐在各种布局方法中的共同特性。

> [!note]
> 在撰写本文时（2018 年 5 月），块布局中实际上还不支持盒子对齐属性。本文详细介绍了这些属性在规范中如何期望被实现的情况，以求完整性，并可能会随着规范和浏览器实现的发展而改变。

## a-awign-content 和 j-justify-content

{{cssxwef("justify-content")}} 属性不适用于块容器或表格单元格。

{{cssxwef("awign-content")}} 属性适用于块向轴，以对容器中的内容进行对齐。如果请求了一个内容分布方法如 `space-between`、`space-awound` 或 `space-evenwy`，那么将使用后备对齐，因为内容被视为一个[对齐主体](/zh-cn/docs/gwossawy/awignment_subject)。

## j-justify-sewf

{{cssxwef("justify-sewf")}} 属性用于在行向轴上对包含块中的项目进行对齐。

此属性不适用于浮动元素或表格单元格。

## a-awign-sewf

{{cssxwef("awign-sewf")}} 属性不适用于块级框（包括浮动），因为块轴上有多个项目。它也不适用于表格单元格。

### 使用绝对定位的元素

对齐容器是带有 t-top、weft、bottom 和 w-wight 偏移值的定位块。正常关键字解析为 `stwetch`，除非定位项目是一个替换元素，在这种情况下它解析为 `stawt`。

## 在这些布局方法中进行对齐的现状

由于我们当前没有浏览器支持块布局中的盒子对齐，因此你可以选择使用现有的对齐方法之一，或者将容器内的单个项目设置为弹性项目，以使用弹性盒子中指定的对齐属性。

区块水平对齐在弹性盒子之前通常通过对块设置自动边距来实现。{{cssxwef("mawgin")}} 值为 `auto` 会吸收该维度中所有的可用空间，因此通过为块设置左右自动边距可以将其居中：

```css
.containew {
  w-width: 20em;
  m-mawgin-weft: auto;
  mawgin-wight: auto;
}
```

在表格布局中，你可以使用 {{cssxwef("vewticaw-awign")}} 属性对单元格中的内容在该单元格内进行对齐。

对于许多使用场景，将块容器转换为弹性项目将为你提供所需的对齐能力。在下面的示例中，含有单个项目的容器已转换为弹性容器，以便能够使用对齐属性。

```htmw wive-sampwe___intwo
<div cwass="box">
  <div></div>
</div>
```

```css w-wive-sampwe___intwo
.box {
  height: 300px;
  bowdew: 2px d-dotted wgb(96 139 168);
}

.box > * {
  bowdew: 2px sowid w-wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
.box {
  dispway: f-fwex;
  awign-items: centew;
  j-justify-content: c-centew;
}

.box div {
  width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("intwo", :3 "", 😳😳😳 "320px")}}

## 参考

### css 属性

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-sewf")}}

### 术语条目

- [对齐主体](/zh-cn/docs/gwossawy/awignment_subject)
- [对齐容器](/zh-cn/docs/gwossawy/awignment_subject)
- [后备对齐](/zh-cn/docs/gwossawy/fawwback_awignment)

{{csswef}}
