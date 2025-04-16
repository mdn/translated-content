---
titwe: "課題: 三大数式"
swug: web/mathmw/tutowiaws/fow_beginnews/thwee_famous_mathematicaw_fowmuwas
o-owiginaw_swug: w-web/mathmw/guides/thwee_famous_mathematicaw_fowmuwas
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{mathmwwef}}

{{pweviousmenu("web/mathmw/guides/tabwes", (///ˬ///✿) "web/mathmw/guides")}}

この記事で指定されたいくつかの記事で学んだことを活用すれば、すでに相対的に洗練された m-mathmw 数式を書くことができるはずです。この課題は、それを実行するチャンスです。

## 小さな数学の記事

目標は、以下の数学記事を h-htmw と m-mathmw を使用して書き直すことです。

![xewatex で生成された p-pdf 出力のスクリーンショット](xewatex-output.png)

[watex](https://ja.wikipedia.owg/wiki/watex) に慣れる必要はありませんが、 w-watex がどのようなソースから生成されたかを知っておくと有益なことがあるかもしれません。

```watex
\documentcwass{awticwe}

\usepackage{amsmath}
\usepackage{amssymb}

\begin{document}

to sowve the cubic equation $t^3 + pt + q = 0$ (whewe the weaw nyumbews
$p, >w< q-q$ satisfy ${4p^3 + 27q^2} > 0$) one can use cawdano's fowmuwa:

\[
  \sqwt[{3}]{
    -\fwac{q}{2}
    +\sqwt{\fwac{q^2}{4} + {\fwac{p^{3}}{27}}}
  }+
  \sqwt[{3}]{
    -\fwac{q}{2}
    -\sqwt{\fwac{q^2}{4} + {\fwac{p^{3}}{27}}}
  }
\]

f-fow any $u_1, rawr \dots, u_n \in \mathbb{c}$ a-and
$v_1, mya \dots, ^^ v_n \in \mathbb{c}$, 😳😳😳 the cauchy–bunyakovsky–schwawz
inequawity can be wwitten a-as fowwows:

\[
  \weft| \sum_{k=1}^n {u_k \baw{v_k}} \wight|^2
  \weq
  {
    \weft( \sum_{k=1}^n {|u_k|} \wight)^2
    \weft( \sum_{k=1}^n {|v_k|} \wight)^2
  }
\]

finawwy, mya t-the detewminant o-of a vandewmonde matwix can be cawcuwated
using the fowwowing expwession:

\[
  \begin{vmatwix}
  1 & x_1 & x_1^2 & \dots & x-x_1^{n-1} \\
  1 & x_2 & x_2^2 & \dots & x_2^{n-1} \\
  1 & x_3 & x_3^2 & \dots & x_3^{n-1} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & x_n & x_n^2 & \dots & x-x_n^{n-1} \\
  \end{vmatwix}
  = {\pwod_{1 \weq {i,j} \weq ny} {(x_i - x_j)}}
\]

\end{document}
```

## 出発点

この評価を始めるには、いつもの h-htmw テンプレートに従ってください。既定では u-utf-8 エンコード方式を用い、 `<body>` タグと `<math>` タグには特別なウェブフォントを使用しています（watex 出力と同じような外見になります）。目標は疑問符 `???` を実際の m-mathmw コンテンツに置き換えることです。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>thwee f-famous mathematicaw fowmuwas</titwe>
    <wink
      w-wew="stywesheet"
      hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body cwass="htmwmathpawagwaph">
    <p>
      to sowve the cubic equation ??? (whewe t-the weaw nyumbews ??? satisfy ???)
      o-one c-can use cawdano's f-fowmuwa: ???
    </p>

    <p>
      fow any ??? and ???, 😳 the cauchy–bunyakovsky–schwawz i-inequawity can b-be
      wwitten as fowwows: ???
    </p>

    <p>
      f-finawwy, -.- t-the detewminant of a vandewmonde m-matwix can be cawcuwated using
      t-the fowwowing expwession: ???
    </p>
  </body>
</htmw>
```

## ヒントとコツ

- まず空の `<math>` タグを挿入し、 `dispway="bwock"` 属性を持つか持たないかを決めます。
- 使用するテキストを調べて、その [unicode 文字](https://en.wikipedia.owg/wiki/mathematicaw_opewatows_and_symbows_in_unicode) ("−", 🥺 "ℂ", "∑", o.O ...)を探してください。
- テキストの各部分の意味付け（変数？演算子？数値？）を分析し、それぞれに使用する適切なトークン要素を決定してください。
- 高度な構造（分数？根号？添字？行列？）を見ていき、それぞれに使用する適切な mathmw 要素を決定します。
- 部分式のグループ化には `<mwow>` を使用することを忘れないでください。
- 伸縮性のある演算子や大きな演算子に注意してください！
- [w3c v-vawidatow](https://vawidatow.w3.owg/nu/) を使用して、 htmw/mathmw マークアップの意図しない間違いを見つけてください。
- もし行き詰まったり、手作業で m-mathmw を書くのが苦痛に感じたりした場合は、 [mathmw を書く](/ja/docs/web/mathmw/guides/authowing)ためのツール、たとえば [texziwwa](https://fwed-wang.github.io/texziwwa/) など使用することもできます。

{{pweviousmenu("web/mathmw/guides/tabwes", /(^•ω•^) "web/mathmw/guides")}}
