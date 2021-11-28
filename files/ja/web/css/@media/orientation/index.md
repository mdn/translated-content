---
title: orientation
slug: Web/CSS/@media/orientation
tags:
  - '@media'
  - CSS
  - Reference
  - メディアクエリ
  - メディア特性
translation_of: Web/CSS/@media/orientation
---
<div>{{cssref}}</div>

<p><strong><code>orientation</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>で、{{glossary("viewport", "ビューポート")}} (または<a href="/ja/docs/Web/CSS/Paged_media">ページ付きメディア</a>ではページボックス) の向きを調べるために使用することができます。</p>

<div class="note">
<p><strong>メモ:</strong> この特性は<em>端末</em>の向きには関係がありません。多くの端末では縦長の向きでソフトキーボードを開くと、ビューポートの幅が高さよりも大きくなり、ブラウザーは portrait ではなく landscape のスタイルを使用することになります。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>orientation</code> 特性は以下の一覧のうち一つのキーワード値で指定します。</p>

<h3 id="Keyword_values" name="Keyword_values">キーワード値</h3>

<dl>
 <dt><code>portrait</code></dt>
 <dd>ビューポートは縦長です。つまり、高さが幅よりも大きいか等しい状態です。</dd>
 <dt><code>landscape</code></dt>
 <dd>ビューポートは横長です。つまり、幅が高さよりも大きい状態です。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;Box 1&lt;/div&gt;
&lt;div&gt;Box 2&lt;/div&gt;
&lt;div&gt;Box 3&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
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
   <td>{{SpecName('CSS4 Media Queries', '#orientation', 'orientation')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries', '#orientation', 'orientation')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.media.orientation")}}</p>
