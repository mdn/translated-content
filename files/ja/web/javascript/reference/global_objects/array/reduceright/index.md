---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
---
<div>{{JSRef}}</div>

<p><code><strong>reduceRight()</strong></code> メソッドは、隣り合う 2 つの配列要素に対して (右から左へ) 関数を適用して、単一の値にします。</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce-right.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>左から右へ適用する際は {{jsxref("Array.prototype.reduce()")}} を参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.reduceRight(<var>callback</var>(<var>accumulator</var>, <var>currentValue</var>[, <var>index</var>[, <var>array</var>]])[, <var>initialValue</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>4 つの引数を取って、配列内の各値に対し実行するコールバック関数
 <dl>
  <dt><code><var>accumulator</var></code></dt>
  <dd>現在処理されている配列要素の 1 つ前の要素。もしくは、指定されていれば <code><var>initialValue</var></code>。(下記参照)</dd>
  <dt><code><var>currentValue</var></code></dt>
  <dd>現在処理されている配列要素</dd>
  <dt><code><var>index</var></code>{{optional_inline}}</dt>
  <dd>現在処理されている配列要素のインデックス</dd>
  <dt><code><var>array</var></code>{{optional_inline}}</dt>
  <dd><code>reduceRight()</code> によって呼ばれる配列</dd>
 </dl>
 </dd>
 <dt><code><var>initialValue</var></code> {{optional_inline}}</dt>
 <dd><code><var>callback</var></code> の最初の呼び出しのときに、最初の実引数として用いるためのオブジェクト。initialValue が渡されなかった際は、配列の最後の要素が適用されます。また、空の配列に対して、初期値なしで呼び出すと <code>TypeError</code> になります。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>畳み込みによって得られた 1 つの値です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>reduceRight</code> は、配列に存在する各要素に対して、<code>callback</code> 関数を一度だけ実行します。配列における穴は対象からはずされ、初期値（あるいは、直前の <code>callback</code> 呼び出し）、現在の要素の値、現在のインデックス、繰り返しが行われる配列の 4 つの引数を受け取ります。</p>

<p>reduceRight の <code><var>callback</var></code> の呼び出しは、以下のように見えるでしょう。</p>

<pre class="brush: js notranslate">array.reduceRight(function(accumulator, currentValue, index, array) {
  // ...
});
</pre>

<p>関数が初めて呼び出されたとき、<code><var>accumulator</var></code> と <code><var>currentValue</var></code> は、2 つの値のいずれかになります。<code>reduceRight</code> の呼び出しで <code><var>initialValue</var></code> が指定された場合、<code><var>accumulator</var></code> は <code><var>initialValue</var></code> と等しくなり、<code><var>currentValue</var></code> は配列の最後の値と等しくなります。<code><var>initialValue</var></code> が指定されなかった場合、<code><var>accumulator</var></code> は配列の最後の値に等しく、<code><var>currentValue</var></code> は最後から 2 番目の値に等しくなります。</p>

<p>配列が空で、<code><var>initialValue</var></code> が指定されていない場合、{{jsxref("TypeError")}} が投げられます。配列に要素が 1 つしかなく（位置に関係なく）、<code><var>initialValue</var></code> が指定されていない場合、または <code><var>initialValue</var></code> が指定されているが配列が空の場合、<code><var>callback</var></code> を呼び出さずに単独の値が返されます。</p>

<p>この関数を使用した場合について見てみましょう。</p>

<pre class="brush: js notranslate">[0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
</pre>

<p>コールバックは 4 回呼び出され、各コールの引数と戻り値は以下のようになります。</p>

<table>
 <thead>
  <tr>
   <th scope="col"><code><var>callback</var></code></th>
   <th scope="col"><code><var>accumulator</var></code></th>
   <th scope="col"><code><var>currentValue</var></code></th>
   <th scope="col"><code><var>index</var></code></th>
   <th scope="col"><code><var>array</var></code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">初回の呼出し</th>
   <td><code>4</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>7</code></td>
  </tr>
  <tr>
   <th scope="row">2 回目の呼出し</th>
   <td><code>7</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>9</code></td>
  </tr>
  <tr>
   <th scope="row">3 回目の呼出し</th>
   <td><code>9</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th scope="row">4 回目の呼出し</th>
   <td><code>10</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p><code>reduceRight</code> の返値は、コールバック呼び出しの最後の返値である (<code>10</code>) になります。</p>

<p><code>initialValue</code> を与えた場合、その結果は以下のようになります。</p>

<pre class="brush: js notranslate">[0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10);
</pre>

<table>
 <thead>
  <tr>
   <th scope="col"><code><var>callback</var></code></th>
   <th scope="col"><code><var>accumulator</var></code></th>
   <th scope="col"><code><var>currentValue</var></code></th>
   <th scope="col"><code><var>index</var></code></th>
   <th scope="col"><code><var>array</var></code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">初回の呼出し</th>
   <td><code>10</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>14</code></td>
  </tr>
  <tr>
   <th scope="row">2 回目の呼出し</th>
   <td><code>14</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>17</code></td>
  </tr>
  <tr>
   <th scope="row">3 回目の呼出し</th>
   <td><code>17</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>19</code></td>
  </tr>
  <tr>
   <th scope="row">4 回目の呼出し</th>
   <td><code>19</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
  <tr>
   <th scope="row">5 回目の呼出し</th>
   <td><code>20</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>この場合の <code>reduceRight</code> の返値は <code>20</code> になります。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>reduceRight</code> は ECMA-262 の第5版に追加されたもので、すべての実装には存在しない可能性があります。これを回避するには、スクリプトの最初に次のコードを挿入して、ネイティブにはサポートされていない実装でも <code>reduceRight</code> を使用できるようにします。</p>

<pre class="brush: js notranslate">// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length &gt;&gt;&gt; 0, k = len - 1, value;
    if (arguments.length &gt;= 2) {
      value = arguments[1];
    } else {
      while (k &gt;= 0 &amp;&amp; !(k in t)) {
        k--;
      }
      if (k &lt; 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k &gt;= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Sum_up_all_values_within_an_array" name="Sum_up_all_values_within_an_array">配列内のすべての値を合計する</h3>

<pre class="brush: js notranslate">var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// sum is 6
</pre>

<h3 id="Flatten_an_array_of_arrays" name="Flatten_an_array_of_arrays">配列中の配列を平坦化する</h3>

<pre class="brush: js notranslate">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

</pre>

<h3 id="Run_a_list_of_asynchronous_functions_with_callbacks_in_series_each_passing_their_results_to_the_next" name="Run_a_list_of_asynchronous_functions_with_callbacks_in_series_each_passing_their_results_to_the_next">一連のコールバックを使用して非同期関数のリストを実行し、それぞれの結果を次のコールバックに渡す</h3>

<pre class="brush: js notranslate">const waterfall = (...functions) =&gt; (callback, ...args) =&gt;
  functions.reduceRight(
    (composition, fn) =&gt; (...results) =&gt; fn(composition, ...results),
    callback
  )(...args);

const randInt = max =&gt; Math.floor(Math.random() * max)

const add5 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) =&gt; {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5) // -&gt; 14

// same as:

const computation2 = (input, callback) =&gt; {
  const f6 = x=&gt; div4(callback, x);
  const f5 = (x, y) =&gt; add(f6, x, y);
  const f4 = x =&gt; split(f5, x);
  const f3 = x =&gt; sub2(f4, x);
  const f2 = x =&gt; mult3(f3, x);
  add5(f2, input);
}</pre>

<h3 id="Difference_between_reduce_and_reduceRight" name="Difference_between_reduce_and_reduceRight"><code>reduce</code> と <code>reduceRight</code> の違い</h3>

<pre class="brush: js notranslate">var a = ['1', '2', '3', '4', '5'];
var left  = a.reduce(function(prev, cur)      { return prev + cur; });
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"</pre>

<h3 id="Defining_Composible_Function" name="Defining_Composible_Function">関数合計の定義</h3>

<p>関数合成のコンセプトはシンプルで、n個の関数を組み合わせたものです。これは右から左へと流れ、最後の関数の出力を使用して各関数を呼び出します。</p>

<pre class="brush: js notranslate">/**
 * Function Composition is way in which result of one function can
 * be passed to another and so on.
 *
 * h(x) = f(g(x))
 *
 * Function execution happens right to left
 *
 * https://en.wikipedia.org/wiki/Function_composition
 */

const compose = (...args) =&gt; (value) =&gt; args.reduceRight((acc, fn) =&gt; fn(acc), value)

// Increment passed number
const inc = (n) =&gt; n + 1

// Doubles the passed value
const double = (n) =&gt; n * 2

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.reduceRight")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
