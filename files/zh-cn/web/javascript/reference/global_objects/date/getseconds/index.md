---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---
<p>{{JSRef("Global_Objects", "Date")}}</p>

<p><strong><code>getSeconds()</code></strong> 方法根据本地时间，返回一个指定的日期对象的秒数。</p>

<div>{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}</div>



<h2 id="Syntax">语法</h2>

<pre class="brush: js">dateObj.getSeconds()</pre>

<h3 id="Parameters">参数</h3>

<p>无</p>

<h3 id="Description">描述</h3>

<p>该方法返回一个 0 到 59 的整数值。</p>

<h2 id="Examples">例子</h2>

<h3 id="Example:_Using_getSeconds">例子：使用<code>getSeconds</code> 方法</h3>

<p>下面第二条语句，基于日期对象 <code>Xmas95</code> 的值，把 30 赋值给变量 <code>secs</code>。</p>

<pre class="brush:js">var Xmas95 = new Date("December 25, 1995 23:15:30");
var secs = Xmas95.getSeconds();</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_Also">相关链接</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCSeconds()")}}</li>
 <li>{{jsxref("Date.prototype.setSeconds()")}}</li>
</ul>
