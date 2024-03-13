---
title: 過去のレイアウト方法
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

グリッドシステムは CSS レイアウトで使用される非常に一般的な機能で、CSS グリッドレイアウト以前はフロートや他のレイアウト機能を使用して実装される傾向がありました。 あなたはレイアウトをいくつかの列（例えば 4、6、または 12）として想像し、そしてコンテンツの列をこれらの想像上の列の内側に合わせます。 この記事では、古いプロジェクトで作業した場合に、それらがどう使われたかを理解するために、これらの古い方法がどのように機能するのかを説明します。

| 前提知識: | HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)と[ボックスの装飾](/ja/docs/Learn/CSS/Styling_boxes)を学ぶ）。 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | CSS グリッドレイアウトがブラウザーで利用可能になる前に使用されていたグリッドレイアウトシステムの背後にある基本概念を理解すること。                                                                                      |

## CSS グリッドレイアウト以前のレイアウトとグリッドシステム

CSS がごく最近まで内蔵されたグリッドシステムを持っていなかったことを、デザインをやってきた誰かは驚くかもしれません。 そして代わりにグリッドのようなデザインを作成するためにさまざまな次善の方法を用いていたようです。 今これらを「過去の」方法と呼んでいます。

新しいプロジェクトでは、ほとんどの場合、CSS グリッドレイアウトを他の 1 つ以上の最新のレイアウト方法と組み合わせて使用して、任意のレイアウトの基礎とします。 しかし、時々、これらの過去の方法を使用している「グリッドシステム」に遭遇するでしょう。 それらがどのように機能するのか、そしてなぜそれらが CSS グリッドレイアウトと異なるのかを理解するのは価値があります。

このレッスンでは、フロートとフレックスボックスに基づいたグリッドシステムとグリッドフレームワークの仕組みについて説明します。 グリッドレイアウトを勉強してきたので、おそらくこれがどれほど複雑であるかに驚くことでしょう！ この種のシステムを使用する既存のプロジェクトで作業できるようにすることに加えて、新しい方法をサポートしないブラウザー用の代替コードを作成する必要がある場合に、この知識は役に立ちます。

これらのシステムを検討する際には、それらのどれも実際には CSS グリッドレイアウトがグリッドを作成する方法でグリッドを作成しないことに、留意する価値があります。 それらは項目にサイズを与え、グリッドのように*見える*ように一列に並べることによって機能します。

## 2 列レイアウト

最も簡単な例として、2 列のレイアウトから始めましょう。 コンピュータ上に新しい `index.html` ファイルを作成し、それを[単純な HTML テンプレート](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)で埋め、適切な場所に以下のコードを挿入することで、従うことができます。 このセクションの一番下には、最終的なコードがどのようになっているべきかの実例があります。

まず最初に、列に入れるためにいくつかのコンテンツが必要です。 次のもので `body` の中に現在あるものはすべて置き換えます。

```html
<h1>2 column layout example</h1>
<div>
  <h2>First column</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>
</div>

<div>
  <h2>Second column</h2>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

それぞれの列はそのコンテンツを含むために外側の要素が必要です。 この例では {{htmlelement("div")}} を選択しましたが、{{htmlelement("article")}}、{{htmlelement("section")}}、{{htmlelement("aside")}} など、より意味論的に適切なものを選択することもできます。

今 CSS に対して、まず最初に、HTML に従うため、いくつかの基本的な設定を提供するために次を適用します。

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

`body` の幅が 900px になるまで、`body` はビューポートの幅の 90% になります。 この場合、`body` はこの幅に固定され、ビューポートの中央に配置されます。 デフォルトでは、その子（{{htmlelement("h1")}} と 2 つの {{htmlelement("div")}}）は `body` の幅の 100% にわたります。 2 つの {{htmlelement("div")}} を互いに並べてフロートしたい場合は、それらの幅の合計をその親要素の幅の 100% 以下に設定して、互いに並んで収まるようにする必要があります。 CSS の最後に次を追加してください。

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

ここでは、両方とも親の幅の 48% に設定しました — これは合計 96% で、2 列の間のガターのために 4% の空きを残し、コンテンツに余裕を持たせることができます。 さらに次のようにして、列をフロートにする必要があります。

```css
div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

