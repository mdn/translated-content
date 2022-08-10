---
title: 'SyntaxError: missing : after property id'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
tags:
  - JavaScript
  - 语法错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: missing : after property id
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>当使用<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">对象初始化</a>语法创建对象的时候，需要使用半角冒号 (:) 将属性键与属性值隔开。</p>

<pre class="brush: js">var obj = { propertyKey: 'value' };
</pre>

<h2 id="示例">示例</h2>

<h3 id="冒号与等号">冒号与等号</h3>

<p>下面的代码会运行失败，原因是对象初始化语法中不允许使用等号来代替冒号。</p>

<pre class="brush: js example-bad">var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
</pre>

<p>修复方法就是使用冒号，或者是在对象创建之后使用方括号语法来为其设定新的属性。</p>

<pre class="brush: js example-good">var obj = { propertyKey: 'value' };

// or alternatively

var obj = { };
obj['propertyKey'] = 'value';
</pre>

<h3 id="空属性">空属性</h3>

<p>不能像下面这样创建空属性：</p>

<pre class="brush: js example-bad">var obj = { propertyKey; };
// SyntaxError: missing : after property id
</pre>

<p>假如你需要创建一个无值属性，那么需要将它的值设置为 {{jsxref("null")}} 。</p>

<pre class="brush: js example-good">var obj = { propertyKey: null };</pre>

<h3 id="计算得来的属性">计算得来的属性</h3>

<p>如果需要使用表达式来创建属性键，那么需要使用方括号。否则属性名称不会进行计算：</p>

<pre class="brush: js example-bad">var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
</pre>

<p>把计算表达式放置到方括号（<code>[]</code>）中：</p>

<pre class="brush: js example-good">var obj = { ['b'+'ar']: 'foo' };</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
