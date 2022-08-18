---
title: 過去のレイアウト方法
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
tags:
  - Beginner
  - CSS
  - Floats
  - Guide
  - Layout
  - Learn
  - grid system
  - legacy
translation_of: Learn/CSS/CSS_layout/Legacy_Layout_Methods
---
<div>{{LearnSidebar}}</div>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}</p>

<p class="summary"><span class="seoSummary">グリッドシステムは CSS レイアウトで使用される非常に一般的な機能で、CSS グリッドレイアウト以前はフロートや他のレイアウト機能を使用して実装される傾向がありました。 あなたはレイアウトをいくつかの列（例えば 4、6、または 12）として想像し、そしてコンテンツの列をこれらの想像上の列の内側に合わせます。 この記事では、古いプロジェクトで作業した場合に、それらがどう使われたかを理解するために、これらの古い方法がどのように機能するのかを説明します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>と<a href="/ja/docs/Learn/CSS/Styling_boxes">ボックスの装飾</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>CSS グリッドレイアウトがブラウザーで利用可能になる前に使用されていたグリッドレイアウトシステムの背後にある基本概念を理解すること。</td>
  </tr>
 </tbody>
</table>

<h2 id="Layout_and_grid_systems_before_CSS_Grid_Layout" name="Layout_and_grid_systems_before_CSS_Grid_Layout">CSS グリッドレイアウト以前のレイアウトとグリッドシステム</h2>

<p>CSS がごく最近まで内蔵されたグリッドシステムを持っていなかったことを、デザインをやってきた誰かは驚くかもしれません。 そして代わりにグリッドのようなデザインを作成するためにさまざまな次善の方法を用いていたようです。 今これらを「過去の」方法と呼んでいます。</p>

<p>新しいプロジェクトでは、ほとんどの場合、CSS グリッドレイアウトを他の1つ以上の最新のレイアウト方法と組み合わせて使用​​して、任意のレイアウトの基礎とします。 しかし、時々、これらの過去の方法を使用している「グリッドシステム」に遭遇するでしょう。 それらがどのように機能するのか、そしてなぜそれらが CSS グリッドレイアウトと異なるのかを理解するのは価値があります。</p>

<p>このレッスンでは、フロートとフレックスボックスに基づいたグリッドシステムとグリッドフレームワークの仕組みについて説明します。 グリッドレイアウトを勉強してきたので、おそらくこれがどれほど複雑であるかに驚くことでしょう！ この種のシステムを使用する既存のプロジェクトで作業できるようにすることに加えて、新しい方法をサポートしないブラウザー用の代替コードを作成する必要がある場合に、この知識は役に立ちます。</p>

<p>これらのシステムを検討する際には、それらのどれも実際には CSS グリッドレイアウトがグリッドを作成する方法でグリッドを作成しないことに、留意する価値があります。 それらは項目にサイズを与え、グリッドのように<em>見える</em>ように一列に並べることによって機能します。</p>

<h2 id="A_two_column_layout" name="A_two_column_layout">2列レイアウト</h2>

<p>最も簡単な例として、2列のレイアウトから始めましょう。 コンピュータ上に新しい <code>index.html</code> ファイルを作成し、それを<a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">単純な HTML テンプレート</a>で埋め、適切な場所に以下のコードを挿入することで、従うことができます。 このセクションの一番下には、最終的なコードがどのようになっているべきかの実例があります。</p>

<p>まず最初に、列に入れるためにいくつかのコンテンツが必要です。 次のもので <code>body</code> の中に現在あるものはすべて置き換えます。</p>

<pre class="brush: html notranslate">&lt;h1&gt;2 column layout example&lt;/h1&gt;
&lt;div&gt;
  &lt;h2&gt;First column&lt;/h2&gt;
  &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;h2&gt;Second column&lt;/h2&gt;
  &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;</pre>

<p>それぞれの列はそのコンテンツを含むために外側の要素が必要です。 この例では {{htmlelement("div")}} を選択しましたが、{{htmlelement("article")}}、{{htmlelement("section")}}、{{htmlelement("aside")}} など、より意味論的に適切なものを選択することもできます。</p>

<p>今 CSS に対して、まず最初に、HTML に従うため、いくつかの基本的な設定を提供するために次を適用します。</p>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}</pre>