これらすべてをまとめると、次のような結果が得られます。

```html hidden
<h1>2 column layout example</h1>

<div>
  <h2>First column</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>
</div>

<div>
  <h2>Second column</h2>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

{{ EmbedLiveSample('Floated_Two_Col', '100%', 520) }}

ここでは、すべての幅にパーセントを使用していることに気付くでしょう。 これは、さまざまな画面サイズに合わせて調整し、小さい画面サイズで列幅に同じ比率を維持する、**リキッドレイアウト**（liquid layout）を作成するため、非常に良い戦略です。 ブラウザーウィンドウの幅を調整して確認してください。 これはレスポンシブウェブデザインのための貴重なツールです。

> **メモ:** この例は [0_two-column-layout.html](http://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) で実行できます（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/0_two-column-layout.html)も見る）。

## 単純な過去のグリッドフレームワークを作成する

過去のフレームワークの大部分は、グリッドのように見えるものを作成するために、{{cssxref("float")}} プロパティのふるまいを使用して、ある列を別の列の隣にフロートします。 フロートによるグリッドを作成するプロセスを通して、これがどのように機能するかを説明し、[フロートとクリア](/ja/docs/Learn/CSS/CSS_layout/Floats)のレッスンで学んだことを基にしてさらに高度な概念を紹介します。

作成する最も簡単な種類のグリッドフレームワークは固定幅のものです — デザインに必要な合計幅、列数、およびガター幅と列幅を求める必要があります。 ブラウザーの幅に合わせて増減する列を含むグリッドにデザインをレイアウトすることにした場合は、列とそれらの間のガターに対してパーセント幅を計算する必要があります。

次のセクションでは、両方を作成する方法を見ていきます。 12 列のグリッドを作成します — 12 が 6、4、3、および 2 で割り切れることを考えると、さまざまな状況に非常に適応できると見られる非常に一般的な選択です。

### 単純な固定幅グリッド

最初に固定幅の列を使用するグリッドシステムを作成しましょう。

サンプルの [simple-grid.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid.html) ファイルのローカルコピーを作成することから始めます。 このファイルには、`body` に次のマークアップが含まれています。

```html
<div class="wrapper">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col span1">13</div>
    <div class="col span6">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
  </div>
</div>
```

目的は、これを 12 列 2 行のグリッドのデモ用グリッドに変換することです — 一番上の行は個々の列のサイズを示し、2 番目の行はグリッド上のいくつかの異なるサイズの領域です。

![](simple-grid-finished.png)

{{htmlelement("style")}} 要素に、次のコードを追加します。 これにより、`wrapper` コンテナの幅は 980 ピクセルになり、右側のパディングは 20 ピクセルになります。 これにより、列幅とガター幅の合計が 960 ピクセルになります — この場合、サイト上のすべての要素で {{cssxref("box-sizing")}} を `border-box` に設定しているため、パディングはコンテンツの幅の合計から差し引かれます（詳細については、[ボックスモデルの完全な変更](/ja/docs/Learn/CSS/Styling_boxes/Box_model_recap#Changing_the_box_model_completely)を参照）。

```css
* {
  box-sizing: border-box;
}

