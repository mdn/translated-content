---
title: <basic-shape>
slug: Web/CSS/basic-shape
tags:
  - CSS
  - CSS シェイプ
  - CSS データ型
  - リファレンス
translation_of: Web/CSS/basic-shape
---
<div>{{CSSRef}}</div>

<p> <a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>&lt;basic-shape&gt;</code></strong> <a href="/ja/docs/Web/CSS/CSS_Types">データ型</a>は、 {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}, {{cssxref("offset-path")}} の各プロパティで使用されるシェイプを表します。</p>

<div>{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>&lt;basic-shape&gt;</code> データ型は、以下に挙げた基本シェイプ関数のうちの一つで定義します。</p>

<p>シェイプを作成するときは、 <code>&lt;basic-shape&gt;</code> の値を使用するそれぞれのプロパティで参照ボックスを定義します。シェイプの座標系は参照ボックスの左上隅が原点で、 X 座標が右方向、 Y 座標が下方向になります。パーセント値で表現された長さはすべて、参照ボックスの寸法を使用して算出されます。</p>

<h3 id="Shape_functions" name="Shape_functions">シェイプ関数</h3>

<p>以下のシェイプに対応しています。 <code>&lt;basic-shape&gt;</code> 値はすべて関数表記であり、 <a href="/ja/docs/Web/CSS/Value_definition_syntax">値定義構文</a>で定義されます。</p>

<dl>
 <dt><code><a id="inset()" name="inset()"></a>inset()</code></dt>
 <dd>
 <pre class="syntaxbox"><code>inset( &lt;shape-arg&gt;{1,4} [round &lt;border-radius&gt;]? )</code></pre>

 <p>内部の長方形を定義します。</p>

 <p>最初の4つの引数が与えられたときは、参照ボックス内部のそれぞれ上、右、下、左からみた、内部の矩形における各辺の位置を定義するオフセットを表します。これらの引数は margin 一括指定プロパティの構文に従い、1つ、2つ、4つの値で全四辺を設定することができます。</p>

 <p><a href="/ja/docs/Web/CSS/border-radius"><code>&lt;border-radius&gt;</code></a> の引数は省略可能で、 border-radius 一括指定プロパティの構文を使用して、内部の矩形の角の丸みを定義します。</p>

 <p>内部の矩形で2つの距離の組み合わせが、その軸の長さを超えていた場合（たとえば左右の距離がそれぞれ75％に設定された場合など）は、何も領域を囲まないシェイプを定義します。この仕様書によれば、これは空のフロート領域を生成します。</p>
 </dd>
 <dt><code><a id="circle()" name="circle()"></a>circle()</code></dt>
 <dd>
 <pre class="syntaxbox"><code>circle( [&lt;shape-radius&gt;]? [at &lt;position&gt;]? )</code></pre>

 <p>引数 <code>&lt;shape-radius&gt;</code> は<em>r</em>、つまり円の半径を表します。負の数は無効です。ここでパーセント値を指定すると、参照ボックスの幅と高さを使用して <code>sqrt(width^2+height^2)/sqrt(2)</code> としての割合になります。</p>

 <p>引数 {{cssxref("&lt;position&gt;")}} は円の中心を定義します。省略時は既定で中央になります。</p>
 </dd>
 <dt><code><a id="ellipse()" name="ellipse()"></a>ellipse()</code></dt>
 <dd>
 <pre class="syntaxbox"><code>ellipse( [&lt;shape-radius&gt;{2}]? [at &lt;position&gt;]? )</code></pre>

 <p>引数 <code>&lt;shape-radius&gt;</code> は、 r<sub>x</sub> と r<sub>y</sub>、つまり楕円の横半径と縦半径を、この順で表します。どちらの半径も負の値は無効です。ここでパーセント値を指定すると、参照ボックスの幅（r<sub>x</sub> 値の場合）と高さ（r<sub>y</sub> 値の場合）に対する割合になります。</p>

 <p>引数 position は楕円の中心を定義します。省略時は既定で中央になります。</p>
 </dd>
 <dt><code><a id="polygon()" name="polygon()"></a>polygon()</code></dt>
 <dd>
 <pre class="syntaxbox"><code>polygon( [&lt;fill-rule&gt;,]? [&lt;shape-arg&gt; &lt;shape-arg&gt;]# )</code></pre>

 <p><code>&lt;fill-rule&gt;</code> は多角形の内部を決めるために使用される<a href="/ja/docs/Web/SVG/Attribute/fill-rule">塗りつぶし規則</a>を表します。指定可能な値は <code>nonzero</code> と <code>evenodd</code> です。省略時の既定値は <code>nonzero</code> です。</p>

 <p>それぞれの shape-arg の組における引数 <em>x<sub>i</sub></em> と <em>y<sub>i</sub></em> は、多角形の i 番目の頂点の座標を表します。</p>
 </dd>
 <dt><code><a id="path()" name="path()"></a>path()</code></dt>
 <dd>
 <pre class="syntaxbox"><code>path( [&lt;fill-rule&gt;,]? &lt;string&gt;)</code></pre>

 <p>省略可能な <code>&lt;fill-rule&gt;</code> は、パスの内部を決めるために使用される<a href="/ja/docs/Web/SVG/Attribute/fill-rule">塗りつぶし規則</a>を表します。指定可能な値は <code>nonzero</code> と <code>evenodd</code> です。省略時の既定値は <code>nonzero</code> です。</p>

 <p>必須の &lt;string&gt; は、引用符で囲まれた <a href="/ja/docs/SVG/Attribute/d">SVG Path</a> です。</p>
 </dd>
</dl>

<p>上記で定義されていない引数は、以下のように定義されています。</p>

<pre class="syntaxbox"><code>&lt;shape-arg&gt; = &lt;length&gt; | &lt;percentage&gt;
&lt;shape-radius&gt; = &lt;length&gt; | &lt;percentage&gt; | closest-side | farthest-side</code></pre>

<p>円や楕円の半径を定義します。省略時の既定値は <code>closest-side</code> です。</p>

<p><code>closest-side</code> はシェイプの中心から参照ボックスの最も近い辺までの距離を使用します。円の場合、これはあらゆる方向で最も近い辺です。楕円の場合、その軸で最も近い辺です。</p>

<p><code>farthest-side</code> はシェイプの中心から参照ボックスの最も遠い辺までの距離を使用します。円の場合、これはあらゆる方向で最も遠い辺です。楕円の場合、その軸で最も遠い辺です。</p>

<h2 id="Computed_values_of_basic_shapes" name="Computed_values_of_basic_shapes">基本シェイプの計算値</h2>

<p><code>&lt;basic-shape&gt;</code> 関数での値は以下の例外を除けば、規定通りに計算されます。</p>

<ul>
 <li>省略された値は既定値として含められ計算されます。</li>
 <li><code>circle()</code> または <code>ellipse()</code> における {{cssxref("&lt;position&gt;")}} 値は、それぞれを絶対的な長さやパーセント値で指定し、左上を原点とした（水平と垂直）オフセットの組として計算されます。</li>
 <li><code>inset()</code> での <a href="/ja/docs/Web/CSS/border-radius"><code>&lt;border-radius&gt;</code></a> 値は全8つの {{cssxref("length")}} またはパーセント値の展開リストとして計算されます。</li>
</ul>

<h2 id="Interpolation_of_basic_shapes" name="Interpolation_of_basic_shapes">基本シェイプの補間</h2>

<p> ある <code>&lt;basic-shape&gt;</code> と他のものの間でアニメーションが行われるとき、以下の規則が適用されます。シェイプ関数の中の値は単なるリストとして補間が行われます。リストの値は可能であれば {{cssxref("&lt;length&gt;")}}、 {{cssxref("&lt;percentage&gt;")}}、 {{cssxref("calc", "calc()")}} として補間されます。リストの値がこれらの型以外で同じであれば（両方のリストの同じ位置に <code>nonzero</code> があった場合など）、それらの値は補間が行われます。</p>

<ul>
 <li>どちらのシェイプも同じ参照ボックスを使う必要があります。</li>
 <li>両方のシェイプが同じ型で、型が <code>ellipse()</code> または <code>circle()</code> で、半径に <code>closest-side</code> または <code>farthest-side</code> のキーワードが使われていない場合、シェイプ関数のそれぞれの値の間で補間が行われます。</li>
 <li>両方のシェイプの型が <code>inset()</code> の場合、シェイプ関数のそれぞれの値の間で補間が行われます。</li>
 <li>両方のシェイプの型が <code>polygon()</code> で、両方の多角形が同じ数の角を持っており、同じ <code>&lt;fill-rule&gt;</code> を使用している場合、シェイプ関数のそれぞれの値の間で補間が行われます。</li>
 <li>両方のシェイプの型が <code>path()</code> の場合、両方の文字列が同じ数でパスデータコマンドの型が同じ順序であれば、実数でそれぞれのパスデータコマンドが補間されます。</li>
 <li>それ以外の場合は補間が行われません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Animated_polygon" name="Animated_polygon">アニメーションする多角形</h3>

<p>この例では、 <a href="/ja/docs/Web/CSS/@keyframes">@keyframes</a> @-規則を使用して、二つの多角形の間でクリップパスをアニメーションします。なお、どちらの多角形も同じ数の角を持つことが、この種のアニメーションが動作するために必要です。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
  }

  to {
    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);
  }
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Animated_polygon','340', '340')}}</p>

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
   <td>{{ SpecName('CSS Shapes', '#basic-shape-functions', '&lt;basic-shape&gt;') }}</td>
   <td>{{ Spec2('CSS Shapes') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.types.basic-shape")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}</li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">Edit Shape Paths in CSS — Firefox Developer Tools</a></li>
</ul>
