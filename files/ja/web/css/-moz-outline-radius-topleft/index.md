---
title: '-moz-outline-radius-topleft'
slug: Web/CSS/-moz-outline-radius-topleft
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/-moz-outline-radius-topleft
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>Mozilla アプリケーションにおいて、 <strong><code>-moz-outline-radius-topleft</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の輪郭線 ({{cssxref("outline")}}) の左上の角を丸くするために使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>-moz-outline-radius-topleft</code> の値は、 {{cssxref("length", "&lt;length&gt;")}} または境界ボックスの対応する大きさに対する<a href="/ja/docs/Web/CSS/percentage">パーセント値</a>のどちらかです。 {{cssxref("calc", "calc()")}} 関数も同様に使用することができます。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>要素の上端と左端の曲率を定義する円の半径を CSS の {{cssxref("length", "&lt;length&gt;")}} で指定します。</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>要素の左上隅の丸めを定義する円の半径で、ボーダーボックスの上辺と左辺の<a href="/ja/docs/Web/CSS/percentage">パーセント値</a>で指定します。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>下記の例は Firefox 以外のブラウザーで見ている場合は、求められる効果が表示されません。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;段落の左上の角を見てください。&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-topleft: 2em;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>標準の一部ではありません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.-moz-outline-radius-topleft")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>詳しくは {{cssxref("-moz-outline-radius")}} プロパティを参照してください。</li>
</ul>
