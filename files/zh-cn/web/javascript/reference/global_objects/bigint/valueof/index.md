---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
---
<div>{{JSRef}}</div>

<p><strong><code>valueOf()</code></strong> 方法返回 {{jsxref("BigInt")}} 对象包装的原始值。</p>

<div>{{EmbedInteractiveExample("pages/js/bigint-valueof.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var>bigIntObj</var>.valueOf()</pre>

<h3 id="返回值">返回值</h3>

<p>表示指定 {{jsxref("BigInt")}} 对象的原始 BigInt 值。</p>

<h2 id="例子">例子</h2>

<h3 id="Using_valueOf">Using <code>valueOf</code></h3>

<pre class="brush: js">typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="请参阅">请参阅</h2>

<ul>
 <li>{{jsxref("BigInt.prototype.toString()")}}</li>
</ul>
