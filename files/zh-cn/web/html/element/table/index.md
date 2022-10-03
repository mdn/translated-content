---
title: <table>
slug: Web/HTML/Element/table
---

{{HTMLRef}}

**HTML**的 **`table` **元素表示表格数据 — 即通过二维数据表表示的信息。

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="https://developer.mozilla.org/en-US/docs/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a
          href="https://developer.mozilla.org/en-US/docs/HTML/Content_categories#Flow_content"
          >流动内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <div>
          <p>按照这个顺序：</p>
          <ul>
            <li>一个可选的 {{HTMLElement("caption")}} 元素</li>
            <li>零个或多个的 {{HTMLElement("colgroup")}} 元素</li>
            <li>一个可选的 {{HTMLElement("thead")}} 元素</li>
            <li>
              下列任意一个：
              <ul>
                <li>零个或多个 {{HTMLElement("tbody")}}</li>
                <li>零个或多个 {{HTMLElement("tr")}}</li>
              </ul>
            </li>
            <li>一个可选的 {{HTMLElement("tfoot")}} 元素</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何支持<a href="/zh-CN/docs/HTML/Content_categories#Flow_content"
          >流内容</a
        >的元素
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

表格标签支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。下面列出的属性现在已经弃用（请使用 CSS 代替）。

- {{htmlattrdef("align")}} {{Deprecated_inline}}
  - : 这个枚举属性指定了包含在文档中的表格必须如何对齐。有如下值：

    - left，表格将在文档左侧显示；
    - center，表格将在文档中央显示；
    - right，表格将在文档右侧显示；

    > **备注：** 不要使用这个属性，它已经不赞成被使用。{{HTMLElement("table")}} 元素应该使用[CSS](/zh-CN/docs/CSS) 制定样式。设置 {{cssxref("margin-left")}} 、{{cssxref("margin-right")}} 为 `auto` ( 或者 {{cssxref("margin")}} `设置为 0 auto`) 来实现类似于 align 属性的效果。
    >
    > Firefox 4 之前的版本，在 quirks mode 模式下它还支持 `middle`，`absmiddle` 和近似于 `center` 的 `abscenter`。
- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}
  - : 这个属性定义了表格的背景颜色。它是一个 6 位的十六进制编码，定义于 [sRGB](http://www.w3.org/Graphics/Color/sRGB)，需要加上'#'作为前缀。当然也可以使用下面已经被预先定义的字符串，来表示常用的 16 种颜色。

    > **备注：** 不要使用这个属性，该属性已废弃，{{HTMLElement("table")}} 元素应当使用 [CSS](/zh-CN/docs/CSS) 定制样式。 [CSS](/zh-CN/docs/CSS) 中的 {{cssxref("background-color")}} 属性能够和 bgcolor 属性达到一样的效果。
- {{htmlattrdef("border")}} {{Deprecated_inline}}
  - : 这个整型元素使用像素，定义了表格边框的大小。如果设置为 0，这意味着{{htmlattrxref("frame", "table")}} 属性被设置为空。如果设置为 1，表示表格具有 1px 大小的边框。

    > **备注：** 不要使用这个属性，该属性已废弃，{{HTMLElement("table")}} 元素应当使用 [CSS](/zh-CN/docs/CSS) 定制样式。 [CSS](/zh-CN/docs/CSS) 属性 {{cssxref("border")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}} 和 {{cssxref("border-style")}} 可实现相同效果。

- {{htmlattrdef("cellpadding")}} {{Deprecated_inline}}
  - : 这个属性定义了表格单元的内容和边框之间的空间。如果它是一个像素长度单位，这个像素将被应用到所有的四个侧边；如果它是一个百分比的长度单位，内容将被作为中心，总的垂直（上和下）长度将代表这个百分比。这同样适用于总的水平（左和右）空间。

    > **备注：** 不要使用这个属性，因为它已经被废弃。 {{HTMLElement("table")}} 元素应该使用 [CSS](/zh-CN/docs/CSS) 定制样式。在{{HTMLElement("table")}} 元素上使用 [CSS](/zh-CN/docs/CSS) 属性值为 collapse 的 {{cssxref("border-collapse")}} 属性，在 {{HTMLElement("td")}} 元素上使用属性 {{cssxref("padding")}}，以达到类似于 cellpadding 的效果。
- {{htmlattrdef("cellspacing")}} {{Deprecated_inline}}
  - : 这个属性（使用百分比或像素）定义了两个单元格之间空间的大小（从水平和垂直方向上），包括了表格的顶部与第一行的单元格，表的左边与第一列单元格，表的右边与最后一列的单元格，表的底部与最后一行单元格之间的空间。

    > **备注：** 不要使用这个属性，因为它已经被废弃。{{HTMLElement("table")}} 元素应该使用 [CSS](/zh-CN/docs/CSS) 定制样式。在 {{HTMLElement("table")}} 元素上使用 CSS 的属性 {{cssxref("border-spacing")}} ，以达到类似于 cellspacing 的效果。
- {{htmlattrdef("frame")}} {{Deprecated_inline}}
  - : 这个枚举属性定义了包围在表格周围的框架的哪个边必须显示。它可能有下列值：
  
    - above
    - below
    - hsides
    - vsides
    - lhs
    - rhs
    - border
    - box
    - void

    > **备注：** 不要使用这个属性，因为它已经被废弃。{{HTMLElement("table")}} 元素应该使用 [CSS](/zh-CN/docs/CSS) 定制样式。在 {{HTMLElement("table")}} 元素上使用 CSS 的属性 {{cssxref(" border-style ")}} 和 {{cssxref("border-width")}} ，以达到类似于 frame 的效果。

- {{htmlattrdef("rules")}} {{Deprecated_inline()}}
  - : 这个枚举属性定义了在一个表格中规则的显示位置。它可以有以下值：:

    - none，这表明没有规格将被显示；这是默认的值；
    - groups，这将使规则只显示在行组（row groups，通过 {{HTMLElement("thead")}} ， {{HTMLElement("tbody")}} 和 {{HTMLElement("tfoot")}} 元素定义）和列组（column groups，通过{{HTMLElement("col")}} 和 {{HTMLElement("colgroup")}} 元素定义）之间
    - rows，这将使规则在行之间显示；
    - columns，这将使规则在列之间显示；
    - all，这将使规则在列和行之间显示；

    > **备注：** 规则的样式是依赖浏览器的（browser-dependant），并且 不能被修改。
    >
    > **不要使用这个属性，因为它已经被废弃。**规则应该使用 [CSS](/zh-CN/docs/CSS) 定义和设计样式。使用 {{cssxref("border")}} 属性，在适当的 {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}} 或 {{HTMLElement("colgroup")}} 元素上。
- {{htmlattrdef("summary")}} {{Deprecated_inline}}
  - : 该属性定义了一个替代文本，当表格无法在用户代理中显示的时候用来描述表格。通常，它被用来为残障人士提供可用性，比如，盲人使用盲文屏幕（Braille screen）浏览网页，从中获取信息。如果要想对于非视力受限的人来说也可以提供作用，考虑使用 {{HTMLElement("caption")}} 代替。summary 属性不是强制性的，当一个 {{HTMLElement("caption")}} 发挥它应有的作用时，可以省略 summary 属性。

    > **备注：** **不要使用这个属性，因为它已经被废弃。** 作为替代，选择其中一种方法为表格添加描述：
    >
    > - Use prose around the table (this method is less semantic).
    > - 在表格的 {{HTMLElement("caption")}} 元素中添加描述。
    > - 在表格的 {{HTMLElement("caption")}} 元素中，添加一个带有描述的 {{HTMLElement("details")}} 元素。
    > - 将 {{HTMLElement("table")}} 元素包含在一个{{HTMLElement("figure")}} 元素中，并且在旁边添加散文（prose）描述。
    > - 将 {{HTMLElement("table")}} 元素包含在一个{{HTMLElement("figure")}} 元素中，并且在 {{HTMLElement("thead")}} 元素中添加散文（prose）描述。
    > - 调整表格，以便不需要这样的描述 (比如，使用 {{HTMLElement("th")}} 和 {{HTMLElement("thead")}} 元素)。

