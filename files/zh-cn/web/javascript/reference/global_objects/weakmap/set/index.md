---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
tags:
  - JavaScript
  - Method
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---
<div>{{JSRef}}</div>

<p><code><strong>set()</strong></code> 方法根据指定的 <code>key</code> 和 <code>value</code> 在 <code>WeakMap</code>对象中添加新/更新元素。</p>

<div>{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="syntaxbox"><em>wm</em>.set(key, value);</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt>key</dt>
 <dd>必须的。必须是<code>对象</code>。是要在<code>WeakMap</code> 对象中添加元素的 key 部分。</dd>
 <dt>value</dt>
 <dd>必须的。任意的值。是要在<code>WeakMap</code> 对象中添加/元素的 value 部分。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>该<code>WeakMap</code>对象</p>

<h2 id="例子">例子</h2>

<h3 id="使用_set_方法">使用 <code>set</code> 方法</h3>

<pre class="brush: js">var wm = new WeakMap();
var obj = {};

// Add new elements to the WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Update an element in the WeakMap
wm.set(obj, "baz");
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakMap.prototype.get()")}}</li>
 <li>{{jsxref("WeakMap.prototype.has()")}}</li>
</ul>
