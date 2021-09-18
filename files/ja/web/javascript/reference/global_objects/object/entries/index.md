---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Object/entries
---
<div>{{JSRef}}</div>

<p><code><strong>Object.entries()</strong></code> メソッドは、引数に与えたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティの組 <code>[<var>key</var>, <var>value</var>]</code> からなる配列を返します。配列要素の順序は {{jsxref("Statements/for...in", "for...in")}} ループによる順序と同じです (両者の主な違いは、<code>for...in</code> ループではプロトタイプチェーン内のプロパティも列挙されることです)。</p>

<p><code><strong>Object.entries()</strong></code> で返される配列の順序は、オブジェクトがどのように定義されたかに依存しません。特定の順序にする必要があるのであれば、<code>Object.entries(obj).sort((a, b) =&gt; a[0] - b[0]);</code> のようにして、まず配列を整列する必要があります。</p>

<div>{{EmbedInteractiveExample("pages/js/object-entries.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.entries(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>返されることになる文字列をキーとした列挙可能な所有プロパティの組 <code>[<var>key</var>, <var>value</var>]</code> を持つオブジェクト。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>引数に与えたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティの組 <code>[<var>key</var>, <var>value</var>]</code> の配列。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Object.entries()</code> は、<code>object</code> に直接存在する文字列をキーとした列挙可能プロパティの組 <code>[<var>key</var>, <var>value</var>]</code> が配列要素に対応した配列を返します。プロパティの順序はオブジェクト内のプロパティに対してループさせた時の順序と同じになります。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>ネイティブで <code>Object.entries</code> に対応していない古い環境に互換性を持たせる場合は、以下のいずれかを使用することができます。</p>

<ul>
 <li><code>Object.entries</code> の試験的実装である <a href="https://github.com/tc39/proposal-object-values-entries">tc39/proposal-object-values-entries</a> (IE に対応する必要がない場合)</li>
 <li><a href="https://github.com/es-shims/Object.entries">es-shims/Object.entries</a> リポジトリにあるポリフィル</li>
 <li>または、単純に、下記の配布可能なポリフィルを使うこともできます。</li>
</ul>

<pre class="brush: js notranslate">if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
</pre>

<p>上記のポリフィルのコードスニペットで、IE&lt;9 の対応が必要な場合、Object.keys の polyfill ({{jsxref("Object.keys")}} ページにあるようなもの) も必要となります。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// 配列様オブジェクト
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// ランダムなキー順序を持つ配列様オブジェクト
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// 列挙可能でないプロパティ getFoo がある
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// オブジェクトでない引数はオブジェクトへと型強制されます
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) =&gt; {
console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
</pre>

<h3 id="Converting_an_Object_to_a_Map" name="Converting_an_Object_to_a_Map"><code>Object</code> から <code>Map</code> への変換</h3>

<p>{{jsxref("Map", "new Map()")}} コンストラクターは <code>entries</code> による反復処理に対応しています。<code>Object.entries</code> を使うと、{{jsxref("Object")}} から {{jsxref("Map")}} へと簡単に変換できます。:</p>

<pre class="brush: js notranslate">const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
</pre>

<h3 id="Iterating_through_an_Object" name="Iterating_through_an_Object"><code>Object</code> をループする</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Array Destructuring</a> を使って、objects を簡単にループできます。</p>

<pre class="brush: js notranslate">const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) =&gt; console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.entries', 'Object.entries')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Object.entries")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.values()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.fromEntries()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Map.prototype.entries()")}}</li>
 <li>{{jsxref("Map.prototype.keys()")}}</li>
 <li>{{jsxref("Map.prototype.values()")}}</li>
</ul>
