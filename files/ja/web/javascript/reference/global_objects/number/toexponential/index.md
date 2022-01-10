---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---
<div>{{JSRef}}</div>

<p><strong><code>toExponential()</code></strong> メソッドは {{jsxref("Number")}} オブジェクトを指数表記で表した文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>numObj</var>.toExponential([<var>fractionDigits</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>fractionDigits</var></code></dt>
 <dd>任意です。小数点の後の桁数を指定する整数です。既定値はその数を表すのに必要な数の桁です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Number")}} オブジェクトを、指数表記 (小数点前は 1 桁、小数点の後は <code><var>fractionDigits</var></code> によって指定された桁で切り捨て) で表した文字列です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd><code><var>fractionDigits</var></code> が小さすぎたり大きすぎたりした場合。 <code>0</code> 以上 <code>20</code> 以下の値では {{jsxref("RangeError")}} が発生しません。実装によっては、より大きな値や小さな値に対応しているかもしれません。</dd>
 <dt>{{jsxref("TypeError")}}</dt>
 <dd>このメソッドが {{jsxref("Number")}} ではないオブジェクトに対して呼び出された場合。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code><var>fractionDigits</var></code> 引数が省略された場合、小数点の後の桁数は、その値を特定するのに必要な桁数になります。</p>

<p><code>toExponential</code> メソッドを 1 つの数値リテラル、または、指数も小数点もない数値リテラルに対して使用する場合、ドットが小数点として解釈されることを防ぐために、メソッド呼び出しに先立つドットの前に空白を置いてください。</p>

<p>引数 <code><var>fractionDigits</var></code> で指定された桁よりも多くの桁を持っている数の場合、その数は、<code><var>fractionDigits</var></code> の桁で表すことができる最も近い数で表されます。{{jsxref("Number.prototype.toFixed", "toFixed()")}} メソッドの説明における概数表現の説明を参照してください。それは、<code>toExponential</code> メソッドにも適用されます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toExponential" name="Using_toExponential">toExponential の使用</h3>

<pre class="brush: js notranslate">var numObj = 77.1234;

console.log(numObj.toExponential());  // 7.71234e+1 を表示
console.log(numObj.toExponential(4)); // 7.7123e+1 を表示
console.log(numObj.toExponential(2)); // 7.71e+1 を表示
console.log(77.1234.toExponential()); // 7.71234e+1 を表示
console.log(77 .toExponential());     // 7.7e+1 を表示
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
   <td>{{SpecName('ESDraft', '#sec-number.prototype.toexponential', 'Number.prototype.toExponential')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.toExponential")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.prototype.toFixed()")}}</li>
 <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
