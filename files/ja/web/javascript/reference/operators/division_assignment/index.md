---
title: 除算代入 (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
  - 代入演算子
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Division_assignment
---
{{jsSidebar("Operators")}}

除算代入演算子 (`/=`) は変数を右オペランドの値で除算し、結果をその変数に代入するものです。

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリーに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><strong>演算子:</strong> x /= y
<strong>意味:</strong>   x  = x / y</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_division_assignment" name="Using_division_assignment">除算代入の使用</h3>

<pre class="brush: js notranslate">// 以下の変数があると想定する
//  bar = 5

bar /= 2     // 2.5
bar /= 'foo' // NaN
bar /= 0     // Infinity</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.operators.division_assignment")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">JavaScript ガイドの代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算演算子</a></li>
</ul>
