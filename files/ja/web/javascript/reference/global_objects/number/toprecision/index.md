---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---
<div>{{JSRef}}</div>

<p><strong><code>toPrecision()</code></strong> メソッドは {{jsxref("Number")}} オブジェクトを指定された精度で表した文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>numObj</var>.toPrecision([<var>precision</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>precision</var></code> {{optional_inline}}</dt>
 <dd>有効数字の数を指定する整数です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Number")}} オブジェクトを <code>precision</code> で指定された桁で概数化された、固定小数点数、または指数表記で表した文字列です。概数の表現方法については {{jsxref("Number.prototype.toFixed()")}} メソッドの説明を参照してください。それは <code>toPrecision()</code> にも適用されます。</p>

<p>引数 <code>precision</code> が省略された場合、 {{jsxref("Number.prototype.toString()")}} のように振舞います。 <code>precision</code> が整数の値ではない場合は、最も近い整数に概数化されます。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{jsxref("Global_Objects/RangeError", "RangeError")}}</dt>
 <dd><code>precision</code> が 1 と 100 の間 (両端を含む) でない場合、 {{jsxref("RangeError")}} が発生します。実装上はこの範囲を超えた値にも対応できます。 ECMA-262 では 21 桁までの精度のみを要求しています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toPrecision" name="Using_toPrecision">toPrecision の使用</h3>

<pre class="brush: js notranslate">let numObj = 5.123456

console.log(numObj.toPrecision())    // logs '5.123456'
console.log(numObj.toPrecision(5))   // logs '5.1235'
console.log(numObj.toPrecision(2))   // logs '5.1'
console.log(numObj.toPrecision(1))   // logs '5'

numObj = 0.000123

console.log(numObj.toPrecision())    // logs '0.000123'
console.log(numObj.toPrecision(5))   // logs '0.00012300'
console.log(numObj.toPrecision(2))   // logs '0.00012'
console.log(numObj.toPrecision(1))   // logs '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)) // logs '1.2e+3'
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
   <td>{{SpecName('ESDraft', '#sec-number.prototype.toprecision', 'Number.prototype.toPrecision')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.toPrecision")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.prototype.toFixed()")}}</li>
 <li>{{jsxref("Number.prototype.toExponential()")}}</li>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
