---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/buffer
---
<div>{{JSRef}}</div>

<p> <strong><code>buffer</code></strong> 属性描述了在构造时被 DataView 引用的 {{jsxref("ArrayBuffer")}}。</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var>dataview</var>.buffer</pre>

<h2 id="描述">描述</h2>

<p><code>buffer</code> 属性是一个访问器 (accessor) 属性，它的 set 属性为 undefined，这意味着它是只读的。值在 <code>DataView 被创建时就确定了，且不能改变。</code></p>

<h2 id="示例">示例</h2>

<h3 id="使用_buffer_属性">使用 <code>buffer</code> 属性</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
