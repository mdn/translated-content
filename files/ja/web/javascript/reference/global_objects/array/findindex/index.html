---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
tags:
  - Array
  - ECMAScript2015
  - JavaScript
  - Method
  - Prototype
  - polyfill
  - メソッド
  - 配列
translation_of: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><code><strong>findIndex()</strong></code> メソッドは、配列内の<strong>指定されたテスト関数を満たす</strong>最初の要素の<strong>位置</strong>を返します。テスト関数を満たす要素がない場合を含め、それ以外の場合は <code>-1</code> を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>{{jsxref("Array.find", "find()")}} メソッドも参照してください。このメソッドは、配列内で見つかった要素の位置ではなく、<strong>値</strong> を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>arr</var>.findIndex(<var>callback</var>( <var>element</var>[, <var>index</var>[, <var>array</var>]] )[, <var>thisArg</var>])
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>
 <p>配列内のそれぞれの値に対して実行される関数で、条件を満たす要素が発見されたことを示す <code>true</code> が返るまで続けられます。</p>

 <p>３つの引数を取ります。</p>

 <dl>
  <dt><code><var>element</var></code></dt>
  <dd>配列内で現在処理されている要素。</dd>
  <dt><code><var>index</var></code> {{optional_inline}}</dt>
  <dd>配列内で現在処理されている要素の位置。</dd>
  <dt><code><var>array</var></code> {{optional_inline}}</dt>
  <dd><code>findIndex()</code> を呼び出した元の配列。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd>任意で、 <code><var>callback</var></code> を実行する時に <code>this</code> として使うオブジェクト。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>テストを満たした配列の要素の位置を返します。それ以外の場合は、 <code>-1</code> を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>findIndex()</code> メソッドは、配列のそれぞれの位置に対して <code><var>callback</var></code> を１回ずつ呼び出し、 <code><var>callback</var></code> が{{Glossary("truthy", "真値")}}を返すものを見つけるまで繰り返します。</p>

<p>そのような要素が見つかると、 <code>findIndex()</code> はすぐにその要素の位置を返します。 <code><var>callback</var></code> が真値を返すと (または配列の <code>length</code> が <code>0</code> であると)、 <code>findIndex()</code> は <code>-1</code> を返します。</p>

<div class="blockIndicator note">
<p><strong>極端な場合の警告:</strong> {{jsxref("Array.some()")}} などの他の配列メソッドとは異なり、 <code><var>callback</var></code> は値が割り当てられていない位置でも実行されます。</p>
</div>

<p><code><var>callback</var></code> は３つの引数で呼び出されます。</p>

<ol>
 <li>その要素の値</li>
 <li>その要素の位置</li>
 <li>走査されている配列オブジェクト</li>
</ol>

<p><code>findIndex</code> に <code>thisArg</code> 引数を与えた場合、各 <code>callback</code> の呼び出し時に、その与えたオブジェクトが、<code>this</code> として使用されます。この引数を省略した場合、<code>this</code> は {{jsxref("undefined")}} になります。</p>

<p><code>findIndex()</code> で処理される要素の範囲は、 <code><var>callback</var></code> が最初に呼び出される前に設定されます。 <code><var>callback</var></code> は最初の <code>findIndex()</code> の呼び出し以降に配列に追加された要素は処理しません。配列内で未処理の既存の要素が <code><var>callback</var></code> によって変更された場合、 <code><var>callback</var></code> へ渡される値は <code>findIndex()</code> がその要素の位置を処理する時点での値になります。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/delete">削除</a>された値も処理対象になります。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}
</pre>

<p>もし、本当に {{jsxref("Object.defineProperty")}} に対応していない古い JavaScript エンジンに対応する必要があるのであれば、 <code>Array.prototype</code> メソッドに対してポリフィルを使用しないようにしないと、これらを列挙不可能にすることができません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Find_the_index_of_a_prime_number_in_an_array" name="Find_the_index_of_a_prime_number_in_an_array">配列内の素数の位置を検索する</h3>

<p>次の例では、配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は <code>-1</code> を返します。</p>

<pre class="brush: js">function isPrime(num) {
  for (let i = 2; num &gt; i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num &gt; 1;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
</pre>

<h3 id="Find_index_using_arrow_function" name="Find_index_using_arrow_function">アロー関数を使用して位置を検索する</h3>

<p>次の例では、アロー関数を使用してフルーツの位置を検索しています。</p>

<pre class="brush: js">const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit =&gt; fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.findindex', 'Array.prototype.findIndex')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.findIndex")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
