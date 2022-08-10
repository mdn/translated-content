---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="信息">信息</h2>

<pre class="syntaxbox">SyntaxError: missing } after property list
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪里出错了">哪里出错了？</h2>

<p>在<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer">对象初始化</a>的时候语法出错了。可能是遗漏了一个大括号，也可能是遗漏了逗号。还要检查是否以正确的顺序关闭了大括号或括号。 缩进或格式化代码也许可以更好帮助你看清这些芜杂的。</p>

<h2 id="示例">示例</h2>

<h3 id="遗漏的逗号">遗漏的逗号</h3>

<p>很多情况下，对象初始值代码会中缺少逗号：</p>

<pre class="brush: js example-bad">var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
</pre>

<p>正确的是：</p>

<pre class="brush: js example-good">var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3
};
</pre>

<h2 id="相关">相关</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
