---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Class
  - Function
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Function
---
<div>{{JSRef}}</div>

<p>JavaScript の関数は、実際にはすべて <code>Function</code> オブジェクトです。これは、 <code>(function(){}).constructor === Function</code> というコードが true を返すことで確認することができます。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Function/Function", "Function()")}}</dt>
 <dd>新しい <code>Function</code> オブジェクトを生成します。コンストラクターを直接呼び出すと関数を動的に生成することができますが、セキュリティや、 {{jsxref("eval")}} と似た性能の (ただし、はるかに重要性の低い) 問題を抱えます。ただし eval とは異なり、 <code>Function</code> コンストラクターはグローバルスコープで実行される関数のみを生成します。</dd>
</dl>

<h2 id="Instance_properties" name="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("Function.arguments")}}</dt>
 <dd>関数に渡した引数に対応する配列です。<br>
 これは {{jsxref("Function")}} オブジェクトのプロパティとしては非推奨です。代わりに関数内に用意されている {{jsxref("Functions/arguments", "arguments")}} オブジェクト (関数内で使用可能) を使用してください。</dd>
 <dt>{{jsxref("Function.caller")}}</dt>
 <dd>現在実行している関数を呼び出した関数を返します。<br>
 このプロパティは非推奨であり、一部の厳格モードではない関数でのみ機能します。</dd>
 <dt>{{jsxref("Function.displayName")}}</dt>
 <dd>関数の表示名です。</dd>
 <dt>{{jsxref("Function.length")}}</dt>
 <dd>関数によって期待される引数の数を指定します。</dd>
 <dt>{{jsxref("Function.name")}}</dt>
 <dd>関数の名前です。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}</dt>
 <dd>関数を呼び出し、 <code>this</code> を提供された <code><var>thisArg</var></code> に設定します。引数は {{jsxref("Array")}} として渡すことができます。</dd>
 <dt>{{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}</dt>
 <dd>新しい関数を作成し、呼び出されたときに、 <code>this</code> を提供された <code><var>thisArg</var></code> に設定します。任意で、指定された一連の引数が、新しく結びつけられた関数が呼び出されたときに与えられた引数の前に付加されます。</dd>
 <dt>{{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}</dt>
 <dd>関数を呼び出して、 <code>this</code> に提供した値を設定します。引数は、指定するオブジェクトのものとして渡すことができます。</dd>
 <dt>{{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}</dt>
 <dd>関数のソースコードを表す文字列を返します。<br>
 {{jsxref("Object.prototype.toString")}} メソッドを上書きします。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Difference_between_Function_constructor_and_function_declaration" name="Difference_between_Function_constructor_and_function_declaration">Funciton コンストラクターと関数宣言の違い</h3>

<p><code>Function</code> コンストラクターで生成された関数は、生成コンテキストにクロージャを作りません。つまり常にグローバルスコープで生成されます。これを実行すると、 <code>Function</code> コンストラクターの呼び出し元のスコープは入らず、自身のローカル変数とグローバル変数だけにアクセスできます。これは関数式のコードに {{jsxref("eval")}} を使うのとは異なります。</p>

<pre class="brush: js notranslate">var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // この |x| はグローバルの |x| を表す
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // この |x| は上記のローカルの |x| を表す
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
</pre>

<p>このコードはウェブブラウザーでは動作しますが、 Node.js では <code>f1()</code> で <code>ReferenceError</code> が発生します。 <code>x</code> が見つからないためです。これは Node の最上位のスコープがグローバルスコープではなく、 <code>x</code> はモジュールのローカルになるからです。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-objects', 'Function')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Function")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Functions", "関数と関数スコープ", "", 1)}}</li>
 <li>{{jsxref("Statements/function", "function")}} 文</li>
 <li>{{jsxref("Operators/function", "function")}} 式</li>
 <li>{{jsxref("Statements/function*", "function*")}} 文</li>
 <li>{{jsxref("Operators/function*", "function*")}} 式</li>
 <li>{{jsxref("AsyncFunction")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
</ul>