- {{htmlattrdef("width")}} {{Deprecated_inline}}
  - : 该属性定义了表格的宽度。宽度可能是一个像素或者是一个百分比值，宽度的百分比值将被定义为表格容器的宽度。

    > **备注：** 不要使用这个属性，因为它已经被废弃。规则应该使用 [CSS](/zh-CN/docs/CSS) 定义和设计样式。使用 {{cssxref("width")}} 属性代替。

## 示例

### 简单的表格

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

{{EmbedLiveSample('简单的表格', '100%', '100')}}

### 更多例子

```html
<p>Simple table with header</p>
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

<p>Table with thead, tfoot, and tbody</p>
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
</table>

<p>Table with colgroup</p>
<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>

<p>Table with colgroup and col</p>
<table>
  <colgroup>
    <col class="column1">
    <col class="columns2plus3" span="2">
  </colgroup>
  <tr>
    <th>Lime</th>
    <th>Lemon</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Green</td>
    <td>Yellow</td>
    <td>Orange</td>
  </tr>
</table>

<p>Simple table with caption</p>
<table>
  <caption>Awesome caption</caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>
```

```css hidden
table
{
border-collapse: collapse;
border-spacing: 0px;
}
table, th, td
{
padding: 5px;
border: 1px solid black;
}
```

{{EmbedLiveSample('更多例子', '100%', '700')}}

## Accessibility concerns

### Captions

By supplying a {{HTMLElement("caption")}} element whose value clearly and concisely describes the table's purpose, it helps the people decide if they need to read the rest of the table content or skip over it.

This helps people navigating with the aid of assistive technology such as a screen reader, people experiencing low vision conditions, and people with cognitive concerns.

- [MDN Adding a caption to your table with \<caption>](/zh-CN/docs/Learn/HTML/Tables/Advanced#Adding_a_caption_to_your_table_with_<caption>)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Scoping rows and columns

The {{htmlattrxref("scope", "th")}} attribute on header elements is redundant in simple contexts, because scope is inferred. However, some assistive technologies may fail to draw correct inferences, so specifying header scope may improve user experiences. In complex tables, scope can be specified so as to provide necessary information about the cells related to a header.

#### Example

```html
<table>
  <caption>Color names and values</caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```

Providing a declaration of `scope="col"` on a {{HTMLElement("th")}} element will help describe that the cell is at the top of a column. Providing a declaration of `scope="row"` on a {{HTMLElement("td")}} element will help describe that the cell is the first in a row.

- [MDN Tables for visually impaired users](/zh-CN/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users)
- [Tables with two headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tables with irregular headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Complicated tables

Assistive technology such as screen readers may have difficulty parsing tables that are so complex that header cells can’t be associated in a strictly horizontal or vertical way. This is typically indicated by the presence of the {{htmlattrxref("colspan", "td")}} and {{htmlattrxref("rowspan", "td")}} attributes.

Ideally, consider alternate ways to present the table's content, including breaking it apart into a collection of smaller, related tables that don't have to rely on using the `colspan` and `rowspan` attributes. In addition to helping people who use assistive technology understand the table's content, this may also benefit people with cognitive concerns who may have difficulty understanding the associations the table layout is describing.

If the table cannot be broken apart, use a combination of the {{htmlattrxref("id")}} and {{htmlattrxref("headers", "td")}} attributes to programmatically associate each table cell with the header(s) the cell is associated with.

- [MDN Tables for visually impaired users](/zh-CN/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users)
- [Tables with multi-level headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
- [Creating a bar chart from a HTML table](http://www.coding-dude.com/wp/html5/bar-chart-html/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 相关

- 其它表格相关的 HTML 元素：{{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- 可能特别有用的关于设定表格元素样式的 CSS 属性：

  - {{cssxref("width")}} 控制表格的宽度；
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} 控制单元格边框，规则和框架方面；
  - {{cssxref("margin")}} 和{{cssxref("padding")}} 设定特定的单元格内容样式；
  - {{cssxref("text-align")}} 和{{cssxref("vertical-align")}} 定义文本和单元格内容的对齐方式。
