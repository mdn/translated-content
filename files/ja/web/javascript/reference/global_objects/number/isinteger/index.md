---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
tags:
  - JavaScript
  - メソッド
  - Number
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---
<div>{{JSRef}}</div>

<p><strong><code>Number.isInteger()</code></strong> メソッドは渡された値が整数かどうかを判定します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Number.isInteger(<var>value</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>整数かどうかを判定される値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>渡された値が整数かどうかを示す {{jsxref("Boolean")}} です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>指定された値が整数の場合は <code>true</code> を返し、そうでない場合は <code>false</code> を返します。{{jsxref("NaN")}} もしくは {{jsxref("Infinity")}} の場合も <code>false</code> を返します。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Using_isInteger" name="Using_isInteger">isInteger の使用</h3>

<pre class="brush: js notranslate">Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &amp;&amp;
    isFinite(value) &amp;&amp;
    Math.floor(value) === value;
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
   <td>{{SpecName('ESDraft', '#sec-number.isinteger', 'Number.isInteger')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.isInteger")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドが所属している {{jsxref("Number")}} オブジェクト。</li>
</ul>
