---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---
<div>{{JSRef}}</div>

<p><strong><code>toString()</code></strong> メソッドは正規表現を表す文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>regexObj</var>.toString();</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>呼び出し元のオブジェクトを表す文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("RegExp")}} オブジェクトの <code>toString()</code> メソッドは、 jsxref("Object")}} オブジェクトのものを上書きします。つまり {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref("RegExp")}} オブジェクトにおける <code>toString()</code> メソッドは、その正規表現オブジェクトを表す文字列を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toString" name="Using_toString">toString() の使用</h3>

<p>以下の例は {{jsxref("RegExp")}} オブジェクトの文字列の値を表示します。:</p>

<pre class="brush: js notranslate">var myExp = new RegExp('a+b+c');
console.log(myExp.toString());  // logs '/a+b+c/'

var foo = new RegExp('bar', 'g');
console.log(foo.toString());    // logs '/bar/g'
</pre>

<h3 id="Empty_regular_expressions_and_escaping" name="Empty_regular_expressions_and_escaping">空の正規表現とエスケープ</h3>

<p>ECMAScript 5 以降では、空の正規表現は "/(?:)/" 文字列を返し、"\n" などの行末記号はエスケープされます。</p>

<pre class="brush: js notranslate">new RegExp().toString(); // "/(?:)/"

new RegExp('\n').toString() === '/\n/';  // true, prior to ES5
new RegExp('\n').toString() === '/\\n/'; // true, starting with ES5
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
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype.tostring', 'RegExp.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.toString")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
