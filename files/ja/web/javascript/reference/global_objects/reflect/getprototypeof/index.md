---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
---
<div>{{JSRef}}</div>

<p>静的な <strong><code>Reflect.getPrototypeOf()</code></strong> メソッドは、{{jsxref("Object.getPrototypeOf()")}} とほぼ同じメソッドです。これは指定したオブジェクトのプロトタイプ (つまり、内部の <code>[[Prototype]]</code> プロパティの値) を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Reflect.getPrototypeOf(<var>target</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>プロトタイプを取得する対象のオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられたオブジェクトのプロトタイプです。継承されたプロパティがない場合、{{jsxref("null")}} を返します。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p><code>target</code> が {{jsxref("Object")}} でない場合に {{jsxref("TypeError")}} がスローされます。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Reflect.getPrototypeOf</code> メソッドは、指定したオブジェクトのプロトタイプ (つまり、内部の <code>[[Prototype]]</code> プロパティの値) を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Reflect.getPrototypeOf" name="Using_Reflect.getPrototypeOf">Reflect.getPrototypeOf() の使用</h3>

<pre class="brush: js notranslate">Reflect.getPrototypeOf({})                  // Object.prototype
Reflect.getPrototypeOf(Object.prototype)    // null
Reflect.getPrototypeOf(Object.create(null)) // null
</pre>

<h3 id="Compared_to_Object.getPrototypeOf" name="Compared_to_Object.getPrototypeOf">Object.getPrototypeOf() との比較</h3>

<pre class="brush: js notranslate">// Object の結果は同じです
Object.getPrototypeOf({})   // Object.prototype
Reflect.getPrototypeOf({})  // Object.prototype

// ES5 上では非Objectの結果は両方とも例外です
Object.getPrototypeOf('foo')   // Throws TypeError
Reflect.getPrototypeOf('foo')  // Throws TypeError

// ES2015 上では Reflect のみ例外で、Object は 非Object を Object として扱います
Object.getPrototypeOf('foo')   // String.prototype
Reflect.getPrototypeOf('foo')  // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object('foo'))  // String.prototype
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
   <td>{{SpecName('ESDraft', '#sec-reflect.getprototypeof', 'Reflect.getPrototypeOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Reflect.getPrototypeOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
</ul>
