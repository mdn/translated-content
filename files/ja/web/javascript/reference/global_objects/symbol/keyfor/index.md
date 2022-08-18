---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.keyFor(sym)</code></strong> メソッドは、指定されたシンボルについて、共有シンボルキーをグローバルシンボルレジストリから受け取ります。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-keyfor.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Symbol.keyFor(<var>sym</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>sym</var></code></dt>
 <dd>シンボル、必須。キーを探すシンボル。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>グローバルレジストリで見つかった場合は、与えられたシンボルのキーを表す文字列です。それ以外の場合は {{jsxref("undefined")}} です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_keyFor" name="Using_keyFor">keyFor() の使用</h3>

<pre class="brush: js notranslate">var globalSym = Symbol.for('foo'); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator) // undefined
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
   <td>{{SpecName('ESDraft', '#sec-symbol.keyfor', 'Symbol.keyFor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.keyFor")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Symbol.for()")}}</li>
</ul>