<p><code>body</code> の幅が 900px になるまで、<code>body</code> はビューポートの幅の 90% になります。 この場合、<code>body</code> はこの幅に固定され、ビューポートの中央に配置されます。 デフォルトでは、その子（{{htmlelement("h1")}} と2つの {{htmlelement("div")}}）は <code>body</code> の幅の 100% にわたります。 2つの {{htmlelement("div")}} を互いに並べてフロートしたい場合は、それらの幅の合計をその親要素の幅の 100% 以下に設定して、互いに並んで収まるようにする必要があります。 CSS の最後に次を追加してください。</p>

<pre class="brush: css notranslate">div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}</pre>

<p>ここでは、両方とも親の幅の 48% に設定しました — これは合計 96% で、2列の間のガターのために 4% の空きを残し、コンテンツに余裕を持たせることができます。 さらに次のようにして、列をフロートにする必要があります。</p>

<pre class="brush: css notranslate">div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}</pre>

<p>これらすべてをまとめると、次のような結果が得られます。</p>

<div id="Floated_Two_Col">
<div class="hidden">
<h6 id="Simple_two-column_layout" name="Simple_two-column_layout">Simple two-column layout</h6>

<pre class="brush: html notranslate">&lt;h1&gt;2 column layout example&lt;/h1&gt;

&lt;div&gt;
  &lt;h2&gt;First column&lt;/h2&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;h2&gt;Second column&lt;/h2&gt;
  &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">body {
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
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Floated_Two_Col', '100%', 520) }}</p>

<p>ここでは、すべての幅にパーセントを使用していることに気付くでしょう。 これは、さまざまな画面サイズに合わせて調整し、小さい画面サイズで列幅に同じ比率を維持する、<strong>リキッドレイアウト</strong>（liquid layout）を作成するため、非常に良い戦略です。 ブラウザーウィンドウの幅を調整して確認してください。 これはレスポンシブウェブデザインのための貴重なツールです。</p>

<div class="note">
<p><strong>注</strong>: この例は <a href="http://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html">0_two-column-layout.html</a> で実行できます（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/0_two-column-layout.html">ソースコード</a>も見る）。</p>
</div>

<h2 id="Creating_simple_legacy_grid_frameworks" name="Creating_simple_legacy_grid_frameworks">単純な過去のグリッドフレームワークを作成する</h2>

<p>過去のフレームワークの大部分は、グリッドのように見えるものを作成するために、{{cssxref("float")}} プロパティのふるまいを使用して、ある列を別の列の隣にフロートします。 フロートによるグリッドを作成するプロセスを通して、これがどのように機能するかを説明し、<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロートとクリア</a>のレッスンで学んだことを基にしてさらに高度な概念を紹介します。</p>

<p>作成する最も簡単な種類のグリッドフレームワークは固定幅のものです — デザインに必要な合計幅、列数、およびガター幅と列幅を求める必要があります。 ブラウザーの幅に合わせて増減する列を含むグリッドにデザインをレイアウトすることにした場合は、列とそれらの間のガターに対してパーセント幅を計算する必要があります。</p>

<p>次のセクションでは、両方を作成する方法を見ていきます。 12列のグリッドを作成します — 12 が 6、4、3、および 2 で割り切れることを考えると、さまざまな状況に非常に適応できると見られる非常に一般的な選択です。</p>

<h3 id="A_simple_fixed_width_grid" name="A_simple_fixed_width_grid">単純な固定幅グリッド</h3>

<p>最初に固定幅の列を使用するグリッドシステムを作成しましょう。</p>

<p>サンプルの <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid.html">simple-grid.html</a> ファイルのローカルコピーを作成することから始めます。 このファイルには、<code>body</code> に次のマークアップが含まれています。</p>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col"&gt;1&lt;/div&gt;
    &lt;div class="col"&gt;2&lt;/div&gt;
    &lt;div class="col"&gt;3&lt;/div&gt;
    &lt;div class="col"&gt;4&lt;/div&gt;
    &lt;div class="col"&gt;5&lt;/div&gt;
    &lt;div class="col"&gt;6&lt;/div&gt;
    &lt;div class="col"&gt;7&lt;/div&gt;
    &lt;div class="col"&gt;8&lt;/div&gt;
    &lt;div class="col"&gt;9&lt;/div&gt;
    &lt;div class="col"&gt;10&lt;/div&gt;
    &lt;div class="col"&gt;11&lt;/div&gt;
    &lt;div class="col"&gt;12&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
    &lt;div class="col span1"&gt;13&lt;/div&gt;
    &lt;div class="col span6"&gt;14&lt;/div&gt;
    &lt;div class="col span3"&gt;15&lt;/div&gt;
    &lt;div class="col span2"&gt;16&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p>目的は、これを 12 列 2 行のグリッドのデモ用グリッドに変換することです — 一番上の行は個々の列のサイズを示し、2番目の行はグリッド上のいくつかの異なるサイズの領域です。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13901/simple-grid-finished.png" style="display: block; height: 50px; margin: 0px auto; width: 952px;"></p>

