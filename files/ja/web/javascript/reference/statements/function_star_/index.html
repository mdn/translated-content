---
title: function* 宣言
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript 2015
  - Function
  - Iterator
  - JavaScript
  - Language feature
  - Statement
translation_of: Web/JavaScript/Reference/Statements/function*
---
<div>{{jsSidebar("Statements")}}</div>

<p><code><strong>function*</strong></code> 宣言 (<code>function</code> キーワードにアスタリスクが付いたもの) は、 {{jsxref("Global_Objects/Generator","Generator")}} オブジェクトを返すジェネレーター関数を定義します。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}</div>



<p>ジェネレーター関数は {{jsxref("GeneratorFunction")}} コンストラクターや、関数式の構文を使用して定義することもできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">function* <var>name</var>([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
 <dt><code><var>name</var></code></dt>
 <dd>関数名。</dd>
 <dt><code><var>param</var></code> {{optional_inline}}</dt>
 <dd>関数の形式上の引数の名前。</dd>
 <dt><code><var>statements</var></code></dt>
 <dd>関数の本体を構成する文。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>ジェネレーターは処理を抜け出したり、後から復帰したりすることができる関数です。ジェネレーターのコンテキスト (変数の値)は復帰しても保存されます。</p>

<p>JavaScript のジェネレータは、特にプロミスと組み合わせることで、非同期プログラミングのための非常に強力なツールとなり、 <a href="http://callbackhell.com/">Callback Hell</a> や <a href="https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/">Inversion of Control</a> などのようなコールバックの問題を、完全に解決できるわけではないものの、軽減することができます。しかし、これらの問題は{{jsxref("Statements/async_function", "非同期関数", "", 1)}}を使用すると、さらにシンプルに解決することができます。</p>

<p>ジェネレーター関数を呼び出しても関数はすぐには実行されません。代わりに、関数のための<a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols#iterator">イテレーター</a>オブジェクトが返されます。イテレーターの <code>next()</code> メソッドが呼び出されると、ジェネレーター関数の処理は、イテレーターから返された値を特定する最初の {{jsxref("Operators/yield", "yield")}} 演算子か、ほかのジェネレーター関数に委任する {{jsxref("Operators/yield*", "yield*")}} に達するまで実行されます。 <code>next()</code> メソッドは産出された値を含む <code>value</code> プロパティと、ジェネレーターが最後の値を持つかを真偽値で示す <code>done</code> プロパティを持つオブジェクトを返します。引数つきで<code>next()</code> を呼び出すと、ジェネレーター関数の実行が再開され、処理が停止していた <code>yield</code> 式を <code>next()</code> の引数で置き換えます。</p>

<p>ジェネレーターで <code>return</code> 文が実行されると、ジェネレーターが終了します (つまり、それによって返されたオブジェクトの <code>done</code> プロパティが <code>true</code> に設定されます)。値が返された場合、それはジェネレーターによって返されたオブジェクトの <code>value</code> プロパティとして設定されます。 <code>return</code> 文とよく似ていますが、ジェネレーターの内部でエラーが発生した場合は、ジェネレーターの本体の中でキャッチしない限り、ジェネレーターは終了します。<br>
 ジェネレーターが終了すると、それ以降の <code>next()</code> の呼び出しでは、そのジェネレーターのコードは実行されず、 <code>{value: undefined, done: true}</code> の形のオブジェクトが返されるだけです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Simple_example" name="Simple_example">単純な例</h3>

<pre class="brush: js notranslate">function* idMaker() {
  var index = 0;
  while (true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...</pre>

<h3 id="Example_with_yield*" name="Example_with_yield*">yield* を使用した例</h3>

<pre class="brush: js notranslate">function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
</pre>

<h3 id="Passing_arguments_into_Generators" name="Passing_arguments_into_Generators">ジェネレーターに引数を渡す</h3>

<pre class="brush: js notranslate">function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// 最初の next の呼び出しで、関数の最初から、
// 最初の yield 文の前まで実行される。
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
</pre>

<h3 id="Return_statement_in_a_generator" name="Return_statement_in_a_generator">ジェネレーターにおける return 文</h3>

<pre class="brush: js notranslate">function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Generator_as_an_object_property" name="Generator_as_an_object_property">オブジェクトプロパティとしてのジェネレーター</h3>

<pre class="brush: js notranslate">const someObj = {
  *generator () {
    yield 'a';
    yield 'b';
  }
}

const gen = someObj.generator()

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Generator_as_an_object_method" name="Generator_as_an_object_method">オブジェクトメソッドとしてのジェネレーター</h3>

<pre class="brush: js notranslate">class Foo {
  *generator () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo ();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Generator_as_a_computed_property" name="Generator_as_a_computed_property">計算プロパティとしてのジェネレーター</h3>

<pre class="brush: js notranslate">class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

console.log(Array.from(new Foo)); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
</pre>

<h3 id="Generators_are_not_constructable" name="Generators_are_not_constructable">ジェネレーターはコンストラクターではない</h3>

<pre class="brush: js notranslate">function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor
</pre>

<h3 id="Generator_defined_in_an_expression" name="Generator_defined_in_an_expression">式で定義されたジェネレーター</h3>

<pre class="brush: js notranslate">const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}</pre>

<h3 id="Generator_example" name="Generator_example">ジェネレーターの例</h3>

<pre class="syntaxbox notranslate">function* powers(n){
     //endless loop to generate
     for(let current =n;; current *= n){
         yield current;
     }
}

for(let power of powers(2)){
     //controlling generator
     if(power &gt; 32) break;
     console.log(power)
           //2
          //4
         //8
        //16
       //32
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.statements.generator_function")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Operators/function*", "function* 式")}}</li>
 <li>{{jsxref("GeneratorFunction")}} オブジェクト</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">反復プロトコル</a></li>
 <li>{{jsxref("Operators/yield", "yield")}}</li>
 <li>{{jsxref("Operators/yield*", "yield*")}}</li>
 <li>{{jsxref("Function")}} オブジェクト</li>
 <li>{{jsxref("Statements/function", "function")}} 宣言</li>
 <li>{{jsxref("Operators/function", "function")}} 式</li>
 <li>{{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}</li>
 <li>その他のウェブリソース:
  <ul>
   <li><a href="http://facebook.github.io/regenerator/">Regenerator</a> an ES2015 generator compiler to ES5</li>
   <li><a href="http://www.youtube.com/watch?v=qbKWsbJ76-s">Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013</a></li>
   <li><a href="https://github.com/mozilla/task.js">Task.js</a></li>
   <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iterating-generators-asynchronously">Iterating generators asynchronously</a></li>
  </ul>
 </li>
</ul>
