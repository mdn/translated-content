---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - JavaScript
  - 语法错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>缺失变量名。这有很大的可能性是由你的代码中的语法错误造成的。也许是什么地方的逗号出了问题，或者是你正在绞尽脑汁想一个合适的名字。完全可以理解！为变量起名确实让人头疼。</p>

<h2 id="示例">示例</h2>

<h3 id="变量名缺失">变量名缺失</h3>

<pre class="brush: js example-bad">var = "foo";
</pre>

<p>为变量起一个合适的明确确实不是一件容易的事情。这种经历每个人都遇到过。</p>

<pre class="brush: js example-good">var ohGodWhy = "foo";</pre>

<h3 id="保留字不能作为变量名">保留字不能作为变量名</h3>

<p>有一些名称是作为<a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords">保留字</a>而存在的。不好意思，你不能使用！:(</p>

<pre class="brush: js example-bad">var debugger = "whoop";
// SyntaxError: missing variable name
</pre>

<h3 id="一次性声明多个变量">一次性声明多个变量</h3>

<p>在一次性声明多个变量的时候要特别留意逗号。看看是否有多余的逗号？以及是否不小心把逗号用作了分号？</p>

<pre class="brush: js example-bad">var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
</pre>

<p>修复后的代码：</p>

<pre class="brush: js example-good">var x, y = "foo";
var x = "foo";

var first = document.getElementById('one');
var second = document.getElementById('two');</pre>

<h3 id="数组">数组</h3>

<p>在 JavaScript 中 {{jsxref("Array")}} 字面量需要使用方括号将值包裹起来。下面这样是不对的：</p>

<pre class="brush: js example-bad">var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
</pre>

<p>这样写才是正确的：</p>

<pre class="brush: js example-good">var arr = [1,2,3,4,5];</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="http://wiki.c2.com/?GoodVariableNames">Good variable names</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations">Variable declarations in the JavaScript Guide</a></li>
</ul>
