---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sup
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code>sup()</code></strong> メソッドは、文字列が上付き文字として表示されるように HTML の {{HTMLElement("sup")}} 要素を生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>str</var>.sup()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>HTML の {{HTMLElement("sup")}} 要素を含む文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>sup()</code> メソッドは、文字列を <code>&lt;sup&gt;</code> 要素の中に、 "<code>&lt;sup&gt;str&lt;/sup&gt;</code>" のように埋め込みます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_sub_and_sup_methods" name="Using_sub_and_sup_methods">sub() および sup() メソッドの使用</h3>

<p>以下の例は、 {{jsxref("String.prototype.sub()", "sub()")}} と <code>sup()</code> メソッドを使用して文字列を整形しています。</p>

<pre class="brush: js notranslate">var superText = '上付き文字';
var subText = '下付き文字';

console.log('これは' + superText.sup() + 'の見え方を示しています。');
// "これは&lt;sup&gt;上付き文字&lt;/sup&gt;の見え方を示しています。"

console.log('これは' + subText.sub() + 'の見え方を示しています。');
// "これは&lt;sub&gt;下付き文字&lt;/sub&gt;の見え方を示しています。"
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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.sup', 'String.prototype.sup')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.sup")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.sub()")}}</li>
</ul>
