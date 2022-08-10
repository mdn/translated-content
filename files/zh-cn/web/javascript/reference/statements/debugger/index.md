---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/debugger
---
<p>{{jsSidebar("Statements")}}</p>

<p><strong>debugger 语句</strong>调用任何可用的调试功能，例如设置断点。 如果没有调试功能可用，则此语句不起作用。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><code>debugger;</code>
</pre>

<h2 id="示例">示例</h2>

<p>下面的例子演示了一个包含 debugger 语句的函数，当函数被调用时，会尝试调用一个可用的调试器进行调试。</p>

<pre class="brush:js">function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}</pre>

<p>当 debugger 被调用时，执行暂停在 debugger 语句的位置。就像在脚本源代码中的断点一样。</p>

<p><a href="https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png"><img alt="Paused at a debugger statement." src="screen_shot_2014-02-07_at_9.14.35_am.png"></a></p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">相关链接</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Debugging_JavaScript">JavaScript 调试</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger">在火狐开发者工具中调试</a></li>
</ul>
