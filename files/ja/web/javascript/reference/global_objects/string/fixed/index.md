---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fixed
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code>fixed()</code></strong> メソッドは、文字列を等幅フォントで表示させる HTML の {{HTMLElement("tt")}} 要素を生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>str</var>.fixed()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>HTML の {{HTMLElement("tt")}} 要素を含む文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>fixed()</code> メソッドは、文字列を <code>&lt;tt&gt;</code> 要素の中に、 "<code>&lt;tt&gt;str&lt;/tt&gt;</code>" のように埋め込みます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_fixed" name="Using_fixed">fixed() の使用</h3>

<p>下記の例は、 <code>fixed</code> メソッドを使用して文字列の表示方法を変更します。</p>

<pre class="brush: js notranslate">var worldString = '世界のみなさん、こんにちは！';
console.log(worldString.fixed()); // "&lt;tt&gt;世界のみなさん、こんにちは！&lt;/tt&gt;"
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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.fixed', 'String.prototype.fixed')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.fixed")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.bold()")}}</li>
 <li>{{jsxref("String.prototype.italics()")}}</li>
 <li>{{jsxref("String.prototype.strike()")}}</li>
</ul>
