---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
tags:
  - JavaScript
  - 警告
translation_of: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">Warning: expression closures are deprecated
</pre>

<h2 id="错误类型">错误类型</h2>

<p>警告。JavaScript 引擎不会停止运行。</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>非标准化的<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures">表达式闭包</a>语法（简写函数语法）已被废弃，不应该再被使用。该语法将会在 {{bug(1083458)}} 中全部移除，到时候用到该语法的脚本程序会报  SyntaxError 错误。</p>

<h2 id="示例">示例</h2>

<h3 id="被废弃的语法">被废弃的语法</h3>

<p>表达式闭包从函数声明或者对象方法定义中省略了花括号或是 return 语句。</p>

<pre class="brush: js example-bad">var x = function() 1;

var obj = {
  count: function() 1
};
</pre>

<h3 id="标准语法">标准语法</h3>

<p>将非标准化的表达式闭包语法转换成标准 ECMAScript 语法，可以添加花括号以及 return 语句。</p>

<pre class="brush: js example-good">var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
</pre>

<h3 id="标准语法之箭头函数">标准语法之箭头函数</h3>

<p>另外，你可以选择使用箭头函数：</p>

<pre class="brush: js example-good">var x = () =&gt; 1;</pre>

<h3 id="标准语法之方法的简略写法">标准语法之方法的简略写法</h3>

<p>表达式闭包还会出现在 getter 与 setter 中，例如：</p>

<pre class="brush: js example-bad">var obj = {
  get x() 1,
  set x(v) this.v = v
};
</pre>

<p>根据 ES2015 中对于<a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">方法定义</a>的规定，上述写法可以转换成如下形式：</p>

<pre class="brush: js example-good">var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures">Expression closures</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow functions</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">Method definitions</a></li>
</ul>
