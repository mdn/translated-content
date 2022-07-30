---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
translation_of: Web/API/AbortSignal/aborted
---
<div>{{APIRef("DOM")}}{{SeeCompatTable}}</div>

<p><strong><code>aborted</code></strong>是一个只读属性，它返回一个{{domxref("Boolean")}}表示与 DOM 通讯的信号是 (<code>true</code>) 否 (<code>false</code>) 已被放弃。</p>

<h2 id="语法">语法</h2>

<pre class="brush: js">var isAborted = abortSignal.aborted;</pre>

<h3 id="取值">取值</h3>

<p>一个{{domxref("Boolean")}}</p>

<h2 id="示例">示例</h2>

<p>在下面的代码段中，我们创建了一个新的<code>AbortController</code>对象，并获取它的{{domxref("AbortSignal")}} (位于<code>signal</code>属性中)。然后我们用<code>aborted</code>属性检查这个信号是否已被放弃，并把相应的日志发送给终端。</p>

<pre class="brush: js">var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log('Request has been aborted') : console.log('Request not aborted');
</pre>

<h2 id="规格">规格</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.AbortSignal.aborted")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
