---
title: transform-origin
slug: Web/CSS/transform-origin
tags:
  - CSS
  - CSS Property
  - CSS Transforms
  - Reference
  - 'default value: center'
  - 'recipe:css-property'
  - transform-origin
translation_of: Web/CSS/transform-origin
---
{{ CSSRef }}

**`transform-origin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の<ruby>変形<rp> (</rp><rt>transform</rt><rp>) </rp></ruby>における原点を設定します。

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</p>

変形の原点とは、それを中心に変形が適用される点です。例えば、 `[rotate()](/ja/docs/Web/CSS/transform-function/rotate)` 関数における変形の原点は、回転の中心です。

<p>このプロパティは最初にプロパティ値の反対に平行移動し、それから要素の変形を適用し、プロパティ値の分だけ平行移動する形でで適用されます。<br>
 すなわち、</p>

<pre class="brush: css notranslate">transform-origin: -100% 50%;
transform: rotate(45deg);
</pre>

この定義は以下の変形と同じです。

<pre class="brush: css notranslate">transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);</pre>

既定で、変形の原点は `center` です。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css notranslate">/* 値１つの構文 */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* グローバル値 */
transform-origin: inherit;
transform-origin: initial;
transform-origin: unset;
</pre>

`transform-origin` プロパティは、オフセットを表す１～３つの値を使用して指定することができます。明示的に定義されなかったオフセットは、それぞれの対応する[初期値](/ja/docs/Web/CSS/initial_value)にリセットされます。

２つ以上の値が定義され、どちらもの値もキーワードでない場合、または使われているキーワードが `center` だけであった場合、最初の値は水平方向のオフセットであり、二番目の値は垂直方向のオフセットです。

<ul>
 <li>値１つの構文:
  <ul>
   <li>値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, 又は `left`, `center`, `right`, `top`, `bottom` のうちの１つでなければなりません。</li>
  </ul>
 </li>
 <li>値２つの構文:
  <ul>
   <li>一方の値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, 又はキーワードの `left`, `center`, `right` のうちの１つでなければなりません。</li>
   <li>もう一方の値は、 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, 又はキーワードの `top`, `center`, `bottom` のうちの１つでなければなりません。</li>
  </ul>
 </li>
 <li>値３つの構文:
  <ul>
   <li>１番目と２番目の値は、値２つの構文と同じです。</li>
   <li>３番目の値は {{cssxref("&lt;length&gt;")}} でなければなりません。これは常に Z オフセットを表します。</li>
  </ul>
 </li>
</ul>

<h3 id="Values" name="Values">値</h3>

- <var>x-offset</var>
  - : {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の、ボックスの左端から変形の原点までの距離を示す値です。
- <var>offset-keyword</var>
  - : `left`, `right`, `top`, `bottom`, `center` のいずれかのキーワードで、対応するオフセットを表します。
- <var>y-offset</var>
  - : {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の、ボックスの右端から変形の原点までの距離を示す値です。
- <var>x-offset-keyword</var>
  - : `left`, `right`, `center` のいずれかのキーワードで、ボックスの左端から変形の原点までの距離を示します。
- <var>y-offset-keyword</var>
  - : `top`, `bottom`, `center` のいずれかのキーワードで、ボックスの上端から変形の原点までの距離を示します。
- <var>z-offset</var>
  - : {{cssxref("&lt;length&gt;")}} 値 ({{cssxref("&lt;percentage&gt;")}} を指定すると文が無効になります) で、ユーザーの視点と z=0 原点の距離を示します。

キーワードは便利な速記であり、次の {{cssxref("&lt;percentage&gt;")}} 値に相当します。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">キーワード</th>
   <th scope="col">値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`left`</td>
   <td>`0%`</td>
  </tr>
  <tr>
   <td>`center`</td>
   <td>`50%`</td>
  </tr>
  <tr>
   <td>`right`</td>
   <td>`100%`</td>
  </tr>
  <tr>
   <td>`top`</td>
   <td>`0%`</td>
  </tr>
  <tr>
   <td>`bottom`</td>
   <td>`100%`</td>
  </tr>
 </tbody>
</table>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

{{CSSInfo}}

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>コード</th>
   <th>サンプル</th>
  </tr>
  <tr>
   <td>
    `transform: none;`
   </td>
   <td>
    <div class="hidden" id="transform_none">
    <pre class="brush: html notranslate">
&lt;div class="box1"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box1 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: none;
-webkit-transform: none;
}
</pre>
    </div>

    {{EmbedLiveSample('transform_none', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    `transform: rotate(30deg);`
   </td>
   <td>
    <div class="hidden" id="transform_rotate_only">
    <pre class="brush: html notranslate">
&lt;div class="box2"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box2 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre>
    </div>

    {{EmbedLiveSample('transform_rotate_only', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: rotate(30deg);<br>
     transform-origin: 0 0;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_rotate">
    <pre class="brush: html notranslate">
&lt;div class="box3"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box3 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform-origin: 0 0;
-webkit-transform-origin: 0 0;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre>
    </div>

    {{EmbedLiveSample('transform_rotate', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: rotate(30deg);<br>
     transform-origin: 100% 100%;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_rotate_with_percentage">
    <pre class="brush: html notranslate">
&lt;div class="box4"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box4 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform-origin: 100% 100%;
-webkit-transform-origin: 100% 100%;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre>
    </div>

    {{EmbedLiveSample('transform_rotate_with_percentage', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: rotate(30deg);<br>
     transform-origin: -1em -3em;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_rotate_with_em">
    <pre class="brush: html notranslate">
&lt;div class="box5"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box5 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform-origin: -1em -3em;
-webkit-transform-origin: -1em -3em;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre>
    </div>

    {{EmbedLiveSample('transform_rotate_with_em', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    `transform: scale(1.7);`
   </td>
   <td>
    <div class="hidden" id="transform_scale_only">
    <pre class="brush: html notranslate">
&lt;div class="box6"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box6 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: scale(`1.7`);
-webkit-transform: scale(`1.7`);
}
</pre>
    </div>

    {{EmbedLiveSample('transform_scale_only', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: scale(1.7);<br>
     transform-origin: 0 0;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_scale_without_origin">
    <pre class="brush: html notranslate">
&lt;div class="box7"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box7 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: scale(`1.7`);
-webkit-transform: scale(`1.7`);
transform-origin: 0 0;
-webkit-transform-origin: 0 0;
}
</pre>
    </div>

    {{EmbedLiveSample('transform_scale_without_origin', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: scale(1.7);<br>
     transform-origin: 100% -30%;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_scale">
    <pre class="brush: html notranslate">
&lt;div class="box8"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box8 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: scale(`1.7`);
-webkit-transform: scale(`1.7`);
transform-origin: 100% -30%;
-webkit-transform-origin: 100% -30%;
}
</pre>
    </div>

    {{EmbedLiveSample('transform_scale', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: skewX(50deg);<br>
     transform-origin: 100% -30%;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_skew_x">
    <pre class="brush: html notranslate">
&lt;div class="box9"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box9 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: skewX(50deg);
-webkit-transform: skewX(50deg);
transform-origin: 100% -30%;
-webkit-transform-origin: 100% -30%;
}
</pre>
    </div>

    {{EmbedLiveSample('transform_skew_x', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
  <tr>
   <td>
    <p><code>transform: skewY(50deg);<br>
     transform-origin: 100% -30%;</code></p>
   </td>
   <td>
    <div class="hidden" id="transform_skew_y">
    <pre class="brush: html notranslate">
&lt;div class="box10"&gt;&amp;nbsp;&lt;/div&gt;
</pre>

    <pre class="brush: css notranslate">
.box10 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: skewY(50deg);
-webkit-transform: skewY(50deg);
transform-origin: 100% -30%;
-webkit-transform-origin: 100% -30%;
}
</pre>
    </div>

    {{EmbedLiveSample('transform_skew_y', '', 120, '', '', 'no-button') }}
   </td>
  </tr>
 </tbody>
</table>

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
   <td>{{ SpecName('CSS3 Transforms', '#transform-origin-property', 'transform-origin') }}</td>
   <td>{{ Spec2('CSS3 Transforms') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.properties.transform-origin")}}

## 関連情報

<ul>
 <li>[CSS 変形の使用](/ja/docs/Web/CSS/Using_CSS_transforms)</li>
 <li>[https://css-tricks.com/almanac/properties/t/transform-origin/](https://css-tricks.com/almanac/properties/t/transform-origin/)</li>
</ul>
