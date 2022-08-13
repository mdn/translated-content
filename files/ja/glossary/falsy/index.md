---
title: Falsy (偽値)
slug: Glossary/Falsy
tags:
  - CodingScripting
  - Glossary
  - JavaScript
  - 用語集
translation_of: Glossary/Falsy
---
<p><strong>偽値</strong> (<em>falsy</em> または <em>falsey</em> な値) は、 {{Glossary("Boolean")}} コンテキストに現れたときに偽とみなされる値です。</p>

<p>{{Glossary("JavaScript")}} は{{Glossary("Conditional", "条件文")}}や{{Glossary("Loop", "繰り返し")}}などの場面で、任意の値を強制的に Boolean に{{Glossary("Type_Conversion", "型変換")}}します。</p>

<p>偽値は8つあります。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td><code>false</code></td>
   <td><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Future_reserved_keywords_in_older_standards">false</a> キーワード</td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td>数値<a href="/ja/docs/Web/JavaScript/Data_structures#Number_type">ゼロ</a></td>
  </tr>
  <tr>
   <td><code>-0</code></td>
   <td>数値マイナス<a href="/ja/docs/Web/JavaScript/Data_structures#Number_type">ゼロ</a></td>
  </tr>
  <tr>
   <td><code>0n</code></td>
   <td><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt">BigInt</a> で、論理値として使用された場合、 Number と同じ規則に従います。 <code>0n</code> は<em>偽値</em>です。</td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td>
    <p>空<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">文字列</a>の値</p>
   </td>
  </tr>
  <tr>
   <td>{{Glossary("null")}}</td>
   <td><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/null">null</a> - 何も値が存在しないこと</td>
  </tr>
  <tr>
   <td>{{Glossary("undefined")}}</td>
   <td><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined">undefined</a> - プリミティブ値</td>
  </tr>
  <tr>
   <td>{{Glossary("NaN")}}</td>
   <td><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN </a>- 非数</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p>オブジェクトは、 <a href="https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot">[[IsHTMLDDA]] 内部スロット</a>がある場合のみ偽値になります。このスロットは {{domxref("document.all")}} にのみ存在し、 JavaScript を使用して設定することはできません。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>JavaScript の<em>偽値</em>の例です (これは論理値のコンテキストでは偽に変換されるため、 <code>if</code> ブロックを実行しません)。</p>

<pre class="brush: js notranslate">if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
</pre>

<h3 id="論理_AND_演算子">論理 AND 演算子 &amp;&amp;</h3>

<p>最初のオブジェクトが偽値の場合は、そのオブジェクトを返します。</p>

<pre class="brush: js notranslate">false &amp;&amp; "dog"
// ↪ false

0 &amp;&amp; "dog"
// ↪ 0
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table>
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("ESDraft", "#sec-toboolean", "<code>ToBoolean</code> 抽象操作")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Learn_more" name="Learn_more">詳細情報</h2>

<ul>
 <li>{{Glossary("Truthy", "真値")}}</li>
 <li>{{Glossary("Boolean", "論理型")}}</li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Glossary")}}</div>
