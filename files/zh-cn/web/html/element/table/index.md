---
title: <table>：表格元素
slug: Web/HTML/Element/table
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<table>`** 元素表示表格数据——即在一个由包含数据的行和列组成的二维表格中呈现的信息。

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        按照这个顺序：
        <ol>
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
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何支持流式内容的元素
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Table_Role"
            >table</a
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
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

此元素包含所有的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

### 弃用的属性

- `align` {{Deprecated_inline}}

  - : 这个[枚举](/zh-CN/docs/Glossary/Enumerated)属性指定了包含在文档中的表格必须如何对齐。可能含有如下值：

    - `left`：表格将在文档左侧显示；
    - `center`：表格将在文档中央显示；
    - `right`：表格将在文档右侧显示；

    设置 {{cssxref("margin-left")}}、{{cssxref("margin-right")}} 为 `auto`，或者将 {{cssxref("margin")}} 设置为 `0 auto` 来实现类似于 align 属性的效果。

- `bgcolor` {{Deprecated_inline}}

  - : 表格的背景颜色。它是一个 [6 位的十六进制 RGB 编码](/zh-CN/docs/Web/CSS/hex-color)，以 `'#'` 作为前缀。当然也可以使用下面已经被预先定义的[颜色关键字](/zh-CN/docs/Web/CSS/named-color)。

    为了实现相似的效果，可以使用 CSS 属性 {{cssxref("background-color")}}。

- `border` {{Deprecated_inline}}

  - : 这个整型属性定义了环绕表格外部的框的大小。如果设置为 0，这意味着 [`frame`](#frame) 属性被设置为空。

    为了实现相似的效果，可以使用 CSS 简写属性 {{cssxref("border")}}。

- `cellpadding` {{Deprecated_inline}}

  - : 这个属性定义了一个单元格的内容和它的边框之间的空间，无论显示与否。如果 cellpadding 的长度是用像素定义的，这个像素大小的空间将被应用到单元格内容的所有四边。如果长度是用百分比值定义的，内容将被居中，总的垂直空间（顶部和底部）将代表这个值。对于总的水平空间（左边和右边）也是如此。

    为了实现相似的效果，可以在 `<table>` 元素上使用属性值为 collapse 的 {{cssxref("border-collapse")}} 属性，在 {{HTMLElement("td")}} 元素上使用属性 {{cssxref("padding")}}。

- `cellspacing` {{Deprecated_inline}}

  - : 这个属性定义了水平和垂直方向上两个单元格之间空间的大小，使用百分比或像素，包括了表格的顶部与第一行的单元格、表的左边与第一列单元格、表的右边与最后一列的单元格、表的底部与最后一行单元格之间的空间。

    为了实现相似的效果，可以在 `<table>` 元素上使用 CSS 属性 {{cssxref("border-spacing")}}。`border-spacing` 在 {{cssxref("border-collapse")}} 设置为 collapse 时将无效。

- `frame` {{Deprecated_inline}}

  - : 这个枚举属性定义了包围在表格周围的框架的哪个边必须显示。

    为了实现相似的效果，可以使用 CSS 属性 {{cssxref("border-style")}} 和 {{cssxref("border-width")}}。

- `rules` {{Deprecated_inline}}

  - : 这个枚举属性定义了在一个表格中分隔线的显示位置。它可以有以下值：

    - `none`，这表明没有分隔线将被显示；这是默认的值；
    - `groups`，这将使得分隔线只显示在行组（row group，通过 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 和 {{HTMLElement("tfoot")}} 元素定义）和列组（column group，通过 {{HTMLElement("col")}} 和 {{HTMLElement("colgroup")}} 元素定义）之间
    - `rows`，这将使得分隔线在行之间显示；
    - `cols`，这将使得分隔线在列之间显示；
    - `all`，这将使得分隔线在列和行之间显示；

    为了实现相似的效果，可以在适当的 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("col")}} 或 {{HTMLElement("colgroup")}} 元素上使用 {{cssxref("border")}} 属性。

- `summary` {{Deprecated_inline}}
  - : 该属性定义了概括表格内容的替代文本。请使用 {{htmlelement("caption")}} 元素代替。
- `width` {{Deprecated_inline}}
  - : 该属性定义了表格的宽度。请使用 CSS {{cssxref("width")}} 属性代替。

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

### 更多简单示例

```html
<p>含有表头的表格</p>
<table>
  <tr>
    <th>姓</th>
    <th>名</th>
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

