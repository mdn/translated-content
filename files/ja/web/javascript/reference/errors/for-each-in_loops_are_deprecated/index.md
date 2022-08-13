---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
tags:
- Error
- JavaScript
- Warning
translation_of: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の警告 "JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead" は、 {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} 文が使用された時に発生します。</p>

<h2 id="Message">メッセージ</h2>

<pre class="brush: js">Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead
</pre>

<h2 id="Error_type">エラー種別</h2>

<p>警告</p>

<h2 id="What_went_wrong">原因</h2>

<p>JavaScript 1.6 の {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} 文は非推奨で、近い将来削除される予定です。</p>

<h2 id="Examples">例</h2>

<h3 id="Object_iteration">オブジェクトの反復処理</h3>

<p>特定のオブジェクトの値を反復するために {{jsxref("Statements/for_each...in", "for each...in")}} が使用されています。</p>

<h4 id="Deprecated_syntax">非推奨の構文</h4>

<pre class="brush: js example-bad">var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h4 id="Alternative_standard_syntax">代替の標準構文</h4>

<p>標準の {{jsxref("Statements/for...in", "for...in")}} ループを使用すると、そのループ内で特定のオブジェクトのキーを反復処理し、それぞれの値を取得することができます。</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
</pre>

<p>または、　{jsxref("Statements/for...of", "for...of")}} (ES2015) と {{jsxref("Object.values")}} (ES2017) を使用すると、特定のオブジェクトの値の配列を取得して、その配列を次のように反復処理することができます。</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h3 id="Array_iteration">配列の反復処理</h3>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} は、特定の配列要素を反復するために使用されていました。</p>

<h4 id="Deprecated_syntax_2">非推奨の構文</h4>

<pre class="brush: js example-bad">var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h4 id="Alternative_standard_syntax_2">代替の標準構文</h4>

<p>{{jsxref("Statements/for...of", "for...of")}} (ES2015) ループで同様のことができるようになりました。</p>

<pre class="brush: js example-good">var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h3 id="Iterating_over_a_null-able_array">null の可能性がある配列の反復</h3>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} は、指定した値が <code>null</code> または <code>undefined</code> だった場合には何もしませんが、{{jsxref("Statements/for...of", "for...of")}} は例外を発生させます。
</p>

<h4 id="Deprecated_syntax_3">非推奨の構文</h4>

<pre class="brush: js example-bad">function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
</pre>

<h4 id="Alternative_standard_syntax_3">代替の標準構文</h4>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} 文を書き換えるために、 <code>null</code> や <code>undefined</code> が {{jsxref("Statements/for...of", "for...of")}} でも扱えるようにするには、{{jsxref("Statements/for...of", "for...of")}} の周囲をガードする必要があります。</p>

<pre class="brush: js example-good">function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
</pre>

<h3 id="Iterating_over_an_objects_key-value_pair">オブジェクトのキー/値のペアの反復処理</h3>

<h4 id="Deprecated_syntax_4">非推奨の構文</h4>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} と非推奨の {{jsxref("Iterator")}} オブジェクトを使用した、特定のオブジェクトのキー/値のペアを反復処理する非推奨の構文があります。</p>

<pre class="brush: js example-bad">var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<h4 id="Alternative_standard_syntax_4">代替の標準構文</h4>

<p>標準の {{jsxref("Statements/for...in", "for...in")}} ループを使用して、指定されたオブジェクトのキーを反復処理し、ループ内でそれぞれの値を取得することができます。</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<p>または、{{jsxref("Statements/for...of", "for...of")}} (ES2015) と {{jsxref("Object.values")}} (ES2017) を使用して、特定のオブジェクトの値の配列を取得し、次のように反復処理することができます。</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Statements/for...of", "for...of")}}</li>
  <li>{{jsxref("Object.values")}}</li>
  <li>{{jsxref("Object.entries")}}</li>
</ul>
