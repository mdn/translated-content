---
title: 論理積代入 (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
tags:
  - JavaScript
  - 言語機能
  - Logical assignment
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Logical_AND_assignment
---
{{jsSidebar("Operators")}}

論理積代入 (`x &amp;&amp;= y`) 演算子は、`x` が {{Glossary("truthy")}} である場合にのみ代入します。

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

## 構文

<pre class="syntaxbox notranslate"><em>expr1</em> &amp;&amp;= <em>expr2</em>
</pre>

<h2 id="説明">説明</h2>

<h3 id="短絡評価（ショートサーキット）">短絡評価（ショートサーキット）</h3>

<a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND">論理積演算子</a>は左から右に評価され、次のルールを使って短絡評価の可能性があるかどうかテストされます。

`(偽値の式) &amp;&amp; expr` は、偽値の式が短絡評価されます。

短絡評価とは、上記の `<em>expr</em>` 部分が<strong>評価されない</strong>ことを意味します。したがって、評価された場合の副作用は発生しません。（例えば、`<em>expr</em>` が関数呼び出しである場合、呼び出しは行われません。）

論理積代入も短絡評価されます。これは、`x &amp;&amp;= y` が以下と等価であることを意味します。

<pre class="brush: js notranslate">x &amp;&amp; (x = y);</pre>

そして、常に代入が行われる以下と等価ではありません。

<pre class="brush: js notranslate example-bad">x = x &amp;&amp; y;
</pre>

## 例

<h3 id="論理積代入演算子の使用">論理積代入演算子の使用</h3>

<pre class="brush: js notranslate">let x = 0;
let y = 1;

x &amp;&amp;= 0; // 0
x &amp;&amp;= 1; // 0
y &amp;&amp;= 1; // 1
y &amp;&amp;= 0; // 0
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
  </tr>
  <tr>
   <td>{{SpecName('Logical Assignment', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>



{{Compat("javascript.operators.logical_and_assignment")}}

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND">論理積 (&amp;&amp;)</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Null合体 (`??`)</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment">ビット論理積代入 (`&amp;=`)</a></li>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{Glossary("Truthy")}}</li>
 <li>{{Glossary("Falsy")}}</li>
</ul>
