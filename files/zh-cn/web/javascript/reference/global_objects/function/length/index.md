---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
---
<div>{{JSRef}}</div>

<p><code><strong>length</strong></code> 属性指明函数的形参个数。</p>

<p>{{EmbedInteractiveExample("pages/js/function-length.html")}}</p>

<div>{{js_property_attributes(0,0,1)}}</div>

<h2 id="Description">描述</h2>

<p><code>length</code> 是函数对象的一个属性值，指该函数期望传入的参数数量，即形参的个数。</p>

<p>形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。</p>

<p>与之对比的是，  {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} 是函数被调用时实际传参的个数。</p>

<h3 id="Function_构造器的属性"><code>Function</code> 构造器的属性</h3>

<p>{{jsxref("Function")}} 构造器本身也是个<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a>。他的 <code>length</code> 属性值为 1 。该属性 Writable: <code>false</code>, Enumerable: <code>false</code>, Configurable: <code>true</code>.</p>

<h3 id="Function.prototype_对象的属性"><code>Function</code>.prototype 对象的属性</h3>

<p> {{jsxref("Function.prototype")}}  对象的 length 属性值为 0 。</p>

<h2 id="Examples">示例</h2>

<pre class="brush: js">console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */

console.log((function(...args) {}).length);
// 0, rest parameter is not counted

console.log((function(a, b = 1, c) {}).length);
// 1, only parameters before the first one with
// a default value is counted</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>{{Compat}}</div>

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
