---
title: any-hover
slug: Web/CSS/@media/any-hover
tags:
  - '@media'
  - CSS
  - メディアクエリ
  - メディア特性
  - リファレンス
translation_of: Web/CSS/@media/any-hover
---
<div>{{cssref}}</div>

<p><a href="/ja/docs/CSS">CSS</a> の <strong><code>any-hover</code></strong> <a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>は、要素の上でホバーすることができる入力メカニズムが<em>何らか</em>利用できるかどうかをテストするために使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>any-hover</code> 特性は、以下の一覧のうち一つのキーワード値で指定します。</p>

<dl>
 <dt><code>none</code></dt>
 <dd>差支えなくホバーができる入力メカニズムがないか、又はポインティング入力メカニズムがない。</dd>
 <dt><code>hover</code></dt>
 <dd>一つ以上の入力メカニズムが、要素の上で差支えなくホバーすることができる。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#"&gt;Try hovering over me!&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

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
   <td>{{SpecName('CSS4 Media Queries', '#descdef-media-any-hover', 'any-hover')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.at-rules.media.any-hover")}}</p>

<h2 id="See_Also" name="See_Also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/@media/hover"><code>hover</code> メディア特性</a></li>
</ul>
