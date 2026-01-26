---
title: MathML 使用入门
slug: Web/MathML/Tutorials/For_beginners/Getting_started
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

在本文中，我们将使用一个简单的 HTML 文档，了解如何在其中添加 MathML 公式，并顺便介绍一些元素。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机操作能力，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，基本的<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >文件操作知识</a
        >以及 HTML 基础知识（学习过 <a
        href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 简介</a
        >。）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解 MathML 的基本语法以及如何将其集成到 HTML 页面中。
      </td>
    </tr>
  </tbody>
</table>

## 通过 \<math> 元素在 HTML 中插入公式

MathML 使用与 HTML 相同的语法来表示元素和属性的树形结构。特别地，每个数学公式都由一个 `<math>` 元素表示，该元素可以放置在 HTML 页面中。在下面的文档中，它位于一个段落文本中：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>我的第一个数学页面</title>
  </head>
  <body>
    <p>
      分数
      <math>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math>
      不是十进制数。
    </p>
  </body>
</html>
```

`<mfrac>` 元素指定了一个分数，其中分子是它的第一个子元素，分母是它的第二个子元素。以下是它在浏览器中的呈现方式：

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> 如果你只看到“1 3”而不是一个分数，那么你的浏览器可能不支持 MathML。请查看[浏览器兼容性表格](/zh-CN/docs/Web/MathML/Reference/Element/math#浏览器兼容性)获取进一步的详细信息。

### display 属性

请注意，在前面的示例中，公式与段落文本在一行上。然而，通常情况下，我们会将大的数学公式居中显示在独立的行上，如下所示。为了实现这一点，你需要在 `<math>` 元素上附加一个 `display="block"` 属性。

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>我的第一个数学页面</title>
  </head>
  <body>
    <p>
      分数
      <math display="block">
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math>
      不是一个十进制数。
    </p>
  </body>
</html>
```

{{ EmbedLiveSample('display_属性', 700, 100, "", "") }}

你可能还会注意到一些细微的外观变化：分数的文本和垂直间距变大了一点。没有 `display="block"` 属性，高度会被最小化，以避免干扰周围文本的流畅性。使用 `display="block"` 属性时，优先考虑的是数学公式的易读性。

> [!NOTE]
> 这对应于 LaTeX 中的*行内*公式（用美元符号 `$...$` 包围）和*展示*公式（用 `\[...\]` 包围）的概念。

> [!NOTE]
> 上述提到的外观变化实际上是由 [`math-style`](/zh-CN/docs/Web/CSS/Reference/Properties/math-style) 属性控制的，该属性初始值为代表 `<math display="block">` 的 `normal`，其他情况下为 `compact`。在某些 MathML 子树中，此属性可能会自动变为 `compact`，但在本入门教程中我们将忽略这个细微差别。这与 LaTeX 类似。

## 使用 \<mrow> 元素进行分组

实际上，`<math>` 元素可以包含任意数量的子元素，并且将它们在一行内呈现。例如，简单的公式“1 + 2 + 3”在 MathML 中的编码如下：

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

`<mrow>` 元素是一个通用容器，可以执行类似的布局，但可以放置在 MathML 子树的任何位置。它可以将多个元素组合在一起。例如，下面的分数的分子部分（它的第一个子元素）是“一加二”。

```html
<math>
  <mfrac>
    <mrow>
      <mn>1</mn>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mn>3</mn>
  </mfrac>
</math>
```

### 主动练习：内嵌表达式

作为一项练习，我们将使用我们已经了解的 MathML 元素来编写以下表达式。如果你有困惑或想验证解决方案，请查看示例的源代码。

```html hidden
<ol>
  <li>
    “二分之一”加上“三分之二”：
    <!-- 对于 math 元素的子元素使用 mrow 元素进行分组是可以的，但不是必需的。 -->
    <math>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
      <mo>+</mo>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
  </li>
  <li>
    “一加二加三”除以“四加五”：
    <math>
      <mfrac>
        <mrow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mrow>
        <mrow>
          <mn>4</mn>
          <mo>+</mo>
          <mn>5</mn>
        </mrow>
      </mfrac>
    </math>
  </li>
  <li>
    “四分之一”除以“二加三”：
    <math>
      <mfrac>
        <mfrac>
          <mn>1</mn>
          <mn>4</mn>
        </mfrac>
        <mrow>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mrow>
      </mfrac>
    </math>
  </li>
</ol>
```

{{ EmbedLiveSample('主动练习：内嵌表达式', 700, 200, "", "") }}

## 总结

本文中，我们介绍了如何使用 `<math>` 元素将数学公式插入 HTML 文档中。我们了解了使用 `display="block"` 和不使用它的 `<math>` 元素之间的渲染差异。此外，我们还介绍了几个其他的 MathML 元素：`<mfrac>` 用于表示分数，`<mrow>` 用于分组，以及一些文本元素。在下一篇文章中，我们将进一步分析这些[文本容器](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Text_containers)。

## 参见

- [使用 MathML](/zh-CN/docs/Web/MathML/Guides/Authoring#使用_mathml)
- [`<math>` 元素](/zh-CN/docs/Web/MathML/Reference/Element/math)
- [`<mfrac>` 元素](/zh-CN/docs/Web/MathML/Reference/Element/mfrac)
- [`<mrow>` 元素](/zh-CN/docs/Web/MathML/Reference/Element/mrow)
- [`math-style` 属性](/zh-CN/docs/Web/CSS/Reference/Properties/math-style)
- [`math-depth` 属性](/zh-CN/docs/Web/CSS/Reference/Properties/math-depth)

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
