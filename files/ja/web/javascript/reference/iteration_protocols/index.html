---
title: 反復処理プロトコル
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - ECMAScript 2015
  - Intermediate
  - Iterable
  - Iterator
  - JavaScript
  - ガイド
  - プロトコル
  - 中級者
  - 反復処理
  - 反復子
translation_of: Web/JavaScript/Reference/Iteration_protocols
---
<div>{{jsSidebar("More")}}</div>

<p>ECMAScript 2015 で追加されたいくつかの機能の中で、<strong>反復処理プロトコル</strong>は新しい組み込みオブジェクトや構文ではなく<em>プロトコル</em>です。これらのプロトコルは以下のような単純な約束事によって、すべてのオブジェクトで実装することができます。</p>

<p>プロトコルは2つあります。 <a href="#The_iterable_protocol">反復可能プロトコル</a>と <a href="#The_iterator_protocol">反復子プロトコル</a>です。</p>

<h2 id="The_iterable_protocol" name="The_iterable_protocol">反復可能 (iterable) プロトコル</h2>

<p><strong>反復可能プロトコル</strong>によって、 JavaScript のオブジェクトは反復動作を定義またはカスタマイズすることができます。例えば、 {{jsxref("Statements/for...of", "for...of")}} 構造の中でどの値がループに使われるかです。一部の組み込み型は既定の反復動作を持つ<a href="#Built-in_iterables">組み込み反復可能オブジェクト</a>で、これには {{jsxref("Array")}} や {{jsxref("Map")}} がありますが、他の型 ({{jsxref("Object")}} など) はそうではありません。</p>

<p><strong>反復可能</strong>であるために、オブジェクトは <code><strong>@@iterator</strong></code> メソッドを実装する必要があります。これはつまり、オブジェクト (または、<a href="/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">プロトタイプチェーン</a>上のオブジェクトの一つ) が {{jsxref("Symbol.iterator")}} 定数にて利用できる <code>@@iterator</code> キーのプロパティを持つ必要があります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">プロパティ</th>
   <th scope="col">値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[Symbol.iterator]</code></td>
   <td><a href="#The_iterator_protocol">反復子プロトコル</a>に準拠するオブジェクトを返す、引数なしの関数。</td>
  </tr>
 </tbody>
</table>

<p>({{jsxref("Statements/for...of", "for...of")}} ループの始まりのように) オブジェクトが反復される必要があるときはいつでも、その <code>@@iterator</code> メソッドが引数なしで呼ばれます。そして、返される<strong>反復子</strong>は、反復される値を取得するために使用されます。</p>

<p>なお、この引数なしの関数が呼び出されると、反復可能オブジェクト上のメソッドとして呼び出されます。従って関数の中では、 <code>this</code> キーワードを反復可能オブジェクトのプロパティにアクセスするために使用して、反復の間に何を提供するかを決めることができます。</p>

<p>この関数は普通の関数、またはジェネレーター関数にすることができ、そのため呼び出されると、反復子オブジェクトが返されます。このジェネレーター関数の中では <code>yield</code> を使用してそれぞれの項目を提供することができます。</p>

<h2 id="The_iterator_protocol" name="The_iterator_protocol">反復子 (iterator) プロトコル</h2>

<p><strong>反復子プロトコル</strong>は、値のシーケンス (有限でも無限でも) を生成するための標準的な方法と、すべての値が生成された場合の返値を定義します。</p>

