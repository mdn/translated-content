---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - String.sub()
  - 已废弃
translation_of: Web/JavaScript/Reference/Global_Objects/String/sub
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code>sub()</code></strong>方法创建一个 {{HTMLElement("sub")}} HTML 元素，使字符串展示为下标。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><code><var>str</var>.sub()</code></pre>

<h3 id="返回值">返回值</h3>

<p>包含{{HTMLElement("sub")}} HTML 元素的字符串。</p>

<h2 id="描述">描述</h2>

<p><code>sub()</code>方法将字符串嵌入<code>&lt;sub&gt;</code>标签： <code>"&lt;sub&gt;str&lt;/sub&gt;"</code>.</p>

<h2 id="示例">示例</h2>

<h3 id="使用sub()和sup()方法">使用<code>sub()</code>和<code>sup()</code>方法</h3>

<p>下面的示例使用了<code>sub()</code>和{{jsxref("String.prototype.sup()", "sup()")}}方法来格式化字符串：</p>

<pre class="brush: js">var superText = 'superscript';
var subText = 'subscript';

console.log('This is what a ' + superText.sup() + ' looks like.');
// 这就是&lt;sup&gt;superscript&lt;/sup&gt;的样子。

console.log('This is what a ' + subText.sub() + ' looks like.');
// 这就是&lt;sub&gt;subscript&lt;/sub&gt;的样子。
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="另见">另见</h2>

<ul>
 <li>{{jsxref("String.prototype.sup()")}}</li>
</ul>
