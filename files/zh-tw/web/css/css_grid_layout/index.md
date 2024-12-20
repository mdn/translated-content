---
title: CSS格線布局
slug: Web/CSS/CSS_grid_layout
---

{{CSSRef}}

**CSS 格線佈局**長於把頁面的主要區域分離、或是在 HTML 原生語法構建的區域間，定義大小、位置、層次等方面的關聯。

格線佈局使作者能夠對齊元素為行和列，就像表格一樣。然而，格線佈局可以更輕易的達成比一般表格更多元化的排版。例如，一個網格容器的子元素可以定位自己和層重疊，類似於 CSS 定位元素。

## 基本示例

以下示例展示了一個三列軌道格線，其中創建的行數最小為 100 像素，最大為 auto。Items 已經使用基於線放置在網格的位置上。

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233, 171, 88);
  border-radius: 5px;
  background-color: rgba(233, 171, 88, 0.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-row: 2 / 5;
  grid-column: 1;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{ EmbedLiveSample('基本示例', '500', '440') }}

## 參考

### CSS 屬性

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

### CSS 函式

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### CSS 資料型別

- {{cssxref("&lt;flex&gt;")}}

### 詞匯表條目

- [格線](/zh-TW/docs/Glossary/Grid)
- [網格線](/zh-TW/docs/Glossary/Grid_Lines)
- [格線軌道](/zh-TW/docs/Glossary/Grid_Tracks)
- [格線單元](/zh-TW/docs/Glossary/Grid_Cell)
- [格線區域](/zh-TW/docs/Glossary/Grid_Areas)
- [間距](/zh-TW/docs/Glossary/Gutters)
- [格線軸](/zh-TW/docs/Glossary/Grid_Axis)
- [格線行](/zh-TW/docs/Glossary/Grid_Row)
- [格線列](/zh-TW/docs/Glossary/Grid_Column)

## 指引

- [格線布局的基本概念](/zh-TW/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [格線布局與其它布局的關係](/zh-TW/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [使用指定的格線命名排版](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [格線模板區域](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout using named grid lines](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [使用指定的網格線排版](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [在 CSS 自動放置格線布局](/zh-TW/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [用 Box 對齊 CSS 格線布局](/zh-TW/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS 格線、邏輯值和寫作模式](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS 格線布局與無障礙](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS 格線與漸進增強](/zh-TW/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [用 CSS 格線實做常見排版](/zh-TW/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

## 外部資源

- [Jen Simmons 的示範](https://labs.jensimmons.com/)
- [格線示例：一些影片教學與使用範例](https://gridbyexample.com/)
- [Codrops 格線參考](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)

## 規範

{{Specifications}}
