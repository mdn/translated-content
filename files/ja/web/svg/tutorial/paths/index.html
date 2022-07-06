---
title: Paths
slug: Web/SVG/Tutorial/Paths
tags:
  - Intermediate
  - SVG
  - SVG チュートリアル
  - 'SVG:Tutorial'
  - 中級者向け
translation_of: Web/SVG/Tutorial/Paths
---
<p>{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}</p>

<p>{{SVGElement('path')}} 要素は、 SVG の<a href="/ja/docs/Web/SVG/Tutorial/Basic_Shapes">基本図形</a>ライブラリの中でもっとも強力な要素です。これは、直線、曲線、弧などを作成するために用いることができます。</p>

<p>パスは、複数の直線や曲線を組み合わせて複雑な形状を作ります。直線だけで構成された複雑な形状は、 <a href="/ja/docs/Web/SVG/Tutorial/Basic_Shapes#Polyline"><code>&lt;polyline&gt;</code></a> として作成することができます。 <code>&lt;polyline&gt;</code> と <code>&lt;path&gt;</code> は似たような形状を作ることができますが、 <code>&lt;polyline&gt;</code> は曲線を表現するのに大量の小さな直線を必要とするため、大きなサイズにはうまく拡大することができません。</p>

<p>SVG を描画する際には、パスをよく理解しておくことが重要です。XML エディターやテキストエディターを使用して複雑なパスを作成するのはお勧めできませんが、それらがどのように機能するかを理解しておけば、 SVG の表示問題を特定して修復することができます。</p>

<p><code>&lt;path&gt;</code> 要素の形状は、1つの引数である {{ SVGAttr("d") }} によって定義されます (詳細は<a href="/ja/docs/Web/SVG/Tutorial/Basic_Shapes">基本図形</a>を参照してください)。 <code>d</code> 属性はこれらのコマンドで使用される一連のコマンドと引数を含みます。</p>

<p>それぞれのコマンドは、特定の文字でインスタンス化されています (例えば、クラスを作成したり、名前を付けたり、位置を特定したりします)。例えば、 x と y の座標 (<code>10</code>, <code>10</code>) に移動してみましょう。 "Move to" コマンドは <code>M</code> という文字で呼び出されます。パーサーはこの文字に遭遇したとき、ある点に移動する必要があることを知っています。したがって、 (<code>10</code>,<code>10</code>) に移動するためのコマンドは <code>M 10 10</code> となります。その後、パーサーは次のコマンドを読み始めます。</p>

<p>すべてのコマンドは 2 つの種類があります。<strong>大文字</strong>はページ上の絶対座標を指定し、<strong>小文字</strong>は相対座標 (例えば、 <em>直前の点から上に 10px、左に 7px 移動</em>) を指定します。</p>

<p><code>d</code> 属性の座標は <strong>常に単位なし</strong> で指定するので、ユーザー座標システムになります。後のチュートリアルで、どのようにパスを他のニーズに合わせて変形できるかを学びます。</p>

<h2 id="Line_commands" name="Line_commands">直線コマンド</h2>

<p>{{SVGElement("path")}} ノードには、直線のコマンドが 5 つあります。1つ目のコマンドは "Move To" すなわち <code>M</code> で、前述したものです。これは2つの引数、移動先の座標 (<code>x</code>) と座標 (<code>y</code>) を取ります。カーソルがすでにページ上のどこかにあった場合は、2 つの位置を結ぶ線は描画されません。 "Move To" コマンドは、どこから描画を始めるかを指定するパスの始点に見られます。</p>

<pre class="syntaxbox notranslate"><strong>M</strong> <var>x</var> <var>y</var>
(または)
<strong>m</strong> <var>dx</var> <var>dy</var>
</pre>

<p>以下の例では点 (<code>10</code>,<code>10</code>) だけがある状態になります。ただし、パスだけを描画してもこれらの点が表示されないことに注意してください。</p>

<p><img alt="" class="internal" src="/@api/deki/files/45/=Blank_Path_Area.png" style="float: right;"></p>

<pre class="brush: xml notranslate">&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;path d="M10 10"/&gt;

  &lt;!-- Points --&gt;
  &lt;circle cx="10" cy="10" r="2" fill="red"/&gt;

&lt;/svg&gt;</pre>

<p>線を描画するコマンドは 3 種類あります。もっとも一般的なものは、 "Line To" コマンド、すなわち <code>L</code> です。 <code>L</code> は 2 つの引数—x および y 座標—を持ち、現在の位置から新しい位置に向けて直線を描画します。</p>

