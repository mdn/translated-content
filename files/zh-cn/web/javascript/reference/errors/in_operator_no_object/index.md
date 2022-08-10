---
title: 'TypeError: invalid ''in'' operand "x"'
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
tags:
  - JavaScript
  - 类型错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/in_operator_no_object
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">TypeError: invalid 'in' operand "x" (Firefox)
TypeError: Cannot use 'in' operator to search for 'x' in y (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 操作符</a>只可以用来检测对象中是否存在某个属性，而不能用来在字符串、数字或者其他基本类型的数据中进行检索。</p>

<h2 id="示例">示例</h2>

<h3 id="在字符串中进行检索">在字符串中进行检索</h3>

<p>与其他语言不同（如 Python），不能使用 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 操作符</a>在字符串中进行检索。</p>

<pre class="brush: js example-bad">"Hello" in "Hello World";
// TypeError: invalid 'in' operand "Hello World"
</pre>

<p>可以使用 {{jsxref("String.prototype.indexOf()")}} 来代替：</p>

<pre class="brush: js example-good">"Hello World".indexOf("Hello") !== -1;
// true</pre>

<h3 id="操作数不能为_null_或者_undefined">操作数不能为 null 或者 undefined</h3>

<p>确保你将要进行探测的对象不为 {{jsxref("null")}} 或者  {{jsxref("undefined")}}.</p>

<pre class="brush: js example-bad">var foo = null;
"bar" in foo;
// TypeError: invalid 'in' operand "foo"
</pre>

<p>in 操作符的预期操作数只有对象类型。</p>

<pre class="brush: js example-good">var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
</pre>

<h3 id="在数组中进行检索">在数组中进行检索</h3>

<p>当使用 in 操作符来对 {{jsxref("Array")}} 对象进行检索的时候一定要特别小心，因为它检测的是索引值而不是位于索引位置的值。</p>

<pre class="brush: js">var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
3 in trees; // true
"oak" in trees; // false</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> operator</a></li>
</ul>
