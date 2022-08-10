---
title: PerformanceTiming.domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
translation_of: Web/API/PerformanceTiming/domContentLoadedEventStart
---
<p>{{APIRef("Navigation Timing")}}</p>

<h2 id="概要">概要</h2>

<p><strong><code>PerformanceTiming.domContentLoadedEventStart</code></strong> 是一个返回代表一个时刻的 <code>unsigned long long</code> 型只读属性，为解析器发出 {{event("DOMContentLoaded")}} 事件之前，即所有的需要被运行的脚本已经被解析之时的 Unix 毫秒时间戳。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><em>time</em> = <em>performanceTiming</em>.domContentLoadedEventStart;</pre>

<h2 id="规范">规范</h2>

<p>因为 <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing 规范</a>已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="参见">参见</h2>

<ul>
 <li>它属于 {{domxref("PerformanceTiming")}} 接口。</li>
</ul>