<p>含有表头、表尾和表格主体的表格</p>
<table>
  <thead>
    <tr>
      <th>表头内容 1</th>
      <th>表头内容 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>表格主体内容 1</td>
      <td>表格主体内容 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>表尾内容 1</td>
      <td>表尾内容 2</td>
    </tr>
  </tfoot>
</table>

<p>有列组的表格</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>国家</th>
    <th>首都</th>
    <th>人口数量</th>
    <th>语言</th>
  </tr>
  <tr>
    <td>美国</td>
    <td>华盛顿</td>
    <td>3.09 亿</td>
    <td>英语</td>
  </tr>
  <tr>
    <td>瑞典</td>
    <td>斯德哥尔摩</td>
    <td>900 万</td>
    <td>瑞典语</td>
  </tr>
</table>

<p>有列组和列的表格</p>
<table>
  <colgroup>
    <col style="background-color: #0f0" />
    <col span="2" />
  </colgroup>
  <tr>
    <th>青柠</th>
    <th>柠檬</th>
    <th>橘子</th>
  </tr>
  <tr>
    <td>绿色</td>
    <td>黄色</td>
    <td>橙色</td>
  </tr>
</table>

<p>有标题的简单表格</p>
<table>
  <caption>
    美妙的标题
  </caption>
  <tr>
    <td>美妙的数据</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample('更多简单示例', '100%', '700')}}

### 表格排序

#### 对表格的行进行排序

没有原生的方法对 HTML 表格的行（[`<tr>`](/zh-CN/docs/Web/HTML/Element/tr)元素）进行排序。但是通过使用 [`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、[`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)、[`Node. removeChild()`](/zh-CN/docs/Web/API/Node/removeChild) 和 [`Node.appendChild()`](/zh-CN/docs/Web/API/Node/appendChild)，你可以实现你自己的 `sort()` 函数来对 `<tr>` 元素的[`HTMLCollection`](/zh-CN/docs/Web/API/HTMLCollection) 进行排序。

在下面的示例中，你可以看到具体如何这样做。我们把这个自定义方法附加到 \<tbody> 元素上，这样它就会按照数值增加的顺序对表格单元格进行排序，并更新显示内容以适应需要。

##### HTML

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

##### JavaScript

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

##### 结果

{{EmbedLiveSample('对表格的行进行排序', '100%', '100')}}

#### 通过点击 th 元素对行进行排序

下面的示例给 `document` 中每个 `<table>` 的每个 `<th>` 元素添加了一个事件处理程序；它对所有 `<tbody>` 的行进行排序，排序的基础是行中包含的 `td` 单元格。

> **备注：** 这个解决方案假设 `<td>` 元素是由原始文本填充的，没有子元素。

##### HTML

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

##### JavaScript

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

##### 结果

{{EmbedLiveSample('通过点击 th 元素对行进行排序', '100%', '100')}}

### 在小空间展示大型表格

网络上表格的一个普遍问题是，当内容量很大时，它们在小屏幕上的原生效果并不好，而且使它们可滚动的方法并不明显，特别是当标记可能来自 CMS，无法添加一个包装器时。

