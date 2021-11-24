---
title: グリッドレイアウトの基本概念
slug: Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Guide
  - Layout
translation_of: Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
---
<div>{{CSSRef}}</div>

<p class="summary"><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a>は、二次元グリッドシステムを CSS にもたらします。グリッドは、主要なページ領域や小さなユーザーインターフェース要素のレイアウトに利用できます。この記事では、 CSS グリッドレイアウトと、 CSS Grid Layout Level 1 仕様の一部の用語について紹介します。この記事では、その概要を紹介し、この一連のガイドの残りで詳細を説明します。</p>

<h2 id="What_is_a_grid" name="What_is_a_grid">グリッドとは何か？</h2>

<p>グリッドは、列と行を定義する水平線と垂直線の集合が交差したものです。要素をグリッド上の行と列の中に配置することができます。 CSS グリッドレイアウトには次のような特徴があります。</p>

<h3 id="Fixed_and_flexible_track_sizes" name="Fixed_and_flexible_track_sizes">固定と可変のトラックサイズ</h3>

<p>例えばピクセル単位を使って固定トラックサイズのグリッドを作成することができます。これであるグリッドに所望のレイアウトに合うようなピクセルを設定できます。また、可変サイズのグリッドを作成する為にパーセントやこの目的で新たに制定された <code>fr</code> 単位を使用することができます。</p>

<h3 id="Item_placement" name="Item_placement">アイテムの配置</h3>

<p>グリッドの線の番号や名前を使ってグリッドのある位置を指定してアイテムを配置することができます。グリッドには、位置が明示されていないアイテムの配置を制御するアルゴリズムも含まれています。</p>

<h3 id="Creation_of_additional_tracks_to_hold_content" name="Creation_of_additional_tracks_to_hold_content">コンテンツを保持する為の追加のトラックの作成</h3>

<p>グリッドレイアウトでは、明快にグリッドを定義することができます。グリッドレイアウトの仕様では必要に応じて柔軟に行や列を追加できるようになっています。「コンテナーに収まるだけ多い数の列」を追加するような機能もあります。</p>

<h3 id="Alignment_control" name="Alignment_control">整列の制御</h3>

<p>グリッドには整列機能が含まれており、あるグリッドエリア内でアイテムがどのように整列するのかと、グリッド全体がどのように整列するかを制御できます。</p>

<h3 id="Control_of_overlapping_content" name="Control_of_overlapping_content">オーバーラップコンテンツの制御</h3>

<p>グリッドセルやグリッドエリア内には複数のアイテムも配置でき、それらはお互いに部分的にオーバーラップできます。この階層化は、 {{cssxref("z-index")}} プロパティで制御できます。</p>

<p>グリッドは強力な仕様であり、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックス</a>など CSS の他の部品と組み合わせると、以前は CSS での構築が不可能であったレイアウトを作成できます。これはすべて、<strong>グリッドコンテナー</strong>にグリッドを作成することから始まります。</p>

<h2 id="The_Grid_container" name="The_Grid_container">グリッドコンテナー</h2>

<p><em>グリッドコンテナー</em>を作成するには、要素に対して <code>display: grid</code> か <code>display: inline-grid</code> を指定します。グリッドコンテナーを作成すると、すべての<em>直接の</em>子要素が<em>グリッドアイテム</em>へと変わります。</p>

<p>この例では、 wrapper クラスの div を親要素として、その内部には 5 個の子要素が含まれます。</p>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<p><code>.wrapper</code> をグリッドコンテナー化します。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<p>{{ EmbedLiveSample('The_Grid_container', '200', '330') }}</p>

<p>すべての直接の子要素がグリッド要素になりました。それらの要素をグリッドにする前とウェブブラウザー上での見た目に変化は無いでしょう。グリッドには単一列のグリッドが作成されただけだからです。この時点で、 Firefox の開発者ツールの一つである <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Grid Inspector</a> 機能が便利であることを確認できます。上記の例を Firefox で表示してグリッドを調査すると、<code>grid</code> 値の隣に小さなアイコンが表示されているでしょう。これをクリックすると、その要素上のグリッドがブラウザーウィンドウ内にオーバーレイ表示されます。</p>

<p><img alt="Using the Grid Highlighter in DevTools to view a grid" src="https://mdn.mozillademos.org/files/14631/1-grid-inspector.png" style="height: 753px; width: 900px;"></p>

<p>CSS グリッドレイアウトについて学び、使っていく中で、このツールは、グリッドに何が起こっているかを視覚的に理解する助けになるでしょう。</p>