<pre class="syntaxbox notranslate"> <strong>L</strong> <var>x</var> <var>y</var>
 (または)
 <strong>l</strong> <var>dx</var> <var>dy</var>
</pre>

<p>水平または垂直の線を描画するための短縮された形式があります。 <code>H</code> は水平線を描画、<code>V</code> は垂直線を描画します。どちらのコマンドも一方向にしか移動しないので、引数は 1 つだけです。</p>

<pre class="syntaxbox notranslate"> <strong>H</strong> <var>x</var>
 (または)
 <strong>h</strong> <var>dx</var>

 <strong>V</strong> <var>y</var>
 (または)
 <strong>v</strong> <var>dy</var>
</pre>

<p>始めやすいところは実際に図形を描いてみることです。手始めに長方形 ({{SVGElement("rect")}} 要素を使うとより簡単に描けるものと同じです) を描いてみましょう。これは水平線と垂直線だけで構成されています。</p>

<p><img alt="" class="internal" src="/@api/deki/files/292/=Path_Line_Commands.png" style="float: right;"></p>

<pre class="brush: xml notranslate">&lt;svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;path d="M 10 10 H 90 V 90 H 10 L 10 10"/&gt;

  &lt;!-- Points --&gt;
  &lt;circle cx="10" cy="10" r="2" fill="red"/&gt;
  &lt;circle cx="90" cy="90" r="2" fill="red"/&gt;
  &lt;circle cx="90" cy="10" r="2" fill="red"/&gt;
  &lt;circle cx="10" cy="90" r="2" fill="red"/&gt;

&lt;/svg&gt;</pre>

<p>最後に "Close Path" コマンドである <code>Z</code> を用いることで、前出のパスを少し短くすることができます。このコマンドは、現在の位置からパスの始点である最初の点へ戻る直線を描画します。常にパスを閉じる必要はありませんが、パスノードの終端によく置かれます。外見上、大文字コマンドと小文字コマンドの違いはありません。</p>

<pre class="syntaxbox notranslate"> <strong>Z</strong>
 (or)
 <strong>z</strong>
</pre>

<p>したがって、上記のパスは次のように簡単に書くことができます。</p>

<pre class="brush: xml notranslate"> &lt;path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/&gt;
</pre>

<p>同じ画像を描画するために、これらコマンドの相対形式を用いることもできます。前に述べたとおり相対形式のコマンドは小文字を用いて表記され、厳密な座標でカーソルを移動するのではなく直前の位置から相対的に移動します。例えば、ここで描いた四角形のサイズは 80x80 であるので、 <code>&lt;path&gt;</code> 要素は以下のように書くことができます:</p>

<pre class="brush: xml notranslate"> &lt;path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/&gt;
</pre>

<p>パスは点 (<code>10</code>,<code>10</code>) に移動した後、右へ水平に点 80 個分、下に点 80 個分、左に点 80 個分、そして始点へ戻るように移動します。</p>

<p>これらの例では、おそらく {{SVGElement("polygon")}} や {{SVGElement("polyline")}} 要素を使用すると、より簡潔に書くことができます。しかし、パスは SVG で描画する際に頻繁に使用されるので、開発者はこれらの代わりにパスを使用した方が快適かもしれません。どちらを使用しても、性能上の利点や欠点はありません。</p>

<h2 id="曲線コマンド">曲線コマンド</h2>

<p>なめらかな曲線を作成するために使うコマンドは 3 種類あります。 2 つはベジェ曲線、3 つめは "円弧" すなわち円の一部です。すでに Inkscape, Illustrator, Photoshop などのパスツールを使用して、ベジェ曲線の実体験をしているかもしれません。ベジェ曲線の背景の数学的な説明については、<a class="external" href="http://en.wikipedia.org/wiki/B%C3%A9zier_curve">Wikipedia</a> (<a class="external" href="http://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A">日本語版</a>) などのリファレンスを参照してください。ベジェ曲線には無数の異なる種類がありますが、 <code>&lt;path&gt;</code> 要素ではシンプルな 2 種類だけが使用可能です。三次ベジェ曲線の <code>C</code> と、二次ベジェ曲線の <code>Q</code> です。</p>

<h3 id="Bézier_Curves" name="Bézier_Curves">ベジェ曲線</h3>

