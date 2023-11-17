---
title: <tbody>：表格主体元素
slug: Web/HTML/Element/tbody
---

{{HTMLSidebar}}

**`<tbody>`** [HTML](/zh-CN/docs/Web/HTML) 元素封装了一系列表格的行（{{HTMLElement("tr")}} 元素），代表了它们是表格（{{HTMLElement("table")}}）主要内容的组成部分。

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

`<tbody>` 元素和它的兄弟节点 {{HTMLElement("thead")}} 和 {{HTMLElement("tfoot")}} 为出于无障碍访问需求的屏幕或打印机上的表格渲染提供了有用的语义信息。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容物</th>
      <td>0 个或多个 {{ HTMLElement("tr") }} 元素。</td>
    </tr>
    <tr>
      <th scope="row">标签是否可省略</th>
      <td>
        元素 {{ HTMLElement("table") }} 父元素的渲染无需 <code>&#x3C;tbody></code> 子元素。然而，如果 {{ HTMLElement("table") }} 父元素有 {{HTMLElement("thead")}}、{{HTMLElement("tfoot")}} 或另一个 {{HTMLElement("tbody")}} 子元素，它必须存在。如果 <code>&#x3C;tbody></code> 元素以 {{HTMLElement("tbody")}} 元素开始，并且并不紧跟着一个未关闭的 <code>&#x3C;tbody></code> 元素，则其打开标签可以省略。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        在所需的 {{ HTMLElement("table") }} 父元素内，<code>&#x3C;tbody></code> 元素可以添加在 {{ HTMLElement("caption") }}、{{HTMLElement("colgroup") }} 和 {{ HTMLElement("thead") }}的后方。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role"
            >rowgroup</a
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
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

该元素包含所有的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

### 废弃的属性

