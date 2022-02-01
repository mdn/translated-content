---
title: オブジェクト初期化子
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - JSON
  - JavaScript
  - Literal
  - Methods
  - Object
  - Primary Expression
  - computed
  - mutation
  - properties
translation_of: Web/JavaScript/Reference/Operators/Object_initializer
---
<div>{{JsSidebar("Operators")}}</div>

<p>オブジェクトは <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>new Object()</code></a>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create">Object.create()</a></code>、<em>リテラル</em>表記法 (<em>initializer</em> 表記法) を使用して初期化されます。オブジェクト初期化子はオブジェクトのプロパティ名と関連した値のゼロ以上のペアのリストです。中括弧 (<code>{}</code>) で囲まれます。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">var o = {};
var o = { a: 'foo', b: 42, c: {} };

var a = 'foo', b = 42, c = {};
var o = {a: a, b: b, c: c};

var o = {
  <var>property: function </var>(<var>parameters</var>) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};
</pre>

<h3 id="New_notations_in_ECMAScript_2015" name="New_notations_in_ECMAScript_2015">ECMAScript 2015 での新しい表記法</h3>

<p>これらの表記をサポートするための互換性の表を参照してください。非サポート環境では、これらの表記は、構文エラーにつながります。</p>

<pre class="brush: js">// Shorthand property names (ES2015)
var a = 'foo', b = 42, c = {};
var o = {a, b, c};

// Shorthand method names (ES2015)
var o = {
  <var>property</var>(<var>parameters</var>) {}
};

// Computed property names (ES2015)
var prop = 'foo';
var o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
};</pre>

<h2 id="Description" name="Description">説明</h2>

<p>オブジェクト初期化子は、{{jsxref("Object")}} の初期化を表す式です。オブジェクトはオブジェクトを表す<em>プロパティ</em>で構成されます。オブジェクトプロパティの値は特定の {{Glossary("primitive")}} データ型か他のオブジェクトのどちらかを含みます。</p>

<h3 id="Creating_objects" name="Creating_objects">オブジェクトの生成</h3>

<p>プロパティを持たない空のオブジェクトは下記のように中括弧を記述することで生成されます。</p>

<pre class="brush: js">var object = {};</pre>

<p><em>リテラル</em>表記法、<em>initializer</em> 表記法の利点は中括弧内にプロパティをもつオブジェクトをすばやく生成できる点です。また、カンマで区切られた <code>key: value</code> のペアを記述することでプロパティ値の生成も可能です。以下に、三つのプロパティをもつオブジェクトを生成する方法を記します。キーは <code>"foo"</code>、<code>"age"</code>、<code>"baz"</code> であり、各々のキーの値は、文字列の <code>"bar"</code>、数値の <code>42</code> 、そして <code>baz</code> はオブジェクトがプロパティ値となります。</p>

<pre class="brush: js">var object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12},
}</pre>

<h3 id="Accessing_properties" name="Accessing_properties">プロパティへのアクセス</h3>

<p>一度オブジェクトを生成した後も、プロパティにアクセスすることができます。その方法は「ドット表記法」か「ブラケット表記法」と言われます。詳細については、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティへのアクセス</a>をご覧ください。</p>

<pre class="brush: js">object.foo; // "bar"
object['age']; // 42

object.foo = 'baz';
</pre>

<h3 id="Property_definitions" name="Property_definitions">プロパティの定義</h3>

<p>初期化構文を使用してプロパティを記譜する方法について既に学びました。多くの場合、コード内には、オブジェクトに設定したい変数があります。下記のコードをご覧ください。:</p>

<pre class="brush: js">var a = 'foo',
    b = 42,
    c = {};

var o = {
  a: a,
  b: b,
  c: c
};</pre>

<p>ECMAScript 2015 では、同じことを達成するために利用可能な短い表記があります。:</p>

<pre class="brush: js">var a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
var o = {a, b, c};

// In other words,
console.log((o.a === {a}.a)); // true
</pre>

<h4 id="Duplicate_property_names" name="Duplicate_property_names">重複したプロパティ名</h4>

<p>プロパティに対して同じ名前を使用するとき、二番目のプロパティは最初のプロパティを上書きします。</p>

<pre class="brush: js">var a = {x: 1, x: 2};
console.log(a); // {x: 2}
</pre>

<p>ECMAScript 5 の strict モードのコードでは、重複したプロパティの名前は {{jsxref("SyntaxError")}} とみなされます。実行時に重複を可能にする計算されたプロパティ名の導入により、ECMAScript 2015 ではこの制限は取り除かれました。</p>

