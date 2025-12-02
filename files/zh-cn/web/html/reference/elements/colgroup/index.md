---
title: <colgroup>：表格列组元素
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: aa55b6b6768e0250b52703f26d44ea3291f725f3
---

**`<colgroup>`** [HTML](/zh-CN/docs/Web/HTML) 元素定义了表格中的一组列。

{{InteractiveExample("HTML Demo: &lt;colgroup&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Superheros and sidekicks
  </caption>
  <colgroup>
    <col />
    <col span="2" class="batman" />
    <col span="2" class="flash" />
  </colgroup>
  <tr>
    <td></td>
    <th scope="col">Batman</th>
    <th scope="col">Robin</th>
    <th scope="col">The Flash</th>
    <th scope="col">Kid Flash</th>
  </tr>
  <tr>
    <th scope="row">Skill</th>
    <td>Smarts, strong</td>
    <td>Dex, acrobat</td>
    <td>Super speed</td>
    <td>Super speed</td>
  </tr>
</table>
```

```css interactive-example
.batman {
  background-color: #d7d9f2;
}

.flash {
  background-color: #ffe8d4;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
}

td {
  text-align: center;
}
```

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `span`
  - : 指定 `<col>` 元素跨列的连续列数。该值必须是大于 0 的正整数。如果不存在，其默认值为 `1`。

    > [!NOTE]
    > 如果 `<colgroup>` 中存在一个或多个 {{HTMLElement("col")}} 元素，则不允许使用 `span` 属性。

### 弃用的属性

以下属性已被弃用，不应再使用。下文记录了这些属性，供更新现有代码时参考，也仅供参考。

- `align` {{deprecated_inline}}
  - : 指定每个列组单元格的水平对齐方式。可能的{{Glossary("enumerated", "枚举")}}值有 `left`、`center`、`right`、`justify` 和 `char`。如果支持，`char` 值将根据 [`char`](#char) 属性中定义的字符和 [`charoff`](#charoff) 属性定义的偏移量对文本内容进行对齐。请注意，后代 {{HTMLElement("col")}} 元素可以使用自己的 [`align`](/zh-CN/docs/Web/HTML/Reference/Elements/col#align) 属性覆盖该值。使用 {{cssxref("text-align")}} 和 {{htmlelement("th")}} 元素上的 CSS 属性，因为该属性已被弃用。

    > [!NOTE]
    > 在 `<colgroup>` 元素上设置 `text-align` 没有任何作用，因为 {{HTMLElement("td")}} 和 {{HTMLElement("th")}} 元素不是 `<colgroup>` 元素的后代，因此它们不能从该元素继承。
    >
    > 如果表格没有使用 [`colspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#colspan) 属性，则在每列使用 `td:nth-of-type(an+b)` CSS 选择器，其中 `a` 为表格中列的总数，`b` 为列在表格中的序号位置，例如 `td:nth-of-type(7n+2) { text-align: right; }` 可右对齐第二列单元格。
    >
    > 如果表格使用了 [`colspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#colspan) 属性，则可以通过组合适当的 CSS 属性选择器（如 `[colspan=n]`）来达到效果，不过这并非易事。

- `bgcolor` {{deprecated_inline}}
  - : 定义每列单元格的背景颜色。该值是 HTML 颜色；可以是以“`#`”为前缀的 [6 位十六进制 RGB 代码](/zh-CN/docs/Web/CSS/Reference/Values/hex-color)，也可以是[颜色关键字](/zh-CN/docs/Web/CSS/Reference/Values/named-color)。不支持其他 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值。请使用 {{cssxref("background-color")}} CSS 属性代替，因为该属性已被弃用。

- `char` {{deprecated_inline}}
  - : 没有任何作用。其最初目的是指定内容与每列单元格中的一个字符对齐。当试图对齐数字或货币值时，其典型值包括句号（`.`）。如果 [`align`](#align) 未设置为 `char`，该属性将被忽略，但它仍将作为默认值用于属于该列组的 {{HTMLElement("col")}} 元素的 [`align`](/zh-CN/docs/Web/HTML/Reference/Elements/col#align)。

- `charoff` {{deprecated_inline}}
  - : 没有任何作用。它最初用于指定列单元格内容从 [`char`](#char) 属性指定的对齐字符偏移的字符数。

- `valign` {{deprecated_inline}}
  - : 指定每个列组单元格的垂直对齐方式。可能的{{Glossary("enumerated", "枚举")}}值有 `baseline`、`bottom`、`middle` 和 `top`。请注意，后代 {{HTMLElement("col")}} 元素可以使用自己的 [`valign`](/zh-CN/docs/Web/HTML/Reference/Elements/col#valign) 属性覆盖此值。使用 {{cssxref("vertical-align")}} 和 {{htmlelement("th")}} 元素上的 CSS 属性，因为该属性已被弃用。

    > [!NOTE]
    > 在 `<colgroup>` 元素上设置 `vertical-align` 没有任何作用，因为 {{HTMLElement("td")}} 和 {{HTMLElement("th")}} 元素不是 `<colgroup>` 元素的后代，因此它们不能从该元素继承。
    >
    > 如果表格没有使用 [`colspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#colspan) 属性，请在每列使用 [`td:nth-of-type()`](/zh-CN/docs/Web/CSS/Reference/Selectors/:nth-of-type) CSS 选择器，例如，`td:nth-of-type(2) { vertical-align: middle; }` 使第二列单元格垂直居中。
    >
    > 如果表格使用了 [`colspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#colspan) 属性，则可以通过组合适当的 CSS 属性选择器（如 `[colspan=n]`）来达到效果，不过这并非易事。

- `width` {{deprecated_inline}}
  - : 该属性为当前列组中的每一列指定默认宽度。除标准像素值和百分比值外，该属性还可以使用特殊形式 `0*`，这意味着组中每一列的宽度应为容纳该列内容所需的最小宽度。也可以使用相对宽度，如 `0.5*`。请注意，后代 {{HTMLElement("col")}} 元素可以使用自己的 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/col#width) 属性覆盖此值。请使用 {{cssxref("width")}} CSS 属性代替，因为该属性已被弃用。

## 使用说明

- `<colgroup>` 应出现在 {{HTMLElement("table")}} 内，任何 {{HTMLElement("caption")}} 元素（如果使用）之后，但在任何 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}} 和 {{HTMLElement("tr")}} 元素之前。
- 只有数量有限的 CSS 属性会影响 `<colgroup>`：
  - {{cssxref("background")}}：各种 `background` 属性将为列组中的单元格设置背景。由于列组的背景色绘制在表格顶部，而背景色绘制在列（{{htmlelement("col")}}）和行组（{{htmlelement("thead")}}、{{htmlelement("tbody")}} 和 {{htmlelement("tfoot")}}）上。只有在表格列组上绘制的每个图层都具有透明背景时，应用于表格列组的背景才会可见。
  - {{cssxref("border")}}：适用各种 `border` 属性，但前提是 `<table>` 已设置 {{cssxref("border-collapse", "border-collapse: collapse")}}。
  - {{cssxref("visibility")}}：如果为列组设置 `collapse` 值，则该列组中列的所有单元格都不会被渲染，而跨入其他列的单元格则会被剪切。列组中的这些列原本占据的空间会被移除。但是，其他列的大小仍然按照列组中被折叠列的单元格计算。`visibility` 的其他值没有影响。
  - {{cssxref("width")}}：`width` 属性定义了列组中的列的最小宽度，如同设置了 {{cssxref("min-width")}}。

## 示例

请参阅 {{HTMLElement("table")}} 获取介绍通用标准和最佳实践的完整表格示例。

本示例演示了一个七列表格，分为两个跨多列的 `<colgroup>` 元素。

### HTML

两个 `<colgroup>` 元素用于通过创建列组来构建基本表格。每个列组中的列数由 [`span`](#span) 属性指定。

```html
<table>
  <caption>
    个人每周活动
  </caption>
  <colgroup span="5" class="weekdays"></colgroup>
  <colgroup span="2" class="weekend"></colgroup>
  <tr>
    <th>周一</th>
    <th>周二</th>
    <th>周三</th>
    <th>周四</th>
    <th>周五</th>
    <th>周六</th>
    <th>周日</th>
  </tr>
  <tr>
    <td>打扫房间</td>
    <td>足球训练</td>
    <td>舞蹈课</td>
    <td>历史课</td>
    <td>买饮料</td>
    <td>自习</td>
    <td>自由时间</td>
  </tr>
  <tr>
    <td>瑜伽</td>
    <td>棋类俱乐部</td>
    <td>见朋友</td>
    <td>体操</td>
    <td>生日派对</td>
    <td>钓鱼之旅</td>
    <td>自由时间</td>
  </tr>
</table>
```

### CSS

分组列可用于使用 CSS 直观地突出显示结构：

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
  text-align: center;
}

.weekdays {
  background-color: #d7d9f2;
}

.weekend {
  background-color: #ffe8d4;
}
```

```css hidden
table {
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### 结果

{{EmbedLiveSample('示例', 650, 170)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>如果存在 <a href="#span"><code>span</code></a> 元素：无。<br />如果不存在属性：零个或多个 {{HTMLElement("col")}} 元素。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>如果 {{HTMLElement("col")}} 元素的第一个子元素是 {{HTMLElement("col")}}，并且其前面没有省略结束标签的 {{HTMLElement("colgroup")}}，则可以省略开始标签。<br />如果结束标签后面没有空格或注释，则可以省略结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        {{HTMLElement("table")}} 元素。{{HTMLElement("colgroup")}} 必须出现在任何 {{HTMLElement("caption")}} 元素之后，而在任何 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}} 和 {{HTMLElement("tr")}} 元素之前。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [学习区：HTML 表格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他与表格相关的元素。
- {{cssxref("background-color")}}：用于设置每个列组单元格背景颜色的 CSS 属性
- {{cssxref("border")}}：用于控制列组单元格边框的 CSS 属性
- {{cssxref("text-align")}}：用于水平对齐各列组单元格内容的 CSS 属性
- {{cssxref("vertical-align")}}：用于垂直对齐各列组单元格内容的 CSS 属性
- {{cssxref("visibility")}}：用于隐藏（或显示）列组单元格的 CSS 属性
- {{cssxref("width")}}：用于控制列组中每一列默认宽度的 CSS 属性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：用于选择所需列单元格的 CSS 伪类