<p>以下の意味で <code><strong>next()</strong></code> メソッドを実装していれば、オブジェクトは反復子になります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">プロパティ</th>
   <th scope="col">値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>next()</code></td>
   <td>
    <p>引数なしの関数で、少なくとも以下の二つのプロパティを持つオブジェクトを返します。</p>

    <dl>
     <dt><code>done</code> (boolean)</dt>
     <dd>
     <p>反復子がシーケンス内の次の値を生成できるとき <code>false</code> の値になります。 (これは <code>done</code> プロパティが指定されていない場合も同じです。)</p>

     <p>反復子が反復シーケンスを終了した場合、 <code>true</code> の値になります。この場合、 <code>value</code> は任意で反復子の返値を指定します。</p>
     </dd>
     <dt><code>value</code></dt>
     <dd>反復子によって返される任意の JavaScript 値。 <code>done</code> が <code>true</code> のときは省略することができます。</dd>
    </dl>

    <p><code>next()</code> メソッドは常に <code>done</code> や <code>value</code> などの適切なプロパティを持つオブジェクトを返します。オブジェクトでない値が返された場合 (例えば <code>false</code> や <code>undefined</code>)、 {{jsxref("TypeError")}} (<code>"iterator.next() returned a non-object value"</code>) が発生します。</p>
   </td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>メモ:</strong> 特定のオブジェクトが反復子プロトコルを実装しているかどうかを反射的に知ることはできません。しかし、反復子プロトコルと反復可能プロトコルの<em>両方</em>を満たすオブジェクトを作成するのは簡単です (以下の例にあるように)。</p>

<p>そうすることで、反復可能オブジェクトを期待するさまざまな構文で反復子を使用できます。したがって、反復子プロトコルを実装するには反復可能プロトコルも実装しないと、ほとんど役に立ちません。</p>

<pre class="brush: js example-good">// 反復子と反復可能の両プロトコルを満たす
let myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this; }
};
</pre>
</div>

<h2 id="Examples_using_the_iteration_protocols" name="Examples_using_the_iteration_protocols">例: 反復処理プロトコルの使用</h2>

<p>{{jsxref("String")}} は組み込み反復可能オブジェクトの一例です。</p>

<pre class="brush: js">let someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // "function"
</pre>

<p><code>String</code> の{{jsxref("String/@@iterator", "既定の反復子", "", 1)}}は文字列のコードポイントを1つずつ返します。</p>

<pre class="brush: js">let iterator = someString[Symbol.iterator]();
console.log(iterator + ''); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }</pre>

<p>一部の組み込みコンストラクター — 例えば{{jsxref("Operators/Spread_operator", "スプレッド構文", "", 1)}} — は、まったく同じ反復処理プロトコルを使用しています。</p>

<pre class="brush: js">console.log([...someString]); // ["h", "i"]</pre>

<p>自身の <code>@@iterator</code> を提供することによって反復動作を再定義できます。:</p>

<pre class="brush: js">// need to construct a String object explicitly to avoid auto-boxing
let someString = new String('hi');

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next: function () {
      return this._first ? {
        value: 'bye',
        done: (this._first = false)
      } : {
        done: true
      }
    },
    _first: true
  };
};
</pre>

<p><code>@@iterator</code> を再定義することによって、反復処理プロトコルを使用する組み込みコンストラクターの動作にどれほど影響を与えるか注意してください。</p>

<pre class="brush: js">console.log([...someString]); // ["bye"]
console.log(someString + ''); // "hi"
</pre>

<h2 id="Iterable_examples" name="Iterable_examples">反復可能プロトコルの例</h2>

<h3 id="Built-in_iterables" name="Built-in_iterables">組み込み反復可能オブジェクト</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} は、すべての組み込み反復可能オブジェクトです。というのも、それらすべてのプロトタイプオブジェクトは <code>@@iterator</code> メソッドをもつからです。</p>

<h3 id="User-defined_iterables" name="User-defined_iterables">ユーザー定義の反復可能オブジェクト</h3>

<p>下記のように反復可能オブジェクトを生成できます。</p>

<pre class="brush: js">let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]
</pre>

<h3 id="Built-in_APIs_accepting_iterables" name="Built-in_APIs_accepting_iterables">反復可能オブジェクトを受け入れる組み込み API</h3>

<p>反復可能オブジェクトを受け入れる API はたくさんあります。以下はその例です。</p>

<ul>
 <li>{{jsxref("Map", "new Map([<var>iterable</var>])")}}</li>
 <li>{{jsxref("WeakMap", "new WeakMap([<var>iterable</var>])")}}</li>
 <li>{{jsxref("Set", "new Set([<var>iterable</var>])")}}</li>
 <li>{{jsxref("WeakSet", "new WeakSet([<var>iterable</var>])")}}</li>
