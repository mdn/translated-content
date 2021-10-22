---
title: Truthy
slug: Glossary/Truthy
tags:
  - CodingScripting
  - Glossary
  - JavaScript
  - 用語集
translation_of: Glossary/Truthy
---
<p>{{Glossary("JavaScript")}} において、 <strong>truthy</strong> は {{Glossary("Boolean")}} コンテキストに現れた時に <code>true</code> とみなされる値のことです。 {{Glossary("Falsy", "falsy")}} として定義された値 (つまり、<code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>) を除くすべての値は truthy です。</p>

<p>{{Glossary("JavaScript")}} は、 Boolean コンテキストでは{{Glossary("Type_Conversion", "型変換")}}を用います。</p>

<p>JavaScript で <em>truthy</em> な値の例です (boolean コンテキストではこれらの値を <code>true</code> と評価し、<code>if</code> ブロックを実行します)。</p>

<pre class="brush: js">if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
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
   <td>{{SpecName("ESDraft", "#sec-toboolean", "<code>ToBoolean</code> abstract operation")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Glossary("Falsy")}}</li>
 <li>{{Glossary("Type_Conversion", "型変換")}}</li>
 <li>{{Glossary("Boolean")}}</li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Glossary")}}</div>
