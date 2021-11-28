---
title: height
slug: Web/CSS/@media/height
tags:
  - '@media'
  - CSS
  - メディアクエリ
  - メディア特性
  - リファレンス
translation_of: Web/CSS/@media/height
---
<div>{{cssref}}</div>

<p><a href="/ja/docs/CSS">CSS</a> の <strong><code>height</code></strong> <a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>は、{{glossary("viewport", "ビューポート")}}の高さ (又は<a href="/ja/docs/Web/CSS/Paged_media">ページ付きメディア</a>のページボックスの高さ) に基づいてスタイルを適用するために使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>height</code> 特性は、ビューポートの高さを表す {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた <strong><code>min-height</code></strong> 及び <code><strong>max-height</strong></code> の変化形を使用して、それぞれ最小値と最大値をクエリすることができます。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;ビューポートの高さを変更しながら、この要素を見ていてください。&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* 正確な高さ */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* 最小高 */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* 最大高 */
@media (max-height: 40rem) {
  div {
    border: 2px solid blue;
  }
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Example','90%')}}</p>

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
   <td>{{SpecName('CSS4 Media Queries', '#height', 'height')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>値に負の数を取ることができるようになり、この場合は false と計算されます。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries', '#height', 'height')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>初回定義。値は非負でなければなりませんでした。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.at-rules.media.height")}}</p>
