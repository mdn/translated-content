---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
translation_of: Web/API/RTCPeerConnection/connectionState
---
<p>{{APIRef("WebRTC")}}</p>

<p> </p>

<p><strong><code>connectionState 只读，说明当前连接状态。状态值参见</code></strong><code><a href="#RTCPeerConnectionState_enum">RTCPeerConnectionState</a></code><strong> ，值由一个peer connection返回。</strong></p>

<p>值变化时，一个connectionstatechange 事件发送给RTCPeerConnection对象实例中。</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <em>connectionState</em> = <em>RTCPeerConnection</em>.connectionState;</pre>

<h3 id="Value">Value</h3>

<p>The current state of the connection, as a value from the enum <code><a href="#RTCPeerConnectionState_enum">RTCPeerConnectionState</a></code>.</p>

<p>{{page("/en-US/docs/Web/API/RTCPeerConnection", "RTCPeerConnectionState enum", 0, 1)}}</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('WebRTC 1.0', '#widl-RTCPeerConnection-connectionState', 'RTCPeerConnection.connectionState') }}</td>
   <td>{{ Spec2('WebRTC 1.0') }}</td>
   <td>Initial specification.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.RTCPeerConnection.connectionState")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></li>
 <li>{{domxref("RTCPeerConnection")}}</li>
 <li>{{event("connectionstatechange")}}</li>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
</ul>