<p>この例をさらにグリッドらしくする為には、列トラックを追加する必要があります。</p>

<h2 id="Grid_Tracks" name="Grid_Tracks">グリッドトラック</h2>

<p>ここでは、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} プロパティを使用してグリッド上に行と列を定義します。これらはグリッドトラックを定義します。<em>グリッドトラック</em>は、グリッド上の任意の2本の線の間にあるスペースです。下の画像で、グリッド内の最初の行トラックががハイライトされているのを確認できるでしょう。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14637/1_Grid_Track.png" style="height: 261px; width: 392px;"></p>

<p>先述の例に対して <code>grid-template-columns</code> プロパティを追加すると、列トラックのサイズが定義できます。</p>

<p>3本の200ピクセル幅の列トラックを持つグリッドを作成しましょう。子要素はこのグリッドの各グリッドセルに 1 個ずつ配置されます。</p>

<div id="grid_first">
<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<p>{{ EmbedLiveSample('grid_first', '610', '140') }}</p>
</div>

<h3 id="The_fr_Unit" name="The_fr_Unit">fr 単位</h3>

<p>トラックは、どの長さの単位でも定義できます。グリッドには、柔軟なグリッドトラックを作成できるようにするため、追加の長さの単位が導入されています。新しい <code>fr</code> 単位は、グリッドコンテナー内の利用可能な空間の分数 (a fraction) を表します。次のグリッド定義は、利用可能なスペースに応じて伸縮する、幅が 3 等分されたトラックを作成します。</p>

<div id="fr_unit_ls">
<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

</pre>
</div>

<p>{{ EmbedLiveSample('fr_unit_ls', '220', '140') }}</p>
</div>

<p>この次の例では、1 つの <code>2fr</code> トラックと 2 つの <code>1fr</code> トラックの定義を作成します。利用可能な空間は、4 つに分割されます。そのうち 2 つが最初のトラックに与えられ、残りはそれぞれ次の 2 トラックに与えられます。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
</pre>

<p>最後の例では、絶対サイズのトラックを分数単位と混ぜて使用します。最初のトラックは 500px なので、この固定幅は利用可能な空間から除外されます。残りの領域は 3 つに分割され、比率に応じて 2 つの変動幅のトラックに割り当てられます。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
</pre>

<h3 id="Track_listings_with_repeat_notation" name="Track_listings_with_repeat_notation">repeat() 記法によるトラック列挙</h3>

<p>多くのトラックを持つ大きなグリッドのため、<code>repeat()</code> 記法を使用して、トラック列挙のすべてまたは一部を繰り返すことができます。例えば、以下のグリッド定義は:</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</pre>

<p>次のように書くこともできます。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</pre>

<p>繰り返し記法は、トラック列挙の一部にも使えます。この次の例では、はじめに 20px のトラックを持ち、続けて 6 つの <code>1fr</code> トラックのセクション、最後に 20px のトラックを持つグリッドを作成します。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
</pre>

<p>繰り返し記法はトラック列挙も取るので、トラック列挙の繰り返しパターンの作成にも利用できます。この次の例で、グリッドは10 のトラックで構成されており、それは<code>1fr</code> トラックに <code>2fr</code> トラックが続くパターンを5回繰り返したものです。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
</pre>

<h3 id="The_implicit_and_explicit_grid" name="The_implicit_and_explicit_grid">暗黙的と明示的なグリッド</h3>

<p>上でグリッドの例を作成した時、私達は列トラックを {{cssxref("grid-template-columns")}} プロパティで具体的に定義しましたが、グリッドは勝手に行も作っていました。これらの行は暗黙的のグリッドの一部です。一方、明示的なグリッドは、{{cssxref("grid-template-columns")}} または {{cssxref("grid-template-rows")}} で定義された行と列から構成されます。</p>

<p>定義されたグリッドの外側に何かを配置した場合（またはコンテンツの量のために、より多くのグリッドトラックが必要な場合）、グリッドは暗黙的なグリッドに行と列を作成します。これらのトラックは、デフォルトで自動サイズ調整されるため、サイズはトラック内のコンテンツに基づいて決まります。</p>

<p>{{cssxref("grid-auto-rows")}} と {{cssxref("grid-auto-columns")}} プロパティで、暗黙的なグリッドに作成されたトラックのセットサイズを定義することもできます。</p>

<p>下の例では、<code>grid-auto-rows</code> を使用して、暗黙的なグリッド内に作成されたトラックが 200px の高さになることを保証しています。</p>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<p>{{ EmbedLiveSample('The_implicit_and_explicit_grid', '230', '420') }}</p>

