---
title: Grid Areas
slug: Glossary/Grid_Areas
---

{{GlossarySidebar}}

**网格区域**是网格中由一个或者多个{{glossary("grid cell", "网格单元格")}}组成的一个矩形区域。当你使用[基于网格线位置](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)放置一个项目或者使用[命名的网格区域](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)定义区域时，网格区域被创建。

![Image showing a highlighted grid area](1_grid_area.png)

本质上，网格区域一定是矩形的。例如，不可能创建 T 形或 L 形的网格区域。

在下面的例子中，有一个网格容器包含两个网格项目，我用 {{cssxref("grid-area")}} 属性命名它们，然后用 {{cssxref("grid-template-areas")}} 把它们放在网格上。这将创建两个网格区域，一个覆盖四个网格单元格，另外一个覆盖两个。

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
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
  <div class="item1">Item</div>
  <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('示例', '300', '280') }}

## 了解更多

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### 扩展阅读

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
- CSS Grid Layout Guide: _[Grid template areas](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_
- [Definition of Grid Areas in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-area-concept)
