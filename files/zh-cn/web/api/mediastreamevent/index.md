---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
translation_of: Web/API/MediaStreamEvent
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p> <strong><code>MediaStreamEvent</code></strong> 接口表示发生在 {{domxref("MediaStream")}}中的事件。这种类型返回两个事件: {{event("addstream")}} 和 {{event("removestream")}}.</p>

<h2 id="Properties">Properties</h2>

<p><em>一个 {{domxref("MediaStreamEvent")}} 作为一个 {{domxref("Event")}}, </em>该事件也实现了这些属性。</p>

<dl>
 <dt>{{domxref("MediaStreamEvent.stream")}} {{readOnlyInline}}</dt>
 <dd>包含了 {{domxref("MediaStream")}} 以及相关的事件流。</dd>
</dl>

<h2 id="Constructors">Constructors</h2>

<dl>
 <dt>{{domxref("MediaStreamEvent.MediaStreamEvent()", "MediaStreamEvent()")}}</dt>
 <dd>返回一个新的 <code>MediaStreamEvent</code>.  它需要两个参数，第一个为 {{domxref("DOMString")}} 代表事件的类型; 第二个是一个 {{domxref("MediaStream")}}集合 .</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>一个 {{domxref("MediaStreamEvent")}} 作为一个 {{domxref("Event")}}, 这个事件也实现了这些属性</em>.  <em>没有特定的 <em>{{domxref("MediaStreamEvent")}}</em> 方法。</em></p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">pc.onaddstream = function( ev ) {
  alert("A stream (id: '" + ev.stream.id + "') has been added to this connection.");
};
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
 <li>Its usual target: {{domxref("RTCPeerConnection")}}.</li>
</ul>