<h3 id="Track_sizing_and_minmax" name="Track_sizing_and_minmax">トラックのサイズ指定と minmax()</h3>

<p>明示的なグリッドのセットアップ時または自動生成された行や列のサイズを定義する時、最小サイズのトラックを与えておき、追加されたコンテンツに合わせて広げられるようにしたいでしょう。例えば、行を 100 px より小さくしたくないが、コンテンツの高さが 300 px に引き伸ばされた場合は行の高さをそのサイズに引き伸ばしたい場合です。</p>

<p>グリッドでは、それを {{cssxref("minmax", "minmax()")}} 関数で解決できます。この次の例では、{{cssxref("grid-auto-rows")}} の値に <code>minmax()</code> を使用しています。自動生成された行の高さの最小値は 100px、最大値は <code>auto</code> になります。値に <code>auto</code> を使うと、この行のセルがコンテンツのサイズに応じて空間が引き伸ばされ、その高さに合わせられます。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two
    &lt;p&gt;I have some more content in.&lt;/p&gt;
    &lt;p&gt;This makes me taller than 100 pixels.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '470') }}</p>

<h2 id="Grid_lines" name="Grid_lines">グリッド線</h2>

<p>私たちがグリッドを定義する時、グリッドトラックを定義するのであり、グリッド線ではないことに注意しなければなりません。グリッドには、アイテムの配置時に使用する番号の付いた線が与えられます。3 列 2 行のグリッドには、4 本の縦線があります。</p>

<p><img alt="Diagram showing numbered grid lines." src="https://mdn.mozillademos.org/files/14761/1_diagram_numbered_grid_lines.png" style="height: 456px; width: 764px;"></p>

<p>グリッド線の番号は、ドキュメントの書字方向に従って付けられます。左から右 (left-to-right) に書く言語では、線 1 はグリッドの左手側にあり、右から左 (right-to-left) に書く言語では、グリッドの右手側にあります。グリッド線には名前を付けることもできます。この方法については後のガイドで解説します。</p>

<h3 id="Positioning_items_against_lines" name="Positioning_items_against_lines">グリッド線に対するアイテムの配置</h3>

<p>グリッド線を基にした配置の詳細は、後の記事で解説します。次の例は、その簡単な方法のデモンストレーションです。アイテムの配置する時、私たちはトラックではなくグリッド線を対象にします。</p>

