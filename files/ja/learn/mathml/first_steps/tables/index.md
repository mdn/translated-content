---
title: MathML 表
slug: Learn/MathML/First_steps/Tables
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

基本的な数式表記がすべてわかったら、あとは行列のような式や他にも高度な数式レイアウトを使用することができる表形式レイアウトを考えることができます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアがインストールされていること</a
        >、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイルでの作業</a
        >に関する基本的な知識、 HTML の基本（
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >と <a href="/ja/docs/Learn/HTML/Tables"
          >HTML 表</a
        >を学ぶこと）
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        添字要素を作成する基本的な MathML 要素に慣れること。
      </td>
    </tr>
  </tbody>
</table>

## MathML 表形式要素

MathML の表形式要素は [HTML 表](/ja/docs/Learn/HTML/Tables)要素と似ています。 `<mtable>` 要素は数式の表を表し、子要素（行を表す）として `<mtr>` 要素があり、それぞれの子要素（セルを表す）として `<mtd>` 要素があります。 `<mtable>` 要素は MathML の数式のどこにでも挿入することができます。 `<mtd>` 要素は任意の数の MathML の子を格納することができ、それらを `<mrow>` コンテナーとして並べます。

表は通常、（ベクトルを含む）行列のような表現に使用します。 [CSS の `matrix()` 関数に関する記事](/ja/docs/Web/CSS/transform-function/matrix)から引用した基本的な例を示します。

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

{{ EmbedLiveSample('MathML_tabular_elements', 700, 200, "", "") }}

## セルを複数の行や列にまたがらせる

これも [HTML の表](/ja/docs/Learn/HTML/Tables/Basics#allowing_cells_to_span_multiple_rows_and_columns)に似ています。 `<mtd>` 要素は `columnspan` 属性と `rowspan` 属性を受け入れ、セルが複数の行と列にまたがることを示します。下記は内側の行列が外側の行列の 2 列にまたがっています。

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>columnspan のある行列</title>
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

{{ EmbedLiveSample('allowing_cells_to_span_multiple_rows_and_columns', 700, 200, "", "") }}

> [!NOTE]
> 歴史的な理由から、列をまたがるための MathML 属性は `colspan` ではなく `columnspan` と呼ばれています。

## 高度なレイアウトの使用法

行列のようなオブジェクトを表す以外に、 MathML の表は、例えば [Wikipedia のルジャンドル記号の定義](https://ja.wikipedia.org/wiki/ルジャンドル記号)のように、数式内部の高度なレイアウトに使用されることもあります。ここでは、異なるケースが 3 つの異なる行に書かれ、値と条件は 2 つの異なる列に配置されています。

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My first matrix</title>
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
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a quadratic residue modulo&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;and&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is not a multiple of&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a non-quadratic residue modulo&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a multiple of&nbsp;</mtext>
                <mi>p</mi>
                <mo>.</mo>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </mrow>
    </math>
  </body>
</html>
```

{{ EmbedLiveSample('Usage_for_advanced_layout', 700, 200, "", "") }}

> **警告:** [`<mtable>` の記事](/ja/docs/Web/MathML/Element/mtable)では、配置や空間などの特別な属性によって、より高度なレイアウトオプションを提供しています。これらは CSS の相当するものよりも前に生まれ、元々は CSS を意識していないレンダラーのために設計されました。しかし、これらの属性はすべてのブラウザーで実装されているとは限りません。将来的には、 `<mtable>` の（実際の行列のようなオブジェクトではない）レイアウトのみの目的での使用は、 CSS ベースの代替手段に置き換えられる可能性があります。

## まとめ

この記事では、テーブル用の HTML 要素に相当する `<mtable>`、`<mtr>`、`<mtd>` 要素について確認しました。行列のようなオブジェクトを表すために使用する方法や、高度なレイアウトのために使用する方法について見てきました。

このモジュールはまもなく完了します。あと 1 つだけ指定されたことがあります。[三大有名数式の評価](/ja/docs/Learn/MathML/First_steps/Three_famous_mathematical_formulas)では、新しい知識を使用して HTML と MathML を使用して小さな数学の記事を書き直します。

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

## 関連情報

- [HTML テーブルについての学習](/ja/docs/Learn/HTML/Tables)
- [`<mtable>` 要素](/ja/docs/Web/MathML/Element/mtable)
- [`<mtr>` 要素](/ja/docs/Web/MathML/Element/mtr)
- [`<mtd>` 要素](/ja/docs/Web/MathML/Element/mtd)
