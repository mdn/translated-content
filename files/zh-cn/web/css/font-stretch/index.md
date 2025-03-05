---
title: font-stretch
slug: Web/CSS/font-stretch
l10n:
  sourceCommit: 7b029638cf0f82b3e70a3e7c242db001d198c047
---

{{CSSRef}}

**`font-stretch`** [CSS](/zh-CN/docs/Web/CSS) 属性可从字体中选择正常、压缩或扩展的字体外观。

{{EmbedInteractiveExample("pages/css/font-stretch.html")}}

## 语法

```css
/* <font-stretch-css3> 关键字值 */
font-stretch: normal;
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* 百分比值 */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* 全局值 */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: revert-layer;
font-stretch: unset;
```

该属性可指定为单个 `<font-stretch-css3>` 关键字值或单个 {{cssxref("&lt;percentage&gt;")}} 值。

### 值

- `normal`
  - : 指定为普通字体外观。
- `semi-condensed`、`condensed`、`extra-condensed` 和 `ultra-condensed`
  - : 指定比普通字体更紧凑的字体，其中 `ultra-condensed` 为最紧凑的字体。
- `semi-expanded`、`expanded`、`extra-expanded` 和 `ultra-expanded`
  - : 指定比普通字体更扩展的字体，其中 `ultra-expanded` 为扩展程度最大的字体。
- `<percentage>`

  - : 介于 50% 和 200% 之间的 {{cssxref("&lt;percentage&gt;")}} 值（包含两侧）。此属性不允许使用负值。

### 关键字到数值的映射

下表显示了 `<font-stretch-css3>` 关键字值与百分比数值之间的映射关系：

| 关键字            | 百分比 |
| ----------------- | ------ |
| `ultra-condensed` | 50%    |
| `extra-condensed` | 62.5%  |
| `condensed`       | 75%    |
| `semi-condensed`  | 87.5%  |
| `normal`          | 100%   |
| `semi-expanded`   | 112.5% |
| `expanded`        | 125%   |
| `extra-expanded`  | 150%   |
| `ultra-expanded`  | 200%   |

## 描述

某些字体系列提供了额外的字体外观，其中的字符比正常字体窄（*紧凑*外观）或比正常字体宽（*扩展*外观）。

可以使用 `font-stretch` 从此类字体中选择紧凑或扩展字体。如果你使用的字体不提供紧凑或扩展字面，则此属性无效。

### 字体外观选择

为给定的 `font-stretch` 值选择的外观取决于相关字体支持的外观。如果字体不提供与给定值完全匹配的外观，那么小于 100% 的值会映射到较窄的外观，大于或等于 100% 的值会映射到较宽的外观。

下表展示了提供不同百分比的 `font-stretch` 值对两种不同字体的影响：

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
  font-stretch: 50% 200%;
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
  font-stretch: 75% 125%;
}

td {
  border: solid;
  border-width: 1px;
}

#inconsolata td {
  font:
    90px Inconsolata,
    sans-serif;
}
#anek-malayalam td {
  font: 90px "Anek Malayalam";
}
#inconsolata td:nth-child(2),
#anek-malayalam td:nth-child(2) {
  font-stretch: 50%;
}
#inconsolata td:nth-child(3),
#anek-malayalam td:nth-child(3) {
  font-stretch: 62.5%;
}
#inconsolata td:nth-child(4),
#anek-malayalam td:nth-child(4) {
  font-stretch: 75%;
}
#inconsolata td:nth-child(5),
#anek-malayalam td:nth-child(5) {
  font-stretch: 87.5%;
}
#inconsolata td:nth-child(6),
#anek-malayalam td:nth-child(6) {
  font-stretch: 100%;
}
#inconsolata td:nth-child(7),
#anek-malayalam td:nth-child(7) {
  font-stretch: 112.5%;
}
#inconsolata td:nth-child(8),
#anek-malayalam td:nth-child(8) {
  font-stretch: 125%;
}
#inconsolata td:nth-child(9),
#anek-malayalam td:nth-child(9) {
  font-stretch: 150%;
}
#inconsolata td:nth-child(10),
#anek-malayalam td:nth-child(10) {
  font-stretch: 200%;
}
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr id="inconsolata">
      <th scope="row">Inconsolata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
    <tr id="anek-malayalam">
      <th scope="row">Anek Malayalam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('字体外观选择', "100%", "300px")}}

- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) 是一种可变的 google 字体，支持 75% 到 125% 的宽度。低于或高于此范围的值会选择最匹配的字体。
- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) 是一种可变字体，提供从 50% 到 200% 的连续宽度范围。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置字体伸缩百分比

{{EmbedGHLiveSample("css-examples/variable-fonts/font-stretch.html", '100%', 950)}}

## 规范

{{Specifications}}

> **备注：** `font-stretch` 属性最初是在 CSS 2 中定义的，但在 CSS 2.1 中由于缺乏浏览器实现而被取消。在 CSS 3 中，该属性被重新定义。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [文本和字体样式基础](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS 字体](/zh-CN/docs/Web/CSS/CSS_fonts)模块
