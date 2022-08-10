---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---
<div>{{JSRef("Global_Objects", "Date")}}</div>

<p><code><strong>setFullYear()</strong></code> 方法根据本地时间为一个日期对象设置年份。</p>

<div>{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}</div>



<h2 id="Syntax">语法</h2>

<pre class="brush: js">dateObj.setFullYear(yearValue[, monthValue[, dayValue]])</pre>

<h3 id="Parameters">参数</h3>

<dl>
 <dt><code>yearValue</code></dt>
 <dd>指定年份的整数值，例如 1995。</dd>
 <dt><code>monthValue</code></dt>
 <dd>一个 0 到 11 之间的整数值，表示从一月到十二月。</dd>
 <dt><code>dayValue</code></dt>
 <dd>一个 1 到 31 之间的整数值，表示月份中的第几天。如果你指定了 <code>dayValue</code> 参数，就必须同时指定 <code>monthValue</code>。</dd>
</dl>

<h2 id="Description">描述</h2>

<p>如果没有指定 <code>monthValue</code> 和<code>dayValue</code> 参数，将会使用 <code>getMonth</code> 和<code>getDate</code> 方法的返回值。</p>

<p>如果有一个参数超出了合理的范围，<code>setFullYear</code> 方法会更新其他参数值，日期对象的日期值也会被相应更新。 例如，为 <code>monthValue </code>指定 15， 则年份会加 1，月份值会为 3。</p>

<h2 id="Examples">例子</h2>

<h3 id="Example:_Using_setFullYear">例子：使用<code>setFullYear</code>方法</h3>

<pre class="brush:js">var theBigDay = new Date();
theBigDay.setFullYear(1997);</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_Also">相关链接</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setYear()")}}</li>
</ul>
