---
title: Navigator.maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
translation_of: Web/API/Navigator/maxTouchPoints
---
<div>{{apiref("HTML DOM")}}</div>

<div>返回当前设备能够支持的最大同时触摸的点数。</div>

<div> </div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><em>touchPoints</em> = <em>navigator</em>.maxTouchPoints;
</pre>

<h2 id="样例">样例</h2>

<pre class="brush: js">if (navigator.maxTouchPoints &gt; 1) {
  // 浏览器支持多点触控
}
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.Navigator.maxTouchPoints")}}
