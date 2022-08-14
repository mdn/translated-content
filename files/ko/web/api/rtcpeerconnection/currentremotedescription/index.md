---
title: RTCPeerConnection.currentRemoteDescription
slug: Web/API/RTCPeerConnection/currentRemoteDescription
translation_of: Web/API/RTCPeerConnection/currentRemoteDescription
---
<p>{{WebRTCSidebar}}</p>

<p>읽기 속성인 <code><strong>RTCPeerConnection.currentRemoteDescription</strong></code>은 마지막 {{domxref("RTCPeerConnection")}} 이후 가장 최근에 원격 유저와의 네고시에이션 및 연결을 성공적으로 마친 연결의 원격 엔드 포인트를 알려주는 {{domxref("RTCSessionDescription")}} 객체를 반환합니다. 추가적으로 이 속성은 description에 의해 표현되는 마지막 offer 및 answer가 처음 시작되면 ICE 에이전트에 의해 생성이 되었을 수도 있는 모든 ICE candidate들의 리스트를 포함합니다.</p>

<p><code>currentRemoteDescription</code>를 바꾸기 위해서는,  {{domxref("RTCPeerConnection.setRemoteDescription()")}}를 호출해서 이 값이 설정되도록 만들어주는 연속된 이벤트를 활성화하십시오. 왜 바꾸는 것이 바로 적용이 안되는지 및 어떻게 작동하는지 더 자세히 알고 싶다면, {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Pending and current descriptions")}}를 참조하십시오.</p>

<div class="note">
<p>{{domxref("RTCPeerConnection.remoteDescription")}}와 다르게, 이 값은 연결의 로컬 엔드 포인트에 대한 실제 현재 상태를 보여줍니다. <code>remoteDescription</code>은 연결이 현재 어느 상태로 바뀌는지에 대한 설명도 명시 할 수 있습니다.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>sessionDescription</em> = <em>RTCPeerConnection</em>.currentRemoteDescription;</pre>

<h3 id="반환_값">반환 값</h3>

<p>설정이 되어있다면, 연결의 원격 엔드포인트에 대한 현재 설명을 반환합니다. 설정되어있지않으면, 이 값은 <code>null</code>입니다. </p>

<h2 id="예시">예시</h2>

<p>아래 예제는 <code>currentRemoteDescription</code> 를 확인하고 객체의 <code>type</code> 및 <code>sdp</code> 필드를 경고로 띄워줍니다.</p>

<pre class="brush: js">var pc = new RTCPeerConnection();
…
var sd = pc.currentRemoteDescription;
if (sd) {
  alert("Local session: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("No local session yet.");
}
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.RTCPeerConnection.currentRemoteDescription")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li>{{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.remoteDescription")}}</li>
 <li>{{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}</li>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
</ul>
