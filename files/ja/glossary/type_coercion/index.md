---
title: Type coercion (型強制)
slug: Glossary/Type_coercion
tags:
  - Coercion
  - JavaScript
  - Type coercion
  - 型強制
  - 用語集
translation_of: Glossary/Type_coercion
---
<p><ruby>型強制<rp> (</rp><rt>Type coercion</rt><rp>) </rp></ruby>は、あるデータ型から他のデータ型への値の自動的または暗黙の変換です (文字列から数値など)。<em>{{Glossary("Type conversion", "型変換")}}</em>と<em>型強制</em>はよく似ており、どちらもある型から他の型へ値を変換しますが、一つ重要な違いがあります。<em>型強制</em>は暗黙的であるのに対し、<em>型変換</em>は暗黙的<em>または</em>明示的のどちらかです。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);</pre>

<p>上記の例では、 JavaScript は <code>9</code> を数値から文字列に<em>型強制</em>し、両者を結合するので、結果は文字列の <code>59</code> になります。 JavaScript は文字列と数値の何れかを選択する必要があり、文字列を使用するよう決定します。</p>

<p>コンパイラーは <code>5</code> を数値に強制して、合計値である <code>14</code> を返すこともできましたが、そうしませんでした。この結果を返すには、 {{jsxref("Global_Objects/Number", "Number()")}} メソッドを用いて明示的に <code>5</code> を数値に変換することができます。</p>

<pre class="brush: js">sum = Number(value1) + value2;</pre>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Glossary">用語集</a>

  <ol>
   <li>{{Glossary("Type", "型")}}</li>
   <li>{{Glossary("Type conversion", "型変換")}}</li>
  </ol>
 </li>
 <li>Wikipedia の記事
  <ol>
   <li>{{Interwiki("wikipedia", "型変換")}}</li>
  </ol>
 </li>
</ol>
</section>
