---
title: border-image-width
slug: Web/CSS/border-image-width
tags:
  - CSS
  - CSS プロパティ
  - CSS 背景と境界
  - Reference
  - border-image
translation_of: Web/CSS/border-image-width
---
<div>{{CSSRef}}</div>

<p><strong><code>border-image-width</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の<a href="/ja/docs/Web/CSS/border-image">境界画像</a>の幅を設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/border-image-width.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>このプロパティの値が要素の {{cssxref("border-width")}} よりも大きい場合、境界画像はパディング領域 (またはコンテンツ領域) の縁に向けて拡張されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
border-image-width: auto;

/* &lt;length&gt; 値 */
border-image-width: 1rem;

/* &lt;percentage&gt; 値 */
border-image-width: 25%;

/* &lt;number&gt; 値 */
border-image-width: 3;

/* 上下 | 左右 */
border-image-width: 2em 3em;

/* 上 | 左右 | 下 */
border-image-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
border-image-width: 5% 2em 10% auto;

/* グローバル値 */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
</pre>

<p><code>border-image-width</code> プロパティは下記の値のリストにある1つから4つの値を使用して指定することができます。</p>

<ul>
 <li>値が<strong>1つ</strong>指定された場合、<strong>全4辺</strong>に同じ幅が適用されます。</li>
 <li>値が<strong>2つ</strong>指定された場合、1つ目の幅が<strong>上下</strong>に、2つ目が<strong>左右</strong>に適用されます。</li>
 <li>値が<strong>3つ</strong>指定された場合、1つ目の幅が<strong>上</strong>に、2つ目が<strong>左右</strong>に、3つ目が<strong>下</strong>に適用されます。</li>
 <li>値が<strong>4つ</strong>指定された場合、幅は<strong>上</strong>、<strong>右</strong>、<strong>下</strong>、<strong>左</strong>の順 (時計回り) で適用されます。</li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>境界の幅を、 {{cssxref("&lt;length&gt;")}} 又は {{cssxref("&lt;percentage&gt;")}} で指定します。パーセント値は水平オフセットにおいては境界画像の領域の<em>幅</em>、また垂直オフセットにおいては境界画像の領域の<em>高さ</em>です。負の値であってはいけません。</dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>境界の幅を、対応する {{cssxref("border-width")}} に対する倍率として指定します。負の値であってはいけません。</dd>
 <dt><code>auto</code></dt>
 <dd>境界の幅が、対応する {{cssxref("border-image-slice")}} の本質的な幅と高さ (もしあれば) と等しくなるようにします。画像が本質的な寸法を持っていないのであれば、対応する <code>border-width</code> が代わりに使用されます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>この例は以下の90×90ピクセルの ".png" ファイルを使用して境界画像を作成します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/10470/border.png"></p>

<p>そして、元の画像内のそれぞれの円は30×30ピクセルです。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
   eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
   no sea takimata sanctus est Lorem ipsum dolor sit amet.&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  border: 20px solid;
  border-image: url("https://mdn.mozillademos.org/files/10470/border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples', 200, 240)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Backgrounds', '#border-image-width', 'border-image-width')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-image-width")}}</p>