<p>{{htmlelement("style")}} 要素に、次のコードを追加します。 これにより、<code>wrapper</code> コンテナの幅は 980 ピクセルになり、右側のパディングは 20 ピクセルになります。 これにより、列幅とガター幅の合計が 960 ピクセルになります — この場合、サイト上のすべての要素で {{cssxref("box-sizing")}} を <code>border-box</code> に設定しているため、パディングはコンテンツの幅の合計から差し引かれます（詳細については、<a href="/ja/docs/Learn/CSS/Styling_boxes/Box_model_recap#Changing_the_box_model_completely">ボックスモデルの完全な変更</a>を参照）。</p>

<pre class="brush: css notranslate">* {
  box-sizing: border-box;
}

body {
  width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 20px;
}</pre>

<p>次に、グリッドの各行を囲む <code>row</code> コンテナを使用して、ある行を別の行からクリアします。 前の規則の下に次の規則を追加します。</p>

<pre class="brush: css notranslate">.row {
  clear: both;
}</pre>

<p>このクリアを適用すると、各行を12列の要素で完全に埋める必要がなくなります。 行は分離されたままになり、互いに干渉しません。</p>

<p>列の間のガターは 20 ピクセル幅です。 最初の列を含め、各列の左側にマージンとしてこれらのガターを作成して、コンテナの右側にある 20 ピクセルのパディングとのバランスを取ります。 だから全部で12のガターを持っています — 12 x 20 = 240。</p>

<p>これを 960 ピクセルの合計幅から差し引いて、列に 720 ピクセルを与える必要があります。 これを 12 で割ると、各列の幅は 60 ピクセルになるはずです。</p>

<p>次のステップは、<code>.col</code> クラスの規則を作成し、それを左にフロートして、ガターを形成する 20 ピクセルの {{cssxref("margin-left")}} と、60 ピクセルの {{cssxref("width")}} を与えることです。 CSS の最後に次の規則を追加してください。</p>

<pre class="brush: css notranslate">.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255, 150, 150);
}</pre>

<p>これで、一番上の単一列の行がグリッドとしてきちんとレイアウトされます。</p>

<div class="note">
<p><strong>注</strong>: また、各列に薄い赤色を指定したので、各列がどれだけのスペースを占めているかを正確に確認できます。</p>
</div>

<p>複数列にまたがるコンテナのレイアウトには、必要な列数（足す、その間のガター）に合わせて {{cssxref("width")}} の値を調整するための特別なクラスを指定する必要があります。 コンテナが2〜12列にまたがるようにするために、追加のクラスを作成する必要があります。 それぞれの幅は、その列数の列幅にガター幅を加えた結果です。 ガター幅は常に列数より1つ少なくなります。</p>

<p>CSS の最後に次を追加してください。</p>

<pre class="brush: css notranslate">/* Two column widths (120px) plus one gutter width (20px) */
.col.span2 { width: 140px; }
/* Three column widths (180px) plus two gutter widths (40px) */
.col.span3 { width: 220px; }
/* And so on... */
.col.span4 { width: 300px; }
.col.span5 { width: 380px; }
.col.span6 { width: 460px; }
.col.span7 { width: 540px; }
.col.span8 { width: 620px; }
.col.span9 { width: 700px; }
.col.span10 { width: 780px; }
.col.span11 { width: 860px; }
.col.span12 { width: 940px; }</pre>

<p>これらのクラスを作成したら、グリッド上にさまざまな幅の列を配置できます。 効果を確認するには、ページを保存してブラウザーでロードします。</p>

<div class="note">
<p><strong>注</strong>: 上記の例がうまくいかない場合は、GitHub の<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid-finished.html">完成版</a>と比較してみてください（<a href="http://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html">ライブでも見られます</a>）。</p>
</div>

<p>要素のクラスを変更したり、コンテナを追加したり削除したりして、レイアウトの変更方法を確認してください。 例えば、2行目を次のようにすることができます。</p>

<pre class="brush: css notranslate">&lt;div class="row"&gt;
  &lt;div class="col span8"&gt;13&lt;/div&gt;
  &lt;div class="col span4"&gt;14&lt;/div&gt;
