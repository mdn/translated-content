---
title: 左シフト (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - ビット演算子
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Left_shift
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>左シフト演算子 (<code>&lt;&lt;</code>)</strong>は、1つ目のオペランドを指定されたビット数だけ左にずらします。左にずらしてあふれたビットは廃棄されます。0のビットが右からずれて入ります。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-left-shift.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>a</var> &lt;&lt; <var>b</var></code>
</pre>

<h2 id="Description" name="Description">解説</h2>

<p>この演算子は、1つ目のオペランドを指定されたビット数だけ左にずらします。左にずらしてあふれたビットは廃棄されます。0のビットが右からずれて入ります。</p>

<p>例えば <code>9 &lt;&lt; 2</code> は 36 になります。</p>

<pre class="brush: js notranslate">.    9 (10進数): 00000000000000000000000000001001 (2進数)
                  --------------------------------
9 &lt;&lt; 2 (10進数): 00000000000000000000000000100100 (2進数) = 36 (10進数)
</pre>

<p>任意の数 <code>x</code> を <code>y</code> ビット分だけ左にビット単位にずらすと、 <code>x * 2 ** y</code> になります。<br>
 ですから、例えば <code>9 &lt;&lt; 3</code> は <code>9 * (2 ** 3) = 9 * (8) = 72</code> になります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_left_shift" name="Using_left_shift">左シフトの使用</h3>

<pre class="brush: js notranslate">9 &lt;&lt; 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-bitwise-shift-operators', 'Bitwise Shift Operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.left_shift")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise">JavaScript ガイドのビット毎演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment">左シフト代入演算子</a></li>
</ul>
