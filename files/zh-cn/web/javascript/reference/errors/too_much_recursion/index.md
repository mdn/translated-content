---
title: 'InternalError: too much recursion'
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
tags:
  - InternalError
  - recursion
  - 内部错误
translation_of: Web/JavaScript/Reference/Errors/Too_much_recursion
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="信息">信息</h2>

<pre class="syntaxbox">InternalError: too much recursion
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("InternalError","内部错误")}}.</p>

<h2 id="什么地方出错了">什么地方出错了？</h2>

<p>一个调用自身的函数被称作<em>递归函数</em>。一些情况下，递归函数类似于一个循环，都重复地执行一个代码段许多次，都需要一个条件（用于避免无尽循环或此处的无尽递归）。当出现过于深层的递归或无尽递归时，JavaScript 将会抛出此错误。</p>

<h2 id="示例">示例</h2>

<p>根据递归终止的条件，该函数将递归地执行 10 次。</p>

<pre class="brush: js">function loop(x) {
  if (x &gt;= 10) // "x &gt;= 10" 是递归终止条件
    return;
  // 进行一些操作...
  loop(x + 1); // 递归调用
}
loop(0);</pre>

<p>将递归条件设置为一个极大的数值，将不能运行：</p>

<pre class="brush: js example-bad">function loop(x) {
  if (x &gt;= 1000000000000)
    return;
  // 进行一些操作...
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion</pre>

<h2 id="相关页面">相关页面</h2>

<ul>
 <li>{{Glossary("Recursion","递归")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions#Recursion">Recursive functions</a></li>
</ul>
