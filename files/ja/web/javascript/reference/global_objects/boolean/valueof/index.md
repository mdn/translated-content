---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---
<div>{{JSRef}}</div>

<p><code><strong>valueOf()</strong></code> メソッドは、{{jsxref("Boolean")}} オブジェクトのプリミティブ値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code><var>bool</var>.valueOf()</code></pre>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>与えられた {{jsxref("Boolean")}} オブジェクトのプリミティブ値です。</p>

<h2 id="Description" name="Description">説明</h2>

<p><code>valueOf</code> メソッドは、{{jsxref("Boolean")}} オブジェクトのプリミティブ値か真偽値データ型としての {{jsxref("Boolean")}} リテラルを返します。</p>

<p>このメソッドはたいてい JavaScript によって内部的に呼び出され、コードで明示的に呼び出されることはありません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_valueOf" name="Using_valueOf"><code>valueOf</code> を使う</h3>

<pre>x = new Boolean();
myVar = x.valueOf()      // myVar に false が代入される
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">使用</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>初期定義。JavaScript 1.1 で実装。</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.6.4.3', 'Boolean.prototype.valueOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Boolean.valueOf")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
</ul>