<p>まずは、やや複雑なベジェ曲線である三次ベジェ曲線 から始めましょう。三次ベジェ曲線は、各々の点に対する 2 つの制御点をとります。従って、三次ベジェ曲線を作成したいときは 3 組の座標を指定しなければなりません。</p>

<pre class="syntaxbox notranslate"> <strong>C</strong> <var>x1</var> <var>y1</var>, <var>x2</var> <var>y2</var>, <var>x</var> <var>y</var>
 (または)
 <strong>c</strong> <var>dx1</var> <var>dy1</var>, <var>dx2</var> <var>dy2</var>, <var>dx</var> <var>dy</var>
</pre>

<p>ここで最後にある座標 (<code><var>x</var></code>,<code><var>y</var></code>) は、線の終点にしたい場所です。他の 2 組は制御点です。 (<code><var>x1</var></code>,<code><var>y1</var></code>) は曲線の始点向けの制御点、 (<code><var>x2</var></code>,<code><var>y2</var></code>) は曲線の終点向けの制御点です。制御点は各々の点から始まる線の傾斜を本質的に説明するものです。このときベジェ関数は、線の始めで確立した傾斜からもう一方の側の傾斜へ至るなめらかな曲線を作成します。</p>

<p><img alt="Cubic Bézier Curves with grid" class="internal" src="https://mdn.mozillademos.org/files/10401/Cubic_Bézier_Curves_with_grid.png" style="float: right; height: 160px; width: 190px;"></p>

<pre class="brush: xml notranslate">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/&gt;
  &lt;path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/&gt;

&lt;/svg&gt;
</pre>

<p>上の例では 9 つのベジェ曲線を作成しています。曲線が左側へ移動するにつれて、制御点は水平方向に離れていきます。また曲線が右側へ移動するにつれて、制御点は終点から遠く離れていきます。ここで特筆することは、曲線は 1 番目の制御点に向かって出発し、そして 2 番目の制御点の方向に沿って到着するということです。</p>

<p>長いなめらかな図形を描くために、複数のベジェ曲線をつなぐことができます。この場合はたいてい、ある点の片方の制御点はもう一方で使われる制御点の対向になるでしょう (傾斜を一定に保つ場合)。この場合はコマンド <code>S</code> (または <code>s</code>) で示される、三次ベジェ曲線の短縮版を用いることができます。</p>

<pre class="syntaxbox notranslate"> <strong>S</strong> <var>x2</var> <var>y2</var>, <var>x</var> <var>y</var>
 (または)
 <strong>s</strong> <var>dx2</var> <var>dy2</var>, <var>dx</var> <var>dy</var>
</pre>

<p><code>S</code> は前に示したものと同種の曲線を生成しますが、これが別の <code>S</code> コマンドや <code>C</code> コマンドの後に続く場合は、1 番目の制御点が前を曲線で用いられた制御点の対向にするものとみなします。<code>S</code> コマンドが別の <code>S</code> または <code>C</code> コマンドの後にない場合は、その曲線の 2 つの制御点は同じ場所であるとみなします。この場合は、 <code>Q</code> コマンドに同じ引数を与えて出力する結果と同じ結果になります。</p>

<p>この構文の例を以下に示しますが、左の図では、指定された制御点が赤、推定された制御点が青で示されています。</p>

<p><img alt="ShortCut_Cubic_Bézier_with_grid.png" class="internal" src="https://mdn.mozillademos.org/files/10405/ShortCut_Cubic_Bézier_with_grid.png" style="float: right; height: 160px; width: 190px;"></p>

<pre class="brush: xml notranslate">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/&gt;
&lt;/svg&gt;</pre>

<p>もう一つの種類のベジェ曲線は二次ベジェ曲線 <code>Q</code> であり、こちらは三次ベジェ曲線よりシンプルな曲線です。基本的に制御点を 1 つだけ必要とし、それは始点側と終点側両方の曲線の傾斜を定義します。このコマンドは制御点と曲線の終点を示す 2 つの引数を持ちます。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> <code>q</code> コマンドにおける座標の差分は、どちらも前回の点からの相対座標です (すなわち <code>dx</code> と <code>dy</code> は <code>dx1</code> と <code>dy1</code> に対する相対座標ではありません)。</p>
</div>

<pre class="syntaxbox notranslate"> <strong>Q</strong> <var>x1</var> <var>y1</var>, <var>x</var> <var>y</var>
 (または)
 <strong>q</strong> <var>dx1</var> <var>dy1</var>, <var>dx</var> <var>dy</var>
