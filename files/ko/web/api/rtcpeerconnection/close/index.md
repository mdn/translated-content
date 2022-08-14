---
title: RTCPeerConnection.close()
slug: Web/API/RTCPeerConnection/close
translation_of: Web/API/RTCPeerConnection/close
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p><code><strong>RTCPeerConnection.close()</strong></code> 메소드로 피어 연결을 종료합니다. </p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>RTCPeerConnection</em>.close();
</pre>

<p><em>이 메소드는 입력 패러미터가 없으며, 반환 값도 없습니다.</em></p>

<p>이 메소드를 호출하게되면, 모든 진행 중인 ICE 프로세싱 및 활성화된 스트림을 종료하고, <code>RTCPeerConnection</code>의 ICE 에이전트를 종료합니다. 이 방법으로 ICE 에이전트에 의해 사용되는 리소스들 (TURN 허가 포함) 을 해제시킵니다. 모든 {{domxref("RTCRtpSender")}} 객체들은 이 메소드가 반환되면 정지됩니다. (아직 종료 중인 과정에 있을 수도 있습니다만, 사실상 정지됩니다.)</p>

<p>이 메소드가 반환되면, {{domxref("RTCPeerConnection.signalingState")}}에 의해 반환된 signaling 상태가 <code>closed</code>로 됩니다.</p>

<p>같은 원격 유저와의 새로운 연결 생성을 시도하기전에 이전에 존재하던 {{domxref("RTCPeerConnection")}}의 모든 참조 값들을 <code>delete</code>하십시오. 삭제되지 않은 참조 값들이 브라우저에서 오류를 초래 할 수 있습니다.</p>

<h2 id="예시">예시</h2>

<pre class="brush: js">var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
  pc.close(); // 첫 메세지를 받으면, 연결을 종료
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function () {
  console.log("datachannel close");
};</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.RTCPeerConnection.close")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
 <li>{{domxref("RTCPeerConnection")}}</li>
 <li>{{domxref("RTCPeerConnection.signalingState")}}</li>
</ul>