<p>以下の例では、最初の 2 つのアイテムを、{{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} および {{cssxref("grid-row-end")}} の各プロパティを使用して 3 列トラックのグリッド上に配置します。左から右へ向かって、最初のアイテムは列の線 1 から列の線 4 に対して、右端のグリッド線まで配置されます。また、行の線 1 から始まり、行の線 3 で終わる 2 行のトラックに及びます。</p>

<p>2 番目のアイテムは、グリッド列の線 1 から始まり、1 トラックの幅になります。これはデフォルトであるため、終わりの線を指定する必要がありません。また、行の線 3 から 5 まで、2 行トラックに及びます。他のアイテムは、それぞれグリッド上の空スペースに配置されます。</p>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;Three&lt;/div&gt;
  &lt;div class="box4"&gt;Four&lt;/div&gt;
  &lt;div class="box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<p>{{ EmbedLiveSample('Positioning_items_against_lines', '230', '420') }}</p>

<p>Firefox の開発者ツールで <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Grid Inspector</a> が使えることを忘れないでください。アイテムがグリッド線に対してどのように配置されるか知ることができます。</p>

<h2 id="Grid_cells" name="Grid_cells">グリッドセル</h2>

<p><em>グリッドセル</em> は、グリッド上の最も小さな単位です。コンセプトとしては、表のセルのようなものです。先述の例で、親要素のグリッドが定義されると、子アイテムが定義されたグリッドの各セルにレイアウトされる様を見てきました。下の画像では、グリッドの最初のセルをハイライトしています。</p>

<p><img alt="The first cell of the grid highlighted" src="https://mdn.mozillademos.org/files/14643/1_Grid_Cell.png" style="height: 233px; width: 350px;"></p>

<h2 id="Grid_areas" name="Grid_areas">グリッドエリア</h2>

<p>アイテムは、行と列の複数のセルにまたがって配置でき、<em>グリッドエリア</em> を作ることができます。グリッドエリアは四角形でなければなりません。例えば L 字型の領域は作れません。ハイライトされた領域は、2 行と 2 列にまたがるトラックです。</p>

<p><img alt="A grid area" src="https://mdn.mozillademos.org/files/14645/1_Grid_Area.png" style="height: 238px; width: 357px;"></p>

<h2 id="Gutters" name="Gutters">セル間隔</h2>

<p>グリッドセル間の <em>溝</em> (Gutters) または <em>小路</em> (alleys) は、 {{cssxref("column-gap")}} および {{cssxref("row-gap")}} プロパティを使用するか、短縮プロパティの {{cssxref("gap")}} で作成できます。下の例では、列間 10px、行間 <code>1em</code> の溝を作っています。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
</pre>

<div class="note">
<p><strong>メモ:</strong> グリッドが最初にブラウザーに実装されたとき、 {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, {{cssxref("gap")}} に <code>grid-</code> の接頭辞がつき、それぞれ {{cssxref("grid-column-gap")}}, {{cssxref("grid-row-gap")}}, {{cssxref("grid-gap")}} のようになっていました。</p>

<p>ブラウザーは接頭辞を外すよう更新されつつありますが、接頭辞付きの版も安全に利用できるよう保守されるでしょう。</p>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  column-gap: 10px;
  row-gap: 1em;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<p>{{ EmbedLiveSample('Gutters') }}</p>

<p>領域の前に占める溝による空間は、柔軟な長さの <code>fr</code> トラックに割り当てられ、通常のグリッドトラックのようにサイズ設定のために用いられます。しかしながら、溝の内側に何かを配置することはできません。グリッド線を基準にした配置では、溝は太線のように扱われます。</p>

<h2 id="Nesting_grids" name="Nesting_grids">入れ子状のグリッド</h2>

<p>グリッドアイテムはグリッドコンテナーにもなります。次の例は以前作成したもので、2 個のアイテムが配置指定された 3 列のグリッドです。この例では、最初のアイテムにサブアイテムが含まれています。これらのアイテムはグリッドの直接の子ではないので、グリッドレイアウトに関係しない通常のドキュメントフローで表示されています。</p>

<div id="nesting">
<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;
    &lt;div class="nested"&gt;a&lt;/div&gt;
    &lt;div class="nested"&gt;b&lt;/div&gt;
    &lt;div class="nested"&gt;c&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box box2"&gt;Two&lt;/div&gt;
  &lt;div class="box box3"&gt;Three&lt;/div&gt;
  &lt;div class="box box4"&gt;Four&lt;/div&gt;
  &lt;div class="box box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<p><img alt="Nested grid in flow" src="https://mdn.mozillademos.org/files/14641/1_Nested_Grids_in_flow.png" style="height: 512px; width: 900px;"></p>

<p>この <code>box1</code> に <code>display: grid</code> を設定すると、トラック定義を与えてグリッドにすることができます。これらは新しいグリッド上にレイアウトされます。</p>

<pre class="brush: css notranslate">.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('nesting', '600', '340') }}</p>

<p>この場合の入れ子状のグリッドは、親グリッドと関係しません。例で表示されているように、親グリッドの {{cssxref("grid-gap")}} を継承せず、入れ子状のグリッド内の線は親グリッドの線に沿いません。</p>

<h3 id="Subgrid" name="Subgrid">サブグリッド</h3>

<p>Level 2 のグリッド仕様書の草稿では、<ruby>サブグリッド<rp> (</rp><rt>subgrid</rt><rp>) </rp></ruby>と呼ばれる機能があり、親グリッドのトラック定義を利用した入れ子状のグリッドを作成できます。</p>

<div class="note">
<p><strong>メモ</strong>: この機能は Firefox 71 で初めて搭載され、これがサブグリッドを実装している唯一のブラウザーです。</p>
</div>

<p>現在の仕様書では、入れ子上のグリッドの例を編集して、 <code>grid-template-columns: repeat(3, 1fr)</code> のトラック定義を <code>grid-template-columns: subgrid</code> へ変更します。入れ子状のグリッドは親グリッドのトラックを利用してアイテムをレイアウトします。</p>

<pre class="brush: css notranslate">.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
</pre>

<h2 id="Layering_items_with_z-index" name="Layering_items_with_z-index"><code>z-index</code> による項目のレイヤー化</h2>

<p>グリッドアイテムは、同じセルを占有できます。行番号によるアイテム配置の例に戻り、2 個のアイテムがオーバーラップするように変更しましょう。</p>

