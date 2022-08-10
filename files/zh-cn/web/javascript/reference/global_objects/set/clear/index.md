---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
tags:
  - ECMAScript6
  - JavaScript
  - Prototype
  - set
  - 原型
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Set/clear
---
<div>{{JSRef}}</div>

<p><code><strong>clear()</strong></code> 方法用来清空一个 <code>Set</code> 对象中的所有元素。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><code><em>mySet</em>.clear();</code>
</pre>

<h3 id="返回值">返回值</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="Examples">示例</h2>

<pre class="brush: js">var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size;       // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size;       // 0
mySet.has("bar")  // false
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("Set.prototype.delete()")}}</li>
</ul>