&lt;/div&gt;</pre>

<p>これで、グリッドシステムが機能したので、単純に行と各行の列数を定義してから、各コンテナに必要なコンテンツを埋めるだけです。 すばらしいです！</p>

<h3 id="Creating_a_fluid_grid" name="Creating_a_fluid_grid">フルードグリッドを作成する</h3>

<p>私たちのグリッドはうまく機能しますが、幅は固定されています。 ブラウザーの{{Glossary("viewport","ビューポート")}}で利用可能なスペースに応じて拡大縮小する柔軟な（フルード（fluid、流動的な））グリッドが本当に必要です。 これを実現するために、参照するピクセル幅をパーセントに変えることができます。</p>

<p>固定幅を柔軟なパーセントベースのものに変換する式は次のとおりです。</p>

<pre class="notranslate">target / context = result</pre>

<p>列幅については、目標の幅（<strong>target width</strong>）は 60 ピクセル、コンテキスト（<strong>context</strong>）は 960 ピクセルの <code>wrapper</code> です。 パーセントを計算するために次のようにします。</p>

<pre class="notranslate">60 / 960 = 0.0625</pre>

<p>次に小数点を2桁移動して、6.25% のパーセントを得ます。 したがって、私たちの CSS では、60 ピクセルの列幅を 6.25% に置き換えることができます。</p>

<p>ガター幅についても次のように同じことをする必要があります。</p>

<pre class="notranslate">20 / 960 = 0.02083333333</pre>

<p>そのため、<code>.col</code> 規則の 20 ピクセルの {{cssxref("margin-left")}} と、<code>.wrapper</code> 規則の 20 ピクセルの {{cssxref("padding-right")}} を 2.08333333% に置き換える必要があります。</p>

<h4 id="Updating_our_grid" name="Updating_our_grid">グリッドを更新する</h4>

<p>このセクションで始めるには、前のサンプルページの新しいコピーを作成するか、または出発点として使用するために <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid-finished.html">simple-grid-finished.html</a> コードのローカルコピーを作成してください。</p>

<p>次のように（<code>.wrapper</code> セレクターの）2番目の CSS 規則を更新します。</p>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}</pre>

<p>パーセントの {{cssxref("width")}} を指定しただけでなく、レイアウトが広くなり過ぎるのを防ぐために {{cssxref("max-width")}} プロパティも追加しました。</p>

<p>次に、（<code>.col</code> セレクターの）4番目の CSS 規則を次のように更新します。</p>

<pre class="brush: css notranslate">.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255, 150, 150);
}</pre>

<p>もう少し面倒な部分があります。 ピクセル幅ではなくパーセントを使用するようにすべての <code>.col.span</code> 規則を更新する必要があります。 これは電卓で少し時間がかかります。 あなたの努力を節約するために、それを下に用意しました。</p>

<p>次のように CSS 規則の一番下のブロックを更新します。</p>

<pre class="brush: css notranslate">/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 { width: 14.58333333%; }
/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 { width: 22.91666666%; }
/* And so on... */
.col.span4 { width: 31.24999999%; }
.col.span5 { width: 39.58333332%; }
.col.span6 { width: 47.91666665%; }
.col.span7 { width: 56.24999998%; }
.col.span8 { width: 64.58333331%; }
.col.span9 { width: 72.91666664%; }
.col.span10 { width: 81.24999997%; }
.col.span11 { width: 89.5833333%; }
.col.span12 { width: 97.91666663%; }</pre>

<p>コードを保存してブラウザーにロードし、ビューポートの幅を変更してみます — 列の幅は適切に調整されるはずです。</p>

<div class="note">
<p><strong>注</strong>: 上記の例がうまくいかない場合は、<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid.html">GitHub の完成版</a>と比較してみてください（<a href="http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html">ライブでも見られます</a>）。</p>
</div>

<h3 id="Easier_calculations_using_the_calc_function" name="Easier_calculations_using_the_calc()_function">calc() 関数を使ったより簡単な計算</h3>

<p>CSS のすぐ内側で {{cssxref("calc","calc()")}} 関数を使って数学を行うことができます — これは CSS の値に簡単な数学の方程式を挿入して、値が何であるべきかを計算することを可能にします。 複雑な計算が必要な場合に特に便利です。 例えば、「この要素の高さは、常に親の高さの 100% から 50px を引いた値です」など、さまざまな単位を使用した計算も計算できます。 <a href="/ja/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API#Keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc()">MediaRecorder API のチュートリアルからこの例</a>を参照してください。</p>

