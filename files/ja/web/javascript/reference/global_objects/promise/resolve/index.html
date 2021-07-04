---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---
<div>{{JSRef}}</div>

<p><strong><code>Promise.resolve()</code></strong> メソッドは、与えられた値で解決した {{jsxref("Promise")}} オブジェクトを返します。その値がプロミスであった場合は、そのプロミスが返されます。その値が thenable (すなわち {{jsxref("Promise.then", "\"then\" メソッド")}} を持っている場合) であれば、返されるプロミスは thenable を「追跡」し、その最終的な状態を採用します。それ以外の場合は、引数で満足したプロミスが返されます。この関数は複数階層のプロミス風オブジェクト (例えば、何かで解決するプロミスで解決するプロミス) を単一の階層に平坦化します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Promise.resolve(<var>value</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>この <code>Promise</code> で解決する際の引数。解決するための <code>Promise</code> または thenable にすることもできます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた値で解決された {{jsxref("Promise")}}、または value がプロミスオブジェクトであった場合、値として渡されたプロミスです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>静的な <code>Promise.resolve</code> 関数は、解決する <code>Promise</code> を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_static_Promise.resolve_method" name="Using_the_static_Promise.resolve_method">静的な Promise.resolve メソッドの使用</h3>

<pre class="brush: js notranslate">Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});
</pre>

<h3 id="Resolving_an_array" name="Resolving_an_array">配列で解決</h3>

<pre class="brush: js notranslate">var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
</pre>

<h3 id="Resolving_another_Promise" name="Resolving_another_Promise">別の Promise で解決</h3>

<pre class="brush: js notranslate">var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// ログの順番:
// original === cast ? true
// value: 33
</pre>

<p>ログの順番が反転するのは、 <code>then</code> ハンドラーが非同期に呼び出されるために発生します。 <code>then</code> がどのように動作するのかは<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value">こちら</a>を参照してください。</p>

<h3 id="Resolving_thenables_and_throwing_Errors" name="Resolving_thenables_and_throwing_Errors">thenables で解決してエラーを発生させる</h3>

<pre class="brush: js notranslate">// Resolving a thenable object
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill('fulfilled!'); }
});
console.log(p1 instanceof Promise) // true, object casted to a Promise

p1.then(function(v) {
    console.log(v); // "fulfilled!"
  }, function(e) {
    // not called
});

// Thenable throws before callback
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError('Throwing');
  resolve('Resolving');
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // not called
}, function(e) {
  console.error(e); // TypeError: Throwing
});

// Thenable throws after callback
// Promise resolves
var thenable = { then: function(resolve) {
  resolve('Resolving');
  throw new TypeError('Throwing');
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // "Resolving"
}, function(e) {
  // not called
});
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
   <td>{{SpecName('ESDraft', '#sec-promise.resolve', 'Promise.resolve')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise.resolve")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
</ul>
