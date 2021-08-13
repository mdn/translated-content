---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
tags:
  - ECMAScript 2015
  - Generators
  - Iterator
  - JavaScript
  - Language feature
  - Operator
browser-compat: javascript.operators.yield
translation_of: Web/JavaScript/Reference/Operators/yield
---
<div>{{jsSidebar("Operators")}}</div>

<p><code>yield</code> キーワードは、ジェネレーター関数 ({{jsxref("Statements/function*", "function*")}} または<a href="/ja/docs/Archive/Web/JavaScript/Legacy_generator_function_statement">古いジェネレーター関数</a>) を一時停止したり再開したりするために使用します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}</div>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js">[<var>rv</var>] = <strong>yield</strong> [<var>expression</var>]</pre>

<dl>
  <dt><code><var>expression</var></code> {{optional_inline}}</dt>
  <dd><a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols#iterator">iterator プロトコル</a>経由でジェネレーター関数が返す値を定義します。省略した場合、代わりに <code>undefined</code> が返されます。</dd>
  <dt><code><var>rv</var></code> {{optional_inline}}</dt>
  <dd>
  <p>ジェネレーターの実行を再開する <code>next()</code> メソッドに渡したオプションの値を受け取ります。</p>
  </dd>
</dl>

<h2 id="Description">解説</h2>

<p><code>yield</code> キーワードは、ジェネレーター関数の実行を一時停止し、ジェネレーターの呼び出し元に <code>yield</code> キーワードに続く値を返します。これは、 <code>return</code> キーワードのジェネレーター版と考えることができます。</p>

<p><code>yield</code> はそれを含むジェネレーター関数の中で直接しか呼び出すことしかできません。呼び出し先の関数やコールバックから呼び出すことはできません。</p>

<p><code>yield</code> キーワードはジェネレーターの <code>next()</code> メソッドを呼び出させ、 <code>value</code> と <code>done</code> の 2 つのプロパティを持つ <code>IteratorResult</code> オブジェクトを返します。 <code>value</code> プロパティは <code>yield</code> 式の評価結果であり、 <code>done</code> は <code>false</code>、すなわちジェネレーター関数が完全には完了していないことを示します。</p>

<p><code>yield</code> 式によって実行が停止されると、ジェネレーターの <code>next()</code> メソッドが呼び出されるまで、ジェネレーターのコード実行は一時停止します。ジェネレーターの <code>next()</code> メソッドが呼ばれるたびに、ジェネレーターの実行が再開され、次のうちのいずれかに達するまで実行されます。</p>

<ul>
 <li>ジェネレーターを再び停止して、ジェネレーターの新しい値を返す <code>yield</code>。再度 <code>next()</code> が呼ばれると <code>yield</code> の直後から実行が再開されます。</li>
 <li>ジェネレーターから例外を発生させるために使用される {{jsxref("Statements/throw", "throw")}}。完全にジェネレーターの実行を停止し、 (通常の例外が発生した場合のように) 呼び出し元で実行が再開されます。</li>
 <li>ジェネレーター関数の末尾。この場合、ジェネレーターの実行は終了し、 <code>IteratorResult</code> オブジェクトの <code>value</code> に {{jsxref("undefined")}} が、 <code>done</code> に <code>true</code> が代入されて呼び出し元に返されます。</li>
 <li>{{jsxref("Statements/return", "return")}} ステートメント。この場合はジェネレーターの実行は終了し、 <code>IteratorResult</code> オブジェクトの <code>value</code> に <code>return</code> ステートメントで指定した値が、 <code>done</code> に <code>true</code> が代入されて呼び出し元に返されます。</li>
</ul>

<p>ジェネレーターの <code>next()</code> メソッドにオプションの値が渡された場合、その値はジェネレーターの現在の <code>yield</code> 操作の返値となります。</p>

<p>ジェネレーターのコードパス、 <code>yield</code> 演算子、新しい開始値を {{jsxref("Generator.prototype.next()")}} に渡すことで指定することができる機能により、ジェネレーターは大きな力と制御を提供します。</p>

<div class="notecard warning">
  <p><strong>警告:</strong> 残念ながら <code>next()</code> は非対称ですが、仕方がありません。常に現在中断している <code>yield</code> に値を送りますが、次の <code>yield</code> のオペランドを返します。</p>
</div>

<h2 id="Examples">例</h2>

<h3 id="Using_yield">Using yield</h3>

<p>次のコードはジェネレーター関数の定義例です。</p>

<pre class="brush: js">function* countAppleSales () {
  let saleList = [3, 7, 5]
  for (let i = 0; i &lt; saleList.length; i++) {
    yield saleList[i]
  }
}</pre>

<p>ジェネレーター関数が定義されると、ご覧のようにイテレーターを構築するために使用されます。</p>

<pre class="brush: js">let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }</pre>

<p>You can also send a value with next(value) into the generator. 'step' evaluates as a
  return value in this syntax [<var>rv</var>] = <strong>yield</strong>
  [<var>expression</var>]</p>

<pre class="brush: js">function* counter(value) {
 let step;

 while (true) {
   step = yield ++value;

   if (step) {
     value += step;
   }
 }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value);   // 1
console.log(generatorFunc.next().value);   // 2
console.log(generatorFunc.next().value);   // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value);   // 15
console.log(generatorFunc.next(10).value); // 26</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">Iterator プロトコル</a></li>
  <li>{{jsxref("Statements/function*", "function*")}}</li>
  <li>{{jsxref("Operators/function*", "function* expression")}}</li>
  <li>{{jsxref("Operators/yield*", "yield*")}}</li>
</ul>