</pre>

<p><img alt="Quadratic Bézier with grid" class="internal" src="https://mdn.mozillademos.org/files/10403/Quadratic_Bézier_with_grid.png" style="float: right; height: 160px; width: 190px;"></p>

<pre class="brush: xml notranslate">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/&gt;
&lt;/svg&gt;</pre>

<p>三次ベジェ曲線の場合と同様に、二次ベジェ曲線のセットをつなぎ合わせるためのショートカットである <code>T</code> があります。</p>

<pre class="syntaxbox notranslate"> <strong>T</strong> <var>x</var> <var>y</var>
 (or)
 <strong>t</strong> <var>dx</var> <var>dy</var>
</pre>

<p>このショートカットは前に用いた制御点を参照して、そこから新しい制御点を推測します。これは、最初の制御点を指定した後は終点を指定するだけで、ある程度複雑な図形を作成できることを意味します。</p>

<p>このコマンドは前のコマンドが <code>Q</code> または <code>T</code> コマンドである場合のみ動作します。そうではない場合、制御点は前の点と同じであるとみなして直線が描画されるだけになります。</p>

<p><img alt="Shortcut_Quadratic_Bézier_with_grid.png" class="internal" src="https://mdn.mozillademos.org/files/10407/Shortcut_Quadratic_Bézier_with_grid.png" style="float: right; height: 158px; width: 188px;"></p>

<pre class="brush: xml notranslate">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/&gt;
&lt;/svg&gt;</pre>

<p>三次ベジェ曲線はどのような曲線を描きたいかについて自由度が高いにもかかわらず、どちらの曲線もかなり似た結果になります。どちらの曲線を用いるかはたいてい、そのときの状況や曲線の対称度に依存します。</p>

<h3 id="Arcs" name="Arcs">円弧</h3>

<p>SVG を用いて作成できる別のタイプの曲線が円弧 <code>A</code> コマンドです。円弧の本質は円または楕円の一部分です。</p>

<p>与えられた X 軸と Y 軸の半径について、2 つの点に接する楕円は (それらが円の半径の範囲内にある限り) 2 つあります。どちらにも 2 点を結ぶパスが 2 つずつあるため、どのような場合でも考えられる円弧は 4 つあります。</p>

<p>このため、円弧はかなり多くの引数をとります。</p>

<pre class="syntaxbox notranslate"> <strong>A</strong> <var>rx</var> <var>ry</var> <var>x-axis-rotation</var> <var>large-arc-flag</var> <var>sweep-flag</var> <var>x</var> <var>y</var>
 <strong>a</strong> <var>rx</var> <var>ry</var> <var>x-axis-rotation</var> <var>large-arc-flag</var> <var>sweep-flag</var> <var>dx</var> <var>dy</var>
</pre>

<p>始めに arc 要素は、円弧の X 軸方向の半径と Y 軸方向の半径を示す 2 つの引数を持ちます。必要に応じて {{SVGElement("ellipse")}} で同動作するかを確認してください。後の2つの引数は、描画が終了する X および Y 座標を示します。</p>

<p>3 番目の引数は、円弧の回転度を示します。これは次の説明が最適です。</p>

<p><img alt="SVGArcs_XAxisRotation_with_grid" class="internal" src="https://mdn.mozillademos.org/files/10409/SVGArcs_XAxisRotation_with_grid.png" style="float: right; height: 201px; width: 200px;"></p>

<pre class="brush: xml notranslate">&lt;svg width="320" height="320" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M 10 315
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/&gt;
&lt;/svg&gt;</pre>

<p>この例ではページを斜めに渡る <code>&lt;path&gt;</code> 要素を示しています。その中間で、2 つの楕円弧 (X 軸方向の半径 = <code>30</code>、Y 軸方向の半径 = <code>50</code>) が切り抜かれています。1 番目の円弧は x-axis-rotation が <code>0</code> であるので、円弧が通る楕円 (灰色で示しています) は直立しています。一方 2 番目の円弧では、 x-axis-rotation が <code>-45</code> 度になっています。これは円弧を回転させるので、例の図にあるとおり 2 番目の楕円の短半径がパスの方向に沿うよう一直線に並びます。</p>

