---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
translation_of: Web/API/BroadcastChannel/name
---
<p>{{APIRef("BroadCastChannel API")}}</p>

<p><code><strong>BroadcastChannel.name</strong></code> 是类型为 {{domxref("DOMString")}} 的只读属性，是频道的唯一标识。属性 name 是在创建时传入 {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} 构造函数的，所以是只读的。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <em>str</em> = <em>channe<code>l</code></em><code>.name;</code>
</pre>

<h2 id="示例">示例</h2>

<pre class="brush: js">// 连接到指定频道
var bc = new BroadcastChannel('test_channel');

// 其它操作 (如：postMessage, …)

// 在控制台打印频道名称
console.log(bc.name); // "test_channel"

// 当完成后，断开与频道的连接
bc.close();</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.BroadcastChannel.name")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>所属接口：{{domxref("BroadcastChannel")}}</li>
</ul>
