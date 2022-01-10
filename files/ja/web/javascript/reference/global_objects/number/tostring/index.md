---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toString
---
<div>{{JSRef}}</div>

<p><strong><code>toString()</code></strong> メソッドは、指定された {{jsxref("Number")}} オブジェクトを表す文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-tostring.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>numObj</var>.toString([<var>radix</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>radix</var></code> {{optional_inline}}</dt>
 <dd>数値を表すために使われる基数を指定する、 <code>2</code> から <code>36</code> までの整数です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された {{jsxref("Number")}} オブジェクトを表す文字列です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd><code>toString()</code> は、与えられた <code><var>radix</var></code> が <code>2</code> 未満、または <code>36</code> を超える場合、{{jsxref("RangeError")}} が発生します。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Number")}} オブジェクトは {{jsxref("Object")}} の <code>toString()</code> メソッドを上書きします。つまり、 {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref("Number")}} オブジェクトでは、 <code>toString()</code> メソッドは指定された基数でオブジェクトを表した文字列を返します。</p>

<p><code>toString()</code> メソッドはその最初の引数を解釈し、 <code><var>radix</var></code> で指定された基数で表した文字列を返します。 <code>10</code> より大きい基数では、 9 より大きい数をアルファベットの文字で示します。例えば、16進表記 (基数 16) では、<code>a</code> から <code>f</code> までが使われます。</p>

<p><code><var>radix</var></code> が指定されなかった場合、基数は <code>10</code> と見なされます。</p>

<p><code><var>numObj</var></code> が負の場合、符号は保存されます。これは基数が 2 の場合も同様です。返される文字列は、<code><var>numObj</var></code> の 2 の補数<strong>ではなく</strong>、先頭に <code>-</code> 符号がついた <code><var>numObj</var></code> の正のバイナリー表現です。</p>

<p><code><var>numObj</var></code> が整数でない場合、「ドット」符号は小数点以下を区切るために使われます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toString" name="Using_toString">toString の使用</h3>

<pre class="brush: js notranslate">let count = 10

console.log(count.toString())    // '10' を表示します。
console.log((17).toString())     // '17' を表示します。
console.log((17.2).toString())   // '17.2' を表示します。

let x = 6

console.log(x.toString(2))       // '110' を表示します。
console.log((254).toString(16))  // 'fe' を表示します。

console.log((-10).toString(2))   // '-1010' を表示します。
console.log((-0xff).toString(2)) // '-11111111' を表示します。
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
   <td>{{SpecName('ESDraft', '#sec-number.prototype.tostring', 'Number.prototype.tostring')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.toString")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.prototype.toFixed()")}}</li>
 <li>{{jsxref("Number.prototype.toExponential()")}}</li>
 <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>
