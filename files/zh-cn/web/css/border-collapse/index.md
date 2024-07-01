---
title: border-collapse
slug: Web/CSS/border-collapse
---

{{CSSRef}}

**`border-collapse`** [CSS](/zh-CN/docs/CSS) 属性是用来决定表格的边框是分开的还是合并的。在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

合并（_collapsed_）模式下，表格中相邻单元格共享边框。在这种模式下，CSS 属性{{ Cssxref("border-style") }} 的值 inset 表现为槽，值 outset 表现为脊。

分隔（*separated）*模式是 HTML 表格的传统模式。相邻单元格都拥有不同的边框。边框之间的距离是通过 CSS 属性 {{cssxref("border-spacing")}} 来确定的。

## 语法

```css
/* Keyword values */
border-collapse: collapse;
border-collapse: separate;

/* Global values */
border-collapse: inherit;
border-collapse: initial;
border-collapse: unset;
```

`border-collapse` 的属性值被定义为一个单独的关键词，可为下面两个值中的一个。

### 值

- `collapse`
  - : 相邻的单元格共用同一条边框（采用 collapsed-border 表格渲染模型）。
- `separate`
  - : 默认值。每个单元格拥有独立的边框（采用 separated-border 表格渲染模型）。

### 正式语法

{{csssyntax}}

## 示例

### 各个浏览器引擎的多彩表格

#### HTML

```html
<table class="separate">
  <caption>
    <code>border-collapse: separate</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ed">Edge</td>
      <td class="tr">EdgeHTML</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">Webkit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
<table class="collapse">
  <caption>
    <code>border-collapse: collapse</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ed">Edge</td>
      <td class="tr">EdgeHTML</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">Webkit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  border-collapse: collapse;
}
.separate {
  border-collapse: separate;
}
table {
  display: inline-table;
  margin: 1em;
  border: dashed 6px;
  border-width: 6px;
}
table th,
table td {
  border: solid 3px;
}
.fx {
  border-color: orange blue;
}
.gk {
  border-color: black red;
}
.ie {
  border-color: blue gold;
}
.tr {
  border-color: aqua;
}
.sa {
  border-color: silver blue;
}
.wk {
  border-color: gold blue;
}
.ch {
  border-color: red yellow green blue;
}
.bk {
  border-color: navy blue teal aqua;
}
.op {
  border-color: red;
}
```

#### 结果

{{ EmbedLiveSample('各个浏览器引擎的多彩表格', 400, 300) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("border-spacing")}}、{{cssxref("border-style")}}
- The `border-collapse` property alters the appearance of the {{htmlelement("table")}} HTML element.
