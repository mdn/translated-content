---
title: Grid
slug: Glossary/Grid
---

{{GlossarySidebar}}

_CSS 格線_(CSS grid) 使用 `display: grid;` 值，你可以透過 {{cssxref("grid-template-rows")}} 與 {{cssxref("grid-template-columns")}} 屬性定義格線的行（Row）與列（Column）。

使用這些屬性的格線會稱做*明式格線*（explicit grid）。

如果把內容放在明式格線外；或是依賴自動配置、而格線演算法要建立額外的{{glossary("grid tracks", "格線軌道")}}以支持{{glossary("grid item", "格線單元")}}的話，明式格線內就會建立額外的格線軌道。*明式格線*是指內容因為定義的軌道外增添，而自動建立內容的格線。

下例創建了三列兩行的*明式格線*。格線第三行是明式格線行軌道，它是為了讓超過六個單元的格線，能夠填滿明式格線。

## 範例

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('範例', '500', '330') }}

## 深入理解 re

### 屬性參考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 參閱

- CSS 格線布局教學：_[格線布局的基本概念](/zh-TW/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
