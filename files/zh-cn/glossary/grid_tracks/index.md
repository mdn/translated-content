---
title: Grid Tracks
slug: Glossary/Grid_Tracks
---

{{GlossarySidebar}}

**网格轨道** 是两条{{glossary("grid lines","网格线")}}之间的空间。它们通过使用属性 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 或者简写属性 {{cssxref("grid")}} 和 {{cssxref("grid-template")}} 在显式网格中定义。网格轨道也可以在隐式网格中创建，通过将一个网格项目定位到显式网格中创建的轨道外面。

下图展示该网格中的第一个行轨道（上色部分的空间）。

![Diagram showing a grid track.](1_grid_track.png)

## 显式网格中的轨道大小

当使用 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 定义网格轨道时，你可以使用任何长度单位，也可以使用 flex 单位 `fr` 来表示网格容器中可用空间的一部分。下面的例子演示了一个三列轨道的网格，第一列 200px，第二列 1fr，第三列 3fr。网格容器中的可用空间减去 200px 后，剩余空间被分成 4 份，1 份给第二列，3 份给第三列。

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
  grid-template-columns: 200px 1fr 3fr;
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

{{ EmbedLiveSample('显式网格中的轨道大小', '500', '230') }}

## 隐式网格中的轨道大小

隐式网格中创建的轨道默认为自动大小，但可以通过 {{cssxref("grid-auto-rows")}} 和 {{cssxref("grid-auto-columns")}} 属性来定义这些轨道的大小。

## 了解更多

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### 扩展阅读

- CSS Grid Layout Guide: [Basic concepts of grid layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition of Grid Tracks in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-track-concept)
