---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---
<div>{{JSRef}}</div>

<p><strong><code>valueOf()</code></strong> メソッドは {{jsxref("Number")}} オブジェクトがラップしているプリミティブ値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-valueof.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>numObj</var>.valueOf()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定した {{jsxref("Number")}} オブジェクトのプリミティブ値を表した数値です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは、通常は JavaScript によって内部的に呼び出されるものであり、コード中で明示的に呼び出されることはありません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_valueOf" name="Using_valueOf">valueOf の使用</h3>

<pre class="brush: js notranslate">let numObj = new Number(10)
console.log(typeof numObj)  // object

let num = numObj.valueOf()
console.log(num)            // 10
console.log(typeof num)     // number
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
   <td>{{SpecName('ESDraft', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.valueOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.prototype.toSource()")}}</li>
</ul>
