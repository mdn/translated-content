---
title: 'TypeError: variable "x" redeclares argument'
slug: Web/JavaScript/Reference/Errors/Var_hides_argument
translation_of: Web/JavaScript/Reference/Errors/Var_hides_argument
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="消息">消息</h2>

<pre class="syntaxbox">TypeError: variable "x" redeclares argument (Firefox)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}} 警告仅仅在 <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式下</a> 出现。</p>

<h2 id="哪里有问题？">哪里有问题？</h2>

<p>函数参数中出现了名称相同的变量，之后在函数体中使用 <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code> 赋值语句重新声明。 这可能是一个命名冲突，所以 JavaScript 警告了它。</p>

<p>这个错误只在 <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式的代码</a> 中作为警告出现。在非严格模式的代码中，重新声明会被忽略。</p>

<h2 id="示例">示例</h2>

<h3 id="无效情况">无效情况</h3>

<p>这个例子中，变量 <code>arg</code> 重新声明了参数。</p>

<pre class="brush: js example-bad">"use strict";

function f(arg) {
  var arg = "foo";
}
</pre>

<h3 id="无效情况_2">无效情况</h3>

<p>为了修复警告，<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code> 语句应该被移除，因为变量已经存在。或者，你可以重命名函数参数或者变量名称。</p>

<pre class="brush: js example-good">"use strict";

function f(arg) {
  arg = "foo";
}
</pre>

<h2 id="另见">另见</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a></li>
</ul>
