---
title: MathML 表格
slug: Web/MathML/Tutorials/For_beginners/Tables
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}

掌握了所有基本的数学符号后，接下来要考虑的是用于矩阵式表达和其他高级数学布局的表格布局。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机操作能力，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >安装基本软件</a
        >，基本的<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >文件操作知识</a
        >，以及 HTML 基础知识（学习 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 简介</a
        >和 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML 表格</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解 MathML 表格元素，并了解一些使用案例。
      </td>
    </tr>
  </tbody>
</table>

## MathML 表格元素

MathML 表格元素与 [HTML 表格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)的元素类似：`<mtable>` 元素表示数学表格，它的子元素是 `<mtr>` 元素（表示行），每个 `<mtr>` 元素都有 `<mtd>` 元素作为其子元素（表示单元格）。`<mtable>` 元素可以在 MathML 公式的任何位置插入。`<mtd>` 元素可以包含任意数量的 MathML 子元素，并将它们布局为 `<mrow>` 容器。

表格通常用于矩阵式表达式（包括向量）。以下是一个基本示例，该示例取自[有关 CSS `matrix()` 函数的文章](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/matrix)：

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd>
          <mi>a</mi>
        </mtd>
        <mtd>
          <mi>c</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>b</mi>
        </mtd>
        <mtd>
          <mi>d</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('MathML 表格元素', 700, 200) }}

## 允许单元格跨多行多列

与 [HTML 表格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#允许单元格跨越多行和列)类似，`<mtd>` 元素具有 `columnspan` 和 `rowspan` 属性，以指示单元格跨多行和多列。下面的内部矩阵跨越外部矩阵的两列：

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>横跨多列的矩阵</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd columnspan="2">
              <mrow>
                <mo>(</mo>
                <mtable>
                  <mtr>
                    <mtd>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>c</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mi>b</mi>
                    </mtd>
                    <mtd>
                      <mi>d</mi>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>)</mo>
              </mrow>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mi>T</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>
    </math>
  </body>
</html>
```

{{EmbedLiveSample('允许单元格横跨多行多列', 700, 200)}}

> [!NOTE]
> 出于历史原因，MathML 中用于跨列的属性被称为 `columnspan` 而不是 `colspan`。

## 高级布局用法

除了表示类似矩阵的对象外，MathML 表格有时也用于数学公式中的高级布局，例如在[维基百科对勒让德符号的定义](https://zh.wikipedia.org/wiki/勒让德符号)中，公式被分隔在三行中，而值和条件则分隔于两列。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>第一个矩阵</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>(</mo>
          <mfrac>
            <mi>a</mi>
            <mi>b</mi>
          </mfrac>
          <mo>)</mo>
        </mrow>
        <mo>=</mo>
        <mrow>
          <mo>{</mo>
          <mtable>
            <mtr>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>如果&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;是模&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的二次剩余且不是&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的倍数&nbsp;</mtext>
                <mo>；</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>如果&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;是模&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的非二次剩余&nbsp;</mtext>
                <mo>；</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>如果&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;是&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的倍数&nbsp;</mtext>
                <mo>。</mo>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </mrow>
    </math>
  </body>
</html>
```

{{ EmbedLiveSample('高级布局用法', 700, 200) }}

> [!WARNING]
> [`<mtable>`](/zh-CN/docs/Web/MathML/Reference/Element/mtable) 文档中记录了更多高级布局选项，如对齐或间距等特殊属性。这些属性起源于 CSS 一类事物之前，最初设计用于不支持 CSS 的渲染器。然而，并非所有浏览器都实现了这些属性。将来，可能会用基于 CSS 的替代方案取代仅用于布局目的（即非实际矩阵对象）的 `<mtable>` 的用法。

## 总结

在本文中，我们回顾了 `<mtable>`、`<mtr>` 和 `<mtd>` 元素，它们是用于表格的 HTML 元素的等效元素。我们学习了如何使用它们表示类似矩阵的对象，以及如何用它们实现高级布局。

你已经接近完成本单元了——我们只剩下最后一件事要做。在[三个著名数学公式测验](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas)中，你需要运用新学到的知识，使用 HTML 和 MathML 重写一个小型数学文章。

## 参见

- [学习 HTML 表格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [`<mtable>` 元素](/zh-CN/docs/Web/MathML/Reference/Element/mtable)
- [`<mtr>` 元素](/zh-CN/docs/Web/MathML/Reference/Element/mtr)
- [`<mtd>` 元素](/zh-CN/docs/Web/MathML/Reference/Element/mtd)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}