<p>上の画像の回転していない楕円については、円弧の始点と終点から引かれた線が楕円の中心を通るので、 2 つの異なる円弧があるだけで、 4 つの円弧から選択できるわけではありません。少し修正した例では、 4 つの異なる円弧を形成する 2 つの楕円を見ることができます。</p>

<p><img alt="Show the 4 arcs on the Ellipse example" src="https://mdn.mozillademos.org/files/15822/SVGArcs_XAxisRotation_with_grid_ellipses.png" style="height: 320px; width: 320px;"></p>

<pre class="brush: xml notranslate">&lt;svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"&gt;
  &lt;path d="M 10 315
           L 110 215
           A 36 60 0 0 1 150.71 170.29
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/&gt;
  &lt;circle cx="150.71" cy="170.29" r="2" fill="red"/&gt;
  &lt;circle cx="110" cy="215" r="2" fill="red"/&gt;
  &lt;ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue"/&gt;
  &lt;ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue"/&gt;
&lt;/svg&gt;
</pre>

<p>青い楕円は、時計回りか反時計回りかによって、2つの円弧を描いていることに注意してください。それぞれの楕円には、短い円弧と長い円弧がある。2つの楕円は互いに鏡像になっている。これらの楕円は、開始点→終了点から形成された線に沿って反転している。</p>

<p>開始点→終了点が楕円の <code><var>x</var></code>, <code><var>y</var></code> 半径が到達できる距離よりも遠い場合、楕円の半径は最小に拡大され、開始点→終了点に到達できるようになります。このページの一番下にあるインタラクティブなコードペンがこのことをよく示しています。楕円の半径が拡大を必要とするほど大きいかどうかを判断するには、<a href="https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1">このような方程式系</a>を解く必要があります。この計算は、開始→終了 (<code>110</code>, <code>215</code>)→(<code>150.71</code>, <code>170.29</code>) の非回転楕円についてのものです。解 (x, y) は楕円の中心である．楕円の半径が小さすぎると、解は<a href="https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1">虚数</a>になります。この2番目の計算は、開始→終了 (<code>110</code>, <code>215</code>)→(<code>162.55</code>, <code>162.45</code>) の非回転楕円の場合です。楕円がかろうじて拡大されただけなので、この解には小さな虚数成分が含まれています。</p>

<p>前述した4つの異なるパスは、次の2つのパラメータフラグによって決定されます。前述したように、パスが移動する楕円にはまだ2つの可能性があり、両方の楕円上には2つの異なる可能性のあるパスがあり、4つの可能性のあるパスが与えられます。最初のパラメータは <code><var>large-arc-flag</var></code> です。これは単純に円弧が 180 度より大きいか小さいかを決定します。2 番目のパラメータは <code><var>sweep-flag</var></code> フラグです。これは、円弧が正の角度で動き始めるか負の角度で動き始めるかを決定します。以下の例は、4 つの可能性のあるすべての組み合わせと、それぞれの場合の 2 つの円を示しています。</p>

<p><img alt="" class="internal" src="/@api/deki/files/345/=SVGArcs_Flags.png" style="float: right;"></p>

<pre class="brush: xml notranslate">&lt;svg width="325" height="325" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M 80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/&gt;
  &lt;path d="M 230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/&gt;
  &lt;path d="M 80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/&gt;
  &lt;path d="M 230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/&gt;
&lt;/svg&gt;</pre>

<p>円弧は、図面の中で円や楕円のピースを簡単に作成する方法です。例えば、円グラフでは、各ピースごとに異なる円弧が必要になります。</p>

<p>から SVG に移行する場合、弧は習得するのが最も難しいものですが、はるかに強力なものになります。完全な円と楕円だけは、 SVG の円弧が苦手な形状です。円の周りを回るあらゆるパスの始点と終点が同じ点であるため、選択できる円の数は無限にあり、実際のパスは不定になるからです。パスの始点と終点を少しずらして、別のパスセグメントでつなぐことで近いものを描くことができます。例えば、半円ごとに円弧を描くことも可能です。このような場合は、実際の {{SVGElement("circle")}} や {{SVGElement("ellipse")}} ノードを使った方が簡単なことが多いです。<a href="http://codepen.io/lingtalfi/pen/yaLWJG">http://codepen.io/lingtalfi/pen/yaLWJG</a> のインタラクティブなデモは、 SVG の円弧の背後にある概念を理解するのに役立つかもしれません。 (Chrome と Firefox のみでテストしました。お使いのブラウザでは動作しないかもしれません)。</p>

<p>{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}</p>
