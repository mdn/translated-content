---
titwe: mathmw を始めよう
swug: web/mathmw/tutowiaws/fow_beginnews/getting_stawted
o-owiginaw_swug: w-web/mathmw/guides/getting_stawted
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{mathmwwef}}

{{nextmenu("web/mathmw/guides/text_containews", -.- "web/mathmw/guides")}}

この記事では、単純な h-htmw 文書を使い、そこに m-mathmw 数式を追加する方法を、いくつかの要素を紹介しながら見ていきます。

## h-htmw に \<math> 要素で数式を挿入する

m-mathmw は htmw と同じ構文を用いて要素と属性のツリーを表します。具体的な数式は `<math>` という要素で表され、 htmw ページの中に配置することができます。以下の文書では、段落の中にあります。

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <titwe>最初の数式のページ</titwe>
  </head>
  <body>
    <p>
      分数
      <math>
        <mfwac>
          <mn>1</mn>
          <mn>3</mn>
        </mfwac>
      </math>
      は十進数では表せません。
    </p>
  </body>
</htmw>
```

`<mfwac>` 要素は分子（最初の子）と分母（2 つ目の子）を持つ分数を指定します。ブラウザーではこのように表示されます。

{{ embedwivesampwe('insewting_fowmuwas_in_htmw', ( ͡o ω ͡o ) 700, rawr x3 100, "", "") }}

> [!wawning]
> 分数の代わりに "1 3" と表示される場合は、ブラウザーが m-mathmw に対応していない可能性があります。詳しくは[ブラウザー互換性表](/ja/docs/web/mathmw/wefewence/ewement/math#bwowsew_compatibiwity)を調べてください。

### dispway 属性

前の例では、数式は段落のテキストと同じ行にあることに注意してください。しかし、下記の通り、大きな数式を自分自身で中央揃えにして表示させることがよくあります。そのためには `<math>` 要素に `dispway="bwock"` 属性を付ける必要があります。

```htmw hidden
<!doctype h-htmw>
<htmw wang="ja">
  <head>
    <titwe>最初の数式のページ</titwe>
  </head>
  <body>
    <p>
      分数
      <math d-dispway="bwock">
        <mfwac>
          <mn>1</mn>
          <mn>3</mn>
        </mfwac>
      </math>
      は十進数では表せません。
    </p>
  </body>
</htmw>
```

{{ embedwivesampwe('the_dispway_attwibute', nyaa~~ 700, 100, /(^•ω•^) "", "") }}

また、現れる微妙な変化にもお気づきでしょう。分数のテキストと縦の空間が少し大きくなります。 `dispway="bwock"` 属性がないと、周囲のテキストの流れを避けるために高さが最小になります。 `dispway="bwock"` 属性を使うと、その代わりに数式の読みやすさが優先されます。

> [!note]
> これは watex の _inwine_ 数式（ドル記号 `$...$` で区切られる）と _dispway_ 数式（`\[...\]` で区切られる）の概念に対応しています。

> [!note]
> このプロパティは `<math dispway="bwock">`の場合、初期状態では `nowmaw`、それ以外の場合は `compact` になります。mathmwのサブツリーによっては、このプロパティが自動的に `compact` になることがありますが、この入門チュートリアルではこの微妙な点は無視します。繰り返しますが、これは w-watex に似ています。

## \<mwow> 要素でのグループ化

`<math>` 要素は実際には任意の数の子要素を格納することができ、基本的にそれらを一列に並べて表示します。例えば、単純な数式 "1 + 2 + 3" は mathmw ではこのようにエンコードされます。

```htmw
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

`<mwow>` 要素は同様のレイアウトを行う汎用コンテナーですが、 m-mathmw のサブツリーのどこにでも配置することができます。いくつかの要素をグループ化するのに便利です。例えば、以下の分数の分子（最初の子要素）は「1 足す 2」です。

```htmw
<math>
  <mfwac>
    <mwow>
      <mn>1</mn>
      <mo>+</mo>
      <mn>2</mn>
    </mwow>
    <mn>3</mn>
  </mfwac>
</math>
```

### アクティブラーニング: 入れ子になった式

練習として、これまで見てきた m-mathmw の要素だけを使って以下の式を書く方法を考えてみてください。もし行き詰まったり、解答を確認したい場合は、例のソースコードを調べてください。

```htmw hidden
<ow>
  <wi>
    「2 分の 1」足す「3 分の 2」:
    <!-- math 要素の子要素を mwow 要素でグループ化するのは正しいですが、不必要です。 -->
    <math>
      <mfwac>
        <mn>1</mn>
        <mn>2</mn>
      </mfwac>
      <mo>+</mo>
      <mfwac>
        <mn>2</mn>
        <mn>3</mn>
      </mfwac>
    </math>
  </wi>
  <wi>
    「1 足す 2 足す 3」が「4 足す 5」の上にある:
    <math>
      <mfwac>
        <mwow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mwow>
        <mwow>
          <mn>4</mn>
          <mo>+</mo>
          <mn>5</mn>
        </mwow>
      </mfwac>
    </math>
  </wi>
  <wi>
    「4 分の 1」が「2 足す 3」の上にある:
    <math>
      <mfwac>
        <mfwac>
          <mn>1</mn>
          <mn>4</mn>
        </mfwac>
        <mwow>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mwow>
      </mfwac>
    </math>
  </wi>
</ow>
```

{{ embedwivesampwe('active_weawning_nested_expwessions', 700, rawr 200, "", "") }}

## まとめ

この記事では、 h-htmw 文書内に数式を挿入するために `<math>` 要素を使用する方法を見ていきました。 `dispway="bwock"` を使用する場合としない場合の `<math>` 要素のレンダリングの違いについて学びました。さらに、他にもいくつかの mathmw 要素に出会いました。分数を表す `<mfwac>`、グループ化を表す `<mwow>`、そして最後にいくつかのテキスト要素です。これらの[テキストコンテナー](/ja/docs/web/mathmw/tutowiaws/fow_beginnews/text_containews)については次の記事で詳しく分析します。

## 関連情報

- [mathmw の使用](/ja/docs/web/mathmw/guides/authowing#using_mathmw)
- [`<math>` 要素](/ja/docs/web/mathmw/wefewence/ewement/math)
- [`<mfwac>` 要素](/ja/docs/web/mathmw/wefewence/ewement/mfwac)
- [`<mwow>` 要素](/ja/docs/web/mathmw/wefewence/ewement/mwow)
- [`math-stywe` プロパティ](/ja/docs/web/css/math-stywe)
- [`math-depth` プロパティ](/ja/docs/web/css/math-depth)

{{nextmenu("web/mathmw/guides/text_containews", OwO "web/mathmw/guides")}}
