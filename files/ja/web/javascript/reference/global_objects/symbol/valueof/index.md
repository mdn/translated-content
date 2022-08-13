---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
---
<div>{{JSRef}}</div>

<p><strong><code>valueOf()</code></strong> メソッドは、 Symbol オブジェクトのプリミティブ値を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate">Symbol().valueOf()
</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された {{jsxref("Symbol")}} オブジェクトのプリミティブ値です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Symbol")}} オブジェクトの <code>valueOf()</code> メソッドは、 Symbol オブジェクトのプリミティブ値を Symbol データ型として返します。</p>

<p>JavaScript はオブジェクトをプリミティブ値に変換するために <code>valueOf()</code> メソッドを呼び出します。 <code>valueOf()</code> メソッドを自分で呼び出す必要はほとんどありません。 JavaScript は、プリミティブ値が期待されているオブジェクトに遭遇したときに、自動的にこれを呼び出します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_valueOf" name="Using_valueOf">valueOf() の使用</h3>

<pre class="brush: js notranslate">const sym = Symbol("example");
sym === sym.valueOf(); // true
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
   <td>{{SpecName('ESDraft', '#sec-symbol.prototype.valueof', 'Symbol.prototype.valueOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.valueOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
</ul>
