---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
tags:
  - ECMAScript 2015
  - Generators
  - Iterable
  - Iterator
  - JavaScript
  - Operator
  - Reference
  - yield*
  - ジェネレーター
  - 演算子
translation_of: Web/JavaScript/Reference/Operators/yield*
---
<div>{{jsSidebar("Operators")}}</div>

<p><span class="seoSummary"><strong><code>yield*</code> 式</strong>は別の {{jsxref("Statements/function*", "ジェネレーター", "", 1)}} や反復可能なオブジェクトに委任するために使用されます。</span></p>

<div>{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"> yield* <var>expression</var>;</pre>

<dl>
 <dt><code><var>expression</var></code></dt>
 <dd>反復可能なオブジェクトを返す式。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>yield*</code> 式はオペランドを反復し、それによって返されたそれぞれの値をもたらします。</p>

<p><code>yield*</code> 式自体の値は、イテレーターが閉じたとき (つまり <code>done</code> が <code>true</code> のとき) に返される値です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Delegating_to_another_generator" name="Delegating_to_another_generator">別のジェネレータに委任する</h3>

<p>次のコードでは、 <code>g1()</code> によってもたらされる値は、 <code>g2()</code> で得られているものと同じように <code>next()</code> の呼び出しから返されます。</p>

<pre class="brush: js">function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
</pre>

<h3 id="Other_Iterable_objects" name="Other_Iterable_objects">他の反復可能なオブジェクト</h3>

<p>ジェネレータオブジェクトのほかに、 <code>yield*</code> は他の種類の反復 (例えば、配列、文字列、 {{jsxref("Functions/arguments", "arguments")}} オブジェクト) を <code>yield</code> することができます。</p>

<pre class="brush: js">function* g3() {
  yield* [1, 2];
  yield* '34';
  yield* Array.from(arguments);
}

const iterator = g3(5, 6);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "3", done: false}
console.log(iterator.next()); // {value: "4", done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
</pre>

<h3 id="The_value_of_yield*_expression_itself" name="The_value_of_yield*_expression_itself"><code>yield*</code> 式自体の値</h3>

<p><code>yield*</code> は式であり、文ではありません。そのため、値に評価されます。</p>

<pre class="brush: js">function* g4() {
  yield* [1, 2, 3];
  return 'foo';
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue) // 'foo'
  return g4ReturnValue;
}

const iterator = g5();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(iterator.next()); // {value: 'foo', done: true}
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
   <td>{{SpecName('ESDraft', '#sec-generator-function-definitions-runtime-semantics-evaluation', 'Yield')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.yield_star")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/The_Iterator_protocol">Iterator プロトコル</a></li>
 <li>{{jsxref("Statements/function*", "function*")}}</li>
 <li>{{jsxref("Operators/function*", "function* expression")}}</li>
 <li>{{jsxref("Operators/yield", "yield")}}</li>
</ul>