<p>とにかく、私たちのグリッドに戻りましょう！ グリッドの複数の列にまたがる列は、合計幅が 6.25% x またがる列の数 + 2.08333333% x ガターの数（常に列の数 - 1）になります。 <code>calc()</code> 関数を使用すると、<code>width</code> の値の内側でこの計算を実行できます。 そのため、例えば、4列にまたがる項目であれば、次のようにします。</p>

<pre class="brush: css notranslate">.col.span4 {
  width: calc((6.25%*4) + (2.08333333%*3));
}</pre>

<p>規則の一番下のブロックを次のように置き換えてから、ブラウザーにリロードして、同じ結果になるかどうかを確認します。</p>

<pre class="brush: css notranslate">.col.span2 { width: calc((6.25%*2) + 2.08333333%); }
.col.span3 { width: calc((6.25%*3) + (2.08333333%*2)); }
.col.span4 { width: calc((6.25%*4) + (2.08333333%*3)); }
.col.span5 { width: calc((6.25%*5) + (2.08333333%*4)); }
.col.span6 { width: calc((6.25%*6) + (2.08333333%*5)); }
.col.span7 { width: calc((6.25%*7) + (2.08333333%*6)); }
.col.span8 { width: calc((6.25%*8) + (2.08333333%*7)); }
.col.span9 { width: calc((6.25%*9) + (2.08333333%*8)); }
.col.span10 { width: calc((6.25%*10) + (2.08333333%*9)); }
.col.span11 { width: calc((6.25%*11) + (2.08333333%*10)); }
.col.span12 { width: calc((6.25%*12) + (2.08333333%*11)); }</pre>

<div class="note">
<p><strong>注</strong>: <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid-calc.html">fluid-grid-calc.html</a> で完成版を見ることができます（<a href="http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html">ライブでも見られます</a>）。</p>
</div>

<div class="note">
<p><strong>注</strong>: これがうまくいかない場合は、ブラウザーが <code>calc()</code> 関数をサポートしていないことが考えられます。 ブラウザー間ではかなりよくサポートされています — IE9 までさかのぼります。</p>
</div>

<h3 id="Semantic_versus_“unsemantic”_grid_systems" name="Semantic_versus_“unsemantic”_grid_systems">意味論的グリッドシステム対「意味論的でない」グリッドシステム</h3>

<p>マークアップにクラスを追加してレイアウトを定義するということは、コンテンツとマークアップが視覚的表現に結び付くことを意味します。 この CSS クラスの使い方は、コンテンツを説明するクラスの意味論的な使い方ではなく、「意味論的でない」（コンテンツがどのように見えるかを説明する）ものとして説明されることがあります。 これは、<code>span2</code>、<code>span3</code> などのクラスの場合です。</p>

<p>これらが唯一のアプローチではありません。 代わりにグリッドを決定してから、サイズ情報を既存の意味論的クラスの規則に追加することができます。 例えば、8列にまたがる <code>content</code> のクラスが {{htmlelement("div")}} にある場合は、<code>span8</code> のクラスから <code>width</code> をコピーして、次のような規則を指定できます。</p>

<pre class="brush: css notranslate">.content {
  width: calc((6.25%*8) + (2.08333333%*7));
}</pre>

<div class="note">
<p><strong>注</strong>: <a href="http://sass-lang.com/">Sass</a> などのプリプロセッサを使用する場合は、単純な mixin を作成してその値を挿入することができます。</p>
</div>

<h3 id="Enabling_offset_containers_in_our_grid" name="Enabling_offset_containers_in_our_grid">グリッドでオフセットしたコンテナを使えるようにする</h3>

<p>作成したグリッドは、すべてのコンテナをグリッドの左側から始めてぴったり重ねる限り、うまく機能します。 最初のコンテナの前（または、コンテナ間）に空の列スペースを残したい場合は、視覚的にグリッドを横切って押すための左マージンを追加するためのオフセットクラスを作成する必要があります。 もっと数学！</p>

<p>これを試してみましょう。</p>

<p>以前のコードから始めるか、出発点として <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid.html">fluid-grid.html</a> ファイルを使用してください。</p>

<p>CSS でコンテナ要素を1列幅だけオフセットするクラスを作成しましょう。 CSS の最後に次を追加してください。</p>

<pre class="brush: css notranslate">.offset-by-one {
  margin-left: calc(6.25% + (2.08333333%*2));
}</pre>

<p>パーセントを自分で計算したい場合は、こちらを使用してください。</p>

