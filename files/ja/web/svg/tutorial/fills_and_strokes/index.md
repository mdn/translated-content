---
title: 塗りつぶしとストローク
slug: Web/SVG/Tutorial/Fills_and_Strokes
tags:
  - Beginner
  - NeedLiveSamples
  - SVG
  - SVG:Tutorial
translation_of: Web/SVG/Tutorial/Fills_and_Strokes
---
<p>{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}</p>

<p>図形に色を付ける方法としては (オブジェクトに属性を指定することを含む)、インライン <a href="/ja/docs/Glossary/CSS">CSS</a>、埋め込み CSS セクション、外部 CSS ファイルなどいくつかの方法があります。ほとんどに <a href="/ja/docs/Glossary/SVG">SVG</a> ではインライン CSS を使用していますが、どの方法にも利点と欠点があります。</p>

<h2 id="Fill_and_Stroke_Attributes">fill および stroke 属性</h2>

<h3 id="Painting">塗りつぶし</h3>

<p>基本的な色付けは、ノードに <code>fill</code> と <code>stroke</code> という 2 つの属性を設定することで行うことができます。 <code>fill</code> を使用するとオブジェクトの内部の色を設定し、 <code>stroke</code> はオブジェクトを囲む線の色を設定します。色名 (例えば <code><em>red</em></code>)、RGB 値 (例えば <code><em>rgb(255,0,0)</em></code>)、16進数値、RGBA 値など、HTML で用いる CSS の色名と同じ仕組みを用いることができます。</p>

<pre class="brush:xml;"> &lt;rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"
       fill-opacity="0.5" stroke-opacity="0.8"/&gt;
</pre>

<p>さらに、 SVG では <code>fill</code> と <code>stroke</code> の透明度を別々に指定することができます。これらは <code>fill-opacity</code> 属性と <code>stroke-opacity</code> 属性で制御されます。</p>

<div class="note style-wrap"><strong>注:</strong> Firefox 3+ 以降では、 <code>rgba</code> の値も許可されており、同じ効果が得られます。しかし、他のビューアーとの互換性を考慮すると、 <code>fill</code>/<code>stroke</code> の透明度を個別に指定したほうがよい場合があります。 <code>rgba</code> 値と <code>fill</code>/<code>stroke</code> opacity 値の両方を指定した場合、両方が適用されます。</div>

<h3 id="Stroke">ストローク</h3>

<p>この色のプロパティに加えて、線上にストロークを描画する方法を操作するための属性がいくつかあります。</p>

<p><img alt="" class="internal" src="svg_stroke_linecap_example.png" style="float: right;"></p>

<pre class="brush:xml;">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/&gt;
  &lt;line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/&gt;
  &lt;line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/&gt;
&lt;/svg&gt;</pre>

<p><code>stroke-width</code> プロパティは、このストロークの幅を定義します。ストロークはパスの中心に描かれます。上の例では、パスはピンク色、ストロークは黒で表示されています。</p>

<p>ストロークに影響する 2 つ目の属性は、上記の <code>stroke-linecap</code> プロパティです。これは、線の端の形状を制御します。</p>

<p>このプロパティには指定できる値が 3 種類あります。</p>

<ul>
 <li><code>butt</code> は、ストロークの方向に対して垂直 (90度) な直線エッジで線を閉じ、その端を交差させます。</li>
 <li><code>square</code> は基本的には同じ外観ですが、ストロークを実際のパスよりもわずかに伸ばします。ストロークがパスよりも長くなる長さは、 <code>stroke-width</code> の半分です。</li>
 <li><code>round</code> は、ストロークの終わりに丸める効果をもたらします。この曲線の半径は、 <code>stroke-width</code> で制御します。</li>
</ul>

<p>また <code>stroke-linejoin</code> プロパティは、 2 本の線分の接続部をどのように描画するかを制御します。</p>

<p><img alt="" class="internal" src="svg_stroke_linejoin_example.png" style="float: right;"></p>

<pre class="brush:xml;">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/&gt;

  &lt;polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/&gt;

  &lt;polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/&gt;
&lt;/svg&gt;</pre>

<p>これらの連続線は、それぞれ 2 本の線分から成っています。 2 本の接続箇所は <code>stroke-linejoin</code> 属性で制御します。この属性で取りうる値は 3 つあります。
 <code>miter</code> は、線を通常の幅よりわずかに延長して、 1 つの角度だけを使用して四角い角を作成します。 <code>round</code> は、丸みを帯びた線分を作成します。 <code>bevel</code> は、2 つの線分の間を渡るように新しい角を生成します。</p>

<p>あと、 <code>stroke-dasharray</code> 属性を指定することで波線状のストロークを描画することもできます。</p>

