---
title: PerformanceTiming.domContentLoadedEventEnd
slug: Web/API/PerformanceTiming/domContentLoadedEventEnd
tags:
  - 性能
translation_of: Web/API/PerformanceTiming/domContentLoadedEventEnd
---
<p>{{APIRef("Navigation Timing")}}</p>

<h2 id="Summary">Summary</h2>

<p><strong><code>PerformanceTiming.domContentLoadedEventEnd</code></strong> 为只读属性，返回一个无符号长整型数值（<code>unsigned long），以 UNIX 时间戳的形式表示一个时刻，这个时刻为所有需要尽早执行的脚本不管是否按顺序，都已经执行完毕。（译注：即 DOM Ready）</code></p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>time</em> = <em>performanceTiming</em>.domContentLoadedEventEnd;</pre>

<h2 id="规范">规范</h2>

<p>因为 <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing 规范</a>已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="See_also">See also</h2>

<ul>
 <li>所属的 {{domxref("PerformanceTiming")}} 接口</li>
</ul>
