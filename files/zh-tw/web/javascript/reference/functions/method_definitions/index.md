---
title: 方法定義
slug: Web/JavaScript/Reference/Functions/Method_definitions
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
---
<div>{{JsSidebar("Functions")}}</div>

<p>自 ECMAScript 2015 開始，引入了一種於物件初始器（objects initializers）中定義方法的簡短語法。是一個將函式指派予方法名稱的簡便方式。</p>

<div>{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}</div>



<h2 id="語法">語法</h2>

<pre class="syntaxbox">var obj = {
  <var>property</var>( <var>parameters…</var> ) {},
  *<var>generator</var>( <var>parameters…</var> ) {},
  async property( <var>parameters…</var> ) {},
  async* generator( <var>parameters…</var> ) {},

  // with computed keys:
  [property]( <var>parameters…</var> ) {},
  *[generator]( <var>parameters…</var> ) {},
  async [property]( <var>parameters…</var> ) {},

  // compare getter/setter syntax:
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {}
};
</pre>

<h2 id="說明">說明</h2>

<p>這個簡短的語法和在 ECMAScript 2015 引入 <a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a> 以及 <a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a> 類似。</p>

<p>請看以下程式碼：</p>

<pre class="brush: js">var obj = {
  foo: function() {
    /* code */
  },
  bar: function() {
    /* code */
  }
};
</pre>

<p>你可以把它縮減為：</p>

<pre class="brush: js">var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  }
};
</pre>

<h3 id="產生器方法">產生器方法</h3>

<p><a href="/zh-TW/docs/Web/JavaScript/Reference/Statements/function*">產生器方法</a>（Generator method）也可以透過簡短語法定義之。用的時候：</p>

<ul>
 <li>簡短語法的星號（*）必須放在產生器方法的屬性名前面。也就是說 <code>* g(){}</code> 能動但 <code>g *(){}</code> 不行；</li>
 <li>
  <p>非產生器方法的定義可能不會有 <code>yield</code> 關鍵字。也就是說<a href="/zh-TW/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function">過往的產生器函式</a>動不了、並拋出{{jsxref("SyntaxError")}}。Always use <code>yield</code> in conjunction with the asterisk (*).</p>
 </li>
</ul>

<pre class="brush: js">// Using a named property
var obj2 = {
  g: function* () {
    var index = 0;
    while (true)
      yield index++;
  }
};

// The same object using shorthand syntax
var obj2 = {
  * g() {
    var index = 0;
    while (true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1</pre>

<h3 id="Async_方法">Async 方法</h3>

<p>{{jsxref("Statements/async_function", "Async 方法", "", 1)}} 也可以透過簡短語法定義。</p>

<pre class="brush: js">// Using a named property
var obj3 = {
  f: async function () {
    await some_promise;
  }
};

// The same object using shorthand syntax
var obj3 = {
  async f() {
    await some_promise;
  }
};
</pre>

<h3 id="Async_generator_methods">Async generator methods</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">Generator methods</a> can also be {{jsxref("Statements/async_function", "async", "", 1)}}.</p>

<pre class="brush: js">var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

// The same object using shorthand syntax
var obj4 = {
  async* f() {
   yield 1;
   yield 2;
   yield 3;
  }
};</pre>

<h3 id="Method_definitions_are_not_constructable">Method definitions are not constructable</h3>

<p>All method definitions are not constructors and will throw a {{jsxref("TypeError")}} if you try to instantiate them.</p>

<pre class="brush: js example-bad">var obj = {
  method() {}
};
new obj.method; // TypeError: obj.method is not a constructor

var obj = {
  * g() {}
};
new obj.g; // TypeError: obj.g is not a constructor (changed in ES2016)
</pre>

<h2 id="範例">範例</h2>

<h3 id="Simple_test_case">Simple test case</h3>

<pre class="brush: js">var obj = {
  a: 'foo',
  b() { return this.a; }
};
console.log(obj.b()); // "foo"
</pre>

<h3 id="Computed_property_names">Computed property names</h3>

<p>The shorthand syntax also supports computed property names.</p>

<pre class="brush: js">var bar = {
  foo0: function() { return 0; },
  foo1() { return 1; },
  ['foo' + 2]() { return 2; }
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("javascript.functions.method_definitions")}}</p>

<h2 id="參見">參見</h2>

<ul>
 <li><code><a href="/zh-TW/docs/Web/JavaScript/Reference/Functions/get">get</a></code></li>
 <li><code><a href="/zh-TW/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a></li>
</ul>
