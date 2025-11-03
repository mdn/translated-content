---
title: MathML を始めよう
slug: Web/MathML/Tutorials/For_beginners/Getting_started
original_slug: Web/MathML/Guides/Getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{NextMenu("Web/MathML/Guides/Text_containers", "Web/MathML/Guides")}}

この記事では、単純な HTML 文書を使い、そこに MathML 数式を追加する方法を、いくつかの要素を紹介しながら見ていきます。

## HTML に \<math> 要素で数式を挿入する

MathML は HTML と同じ構文を用いて要素と属性のツリーを表します。具体的な数式は `<math>` という要素で表され、 HTML ページの中に配置することができます。以下の文書では、段落の中にあります。

```html
<!doctype html>
<html lang="ja">
  <head>
    <title>最初の数式のページ</title>
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
      は十進数では表せません。
    </p>
  </body>
</html>
```

`<mfrac>` 要素は分子（最初の子）と分母（2 つ目の子）を持つ分数を指定します。ブラウザーではこのように表示されます。

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> 分数の代わりに "1 3" と表示される場合は、ブラウザーが MathML に対応していない可能性があります。詳しくは[ブラウザー互換性表](/ja/docs/Web/MathML/Reference/Element/math#browser_compatibility)を調べてください。

### display 属性

前の例では、数式は段落のテキストと同じ行にあることに注意してください。しかし、下記の通り、大きな数式を自分自身で中央揃えにして表示させることがよくあります。そのためには `<math>` 要素に `display="block"` 属性を付ける必要があります。

```html hidden
<!doctype html>
<html lang="ja">
  <head>
    <title>最初の数式のページ</title>
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
      は十進数では表せません。
    </p>
  </body>
</html>
```

{{ EmbedLiveSample('The_display_attribute', 700, 100, "", "") }}

また、現れる微妙な変化にもお気づきでしょう。分数のテキストと縦の空間が少し大きくなります。 `display="block"` 属性がないと、周囲のテキストの流れを避けるために高さが最小になります。 `display="block"` 属性を使うと、その代わりに数式の読みやすさが優先されます。

> [!NOTE]
> これは LaTeX の _inline_ 数式（ドル記号 `$...$` で区切られる）と _display_ 数式（`\[...\]` で区切られる）の概念に対応しています。

> [!NOTE]
> このプロパティは `<math display="block">`の場合、初期状態では `normal`、それ以外の場合は `compact` になります。MathMLのサブツリーによっては、このプロパティが自動的に `compact` になることがありますが、この入門チュートリアルではこの微妙な点は無視します。繰り返しますが、これは LaTeX に似ています。

## \<mrow> 要素でのグループ化

`<math>` 要素は実際には任意の数の子要素を格納することができ、基本的にそれらを一列に並べて表示します。例えば、単純な数式 "1 + 2 + 3" は MathML ではこのようにエンコードされます。

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

`<mrow>` 要素は同様のレイアウトを行う汎用コンテナーですが、 MathML のサブツリーのどこにでも配置することができます。いくつかの要素をグループ化するのに便利です。例えば、以下の分数の分子（最初の子要素）は「1 足す 2」です。

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

### アクティブラーニング: 入れ子になった式

練習として、これまで見てきた MathML の要素だけを使って以下の式を書く方法を考えてみてください。もし行き詰まったり、解答を確認したい場合は、例のソースコードを調べてください。

```html hidden
<ol>
  <li>
    「2 分の 1」足す「3 分の 2」:
    <!-- math 要素の子要素を mrow 要素でグループ化するのは正しいですが、不必要です。 -->
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
    「1 足す 2 足す 3」が「4 足す 5」の上にある:
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
    「4 分の 1」が「2 足す 3」の上にある:
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

{{ EmbedLiveSample('Active_learning_nested_expressions', 700, 200, "", "") }}

## まとめ

この記事では、 HTML 文書内に数式を挿入するために `<math>` 要素を使用する方法を見ていきました。 `display="block"` を使用する場合としない場合の `<math>` 要素のレンダリングの違いについて学びました。さらに、他にもいくつかの MathML 要素に出会いました。分数を表す `<mfrac>`、グループ化を表す `<mrow>`、そして最後にいくつかのテキスト要素です。これらの[テキストコンテナー](/ja/docs/Web/MathML/Tutorials/For_beginners/Text_containers)については次の記事で詳しく分析します。

## 関連情報

- [MathML の使用](/ja/docs/Web/MathML/Guides/Authoring#using_mathml)
- [`<math>` 要素](/ja/docs/Web/MathML/Reference/Element/math)
- [`<mfrac>` 要素](/ja/docs/Web/MathML/Reference/Element/mfrac)
- [`<mrow>` 要素](/ja/docs/Web/MathML/Reference/Element/mrow)
- [`math-style` プロパティ](/ja/docs/Web/CSS/Reference/Properties/math-style)
- [`math-depth` プロパティ](/ja/docs/Web/CSS/Reference/Properties/math-depth)

{{NextMenu("Web/MathML/Guides/Text_containers", "Web/MathML/Guides")}}
