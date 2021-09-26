---
title: 単項プラス (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Unary_plus
---
<div>{{jsSidebar("Operators")}}</div>

<p>単項プラス演算子 (<code>+</code>) は、オペランドの前に置かれ、そのオペランドを評価し、それが数値以外の場合は数値に変換します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}</div>



<h2 id="例">例</h2>

<pre class="syntaxbox notranslate"><strong>Operator:</strong> +<var>x</var>
</pre>

<h2 id="説明">説明</h2>

<p>単項マイナス (<code>-</code>) も非数値を数値に変換できますが、単項プラスは数値に対して他の演算を行わないため、非数値を数値に変換する最も高速で好ましい方法です。これは、整数や浮動小数点の文字列表現や、非文字列値である <code>true</code>、<code>false</code>、<code>null</code> を変換することができます。10進数と16進数（接頭辞 0x）の両形式の整数と負の数（16進数の負の数はサポートされていません）がサポートされています。BigInt 値に対してこの演算子を使用すると TypeError がスローされます。特定の値を解析できない場合は、{{jsxref("NaN")}} と評価されます。</p>

<h2 id="例_2">例</h2>

<h3 id="数値での使い方">数値での使い方</h3>

<pre class="brush: js notranslate">const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1</pre>

<h3 id="数値以外での使い方">数値以外での使い方</h3>

<pre class="brush: js notranslate">+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN
+1n    //  BigInt 値は数値に変換できないためエラーになります
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-unary-plus-operator', 'Unary plus operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>



<p>{{Compat("javascript.operators.unary_plus")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項マイナス演算子</a></li>
</ul>
