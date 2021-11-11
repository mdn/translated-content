---
title: background-position-y
slug: Web/CSS/background-position-y
tags:
  - CSS
  - CSS Property
  - CSS プロパティ
  - CSS 背景と境界
  - Experimental
  - Reference
translation_of: Web/CSS/background-position-y
---
<div>{{CSSRef}}</div>

<p><strong><code>background-position-y</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、各背景画像における垂直の初期位置を設定します。位置は {{cssxref("background-origin")}} によって設定された位置レイヤーに対する相対位置です。</p>

<div>{{EmbedInteractiveExample("pages/css/background-position-y.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>このプロパティの値は、その後で一括指定の {{cssxref("background")}} または {{cssxref("background-position")}} プロパティが定義されると上書きされます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers">/* キーワード値 */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* &lt;percentage&gt; 値 */
background-position-y: 25%;

/* &lt;length&gt; 値 */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* 辺からの相対値 */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* 複数の値 */
background-position-y: 0px, center;

/* グローバル値 */
background-position-y: inherit;
background-position-y: initial;
background-position-y: unset;
</pre>

<p><code>background-position-y</code> プロパティは、1つ以上の値をコンマで区切って指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>top</code></dt>
 <dd>背景画像の上端を、背景位置レイヤーの上端に合わせます。</dd>
 <dt><code>center</code></dt>
 <dd>背景画像を垂直方向の中央を、背景位置レイヤーの垂直方向の中央に合わせます。</dd>
 <dt><code>bottom</code></dt>
 <dd>背景画像の下端を、背景位置レイヤーの下端に合わせます。</dd>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>指定された背景画像の垂直方向の辺の、対応する背景位置レイヤーの上側の垂直方向の辺を基準としたオフセットです。 (一部のブラウザーではオフセットの下辺に割り当てることができます。)</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>指定された背景画像のコンテナーに対する垂直方向の相対位置のオフセットです。0%の値は背景画像の上辺がコンテナーの上辺に配置されることを意味し、100%の値は背景画像の下辺がコンテナーの下辺に配置されることを意味しますので、50%の値は背景画像を垂直方向に中央揃えします。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

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
   <td>{{SpecName('CSS4 Backgrounds', '#background-position-longhands', 'background-position-y')}}</td>
   <td>{{Spec2('CSS4 Backgrounds')}}</td>
   <td>長年の実装に合わせるため、 {{cssxref("background-position")}} の個別指定サブプロパティを初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.background-position-y")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("background-position")}}</li>
 <li>{{cssxref("background-position-x")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="/ja/docs/CSS/Multiple_backgrounds" title="CSS/Multiple backgrounds">複数の背景の使用</a></li>
</ul>
