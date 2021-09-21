---
title: BigInt() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
tags:
  - BigInt
  - Constructor
  - JavaScript
  - Reference
  - コンストラクター
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
---
<div>{{JSRef}}</div>

<p><strong><code>BigInt()</code></strong> コンストラクターは、 {{jsxref("BigInt")}} オブジェクトを生成するために使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">BigInt(<var>value</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>作成しようとしているオブジェクトの数値。文字列または整数にすることができます。</dd>
</dl>

<div class="blockIndicator note">
<p><strong>メモ</strong>: <code>BigInt()</code> は {{JSxRef("Operators/new", "new")}} 演算子と共には使用されません。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_a_new_BigInt" name="Creating_a_new_BigInt">新しい BigInt の生成</h3>

<pre class="brush: js">BigInt(123);
// 123n
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
   <td>{{SpecName('ESDraft', '#sec-bigint-constructor', 'BigInt constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.BigInt.BigInt")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("BigInt")}} class</li>
</ul>
