---
title: 网格间距
slug: Glossary/Gutters
l10n:
  sourceCommit: c77767934e1a9937a5158026a28fa2157a848b49
---

{{GlossarySidebar}}

**网格间距**是网格内容{{glossary("grid_tracks", "轨道")}}之间的间距，可以通过 {{cssxref("column-gap")}}、{{cssxref("row-gap")}} 或 {{cssxref("gap")}} 属性在[网格布局](/zh-CN/docs/Web/CSS/CSS_grid_layout)中创建。

## 示例

在下面的例子中，有一个三列两行的网格。它的行、列轨道之间都有 `20px` 的间距。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #fff8f8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 45%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
```

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

{{ EmbedLiveSample('示例', '300', '280') }}

在网格大小方面，间隙表现得像常规的网格轨道一样，但你无法将任何项目放置在间隙中。间隙的作用类似于该位置的网格线获得了额外的大小，因此任何放置在该线后的网格项目都会从间隙的末端开始。

`row-gap` 和 `column-gap` 属性并不是唯一能导致轨道间距扩大的因素。外边距、内边距或使用[盒子对齐](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)中的空间分配属性都可以增加可见的间隙。因此，除非确定设计没有通过这些方法引入任何额外的空间，否则不应将 `row-gap` 和 `column-gap` 属性视为等同于网格间距大小。

## 参见

- [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- 属性参考

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- CSS 网格布局规范中[网格间距的定义](https://drafts.csswg.org/css-grid/#gutters)
