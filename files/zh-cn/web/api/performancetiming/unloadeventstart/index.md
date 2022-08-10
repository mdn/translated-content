---
title: PerformanceTiming.unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
translation_of: Web/API/PerformanceTiming/unloadEventStart
---
<p>{{APIRef("Navigation Timing")}}</p>

<h2 id="概要">概要</h2>

<p><strong><code>PerformanceTiming.unloadEventStart</code></strong> 是一个返回代表一个时刻的 <code>unsigned long long</code> 型只读属性，为 {{event("unload")}} 事件被触发之时的 Unix 毫秒时间戳。如果没有上一个文档，或者上一个文档或需要重定向的页面之一不同源，则该值返回 <code>0。</code></p>

<h2 id="语法">语法</h2>

<pre class="brush: js"><em>time</em> = <em>performanceTiming</em>.unloadEventStart;</pre>

<h2 id="规范">规范</h2>

<p>因为 <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing 规范</a>已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>它属于 {{domxref("PerformanceTiming")}} 接口。</li>
</ul>