<pre class="brush: css notranslate">.offset-by-one {
  margin-left: 10.41666666%;
}</pre>

<p>これで、このクラスを左側に1列幅の空きスペースに残したいコンテナに追加できます。 例えば、HTML に次のものがあるとします。</p>

<pre class="brush: html notranslate">&lt;div class="col span6"&gt;14&lt;/div&gt;</pre>

<p>これを次に置き換えてみてください。</p>

<pre class="brush: html notranslate">&lt;div class="col span5 offset-by-one"&gt;14&lt;/div&gt;</pre>

<div class="note">
<p><strong>注</strong>: オフセット用のスペースを確保するために、またがる列の数を減らす必要があることに注意してください！</p>
</div>

<p>違いを確認するには、ロードとリフレッシュを試してみるか、<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid-offset.html">fluid-grid-offset.html</a> の例を確認してください（<a href="http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html">ライブでも見られます</a>）。 完成した例は次のようになります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13903/offset-grid-finished.png" style="display: block; height: 47px; margin: 0px auto; width: 944px;"></p>

<div class="note">
<p><strong>注</strong>: 特別な演習として、<code>offset-by-two</code> クラスを実装できますか？</p>
</div>

<h3 id="Floated_grid_limitations" name="Floated_grid_limitations">フロートのグリッドの制限</h3>

<p>このようなシステムを使用するときは、合計幅が正しく加算され、行に含むことができるよりも多くの列にまたがる要素を行に含めないように注意する必要があります。 フロートの機能のために、グリッドの列の数がグリッドに対して広くなりすぎると、最後の要素が次のラインにドロップダウンされ、グリッドが壊れます。</p>

<p>また、要素のコンテンツがそれらが占める行よりも広くなると、オーバーフローしてだらしなく見えることも覚えておいてください。</p>

<p>このシステムの最大の制限は、それが本質的に一次元であるということです。 私たちは列を扱っていて、要素は列にまたがっていますが、行には及んでいません。 これらの古いレイアウト方法では、高さを明示的に設定せずに要素の高さを制御することは非常に困難で、これも非常に柔軟性のない方法です — コンテンツが一定の高さになることを保証できる場合にのみ機能します。</p>

<h2 id="Flexbox_grids" name="Flexbox_grids">フレックスボックスのグリッド？</h2>

<p>以前の<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>に関する記事を読んだことがあれば、フレックスボックスがグリッドシステムを作成するための理想的な解決策であると考えるかもしれません。 利用可能な多くのフレックスボックスベースのグリッドシステムがあり、フレックスボックスは上記のグリッドを作成するときに私たちがすでに発見した問題の多くを解決することができます。</p>

<p>ただし、フレックスボックスはグリッドシステムとして設計されたことはなく、その1つとして使用すると新しい一連の問題が発生します。 この簡単な例として、上記で使用したのと同じマークアップ例を使用し、次の CSS を使用して <code>wrapper</code>、<code>row</code>、<code>col</code> クラスをスタイルすることができます。</p>

<pre class="brush: css notranslate">body {
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
  background: rgb(255,150,150);
}</pre>

<p>あなた自身の例でこれらの置き換えをすることを試みるか、または <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/flexbox-grid.html">flexbox-grid.html</a> の例のコードを見ることができます（<a href="http://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html">ライブでも見られます</a>）。</p>

<p>ここで各行をフレックスコンテナに変えています。 フレックスボックスベースのグリッドでは、合計が 100% 未満の要素を持つことができるようにするために、まだ行が必要です。 そのコンテナを <code>display: flex</code> に設定します。</p>

<p><code>.col</code> では、{{cssxref("flex")}} プロパティの最初の値（{{cssxref("flex-grow")}}）を 1 に設定して項目を大きくできるようにし、2番目の値（{{cssxref("flex-shrink")}}）を 1 にして項目を縮小できるようにし、3番目の値（{{cssxref("flex-basis")}}）を <code>auto</code> に設定します。 この要素には {{cssxref("width")}} が設定されているので、<code>auto</code> はその幅を <code>flex-basis</code> の値として使用します。</p>

<p>一番上のラインでは、グリッド上に12個のきちんとしたボックスが表示され、ビューポートの幅を変更すると、それらは均等に拡大および縮小されます。 しかし、次のラインでは、4つの項目しかなく、これらも基本の 60px から増減しています。 それらのうちの4つだけで、それらは上の行の項目よりもはるかに大きく成長することができ、その結果、それらはすべて2番目の行で同じ幅を占めます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13905/flexbox-grid-incomplete.png" style="display: block; height: 71px; margin: 0px auto; width: 944px;"></p>

