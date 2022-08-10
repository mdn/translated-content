---
title: 尾后逗号
slug: Web/JavaScript/Reference/Trailing_commas
tags:
  - Comma
  - ECMAScript2017
  - ECMAScript5
  - JavaScript
  - 语法
  - 逗号
translation_of: Web/JavaScript/Reference/Trailing_commas
---
<div>{{JsSidebar("More")}}</div>

<p><strong>尾后逗号</strong> （有时叫做“终止逗号”）在向 JavaScript 代码添加元素、参数、属性时十分有用。如果你想要添加新的属性，并且上一行已经使用了尾后逗号，你可以仅仅添加新的一行，而不需要修改上一行。这使得版本控制的代码比较（diff）更加清晰，代码编辑过程中遇到的麻烦更少。</p>

<p>JavaScript 一开始就支持数组字面量中的尾后逗号，随后向对象字面量（ECMAScript 5）中添加了尾后逗号。最近（ECMAScript 2017），又将其添加到函数参数中。</p>

<p>但是，{{Glossary("JSON")}} 不允许尾后逗号。</p>

<h2 id="字面量中的尾后逗号">字面量中的尾后逗号</h2>

<h3 id="数组">数组</h3>

<p>JavaScript 忽略数组中的尾后逗号：</p>

<pre class="brush: js">var arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3</pre>

<p>如果使用了多于一个尾后逗号，会产生省略（elision，或者间隙 hole）。 带有间隙的数组叫做<em>稀疏</em>数组（<em>sparse</em> 紧凑数组 <em>dense</em> array 没有省略/间隙）。 例如，当使用 {{jsxref("Array.prototype.forEach()")}} 或 {{jsxref("Array.prototype.map()")}} 迭代数组时，会跳过数组间隙。</p>

<pre class="brush: js">var arr = [1, 2, 3,,,];
arr.length; // 5
</pre>

<h3 id="对象">对象</h3>

<p>从 ECMAScript 5 开始，对象字面值中的尾后逗号也是符合语法的：</p>

<pre class="brush: js">var object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};</pre>

<h2 id="函数中的尾后逗号">函数中的尾后逗号</h2>

<p>ECMAScript 2017 支持函数参数中的尾后逗号。</p>

<h3 id="参数定义">参数定义</h3>

<p>下面的两个函数定义都是合法的，并且互相等价。尾后逗号并不影响函数定义，或者其<code>arguments</code>对象的 <code>length</code>属性。</p>

<pre class="brush: js">function f(p) {}
function f(p,) {}

(p) =&gt; {};
(p,) =&gt; {};
</pre>

<p>尾后逗号也可用于类或对象的<a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">方法定义</a>。</p>

<pre class="brush: js">class C {
  one(a,) {},
  two(a, b,) {},
}

var obj = {
  one(a,) {},
  two(a, b,) {},
};
</pre>

<h3 id="函数调用">函数调用</h3>

<p>下面的两个函数调用都是合法的，并且互相等价。</p>

<pre class="brush: js">f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
</pre>

<h3 id="不合法的尾后逗号">不合法的尾后逗号</h3>

<p>仅仅包含逗号的函数参数定义或者函数调用会抛出 {{Jsxref("SyntaxError")}}。 而且，当使用<a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">剩余参数</a>的时候，并不支持尾后逗号：</p>

<pre class="brush: js example-bad">function f(,) {} // SyntaxError: missing formal parameter
(,) =&gt; {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) =&gt; {}        // SyntaxError: expected closing parenthesis, got ','
</pre>

<h2 id="解构中的尾后逗号">解构中的尾后逗号</h2>

<p>在使用<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">解构赋值</a>时，尾后逗号也可以用于左侧：</p>

<pre class="brush: js">// 带有尾后逗号的数组解构
[a, b,] = [1, 2];

// 带有尾后逗号的对象解构
var o = {
  p: 42,
  q: true,
};
var {p, q,} = o;
</pre>

<p>同样地，在使用剩余参数时，会抛出 {{jsxref("SyntaxError")}}：</p>

<pre class="brush: js example-bad">var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma</pre>

<h2 id="JSON_中的尾后逗号">JSON 中的尾后逗号</h2>

<p>对象中的尾后逗号仅仅在 ECMAScript 5 中引入。由于 JSON 基于 ES5 之前的语法， <strong>JSON 中并不允许尾后逗号</strong>。</p>

<p>下面两行都会抛出 <code>SyntaxError</code>：</p>

<pre class="brush: js example-bad">JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
</pre>

<p>去掉尾后逗号就行了：</p>

<pre class="brush: js example-good">JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>ECMAScript 初始提案： <a href="https://github.com/tc39/proposal-trailing-function-commas">函数的尾后逗号</a>（由 Jeff Morrison 提出）</li>
</ul>
