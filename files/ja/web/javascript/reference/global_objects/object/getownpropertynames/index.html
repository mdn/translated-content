---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---
<div>{{JSRef}}</div>

<p><strong><code>Object.getOwnPropertyNames()</code></strong> メソッドは、与えられたオブジェクトで発見されたすべての直接のプロパティを含む配列を (シンボルを使用したものを除き、列挙不可能なプロパティを含んで) 返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.getOwnPropertyNames(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>オブジェクトで、これ自身の列挙可能および列挙不可能なプロパティが返されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定されたオブジェクトで発見された、列挙可能および列挙不可能なプロパティに対応する文字列を要素とする配列。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Object.getOwnPropertyNames()</code> は、 <code><var>obj</var></code> で発見された列挙可能および列挙不可能なプロパティに対応する文字列を要素とする配列を返します。配列内における列挙可能なプロパティの順序は、オブジェクトで {{jsxref("Statements/for...in", "for...in")}} (または {{jsxref("Object.keys()")}}) を実行して見つかるものの順序と同じです。 ES6 によれば、オブジェクトの整数のキーは (列挙可能であっても列挙不可能であっても) 最初の配列に昇順で追加され、その後に挿入順を表す文字列キーが続きます。</p>

<p>ES5 では、このメソッドの引数がオブジェクトではない (プリミティブである) 場合、 {{jsxref("TypeError")}} が発生します。 ES2015 では、引数がオブジェクトではない場合はオブジェクトに型変換されます。</p>

<pre class="brush: js notranslate">Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Object.getOwnPropertyNames" name="Using_Object.getOwnPropertyNames">Object.getOwnPropertyNames() の使用</h3>

<pre class="brush: js notranslate">var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() は配列のメソッド
// ["0", "1", "2", "length"] と出力される

// 配列風オブジェクト
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() は配列のメソッド
// ["0", "1", "2"] と出力される

// Array.forEach を使ったプロパティと値の出力
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
    console.log(val + ' -&gt; ' + obj[val]);
  }
);
// 出力結果
// 0 -&gt; a
// 1 -&gt; b
// 2 -&gt; c

// 列挙不可能なプロパティ
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// ["foo", "getFoo"] と出力されます
</pre>

<p>列挙可能なプロパティのみ取得したい場合は {{jsxref("Object.keys()")}} を参照するか、 {{jsxref("Statements/for...in", "for...in")}} ループを用いるかしてください。 (なお、 for...in ループでは {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} でフィルタリングされない限りは、そのオブジェクト上で直接見つかるプロパティだけでなく、プロトタイプチェーン上の列挙可能なプロパティも返されることに注意してください。)</p>

<p>プロトタイプチェーン上のプロパティは配列に含まれません。</p>

<pre class="brush: js notranslate">function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
);
</pre>

<h3 id="Get_non-enumerable_properties_only" name="Get_non-enumerable_properties_only">列挙不可能なプロパティのみを取得する</h3>

<p>ここでは {{jsxref("Array.prototype.filter()")}} 関数を使用して、 ({{jsxref("Object.keys()")}} で取得した) 列挙可能なキーを (<code>Object.getOwnPropertyNames()</code> で取得した) すべてのキーからフィルタリングし、出力として列挙不可能なキーのみを取得します。</p>

<pre class="brush: js notranslate">var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // このキーが enum_only の中になければ、
    // そのキーは列挙不可能であることを意味するので、
    // true を返してフィルターの中に残します。
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
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
   <td>{{SpecName('ESDraft', '#sec-object.getownpropertynames', 'Object.getOwnPropertyNames')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.getOwnPropertyNames")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Array.forEach()")}}</li>
</ul>
