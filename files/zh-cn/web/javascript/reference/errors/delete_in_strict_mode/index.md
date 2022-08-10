---
title: >-
  SyntaxError: applying the 'delete' operator to an unqualified name is
  deprecated
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
tags:
  - JavaScript
  - 语法错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Delete of an unqualified identifier in strict mode. (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("SyntaxError")}} 仅出现在<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>下。</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>在 JavaScript 中，普通变量是不能通过 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> 操作符来删除的。在严格模式下，试图去删除一个变量会报错，这是不允许的。</p>

<p>delete 操作符只能用于删除对象中的属性。只有可配置的对象属性才“符合”被删除的条件。</p>

<p>与一般流行的观点相反的是， delete 操作符与直接释放内存<strong>无关</strong>。内存管理是通过切断引用来间接实现的。可以参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management">内存管理</a>页面与 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete">delete </a>操作符页面来获取更多的细节信息。</p>

<p>这个错误提示只出现于<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>。在非严格模式下，该操作返回 false。</p>

<h2 id="示例">示例</h2>

<p>在 JavaScript 中，普通变量是不能删除的，在严格模式下会报错：</p>

<pre class="brush: js example-bad">'use strict';

var x;

// ...

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
</pre>

<p>要释放变量引用的内容，可以将变量值设置为 {{jsxref("null")}}:</p>

<pre class="brush: js example-good">'use strict';

var x;

// ...

x = null;

// x can be garbage collected
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Memory_Management">内存管理</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete">TypeError: property "x" is non-configurable and can't be deleted</a></li>
</ul>