body {
  width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 20px;
}
```

次に、グリッドの各行を囲む `row` コンテナを使用して、ある行を別の行からクリアします。 前の規則の下に次の規則を追加します。

```css
.row {
  clear: both;
}
```

このクリアを適用すると、各行を 12 列の要素で完全に埋める必要がなくなります。 行は分離されたままになり、互いに干渉しません。

列の間のガターは 20 ピクセル幅です。 最初の列を含め、各列の左側にマージンとしてこれらのガターを作成して、コンテナの右側にある 20 ピクセルのパディングとのバランスを取ります。 だから全部で 12 のガターを持っています — 12 x 20 = 240。

これを 960 ピクセルの合計幅から差し引いて、列に 720 ピクセルを与える必要があります。 これを 12 で割ると、各列の幅は 60 ピクセルになるはずです。

次のステップは、`.col` クラスの規則を作成し、それを左にフロートして、ガターを形成する 20 ピクセルの {{cssxref("margin-left")}} と、60 ピクセルの {{cssxref("width")}} を与えることです。 CSS の最後に次の規則を追加してください。

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255, 150, 150);
}
```

これで、一番上の単一列の行がグリッドとしてきちんとレイアウトされます。

> **メモ:** また、各列に薄い赤色を指定したので、各列がどれだけのスペースを占めているかを正確に確認できます。

複数列にまたがるコンテナのレイアウトには、必要な列数（足す、その間のガター）に合わせて {{cssxref("width")}} の値を調整するための特別なクラスを指定する必要があります。 コンテナが 2〜12 列にまたがるようにするために、追加のクラスを作成する必要があります。 それぞれの幅は、その列数の列幅にガター幅を加えた結果です。 ガター幅は常に列数より 1 つ少なくなります。

CSS の最後に次を追加してください。

```css
/* Two column widths (120px) plus one gutter width (20px) */
.col.span2 {
  width: 140px;
}
/* Three column widths (180px) plus two gutter widths (40px) */
.col.span3 {
  width: 220px;
}
/* And so on... */
.col.span4 {
  width: 300px;
}
.col.span5 {
  width: 380px;
}
.col.span6 {
  width: 460px;
}
.col.span7 {
  width: 540px;
}
.col.span8 {
  width: 620px;
}
.col.span9 {
  width: 700px;
}
.col.span10 {
  width: 780px;
}
.col.span11 {
  width: 860px;
}
.col.span12 {
  width: 940px;
}
```

これらのクラスを作成したら、グリッド上にさまざまな幅の列を配置できます。 効果を確認するには、ページを保存してブラウザーでロードします。

