---
title: Quality values
slug: Glossary/Quality_values
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/Quality_values
---
<p><span class="seoSummary"><strong>品質値</strong>、もしくはq値とqファクターは、値の優先順位をコンマ区切りのリストで記述するために使用されます。これはいくつかの <a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a>と HTML で許される特別な構文です。</span> 値の重要性はサフィックス <code>';q='</code> の直後に <code>0</code> と <code>1</code> の間の値が含まれ、最大3つの10進数で最高の優先度を示します。存在しない場合、デフォルト値は <code>1</code> です。</p>

<h2 id="例">例</h2>

<p>次の構文</p>

<pre><code>text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</code></pre>

<p>優先順位を示します。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">値</th>
   <th scope="col">優先度</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>text/html</code> and <code>application/xhtml+xml</code></td>
   <td><code>1.0</code></td>
  </tr>
  <tr>
   <td><code>application/xml</code></td>
   <td><code>0.9</code></td>
  </tr>
  <tr>
   <td><code>*/*</code></td>
   <td><code>0.8</code></td>
  </tr>
 </tbody>
</table>

<p>最初の2つの値に優先順位が定義されていない場合、リスト内の順序は関係ありません。それにもかかわらず、同じ品質であれば、より具体的な値よりも優先度が低くなります。</p>

<pre><code>text/html;q=0.8,text/*;q=0.8,*/*;q=0.8</code>
</pre>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">値</th>
   <th scope="col">優先度</th>
  </tr>
  <tr>
   <td><code>text/html</code></td>
   <td><code>0.8</code> (but totally specified)</td>
  </tr>
  <tr>
   <td><code>text/*</code></td>
   <td><code>0.8</code> (partially specified)</td>
  </tr>
  <tr>
   <td><code>*/*</code></td>
   <td><code>0.8</code> (not specified)</td>
  </tr>
 </thead>
</table>

<p>{{HTTPHeader("Accept")}} のようないくつかの構文は、<code>text/html;level=1</code> のような追加の指定子を許可します。これらは価値の特異性を高めます。それらを使用することは非常にまれです。</p>

<h2 id="ブラウザ固有の情報">ブラウザ固有の情報</h2>

<h3 id="Firefox">Firefox</h3>

<p>Firefox 18 以降、品質係数の値は小数点以下2桁に固定されます。 以前のバージョン ({{bug(672448)}}) では小数点以下1桁にしかクランプされませんでした。</p>

<h2 id="詳細情報">詳細情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Headers">HTTP headers</a> using q-values in their syntax: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("TE")}}.</li>
</ul>
