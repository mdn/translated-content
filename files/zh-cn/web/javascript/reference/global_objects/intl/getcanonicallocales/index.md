---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
tags:
  - 区域语言代码
  - 去重
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.getCanonicalLocales()</code></strong> 方法返回一个数组，数组包含规范的区域语言代码，重复的元素将会被去除，每一个元素都会被验证为格式有效的区域语言代码。</p>

<div>{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}</div>



<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Intl.getCanonicalLocales(locales)</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>想要规范化的字符串数组。</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>一个包含规范区域语言代码的数组。</p>

<h2 id="例子">例子</h2>

<pre class="brush: js">Intl.getCanonicalLocales('EN-US'); // ["en-US"]
Intl.getCanonicalLocales(['EN-US', 'Fr']); // ["en-US", "fr"]

Intl.getCanonicalLocales('EN_US');
// RangeError:'EN_US' is not a structurally valid language tag
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}</li>
 <li>{{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}</li>
 <li>{{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}</li>
</ul>
