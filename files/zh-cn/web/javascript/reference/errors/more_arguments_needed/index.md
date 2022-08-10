---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/More_arguments_needed
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="信息">信息</h2>

<pre class="syntaxbox">TypeError: Object.create requires more than 0 arguments
TypeError: Object.setPrototypeOf requires more than 1 argument
TypeError: Object.defineProperties requires more than 0 arguments
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="哪里出错了">哪里出错了？</h2>

<p>调用函数的时候出现了错误。需要提供更多的参数。</p>

<h2 id="示例">示例</h2>

<p>{{jsxref("Object.create()")}} 方法要求至少有一个参数，而 {{jsxref("Object.setPrototypeOf()")}} 方法要求至少有两个参数：</p>

<pre class="brush: js example-bad">var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
</pre>

<p>你可以将 {{jsxref("null")}} 设置为原型：</p>

<pre class="brush: js example-good">var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);</pre>

<h2 id="相关">相关</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
