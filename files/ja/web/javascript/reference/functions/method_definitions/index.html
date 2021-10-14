---
title: メソッド定義
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
  - ECMAScript 2015
  - ECMAScript6
  - Functions
  - JavaScript
  - Object
  - Syntax
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
---
<div>{{JsSidebar("Functions")}}</div>

<p>ECMAScript 2015 より、オブジェクトイニシャライザのメソッド定義のための短い構文が導入されました。これは、メソッドの名前に割り当てられた関数の省略形です。</p>

<div>{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">const obj = {
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  <var>property</var>( <var>parameters…</var> ) {},
  *<var>generator</var>( <var>parameters…</var> ) {},
  async <var>property</var>( <var>parameters…</var> ) {},
  async* <var>generator</var>( <var>parameters…</var> ) {},

  // 算出されたキーも使用可能:
  get [<var>property]</var>() {},
  set [<var>property]</var>(<var>value</var>) {},
  [<var>property</var>]( <var>parameters…</var> ) {},
  *[<var>generator</var>]( <var>parameters…</var> ) {},
  async [<var>property</var>]( <var>parameters…</var> ) {},
  async* [<var>generator]</var>( <var>parameters…</var> ) {},
};
</pre>

<h2 id="Description" name="Description">説明</h2>

<p>簡略構文は、ECMAScript 第 5 版で導入された <a href="/ja/docs/Web/JavaScript/Reference/Functions/get">getter</a> や <a href="/ja/docs/Web/JavaScript/Reference/Functions/set">setter</a> 構文に似ています。</p>

<p>次のコードを例にすると:</p>

<pre class="brush: js">var obj = {
  foo: function() {
    /* コード */
  },
  bar: function() {
    /* コード */
  }
};
</pre>

<p>これを以下のように短縮することができます:</p>

<pre class="brush: js">var obj = {
  foo() {
    /* コード */
  },
  bar() {
    /* コード */
  }
};

</pre>

<h3 id="Generator_methods" name="Generator_methods">短縮形ジェネレーターメソッド</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Statements/function*">Generator メソッド</a>は同様に簡略構文を使用して定義することができます。</p>

<p>簡略構文では:</p>

<ul>
 <li>ジェネレータープロパティ名の前にアスタリスク (*)が 必要です。すなわち、<code>* g(){}</code> は動作しますが、<code>g *(){}</code> は動作しません。</li>
 <li>非ジェネレーターメソッド定義では <code>yield</code> キーワードを入れることはできません。つまり <a href="/ja/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function">旧式の ジェネレーター関数</a> は動作せず、{{jsxref("SyntaxError")}}を投げます。<code>yield</code> は常にアスタリスク (<code>*</code>)と一緒に使ってください。</li>
</ul>

<pre class="brush: js;highlight[12]">// 名前付きプロパティを使用 (ES6 より前)
const obj2 = {
  g: function*() {
    let index = 0
    while(true)
      yield index++
  }
};

// 簡略構文を使用して同じオブジェクトを生成
const obj2 = {
  * g() {
    let index = 0;
    while(true)
      yield index++
  }
};

const it = obj2.g()
console.log(it.next().value) // 0
console.log(it.next().value) // 1</pre>

<h3 id="Async_methods" name="Async_methods">Async メソッド</h3>

<p>{{jsxref("Statements/async_function", "Async メソッド", "", 1)}}も簡略構文を使用して定義することができます。</p>

<pre class="brush: js;highlight[12]">// 名前付きプロパティ
const obj3 = {
  f: async function () {
    await some_promise
  }
};

// 簡略構文を使用して同じオブジェクトを生成
const obj3 = {
  async f() {
    await some_promise
  }
};
</pre>

<h3 id="Async_generator_methods" name="Async_generator_methods">Async ジェネレーターメソッド</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Statements/function*">Generator メソッド</a>も {{jsxref("Statements/async_function", "async", "", 1)}} 関数にすることができます。</p>

<pre class="brush: js">const obj4 = {
  f: async function* () {
    yield 1
    yield 2
    yield 3
  }
};

// 簡略構文を使用して同じオブジェクトを生成
const obj4 = {
  async* f() {
   yield 1
   yield 2
   yield 3
  }
};</pre>

<h3 id="Method_definitions_are_not_constructable" name="Method_definitions_are_not_constructable">メソッド定義はコンストラクタブルではない</h3>

<p>すべてのメソッド定義がコンストラクターではない(簡略構文のみ！)ため、インスタンス化しようとすると {{jsxref("TypeError")}} が発生します。</p>

<pre class="brush: js example-bad">const obj = {
  method() {},
};
new obj.method // TypeError: obj.method is not a constructor

const obj = {
  * g() {}
};
new obj.g; // TypeError: obj.g is not a constructor (ES2016 で変更)
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Simple_test_case" name="Simple_test_case">簡単なテストケース</h3>

<pre class="brush: js;highlight[3]">const obj = {
  a: 'foo',
  b() { return this.a }
};
console.log(obj.b()) // "foo"
</pre>

<h3 id="Computed_property_names" name="Computed_property_names">計算されたプロパティ名</h3>

<p>簡略構文は計算されたプロパティ名もサポートします。</p>

<pre class="brush: js;highlight[4]">const bar = {
  foo0: function() { return 0 },
  foo1(){ return 1 },
  ['foo' + 2](){ return 2 },
};

console.log(bar.foo0()) // 0
console.log(bar.foo1()) // 1
console.log(bar.foo2()) // 2

// A global function
function foo() {
  return 1
}

let name = 'foo'
console.log(window[name]())  // 1</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.functions.method_definitions")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Functions/get">get</a></code></li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar">字句文法</a></li>
</ul>
