---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/race
---
<div>{{JSRef}}</div>

<p><code><strong>Promise.race()</strong></code> メソッドは、反復可能オブジェクトの中の Promise のうちの1つが解決または拒否するとすぐに、その Promise の値または理由で解決または拒否する Promise を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Promise.race(<var>iterable</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>{{jsxref("Array")}} のような反復可能なオブジェクト。 <a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable</a> を確認してください。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><strong>待ち状態の</strong> {{jsxref("Promise")}} で、反復可能オブジェクトの中で最初に解決または拒否した Promise の値を<strong>非同期に</strong>産出します。</p>

<h2 id="Description" name="Description">説明</h2>

<p><code>race</code> 関数は、引数として渡された反復可能オブジェクトの中にある複数の Promise の中で解決する最初の Promise と同じ方法で解決される (同じ値を取る) Promise を返します。</p>

<p>渡された反復可能オブジェクトが空の場合、返される Promise はずっと待ち状態のままです。</p>

<p>反復可能オブジェクトに1つ以上の Promise 以外の値やすでに解決済みの Promise が含まれていた場合、 <code>Promise.race</code> は反復可能オブジェクトの中で見つけたこれらの値の内の最初の一つで解決します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Asynchronicity_of_Promise.race" name="Asynchronicity_of_Promise.race">Promise.race の非同期性</h3>

<p>以下の例は、 <code>Promise.race</code> の非同期性を示しています。</p>

<pre class="brush: js notranslate">// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: 33 }</pre>

<p>空の反復可能オブジェクトを渡すと、無限に解決しない Promise が返されます。</p>

<pre class="brush: js notranslate">var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(foreverPendingPromise);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "pending" }
</pre>

<p>反復可能オブジェクトの中に1つ以上の Promise 以外の値や、すでに解決した Promise が含まれていると、 <code>Promise.race</code> は配列の中で見つかった最初のこれらの値で解決します。</p>

<pre class="brush: js notranslate">var foreverPendingPromise = Promise.race([]);
var alreadyFulfilledProm = Promise.resolve(100);

var arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
    console.log(p2);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: 100 }
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: "non-Promise value" }
</pre>

<h3 id="Promise.race_の使用_–_setTimeout_を使用した例">Promise.race の使用 – setTimeout を使用した例</h3>

<pre class="brush: js notranslate">var p1 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('one'), 500);
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('two'), 100);
});

Promise.race([p1, p2])
.then(function(value) {
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('three'), 100);
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; reject(new Error('four')), 500);
});

Promise.race([p3, p4])
.then(function(value) {
  console.log(value); // "three"
  // p3 is faster, so it fulfills
}, function(reason) {
  // Not called
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('five'), 500);
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; reject(new Error('six')), 100);
});

Promise.race([p5, p6])
.then(function(value) {
  // Not called
}, function(error) {
  console.log(error.message); // "six"
  // p6 is faster, so it rejects
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
   <td>{{SpecName('ESDraft', '#sec-promise.race', 'Promise.race')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Promise.race")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.all()")}}</li>
</ul>
