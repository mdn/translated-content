---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
translation_of: Web/JavaScript/Reference/Functions/arguments/length
---
<div>{{jsSidebar("Functions")}}</div>

<p>本次函数调用时传入函数的实参数量。</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">arguments.length</pre>

<h2 id="Description">描述</h2>

<p>arguments.length 表示的是实际上向函数传入了多少个参数，这个数字可以比形参数量大，也可以比形参数量小 (形参数量的值可以通过<a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length">Function.length</a>获取到).</p>

<h2 id="Examples">例子</h2>

<h3 id="Example:_Using_arguments.length">例子：使用<code>arguments.length</code></h3>

<p>这个例中，我们定义了一个可以相加任意个数字的函数。</p>

<pre class="brush: js">function adder(base, /*, n2, ... */) {
  base = Number(base);
  for (var i = 0; i &lt; arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">相关链接</h2>

<ul>
 <li><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length">Function.length</a></li>
</ul>
