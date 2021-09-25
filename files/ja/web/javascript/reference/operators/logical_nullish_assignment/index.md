---
title: Null 合体代入 (??=)
slug: Web/JavaScript/Reference/Operators/Logical_nullish_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - Logical Operator
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Logical_nullish_assignment
---
{{jsSidebar("Operators")}}

Null 合体代入 (`x ??= y`) 演算子は、`x` が {{Glossary("nullish")}} (`null` または `undefined`) である場合にのみ代入を行います。

{{EmbedInteractiveExample("pages/js/expressions-logical-nullish-assignment.html")}}

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

## 構文

<pre class="syntaxbox notranslate"><em>expr1</em> ??= <em>expr2</em>
</pre>

<h2 id="説明">説明</h2>

<h3 id="短絡評価（ショートサーキット）">短絡評価（ショートサーキット）</h3>

<a href="/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Null 合体演算子</a>は左から右に評価され、次のルールを使って短絡評価の可能性があるかどうかテストされます。

`(null や undefined ではない式) ?? expr` は、左辺が `null` でも `undefined` でもないことが証明されたら、左辺の式が短絡評価されます。

短絡評価とは、上記の `<em>expr</em>` 部分が<strong>評価されない</strong>ことを意味します。したがって、評価された場合の副作用は発生しません。（例えば、`<em>expr</em>` が関数呼び出しである場合、呼び出しは行われません。）

Null 合体代入も短絡評価されます。これは、`x ??= y` が以下と等価であることを意味します。

<pre class="brush: js notranslate">x ?? (x = y);</pre>

そして、常に代入が行われる以下と等価ではありません。

<pre class="brush: js notranslate example-bad">x = x ?? y;
</pre>

## 例

<h3 id="Null_合体代入演算子の使用">Null 合体代入演算子の使用</h3>

<pre class="brush: js notranslate">function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
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



{{Compat("javascript.operators.logical_nullish_assignment")}}

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Null 合体演算子 (`??`)</a></li>
 <li>{{Glossary("Nullish")}}</li>
 <li>{{Glossary("Truthy")}}</li>
 <li>{{Glossary("Falsy")}}</li>
</ul>
