---
title: 网格区域
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

**网格区域**是网格中由一个或者多个{{glossary("grid cell", "网格单元")}}组成的一个矩形区域。当你[基于网格线定位](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)来放置项目或者使用[具名网格区域](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)定义区域时，会创建网格区域。

![显示一个被高光突出的网格区域](1_grid_area.png)

本质上，网格区域*必须*是矩形的。例如，不可能创建 T 形或 L 形的网格区域。

## 示例

在下面的例子中，有一个网格容器包含两个网格项目。我们用 {{cssxref("grid-area")}} 属性命名了它们，然后用 {{cssxref("grid-template-areas")}} 把它们放在网格上。这将创建两个网格区域，一个覆盖四个网格单元格，另外一个覆盖两个。

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

## 参见

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### 扩展阅读

- CSS 网格布局指南：
  - [网格布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - [网格模板区域](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- CSS 网格布局规范中[网格区域的定义](https://drafts.csswg.org/css-grid/#grid-area-concept)
