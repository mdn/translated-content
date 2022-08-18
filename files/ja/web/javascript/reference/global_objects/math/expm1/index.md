---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/expm1
---
<div>{{JSRef}}</div>

<p><strong><code>Math.expm1()</code></strong> 関数は <code>e<sup>x</sup> - 1</code> (<code>x</code> は引数、 {{jsxref("Math.E", "e", "", 1)}} は自然対数の底) を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-expm1.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.expm1(<var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>e<sup>x</sup> - 1</code> (<code>e</code> は{{jsxref("Math.E", "オイラー数", "", 1)}}、 <code>x</code> は引数) を表す数値です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>expm1()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.expm1()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.expm1" name="Using_Math.expm1">Math.expm1() の使用</h3>

<pre class="brush: js notranslate">Math.expm1(-1); // -0.6321205588285577
Math.expm1(0);  // 0
Math.expm1(1);  // 1.718281828459045
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>これは {{jsxref("Math.exp()")}} 関数の助けを借りてエミュレートすることができます。</p>

<pre class="brush: js notranslate">Math.expm1 = Math.expm1 || function(x) {
  return Math.exp(x) - 1;
};
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
   <td>{{SpecName('ESDraft', '#sec-math.expm1', 'Math.expm1')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.expm1")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.E")}}</li>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log10()")}}</li>
 <li>{{jsxref("Math.log1p()")}}</li>
 <li>{{jsxref("Math.log2()")}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
</ul>
