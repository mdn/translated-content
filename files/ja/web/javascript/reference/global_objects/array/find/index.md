---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/find
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><code><strong>find()</strong></code> メソッドは、提供されたテスト関数を満たす配列内の <strong>最初の要素</strong> の <strong>値</strong> を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-find.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<ul>
 <li>配列内で見つかった要素の<strong>添字</strong>が必要な場合は、{{jsxref("Array.findIndex", "findIndex()")}} を使用してください。</li>
 <li><strong>値の添字</strong>を検索する必要がある場合は、{{jsxref("Array.prototype.indexOf()")}} を使用してください。({{jsxref("Array.findIndex", "findIndex()")}} と似ていますが、それぞれの要素の等価性はテスト関数ではなく値でチェックします。)</li>
 <li>配列内に値が<strong>存在する</strong>かどうかを調べる必要がある場合は、{{jsxref("Array.prototype.includes()")}} を使用してください。</li>
 <li>指定したテスト関数を満たす要素があるかどうかを調べる必要がある場合は、{{jsxref("Array.prototype.some()")}} を使用してください。</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.find(<var>callback(element[, index[, array]])</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>配列内の各要素に対して実行する関数で、次の 3 つの引数を取ります。
 <dl>
  <dt><code><var>element</var></code></dt>
  <dd>配列内で現在処理されている要素です。</dd>
  <dt><code><var>index</var></code> {{optional_inline}}</dt>
  <dd>配列内で現在処理されている要素の添字 (位置) です。</dd>
  <dt><code><var>array</var></code> {{optional_inline}}</dt>
  <dd><code>find</code> を呼び出した元の配列です。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd><code><var>callback</var></code> 内で {{jsxref("Operators/this", "this")}} として使われるオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>配列の中で、提供されたテスト関数を満足する<strong>最初の要素</strong>の<strong>値</strong>です。見つからなかった場合は {{jsxref("undefined")}} を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>find</code> メソッドは、配列のそれぞれの添字に対して一度ずつ、<code><var>callback</var></code> 関数を実行し、<code><var>callback</var></code> 関数が {{glossary("truthy")}} な値を返すまで繰り返します。その場合、<code>find</code> は直ちにその要素の値を返します。そうでなければ、<code>find</code> は {{jsxref("undefined")}} を返します。</p>

<p><code><var>callback</var></code> は、値が割り当てられているものに限らず、配列中の<em>すべて</em>の添字に対して呼び出されます。すなわち、疎配列では値が割り当てられているもののみを呼び出すメソッドに比べて効率的ではないことを意味します。</p>

<p><code><var>thisArg</var></code> 引数が <code>find</code> に与えられた場合、<code><var>callback</var></code> の呼び出しのたびに、その内部で <code>this</code> 値として使用されます。この引数を省略した場合は {{jsxref("undefined")}} が使用されます。</p>

<p><code>find</code> は、呼び出した配列を変更 (mutate) しませんが、<code><var>callback</var></code> で提供された関数は変更する可能性があります。その場合、<code>find</code> によって処理される各要素は、最初に <code><var>callback</var></code> が呼び出される<em>前に</em>設定されます。したがって、</p>

<ul>
 <li><code><var>callback</var></code> は <code>find</code> の呼び出しが始まった後に追加された要素に対しては実行されません。</li>
 <li>配列の、既存のまだ呼び出していない要素が <code><var>callback</var></code> によって変更された場合、<code><var>callback</var></code> に渡される値は <code>find</code> がその要素の添字を処理した時点での値になります。</li>
 <li>{{jsxref("delete", "削除")}}された要素も処理されます。</li>
</ul>


<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>このメソッドは、ECMAScript 2015 仕様書で追加されたものであり、すべての JavaScript 実装環境で使用できるとは限りません。しかし、<code>Array.prototype.find</code> のポリフィルを以下のスニペットで使用できます。</p>

<pre class="brush: js notranslate">// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
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
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
</pre>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code> に対応していない、本当に古い JavaScript エンジンに対応する必要がある場合は、列挙不可に設定することができないため、<code>Array.prototype</code> のポリフィルをまったく使用しないのが最善です。</p>


<h2 id="Examples" name="Examples">例</h2>

<h3 id="Find_an_object_in_an_array_by_one_of_its_properties" name="Find_an_object_in_an_array_by_one_of_its_properties">配列内のオブジェクトをプロパティの一つで検索</h3>

<pre class="brush: js notranslate">const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }</pre>

<h4 id="Using_arrow_function_and_destructuring" name="Using_arrow_function_and_destructuring">アロー関数と分割の使用</h4>

<pre class="brush: js notranslate">const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) =&gt; name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }</pre>

<h3 id="Find_a_prime_number_in_an_array" name="Find_a_prime_number_in_an_array">配列内の素数の検索</h3>

<p>次の例は、配列内の素数を探します (配列内に素数が見つからない場合は {{jsxref("undefined")}} を返します)。</p>

<pre class="brush: js notranslate">function isPrime(element, index, array) {
  let start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, 見つからない
console.log([4, 5, 8, 12].find(isPrime)); // 5
</pre>

<p>以下の例は存在せず削除された要素が処理<em>される</em>こと、コールバックに渡される値が処理時点での値であることを示しています。</p>

<pre class="brush: js notranslate">// 添字が 2, 3, 4 の位置に要素がない配列を宣言
const array = [0,1,,,,5,6];

// 値が割り当てられているものに限らず、すべての添字を表示
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// 削除されたものを含め、すべての添字を表示
array.find(function(value, index) {
  // 初回で要素 5 を削除
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // 要素 5 は削除されても処理される
  console.log('Visited index ', index, ' with value ', value);
});
// 期待される出力:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.find', 'Array.prototype.find')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Array.find")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.findIndex()")}} – インデックスを見つけて返す</li>
 <li>{{jsxref("Array.prototype.includes()")}} – 配列内に値が存在するかどうかをテストする</li>
 <li>{{jsxref("Array.prototype.filter()")}} – マッチしない要素をすべて削除する</li>
 <li>{{jsxref("Array.prototype.every()")}} – すべての要素をテストする</li>
 <li>{{jsxref("Array.prototype.some()")}} – 1つの要素が一致するまでテストする</li>
</ul>
