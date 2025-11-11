---
title: <tr>：表格行元素
slug: Web/HTML/Reference/Elements/tr
l10n:
  sourceCommit: fffabdeeb9a069e40a070dadeedc93298b2aca7e
---

[HTML](/zh-CN/docs/Web/HTML) **`<tr>`** 元素定义了表格中的一行单元格。然后可以使用 {{HTMLElement("td")}}（数据单元格）和 {{HTMLElement("th")}}（标题单元格）元素的组合来建立该行的单元格。

{{InteractiveExample("HTML Demo: &lt;tr&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Alien football stars
  </caption>
  <tr>
    <th scope="col">Player</th>
    <th scope="col">Gloobles</th>
    <th scope="col">Za'taak</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
  <tr>
    <th scope="row">Mia Oolong</th>
    <td>9</td>
    <td>6,219</td>
  </tr>
</table>
```

```css interactive-example
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eee;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

### 已废弃的属性

以下属性已被弃用，不应再使用。下文记录了这些属性，仅供更新现有代码时参考。

- `align` {{deprecated_inline}}
  - : 指定每行单元格的水平对齐方式。可能的{{Glossary("enumerated", "枚举")}}值包括 `left`、`center`、`right`、`justify` 和 `char`。如果支持，`char` 值将根据 [`char`](#char) 属性中定义的字符和 [`charoff`](#charoff) 属性定义的偏移量对文本内容进行对齐。请使用 {{cssxref("text-align")}} CSS 属性代替，因为该属性已被弃用。

- `bgcolor` {{deprecated_inline}}
  - : 定义每行单元格的背景颜色。值是 HTML 颜色；可以是以“`#`”为前缀的 [6 位十六进制 RGB 代码](/zh-CN/docs/Web/CSS/Reference/Values/hex-color)，也可以是[颜色关键字](/zh-CN/docs/Web/CSS/Reference/Values/named-color)。不支持其他 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值。请使用 {{cssxref("background-color")}} CSS 属性代替，因为该属性已被弃用。

- `char` {{deprecated_inline}}
  - : 指定内容与每行单元格中一个字符的对齐方式。当尝试对齐数字或货币值时，典型值包括句号（`.`）。如果 [`align`](#align) 未设置为 `char`，该属性将被忽略。

- `charoff` {{deprecated_inline}}
  - : 指定由 [`char`](#char) 属性指定的对齐字符偏移行单元格内容的字符数。

- `valign` {{deprecated_inline}}
  - : 指定每行单元格的垂直对齐方式。可能的{{Glossary("enumerated", "枚举")}}值包括 `baseline`、`bottom`、`middle` 和 `top`。请使用 {{cssxref("vertical-align")}} CSS 属性代替，因为该属性已被弃用。

## 使用说明

- `<tr>` 可以作为其 {{HTMLElement("table")}} 父元素的直接子元素，但前提是 `<table>` 没有 {{HTMLElement("tbody")}} 子元素，并且只能位于任何 {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}} 和 {{HTMLElement("thead")}} 元素之后。否则，父元素必须是 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 或 {{HTMLElement("tfoot")}} 元素。
- CSS 伪类 {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}} 和 {{cssxref(":last-of-type")}} 通常用于选择所需的行集及其数据和标题单元格（{{HTMLElement("td")}} 和 {{HTMLElement("th")}} 元素）。

## 示例

参见 {{HTMLElement("table")}} 以获取介绍通用标准和最佳实践的完整表格示例。

### 基本行设置

本例演示了一个有四行三列的表格，其中第一列包含行数据单元格的标题。

#### HTML

四个 `<tr>` 元素用于创建四个表格行。每行包含三个单元格——一个标题单元格（{{HTMLElement("th")}}）和两个数据单元格（{{HTMLElement("td")}}）——形成三列。在每个标题单元格上设置的 [`scope`](/zh-CN/docs/Web/HTML/Reference/Elements/th#scope) 属性指定了它们与哪些单元格相关，在本示例中就是与 `row`（行）中的所有数据单元格相关。

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

CSS {{cssxref(":nth-of-type")}} 伪类用于选择每一个“奇数”行，并将这些行的 {{cssxref("background-color")}} 设置为稍暗的色调，从而产生所谓的“斑马条纹”效果。这种交替的背景使表格中的数据行更容易解析和阅读——想象一下有许多行和列，并试图在某一行中找到一些数据的情景。此外，行标题单元格（{{HTMLElement("th")}} 元素）用 {{cssxref("background-color")}} 突出显示，以区别于数据单元格（{{HTMLElement("td")}} 元素）。

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### 结果

{{EmbedLiveSample("基本行设置", 650, 140)}}

### 标题行

本示例扩展了[上一示例](#基本行设置)中的基本表格，在表格的第一行添加了标题行。

#### HTML

我们添加了额外的表格行（`<tr>`）作为第一行，其中的列标题单元格（{{HTMLElement("th")}}）为每列提供了一个标题。我们将这一行放在 {{HTMLElement("thead")}} 分组元素中，以表示这是表格的表头。[`scope`](/zh-CN/docs/Web/HTML/Reference/Elements/th#scope) 属性被添加到该页眉行中的每个表头单元格（`<th>`）中，以明确指定每个表头单元格与其所在列中的所有单元格相关，即使这些单元格位于 {{HTMLElement("tbody")}} 中。

```html
<table>
  <tr>
    <th scope="col">符号</th>
    <th scope="col">代码</th>
    <th scope="col">发音</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

CSS 与[上一示例](#基本行设置)几乎没有变化，只是增加了一些样式来突出显示“标题行”，从而使各列的标题从其他单元格中脱颖而出。

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### 结果

{{EmbedLiveSample("标题行", 650, 170)}}

### 行排序

目前还没有对 {{HTMLElement("table")}} 的行（`<tr>` 元素）进行排序的原生方法。但是可以使用 {{jsxref("Array.prototype.sort()")}}, {{domxref("Node.removeChild")}} 和 {{domxref("Node.appendChild")}} 在 JavaScript 中实现自定 `sort()` 函数，对 {{domxref("HTMLCollection")}} 的 `<tr>` 元素进行排序。

#### HTML

在这个基本表格中使用了 {{HTMLElement("tbody")}} 元素来标记表格的主体部分，并包含三行（{{HTMLElement("tr")}} 元素）数据（{{HTMLElement("td")}} 元素），创建了一列按降序排列的数字。

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

在下面的 JavaScript 代码中，创建的 `sort()` 函数被附加到 {{HTMLElement("tbody")}} 元素上，这样它就能按照数值递增的顺序对表格单元格进行排序，并相应地更新显示内容。

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}
```

#### 结果

{{EmbedLiveSample('行排序', '650', '80')}}

### 点击表头单元格以进行排序

本示例扩展了[上一示例](#行排序)中的基本表格，使排序具有交互性，并可独立于多列。

#### HTML

在表格主体（{{HTMLElement("tbody")}} 元素）中的每一行（`<tr>` 元素）上添加一个额外的数据单元格（{{HTMLElement("td")}} 元素），以创建第二列，按字母升序排列。使用 {{HTMLElement("thead")}} 元素，在主体部分之前添加标题部分，以引入包含表头单元格的标题行（{{HTMLElement("th")}} 元素）。在下面的 JavaScript 代码中使用这些标题单元格，使其可以点击，然后在每次点击激活时执行相应的排序。

```html
<table>
  <thead>
    <tr>
      <th>数字</th>
      <th>字母</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

{{domxref("HTMLDocument", "文档")}}中的每个 {{HTMLElement("table")}} 的每个表头（{{HTMLElement("th")}}元素）都添加了一个点击事件处理程序；它会根据行中包含的数据单元格（{{HTMLElement("td")}} 元素）的内容对 {{HTMLElement("tbody")}} 的所有行（`<tr>` 元素）进行排序。

> [!NOTE]
> 此解决方案假设 {{HTMLElement("td")}} 元素由原始文本填充，没有后代元素。

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}

th {
  background-color: #505050;
  color: #fff;
  cursor: pointer;
}
```

#### 结果

{{EmbedLiveSample('点击表头单元格以进行排序', '650', '100')}}

> [!NOTE]
> 为了保证可用性和无障碍性，每个可排序列的标题单元格都必须可识别为排序按钮，并且每个标题单元格都必须以可视方式定义列当前是按升序还是降序排序，并使用 [`aria-sort`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) 属性。更多信息请参阅 [ARIA 创作实践指南](https://www.w3.org/WAI/ARIA/apg/)的[可排序表格示例](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/)。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        允许使用零个或多个 {{HTMLElement("td")}} 和/或 {{HTMLElement("th")}} 元素；也允许使用{{Glossary("script-supporting element", "脚本支持元素")}}（{{HTMLElement("script")}} 和 {{HTMLElement("template")}}）。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标记是必需的。如果 {{HTMLElement("tr")}} 元素后面紧跟着一个 {{HTMLElement("tr")}} 元素，或者该行是其父表组（{{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 或 {{HTMLElement("tfoot")}}）元素中的最后一个元素，则可以省略结束标记。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        {{HTMLElement("table")}}（仅当表格没有 {{HTMLElement("tbody")}} 子元素时，即便如此，也只能在任何 {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}} 和 {{HTMLElement("thead")}} 元素之后）；否则，父元素必须是 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 或 {{HTMLElement("tfoot")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Row_Role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：HTML 表格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}：其他与表格相关的元素
- {{cssxref("background-color")}}：用于设置单元格背景颜色的 CSS 属性
- {{cssxref("border")}}：用于控制行单元格边框的 CSS 属性
- {{cssxref("text-align")}}：使每行单元格内容水平对齐的 CSS 属性
- {{cssxref("vertical-align")}}：使每行单元格内容垂直对齐的 CSS 属性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：选择特定单元格的伪类
