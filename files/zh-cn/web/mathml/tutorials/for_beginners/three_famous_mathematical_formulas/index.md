---
title: 三个著名的数学公式
slug: Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas
---

{{PreviousMenu("Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        在尝试本测验之前，你应该已经完成本单元中的所有文章，并且对 HTML 基础知识有所了解（请参阅 <a
        href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 简介</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>尝试使用 MathML 并测试你的新技能。</td>
    </tr>
  </tbody>
</table>

## 一篇数学小文章

目标是使用 HTML 和 MathML 重写以下数学文章：

![通过 XeLaTeX 生成的 PDF 输出的屏幕截图](xelatex-output.png)

尽管你不需要熟悉 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX)，但知道生成它的 LaTeX 源代码可能会对你有帮助：

```latex
\documentclass{article}

\usepackage{amsmath}
\usepackage{amssymb}

\begin{document}

要解决三次方程 $t^3 + pt + q = 0$（其中实数 $p, q$ 满足 ${4p^3 + 27q^2} > 0$），可以使用卡尔达诺公式：

\[
  \sqrt[{3}]{
    -\frac{q}{2}
    +\sqrt{\frac{q^2}{4} + {\frac{p^{3}}{27}}}
  }+
  \sqrt[{3}]{
    -\frac{q}{2}
    -\sqrt{\frac{q^2}{4} + {\frac{p^{3}}{27}}}
  }
\]

对于任意 $u_1, \dots, u_n \in \mathbb{C}$ 和 $v_1, \dots, v_n \in \mathbb{C}$，柯西—布尼亚科夫斯基—施瓦茨不等式可以写成如下形式：

\[
  \left| \sum_{k=1}^n {u_k \bar{v_k}} \right|^2
  \leq
  {
    \left( \sum_{k=1}^n {|u_k|} \right)^2
    \left( \sum_{k=1}^n {|v_k|} \right)^2
  }
\]

最后，范德蒙行列式可以使用以下表达式计算：

\[
  \begin{vmatrix}
  1 & x_1 & x_1^2 & \dots & x_1^{n-1} \\
  1 & x_2 & x_2^2 & \dots & x_2^{n-1} \\
  1 & x_3 & x_3^2 & \dots & x_3^{n-1} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & x_n & x_n^2 & \dots & x_n^{n-1} \\
  \end{vmatrix}
  = {\prod_{1 \leq {i,j} \leq n} {(x_i - x_j)}}
\]

\end{document}
```

## 起始点

要开始这个测验，你可以使用我们常用的 HTML 模板。默认情况下，它使用 UTF-8 编码，在 `<body>` 和 `<math>` 标签上使用特殊的 Web 字体（具有与 LaTeX 输出类似的界面外观）。目标是将问号 `???` 替换为实际的 MathML 内容。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>三个著名的数学公式</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body class="htmlmathparagraph">
    <p>
      要解决三次方程 ???（其中实数 ??? 满足 ???），可以使用卡尔达诺公式：???
    </p>

    <p>
      对于任意 ??? 和 ???，柯西—布尼亚科夫斯基—施瓦茨不等式可以写成如下形式：???
    </p>

    <p>最后，范德蒙行列式可以使用以下表达式计算：???</p>
  </body>
</html>
```

## 提示和技巧

- 首先插入空的 `<math>` 标签，并决定它们是否应该有 `display="block"` 属性。
- 检查所使用的文本，并找到它们的 [Unicode 字符](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode)（“−”、“ℂ”、“∑”等）。
- 分析每个文本部分的语义（变量？运算符？数字？），并确定每个部分应使用的正确的标记元素。
- 查找高级结构（分数？根号？上下标？矩阵？），并确定每个结构应使用的正确的 MathML 元素。
- 别忘了使用 `<mrow>` 对子表达式进行分组。
- 注意可伸缩和大型运算符！
- 使用 [W3C 验证器](https://validator.w3.org/nu/)检查你的 HTML/MathML 标记中是否有意外的错误。
- 如果你陷入困境，或感到手动编写 MathML 有多么痛苦，请随时使用[编写 MathML 的工具](/zh-CN/docs/Web/MathML/Guides/Authoring)（如 [TeXZilla](https://fred-wang.github.io/TeXZilla/)）。

{{PreviousMenu("Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
