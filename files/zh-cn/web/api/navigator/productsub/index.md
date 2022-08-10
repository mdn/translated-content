---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
tags:
  - API
  - DOM
  - 只读
  - 属性
translation_of: Web/API/Navigator/productSub
---
<div>{{ ApiRef("HTML DOM") }}</div>

<p><code><strong>Navigator.productSub</strong></code> 只读属性返回当前浏览器的编译版本号。 </p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><em>prodSub</em> = window.navigator.productSub</pre>

<ul>
 <li><code>prodSub</code>是一个字符串。</li>
</ul>

<h2 id="Example">例子</h2>

<pre class="brush:js">&lt;script&gt;
function prodsub() {
  var dt = document.getElementById("d").childNodes[0];
  dt.data = window.navigator.productSub;
}
&lt;/script&gt;

&lt;button onclick="prodsub();"&gt;productSub&lt;/button&gt;
// returns: 20010725</pre>

<h2 id="Notes">注释</h2>

<p>在 IE 上，这个属性返回 undefined。</p>

<p>在苹果 Safari 上和 Google 的 Ghrome 上这个属性总是返回 20030107。</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Navigator.productSub")}}</p>