<p>これを修正するには、その要素に対して <code>flex-basis</code> によって使用される値を置き換える幅を提供するために、<code>span</code> クラスを含める必要があります。</p>

<p>それらは、直上の項目について何も知らないので、直上の項目によって使用されるグリッドを尊重もしません。</p>

<p>フレックスボックスは設計上<strong>一次元</strong>です。 それは単一の次元、つまり行または列の次元を扱います。 列と行に厳密なグリッドを作成することはできません。 つまり、グリッドにフレックスボックスを使用する場合でも、フロートのレイアウトの場合と同様にパーセントを計算する必要があります。</p>

<p>プロジェクトでは、フレックスボックスがフロートを介して提供する追加の位置合わせとスペース分配機能のために、フレックスボックスの「グリッド」を使用することを選択することもできます。 しかし、設計されたもの以外の何かのためのツールを使っているのだということを知っているべきです。 だからあなたは望む最終結果を得るために、それが追加の輪くぐりの輪を飛び越えさせているように感じているかもしれません。</p>

<h2 id="Third_party_grid_systems" name="Third_party_grid_systems">サードパーティのグリッドシステム</h2>

<p>グリッド計算の背後にある数学を理解したので、一般的に使用されているサードパーティのグリッドシステムのいくつかを検討するのに適した状況です。 ウェブ上で「CSS Grid framework」を検索すると、膨大な選択肢のリストが見つかるでしょう。 <a href="http://getbootstrap.com/">Bootstrap</a> や <a href="http://foundation.zurb.com/">Foundation</a> などの人気のあるフレームワークには、グリッドシステムが含まれています。 CSS やプリプロセッサを使用して開発されたスタンドアロンのグリッドシステムもあります。</p>

<p>グリッドフレームワークを扱うための一般的なテクニックを説明しているので、これらのスタンドアロンシステムの1つを見てみましょう。これから使用するグリッドは、単純な CSS フレームワークである Skeleton の一部です。</p>

<p>はじめに <a href="http://getskeleton.com/">Skeleton のウェブサイト</a>にアクセスし、「Download」を選択して ZIP ファイルをダウンロードします。 これを解凍し、<code>skeleton.css</code> ファイルと <code>normalize.css</code> ファイルを新しいディレクトリにコピーします。</p>

<p><a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/html-skeleton.html">html-skeleton.html</a> ファイルのコピーを作成し、それを <code>skeleton.css</code> と <code>normalize.css</code> と同じディレクトリに保存します。</p>

<p>その <code>head</code> に次を追加することによって、<code>skeleton.css</code> と <code>normalize.css</code> を HTML ページに含めます。</p>

<pre class="brush: html notranslate">&lt;link href="normalize.css" rel="stylesheet"&gt;
&lt;link href="skeleton.css" rel="stylesheet"&gt;</pre>

<p>Skeleton にはグリッドシステム以上のものが含まれています — タイポグラフィや、出発点として使用できるその他のページ要素の CSS も含んでいます。 ただし、これらはデフォルトのままにします — ここで本当に関心があるのはグリッドです。</p>

<div class="note">
<p><strong>注</strong>: <a href="http://necolas.github.io/normalize.css/">Normalize</a> は Nicolas Gallagher によって書かれた本当に便利で小さな CSS ライブラリです。 これは基本的ないくつかの基本的なレイアウトの修正を自動的に行い、ブラウザー間でデフォルトの要素のスタイル設定をより一貫させます。</p>
</div>

<p>前の例と同様の HTML を使用します。 HTML の <code>body</code> に次を追加してください。</p>

<pre class="brush: html notranslate">&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col"&gt;1&lt;/div&gt;
    &lt;div class="col"&gt;2&lt;/div&gt;
    &lt;div class="col"&gt;3&lt;/div&gt;
    &lt;div class="col"&gt;4&lt;/div&gt;
    &lt;div class="col"&gt;5&lt;/div&gt;
    &lt;div class="col"&gt;6&lt;/div&gt;
    &lt;div class="col"&gt;7&lt;/div&gt;
    &lt;div class="col"&gt;8&lt;/div&gt;
    &lt;div class="col"&gt;9&lt;/div&gt;
    &lt;div class="col"&gt;10&lt;/div&gt;
    &lt;div class="col"&gt;11&lt;/div&gt;
    &lt;div class="col"&gt;12&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
    &lt;div class="col"&gt;13&lt;/div&gt;
    &lt;div class="col"&gt;14&lt;/div&gt;
    &lt;div class="col"&gt;15&lt;/div&gt;
    &lt;div class="col"&gt;16&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p><br>
 Skeleton を使い始めるためには、ラッパーの {{htmlelement("div")}} に <code>container </code>クラスを与える必要があります — これは既に HTML に含まれています。 これにより、最大幅 960 ピクセルのコンテンツが中央に配置されます。 ボックスが 960 ピクセルよりも広くならないことがわかります。</p>

