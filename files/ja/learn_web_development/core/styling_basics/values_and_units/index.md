---
title: CSS の値と単位
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS ルールには[宣言](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_の宣言)が含まれており、その宣言はプロパティと値で構成されています。
CSS を使用するそれぞれのプロパティには、どのような値を使用することができるかを記述する**値の型**があります。
このレッスンでは、最も頻繁に使用する値の型と、それが何であるか、そしてそれらがどのように動作するかを見ていきます。

> [!NOTE]
> それぞれの [CSS プロパティページ](/ja/docs/Web/CSS/Reference#index)には、そのプロパティで使用することができる、値の種類を示す構文の節があります。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS の基本的な構文</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS セレクター<a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>プロパティ値にはさまざまな種類があり、それらの種類が何を意味するかを理解すること。</li>
          <li>基本的な型の使用に慣れること。数値、長さ、パーセント値、色、画像、位置指定、文字列、識別子、関数。</li>
          <li>絶対単位と相対単位が何であるか、またそれらの違いを理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS での値とは

CSS の仕様書や MDN のプロパティページでは、[`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) や {{cssxref("length")}} のような角括弧で囲まれた値を見かけることがあります。特定のプロパティに有効な値の型として `<color>` が表示されている場合、 [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) のリファレンスページに掲載されているように、そのプロパティの値として有効な色を使用することができることを意味しています。

値の型とプロパティが同じ名前、または類似した名前になっていることがあります。例えば、 {{cssxref("color")}} プロパティと [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) データ型があります。このような場合、角括弧を使用して、どちらを調べているのかを明確にすることができます。 HTML 要素も角括弧を使用しますが、どちらを調べているのかはコンテキストから明らかであるはずです。もし不明な場合は、MDN で検索してみてください。

> [!NOTE]
> CSSの値の型を「データ型」と呼ぶことがあります。 基本的に、これらの用語は同じ意味で使われており、 CSS でデータ型と呼ばれる何かを見かけた場合、それは実際には値の型を表現するおしゃれな言い方であると考えてください。「値」という用語は、値の型に対応している具体的な表現を指します。

次の例では、キーワードを使用して見出しの色を設定し、かつ背景色を `rgb()` 関数を使って指定します。

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

CSS の値の型とは、許容される値の集合を定義する方法です。つまり、もし `<color>` が有効であると判断した場合、キーワード、16 進数、`rgb()` 関数など、どの型の色値を使用することができるかを考える必要はありません。利用できるすべての `<color>` 値のうち、ブラウザーが対応していると考えられるものを利用することができます。 MDN でそれぞれの値のページを見ると、ブラウザーの対応についての情報が得られます。例えば、 [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) のページを見ていくと、ブラウザーの互換性の節に、さまざまな色の値の入力型と対応状況が記載されています。

ここでは見ることが多いいくつかの値の型や単位を確認しましょう。また例のさまざまな値を変えて試しましょう。

## 数値、長さ、パーセント値

CSS を使用していると、さまざまな数値の型があります。以下はすべて数値の型です。

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">データ型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/CSS/integer">&#x3C;integer></a></code>
      </td>
      <td>
        <code>&#x3C;integer></code> （整数）は、<code>1024</code> や <code>-55</code> のようなすべての整数です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/CSS/number">&#x3C;number></a></code>
      </td>
      <td>
        <code>&#x3C;number></code> （数値）は 10 進数です。小数点のあるものとないものがあります。例えば、<code>0.255</code>、<code>128</code>、<code>-1.2</code> です。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        <code>&#x3C;dimension></code>（量）は <code>&#x3C;number></code> に単位が付いたものです。例えば、 <code>45deg</code>, <code>5s</code>, <code>10px</code> などです。 <code>&#x3C;dimension></code> は {{cssxref("length")}}（長さ）、<code><a href="/ja/docs/Web/CSS/angle">&#x3C;angle></a></code>（角度）、<code><a href="/ja/docs/Web/CSS/time">&#x3C;time></a></code>（時間）、<code><a href="/ja/docs/Web/CSS/resolution">&#x3C;resolution></a></code>（解像度）などを傘下に持つカテゴリーです。
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        <code>&#x3C;percentage></code> （パーセント値）は他の値に対する割合を表します。例えば、 <code>50%</code> です。パーセント値は常に別の量との相対値です。例えば、要素の長さは親要素の長さに対する相対値です。
      </td>
    </tr>
  </tbody>
</table>

### 長さ

数値の型でもっともよく遭遇するのは {{cssxref("length")}} です。例えば、`10px` （ピクセル）や `30em` です。 CSS で使用される長さの種類は 2 つに分けられます。相対長と絶対長です。何かがどれほど大きいかを理解するためには、その違いを知ることが重要です。

#### 絶対長の単位

次の単位はすべて**絶対**長の単位です。この単位は、他の長さとの相対では決まりません。一般的にこの単位は常に同じサイズと考えられます。

| 単位 | 名前             | 換算                |
| ---- | ---------------- | ------------------- |
| `cm` | センチメートル   | 1cm = 96px/2.54     |
| `mm` | ミリメートル     | 1mm = 1/10 cm       |
| `Q`  | 1/4 ミリメートル | 1Q = 1/40 1cm       |
| `in` | インチ           | 1in = 2.54cm = 96px |
| `pc` | パイカ           | 1pc = 1in の 1/6    |
| `pt` | ポイント         | 1pt = 1in の 1/72   |
| `px` | ピクセル         | 1px = 1in の 1/96   |

これらの値の多くは印刷には便利ですが、画面出力には向いていません。例えば、私たちは画面上の長さに `cm` （センチメートル）を使いません。よく使用するのは `px` （ピクセル）だけです。

#### 相対長の単位

相対長の単位は、他の何かとの相対値です。

- `em` は、この要素のフォントサイズ、または {{cssxref("font-size")}} で使用する場合は親要素のフォントサイズからの相対値です。 `rem` はルート要素のフォントサイズからの相対値です。
- `vh` および `vw` は、それぞれビューポートの高さと幅に対する相対値です。

相対的な単位を使用することができる好ましいことは、注意深く計画することで、テキストや他の要素のサイズをページ上の他の要素に対して相対的に変倍するようにできることです。利用できる相対単位の完全な一覧は、 {{cssxref("length")}} 型のリファレンスページを参照してください。

この節では、最も一般的な相対単位について説明します。

#### 例を紐解く

次の例で、絶対的な長さの単位と相対的な長さの単位の振る舞いの違いを確認しましょう。最初のボックスには {{cssxref("width")}} がピクセル単位で指定されています。絶対単位なので、この幅は他の何が変わっても同じままです。

2 番目のボックスは相対的な長さの単位の、ビューポート幅に関連した `vw` を使用しています。この値は、ビューポート幅と関連しており、10vw は ビューポート幅の 10% にあたります。もしブラウザー幅を変化させた場合、このボックスのサイズは変化します。しかし、このページは [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) に埋め込んであるため、次の例は動作しません。この動作を確認するには、[このリンクをブラウザーの別タブで開いて、例を確認してください。](https://mdn.github.io/css-examples/learn/values-units/length.html)

3 番目のボックスは `em` 単位を使っています。この単位はフォントサイズに関連しています。 `1em` にあたるフォントサイズ設定は {{htmlelement("div")}} で指定してあります。これは `.wrapper` クラスがあります。 この値を 1.5em に変更すると、すべての要素のフォントサイズが増加しますが、最後の項目のみ width がフォントサイズに相対的であるため、最後の項目のみが広くなります。

上の手順を行った後で、これらの値を変更してどのようにふるまうかを確認してください。

```html live-sample___length
<div class="wrapper">
  <div class="box px">これは 200px の幅です</div>
  <div class="box vw">これは 10vw の幅です</div>
  <div class="box em">これは 10em の幅です</div>
</div>
```

```css live-sample___length
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

{{EmbedLiveSample("length", "", "250px")}}

#### em と rem

`em` と `rem` は開発者がボックスやテキストまですべてのサイズを変更するときによく遭遇する相対的な長さの単位です。これらがどのように動作するか、どのように違いがあるかを理解しましょう。特に[テキストの装飾](/ja/docs/Learn_web_development/Core/Text_styling)や [CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout)のようなより複雑なテーマを扱うようになったときに価値があります。以下の例は、デモを提供しています。

この HTML はネストしたリストの組です。全部で 3 つのリストがあり、どちらも同じ HTML です。唯一異なるのは、最初のものは _ems_ クラスを持っており、二つ目のものは _rems_ クラスを持っていることです。

始めるにあたって、`<html>` 要素のフォントサイズを 16px に指定しました。

**簡単に言うと、 em 単位は「親要素のフォントサイズ」を意味します**。 `ems` の `class` を持つ {{htmlelement("ul")}} 内の {{htmlelement("li")}} 要素は、親要素からサイズを受け取ります。そのため、入れ子の各レベルは、それぞれのフォントサイズが `1.3em` （親のフォントサイズの 1.3 倍）に設定されているため、徐々に大きくなっていきます。

**簡単に言うと、 rem 単位は「ルート要素のフォントサイズ」を意味します**（rem は "root em" を意味します）。この `rems` の `class` を持つ {{htmlelement("ul")}} の内部の {{htmlelement("li")}} 要素はルート要素 (`<html>`) からサイズ情報を取得します。 これは、ネストの各レベルが大きくなり続けないことを意味します。

ただし、CSS で `<html>` の `font-size` を変更すると、その他のすべて（`rem` サイズと `em` サイズの両方のテキスト）が相対的に変更されることがわかります。

```html live-sample___em-rem
<ul class="ems">
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___em-rem
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em;
}

.rems li {
  font-size: 1.3rem;
}
```

{{EmbedLiveSample("em-rem", "", "400px")}}

#### 行の高さの単位

`lh` と `rlh` は `em` と `rem` に似た相対的な長さの単位です。 `lh` と `rlh` の違いは、最初のものは要素そのものの行の高さであるのに対し、 2 つ目のものはルート要素（通常は `<html>`）の行の高さに対する相対値です。

これらの単位を用いることで、ボックスの装飾をテキストに正確に配置することができます。この例では、 `lh` 単位を使用して、 [`repeating-linear-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) を使ってメモ帳のような線を作成しています。テキストの行の高さは関係なく、行は常に正しい場所から始まります。

```css hidden live-sample___line_height_units
body {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  gap: 24px;
  background-color: floralwhite;
  font-family: sans-serif;
}

@supports not (height: 1lh) {
  body::before {
    grid-column: 1 / -1;
    padding: 8px;
    border-radius: 4px;
    background-color: tomato;
    color: white;
    content: "このブラウザーはまだ lh 単位に対応していません。";
  }
}
```

```css live-sample___line_height_units
p {
  margin: 0;
  background-image: repeating-linear-gradient(
    to top,
    lightskyblue 0 2px,
    transparent 2px 1lh
  );
}
```

```html-nolint live-sample___line_height_units
<p style="line-height: 2em">
  夏は冒険の季節であり、今年も例外ではありませんでした。私は多くの期待に満ちた経験をしましたが、その中でも特に気に入っているのは、ビーチへの旅行とサマーキャンプでの 1 週間です。
</p>

<p style="line-height: 4em">
  ビーチでは、泳いだり、貝殻を集めたり、砂のお城を作ったりして過ごしました。ボートに乗ってイルカが横に並んで泳いでいくのを見ました。
</p>
```

{{EmbedLiveSample("line_height_units", "100%", "370")}}

### パーセント値

多くの場合、パーセント値は長さと同じ方法で使用します。パーセント値のあるものは、ある他の値との相対的な値を設定します。例えば、ある要素の `font-size` にパーセント値を設定した場合、その親要素の `font-size` に対する割合を意味します。もしある `width` の値にパーセント値を使用した場合、その親要素の `width` に対する割合に設定されます。

下記の例では、 2 つのパーセント値のボックスと 2 つのピクセルサイズのボックスは同じクラス名を持っています。設定するには、それぞれ幅 40% と 200px です。

違いは、 2 つのボックスの 2 つ目が幅 400 ピクセルのラッパーの中に設定されていることです。 2 つ目の幅 200px のボックスは最初のボックスと同じ幅ですが、 2 つ目の 40% のボックスはこれで 400px の 40% になり、最初のボックスよりかなり狭くなります。

ラッパーの幅やパーセント値を変更して、これがどのように動作するのか試してみてください。

```html live-sample___percentage
<div class="box px">これは 200px の幅です</div>
<div class="box percent">これは 40% の幅です</div>
<div class="wrapper">
  <div class="box px">これは 200px の幅です</div>
  <div class="box percent">これは 40% の幅です</div>
</div>
```

```css live-sample___percentage
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}
```

{{EmbedLiveSample("percentage", "", "350px")}}

次の例はフォントサイズをパーセント値で指定しています。それぞれの `<li>` には `font-size` が 80% で設定されています。入れ子になったリストはその親のサイズを継承するため、徐々にフォントサイズが小さくなっています。

```html live-sample___percentage-fonts
<ul>
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___percentage-fonts
li {
  font-size: 80%;
}
```

{{EmbedLiveSample("percentage-fonts")}}

多くの値の型が長さまたはパーセント値を受け入れる一方で、長さしか受け入れないものもあることに注意してください。どの値が受け入れられるかは、 MDN プロパティのリファレンスページで確認できます。許容される値に {{cssxref("length-percentage")}} と記載されている場合、長さまたはパーセント値を使用することができます。許容される値に `<length>` しか記載されていない場合、パーセント値を使用することはできません。

### 数値

一部の値は、単位のない数値を受け入れます。 単位のない数値を受け入れるプロパティの例は、要素の不透明度（透明度）を制御する `opacity` プロパティです。 このプロパティは、 `0` （完全に透明）〜 `1`（完全に不透明）の数値を受け入れます。

この下の例を見てください。`opacity` を `0` から `1` までの間の数に変えて、この箱とそのコンテンツがどのよう表示されるかを確認してください。

```html live-sample___opacity
<div class="wrapper">
  <div class="box">これは opacity を設定したボックスです</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 200px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> CSS で値として数を使用する場合、その値を引用符で囲んではなりません。

## 色

色の値は、 CSS の多くの場所で使用することができます。テキストの色、背景、境界線、その他多くの色を指定します。
CSS で色を設定するには多くの方法があり、多くのエキサイティングなプロパティを制御することができます。

現行のコンピューターで利用できる標準色システムは 24 ビット色に対応しており、チャンネルごとに 256 の異なる値（256 x 256 x 256 = 16,777,216）を持つ赤、緑、青のチャンネルの組み合わせによって、約 1,670 万の異なる色を表示することができます。

この節では、最初によく見られる色の指定方法を見ていきます。キーワード、 16 進数、そして `rgb()` 値を使用します。
さらに、色関数を見たときにそれを認識できるように、あるいは色を適用するさまざまな方法を試すことができるように、その他の色関数についてもざっと見ていきます。

おそらくカラーパレットを決定し、その色、そして自分の好きな色の指定方法を自分のプロジェクト全体で使用することになるでしょう。
色モデルを混ぜて使用することができますが、一貫性を保つために自分のプロジェクト全体で同じ色の宣言メソッドを使用するのが通常ベストです！

### 色キーワード

多くの MDN のサンプルコードで色キーワード（または「名前付き色」）が使用されているのを見かけるでしょう。 [`<named-color>`](/ja/docs/Web/CSS/Reference/Values/named-color) データ型は非常に限られた数の色値しか含まれないため、本番のウェブサイトではあまり使用されません。キーワードは人間が読み取り可能なテキスト値として色を表しますので、名前付きカラーは、学習者が教えられているコンテンツに集中できるように、どの色が期待されているかを明確に指示するためにサンプルコードで使用されます。

次のライブサンプルででさまざまな色キーワードを試して、それがどのように作用するのか確認してください。

```html live-sample___color-keywords
<div class="wrapper">
  <div class="box one">antiquewhite</div>
  <div class="box two">blueviolet</div>
  <div class="box three">greenyellow</div>
</div>
```

```css live-sample___color-keywords
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

{{EmbedLiveSample("color-keywords")}}

### 16 進 RGB

次に遭遇しやすい色値の型は 16 進数のコードです。
16 進数は `0-9` と `a-f` の 16 文字を用いますので、全範囲は `0123456789abcdef` となります。
各16進数の色値はハッシュ/ポンド記号 (`#`) に続けて 3 文字または 6 文字の 16 進数（例えば `#fcc` や `#ffc0cb`）で構成され、オプションで 1 文字または 2 文字の 16 進数で、その前にある 3 文字または 6 文字の色値のアルファ透過率を表します。

16 進数を使用して RGB 値を記述する場合、 16 進文字の**ペア**はそれぞれ赤、緑、青のいずれかのチャンネルを表す数値で、それぞれ 256 個の利用できる値のいずれかを指定します（16 x 16 = 256）。
これらの値は色を定義するためのキーワードよりも直感的ではありませんが、 RGB のどの色でも表すことができるので、より汎用性があります。

値を変更して、色がどのように変化するかを試してみてください。

```html live-sample___color-hex
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>
```

```css live-sample___color-hex
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

{{EmbedLiveSample("color-hex")}}

### RGB 値

RGB 値を直接作成する場合、 [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) 関数は色の **赤**、**緑**、**青**の各チャンネル値を表す 3 つの引数を取り、オプションの 4 番目の値はスラッシュ ('/') で区切り、16 進値とほぼ同じ方法で不透明度を表します。RGB との違いは、各チャンネルが 2 桁の 16 進数ではなく、0 から 255 までの 10 進数、あるいは 0% から 100% までのパーセントで表します（この 2 つの混合はできません）。

最後の表記を書き直して、RGB で表現してみましょう。

```html live-sample___color-rgb
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>
```

```css live-sample___color-rgb
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}
```

{{EmbedLiveSample("color-rgb")}}

`rgb()` には 4 番目の引数を渡すことができ、これは色のアルファチャンネルを表します。この値を `0` に設定すると色は完全に透明になり、 `1` に設定すると完全に不透明になります。この中間の値を指定すると、さまざまな透過率を得ることができます。

> [!NOTE]
> 色にアルファチャンネルを設定する場合、先ほど見てきた {{cssxref("opacity")}} プロパティを使用するのとは異なる点があります。 opacity を使用すると、要素とその中のすべてのものを不透明にしますが、 RGB にアルファ引数付きの色を使用すると、指定した色だけを不透明にします。

次の例では、色のついたボックスの包含ブロックに背景画像を追加しています。 さらに、ボックスに異なる不透明度を設定しています。アルファチャンネルの値が小さいほど、背景がより濃く表示されることに注目してください。
この例では、アルファチャンネルの値を変更して、色出力にどのような影響があるか試してみてください。

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}
```

{{EmbedLiveSample("color-rgba", "", "250px")}}

### SRGB 値

`sRGB` 色空間は、**赤** (r)、**緑** (g)、**青** (b) の色空間で色を定義します。

### 色相を使用して色を指定

色キーワードや 16 進数、 `rgb()` を超えたものを使いたい場合は、 [`<hue>`](/ja/docs/Web/CSS/Reference/Values/hue) を使用してみるとよいでしょう。
色相は、赤、オレンジ、黄、緑、青などの色の違いや類似性を指示するプロパティです。
重要な概念は、 [`<angle>`](/ja/docs/Web/CSS/Reference/Values/angle) で色相を指定できるということです。なぜなら、ほとんどの色モデルは{{glossary("color wheel", "色相環")}}を使用して色相を記述しているからです。

`hsl()`、`hwb()`、[`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) など、 [`<hue>`](/ja/docs/Web/CSS/Reference/Values/hue) 成分を持つ色関数がいくつかあります。他にも、 [`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab) のような色関数は、人間が見ることができる色を定義します。

これらの関数や色空間についてもっと知りたい場合は、 [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)ガイドを参照してください、 CSS で色を使用することができるすべての異なる方法を掲載している [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) 参照、および色値を使用するすべてのプロパティの概要を提供された [CSS 色モジュール](/ja/docs/Web/CSS/Guides/Colors) を参照してください。

### HWB

CSS で色相を使用するための素晴らしい開始点は、 `srgb()` 色を指定する [`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb) 関数です。
3 つの部分は次の通りです。

- **色相** (Hue): 色のベースとなるシェード。これは [`<hue>`](/ja/docs/Web/CSS/Reference/Values/hue) の値を 0 から 360 までで取り、色相環の角度を表します。
- **白色度** (Whiteness): どのくらい白い色かです。これは `0%` （白さなし）から `100%` （完全な白）までの値を取ります。
- **黒色度** (Blackness): どのくらい黒い色かです。これは `0%` （黒さなし）から `100%` （完全な黒）までの値を取ります。

### HSL

`hwb()` 関数と同様に、 [`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) 関数も `srgb()` 色を指定します。
HSL は色相に加えて、彩度と明度を使用します。

- **色相** (Hue)
- **彩度** (Saturation): 色がどれだけ鮮やかか。これは 0–100% の値を取り、0 は色がなく（グレーのシェードに見える）、100% は完全に鮮やかな色となります。
- **明度** (Lightness): 色がどれだけ明るいか。これは 0–100% の値を取り、0 は明度がなく（完全な黒に見える）、100% は最大の明度です（完全な白となる）。

`hsl()` の色値には、オプションでアルファ透過率を表す 4 番目の値があり、色とスラッシュ (`/`) で区切ります。

RGB の例を HSL の色に更新すると次のようになります。

```html live-sample___color-hsl
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>
```

```css live-sample___color-hsl
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}
```

{{EmbedLiveSample("color-hsl")}}

`rgb()` と同様に、 `hsl()` にアルファ引数を渡して透明度を指定することができます。

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}
```

{{EmbedLiveSample("color-hsla", "", "250px")}}

## 画像

[`<image>`](/ja/docs/Web/CSS/Reference/Values/image) データ型は画像が妥当な値となる場合に使われます。これは `url()` 関数で指定される実際の画像ファイルか、グラデーションです。

下記の例では、画像とグラデーションを CSS の `background-image` プロパティの値として使用する例を示しています。

```html live-sample___image
<div class="box image"></div>
<div class="box gradient"></div>
```

```css live-sample___image
.box {
  height: 150px;
  width: 300px;
  margin: 20px auto;
  border-radius: 0.5em;
}
.image {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 100%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> `<image>` が取りうる他の値もありますが、それは新しくてブラウザーの対応が貧弱です。知りたい場合、MDN の [`<image>`](/ja/docs/Web/CSS/Reference/Values/image) データ型のページを確認してください。

## 位置

[`<position>`](/ja/docs/Web/CSS/Reference/Values/position_value) データ型は 2 次元の座標を表しており、背景画像のような項目（[`background-position`](/ja/docs/Web/CSS/Reference/Properties/background-position) にて）の位置を決めるのに使われます。これは `top`, `left`, `bottom`, `right`, `center` のようなキーワードを取って、ボックスの上や左の隅からオフセットさせる長さの値とともに、2 次元のボックスの特定の境界にアイテムを揃えます。

典型的な位置の値は 2 つの値を持ち — 最初は水平位置を、2 つ目は垂直位置をセットします。1 つの軸だけの値を指定する場合、もう 1 つは既定で `center` となります。

次の例では、背景画像をキーワードを使ってコンテナーの右端の上から 40px の位置に配置しています。
この値でいろいろ遊んでみて、画像がどう移動するか見てください。

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 100px;
  width: 400px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
  background-repeat: no-repeat;
  background-position: right 40px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position")}}

## 文字列と識別子

上記の例を通じて、キーワードが値として使われる場所を見てきました (例えば、`<color>` キーワードの例として `red`, `black`, `rebeccapurple`, `goldenrod`)。このキーワードをより正確に述べると、 CSS が理解できる特別な値の _識別子_ です。このためそれは引用符で囲まれておらず、文字列として扱われません。

CSS で文字列が使われる場所もあります、例えば、[生成されたコンテンツを指定するとき](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#before_および_after_を使用したコンテンツの生成)です。この場合、値は文字列を示すようクォートで囲まれます。下記の例ではクォートで囲まれていない color キーワードと生成されたコンテンツ文字列を一緒に使っています。

```html live-sample___strings-idents
<div class="box"></div>
```

```css live-sample___strings-idents
.box {
  width: 400px;
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
}

.box::after {
  content: "これは文字列です。 CSS で引用されているので、私は知っています。";
}
```

{{EmbedLiveSample("strings-idents")}}

## 関数

プログラミングにおいて、関数は特定のタスクを実行するコードの一部です。
関数を使用することで、同じロジックを何度も書く必要がなくなり、一度書いたコードを何度も再利用することができます。
ほとんどのプログラミング言語は関数に対応しているだけでなく、一般的なタスクのための便利な組み込み関数が決まりますので、自分で一から書く必要はありません。

CSS にも[関数](/ja/docs/Web/CSS/Reference/Values/Functions)があり、他の言語の関数と同じように動作します。
実際、すでに CSS 関数としては、上記の[色](#色)の節で、 [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) と [`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) 関数をすでに見てきました。

色を適用する以外にも、 CSS で関数を使用して多数のことを行うことができます。
例えば[座標変換関数](/ja/docs/Web/CSS/Reference/Values/Functions#座標変換関数)はページ上の要素を移動したり、回転させたり、変倍したりする一般的な方法です。
何かを水平や垂直に移動させるには [`translate()`](/ja/docs/Web/CSS/Reference/Values/transform-function/translate) を、何かを回転させるには [`rotate()`](/ja/docs/Web/CSS/Reference/Values/transform-function/rotate) を、何かを大きくしたり小さくしたりするには [`scale()`](/ja/docs/Web/CSS/Reference/Values/transform-function/scale) を使うでしょう。

### 数学関数

自分のプロジェクトのスタイル設定をするとき、長さを表す `300px` や再生時間を表す `200ms` といった数値から始めることになるでしょう。
もしこれらの値を他の値に基づいて変化させたい場合は、いくつかの計算が必要になります。
値のパーセント値を計算したり、数値を別の数値に追加したりして、その結果で CSS を更新します。

CSS は[数学関数](/ja/docs/Web/CSS/Reference/Values/Functions#数学関数)に対応しており、静的な数値に頼ったり JavaScript で計算したりする代わりに計算を行うことができます。
最も一般的な数学関数の一つは [`calc()`](/ja/docs/Web/CSS/Reference/Values/calc) で、足し算、引き算、掛け算、割り算のような処理を行うことができます。

例えば、ある要素の幅を親コンテナーの 20% に 100px を加えた値に設定したいとします。
この幅を固定値で指定することはできません。親要素がパーセント値の幅 (または `em` や `rem` のような相対単位) を使用している場合、使用するコンテキストや、ユーザーの端末やウィンドウの幅など、他にも要因によって幅が変わります。
しかし、 `calc()` を使用することで、要素の幅を親コンテナーの 20% + 100px に設定することができます。
この 20% は親コンテナー (`.wrapper`) の幅に基づいており、その幅が変更された場合、計算も変更されます。

```html live-sample___calc
<div class="wrapper">
  <div class="box">この幅は計算されたものです。</div>
</div>
```

```css live-sample___calc
.wrapper {
  width: 400px;
}
.box {
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
  width: calc(20% + 100px);
}
```

{{EmbedLiveSample("calc")}}

他にも CSS で使用することができる数学関数はたくさんあります。[`min()`](/ja/docs/Web/CSS/Reference/Values/min)、[`max()`](/ja/docs/Web/CSS/Reference/Values/max)、[`clamp()`](/ja/docs/Web/CSS/Reference/Values/clamp) などで、それぞれ設定した値の中から最小、最大、中間の値を選ぶことができます。
また、[三角関数](/ja/docs/Web/CSS/Reference/Values/Functions#三角関数)、たとえば [`sin()`](/ja/docs/Web/CSS/Reference/Values/sin)、[`cos()`](/ja/docs/Web/CSS/Reference/Values/cos)、[`tan()`](/ja/docs/Web/CSS/Reference/Values/tan) あんどを使用して、この点を中心に要素を回転させる角度を計算したり、[色相角](/ja/docs/Web/CSS/Reference/Values/hue)を引数として色を選んだりすることができます。
[指数関数](/ja/docs/Web/CSS/Reference/Values/Functions#指数関数)は、アニメーションやトランジションに使用することもでき、何かの移動や見てくれを非常に具体的に制御する必要がある場合に使用します。

CSS関数について知っておくことは有益なことです。普通の CSS で取得できる結果を得るために、カスタムコードを書いたり、繰り返しコードを書いたりせずに済むようになります。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values)を見てください。

## まとめ

ここまで最もよく見かける値と単位を一通り見てきました。[CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units) のリファレンスページで、さまざまな型をすべて見ることができます。多くはこのレッスンを進んでいくと出てくるでしょう。

覚えておくべき重要なことは、各プロパティには許可される値の定義されたリストがあり、各値にはサブ値が何であるかを説明する定義があるということです。詳細は MDN で調べることができます。例えば、[`<image>`](/ja/docs/Web/CSS/Reference/Values/image) でもカラーグラデーションを作成できることを理解しておくと便利ですが、たぶん当たり前の知識ではないでしょう。

次の記事では、 CSS においてアイテムがどのようにサイズ指定されるかを見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
