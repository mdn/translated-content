---
title: 'RTCPeerConnection: icegatheringstatechange event'
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
translation_of: Web/API/RTCPeerConnection/icegatheringstatechange_event
---
<div>{{APIRef("WebRTC")}}</div>

<p><span class="seoSummary"><strong><code>icegatheringstatechange</code></strong> 이벤트는 {{Glossary("ICE")}} candidate 수집 과정이 변경되면,  {{domxref("RTCPeerConnection")}}의 이벤트 핸들러인 {{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}}로 전달됩니다.</span> 이는 연결의 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} 속성이 변경되었다는 것을 뜻합니다.</p>

<p>ICE가 처음 연결 candidate들을 수집하게되면 값이 <code>new</code>에서 <code>gathering</code>으로 바뀌게 되고, 이는 연결에 대한 candidate 설정들을 수집하는 과정 중에 있다는 뜻입니다. 값이 complete가 되면, RTCPeerConnection을 구성하는 모든 트랜스포트들이 ICE candidate 수집을 완료한 상태입니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">취소가능여부</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">인터페이스</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">이벤트 핸들러</th>
   <td>{{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}}</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>참고:</strong> ICE candidate 수집 과정이 완료되었는지는 <code>icegatheringstatechange</code>이벤트와 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}의 값이 <code>complete</code>로 바뀌는 것을 확인하면 알 수 있습니다. 하지만, 더 쉬운 방법으로는 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 이벤트에 대한 핸들러가 {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} 속성의 값이 null로 변하는 시점을 체크하도록 할 수 있습니다. 이 속성이 <code>null</code> 값으로 바뀌었다는 것은 즉 모든 candidate 수집이 완료되었다는 뜻입니다. </p>
</div>

<h2 id="예시">예시</h2>

<p>아래 예제는 <code>icegatheringstatechange</code> 이벤트에대한 핸들러를 생성합니다.</p>

<pre class="brush: js">pc.onicegatheringstatechange = ev =&gt; {
  let connection = ev.target;

  switch(connection.iceGatheringState) {
    case "gathering":
      /* candidate 수집 과정 시작 */
      break;
    case "complete":
      /* candidate 수집 완료 */
      break;
  }
}
</pre>

<p>아래처럼 {{domxref("EventTarget.addEventListener", "addEventListener()")}}을 사용해서 <code>icegatheringstatechange</code> 이벤트에 대한 변경을 감지하는 리스너를 추가 할 수 있습니다.</p>

<pre class="brush: js">pc.addEventListener("icegatheringstatechange", ev =&gt; {
  let connection = ev.target;

  switch(connection.iceGatheringState) {
    case "gathering":
      /* candidate 수집 과정 시작 */
      break;
    case "complete":
      /* candidate 수집 완료 */
      break;
  }
}, false);</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.RTCPeerConnection.icegatheringstatechange_event")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling">Signaling and video calling</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Connectivity">WebRTC connectivity</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></li>
</ul>
