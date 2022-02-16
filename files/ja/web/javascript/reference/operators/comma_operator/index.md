---
title: 'カンマ演算子 (,)'
slug: Web/JavaScript/Reference/Operators/Comma_Operator
tags:
- Comma
- Compound
- Expression
- JavaScript
- Language feature
- Operator
- Reference
translation_of: Web/JavaScript/Reference/Operators/Comma_Operator
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>カンマ演算子</strong> (<strong><code>,</code></strong>) は、それぞれの演算対象を（左から右に）評価し、最後のオペランドの値を返します。これにより、複数の式が評価される複合式を作成することができ、複合式の最終値はそのメンバー式の一番右端の値となります。これは、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for</a></code> ループに複数の引数を提供する場合によく使用されます。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>expr1</em>, <em>expr2, expr3...</em></pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code>expr1</code>, <code>expr2</code>, <code>expr3</code>...</dt>
  <dd>1 つ以上の式で、最後の式が複合式の値として返されます。</dd>
</dl>

<h2 id="Usage_notes">使用上の注意</h2>

<p>カンマ演算子は、単一の式が求められる場所で複数の式を記述したい場合に使うことができます。この演算子が最もよく使われるのは、 <code>for</code> ループで複数の引数を与えたいときです。</p>

<p>カンマ演算子は、配列、オブジェクト、関数の引数や引数の内部にあるカンマとは大きく異なります。</p>

<h2 id="Examples">例</h2>

<p>例えば次のコードでは、 <code>a</code> が、1 辺 10 要素からなる 2 次元配列内の要素を一度に 2 つ 変化させる為に、変数宣言部分でカンマ演算子を用いています。</p>

<p>このコードは、配列における対角線の要素の値を出力するものです。</p>

<pre class="brush:js highlight:[1]">for (var i = 0, j = 9; i &lt;= 9; i++, j--)
  console.log('a[' + i + '][' + j + '] = ' + a[i][j]);</pre>

<p>代入​​​を行う際​​​にカンマを使うと、カンマ演算子が通常どおりに働いていないかのように見える場合があります (カンマ演算子が式の中にないため)。以下の例では <code>a</code> には <code>b = 3</code> の値 (すなわち 3) が設定されますが、さらに <code>c = 4</code> が評価されて、その結果 (すなわち 4) がコンソールに返されます。これは<a href="/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">演算子の優先順位と結合性</a>のためです。</p>

<pre class="brush: js">var a, b, c;

a = b = 3, c = 4; // コンソールに 4 が返る
console.log(a); // 3 (もっとも左)

var x, y, z;

x = (y = 5, z = 6); // コンソールに 6 が返る
console.log(x); // 6 (もっとも右)
</pre>

<h3 id="Processing_and_then_returning">処理と返値</h3>

<p>カンマ演算子が行うことのもうひとつの例が、値を返す前の処理です。前述のとおり最後の要素のみを返しますが、その他すべての要素も評価します。よって、以下のようなことができます。</p>

<pre class="brush: js">function myFunc() {
	var x = 0;

  return (x += 1, x); // 返値は ++x と同じ
}</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-comma-operator', 'Comma operator')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.comma")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Statements/for"><code>for</code> ループ</a></li>
</ul>
