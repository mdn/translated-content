---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---
<div>{{JSRef}}</div>

<p>静的な <strong><code>Reflect.apply()</code></strong> メソッドは、指定された引数とともに対象となる関数を呼び出します。</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-apply.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Reflect.apply(<var>target</var>, <var>thisArgument</var>, <var>argumentsList</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>呼び出し対象の関数。</dd>
 <dt><code><var>thisArgument</var></code></dt>
 <dd><code><var>target</var></code> の呼び出す際の <code>this</code> 値を提供する。</dd>
 <dt><code><var>argumentsList</var></code></dt>
 <dd><code><var>target</var></code> と一緒に呼び出す引数を指定する配列風オブジェクト。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された <code><var>target</var></code> 値と引数の条件で対象の関数を呼び出したときの結果です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>{{jsxref("TypeError")}}: <code><var>target</var></code> が呼び出せない場合。</p>

<h2 id="Description" name="Description">解説</h2>

<p>ES5 では、ふつう {{jsxref("Function.prototype.apply()")}} メソッドを使用することで、指定された <code>this</code> の値と <code>arguments</code> で配列 (または <a href="/ja/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects">配列風オブジェクト</a>) により引数を指定することで、関数を呼び出すことができます。</p>

<pre class="brush: js notranslate">Function.prototype.apply.call(Math.floor, undefined, [1.75]);</pre>

<p><code>Reflect.apply()</code> を使うと、それほど冗長ではなく理解しやすくなります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Reflect.apply" name="Using_Reflect.apply">Reflect.apply() の使用</h3>

<pre class="brush: js notranslate">Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index
// 4

Reflect.apply(''.charAt, 'ponies', [3])
// "i"
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
   <td>{{SpecName('ESDraft', '#sec-reflect.apply', 'Reflect.apply')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Reflect.apply")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
</ul>