这个例子提供了一种在小空间中显示表格的方法。我们隐藏了 HTML 内容，因为它非常大，而且没有什么特别之处。在这个例子中，研究其 CSS 代码更有用。

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> 等于：
      <th>2<sup>3</sup> 等于：
      <th>3<sup>3</sup> 等于：
      <th>4<sup>3</sup> 等于：
      <th>5<sup>3</sup> 等于：
      <th>6<sup>3</sup> 等于：
      <th>7<sup>3</sup> 等于：
  <tbody>
    <tr>
      <td>row 1: 1
      <td>row 1: 8
      <td>row 1: 27
      <td>row 1: 64
      <td>row 1: 125
      <td>row 1: 216
      <td>row 1: 343
    <tr>
      <td>row 2: 1
      <td>row 2: 8
      <td>row 2: 27
      <td>row 2: 64
      <td>row 2: 125
      <td>row 2: 216
      <td>row 2: 343
    <tr>
      <td>row 3: 1
      <td>row 3: 8
      <td>row 3: 27
      <td>row 3: 64
      <td>row 3: 125
      <td>row 3: 216
      <td>row 3: 343
    <tr>
      <td>row 4: 1
      <td>row 4: 8
      <td>row 4: 27
      <td>row 4: 64
      <td>row 4: 125
      <td>row 4: 216
      <td>row 4: 343
    <tr>
      <td>row 5: 1
      <td>row 5: 8
      <td>row 5: 27
      <td>row 5: 64
      <td>row 5: 125
      <td>row 5: 216
      <td>row 5: 343
    <tr>
      <td>row 6: 1
      <td>row 6: 8
      <td>row 6: 27
      <td>row 6: 64
      <td>row 6: 125
      <td>row 6: 216
      <td>row 6: 343
    <tr>
      <td>row 7: 1
      <td>row 7: 8
      <td>row 7: 27
      <td>row 7: 64
      <td>row 7: 125
      <td>row 7: 216
      <td>row 7: 343
    <tr>
      <td>row 8: 1
      <td>row 8: 8
      <td>row 8: 27
      <td>row 8: 64
      <td>row 8: 125
      <td>row 8: 216
      <td>row 8: 343
    <tr>
      <td>row 9: 1
      <td>row 9: 8
      <td>row 9: 27
      <td>row 9: 64
      <td>row 9: 125
      <td>row 9: 216
      <td>row 9: 343
    <tr>
      <td>row 10: 1
      <td>row 10: 8
      <td>row 10: 27
      <td>row 10: 64
      <td>row 10: 125
      <td>row 10: 216
      <td>row 10: 343
    <tr>
      <td>row 11: 1
      <td>row 11: 8
      <td>row 11: 27
      <td>row 11: 64
      <td>row 11: 125
      <td>row 11: 216
      <td>row 11: 343
    <tr>
      <td>row 12: 1
      <td>row 12: 8
      <td>row 12: 27
      <td>row 12: 64
      <td>row 12: 125
      <td>row 12: 216
      <td>row 12: 343
    <tr>
      <td>row 13: 1
      <td>row 13: 8
      <td>row 13: 27
      <td>row 13: 64
      <td>row 13: 125
      <td>row 13: 216
      <td>row 13: 343
    <tr>
      <td>row 14: 1
      <td>row 14: 8
      <td>row 14: 27
      <td>row 14: 64
      <td>row 14: 125
      <td>row 14: 216
      <td>row 14: 343
    <tr>
      <td>row 15: 1
      <td>row 15: 8
      <td>row 15: 27
      <td>row 15: 64
      <td>row 15: 125
      <td>row 15: 216
      <td>row 15: 343
    <tr>
      <td>row 16: 1
      <td>row 16: 8
      <td>row 16: 27
      <td>row 16: 64
      <td>row 16: 125
      <td>row 16: 216
      <td>row 16: 343
    <tr>
      <td>row 17: 1
      <td>row 17: 8
      <td>row 17: 27
      <td>row 17: 64
      <td>row 17: 125
      <td>row 17: 216
      <td>row 17: 343
    <tr>
      <td>row 18: 1
      <td>row 18: 8
      <td>row 18: 27
      <td>row 18: 64
      <td>row 18: 125
      <td>row 18: 216
      <td>row 18: 343
    <tr>
      <td>row 19: 1
      <td>row 19: 8
      <td>row 19: 27
      <td>row 19: 64
      <td>row 19: 125
      <td>row 19: 216
      <td>row 19: 343
    <tr>
      <td>row 20: 1
      <td>row 20: 8
      <td>row 20: 27
      <td>row 20: 64
      <td>row 20: 125
      <td>row 20: 216
      <td>row 20: 343