<div id="l_ex">
<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;One&lt;/div&gt;
  &lt;div class="box box2"&gt;Two&lt;/div&gt;
  &lt;div class="box box3"&gt;Three&lt;/div&gt;
  &lt;div class="box box4"&gt;Four&lt;/div&gt;
  &lt;div class="box box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
</pre>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('l_ex', '230', '420') }}</p>

<p>アイテム <code>box2</code> が <code>box1</code> に重なり、ソースコードに書かれた順に、後のものが先のものの上に表示されます。</p>

<h3 id="Controlling_the_order" name="Controlling_the_order">順序の制御</h3>

<p>アイテムを上に積む順序は、配置が指定されたアイテムと同様に、<code>z-index</code> プロパティを使用して制御できます。<code>box2</code> に <code>box1</code> より下位の <code>z-index</code> 値を与えると、<code>box1</code> の奥に表示されるようになります。</p>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
</pre>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;One&lt;/div&gt;
  &lt;div class="box box2"&gt;Two&lt;/div&gt;
  &lt;div class="box box3"&gt;Three&lt;/div&gt;
  &lt;div class="box box4"&gt;Four&lt;/div&gt;
  &lt;div class="box box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<p>{{ EmbedLiveSample('Controlling_the_order', '230', '420') }}</p>

<h2 id="Next_Steps" name="Next_Steps">次のステップへ</h2>

<p>この記事では、グリッドレイアウト仕様の要点だけを見てきました。コードの例を試してみてから、 <a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">CSS グリッドレイアウトの詳細を掘り下げることの本当のスタートである、このガイドの次のステップへ</a>進んでください。</p>

<h2 id="Subnav">Subnav</h2>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/ja/docs/Web/CSS/Reference"><strong>CSS リファレンス</strong></a></li>
 <li><strong><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a></strong></li>
 <li class="toggle">
  <details open><summary>ガイド</summary>
  <ol>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本概念</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">他のレイアウト方法との関係</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">線ベースの配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">グリッドテンプレート領域</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">名前付きグリッド線を使用したレイアウト</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">CSS グリッドレイアウトにおける自動配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">CSS グリッドレイアウトにおけるボックス配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">CSS グリッド、論理値、書字方向</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS グリッドレイアウトとアクセシビリティ</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS グリッドおよびプログレッシブエンハンスメント</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">CSS グリッドを利用したよくあるレイアウトの実現</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Subgrid">サブグリッド</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout">マソンリーレイアウト</a></li>
  </ol>
  </details>
 </li>
 <li class="toggle">
  <details open><summary>プロパティ</summary>
  <ol>
   <li><code><a href="/ja/docs/Web/CSS/align-tracks">align-tracks</a></code>{{Experimental_Inline}}</li>
   <li><code><a href="/ja/docs/Web/CSS/column-gap">column-gap</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/gap">gap</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid">grid</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-area">grid-area</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-column">grid-column</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-column-end">grid-column-end</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-column-start">grid-column-start</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-row">grid-row</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-row-end">grid-row-end</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-row-start">grid-row-start</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-template">grid-template</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-template-areas">grid-template-areas</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-template-columns">grid-template-columns</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/grid-template-rows">grid-template-rows</a></code></li>
   <li><code><a href="/ja/docs/Web/CSS/justify-tracks">justify-tracks</a></code>{{Experimental_Inline}}</li>
   <li><code><a href="/ja/docs/Web/CSS/masonry-auto-flow">masonry-auto-flow</a></code>{{Experimental_Inline}}</li>
   <li><code><a href="/ja/docs/Web/CSS/row-gap">row-gap</a></code></li>
  </ol>
  </details>
 </li>
 <li class="toggle">
  <details open><summary>用語集</summary>
  <ol>
   <li><a href="/ja/docs/Glossary/Grid">グリッド</a></li>
   <li><a href="/ja/docs/Glossary/Grid_lines">グリッド線</a></li>
   <li><a href="/ja/docs/Glossary/Grid_tracks">グリッドトラック</a></li>
   <li><a href="/ja/docs/Glossary/Grid_cell">グリッドセル</a></li>
   <li><a href="/ja/docs/Glossary/Grid_areas">グリッド領域</a></li>
   <li><a href="/ja/docs/Glossary/Gutters">溝</a></li>
   <li><a href="/ja/docs/Glossary/Grid_Axis">グリッド軸</a></li>
   <li><a href="/ja/docs/Glossary/Grid_rows">グリッド行</a></li>
   <li><a href="/ja/docs/Glossary/Grid_column">グリッド列</a></li>
  </ol>
  </details>
 </li>
</ol>
</section>