</ul>

<pre class="brush: js">new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"

let myObj = {};

new WeakMap([
    [{}, 'a'],
    [myObj, 'b'],
    [{}, 'c']
]).get(myObj);             // "b"

new Set([1, 2, 3]).has(3); // true
new Set('123').has('2');   // true

new WeakSet(function* () {
    yield {}
    yield myObj
    yield {}
}()).has(myObj);           // true
</pre>

<h4 id="See_Also" name="See_Also">関連情報</h4>

<ul>
 <li>{{jsxref("Promise.all()", "Promise.all(<var>iterable</var>)")}}</li>
 <li>{{jsxref("Promise.race()", "Promise.race(<var>iterable</var>)")}}</li>
 <li>{{jsxref("Array.from()", "Array.from(<var>iterable</var>)")}}</li>
</ul>

<h3 id="Syntaxes_expecting_iterables" name="Syntaxes_expecting_iterables">反復可能オブジェクトを期待する構文</h3>

<p>いくつかの文や式は反復可能オブジェクトを期待します。例えば、 {{jsxref("Statements/for...of", "for...of")}} ループ、{{jsxref("Operators/Spread_syntax", "スプレッド演算子", "", "1")}}、{{jsxref("Operators/yield*", "yield*")}}、{{jsxref("Operators/Destructuring_assignment", "分割代入", "", "1")}} などです。</p>

<pre class="brush: js">for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

console.log([...'abc']);   // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
console.log(a);            // "a"

</pre>

<h3 id="Non-well-formed_iterables" name="Non-well-formed_iterables">非整形反復可能オブジェクト</h3>

<p>反復可能オブジェクトの <code>@@iterator</code> メソッドが反復子オブジェクトを返さない場合、それは<em>非整形</em>反復可能オブジェクトと見なされます。</p>

<p>これを使用すると、ランタイムエラーやバグの挙動をもたらす可能性があります。</p>

<pre class="brush: js example-bad">let nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function
</pre>

<h2 id="Iterator_examples" name="Iterator_examples">反復子の例</h2>

<h3 id="Simple_iterator" name="Simple_iterator">簡単な反復子</h3>

<pre class="brush: js">function makeIterator(array) {
  let nextIndex = 0
  return {
    next: function() {
      return nextIndex &lt; array.length ? {
        value: array[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}

let it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
</pre>

<h3 id="Infinite_iterator" name="Infinite_iterator">無限の反復子</h3>

<pre class="brush: js">function idMaker() {
  let index = 0;
  return {
    next: function() {
      return {
        value: index++,
        done: false
      };
    }
  };
}

let it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
</pre>

<h3 id="With_a_generator" name="With_a_generator">ジェネレーターで</h3>

<pre class="brush: js">function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex &lt; array.length) {
    yield array[nextIndex++];
  }
}

let gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let gen = idMaker()

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
</pre>

<h3 id="With_ES2015_class" name="With_ES2015_class">ES2015 クラスで</h3>

<pre class="brush: js">class SimpleClass {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      next: () =&gt; {
        if (index &lt; this.data.length) {
          return {value: this.data[index++], done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val); // '1' '2' '3' '4' '5'
}
</pre>

<h2 id="Is_a_generator_object_an_iterator_or_an_iterable" name="Is_a_generator_object_an_iterator_or_an_iterable">ジェネレーターは反復子か反復可能か</h2>

<p>{{jsxref("Generator", "ジェネレーターオブジェクト", "", 1)}} は、反復子でも反復可能でもあります。</p>

<pre class="brush: js">let aGeneratorObject = function* () {
  yield 1;
  yield 2;
  yield 3;
}();

console.log(typeof aGeneratorObject.next);
// "function", because it has a next method, so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function", because it has an @@iterator method, so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable

console.log([...aGeneratorObject]);
// [1, 2, 3]
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
   <td>{{SpecName('ESDraft', '#sec-iteration', 'Iteration')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>ES2015 のジェネレーターの詳細については、<br>
  {{jsxref("Statements/function*", "<code>function*</code> のドキュメント", "", 1)}}を参照してください。</li>
</ul>