> **メモ:** 上記の例がうまくいかない場合は、GitHub の[完成版](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid-finished.html)と比較してみてください（[ライブでも見られます](http://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html)）。

要素のクラスを変更したり、コンテナを追加したり削除したりして、レイアウトの変更方法を確認してください。 例えば、2 行目を次のようにすることができます。

```css
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

これで、グリッドシステムが機能したので、単純に行と各行の列数を定義してから、各コンテナに必要なコンテンツを埋めるだけです。 すばらしいです！

### フルードグリッドを作成する

私たちのグリッドはうまく機能しますが、幅は固定されています。 ブラウザーの{{Glossary("viewport","ビューポート")}}で利用可能なスペースに応じて拡大縮小する柔軟な（フルード（fluid、流動的な））グリッドが本当に必要です。 これを実現するために、参照するピクセル幅をパーセントに変えることができます。

固定幅を柔軟なパーセントベースのものに変換する式は次のとおりです。

```
target / context = result
```

列幅については、目標の幅（**target width**）は 60 ピクセル、コンテキスト（**context**）は 960 ピクセルの `wrapper` です。 パーセントを計算するために次のようにします。

```
60 / 960 = 0.0625
```

次に小数点を 2 桁移動して、6.25% のパーセントを得ます。 したがって、私たちの CSS では、60 ピクセルの列幅を 6.25% に置き換えることができます。

ガター幅についても次のように同じことをする必要があります。

```
20 / 960 = 0.02083333333
```

そのため、`.col` 規則の 20 ピクセルの {{cssxref("margin-left")}} と、`.wrapper` 規則の 20 ピクセルの {{cssxref("padding-right")}} を 2.08333333% に置き換える必要があります。

#### グリッドを更新する

このセクションで始めるには、前のサンプルページの新しいコピーを作成するか、または出発点として使用するために [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid-finished.html) コードのローカルコピーを作成してください。

次のように（`.wrapper` セレクターの）2 番目の CSS 規則を更新します。

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}
```

パーセントの {{cssxref("width")}} を指定しただけでなく、レイアウトが広くなり過ぎるのを防ぐために {{cssxref("max-width")}} プロパティも追加しました。

次に、（`.col` セレクターの）4 番目の CSS 規則を次のように更新します。

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255, 150, 150);
}
```

もう少し面倒な部分があります。 ピクセル幅ではなくパーセントを使用するようにすべての `.col.span` 規則を更新する必要があります。 これは電卓で少し時間がかかります。 あなたの努力を節約するために、それを下に用意しました。

次のように CSS 規則の一番下のブロックを更新します。

```css
/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 {
  width: 14.58333333%;
}
/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 {
  width: 22.91666666%;
}
/* And so on... */
.col.span4 {
  width: 31.24999999%;
}
.col.span5 {
  width: 39.58333332%;
}
.col.span6 {
  width: 47.91666665%;
}
.col.span7 {
  width: 56.24999998%;
}
.col.span8 {
  width: 64.58333331%;
}
.col.span9 {
  width: 72.91666664%;
}
.col.span10 {
  width: 81.24999997%;
}
.col.span11 {
  width: 89.5833333%;
}
.col.span12 {
  width: 97.91666663%;
}
```

コードを保存してブラウザーにロードし、ビューポートの幅を変更してみます — 列の幅は適切に調整されるはずです。

> **メモ:** 上記の例がうまくいかない場合は、[GitHub の完成版](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid.html)と比較してみてください（[ライブでも見られます](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html)）。

### calc() 関数を使ったより簡単な計算

CSS のすぐ内側で {{cssxref("calc","calc()")}} 関数を使って数学を行うことができます — これは CSS の値に簡単な数学の方程式を挿入して、値が何であるべきかを計算することを可能にします。 複雑な計算が必要な場合に特に便利です。 例えば、「この要素の高さは、常に親の高さの 100% から 50px を引いた値です」など、さまざまな単位を使用した計算も計算できます。 [MediaRecorder API のチュートリアルからこの例](</ja/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API#Keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc()>)を参照してください。

とにかく、私たちのグリッドに戻りましょう！ グリッドの複数の列にまたがる列は、合計幅が 6.25% x またがる列の数 + 2.08333333% x ガターの数（常に列の数 - 1）になります。 `calc()` 関数を使用すると、`width` の値の内側でこの計算を実行できます。 そのため、例えば、4 列にまたがる項目であれば、次のようにします。

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

規則の一番下のブロックを次のように置き換えてから、ブラウザーにリロードして、同じ結果になるかどうかを確認します。

```css
.col.span2 {
  width: calc((6.25% * 2) + 2.08333333%);
}
.col.span3 {
  width: calc((6.25% * 3) + (2.08333333% * 2));
}
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
.col.span5 {
  width: calc((6.25% * 5) + (2.08333333% * 4));
}
.col.span6 {
  width: calc((6.25% * 6) + (2.08333333% * 5));
}
.col.span7 {
  width: calc((6.25% * 7) + (2.08333333% * 6));
}
.col.span8 {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
.col.span9 {
  width: calc((6.25% * 9) + (2.08333333% * 8));
}
.col.span10 {
  width: calc((6.25% * 10) + (2.08333333% * 9));
}
.col.span11 {
  width: calc((6.25% * 11) + (2.08333333% * 10));
}
.col.span12 {
  width: calc((6.25% * 12) + (2.08333333% * 11));
}
```

> **メモ:** [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid-calc.html) で完成版を見ることができます（[ライブでも見られます](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)）。

> **メモ:** これがうまくいかない場合は、ブラウザーが `calc()` 関数をサポートしていないことが考えられます。 ブラウザー間ではかなりよくサポートされています — IE9 までさかのぼります。

### 意味論的グリッドシステム対「意味論的でない」グリッドシステム

マークアップにクラスを追加してレイアウトを定義するということは、コンテンツとマークアップが視覚的表現に結び付くことを意味します。 この CSS クラスの使い方は、コンテンツを説明するクラスの意味論的な使い方ではなく、「意味論的でない」（コンテンツがどのように見えるかを説明する）ものとして説明されることがあります。 これは、`span2`、`span3` などのクラスの場合です。

これらが唯一のアプローチではありません。 代わりにグリッドを決定してから、サイズ情報を既存の意味論的クラスの規則に追加することができます。 例えば、8 列にまたがる `content` のクラスが {{htmlelement("div")}} にある場合は、`span8` のクラスから `width` をコピーして、次のような規則を指定できます。

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> **メモ:** [Sass](http://sass-lang.com/) などのプリプロセッサを使用する場合は、単純な mixin を作成してその値を挿入することができます。

### グリッドでオフセットしたコンテナを使えるようにする

作成したグリッドは、すべてのコンテナをグリッドの左側から始めてぴったり重ねる限り、うまく機能します。 最初のコンテナの前（または、コンテナ間）に空の列スペースを残したい場合は、視覚的にグリッドを横切って押すための左マージンを追加するためのオフセットクラスを作成する必要があります。 もっと数学！

これを試してみましょう。

以前のコードから始めるか、出発点として [fluid-grid.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid.html) ファイルを使用してください。

CSS でコンテナ要素を 1 列幅だけオフセットするクラスを作成しましょう。 CSS の最後に次を追加してください。

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

パーセントを自分で計算したい場合は、こちらを使用してください。

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

これで、このクラスを左側に 1 列幅の空きスペースに残したいコンテナに追加できます。 例えば、HTML に次のものがあるとします。

```html
<div class="col span6">14</div>
```

これを次に置き換えてみてください。

```html
<div class="col span5 offset-by-one">14</div>
```

> **メモ:** オフセット用のスペースを確保するために、またがる列の数を減らす必要があることに注意してください！

違いを確認するには、ロードとリフレッシュを試してみるか、[fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid-offset.html) の例を確認してください（[ライブでも見られます](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)）。 完成した例は次のようになります。

![](offset-grid-finished.png)

> **メモ:** 特別な演習として、`offset-by-two` クラスを実装できますか？

### フロートのグリッドの制限

このようなシステムを使用するときは、合計幅が正しく加算され、行に含むことができるよりも多くの列にまたがる要素を行に含めないように注意する必要があります。 フロートの機能のために、グリッドの列の数がグリッドに対して広くなりすぎると、最後の要素が次のラインにドロップダウンされ、グリッドが壊れます。

また、要素のコンテンツがそれらが占める行よりも広くなると、オーバーフローしてだらしなく見えることも覚えておいてください。

このシステムの最大の制限は、それが本質的に一次元であるということです。 私たちは列を扱っていて、要素は列にまたがっていますが、行には及んでいません。 これらの古いレイアウト方法では、高さを明示的に設定せずに要素の高さを制御することは非常に困難で、これも非常に柔軟性のない方法です — コンテンツが一定の高さになることを保証できる場合にのみ機能します。

## フレックスボックスのグリッド？

以前の[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)に関する記事を読んだことがあれば、フレックスボックスがグリッドシステムを作成するための理想的な解決策であると考えるかもしれません。 利用可能な多くのフレックスボックスベースのグリッドシステムがあり、フレックスボックスは上記のグリッドを作成するときに私たちがすでに発見した問題の多くを解決することができます。

ただし、フレックスボックスはグリッドシステムとして設計されたことはなく、その 1 つとして使用すると新しい一連の問題が発生します。 この簡単な例として、上記で使用したのと同じマークアップ例を使用し、次の CSS を使用して `wrapper`、`row`、`col` クラスをスタイルすることができます。

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  display: flex;
}

.col {
  margin-left: 2.08333333%;
  margin-bottom: 1em;
  width: 6.25%;
  flex: 1 1 auto;
  background: rgb(255, 150, 150);
}
```

あなた自身の例でこれらの置き換えをすることを試みるか、または [flexbox-grid.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/flexbox-grid.html) の例のコードを見ることができます（[ライブでも見られます](http://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html)）。

ここで各行をフレックスコンテナに変えています。 フレックスボックスベースのグリッドでは、合計が 100% 未満の要素を持つことができるようにするために、まだ行が必要です。 そのコンテナを `display: flex` に設定します。

`.col` では、{{cssxref("flex")}} プロパティの最初の値（{{cssxref("flex-grow")}}）を 1 に設定して項目を大きくできるようにし、2 番目の値（{{cssxref("flex-shrink")}}）を 1 にして項目を縮小できるようにし、3 番目の値（{{cssxref("flex-basis")}}）を `auto` に設定します。 この要素には {{cssxref("width")}} が設定されているので、`auto` はその幅を `flex-basis` の値として使用します。

一番上のラインでは、グリッド上に 12 個のきちんとしたボックスが表示され、ビューポートの幅を変更すると、それらは均等に拡大および縮小されます。 しかし、次のラインでは、4 つの項目しかなく、これらも基本の 60px から増減しています。 それらのうちの 4 つだけで、それらは上の行の項目よりもはるかに大きく成長することができ、その結果、それらはすべて 2 番目の行で同じ幅を占めます。

![](flexbox-grid-incomplete.png)

これを修正するには、その要素に対して `flex-basis` によって使用される値を置き換える幅を提供するために、`span` クラスを含める必要があります。

それらは、直上の項目について何も知らないので、直上の項目によって使用されるグリッドを尊重もしません。

フレックスボックスは設計上**一次元**です。 それは単一の次元、つまり行または列の次元を扱います。 列と行に厳密なグリッドを作成することはできません。 つまり、グリッドにフレックスボックスを使用する場合でも、フロートのレイアウトの場合と同様にパーセントを計算する必要があります。

プロジェクトでは、フレックスボックスがフロートを介して提供する追加の位置合わせとスペース分配機能のために、フレックスボックスの「グリッド」を使用することを選択することもできます。 しかし、設計されたもの以外の何かのためのツールを使っているのだということを知っているべきです。 だからあなたは望む最終結果を得るために、それが追加の輪くぐりの輪を飛び越えさせているように感じているかもしれません。

## サードパーティのグリッドシステム

グリッド計算の背後にある数学を理解したので、一般的に使用されているサードパーティのグリッドシステムのいくつかを検討するのに適した状況です。 ウェブ上で「CSS Grid framework」を検索すると、膨大な選択肢のリストが見つかるでしょう。 [Bootstrap](http://getbootstrap.com/) や [Foundation](http://foundation.zurb.com/) などの人気のあるフレームワークには、グリッドシステムが含まれています。 CSS やプリプロセッサを使用して開発されたスタンドアロンのグリッドシステムもあります。

グリッドフレームワークを扱うための一般的なテクニックを説明しているので、これらのスタンドアロンシステムの 1 つを見てみましょう。これから使用するグリッドは、単純な CSS フレームワークである Skeleton の一部です。

はじめに [Skeleton のウェブサイト](http://getskeleton.com/)にアクセスし、「Download」を選択して ZIP ファイルをダウンロードします。 これを解凍し、`skeleton.css` ファイルと `normalize.css` ファイルを新しいディレクトリーにコピーします。

[html-skeleton.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/html-skeleton.html) ファイルのコピーを作成し、それを `skeleton.css` と `normalize.css` と同じディレクトリーに保存します。

その `head` に次を追加することによって、`skeleton.css` と `normalize.css` を HTML ページに含めます。

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton にはグリッドシステム以上のものが含まれています — タイポグラフィや、出発点として使用できるその他のページ要素の CSS も含んでいます。 ただし、これらはデフォルトのままにします — ここで本当に関心があるのはグリッドです。

> **メモ:** [Normalize](http://necolas.github.io/normalize.css/) は Nicolas Gallagher によって書かれた本当に便利で小さな CSS ライブラリです。 これは基本的ないくつかの基本的なレイアウトの修正を自動的に行い、ブラウザー間でデフォルトの要素のスタイル設定をより一貫させます。

前の例と同様の HTML を使用します。 HTML の `body` に次を追加してください。

```html
<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col">13</div>
    <div class="col">14</div>
    <div class="col">15</div>
    <div class="col">16</div>
  </div>
</div>
```

Skeleton を使い始めるためには、ラッパーの {{htmlelement("div")}} に `container` クラスを与える必要があります — これは既に HTML に含まれています。 これにより、最大幅 960 ピクセルのコンテンツが中央に配置されます。 ボックスが 960 ピクセルよりも広くならないことがわかります。

このクラスを適用するときに使用される CSS を見るために `skeleton.css` ファイルを見ることができます。 `<div>` は `auto` の左右のマージンで中央に配置され、左右に 20 ピクセルのパディングが適用されます。 Skeleton はまた、先ほど行ったように {{cssxref("box-sizing")}} プロパティを `border-box` に設定するので、この要素のパディングとボーダーは合計幅に含まれます。

```css
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
```

要素が行内にある場合にのみ要素をグリッドの一部にすることができます。 前の例と同様に、`content` `<div>` と実際のコンテンツコンテナの `<div>` の間にネストした `row` クラスを持つ追加の `<div>` またはその他の要素が必要です。 これも既に行ってあります。

それではコンテナボックスをレイアウトしましょう。 Skeleton は 12 列グリッドに基づいています。 一番上のラインのボックスはすべて、1 列にまたがるようにするために `one column` クラスが必要です。

次のスニペットに示すように、これらを追加します。

```html
<div class="container">
  <div class="row">
    <div class="one column">1</div>
    <div class="one column">2</div>
    <div class="one column">3</div>
    /* and so on */
  </div>
</div>
```

次に、2 番目の `row` クラスのコンテナに、それらがまたがるべき列数を説明します。

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

HTML ファイルを保存してブラウザーにロードして、効果を確認してください。

> **メモ:** この例がうまく動作しない場合は、[html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/html-skeleton-finished.html) ファイルと比較してみてください（[ライブでも見られます](http://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html)）。

`skeleton.css` ファイルを見ると、これがどのように機能するかがわかります。 例えば、Skeleton には、「`three columns`」クラスを追加して要素をスタイルするための次の定義があります。

```css
.three.columns {
  width: 22%;
}
```

Skeleton（または他のグリッドフレームワーク）が行っていることはすべて、マークアップに追加することで使用できる定義済みクラスを設定することだけです。 これらのパーセントを自分で計算する作業を行ったのとまったく同じです。

ご覧のとおり、Skeleton を使用するときには、CSS をほとんど書く必要がありません。 マークアップにクラスを追加すると、すべてのフロートが処理されます。 グリッドシステムのフレームワークを使用することを説得力のある選択にしたのは、レイアウトに対する責任を他に引き継ぐ、この能力です！ しかし最近では、CSS グリッドレイアウトを使用して、多くの開発者がこれらのフレームワークから CSS が提供する内蔵されたネイティブグリッドを使用するように移行しています。

## まとめ

これで、さまざまなグリッドシステムの作成方法が理解できました。 これは、古いサイトでの作業や、CSS グリッドレイアウトのネイティブグリッドとこれらの古いシステムとの違いの理解に役立ちます。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
