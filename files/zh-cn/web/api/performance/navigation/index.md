---
title: Performance.navigation
slug: Web/API/Performance/navigation
tags:
  - API
  - Navigation Timing
  - Performance
translation_of: Web/API/Performance/navigation
---
<p>{{APIRef("Navigation Timing")}}</p>

<h2 id="概要">概要</h2>

<p>只读属性 <code><strong>Performance</strong></code><strong><code>.navigation </code></strong>会返回一个 {{domxref("PerformanceNavigation")}} 对象。这个对象表示出现在当前浏览上下文的 navigation 类型，比如获取某个资源所需要的重定向次数。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><em>navObject</em> = <em>performance</em>.navigation;</pre>

<h2 id="规范">规范</h2>

<p>因为 <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing 规范</a>已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>这个功能属于接口 {{domxref("Performance")}} .</li>
</ul>
