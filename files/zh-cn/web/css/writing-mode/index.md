---
title: writing-mode
slug: Web/CSS/writing-mode
---

{{CSSRef}}

**`writing-mode`** 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置书时，应在根元素上设置它（对于 HTML 文档应该在 `html` 元素上设置）

此属性指定块流动方向，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向。因此，它也确定块级内容的顺序。

## 语法

```css
/* 关键值 */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* 全局值 */
writing-mode: inherit;
writing-mode: initial;
writing-mode: unset;
```

将 `write-mode` 属性指定为下面列出的值之一。水平流动方向也受[文本的方向](https://www.w3.org/International/questions/qa-scripts.en)影响，从左到右（ltr，类似于英语和大多数其他语言）或从右到左（rtl，类似于希伯来语或阿拉伯语）。

### Values

- `horizontal-tb`
  - : 对于左对齐（ltr）文本，内容从左到右水平流动。对于右对齐（rtl）文本，内容从右到左水平流动。下一水平行位于上一行下方。
- `vertical-rl`
  - : 对于左对齐（ltr）文本，内容从上到下垂直流动，下一垂直行位于上一行左侧。对于右对齐（rtl）文本，内容从下到上垂直流动，下一垂直行位于上一行右侧。
- `vertical-lr`
  - : 对于左对齐（ltr）文本，内容从上到下垂直流动，下一垂直行位于上一行右侧。对于右对齐（rtl）文本，内容从下到上垂直流动，下一垂直行位于上一行左侧。
- `sideways-rl`{{experimental_inline}}
  - : 对于左对齐（ltr）文本，内容从下到上垂直流动。对于右对齐（rtl）文本，内容从上到下垂直流动。所有字形（即使是垂直文本中的字形）都朝向右侧。
- `sideways-lr`{{experimental_inline}}
  - : 对于左对齐（ltr）文本，内容从上到下垂直流动。对于右对齐（rtl）文本，内容从下到上垂直流动。所有字形（即使是垂直文本中的字形）都朝向左侧。
- `lr` {{deprecated_inline}}
  - : 除 SVG1 文档外，已弃用。对于 CSS，请改用 `horizontal-tb`。
- `lr-tb` {{deprecated_inline}}
  - : 除 SVG1 文档外，已弃用。对于 CSS，请改用 `horizontal-tb`。
- `rl` {{deprecated_inline}}
  - : 除 SVG1 文档外，已弃用。对于 CSS，请改用 `horizontal-tb`。
- `tb` {{deprecated_inline}}
  - : 除 SVG1 文档外，已弃用。对于 CSS，请改用 `vertical-lr`。
- `tb-rl` {{deprecated_inline}}
  - : 除 SVG1 文档外，已弃用。对于 CSS，请改用 `vertical-rl`。

### 正式语法

{{csssyntax}}

## 示例

该例子展现了所有 writing-mode 语法，以及不同语言的展示情况。

### HTML

以下 HTML 只是一个简单的 {{HTMLElement("table")}}，每个单元格展示了不同的 `writing-mode` 的文本。

```html
<table>
  <tr>
    <th>Value</th>
    <th>Vertical script</th>
    <th>Horizontal script</th>
    <th>Mixed script</th>
  </tr>
  <tr>
    <td>horizontal-tb</td>
    <td class="example Text1"><span>我家没有电脑。</span></td>
    <td class="example Text1"><span>Example text</span></td>
    <td class="example Text1"><span>1994 年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-lr</td>
    <td class="example Text2"><span>我家没有电脑。</span></td>
    <td class="example Text2"><span>Example text</span></td>
    <td class="example Text2"><span>1994 年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-rl</td>
    <td class="example Text3"><span>我家没有电脑。</span></td>
    <td class="example Text3"><span>Example text</span></td>
    <td class="example Text3"><span>1994 年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-lr</td>
    <td class="example Text4"><span>我家没有电脑。</span></td>
    <td class="example Text4"><span>Example text</span></td>
    <td class="example Text4"><span>1994 年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-rl</td>
    <td class="example Text5"><span>我家没有电脑。</span></td>
    <td class="example Text5"><span>Example text</span></td>
    <td class="example Text5"><span>1994 年に至っては</span></td>
  </tr>
</table>
```

### CSS

Some preparatory CSS just to make things look a little better:

```css hidden
table {
  border-collapse:collapse;
}
td, th {
  border: 1px black solid; padding: 3px;
}
th {
  background-color: lightgray;
}
.example {
  height:75px;
  width:75px;
}
```

The CSS that adjusts the directionality of the content looks like this:

```css
.example.Text1 span, .example.Text1 {
  writing-mode: horizontal-tb;
  -webkit-writing-mode: horizontal-tb;
  -ms-writing-mode: horizontal-tb;
}

.example.Text2 span, .example.Text2 {
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: vertical-lr;
}

.example.Text3 span, .example.Text3 {
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
}

.example.Text4 span, .example.Text4 {
  writing-mode: sideways-lr;
  -webkit-writing-mode: sideways-lr;
  -ms-writing-mode: sideways-lr;
}

.example.Text5 span, .example.Text5 {
  writing-mode: sideways-rl;
  -webkit-writing-mode: sideways-rl;
  -ms-writing-mode: sideways-rl;
}
```

{{EmbedLiveSample("示例", 400, 500)}}

### 显示效果

下图显示了在浏览器对 `writing-mode` 的支持不完整的情况下输出的外观：

![](screenshot_2020-02-05_21-04-30.png)

## Specification

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- SVG [`writing-mode`](/zh-CN/docs/Web/SVG/Attribute/writing-mode) attribute
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS Logical properties](/zh-CN/docs/Web/CSS/CSS_Logical_Properties)
- [Styling vertical text (Chinse, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/)
- Extensive browsers support test results: <https://w3c.github.io/i18n-tests/results/writing-mode-vertical>
