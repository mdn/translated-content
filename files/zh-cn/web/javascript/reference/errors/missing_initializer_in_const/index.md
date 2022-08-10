---
title: 'SyntaxError: missing = in const declaration'
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
tags:
  - JavaScript
  - 语法错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Missing initializer in const declaration (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>常量指的是在程序正常运行过程中不能被修改的值。它的值不能通过二次赋值来改变，同时也不能被再次声明。在 JavaScript 中，常量在声明时使用  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code> 关键字来修饰。常量需要初始化器；也就是说，必须在声明的同时为其赋值（鉴于常量值指定之后不能再进行修改，这样做是容易理解的）。</p>

<h2 id="示例">示例</h2>

<h3 id="初始值缺失">初始值缺失</h3>

<p>不同于 var 或 let 关键字，必须在常量声明中为其赋值。下面的例子中会报错：</p>

<pre class="brush: js example-bad">const COLUMNS;
// SyntaxError: missing = in const declaration</pre>

<h3 id="错误修正">错误修正</h3>

<p>修正这个问题的方法有很多种。仔细检查对于问题中的常量，你想要达到什么目标。</p>

<h4 id="添加常量值">添加常量值</h4>

<p>在声明语句中为其赋值：</p>

<pre class="brush: js example-good">const COLUMNS = 80;</pre>

<h4 id="const_let_还是_var"><code>const</code>, <code>let</code> 还是 <code>var?</code></h4>

<p>如果你并不想声明一个常量值，那么就不要使用 const 关键字。或许你想要的是使用  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code> 来声明一个块状作用域变量或者是用 <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a> </code>声明一个全局变量。这两者都不需要设置初始值。</p>

<pre class="brush: js example-good">let columns;
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
</ul>
