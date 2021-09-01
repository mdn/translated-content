---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Object/values
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><code><strong>Object.values()</strong></code> メソッドは、指定されたオブジェクトが持つ列挙可能なプロパティの値を、 {{jsxref("Statements/for...in", "for...in")}} ループで提供される場合と同じ順序で配列にして返します。 (違いは、 <code>for...in</code> ループではプロパティチェーン上のプロパティも同様に列挙するという点だけです。)</span></p>

<div>{{EmbedInteractiveExample("pages/js/object-values.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Object.values(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd> 返されることになる列挙可能な自身のプロパティの値を持つオブジェクト。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられたオブジェクトが所有する列挙可能なプロパティの値が入った配列。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Object.values()</code> は、<code>object</code> に直接存在する列挙可能な値が配列要素の文字列に対応した配列を返します。プロパティの順序はマニュアル操作でオブジェクト内のプロパティに対してループさせた時の順序と同じになります。</p>

<h2 id="Examples" name="Examples">使用例</h2>

<pre class="brush: js">const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 配列風オブジェクト
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// ランダムなキー順序を持つ配列風オブジェクト
// 数値のキーを使用すると、値はキーの番号順に返される
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

// 列挙可能でないプロパティ getFoo がある
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// オブジェクトでない引数はオブジェクトへと型強制される
console.log(Object.values('foo')); // ['f', 'o', 'o']
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>Object.values</code> に対応していない古い環境と互換性を持たせる場合は、 <a href="https://github.com/tc39/proposal-object-values-entries">tc39/proposal-object-values-entries</a> や <a href="https://github.com/es-shims/Object.values">es-shims/Object.values</a> 内にポリフィルがあります。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.values', 'Object.values')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Object.values")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.entries()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
</ul>
