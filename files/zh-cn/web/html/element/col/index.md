---
title: <col>：表格列元素
slug: Web/HTML/Element/col
l10n:
  sourceCommit: aa55b6b6768e0250b52703f26d44ea3291f725f3
---

{{HTMLSidebar}}

**`<col>`** [HTML](/zh-CN/docs/Web/HTML) 元素在其父 {{HTMLElement("colgroup")}} 元素所代表的列组中定义一列或多列。`<col>` 元素只有作为没有定义 [`span`](/zh-CN/docs/Web/HTML/Element/colgroup#span) 属性的 {{HTMLElement("colgroup")}} 元素的子元素才有效。

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `span`
  - : 指定 `<col>` 元素跨越的连续列数。该值必须是大于 0 的正整数。如果不存在，其默认值为 `1`。

### 弃用的属性

以下属性已被弃用，不应再使用。下文记录了这些属性，供更新现有代码时参考，也仅供参考。

- `align` {{deprecated_inline}}

  - : 指定每列单元格的水平对齐方式。可能的{{Glossary("enumerated", "枚举")}}值有 `left`、`center`、`right`、`justify` 和 `char`。如果支持，`char` 值将根据 [`char`](#char) 属性中定义的字符和 [`charoff`](#charoff) 属性定义的偏移量对文本内容进行对齐。请注意，该属性会覆盖其 {{HTMLElement("colgroup")}} 父元素指定的 [`align`](/zh-CN/docs/Web/HTML/Element/colgroup#align)。使用 {{cssxref("text-align")}} 和 {{htmlelement("th")}} 元素上的 CSS 属性，因为该属性已被弃用。

    > [!NOTE]
    > 在 `<col>` 元素上设置 `text-align` 没有任何作用，因为 `<col>` 没有后代，因此没有元素继承自它。
    >
    > 如果表格没有使用 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，请使用 `td:nth-of-type(an+b)` CSS 选择器。将 `a` 设置为零，将 `b` 设置为表格中列的位置，例如，使用 `td:nth-of-type(2) { text-align: right; }` 来右对齐第二列单元格。
    >
    > 如果表格使用了 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，则可以通过组合适当的 CSS 属性选择器（如 `[colspan=n]`）来达到效果，不过这并非易事。

- `bgcolor` {{deprecated_inline}}

  - : 定义每列单元格的背景颜色。该值是 HTML 颜色；可以是以“`#`”为前缀的 [6 位十六进制 RGB 代码](/zh-CN/docs/Web/CSS/hex-color)，也可以是[颜色关键字](/zh-CN/docs/Web/CSS/named-color)。不支持其他 CSS {{cssxref("color_value", "&lt;color&gt")}} 值。请使用 {{cssxref("background-color")}} CSS 属性代替，因为该属性已被弃用。

- `char` {{deprecated_inline}}

  - : 没有任何作用。其最初目的是指定内容与每列单元格中的一个字符对齐。当试图对齐数字或货币值时，其典型值包括句号（`.`）。如果 [`align`](#align) 未设置为 `char`，该属性将被忽略，但仍将覆盖其 {{HTMLElement("colgroup")}} 父元素指定的 [`char`](/zh-CN/docs/Web/HTML/Element/colgroup#char)。

- `charoff` {{deprecated_inline}}

  - : 没有任何作用。它最初用于指定列单元格内容从 [`char`](#char) 属性指定的对齐字符偏移的字符数。

- `valign` {{deprecated_inline}}

  - : 指定每列单元格的垂直对齐方式。可能的{{Glossary("enumerated", "枚举")}}值有 `baseline`、`bottom`、`middle` 和 `top`。请注意，该属性会覆盖其 {{HTMLElement("colgroup")}} 父元素指定的 [`valign`](/zh-CN/docs/Web/HTML/Element/colgroup#valign)。使用 {{cssxref("vertical-align")}} 和 {{htmlelement("th")}} 元素上的 CSS 属性，因为该属性已被弃用。

    > [!NOTE]
    > 在 `<col>` 元素上设置 `vertical-align` 没有任何作用，因为 `<col>` 没有后代，因此没有元素继承自它。
    >
    > 如果表格没有使用 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，请使用 `td:nth-of-type(an+b)` CSS 选择器。将 `a` 设置为零，将 `b` 设置为表格中列的位置，例如，使用 `td:nth-of-type(2) { vertical-align: middle; }` 将第二列单元格垂直居中。
    >
    > 如果表格使用了 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，则可以通过组合适当的 CSS 属性选择器（如 `[colspan=n]`）来达到效果，不过这并非易事。

- `width` {{Deprecated_Inline}}

  - : 指定每一列的默认宽度。除标准像素值和百分比值外，该属性还可以使用特殊形式 `0*`，这意味着每列的宽度应为容纳该列内容所需的最小宽度。也可以使用相对宽度，如 `5*`。请注意，该属性会覆盖其 {{HTMLElement("colgroup")}} 父元素的指定 [`width`](/zh-CN/docs/Web/HTML/Element/colgroup#width)。请使用 {{cssxref("width")}} CSS 属性代替，因为该属性已被弃用。

## 使用说明

- 在没有 `span` 属性的 {{HTMLElement("colgroup")}} 元素中使用 `<col>` 元素。
- `<col>` 元素不对列进行结构分组，这是 {{HTMLElement("colgroup")}} 元素的作用。
- 只有数量有限的 CSS 属性会影响 `<col>`：
  - {{cssxref("background")}}：各种 `background` 属性将为列中的单元格设置背景。由于列的背景色绘制在表格和列组（{{HTMLElement("colgroup")}}）的顶部，但绘制在行组（{{htmlelement("thead")}}、{{htmlelement("tbody")}} 和 {{htmlelement("tfoot")}}）的背景色之后、行（{{htmlelement("tr")}}）和单个单元格（{{htmlelement("th")}}和 {{htmlelement("td")}}），只有在表格列上方绘制的每个图层都具有透明背景时，应用于表格列的背景才会可见。
  - {{cssxref("border")}}：适用各种 `border` 属性，但前提是 `<table>` 已设置 {{cssxref("border-collapse", "border-collapse: collapse")}}。
  - {{cssxref("visibility")}}：如果某列的值为 `collapse`，则该列的所有单元格都不会渲染，而跨入其他列的单元格则会被剪切。这些列原本占据的空间会被移除。但是，其他列的大小仍按折叠列中的单元格计算。`visibility` 的其他值没有影响。
  - {{cssxref("width")}}：`width` 属性定义了列的最小宽度，如同设置了 {{cssxref("min-width")}}。

## 示例

请参阅 {{HTMLElement("table")}} 获取介绍通用标准和最佳实践的完整表格示例。

本示例演示了一个分为三个 `<col>` 元素的八栏表格。

### HTML

{{HTMLElement("colgroup")}} 元素为基本表格提供结构，创建一个隐式列组。在 `<colgroup>` 中包含三个 `<col>` 元素，从而创建三个可添加样式的列。[`span`](#span) 属性指定了每个 `<col>` 应跨越的表格列数（省略时默认为 `1`），使属性可在每个 `<col>` 中的列之间共享。

```html
<table>
  <caption>
    个人每周活动
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <tr>
    <th>时段</th>
    <th>周一</th>
    <th>周二</th>
    <th>周三</th>
    <th>周四</th>
    <th>周五</th>
    <th>周六</th>
    <th>周日</th>
  </tr>
  <tr>
    <th>上午</th>
    <td>打扫房间</td>
    <td>足球训练</td>
    <td>舞蹈课</td>
    <td>历史课</td>
    <td>买饮料</td>
    <td>自习</td>
    <td>自由时间</td>
  </tr>
  <tr>
    <th>下午</th>
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

我们使用 CSS 代替弃用的 HTML 属性来为列提供背景颜色，并对齐单元格内容：

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
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；这是一个{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，不可以有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        只能是 {{HTMLElement("colgroup")}}，但可以隐式定义，因为其起始标记不是强制性的。{{HTMLElement("colgroup")}} 不可以包含 <a href="/zh-CN/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> 属性。
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
- {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他与表格相关的元素。
- {{cssxref("background-color")}}：用于设置每列单元格背景颜色的 CSS 属性
- {{cssxref("border")}}：用于控制列单元格边框的 CSS 属性
- {{cssxref("text-align")}}：用于水平对齐各列单元格内容的 CSS 属性
- {{cssxref("vertical-align")}}：用于垂直对齐各列单元格内容的 CSS 属性
- {{cssxref("visibility")}}：隐藏列单元格的 CSS 属性
- {{cssxref("width")}}：用于控制每列默认宽度的 CSS 属性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：用于选择所需列单元格的 CSS 伪类
