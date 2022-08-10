---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - JavaScript
  - 严格模式
  - 语法错误
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: for-in loop head declarations may not have initializers (Firefox)

SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>该 {{jsxref("SyntaxError")}} 只出现于<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>下。</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>在 <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> 循环的头部存在初始化表达式。 也就是存在变量声明并且被赋值，例如 |<code>for (var i = 0 in obj)</code>|。在非严格模式下，这种在循环头部的变量声明会被静默忽略，语句的表现形式与 <code>|for (var i in obj)|</code>相同。而在<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>下，会报语法错误。</p>

<h2 id="示例">示例</h2>

<p>下面这个示例会报语法错误（<code>SyntaxError</code>）：</p>

<pre class="brush: js example-bad">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
</pre>

<h3 id="合法的_for-in_循环">合法的 for-in 循环</h3>

<p>可以把初始化语句 (<code>i = 0</code>) 从 for-in 循环的头部移除。</p>

<pre class="brush: js example-good">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
</pre>

<h3 id="数组迭代">数组迭代</h3>

<p>for...in 循环<a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in">不应该应用于数组迭代中</a>。是否考虑使用 <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> 循环而不是 <code>for-in</code> 循环来遍历数组（{{jsxref("Array")}}）？在 for 循环中是允许使用初始化语句的：</p>

<pre class="brush: js example-good">var arr = [ "a", "b", "c" ]

for (var i = 2; i &lt; arr.length; i++) {
  console.log(arr[i]);
}

// "c"</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code> – 无论是在严格模式下还是非严格模式下也都不允许使用初始化语句。</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> – 更适用于数组迭代，因为允许使用初始化语句。</li>
</ul>
