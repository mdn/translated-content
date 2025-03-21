---
title: "課題: 三大数式"
slug: Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas
original_slug: Web/MathML/Guides/Three_famous_mathematical_formulas
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenu("Web/MathML/Guides/Tables", "Web/MathML/Guides")}}

この記事で指定されたいくつかの記事で学んだことを活用すれば、すでに相対的に洗練された MathML 数式を書くことができるはずです。この課題は、それを実行するチャンスです。

## 小さな数学の記事

目標は、以下の数学記事を HTML と MathML を使用して書き直すことです。

![XeLaTeX で生成された PDF 出力のスクリーンショット](xelatex-output.png)

[LaTeX](https://ja.wikipedia.org/wiki/LaTeX) に慣れる必要はありませんが、 LaTeX がどのようなソースから生成されたかを知っておくと有益なことがあるかもしれません。

```latex
\documentclass{article}

\usepackage{amsmath}
\usepackage{amssymb}

\begin{document}

To solve the cubic equation $t^3 + pt + q = 0$ (where the real numbers
$p, q$ satisfy ${4p^3 + 27q^2} > 0$) one can use Cardano's formula:

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

For any $u_1, \dots, u_n \in \mathbb{C}$ and
$v_1, \dots, v_n \in \mathbb{C}$, the Cauchy–Bunyakovsky–Schwarz
inequality can be written as follows:

\[
  \left| \sum_{k=1}^n {u_k \bar{v_k}} \right|^2
  \leq
  {
    \left( \sum_{k=1}^n {|u_k|} \right)^2
    \left( \sum_{k=1}^n {|v_k|} \right)^2
  }
\]

Finally, the determinant of a Vandermonde matrix can be calculated
using the following expression:

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

## 出発点

この評価を始めるには、いつもの HTML テンプレートに従ってください。既定では UTF-8 エンコード方式を用い、 `<body>` タグと `<math>` タグには特別なウェブフォントを使用しています（LaTeX 出力と同じような外見になります）。目標は疑問符 `???` を実際の MathML コンテンツに置き換えることです。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Three famous mathematical formulas</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body class="htmlmathparagraph">
    <p>
      To solve the cubic equation ??? (where the real numbers ??? satisfy ???)
      one can use Cardano's formula: ???
    </p>

    <p>
      For any ??? and ???, the Cauchy–Bunyakovsky–Schwarz inequality can be
      written as follows: ???
    </p>

    <p>
      Finally, the determinant of a Vandermonde matrix can be calculated using
      the following expression: ???
    </p>
  </body>
</html>
```

## ヒントとコツ

- まず空の `<math>` タグを挿入し、 `display="block"` 属性を持つか持たないかを決めます。
- 使用するテキストを調べて、その [Unicode 文字](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) ("−", "ℂ", "∑", ...)を探してください。
- テキストの各部分の意味付け（変数？演算子？数値？）を分析し、それぞれに使用する適切なトークン要素を決定してください。
- 高度な構造（分数？根号？添字？行列？）を見ていき、それぞれに使用する適切な MathML 要素を決定します。
- 部分式のグループ化には `<mrow>` を使用することを忘れないでください。
- 伸縮性のある演算子や大きな演算子に注意してください！
- [W3C validator](https://validator.w3.org/nu/) を使用して、 HTML/MathML マークアップの意図しない間違いを見つけてください。
- もし行き詰まったり、手作業で MathML を書くのが苦痛に感じたりした場合は、 [MathML を書く](/ja/docs/Web/MathML/Guides/Authoring)ためのツール、たとえば [TeXZilla](https://fred-wang.github.io/TeXZilla/) など使用することもできます。

{{PreviousMenu("Web/MathML/Guides/Tables", "Web/MathML/Guides")}}
