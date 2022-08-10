---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---
<div>{{JSRef("Global_Objects", "Date")}}</div>

<p><code><strong>setMilliseconds()</strong></code> 方法会根据本地时间设置一个日期对象的豪秒数。</p>

<div>{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}</div>



<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><var>dateObj</var>.setMilliseconds(<em>millisecondsValue</em>)</pre>

<h3 id="Parameters">参数</h3>

<dl>
 <dt><code>millisecondsValue</code></dt>
 <dd>一个 0 到 999 的数字，表示豪秒数。</dd>
</dl>

<h2 id="Description">描述</h2>

<p>如果指定的数字超出了合理范围，则日期对象的时间信息会被相应地更新。例如，如果指定了 1005，则秒数加 1，豪秒数为 5。</p>

<h2 id="Examples">例子</h2>

<h3 id="Example:_Using_setMilliseconds">例子：使用<code>setMilliseconds</code></h3>

<pre class="brush:js">var theBigDay = new Date();
theBigDay.setMilliseconds(100);
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_Also">相关链接</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMilliseconds()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMilliseconds()")}}</li>
</ul>
