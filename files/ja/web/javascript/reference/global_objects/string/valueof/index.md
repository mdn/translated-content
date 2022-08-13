---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/valueOf
---
<div>{{JSRef}}</div>

<p><strong><code>valueOf()</code></strong> メソッドは、{{jsxref("String")}} オブジェクトのプリミティブ値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-valueof.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>str</var>.valueOf()</code></pre>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>与えられた {{jsxref("String")}} オブジェクトのプリミティブ値を表す文字列。</p>

<h2 id="Description" name="Description">詳細</h2>

<p>{{jsxref("String")}} オブジェクトの <code>valueOf()</code> メソッドは、{{jsxref("String")}} オブジェクトの文字列型としてのプリミティブ値を返します。この値は、{{jsxref("String.prototype.toString()")}} の戻り値と等価です。</p>

<p>このメソッドは通常、JavaScript によって内部的に呼ばれ、コード中で明示的に呼ばれることはありません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_valueOf" name="Using_valueOf()"><code>valueOf()</code> メソッドの使用</h3>

<pre class="brush: js notranslate">var x = new String('Hello world');
console.log(x.valueOf()); // "Hello world" を表示します
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.valueof', 'String.prototype.valueOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("javascript.builtins.String.valueOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.toString()")}}</li>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
</ul>