<pre class="brush: js">function haveES2015DuplicatePropertySemantics() {
  'use strict';
  try {
    ({prop: 1, prop: 2});

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}</pre>

<h3 id="Method_definitions" name="Method_definitions">メソッドの定義</h3>

<p>オブジェクトのプロパティは <a href="/ja/docs/Web/JavaScript/Reference/Functions">function</a>、<a href="/ja/docs/Web/JavaScript/Reference/Functions/get">getter</a> メソッド、<a href="/ja/docs/Web/JavaScript/Reference/Functions/set">setter </a>メソッドも参照することができます</p>

<pre class="brush: js">var o = {
  <var>property: function </var>(<var>parameters</var>) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};</pre>

<p>ECMAScript 2015 では、省略表記が利用可能です。そのため、キーワード "function" はもはや必要ではありません。</p>

<pre class="brush: js">// Shorthand method names (ES2015)
var o = {
  <var>property</var>(<var>parameters</var>) {},
  *<var>generator</var>() {}
};</pre>

<p>ECMAScript 2015 では、その値がジェネレーター関数であるプロパティを簡潔に定義する方法があります。:</p>

<pre class="brush: js">var o = {
  *<var>generator</var>() {
    ...........
  }
};</pre>

<p>ECMAScript 5 では、下記のように記述します (しかし、ES5 はジェネレーターを持たないことに注意してください):</p>

<pre class="brush: js">var o = {
  generator:<var> function* </var>() {
    ...........
  }
};</pre>

<p>メソッドの詳細や例については、<a href="/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions">メソッド定義</a>をご覧ください。</p>

<h3 id="Computed_property_names" name="Computed_property_names">計算されたプロパティ名</h3>

<p>ECMAScript 2015 から、オブジェクト初期化子構文も計算されたプロパティ名をサポートします。括弧 <code>[]</code> の中に式を記述でき、それが計算されてプロパティ名として使用されます。これは、あなたが既にプロパティを読み込んだり設定したりするために使用したことがあるかもしれない、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">メンバー演算子</a>構文のブラケット表記を思い起こさせます。今では、オブジェクトリテラルでも同様な構文を使うことができます:</p>

<pre class="brush: js">// Computed property names (ES2015)
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // {size: 12, mobileSize: 4}</pre>

<h3 id="Spread_properties" name="Spread_properties">スプレッドプロパティ</h3>

<p><a href="https://github.com/tc39/proposal-object-rest-spread">ECMAScript proposal の Rest/Spread プロパティ</a> （ステージ 4） オブジェクトリテラルに<a href="/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator">スプレッド</a>プロパティを追加します。 渡されたオブジェクトから新しいオブジェクトに独自の列挙可能なプロパティをコピーします。</p>

<p>{{jsxref("Object.assign()")}} を使うよりも短いコードで prototype を除いた浅いコピーの作成や、マージしたオブジェクトの作成を書けます。</p>

<pre class="brush: js">var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }</pre>

<p>{{jsxref("Object.assign()")}} は <a href="/ja/docs/Web/JavaScript/Reference/Functions/set">setters</a> をトリガーしますが、スプレッド構文はトリガーできません。</p>

<h3 id="Prototype_mutation" name="Prototype_mutation">プロトタイプ変異</h3>

<p><code>__proto__: value</code> 形式、または <code>"__proto__": value</code> 形式のプロパティ定義は、<code>__proto__</code> 名をもつプロパティを生成しません。かわりに、与えられた値がオブジェクトか <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> の場合、その値に生成されたオブジェクトの <code>[[Prototype]]</code> を変更します (その値がオブジェクト、または null ではない場合、オブジェクトは変更されません)。</p>

<pre class="brush: js">var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = {__proto__: null};
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = {'__proto__': protoObj};
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = {__proto__: 'not an object or null'};
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty('__proto__'));
</pre>

<p>単一のプロトタイプの変異のみ、オブジェクトリテラルに許可されています: すなわち、複数のプロトタイプの変異は構文エラーです。</p>

<p>"colon" 表記法を使用しないプロパティ定義はプロトタイプ変異ではありません。:  任意の他の名称を使用する同様の定義と同じように動作するプロパティ定義です。</p>

<pre class="brush: js">var __proto__ = 'variable';

var obj1 = {__proto__};
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty('__proto__'));
assert(obj1.__proto__ === 'variable');

var obj2 = {__proto__() { return 'hello'; }};
assert(obj2.__proto__() === 'hello');

var obj3 = { ['__prot' + 'o__']: 17 };
assert(obj3.__proto__ === 17);
</pre>

<h2 id="Object_literal_notation_vs_JSON" name="Object_literal_notation_vs_JSON">オブジェクトリテラル表記法 vs JSON</h2>

<p>オブジェクトリテラル表記法は <strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation (<a href="/ja/docs/Glossary/JSON">JSON</a>) とは異なります。それらは似ていますが、それらの間には違いがあります。:</p>

<ul>
 <li>JSON は、<code>"property": value</code> 構文を使用するプロパティ定義<em>のみ</em>許可します。プロパティ名称は二重引用符で囲まなければなりません。そして、その定義は簡略にすることはできません。</li>
 <li>JSON ではその値は strings、numbers、arrays、<code>true</code>、<code>false</code>、<code>null</code>、別の (JSON) オブジェクトのみです。</li>
 <li>関数の値 (上記"{{anch("Method definitions", "メソッド")}}"を参照) は JSON では値を割り当てることができません。</li>
 <li>{{jsxref("Date")}} のようなオブジェクトは {{jsxref("JSON.parse()")}} の後で string になります。</li>
 <li>{{jsxref("JSON.parse()")}} は計算されたプロパティ名を拒否し、エラーがスローされます。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>初期定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td><a href="/ja/docs/Web/JavaScript/Reference/Functions/get">getter</a> と <a href="/ja/docs/Web/JavaScript/Reference/Functions/set">setter</a> が追加されました。</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-object-initializer', 'Object Initializer')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>簡略表現メソッド/プロパティの名称と計算されたプロパティ名が追加されました。</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-initializer', 'Object Initializer')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.operators.object_initializer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">メンバー演算子</a></li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Functions/get">get</a></code> / <code><a href="/ja/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions">メソッド定義</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar">字句文法</a></li>
</ul>
