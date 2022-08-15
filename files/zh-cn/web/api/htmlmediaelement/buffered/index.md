---
title: HTMLMediaElement.buffered
slug: Web/API/HTMLMediaElement/buffered
---
<div>{{APIRef("HTML DOM")}}</div>

<p><strong><code>HTMLMediaElement.buffered</code></strong> 返回一个只读 {{domxref("TimeRanges")}} 对象 返回媒体已缓冲的区域</p>

<div class="note"><strong>Note:</strong> This feature is not available in <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a>.</div>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox">var <em>timeRange</em> = <em>audioObject</em>.buffered</pre>

<h3 id="返回值">返回值</h3>

<p>对象{{domxref("TimeRanges")}}</p>

<p>length - 获得音频/视频中已缓冲范围的数量</p>

<p>buffered.start 开始的区域 </p>

<p>buffered.end 结束的区域</p>

<h2 id="例子">例子</h2>

<pre>var obj = document.createElement('video');
console.log(obj.buffered); // TimeRanges { length: 0 }
console.log(obj.buffered.start(0));//第一个缓存开始的区域
console.log(obj.buffered.end(0));//第一个缓存结束的区域</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.HTMLMediaElement.buffered")}}

<h2 id="See_Also">也可以看看</h2>

<ul>
 <li>The interface defining it, {{domxref("HTMLMediaElement")}}.</li>
</ul>
