---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/forEach
---
<div>{{JSRef}}</div>

<p><strong><code>forEach()</code></strong> メソッドは与えられた関数を、配列の各要素に対して一度ずつ実行します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-foreach.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.forEach(<var>callback(currentValue[, index[, array]]) {
</var>  // execute something
<var>}</var>[, <var>thisArg</var>]);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>各要素に対して実行するコールバック関数で、1 つから 3 つの引数を受け付けます。</dd>
 <dd>
 <dl>
  <dt><code><var>currentValue</var></code></dt>
  <dd>現在処理されている配列の要素です。</dd>
  <dt><code><var>index</var></code> {{optional_inline}}</dt>
  <dd>配列内の <code><var>currentValue</var></code> の添字です。</dd>
  <dt><code><var>array</var></code> {{optional_inline}}</dt>
  <dd><code>forEach()</code> が呼び出されている配列です。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd><code><var>callback</var></code> 内で <code>this</code> として使用する値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>forEach()</code> は、与えられた関数 <code><var>callback</var></code> を配列に含まれる各要素に対して一度ずつ、昇順で呼び出します。インデックスプロパティが削除されていたり、初期化されていなかったりした場合は呼び出されません。(疎らな配列については、<a href="#sparseArray">下記の例を参照</a>。)</p>

<p><code><var>callback</var></code> は次の 3 つの引数で呼び出されます。</p>

<ol>
 <li>要素の値</li>
 <li>要素のインデックス</li>
 <li>走査されている配列</li>
</ol>

<p><code>forEach()</code> に <code><var>thisArg</var></code> 引数が与えられると、<code><var>callback</var></code> の呼び出し時にそのオブジェクトが <code><var>thisArg</var></code> として使用されます。<code><var>callback</var></code> によって究極に管理される <code>this</code> の値は、<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">関数から見える <code>this</code> を特定する一般規則</a>に従います。</p>

<p><code>forEach()</code> によって処理される配列要素の範囲は、<code><var>callback</var></code> が最初に呼び出される前に設定されます。<code>forEach()</code> の呼び出しが開始された後に追加された配列要素に対しては、<code><var>callback</var></code> は実行されません。既存の配列要素が変更または削除された場合、<code><var>callback</var></code> に渡される値は <code>forEach()</code> がそれらを参照した時点での値になります。削除された配列要素を参照することはありません。既に参照された配列要素がイテレーションの間 (e.g. {{jsxref("Array.prototype.shift()", "shift()")}}を使用して) に削除された場合、後の要素は飛ばされます。(<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Modifying_the_array_during_iteration">下記の例を参照してください</a>。)</p>

<p><code>forEach()</code> は配列の各要素に対して <code><var>callback</var></code> 関数を一度ずつ実行します。{{jsxref("Array.prototype.map()", "map()")}} や {{jsxref("Array.prototype.reduce()", "reduce()")}} と異なり、返値は常に {{jsxref("undefined")}} であり、チェーンできません。チェーンの最後に副作用を生じさせるのが典型的な使用法です。</p>

<p><code>forEach()</code> は呼び出された配列を変化させません。(ただし <code><var>callback</var></code> が変化させる可能性があります)</p>

<div class="note">
<p>例外を発生する以外の方法で、<code>forEach()</code> ループを止めることはできません。ループ中に中断する必要がある場合、<code>forEach()</code> メソッドは適切な方法ではありません。</p>

<p>早期終了を行うには下記のような手段が適しています。</p>

<ul>
 <li>単純な <a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for</a> ループ</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a> / <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> ループ</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
</ul>

<p>他の Array のメソッドである {{jsxref("Array.prototype.every()", "every()")}}, {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}}, {{jsxref("Array.prototype.findIndex()", "findIndex()")}} は、配列の要素を検査する際、truthy の値を返すことで以降の繰り返しが必要であるかどうかを決めます。</p>
</div>

<div class="note">
<h4 id="forEach_expects_a_synchronous_function" name="forEach_expects_a_synchronous_function">forEach は同期関数を期待する</h4>
<code>forEach</code> はプロミスを待ちません。<code>forEach</code> のコールバックとしてプロミス (または非同期関数) を使用する場合は、その意味合いを理解しておくようにしてください。

<h5 id="Example_Code" name="Example_Code">コード例</h5>

<pre class="brush: js notranslate">let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
// 本来期待される出力: 14
// 実際の出力: 0
</pre>
</div>


<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>forEach()</code> は ECMA-262 規格の第 5 版で追加されたもので、この規格のすべての実装には存在しない可能性があります。これを回避するには、スクリプトの最初に以下のコードを挿入して、ネイティブにサポートされていない実装でも <code>forEach</code> を使用できるようにします。</p>

<p>このアルゴリズムは、{{jsxref("Object")}} と {{jsxref("TypeError")}} が元の値を持ち、<code><var>fun</var>.call</code> が {{jsxref("Function.prototype.call()")}} の元の値に評価されると仮定すると、ECMA-262 規格の第 5 版で指定されているものと全く同じです。</p>