- `align` {{deprecated_inline}}

  - : 该[枚举](/zh-CN/docs/Glossary/Enumerated)属性指定了每个单元格的水平对齐方式。可能的值如下：

    - `left`，表格内容左对齐
    - `center`，表格内容居中对齐
    - `right`，表格内容右对齐
    - `justify`，在文本内容中插入空格，使内容在单元格中对齐。
    - `char`，将文本内容对准一个特殊的字符，其最小偏移量由 [`char`](/zh-CN/docs/Web/HTML/Element/tbody#char) 和 [`charoff`](/zh-CN/docs/Web/HTML/Element/tbody#charoff) 属性定义。

    如果没有设定该属性，则假定使用 `left` 值。

    由于该属性已经废弃，请使用 CSS {{cssxref("text-align")}} 属性作为替代。

    > **备注：** `text-align` 属性的 `align="char"` 取值尚未在任何浏览器中实现。请参阅 [`text-align` 的浏览器兼容性小节](/zh-CN/docs/Web/CSS/text-align#浏览器兼容性)以获取 `<string>` 的可能取值。

- `bgcolor` {{Deprecated_inline}}

  - : 表格的背景颜色。它是一个以 '`#`' 开头的 [6 位数十六进制 RGB 代码](/zh-CN/docs/Web/CSS/color_value#rgb_颜色)。也可以使用任意一个预定义的[颜色关键字](/zh-CN/docs/Web/CSS/color_value#颜色关键字)。

    由于该属性已经废弃，请使用 CSS {{cssxref("background-color")}} 属性作为替代。

- `char` {{deprecated_inline}}
  - : 该属性用于设置列中单元格的对齐字符。当试图对齐数字或货币价值时，其典型值包括一个句号（`.`）。如果 [`align`](/zh-CN/docs/Web/HTML/Element/tbody#align) 没有设置为 `char`，这个属性就会被忽略。
- `charoff` {{deprecated_inline}}
  - : 这个属性用来表示从 `char` 属性指定的对齐字符中偏移列数据的字符数。
- `valign` {{deprecated_inline}}

  - : 该属性指定了每个单元格的垂直对齐方式。可能的值如下：

    - `baseline` 将文本尽量放置在单元格底部，但在[基线](https://en.wikipedia.org/wiki/Baseline_%28typography%29)处而不是字符底部对齐。如果字符具有相同大小，则与 `bottom` 效果一致。
    - `bottom` 将文本尽量放置在单元格底部。
    - `middle` 将文本放置在单元格中间。
    - 和 `top` 将文本尽量放置在单元格顶部。

    由于该属性已经废弃，请使用 CSS {{cssxref("vertical-align")}} 属性作为替代。

## 使用说明

- 如果表格包含 {{HTMLElement("thead")}} 块（语义上标识表头行），那么 `<tbody>` 块*必须*紧随它。
- 如果你使用 `<tbody>`，你就不能同时拥有表格行（{{HTMLElement("tr")}} 元素），它们是 {{HTMLElement("table")}} 的直接子元素，但不包括在 `<tbody>` 内。如果使用了 `<tbody>`，所有非标题和非页脚的行都必须在其内。
- 在打印文档时，`<thead>` 和 {{htmlelement("tfoot")}} 元素指定的信息在多页表格的每一页都可能是相同的，或者至少是非常相似的，而 `<tbody>` 元素的内容一般会在不同的页面上有所不同。
- 当一个表格呈现在屏幕环境（如窗口）中，而屏幕环境又不足以显示整个表格时，{{Glossary("user agent", "用户代理")}}可以让用户滚动同一父表的`<thead>`、`<tbody>`、`<tfoot>`和 {{HTMLElement("caption")}} 块中的内容，彼此分开。
- 你*可以*在每一个表格使用多于一个 `<tbody>`，只要它们是连续的。这可以让你把大表格中的行分成几个部分，如果需要的话，每个部分都可以单独设置格式。

## 示例

下面是一些说明 `<tbody>` 元素用途的示例。要知道该标签使用的更多示例，请查看 {{ HTMLElement("table", "", "#示例") }}。

### 基本示例

在这个相对简单的示例中，我们创建了带有 {{HTMLElement("thead")}} 和 {{HTMLElement("tbody")}} 的一组学生信息表，表格中含有若干行。

#### HTML

该表的 HTML 显示在这里。请注意，所有的主体单元包括学生的信息都包含在一个单一的 `<tbody>` 元素中。

```html
<table>
  <thead>
    <tr>
      <th>学生 ID</th>
      <th>姓名</th>
      <th>专业</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>计算机科学</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>俄国文学</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>天体物理学</td>
    </tr>
  </tbody>
</table>
```

#### CSS

表格的 CSS 样式如下所示：

```css
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

首先，设置表格的整体样式属性，配置表格外部边框的厚度、样式和颜色，并使用 {{cssxref("border-collapse")}} 确保相邻单元格之间共享边框线，而不是每个单元格都有自己的边框，中间有空间。{{cssxref("font")}} 用于为表格建立一个初始字体。

```css
th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}
```

然后为表格中的大部分单元格设置样式，包括所有的数据单元格，以及那些在我们的 {{HTMLElement("td")}} 和 {{HTMLElement("th")}} 单元格之间共享的样式。这些单元格被赋予了一个单像素厚的浅灰色轮廓，调整了填充，并使用 {{cssxref("text-align")}} 对所有单元格进行左对齐。

```css
thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

最后，包含在 {{HTMLElement("thead")}} 块中的标题单元被赋予额外的样式。它们使用更深的 {{cssxref("background-color")}}，更大的字体大小，以及比其他单元格边框更厚、更深的底边。

#### 结果

生成的表格看起来像这样：

{{EmbedLiveSample("基本示例", 650, 150)}}

### 多个表格主体

你可以使用多个 `<tbody>` 元素来在一个表格中建立多个部分。每个部分可能包含它自己的表头或一些行；然而，_每个表格里只能有一个 {{HTMLElement("thead")}} 元素！_ 由于刚才所述的原因，你需要用 {{HTMLElement("tr")}} 填充 {{HTMLElement("th")}} 元素，在每个 `<tbody>` 内创建标题。让我们来看看这是怎么做到的。

让我们以前面的例子为例，在列表中增加一些学生，并更新表格，使其不再在每一行列出每个学生的专业，而是按专业分组，每个专业都有标题行。

#### 结果

为了让你知道我们在做什么，首先在这里给出生成的表格：

{{EmbedLiveSample("多个表格主体", 650, 250)}}

#### HTML

改变的 HTML 看起来像这样：

```html
<table>
  <thead>
    <tr>
      <th>学生 ID</th>
      <th>姓名</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">计算机科学</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">俄国文学</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">天体物理学</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
    </tr>
  </tbody>
</table>
```

注意，每个专业都放在了分开的 `<tbody>` 块之下，其中的第一列包含了一个带有 [`colspan`](/zh-CN/docs/Web/HTML/Element/th#colspan) 属性的 {{HTMLElement("th")}} 元素，横跨了整个表格的宽度。该标题列出了包含在 `<tbody>` 中的专业名称。

在每个专业的 `<tbody>` 下的剩余行包含两个单元格：第一个是学生的 ID，第二个是它们的名字。

#### CSS

```css hidden
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}

th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}

thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

大部分 CSS 代码均未改变。我们只是为直接包含在 `<tbody>` 中的表头的单元格添加了一些样式（而不是在 {{HTMLElement("thead")}} 中）。这用于表示每个表格部分对应的主要内容的标题。

```css
tbody > tr > th {
  background-color: #dde;
  border-bottom: 1.5px solid #bbb;
  font-weight: normal;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 对于 `<tbody>` 元素可能特别有用的 CSS 属性和[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)：

  - {{ cssxref(":nth-child") }} 伪类用于设置单元格的对齐方式；
  - {{ cssxref("text-align") }} 属性用于将所有单元格内容对齐在同一个字符上，如 `.`。
