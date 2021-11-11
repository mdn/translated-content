---
title: background-position
slug: Web/CSS/background-position
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/background-position
---
<div>{{CSSRef}}</div>

<p><strong><code>background-position</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、それぞれの背景画像の初期位置を設定します。位置は {{cssxref("background-origin")}} で設定された位置レイヤーからの相対です。</p>

<div>{{EmbedInteractiveExample("pages/css/background-position.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers notranslate">/* キーワード値 */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* &lt;percentage&gt; 値 */
background-position: 25% 75%;

/* &lt;length&gt; 値 */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* 複数の画像 */
background-position: 0 0, center;

/* 辺からのオフセット値 */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* グローバル値 */
background-position: inherit;
background-position: initial;
background-position: unset;
</pre>

<p><code>background-position</code> プロパティは1つ以上の <code><a href="#&lt;position>">&lt;position&gt;</a></code> 値をカンマで区切って指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt id="&lt;position>"><code>&lt;position&gt;</code></dt>
 <dd>{{cssxref("&lt;position&gt;")}} です。位置は要素のボックスの辺を基準にして項目を配置するための X/Y 座標を定義します。1～4つの値を使用して定義できます。2つのキーワード値でない値を使用する場合は、最初の値が水平位置を表し、2番目の値が垂直位置を表します。1つの値しか指定されない場合、2番目の値は <code>center</code> とみなされます。3つまたは4つの値が使用された場合は、 length-percentage 値はその前のキーワード値に対するオフセットです。</dd>
 <dd>
 <p><strong>値1つの構文:</strong> 値は以下のようになります。</p>

 <ul>
  <li><code>center</code> のキーワード値の場合は、画像を中央揃えにします。</li>
  <li>キーワード値 <code>top</code>、 <code>left</code>、 <code>bottom</code>、 <code>right</code> のうちの一つの場合。<span id="result_box" lang="ja"><span>アイテムを配置する辺を指定します。</span><span>もう一方の寸法が50％に設定されていれば、指定された端までの間の中央に配置されます。</span></span></li>
  <li>{{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の場合。これは左からの相対位置の X 座標を指定し、 Y 座標は50%に設定されます。</li>
 </ul>

 <p><strong>値2つの構文:</strong> 1つ目の値が X を定義し、もう1つの値が Y を定義します。両方が以下の値を取ることができます。</p>

 <ul>
  <li>キーワード値 <code>top</code>、 <code>left</code>、 <code>bottom</code>、 <code>right</code> のうちの一つの場合。ここで <code>left</code> または <code>right</code> が指定された場合は、これが X 座標を定義し、もう一方の値が Y 座標になります。 <code>top</code> または <code>bottom</code> が指定された場合は、これが Y 座標を定義し、もう一方の値が X 座標を定義します。</li>
  <li>{{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の場合。もう一方の値が <code>left</code> または <code>right</code> の場合、この値は上辺からの相対的な Y 座標を定義します。もう一方の値が <code>top</code> または <code>bottom</code> の場合、この値は左辺からの相対的な X 座標を定義します。両方の値が <code>&lt;length&gt;</code> または <code>&lt;percentage&gt;</code> の値である場合は、最初の値が X 座標を定義し、2番目の値が Y 座標を定義します。</li>
  <li>注: 一方の値が <code>top</code> または <code>bottom</code> である場合、もう一方の値を <code>top</code> または <code>bottom</code> にすることはできません。一方の値が <code>left</code> または <code>right</code> である場合、もう一方の値を <code>left</code> または <code>right</code> にすることはできません。すなわち、例えば <code>top top</code> や <code>left right</code> は妥当ではありません。</li>
  <li>既定値は <code>top left</code> または <code>0% 0%</code> です。</li>
 </ul>
 </dd>
 <dd>
 <p><strong>値3つの構文:</strong> 2つの値はキーワード値で、3つ目の値はその前の値のオフセットです。</p>

 <ul>
  <li>最初の値はキーワード値 <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>, <code>center</code> のうちの1つです。ここで <code>left</code> または <code>right</code> が指定された場合は、これは X 座標を定義します。 <code>top</code> または <code>bottom</code> が指定された場合は、これは Y 座標を定義し、もう一方のキーワード値が X 座標を定義します。</li>
  <li>{{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値が2番目の値であった場合は、最初の値に対するオフセットです。3番目の値であった場合は、2番目の値に対するオフセットです。</li>
  <li>単一の長さまたはパーセント値は、その前のキーワード値に対するオフセットです。1つのキーワードに2つの keyword with two {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値の組み合わせは無効です。</li>
 </ul>
 </dd>
 <dd>
 <p><strong>値4つの構文:</strong> 1番目と3番目の値は、X と Y を定義するキーワード値で、2番目と4番目の値は、先行する X と Y のキーワード値のオフセットです。</p>

 <ul>
  <li>1番目と3番目の値は <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code> のうちの1つです。ここで <code>left</code> または <code>right</code> が指定された場合、これは X を定義します。 <code>top</code> または <code>bottom</code> が指定された場合、これは Y を表し、もう一方のキーワード値が X を表します。</li>
  <li>2番目と4番目の値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の値です。2番目の値は1番目のキーワードのオフセットです。4番目の値は3番目の値のオフセットです。</li>
 </ul>
 </dd>
 <dd>
 <p><strong>パーセント値について</strong></p>
 </dd>
 <dd>指定された背景画像の位置のパーセント値のオフセットは、コンテナーに対して相対的なものです。 0% の値は、背景画像の左 (または上) の端がコンテナーの対応する左 (または上) の端に整列していることを意味するか、または、画像の 0% マークがコンテナーの 0% マーク上にあることを意味します。 100％ の値は、背景画像の<em>右</em> (または<em>下</em>) の縁が容器の<em>右</em> (または<em>下</em>) の縁と揃うか、または画像の 100％ マークが容器の100％マーク上になることを意味します。したがって、水平方向または垂直方向に 50% の値を設定すると、画像の 50% マークがコンテナーの 50% マーク上になるので、背景画像が中央に位置することになります。同様に、 <code>background-position: 25% 75%</code> は、画像の左から 25%、上から 75% の位置にある点が、コンテナの左から 25%、上から 75% の位置にあるコンテナーの点に配置されることを意味します。</dd>
 <dd>基本的に何が起こるかというと、背景画像の寸法が対応するコンテナの寸法から<em>減算され</em>、その結果の値のパーセンテージが左端（または上端）からの直接のオフセットとして使用されます。</dd>
 <dd>
 <p><code>(コンテナーの幅 - 画像の幅) * (position x%) = (x オフセット値)<br>
  (コンテナーの高さ - 画像の高さ) * (position y%) = (y オフセット値)</code></p>

 <p>X 軸を例にすると、幅 300px の画像があり、それを幅 100px のコンテナーに入れて、 background-size を auto に設定して使用しているとします。</p>

 <p><code>100px - 300px = -200px <em>(コンテナーと画像の差)</em></code></p>

 <p>ですから、位置のパーセント値が -25%, 0%, 50%, 100%, 125% であった場合、画像とコンテナーの橋のオフセット値は以下のようになります。</p>

 <p><code>-200px * -25% = 50px<br>
  -200px * 0% = 0px<br>
  -200px * 50% = -100px<br>
  -200px * 100% = -200px </code><br>
  <code>-200px * 125% = -250px </code></p>

 <p>そのため、この例の結果の値では、<strong>画像</strong>の<strong>左端</strong>が<strong>コンテナー</strong>の<strong>左端</strong>からオフセットされています。</p>

 <ul>
  <li>+ 50px (画像の左端を100ピクセル幅のコンテナーの中央に配置)</li>
  <li>0px (画像の左端がコンテナーの左端に一致)</li>
  <li>-100px (画像の左端をコンテナーの左から 100px に配置。この例では画像の中央である 100px の位置が、コンテナーの中央になることを意味します)</li>
  <li>-200px (画像の左端をコンテナーの左から 200px に配置。この例では右の画像の端が右のコンテナの端と一致することを意味します)</li>
  <li>-250px (画像の左端をコンテナーの左から 250px に配置。この例では 300px 幅の画像の右端をコンテナの中央に置きます)</li>
 </ul>

 <p>背景サイズが指定された軸のコンテナーのサイズと等しい場合、その軸のパーセンテージ位置は、「コンテナーと画像の差」がゼロになるので、何の効果もないことは言及しておく価値があります。絶対値を使ってオフセットする必要があります。</p>
 </dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Positioning_background_images" name="Positioning_background_images">背景画像の位置指定</h3>

<p>以下の3つの例は、 {{cssxref("background")}} を使って黄色い四角形の要素とその中に星の画像を作成します。それぞれの例で、星は異なる位置にあります。加えて、3番目の例では1つの要素内にある2つの異なる背景画像の位置を指定する方法を示しています。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="exampleone"&gt;Example One&lt;/div&gt;
&lt;div class="exampletwo"&gt;Example Two&lt;/div&gt;
&lt;div class="examplethree"&gt;Example Three&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">/* すべての &lt;div&gt; で共有される */
div {
  background-color: #FFEE99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* これらの例は background 一括指定プロパティを使用しています */
.exampleone {
  background: url("https://mdn.mozillademos.org/files/11987/startransparent.gif") #FFEE99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("https://mdn.mozillademos.org/files/11987/startransparent.gif") #FFEE99 left 4em bottom 1em no-repeat;
}

/* 複数の背景画像: 各画像は対応する位置スタイルに、
   最初に指定されたものから順に対応付けられます。 */
.examplethree {
  background-image:    url("https://mdn.mozillademos.org/files/11987/startransparent.gif"),
                       url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-position: 0px 0px,
                       right 3em bottom 2em;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Positioning_background_images', 420, 200)}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#background-position', 'background-position')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>複数の背景のサポートを追加。4個の値を持つ構文、実装に一致するように割合の定義を調整。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'colors.html#propdef-background-position', 'background-position')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>キーワード値と {{cssxref("&lt;length&gt;")}} および {{cssxref("&lt;percentage&gt;")}} の値の混合指定を許容。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#background-position', 'background-position')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.background-position")}}</p>

<h3 id="Quantum_CSS_notes" name="Quantum_CSS_notes">Quantum CSS のメモ</h3>

<ul>
 <li>Gecko には <code>background-position</code> が異なる数の {{cssxref("&lt;position&gt;")}} の値を持つ2つの値の {{cssxref("transition")}} ができないというバグがあります。例えば <code>background-position: 10px 10px;</code> と <code>background-position: 20px 20px, 30px 30px;</code> などです（{{bug(1390446)}} を参照）。 Firefox の新しいパラレル CSS エンジン (<a href="https://wiki.mozilla.org/Quantum">Quantum CSS</a> または <a href="https://wiki.mozilla.org/Quantum/Stylo">Stylo</a> と呼ばれており、 Firefox 57 でリリース予定) では修正されています。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("background-position-x")}}</li>
 <li>{{cssxref("background-position-y")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="/ja/docs/Web/CSS/Multiple_backgrounds" title="CSS/Multiple backgrounds">複数の背景</a></li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
