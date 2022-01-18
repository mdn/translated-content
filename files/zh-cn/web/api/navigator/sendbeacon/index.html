---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
tags:
  - API
  - Beacon
  - Web Performance
  - sendBeacon
translation_of: Web/API/Navigator/sendBeacon
---
<div> {{APIRef("HTML DOM")}}</div>

<p><code><strong>navigator.sendBeacon()</strong></code> 方法可用于通过{{Glossary("HTTP")}}将少量数据异步传输到Web服务器。</p>

<h2 id="语法">语法</h2>

<pre>navigator.sendBeacon(<em>url, </em><em>data</em>);</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>url</code></dt>
 <dd><code>url</code> 参数表明 <code>data</code> 将要被发送到的网络地址。</dd>
</dl>

<dl>
 <dt><code>data</code></dt>
 <dd><code>data</code> 参数支持发送 {{domxref("ArrayBuffer")}} 、 {{domxref("ArrayBufferView")}} 、 {{domxref("Blob")}}、 {{domxref("DOMString")}} 、 {{domxref("FormData")}} 或者 {{domxref("URLSearchParams")}} 类型的数据。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>当用户代理成功把数据加入传输队列时，<strong><code>sendBeacon()</code></strong> 方法将会返回 <code>true</code>，否则返回 <code>false</code>。</p>

<h2 id="描述">描述</h2>

<p>这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向web服务器发送数据。过早的发送数据可能导致错过收集数据的机会。然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。因为用户代理通常会忽略在 {{event("unload")}} 事件处理器中产生的异步 {{domxref("XMLHttpRequest")}}。</p>

<p>为了解决这个问题， 统计和诊断代码通常要在 <code>unload</code> 或者 {{event("beforeunload")}} 事件处理器中发起一个同步 <code>XMLHttpRequest</code> 来发送数据。同步的 <code>XMLHttpRequest</code> 迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。下一个页面对于这种较差的载入表现无能为力。</p>

<p>有一些技术被用来保证数据的发送。其中一种是通过在卸载事件处理器中创建一个图片元素并设置它的 src 属性的方法来延迟卸载以保证数据的发送。因为绝大多数用户代理会延迟卸载以保证图片的载入，所以数据可以在卸载事件中发送。另一种技术是通过创建一个几秒钟的 no-op 循环来延迟卸载并向服务器发送数据。</p>

<p>这些技术不仅编码模式不好，其中的一些甚至并不可靠而且会导致非常差的页面载入性能。</p>

<p>下面的例子展示了一个理论上的统计代码——在卸载事件处理器中尝试通过一个同步的 <code>XMLHttpRequest</code> 向服务器发送数据。这导致了页面卸载被延迟。</p>

<pre class="brush: js">window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // 第三个参数表明是同步的 xhr
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
</pre>

<p>这就是 <strong><code>sendBeacon()</code></strong> 方法存在的意义。使用 <strong><code>sendBeacon() </code></strong>方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能。这就解决了提交分析数据时的所有的问题：数据可靠，传输异步并且不会影响下一页面的加载。此外，代码实际上还要比其他技术简单许多！</p>

<p>下面的例子展示了一个理论上的统计代码模式——通过使用 <strong><code>sendBeacon()</code></strong> 方法向服务器发送数据。</p>

<pre class="brush: js">window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
</pre>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Beacon', '#sec-sendBeacon-method', 'sendBeacon()')}}</td>
   <td>{{Spec2('Beacon')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Navigator.sendBeacon")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{domxref("navigator", "navigator")}}</li>
</ul>
