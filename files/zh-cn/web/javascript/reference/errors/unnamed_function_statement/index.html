---
title: 'SyntaxError: function statement requires a name'
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
tags:
  - JavaScript
  - 语法错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: function statement requires a name [Firefox]
SyntaxError: Unexpected token ( [Chrome]
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function">函数声明</a>需要提供函数名称。你需要检查函数是如何定义的，是否需要为其提供名称，出现问题的函数是否需要声明为函数表达式或立即调用函数表达式（{{Glossary("IIFE")}}），以及函数在上下文环境中出现的位置是否正确。</p>

<h2 id="示例">示例</h2>

<h3 id="语句与表达式">语句与表达式</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function">函数语句</a>（或函数声明）需要命名，以下写法是不正确的：</p>

<pre class="brush: js example-bad">function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
</pre>

<p>你可以使用<a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">函数表达式</a>（赋值）来代替：</p>

<pre class="brush: js example-good">var greet = function() {
  return 'Hello world';
};</pre>

<p>者是你想将其作为立即调用函数表达式（<a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">IIFE</a>，Immediately Invoked Function Expression），也就是定义后立即执行的函数。在这种情况下你需要用到更多的括号：</p>

<pre class="brush: js example-good">(function () {

})();</pre>

<h3 id="标号函数(Labeled_functions)">标号函数 (Labeled functions)</h3>

<p>你使用函数标号 (<a href="/en-US/docs/Web/JavaScript/Reference/Statements/label">labels)</a>的时候，也需要在关键词 <code>function</code> 后面提供一个函数名称。这样的代码是不能运行的：</p>

<pre class="brush: js example-bad">function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
</pre>

<p>这个例子可以正常运行：</p>

<pre class="brush: js example-good">function Greeter() {
  german: function g() {
    return "Moin";
  }
}</pre>

<h3 id="对象方法">对象方法</h3>

<p>如果你想创建创建一个对象方法，那么需要首先创建一个对象。以下语法（function 关键字后面没有提供名称）是合法的：</p>

<pre class="brush: js example-good">var greeter = {
  german: function () {
    return "Moin";
  }
};</pre>

<h3 id="回调函数的语法">回调函数的语法</h3>

<p>另外，如果使用到了回调函数，那么检查一下语法是否正确。大括号与逗号很容易使情况变糟。</p>

<pre class="brush: js example-bad">promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
</pre>

<p>正确的形式应该是这样的：</p>

<pre class="brush: json example-good">promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions in the JavaScript Guide</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function">function statement</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function expression</a></li>
 <li><a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">IIFE</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/label">label</a></li>
</ul>