<p>このクラスを適用するときに使用される CSS を見るために <code>skeleton.css</code> ファイルを見ることができます。 <code>&lt;div&gt;</code> は <code>auto</code> の左右のマージンで中央に配置され、左右に 20 ピクセルのパディングが適用されます。 Skeleton はまた、先ほど行ったように {{cssxref("box-sizing")}} プロパティを <code>border-box</code> に設定するので、この要素のパディングとボーダーは合計幅に含まれます。</p>

<pre class="brush: css notranslate">.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}</pre>

<p>要素が行内にある場合にのみ要素をグリッドの一部にすることができます。 前の例と同様に、<code>content</code> <code>&lt;div&gt;</code> と実際のコンテンツコンテナの <code>&lt;div&gt;</code> の間にネストした <code>row</code> クラスを持つ追加の <code>&lt;div&gt;</code> またはその他の要素が必要です。 これも既に行ってあります。</p>

<p>それではコンテナボックスをレイアウトしましょう。 Skeleton は12列グリッドに基づいています。 一番上のラインのボックスはすべて、1列にまたがるようにするために <code>one column</code> クラスが必要です。</p>

<p>次のスニペットに示すように、これらを追加します。</p>

<pre class="brush: html notranslate">&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="one column"&gt;1&lt;/div&gt;
    &lt;div class="one column"&gt;2&lt;/div&gt;
    &lt;div class="one column"&gt;3&lt;/div&gt;
    /* and so on */
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p>次に、2番目の <code>row</code> クラスのコンテナに、それらがまたがるべき列数を説明します。</p>

<pre class="brush: html notranslate">&lt;div class="row"&gt;
  &lt;div class="one column"&gt;13&lt;/div&gt;
  &lt;div class="six columns"&gt;14&lt;/div&gt;
  &lt;div class="three columns"&gt;15&lt;/div&gt;
  &lt;div class="two columns"&gt;16&lt;/div&gt;
&lt;/div&gt;</pre>

<p>HTML ファイルを保存してブラウザーにロードして、効果を確認してください。</p>

<div class="note">
<p><strong>注</strong>: この例がうまく動作しない場合は、<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/html-skeleton-finished.html">html-skeleton-finished.html</a> ファイルと比較してみてください（<a href="http://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html">ライブでも見られます</a>）。</p>
</div>

<p><code>skeleton.css</code> ファイルを見ると、これがどのように機能するかがわかります。 例えば、Skeleton には、「<code>three columns</code>」クラスを追加して要素をスタイルするための次の定義があります。</p>

<pre class="brush: css notranslate">.three.columns { width: 22%; }</pre>

<p>Skeleton（または他のグリッドフレームワーク）が行っていることはすべて、マークアップに追加することで使用できる定義済みクラスを設定することだけです。 これらのパーセントを自分で計算する作業を行ったのとまったく同じです。</p>

<p>ご覧のとおり、Skeleton を使用するときには、CSS をほとんど書く必要がありません。 マークアップにクラスを追加すると、すべてのフロートが処理されます。 グリッドシステムのフレームワークを使用することを説得力のある選択にしたのは、レイアウトに対する責任を他に引き継ぐ、この能力です！ しかし最近では、CSS グリッドレイアウトを使用して、多くの開発者がこれらのフレームワークから CSS が提供する内蔵されたネイティブグリッドを使用するように移行しています。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>これで、さまざまなグリッドシステムの作成方法が理解できました。 これは、古いサイトでの作業や、CSS グリッドレイアウトのネイティブグリッドとこれらの古いシステムとの違いの理解に役立ちます。</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Introduction">CSS レイアウト入門</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Normal_Flow">通常フロー</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">段組みレイアウト</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Responsive_Design">レスポンシブデザイン</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Media_queries">メディアクエリーの初心者向けガイド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">古いブラウザーのサポート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">基礎的なレイアウトの理解</a></li>
</ul>
