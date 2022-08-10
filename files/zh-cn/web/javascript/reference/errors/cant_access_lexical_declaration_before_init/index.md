---
title: 'ReferenceError: can''t access lexical declaration`X'' before initialization'
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - JavaScript
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="消息提示">消息提示</h2>

<pre class="syntaxbox">ReferenceError: assignment to undeclared variable "x" (Firefox)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("ReferenceError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>词法变量在初始化之前被访问。该错误可以发生于任何语句块中，当使用 let 或 const 修饰的变量在初始化之前被访问的时候。</p>

<h2 id="示例">示例</h2>

<h3 id="非法情况">非法情况</h3>

<p>在这个例子中，变量 "foo" 在语句块中再次声明，导致未初始化。</p>

<pre class="brush: js example-bad">function test(){
   let foo = 33;
   if (true) {
      let foo = (foo + 55); // ReferenceError: can't access lexical declaration `foo' before initialization
   }
}
test();
</pre>

<h3 id="正确情况">正确情况</h3>

<p>在 if 语句块中修改变量 "foo" 的值，不应该在其中进行二次声明。</p>

<pre class="brush: js example-good">function test(){
   let foo = 33;
   if (true) {
      foo = (foo + 55);
   }
}
test();
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let">let 的暂存死区及相关错误</a></li>
</ul>
