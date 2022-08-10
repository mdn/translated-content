---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
tags:
  - JavaScript
  - Property
  - Prototype
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/global
---
<div>
 {{JSRef("Global_Objects", "RegExp")}}</div>
<h2 id="Summary">概述</h2>
<p><code><strong>global</strong></code> 属性表明正则表达式是否使用了 "<code>g</code>" 标志。<code>global</code> 是一个正则表达式实例的只读属性。</p>
<div>
 {{js_property_attributes(0,0,0)}}</div>
<h2 id="Description">描述</h2>
<p><code>global</code> 的值是布尔对象，如果使用了 "<code>g</code>" 标志，则返回 <code>true</code>；否则返回 <code>false</code>。 "<code>g</code>" 标志意味着正则表达式应该测试字符串中所有可能的匹配。</p>
<p>你无法直接更改此属性。</p>
<h2 id="Examples">示例</h2>
<h3 id="Example:_Using_MIN_VALUE">例子：使用 <code>global</code></h3>
<pre class="brush:js">var regex = new RegExp("foo", "g")

console.log(regex.global) // true
</pre>
<h2 id="规范">规范</h2>
{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="See_also">相关链接</h2>
<ul>
 <li>{{jsxref("RegExp.prototype.ignoreCase")}}</li>
 <li>{{jsxref("RegExp.prototype.lastIndex")}}</li>
 <li>{{jsxref("RegExp.prototype.multiline")}}</li>
 <li>{{jsxref("RegExp.prototype.source")}}</li>
 <li>{{jsxref("RegExp.prototype.sticky")}}</li>
</ul>
