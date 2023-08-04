---
title: Gutters
slug: Glossary/Gutters
---

{{GlossarySidebar}}

**网格间距**是网格轨道之间的间距，可以通过 {{cssxref("grid-column-gap")}}，{{cssxref("grid-row-gap")}} 或者 {{cssxref("grid-gap")}} 在[Grid 布局](/zh-CN/docs/Web/CSS/CSS_grid_layout)中创建。

在下面的例子中，由一个三列两行的网格。它的列轨道之间有 20px 的间距，行轨道之间有 20px 的间距。

## 示例

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
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('示例', '300', '280') }}

在网格大小上，网格间距参与计算就好像规则的网格轨道一样，但是没有任何东西可以被放置到网格间距上。网格间距也像网格线一样在那个位置会增加额外的大小，因此网格项目会被放置在网格间距末的那条网格线后。

能够导致轨道被间隔开来的，除了网格间距属性，还有 margins，padding 或者使用[盒模型对齐](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)中的空间分布属性。这些方法都会导致可见间距的产生，因此网格间距属性不等价于”间距大小“，除非你没有使用这些能够产生间距的方法。

## 了解更多

### 属性参考

- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-gap")}}

### 扩展阅读

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
- [Definition of gutters in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#gutters)
