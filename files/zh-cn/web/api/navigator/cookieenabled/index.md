---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
tags:
  - API
  - DOM
  - cookie
  - 属性
translation_of: Web/API/Navigator/cookieEnabled
---
<p>{{ ApiRef("HTML DOM") }}</p>

<p><code>navigator.cookieEnabled</code> 返回一个布尔值，来表示当前页面是否启用了 cookie。本属性为只读属性。</p>

<h2 id="语法">语法</h2>

<pre class="brush: js">let cookieEnabled = navigator.cookieEnabled;
</pre>

<ul>
 <li><code>cookieEnabled</code> 是个<a href="/zh-CN/docs/Glossary/Boolean">布尔值</a>： <code>true</code> 或 <code>false</code>。</li>
</ul>

<h2 id="示例">示例</h2>

<pre class="brush: js">if (!navigator.cookieEnabled) {
  // 浏览器不支持 cookie，或者用户禁用了 cookie。
}
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Navigator.cookieEnabled")}}</p>
