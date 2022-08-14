---
title: RTCDataChannelEvent()
slug: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
translation_of: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p><code><strong>RTCDataChannelEvent()</strong></code> 생성자는 새로운 {{domxref("RTCDataChannelEvent")}}를 생성합니다.</p>

<div class="note">
<p>이 이벤트는 알아서 WebRTC 레이어에 생성되고 전달되기 때문에, <code>RTCDataChannelEvent</code>를 수동으로 생성하는 일은 거의 없습니다.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"> var <em>event</em> = new RTCDataChannelEvent(<em>type</em>, R<em>tcDataChannelEventInit</em>);</pre>

<h3 id="패러미터">패러미터</h3>

<dl>
 <dt><code>type</code></dt>
 <dd>이벤트의 이름을 알려주는 {{domxref("DOMString")}}입니다. 이름은 <code>RTCDataChannelEvent</code> 타입의 한 종류인 "datachannel" 딱 한 가지만 존재합니다.</dd>
 <dt><code>RtcDataChannelEventInit</code></dt>
 <dd>아래의 필드를 가지는 <code>RTCDataChannelEventInit</code> 딕셔너리 입니다:
 <ul>
  <li><code>"channel"</code>은 {domxref("RTCDataChannel")}}의 한 종류로, 이벤트에 의해 데이터 채널이 확인되었다는 것을 알려줍니다.</li>
  <li><code>"bubbles"</code>은 옵션으로 설정이 가능하며, <code>EventInit</code>에서 상속됩니다. 이는 해당 이벤트가 무조건 <code>bubble</code>이 되어야하는지의 여부를 알려줍니다. 기본 값은 <code>false</code>입니다</li>
  <li><code>"cancelable"</code>은 옵션으로 설정이 가능하며, <code>EventInit</code>에서 상속됩니다. 이는 해당 이벤트가 취소 될 수 있는지의 여부를 알려줍니다. 기본 값은 <code>false</code>입니다.</li>
 </ul>
 </dd>
</dl>

<h3 id="값">값</h3>

<p>명시한대로 설정된 신규 {{domxref("RTCDataChannelEvent")}} 입니다.</p>

<h2 id="예시">예시</h2>

<p>아래 예제는 신규 {{event("datachannel")}}를 생성합니다. <code>dc</code>는 이미 존재하는 데이터 채널을 뜻합니다.</p>

<pre class="brush: js">var event = new RTCDataChannelEvent("datachannel", {"channel": dc});</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.RTCDataChannelEvent.RTCDataChannelEvent")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
 <li>{{domxref("RTCDataChannel")}}</li>
 <li>{{domxref("RTCPeerConnection")}}</li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample">A simple RTCDataChannel sample</a></li>
</ul>
