---
title: Grid
slug: Glossary/Grid
---

{{GlossarySidebar}}

通过设置 CSS 属性 `display: grid;` 可以定义一个 CSS 网格。接着可以使用 {{cssxref("grid-template-rows")}} 和 {{cssxref("grid-template-columns")}} 属性定义网格的列属性 (columns) 和行属性 (rows)。

使用这些属性定义的网格被称为 _显式网格 (explicit grid)。_

如果开发者将内容放置在显式网格之外，或者依赖自动布局的话，网格法 (grid algorithm) 将需要创建额外的 row 或者 column、 {{glossary("grid tracks", "tracks")}} 来包含显示网格之外的内容 {{glossary("grid item", "grid items")}}，为此将在隐式网格 (implicit grid) 中创建额外的轨道 (tracks)。_当内容添加到了已定义的 tracks 之外的时候，隐式网格 (implicit grid) 会被自动创建。_

下面的例子创建了一个有两行三列的显式网格*。*由于超过显式网格可容纳的六个条目，_此网格中的第三行将是一个隐式网格行轨道 (implicit grid_ row track)

_（注：在容器 div 上用 row 和 column 定义的网格总数，等于 行数乘以列数 个。比如一个容器 div 定义了 2 行 \* 3 列 = 6 个网格，这 6 个就是显式网格，但是假如里面有 8 个 子 div，多出来那 2 个就叫做隐式网格。）_

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

{{ EmbedLiveSample('示例', '500', '330') }}

## 了解更多

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 扩展阅读

- CSS Grid Layout Guide: _[布局的基本概念](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
