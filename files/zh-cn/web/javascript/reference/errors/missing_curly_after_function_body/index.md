---
title: 'SyntaxError: missing } after function body'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
tags:
  - JavaScript
  - 语法错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: missing } after function body
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>在创建函数的时候出现了语法错误。检查一下闭合花括号以及括号的顺序是否正确。将代码进行缩进或者美化可以让你更容易找到问题之所在。</p>

<h2 id="示例">示例</h2>

<h3 id="遗漏的闭合花括号">遗漏的闭合花括号</h3>

<p>通常是因为在函数声明中遗漏了花括号：</p>

<pre class="brush: js example-bad">var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
</pre>

<p>正确的应该是这样的：</p>

<pre class="brush: js example-good">var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};</pre>

<p>当使用立即调用函数表达式（{{Glossary("IIFE")}}）、<a href="/en-US/docs/Web/JavaScript/Closures">闭包</a>或者其他使用了大量的花括号以及括号的结构体的时候，问题会更加隐蔽。</p>

<pre class="brush: js example-bad">(function() { if (true) { return false; } );
</pre>

<p>通常将代码语句按照层级缩进以及对缩进进行复核会有助于错误的发现。</p>

<pre class="brush: js example-good">(function() {
  if (true) {
    return false;
  }
});</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
