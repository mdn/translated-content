---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
tags:
  - CSS
  - CSS Text Decoration
  - CSS テキスト装飾
  - Property
  - Reference
  - text-decoration
  - text-underline-offset
  - プロパティ
translation_of: Web/CSS/text-underline-offset
---
<div>{{CSSRef}}</div>

<p><strong><code>text-underline-offset</code></strong> は <a href="/ja/docs/CSS">CSS</a> のプロパティで、 ({{cssxref("text-decoration")}} を使用して適用された) 下線のテキスト装飾線の本来の位置からのオフセット距離を設定します。</p>

<p><code>text-underline-offset</code> は {{cssxref('text-decoration')}} の一括指定の一部ではありません。一つの要素が複数の <code>text-decoration</code> による線を持つため、 <code>text-underline-offset</code> は下線のみに影響し、 <code>overline</code> や <code>line-through</code> などの他の装飾線には影響<strong>しません</strong>。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* 単一のキーワード */
text-underline-offset: auto;

/* 長さ */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* パーセント値 */
text-underline-offset: 20%;

/* グローバル値 */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: unset;
</pre>

<p><code>text-underline-offset</code> プロパティは、以下のリストのうち一つの値で指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>ブラウザーが下線の適切なオフセットを選択します。</dd>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>下線のオフセットを {{cssxref('length')}} で指定し、フォントファイルの提案やブラウザーの既定値を上書きします。オフセットがフォントサイズに合わせて変化するように、 <code>em</code> 単位を使用することを推奨します。</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>下線のオフセットを、要素のフォントにおける <strong>1 em</strong> に対する {{cssxref('percentage')}} で指定します。パーセント値はは相対値として継承されるため、フォントの変化に応じて変化します。このプロパティを適用した場合、オフセットは、フォントサイズや垂直方向の配置が異なる子要素があっても、下線が適用されているボックス全体で一定となります。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;p class="oneline"&gt;Here's some text with an offset wavy red underline!&lt;/p&gt;
&lt;br&gt;
&lt;p class="twolines"&gt;This text has lines both above and below it. Only the bottom one is offset.&lt;/p&gt;</pre>

<pre class="brush: css">p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.twolines {
  text-decoration-color: purple;
  text-decoration-line: underline overline;
}</pre>

<p>{{ EmbedLiveSample('Examples', '', '', '') }}</p>

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
   <td>{{SpecName('CSS4 Text Decoration', '#underline-offset', 'text-underline-offset')}}</td>
   <td>{{Spec2('CSS4 Text Decoration')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.text-underline-offset")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("text-decoration")}}</li>
 <li>{{cssxref("text-decoration-thickness")}}</li>
</ul>
