---
title: 网格轨道
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

**网格轨道**是两条{{glossary("grid lines","网格线")}}之间的空间。它们通过使用属性 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 或者简写属性 {{cssxref("grid")}} 和 {{cssxref("grid-template")}} 在*显式网格*中定义。也可以通过将网格项目定位到显式网格创建的轨道之外，以在*隐式网格*中创建轨道。

下图展示该网格中的第一个行轨道（上色部分的空间）。

![显示一个网格轨道的图片](1_grid_track.png)

## 显式网格中的轨道大小

当使用 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 定义网格轨道时，你可以使用任何长度单位，也可以使用弹性单位 `fr` 来表示网格容器中可用空间的一部分。

## 示例

下面的例子演示了一个三列轨道的网格，第一列 200px，第二列 1fr，第三列 3fr。网格容器中的可用空间减去 200px 后，剩余空间被分成 4 份，1 份给第二列，3 份给第三列。

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

{{ EmbedLiveSample('示例', '500', '230') }}

## 隐式网格中的轨道大小

隐式网格中创建的轨道默认为自动大小，但可以通过 {{cssxref("grid-auto-rows")}} 和 {{cssxref("grid-auto-columns")}} 属性来定义这些轨道的大小。

## 参见

- [网格布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [CSS 网格布局规范中网格轨道的定义](https://drafts.csswg.org/css-grid/#grid-track-concept)
- 属性参考
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid-auto-rows")}}
  - {{cssxref("grid-auto-columns")}}
