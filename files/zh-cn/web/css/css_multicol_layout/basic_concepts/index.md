---
title: Basic Concepts of Multicol
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
---

{{CSSRef}}

多列布局（通常称为 multicol）是一种规范，用于将内容布置到一组列框中，就像报纸中的列一样。本指南解释了规范如何与一些常见的用例示例一起使用。

## 关键概念和术语

Multicol 与 CSS 中的任何其他布局方法不同，它将内容（包括所有后代元素）分段为列。这与在使用 CSS Paged Media 时将内容分段为页面的方式相同，例如通过创建打印样式表。

规范定义的属性有：

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}

通过给一个元素添加 column-count 或 column-width，该元素变成了多列容器，或简称为 multicol 容器。这些列是都是匿名的盒子，在规范中描述为列盒子。

## columns 定义

创建一个 multicol 容器必须使用至少一个 column-\* 属性，这些就是 column-count 和 column-width。

### `column-count` 属性

`column-count` 属性指定你想要显示内容的列的数量。浏览器会将正确分配的空间给每列并创建需要的列数。

在以下示例中，我们使用 column-count 属性在 `.container` 元素上创建三列。 `.container` 元素的内容包括其子元素都会分裂成三列。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

在上面的例子中内容被段落 p 标签的默认样式包裹。因此，每段都有一个间距。你可以看到这个间距引起第一行文本被推了下来。这是因为 multicol 容器创建了一个新的块格式化上下文（BFC），这意味着子元素的间距不会与父容器的间距互相重叠。

### `column-width` 属性

`column-width` 属性用于给每列设置一个最佳宽度。如果你声明 `column-width`，浏览器将算出该宽度在 multicol 容器能分多少列，并且把额外的空间填充到这些列当中。因此，应将列宽视为最小宽度，因为由于额外的空间，列可能而更宽。

当单个列的可用宽度小于 column-width 的值的情况下，列的宽度会缩小为小于所声明的列宽。

在以下示例中，我们使用 column-width 属性值为 200 px。但最终为了适配容器，列的宽度却大于 200 像素，额外的空间被平均分配了。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### 同时使用 `column-count` 和 `column-width`

如果在 multicol 容器上指定这两个属性，则 `column-count` 将作为最大列数。因此，将按`column-width` 的值计算，直到达到 `column-count` 定义的列数。在此之后，即使有足够的空间容纳指定列宽大小的列，也不再绘制，并且额外空间在现有列之间均匀分布。

同时使用这两个属性时，可能会获得的列数少于 `column-count` 数值中指定的列数。

在下一个例子中，我们使用 column-width 的值为 200px，column-count 的值为 2。即使有超过两列的空间，我们也得到两个。如果没有足够的空间容纳两列 200px，我们得到一个。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### `columns` 缩写

你可以使用 columns 缩写来设置 `column-count` 和 `column-width`。如果设置长度单位，这将用于 `column-width`，设置一个整数，它将用于 `column-count`。你可以设置两者，用空格分隔这两个值。

此 CSS 结果与示例 1 相同，column-count 设置为 3。

```plain
.container {
  columns: 3;
}
```

此 CSS 结果与示例 2 相同，column-width 为 200px。

```plain
.container {
  columns: 200px;
}
```

此 CSS 结果与示例 3 相同，同时设置 column-count 和 column-width。

```plain
.container {
  columns: 2 200px;
}
```

## 下一步

在本指南中，我们学习了多列布局的基本用法。在[下一个指南](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Styling_columns)中，我们将看看我们可以为列本身设置多少样式。
