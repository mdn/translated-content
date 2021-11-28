---
title: shape
slug: Web/CSS/@media/shape
tags:
  - '@-規則'
  - '@media'
  - At-rule
  - CSS
  - Reference
  - メディア特性
translation_of: Web/CSS/@media/shape
---
<div>{{CSSRef}} {{ Non-standard_header }}</div>

<p><code>shape</code> は <a href="/ja/docs/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>で、端末の形状が矩形であるか丸いディスプレイであるかを区別するために使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>shape</code> は識別機能であり、四角い画面を表す <code>rect</code> または丸や楕円の画面を表す <code>round</code> の二つの文字列のうちの一つで指定します。</p>

<dl>
 <dt><code><dfn>rect</dfn></code></dt>
 <dd>形状は長方形か正方形、または角丸矩形などの軸であり、伝統的なデザインが適しています。</dd>
 <dt><code><dfn>round</dfn></code></dt>
 <dd>形状は丸や、卵型、楕円などの円に似た形状であり、独特の丸いデザインが適しています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<div class="blockIndicator note">
<p><strong>注:</strong> 現在この特性に対応しているブラウザーはありません。</p>
</div>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;h1&gt;Hello World!&lt;/h1&gt;
</pre>

<h4 id="CSS" name="CSS">CSS</h4>

<pre class="brush: css notranslate">h1 {
  text-align: left;
}

@media (shape: rect) {
  h1 {
    text-align: left;
  }
}

@media (shape: round) {
  h1 {
    text-align: center;
  }
}
</pre>

<h3 id="Custom_stylesheet" name="Custom_stylesheet">カスタムスタイルシート</h3>

<p>この HTML は、丸い画面を持つ端末に特殊なスタイルシートを適用します。</p>

<pre class="brush: html notranslate"><code>&lt;head&gt;
    &lt;link rel="stylesheet" href="default.css" /&gt;</code>
<code>    &lt;link media="screen and (shape: rect)" rel="stylesheet" href="rectangle.css" /&gt;
    &lt;link media="screen and (shape: round)" rel="stylesheet" href="round.css" /&gt;
&lt;/head&gt;
</code></pre>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td><a href="https://drafts.csswg.org/css-round-display/">CSS Round Display Level 1</a></td>
   <td>草稿</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.media.shape")}}</p>