</table>
```

当查看这些样式时，你会注意到表格的 {{cssxref("display")}} 属性已被设置为 `block`。虽然允许滚动，但表格失去了一些完整性，而且表格单元格会尽量变小。为了缓解这个问题，我们在 `<tbody>` 上将 {{cssxref("white-space")}} 设置为 `nowrap`。然而，我们没有对 `<thead>` 进行设置，以避免长标题迫使列的宽度超过显示数据所需的宽度。

为了在向下滚动时保持表头在页面上，我们在 `<th>` 元素上将 {{cssxref("position")}} 设置为 sticky。注意，我们**没有**将 {{cssxref("border-collapse")}} 设置为 `collapse`，因为如果我们这样做，表头就不能与表格的其他部分正确分开。

```css
table,
th,
td {
  border: 1px solid;
}

table {
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto;
  display: block;
  overflow-x: auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### 结果

{{EmbedLiveSample('在小空间展示大型表格', '100%', 240)}}

## 无障碍考虑

### 标题

提供一个清晰简洁地描述了表格的目的 {{HTMLElement("caption")}} 元素，有助于人们决定是否需要阅读表格的其他内容或跳过它。

这有助于借助辅助技术（如屏幕阅读器）进行导航的人、经历低视力状况的人和有认知问题的人。

- [MDN：使用 \<caption> 元素为表格添加标题](/zh-CN/docs/Learn/HTML/Tables/Advanced#使用_caption_为你的表格增加一个标题)
- [标题和总结 • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### 确定行和列的范围

头部元素的 [`scope`](/zh-CN/docs/Web/HTML/Element/th#scope) 属性在简单情况下是多余的，因为范围是推断出来的。然而，一些辅助技术可能无法做出正确的推断，所以指定头的范围可能会改善用户体验。在复杂的表格中，可以指定范围以提供与标题相关的单元格的必要信息。

#### 示例

```html
<table>
  <caption>
    表格名称和值
  </caption>
  <tbody>
    <tr>
      <th scope="col">名称</th>
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

在 {{HTMLElement("th")}} 元素上提供声明 `scope="col"`，将有助于描述该单元格处于一列的顶部。在 {{HTMLElement("th")}} 元素上提供声明 `scope="row"`，将有助于描述该单元格是某一行的第一个。

- [MDN：对于视力受损用户的表格](/zh-CN/docs/Learn/HTML/Tables/Advanced#对于视力受损的用户的表格)
- [有两个头部的表格 • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [有不标准头部的表格 • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: 使用范围属性来关联数据表中的标题单元和数据单元 | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### 复杂表格

诸如屏幕阅读器等辅助技术可能难以解析那些复杂到标题单元不能以严格的水平或垂直方式关联的表格。这通常由 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 和 [`rowspan`](/zh-CN/docs/Web/HTML/Element/td#rowspan) 属性的存在表示。

理想情况下，考虑用其他方式来展示表格的内容，包括将其分解成一系列较小的、相关的表格，而不必依赖 `colspan` 和 `rowspan` 属性。除了帮助使用辅助技术的人理解表的内容外，这也可能有利于有认知障碍的人，这些人可能难以理解表的布局所描述的关联。

如果表格不能被拆开，使用 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 和 [`headers`](/zh-CN/docs/Web/HTML/Element/td#headers) 属性的组合，以编程方式将每个表格单元与该单元所关联的标题相关联。

- [MDN：对于视力受损用户的表格](/zh-CN/docs/Learn/HTML/Tables/Advanced#对于视力受损的用户的表格)
- [有多级头部的表格 • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: 使用 id 和 headers 属性将数据单元与数据表中的标题单元联系起来 | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 数据表格初步](/zh-CN/docs/Learn/HTML/Tables)
- 可能特别有用的关于设定表格元素样式的 CSS 属性：

  - {{cssxref("width")}} 控制表格的宽度；
  - {{cssxref("border")}}、{{cssxref("border-style")}}、{{cssxref("border-color")}}、{{cssxref("border-width")}}、{{cssxref("border-collapse")}}、{{cssxref("border-spacing")}} 控制单元格边框，分隔线和框架方面；
  - {{cssxref("margin")}} 和 {{cssxref("padding")}} 设定特定的单元格内容样式；
  - {{cssxref("text-align")}} 和 {{cssxref("vertical-align")}} 定义文本和单元格内容的对齐方式。
