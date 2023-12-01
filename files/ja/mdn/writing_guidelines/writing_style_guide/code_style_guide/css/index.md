---
title: CSS のコード例を整形するためのガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
---

{{MDNSidebar}}

次のガイドラインでは、MDN コードの例として CSS を記述する方法について説明します。

## CSS のコード例のための全般的なガイドライン

### CSS を計画する

CSS を大量に書き込む前に、スタイルを慎重に計画しましょう。どのようなスタイルが必要なのか、どのようなレイアウトが必要なのか、どのようなオーバーライドが必要なのか、そしてそれらは再利用可能なものなのか。特に、**オーバーライドのしすぎは禁物**です。スタイルを書いても、いくつかのルールセットで再びキャンセルしてしまうようなことがあれば、おそらく戦略を見直す必要があります。

### 柔軟性のある/相対的な単位を使う

可能な限り幅広い端末で最大限の柔軟性を実現するために、コンテナーやパディングなどの寸法は、em や rem のような相対的な単位を使用し、ビューポートの幅に応じて変化させたい場合はパーセント値やビューポートの単位を使うことをお勧めします。これについては、[レスポンシブデザインの構成要素](/ja/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks#fluid_grids)の記事をご覧ください。

### プリプロセッサーを使用しない

MDN のサンプル コードでは、[Sass](https://sass-lang.com/),[Less](https://lesscss.org/),[Stylus,](http://stylus-lang.com/)などのプリプロセッサー構文を使用しないでください。MDN はバニラ CSS 言語を文書化しており、プリプロセッサーを使うことは、例を理解するためのハードルを上げるだけであり、読者を混乱させる可能性があります。

### 特定の CSS の方法論を使わない

前のガイドラインと同じ精神で、 [BEM](http://getbem.com/naming/) や [SMACSS](https://smacss.com/) のような特定の CSS の方法論を使って MDN のサンプルコードを書かないようにしてください。これらが有効な CSS 構文であっても、それらの方法論に精通していない人にとっては、命名規則が混乱を招く可能性があります。

### リセットを使わない

プラットフォーム横断的に CSS を最大限に制御するために、多数の人が CSS リセットを使用してすべてのスタイルを削除し、その後、自分で再構築する方法をとっています。これには確かにメリットがありますが、特に現代では CSS リセットはやりすぎで、既定のマージンやリストスタイルなど、元々完全に壊れていないものを再実装するために多数の余分な時間がかかってしまうことがあります。

もし本当にリセットを使う必要があると感じたら、[Nicolas Gallagher による normalize.css](https://necolas.github.io/normalize.css/) の使用を検討してください。これは、ブラウザー間でより一貫したものにし、いつも削除している既定の厄介なもの（例えば `<body>` 上のマージン）を取り除き、いくつかのバグを修正することだけを目的としています。

### !important は使わない

`!important` は最後の手段で、何かを上書きする必要があり、他に方法がないときだけ使用します。これは悪しき習慣であり、可能な限り避けるべきです。

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### CSS のコメント

自己文書化されていないコードにコメントを付けるには、 CSS 形式のコメントを使用してください。

```css example-good
/* これが CSS 形式のコメントです。 */
```

コメントは、参照するコードの前に別の行で記述してください。

```css example-good
h3 {
  /* 赤色のドロップシャドウを、右下に 1px のオフセット、 2px のぼかし半径で作成 */
  text-shadow: 1px 1px 2px red;
  /* フォントサイズを文書の既定値の 2 倍に設定 */
  font-size: 2rem;
}
```

### 値の周りには二重引用符を使う

引用符を入れることができる、または入れる必要がある場合は、次のように二重引用符を使用してください。

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

### 一括指定と個別指定のルール

通常、 CSS 構文の詳細を教える場合、簡潔な一括指定よりも個別指定のプロパティを使用した方が明確でわかりやすいです（もちろん、簡潔な一括指定を教えることがこの例のポイントである場合は除きます）。 MDN の例のポイントは、人に教えることであって、賢いやり方でも効率的でもないことを覚えておいてください。

- そもそも、一括指定は何をやっているのか理解するのが難しいことが多いのです。例えば {{cssxref("font")}} 構文が何をしているのかを正確に拾い上げるには、しばらく時間がかかります。

  ```css
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  一方、こちらはより即座に理解することができます。

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- CSS の一括指定には潜在的な落とし穴があります。明示的に設定していない構文の属値に既定値が設定され、カスケードで先に設定した値を予期せぬ形でリセットしてしまったり、その他の予期せぬ効果をもたらす可能性があるからです。例えば {{cssxref("grid")}} プロパティは、指定されていない項目に対して、以下のすべての既定値を設定します。

  - {{cssxref("grid-template-rows")}}: `none`
  - {{cssxref("grid-template-columns")}}: `none`
  - {{cssxref("grid-template-areas")}}: `none`
  - {{cssxref("grid-auto-rows")}}: `auto`
  - {{cssxref("grid-auto-columns")}}: `auto`
  - {{cssxref("grid-auto-flow")}}: `row`
  - {{cssxref("column-gap")}}: `0`
  - {{cssxref("row-gap")}}: `0`
  - {{cssxref("column-gap")}}: `normal`
  - {{cssxref("row-gap")}}: `normal`

- 一部の一括指定は、様々な値の構成要素を特定の順序で入れないと期待通りに動作しません。例えば CSS アニメーションでは、次のようになります。

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

  例として、 [`<time>`](/ja/docs/Web/CSS/time) として解釈できる最初の値は [`animation-duration`](/ja/docs/Web/CSS/animation-duration) に割り当てられ、 2 つ目の値は [`animation-delay`](/ja/docs/Web/CSS/animation-delay) に割り当てられます。詳しくは、 [animation の構文](/ja/docs/Web/CSS/animation#構文)の詳細をご覧ください。

### 「モバイルファースト」のメディアクエリーを使う

同じスタイルシート内で[メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)を使用して、様々なターゲットのビューポートサイズによって異なるスタイルのセットを入れるとき、メディアクエリーが文書に適用される前の既定のスタイルを狭い画面／モバイルスタイルとし、その後メディアクエリー内で広いビューポート用に上書きするのはよい考えです。これには多くの利点があり、[モバイルファースト](/ja/docs/Web/Progressive_web_apps/Responsive/Mobile_first)の記事で概説しています。

```css example-good
/* 狭い画面向けの既定の CSS レイアウト値 */

@media (min-width: 480px) {
  /* 中型の画面向けの CSS */
}

@media (min-width: 800px) {
  /* 広い画面向けの CSS */
}

@media (min-width: 1100px) {
  /* 本当に広い画面向けの CSS */
}
```

## セレクター

- ID セレクターを使用しないでください。理由は以下の通りです。

  - ID セレクターは柔軟性に欠け、複数必要だとわかっても追加できません。
  - クラスよりも特異性が高く、必要な場合に上書きするのが難しいです。

  ```css example-good
  .editorial-summary {
    ...
  }
  ```

  ```css example-bad
  #editorial-summary {
    ...
  }
  ```

- ルールに複数のセレクターがある場合、それぞれのセレクターを別の行に置いてください。こうすることで、セレクターのリストが読みやすくなり、コードの各行を短くすることができます。

  次のようにしてください。

  ```css example-good
  h1,
  h2,
  h3 {
    font-family: sans-serif;
    text-align: center;
  }
  ```

  次のようにはしないでください。

  ```css example-bad
  h1,
  h2,
  h3 {
    font-family: sans-serif;
    text-align: center;
  }
  ```

### 関数の引数のスペース

関数の引数には、区切り文字のカンマの後にスペースを置くべきですが、その前には置きません。

```css example-good
color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);
```

### 構文のスタイル

CSS にはさまざまな記述方法がありますが、私たちは、セレクター/開始中括弧、終了中括弧、および各宣言がそれぞれ別の行にある、展開されたスタイルを好んで使用します。これは読みやすさを最大限に高め、また MDN での一貫性を促進します。

加えて、以下の慣例を意識してください。

- セレクターと中括弧の間にはスペースを入れる。
- 最後の宣言の最後には、たとえ厳密には必要ないとしても、必ずセミコロンを入れる。
- 閉じ中括弧は改行して書く。
- それぞれの宣言では、区切りコロンの後にスペースを入れ、その前には入れない。
- コードのインデントには 2 つのスペースを使う。

```css example-good
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

```css example-bad
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

### border などのプロパティをオフにする

境界（および他のプロパティのうち、値として `0` または `none` を取ることができるもの）をオフにするときは、 `none` ではなく `0` を使用してください。

```css example-good
border: 0;
```

## 関連情報

[CSS のキーワード索引](/ja/docs/Web/CSS/Reference#index)から探して参照してみてください。そこにあるインタラクティブな例は、一般的に上記のガイドラインに沿って書かれていますが、ガイドラインが新しく書かれる前に書かれたものがほとんどなので、場所によってはそうではない場合があることに注意してください。
