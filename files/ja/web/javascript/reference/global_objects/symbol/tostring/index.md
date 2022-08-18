---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/toString
---
<div>{{JSRef}}</div>

<p><strong><code>toString()</code></strong> メソッドは、指定された {{jsxref("Symbol")}} オブジェクトを表す文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate">Symbol().toString()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された {{jsxref("Symbol")}} オブジェクトを表す文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Symbol")}} オブジェクトは {{jsxref("Object")}} オブジェクトの <code>toString</code> メソッドをオーバーライドします。 {{jsxref("Object.prototype.toString()")}} を継承していません。 <code>Symbol</code> オブジェクトでは <code>toString</code> メソッドはオブジェクトの文字列表現を返します。</p>

<h3 id="No_string_concatenation" name="No_string_concatenation">文字列への型変換はない</h3>

<p>シンボルに対しては <code>toString()</code> を呼び出すことができるため、文字列への型変換はありません。</p>

<pre class="brush: js notranslate">Symbol('foo') + 'bar'        // TypeError: Can't convert symbol to string</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="toString_の使用">toString() の使用</h3>

<pre class="brush: js notranslate">Symbol('desc').toString()    // "Symbol(desc)"

// ウェルノウンシンボル
Symbol.iterator.toString()   // "Symbol(Symbol.iterator)

// グローバルシンボル
Symbol.for('foo').toString() // "Symbol(foo)"
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
   <td>{{SpecName('ESDraft', '#sec-symbol.prototype.tostring', 'Symbol.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.toString")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
