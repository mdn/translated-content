---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---
<div>{{JSRef}}</div>

<p><strong><code>toJSON()</code></strong> 方法返回 {{jsxref("Date")}} 对象的字符串形式。</p>

<div>{{EmbedInteractiveExample("pages/js/date-tojson.html")}}</div>



<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.toJSON()</code>
</pre>

<h2 id="Description">描述</h2>

<p>{{jsxref("Date")}} 实例引用一个具体的时间点。 调用 <code>toJSON()</code> 返回一个 JSON 格式字符串 (使用 {{jsxref("Date.prototype.toISOString()", "toISOString()")}})，表示该日期对象的值。默认情况下，这个方法常用于 {{Glossary("JSON")}}序列化{{jsxref("Date")}}对象。</p>

<h2 id="Example">样例</h2>

<h3 id="Example:_Using_toJSON"><code>toJSON()</code> 样例</h3>

<pre class="brush:js">var date = new Date();
console.log(date); //Thu Nov 09 2017 18:54:04 GMT+0800 (中国标准时间)

var jsonDate = (date).toJSON();
console.log(jsonDate); //"2017-11-09T10:51:11.395Z"

var backToDate = new Date(jsonDate);
console.log(backToDate); //Thu Nov 09 2017 18:54:04 GMT+0800 (中国标准时间)
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toUTCString()")}}</li>
</ul>