<pre class="brush: js notranslate">// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18

if (!Array.prototype['forEach']) {

  Array.prototype.forEach = function(callback, thisArg) {

    if (this == null) { throw new TypeError('Array.prototype.forEach called on null or undefined'); }

    var T, k;
    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") { throw new TypeError(callback + ' is not a function'); }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length &gt; 1) { T = thisArg; }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k &lt; len
    while (k &lt; len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}</pre>






<h2 id="Examples" name="Examples">例</h2>

<h3 id="sparseArray" name="sparseArray">初期化されていない値については何もしない (疎らな配列)</h3>

<pre class="brush: js notranslate">const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach((element) =&gt; {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// 備考: 見ての通り、存在しない 3 から 7 までの値では、コールバック関数が呼び出されません。</pre>

<h3 id="Converting_a_for_loop_to_forEach" name="Converting_a_for_loop_to_forEach">for ループから forEach への変換</h3>

<pre class="brush:js notranslate">const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i &lt; items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})
</pre>

<h3 id="Printing_the_contents_of_an_array" name="Printing_the_contents_of_an_array">配列の内容の出力</h3>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 配列の内容をコンソールに表示するために、配列の整形済みのバージョンを表示する {{domxref("Console/table", "console.table()")}} を使用することができます。</p>

<p>以下の例では同じことを <code>forEach()</code> を使用して行う他の方法を説明しています。</p>
</div>

<p>次のコードは配列の要素ごとに、コンソールに 1 行ずつ要素の内容を出力します。</p>

<pre class="brush:js notranslate">function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

// 添字が 2 のものは、配列内のその位置にアイテムが存在しない
// ため、飛ばされていることに注意してください。
[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
</pre>

<h3 id="Using_thisArg" name="Using_thisArg">thisArg の使用</h3>

<p>以下の (不自然な) 例は、配列の中の各項目からオブジェクトのプロパティを更新します。</p>

<pre class="brush:js notranslate">function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach((entry) =&gt; {
    this.sum += entry
    ++this.count
  }, this)
  // ^---- Note
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16
</pre>

<p><code><var>thisArg</var></code> 引数 (<code>this</code>) が <code>forEach()</code> に提供されているため、<code><var>callback</var></code> の呼び出しのたびにこれが渡されます。コールバックはこれを <code>this</code> の値として使用します。</p>

<div class="note">
<p><strong>注:</strong> コールバック関数の受け渡しに<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数式</a>を使用した場合、<code><var>thisArg</var></code> 引数は、アロー関数が文法的に {{jsxref("Operators/this", "this")}} の値に結び付けられているため省略可能です。</p>
</div>

<h3 id="An_object_copy_function" name="An_object_copy_function">オブジェクトをコピーする関数</h3>

<p>次のコードは与えられたオブジェクトのコピーを生成します。</p>

<p>オブジェクトのコピーを生成するには他にもいくつか方法があります。次のものは一つの方法であり、<code>Array.prototype.forEach()</code> が ECMAScript 5 の <code>Object.*</code> メタプロパティ関数を使用することでどのように動作するかを説明するために示しているものです。</p>

<pre class="brush: js notranslate">function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach((name) =&gt; {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })

  return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1) // obj2 looks like obj1 now
</pre>

<h3 id="If_the_array_is_modified_during_iteration_other_elements_might_be_skipped." name="If_the_array_is_modified_during_iteration_other_elements_might_be_skipped.">配列が繰り返しの間に変更され、他の要素が飛ばされる場合</h3>

<p>次の例では <samp>one</samp>, <samp>two</samp>, <samp>four</samp> をログ出力します。</p>

<p>値 <code>two</code> を持つ項目に達した時、配列全体の最初の項目はシフトして外れ、すべての残りの項目が 1 つ上の位置に繰り上がります。<code>four</code> が配列の以前の位置に来るため、<code>three</code> が飛ばされます。</p>

<p><code>forEach()</code> は繰り返しの前に配列のコピーを生成しません。</p>

<pre class="brush:js notranslate">let words = ['one', 'two', 'three', 'four']
words.forEach((word) =&gt; {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})
// one
// two
// four
</pre>

<h3 id="Flatten_an_array" name="Flatten_an_array">配列の平板化</h3>

<p>次の例は学習目的だけのものです。内蔵メソッドを使用して配列を平板化したい場合は、{{jsxref("Array.prototype.flat()")}} を使用することができます (ES2019 の一部となる予定で、一部のブラウザーではすでに実装済み)。</p>

<pre class="brush: js notranslate">function flatten(arr) {
  const result = []

  arr.forEach((i) =&gt; {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })

  return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.forEach")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.filter()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Map.prototype.forEach()")}}</li>
 <li>{{jsxref("Set.prototype.forEach()")}}</li>
</ul>
