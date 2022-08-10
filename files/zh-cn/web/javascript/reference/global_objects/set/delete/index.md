---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
tags:
  - ECMAScript6
  - JavaScript
  - set
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Set/delete
---
<div>{{JSRef}}</div>

<p><code><strong>delete()</strong></code> 方法可以从一个 <code>Set</code> 对象中删除指定的元素。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><code><em>mySet</em>.delete(value);</code></pre>

<h3 id="参数">参数</h3>

<dl>
 <dt>value</dt>
 <dd>将要删除的元素</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>成功删除返回 <code>true</code>，否则返回 <code>false。</code></p>

<h2 id="Examples">示例</h2>

<pre class="brush: js">var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // 返回 false，不包含 "bar" 这个元素
mySet.delete("foo"); // 返回 true，删除成功

mySet.has("foo");    // 返回 false，"foo" 已经成功删除
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="See_also">相关链接</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("Set.prototype.clear()")}}</li>
</ul>
