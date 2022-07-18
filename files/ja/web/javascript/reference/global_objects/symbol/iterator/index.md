---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.iterator</code></strong> は、オブジェクトのデフォルトのイテレーターを指定します。<a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a> によって使用されます。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}</div>



<h2 id="Description" name="Description">説明</h2>

<p>オブジェクトを反復する必要がある場合（<code>for..of</code> ループの開始時など）は常に、その <code>@@iterator</code> メソッドが引数なしで呼び出され、返された<strong>イテレーター</strong>を使用して反復される値が取得されます。</p>

<p>一部の組み込み型にはデフォルトの反復動作がありますが、他の型（ {{jsxref("Object")}} など）にはありません。<code>@@iterator</code> メソッドの組み込み型は次のとおりです。</p>

<ul>
 <li>{{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}</li>
</ul>

<p>詳細については、<a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">反復処理プロトコル</a>も参照してください。</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="User-defined_iterables" name="User-defined_iterables">ユーザー定義の反復可能項目</h3>

<p>次のように独自の反復可能オブジェクトを作成できます。</p>

<pre class="brush: js notranslate">var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
</pre>

<p>または、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names">計算されたプロパティ</a>を使用して、クラスやオブジェクト内で反復可能オブジェクトを直接定義できます。</p>

<pre class="brush: js notranslate">class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

[...new Foo] // [ 1, 2, 3 ]
[...someObj] // [ 'a', 'b' ]
</pre>

<h3 id="Non-well-formed_iterables" name="Non-well-formed_iterables">非整形反復処理</h3>

<p>もし反復可能項目の <code>@@iterator</code> メソッドがイテレーターオブジェクトを返さない場合、それは非整形反復可能項目です。それを使用すると、実行時に例外が発生したり、バグが発生したりする可能性があります。</p>

<pre class="brush: js notranslate">var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function
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
   <td>{{SpecName('ESDraft', '#sec-symbol.iterator', 'Symbol.iterator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.builtins.Symbol.iterator")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">反復処理プロトコル </a></li>
 <li>{{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}</li>
</ul>