<p><img alt="" class="internal" src="svg_stroke_dasharray_example.png" style="float: right;"></p>

<pre class="brush:xml;">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/&gt;
  &lt;path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/&gt;
&lt;/svg&gt;</pre>

<p><code>stroke-dasharray</code> 属性は引数として、連続したカンマ区切りの数値をとります。</p>

<div class="note">
<p><strong>注:</strong> {{SVGElement("path")}} とは異なり、これらの数値はカンマ区切りでなければ<strong><em>なりません</em></strong> (ホワイトスペースは無視されます)。</p>
</div>

<p>最初の数字は塗りつぶされた部分の長さを、 2 番目の数字は塗りつぶされていない部分の長さを指定します。上の例では、 2 番目のパスで 5 ピクセル単位を埋め、 5 単位の次のダッシュまで 5 単位の空白を作ります。もっと複雑なダッシュパターンにしたい場合は、より多くの数字を指定することができます。最初の例では 3 つの数字を指定していますが、この場合、レンダラーは数字を 2 回ループさせて偶数のパターンを作ります。つまり、最初のパスでは、 5 個の塗りつぶし、 10 個の空、 5 個の塗りつぶしがレンダリングされ、さらにループして、 5 個の空、 10 個の塗りつぶし、 5 個の空が作成されます。このパターンが繰り返されます。</p>

<p><code>stroke</code> および <code>fill</code> プロパティは他にもあります。例えば、 <code><a href="/ja/docs/Web/SVG/Attribute/fill-rule">fill-rule</a></code> は自身が重なり合っている図形でどのように色をつけるかを指定します。 <code><a href="/ja/docs/Web/SVG/Attribute/stroke-miterlimit">stroke-miterlimit</a></code> はストロークが miter を描画するかどうかを指定します。そして <a href="/ja/docs/Web/SVG/Attribute/stroke-dashoffset">stroke-dashoffset</a> は、線上で波線の列をどこから始めるかを指定します。</p>

<h2 id="Using_CSS">CSS の使用</h2>

<p>オブジェクトに属性を設定するだけでなく、 CSS を使って塗りつぶしやストロークのスタイルを設定することもできます。すべての属性を CSS で設定できるわけではありません。ふつうは描画や塗りつぶしを行う属性が利用できます。 <code>fill</code>, <code>stroke</code>, <code>stroke-dasharray</code> などは、グラデーションや後述するパターン版に追加することで、すべてこの方法で設定できます。 <code>width</code>, <code>height</code>,  {{SVGElement("path")}} コマンドなどの属性は、 CSS では設定できません。何が使えて、何が使えないのかは、テストしてみるのが一番簡単です。</p>

<div class="note style-wrap"><strong>注:</strong> <a class="external" href="https://www.w3.org/TR/SVG/propidx.html">SVG 仕様書</a> では<em>プロパティ</em>とその他の属性を厳密に区別しています。前者は CSS で変更できますが、後者はできません。</div>

<p>CSS は要素に <code>style</code>  属性を用いることで、インラインで挿入することができます。</p>

<pre class="brush:xml;"> &lt;rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/&gt;
</pre>

<p>もしくは、特別な style セクションに移すこともできます。そのようなセクションは HTML のように <code>&lt;head&gt;</code> に入れるのではなく、 {{SVGElement("defs")}} と呼ばれる領域に入れます。</p>

<p>{{SVGElement("defs")}} は定義を意味し、ここで作成された要素は SVG の中で直接は現れませんが、他の要素から使用されます。</p>

<pre class="brush:xml;">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;defs&gt;
    &lt;style type="text/css"&gt;&lt;![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]&gt;&lt;/style&gt;
  &lt;/defs&gt;
  &lt;rect x="10" height="180" y="10" width="180" id="MyRect"/&gt;
&lt;/svg&gt;</pre>

<p>スタイルをこのような領域に移すと、大きな要素グループでのプロパティの調整が容易になります。ロールオーバー効果を作るための <strong><code>:hover</code> 擬似クラス</strong> などを用いることもできます。</p>

<pre class="brush:css;"> #MyRect:hover {
   stroke: black;
   fill: blue;
 }
</pre>

<p>CSS 規則を外部スタイルシートで指定するのに、<a href="https://www.w3.org/TR/xml-stylesheet/">ふつうの XML スタイルシート構文</a>を使用することもできます。</p>

<pre class="brush:xml;">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;?xml-stylesheet type="text/css" href="style.css"?&gt;

&lt;svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;rect height="10" width="10" id="MyRect"/&gt;
&lt;/svg&gt;</pre>

<p>style.css は以下のようにします。</p>

<pre class="brush:css;">#MyRect {
  fill: red;
  stroke: black;
}</pre>

<p>{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}</p>
