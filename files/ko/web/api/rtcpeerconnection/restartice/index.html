---
title: RTCPeerConnection.restartIce()
slug: Web/API/RTCPeerConnection/restartIce
translation_of: Web/API/RTCPeerConnection/restartIce
---
<p>{{APIRef("WebRTC API")}}</p>

<p><span class="seoSummary"><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> API의 {{domxref("RTCPeerConnection")}} 인터페이스에서는 <code><strong>restartIce()</strong></code> 메소드를 제공해서 연결의 양쪽에서 {{Glossary("ICE")}} candidate의 재수집 요청을 간단하게 할 수 있게 만들어줍니다.</span></p>

<p><code>restartIce()</code>가 반환을 한 뒤에는, offer가 시그널링 메커니즘을 통해 전달되고, 원격 피어가 받은 offer를 description으로 설정을 하게 됩니다.이 과정이 완료되면, {{domxref("RTCPeerConnection.createOffer", "createOffer()")}}에 대한 다음 호출로 반환된 offer가 로컬 피어 (로컬로 설정이 된 경우)와 원격 피어에서 ICE 재시작을 발생시키도록 설정됩니다. </p>

<p><code>restartIce()</code>는 <code>RTCPeerConnection</code>에 대한 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 이벤트를 발생시켜서 어플리케이션이 신호 채널을 통해서 협상을 수행하도록 합니다.</p>

<p>만약 협상이 롤백 현상이나 수신받은 offer가 이미 협상 중으로 인해 실패하게되면, {{domxref("RTCPeerConnection")}}가  ICE 재시작 요청을 했다는 것을 자동으로 기억합니다. 다음번에 연결의 {{domxref("RTCPeerConnection.signalingState", "signalingState")}}가 <code>stable</code>로 바뀌게되면, 연결 인터페이스가 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 이벤트를 발생시킵니다. 이 과정은 ICE 재시작 과정이 온전히 완료될 때까지 반복됩니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>RTCPeerConnection</em>.restartIce();</pre>

<h3 id="매개변수">매개변수</h3>

<p>없음.</p>

<h3 id="반환_값">반환 값</h3>

<p><code>undefined</code>.</p>

<p>{{domxref("RTCPeerConnection.createOffer", "createOffer()")}}를 사용해서 만들어진 다음 offer가 신호 메커니즘을 통해 원격 유저에게 전달이 되면, ICE 재시작을 시작하도록 만듭니다. ICE를 재시작하게되면 기본적으로 ICE가 초기화되고, 새로운 증명서를 사용해서 신규 candidate를 생성합니다. 기존에 존재하던 미디어 전송/수신은 이 과정동안에는 방해받지 않습니다.</p>

<p>ICE 재시작의 작동원리를 좀 더 자세히 알고 싶다면, {{SectionOnPage("/ko/docs/Web/API/WebRTC_API/Session_lifetime", "ICE restart")}}와 {{RFC(5245, "ICE specification", "9.1.1.1")}}를 참고하십시오.</p>

<h2 id="예시">예시</h2>

<p>아래의 예제는 {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} 이벤트에 대한 핸들러입니다. 이 핸들러는 ICE를 재시작하여 <code>failed</code> 상태로의 전환을 관리합니다. </p>

<pre class="brush: js">pc.addEventListener("iceconnectionstatechange", event =&gt; {
  if (pc.iceConnectionState === "failed") {
    /* possibly reconfigure the connection in some way here */
    /* then request ICE restart */
    pc.restartIce();
  }
});
</pre>



<p>위의 코드를 사용하여 ICE 협상 중 <code>failed</code> 상태로 전환되면 코드가 정상적으로 재협상 되어야 하기 때문에 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 이벤트가 발생합니다. 그러나, <code>restartIce()</code>를 호출했기 때문에 <code>negotiationneeded</code>에 대한 핸들러에서 발생하는 {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} 호출은 일반적으로 수행되는 재협상이 아니라 ICE 재시작을 발생시킵니다.</p>

<h2 id="사양서">사양서</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">사양서</th>
   <th scope="col">상태</th>
   <th scope="col">코멘트</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WebRTC 1.0', '#dom-rtcpeerconnection-restartice', 'RTCPeerConnection.restartIce()')}}</td>
   <td>{{Spec2('WebRTC 1.0')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.RTCPeerConnection.restartIce")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling">Signaling and video calling</a></li>
</ul>
