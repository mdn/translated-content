---
title: 网格
slug: Glossary/Grid
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

通过设置 CSS 属性 `display: grid;` 可以定义一个 _CSS 网格_。你还可以继续使用 {{cssxref("grid-template-rows")}} 和 {{cssxref("grid-template-columns")}} 属性定义网格的列和行。

使用这些属性定义的网格被称为*显式网格*。

如果开发者将内容放置在显式网格之外，或者依赖自动布局的话，网格法将需要创建额外的行/列{{glossary("grid tracks", "轨道")}}来包含{{glossary("grid item", "网格项目")}}，为此将在隐式网格中创建额外的轨道。当内容添加到了已定义的轨道之外的时候，*隐式网格*会被自动创建。

下面的例子创建了一个有两行三列的*显式网格*。由于超过显式网格可容纳的六个条目，此网格中的*第三行*将是一个*隐式网格*行轨道。

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

## 参见

- [网格布局的基本概念](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- 属性参考：

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
