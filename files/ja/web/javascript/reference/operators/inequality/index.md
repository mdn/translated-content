---
title: 不等価 (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Inequality
---
<div>{{jsSidebar("Operators")}}</div>

<p>不等価演算子 (<code>!=</code>) は、2つのオペランドが等しくないかをチェックし、ブール値の結果を返します。<a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality">厳密不等価</a>演算子とは異なり、異なる型のオペランドを変換して比較を行おうとします。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}</div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">x != y</pre>

<h2 id="説明">説明</h2>

<p>不等価演算子は、そのオペランドが等しくないかどうかをチェックします。これは<a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価</a>演算子の否定なので、次の2行は常に同じ結果になります。</p>

<pre class="brush: js notranslate">x != y

!(x == y)</pre>

<p>比較アルゴリズムの詳細については、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価</a>演算子のページを参照して下さい。</p>

<p>等価演算子と同様に、不等価演算子は異なる型のオペランドを変換して比較しようとします。</p>

<pre class="brush: js notranslate">3 != "3"; // false</pre>

<p>これを防止し、異なる型が異なる結果を返すようにするには、代わりに<a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality">厳密不等価</a>演算子を使用します:</p>

<pre class="brush: js notranslate">3 !== "3"; // true</pre>

<h2 id="例">例</h2>

<h3 id="型変換なしの比較">型変換なしの比較</h3>

<pre class="brush: js notranslate">1 != 2;              // true
"hello" != "hola";   // true

1 != 1;              // false
"hello" != "hello";  // false</pre>

<h3 id="型変換ありの比較">型変換ありの比較</h3>

<pre class="brush: js notranslate">"1" !=  1;            // false
1 != "1";             // false
0 != false;           // false
0 != null;            // true
0 != undefined;       // true
null != undefined;    // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3;         // false
number1 != number2;   // true</pre>

<h3 id="オブジェクトの比較">オブジェクトの比較</h3>

<pre class="brush: js notranslate">const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 != object2 // true
object2 != object2 // false</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-equality-operators', 'Equality operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.inequality")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality">厳密不等価演算子</a></li>
</ul>
