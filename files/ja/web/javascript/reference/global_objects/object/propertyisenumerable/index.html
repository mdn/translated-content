---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - プロトタイプ
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---
<div>{{JSRef}}</div>

<p> <code><strong>propertyIsEnumerable()</strong></code> メソッドは、指定されたプロパティが列挙可能で、オブジェクト自身のプロパティであることを示す Boolean を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code><var>obj</var>.propertyIsEnumerable(<var>prop</var>)</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>調べたいプロパティの名前。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定されたプロパティが列挙可能であり、かつオブジェクト自体のプロパティであるかどうかを示す {{jsxref("Boolean")}} 。</p>

<h2 id="Description" name="Description">解説</h2>

<p>すべてのオブジェクトは <code>propertyIsEnumerable</code> メソッドを持っています。このメソッドはあるオブジェクトのプロパティが、プロトタイプチェーンを通じて継承されたプロパティを除いて {{jsxref("Statements/for...in", "for...in")}} ループで列挙可能かどうかを特定することができます。もしオブジェクトが指定されたプロパティを持っていない場合、このメソッドは <code>false</code> を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="A_basic_use_of_propertyIsEnumerable" name="A_basic_use_of_propertyIsEnumerable"><code>propertyIsEnumerable</code> の基本的な使い方</h3>

<p>以下の例はオブジェクトと配列での <code>propertyIsEnumerable</code> の使い方を示しています。</p>

<pre class="brush: js">var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop');   // true を返す
a.propertyIsEnumerable(0);        // true を返す
</pre>

<h3 id="User-defined_vs._built-in_objects" name="User-defined_vs._built-in_objects">ユーザー定義オブジェクトと組み込みオブジェクト</h3>

<p>以下の例はユーザー定義プロパティと組み込みプロパティの列挙可能性を実証しています。</p>

<pre class="brush: js">var a = ['is enumerable'];

a.propertyIsEnumerable(0);          // true を返す
a.propertyIsEnumerable('length');   // false を返す

Math.propertyIsEnumerable('random');   // false を返す
this.propertyIsEnumerable('Math');     // false を返す
</pre>

<h3 id="Direct_versus_inherited_properties" name="Direct_versus_inherited_properties">直接のプロパティと継承されたプロパティ</h3>

<pre class="brush: js">var a = [];
a.propertyIsEnumerable('constructor');         // false を返す

function firstConstructor() {
  this.property = 'is not enumerable';
}

firstConstructor.prototype.firstMethod = function() {};

function secondConstructor() {
  this.method = function method() { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = 'is enumerable';

o.propertyIsEnumerable('arbitraryProperty');   // true を返す
o.propertyIsEnumerable('method');              // true を返す
o.propertyIsEnumerable('property');            // false を返す

o.property = 'is enumerable';

o.propertyIsEnumerable('property');            // true を返す

// これらはすべて false を返します。これは、 (最後の2つは for-in で
// 反復処理可能であるにもかかわらず) propertyIsEnumerable が考慮しない
// プロトタイプであるためです。
o.propertyIsEnumerable('prototype');   // false を返す (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable('constructor'); // false を返す
o.propertyIsEnumerable('firstMethod'); // false を返す
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
   <td>{{SpecName('ESDraft', '#sec-object.prototype.propertyisenumerable', 'Object.prototype.propertyIsEnumerable')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Object.propertyIsEnumerable")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">列挙可能性とプロパティの所有権</a></li>
 <li>{{jsxref("Statements/for...in", "for...in")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
