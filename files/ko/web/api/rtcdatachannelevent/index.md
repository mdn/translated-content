---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
translation_of: Web/API/RTCDataChannelEvent
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p><strong><code>RTCDataChannelEvent()</code></strong> 생성자는 {{domxref("datachannel")}}을 나타내는 신규 {{domxref("RTCDataChannelEvent")}} 객체를 반환합니다. 이 이벤트는 두 피어 사이에서 원격 피어가 {{domxref("RTCDataChannel")}}을 개통하도록 요청되었을때, {{domxref("RTCPeerConnection")}} 에 전달됩니다. </p>

<p>WebRTC가 적절한 시기에 생성하고 전달해주기 때문에, <code>RTCDataChannelEvent</code>를 직접 생성하는 일은 매우 드물 것입니다. <code>RTCPeerConnection</code>에 의해 {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} 이벤트가 받아지는지를 감청하고, 해당 이벤트를 받으면 {{domxref("RTCDataChannelEvent.channel")}} 속성을 사용해서 개통된 데이터 채널에 대한 권한을 얻는 것이 일반적입니다.</p>

<h2 id="생성자">생성자</h2>

<dl>
 <dt>{{domxref("RTCDataChannelEvent.RTCDataChannelEvent()", "RTCDataChannelEvent()")}}</dt>
 <dd>새로운 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent" title="The RTCDataChannelEvent() constructor returns a new RTCDataChannelEvent object, which represents a datachannel event. These events sent to an RTCPeerConnection when its remote peer is asking to open an RTCDataChannel between the two peers."><code>RTCDataChannelEvent</code></a>을 생성하는 <code><strong>RTCDataChannelEvent()</strong></code> 생성자입니다.</dd>
</dl>

<h2 id="속성">속성</h2>

<p><em><a href="https://developer.mozilla.org/en-US/docs/Web/API/Event" title="The Event interface represents an event which takes place in the DOM."><code>Event</code></a>의 속성을 상속합니다.</em></p>

<dl>
 <dt>{{domxref("RTCDataChannelEvent.channel")}} {{readOnlyInline}}</dt>
 <dd>읽기 속성인 <code><strong>RTCDataChannelEvent</strong></code><strong><code>.channel</code></strong>는 이벤트와 관련된 RTCDataChannel를 반환합니다. </dd>
</dl>

<h2 id="메소드">메소드</h2>

<p>이 인터페이스에는 메소드가 존재하지 않습니다. 대신, <em><a href="https://developer.mozilla.org/en-US/docs/Web/API/Event" title="The Event interface represents an event which takes place in the DOM."><code>Event</code></a></em>의 메소드를 상속합니다.</p>

<h2 id="예시">예시</h2>

<p>아래의 예제에서는 <code>datachannel</code> 이벤트 핸들러를 설정해서 데이터 채널의 참조된 정보를 저장하고, 모니터링 할 이벤트들에 대한 핸들러를 새로 설정합니다. {{domxref("RTCDataChannelEvent.channel", "channel")}} 속성은 다른 피어와의 연결을 나타내는 {{domxref("RTCDataChannel")}}을 제공합니다.</p>

<pre class="brush: js">pc.ondatachannel = function(event) {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
}
</pre>

<p>데이터 채널을 어떤 방식으로 사용하는지에 대한 더 좋은 예제는 <a href="/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample">A simple RTCDataChannel sample</a>를 확인하십시오.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.RTCDataChannelEvent")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC" title="/en-US/docs/CSS/Using_CSS_animations">WebRTC</a></li>
 <li>{{domxref("RTCDataChannel")}}</li>
 <li>{{domxref("RTCDataChannel.ondatachannel")}}</li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample">A simple RTCDataChannel sample</a></li>
 <li>{{domxref("RTCPeerConnection")}} (the target interface for {{event("datachannel")}} events)</li>
</ul>
