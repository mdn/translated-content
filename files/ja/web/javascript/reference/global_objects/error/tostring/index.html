---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - Error
  - JavaScript
  - Method
  - Prototype
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
---
<div>{{JSRef}}</div>

<p><code><strong>toString()</strong></code> メソッドは、指定した {{jsxref("Error")}} オブジェクトを表す文字列を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code><var>e</var>.toString()</code></pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定した {{jsxref("Error")}} オブジェクトを表す文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Error")}} オブジェクトは、すべてのオブジェクトに継承される {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。その意味は、次のようなものです ({{jsxref("Object")}} と {{jsxref("String")}} は元の値を持つと仮定します)。</p>

<pre class="brush: js">Error.prototype.toString = function() {
  'use strict';

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = (name === undefined) ? 'Error' : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? '' : String(msg);

  if (name === '') {
    return msg;
  }
  if (msg === '') {
    return name;
  }

  return name + ': ' + msg;
};
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toString" name="Using_toString">toString() の使用</h3>

<pre class="brush: js">var e = new Error('fatal error');
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = '';
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // ''

e.name = 'hello';
console.log(e.toString()); // 'hello'
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
   <td>{{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Error.toString")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Error.prototype.toSource()")}}</li>
</ul>
