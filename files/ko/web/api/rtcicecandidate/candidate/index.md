---
title: RTCIceCandidate.candidate
slug: Web/API/RTCIceCandidate/candidate
translation_of: Web/API/RTCIceCandidate/candidate
---
<div>{{APIRef("WebRTC")}}</div>

<p><span class="seoSummary">{{domxref("RTCIceCandidate")}} 인터페이스에 대한 읽기 속성인 <code><strong>candidate</strong></code>는 candidate에 대해 자세히 설명해주는 {{domxref("DOMString")}}를 반환합니다. </span></p>

<p><code>RTCIceCandidate</code>의 거의 모든 다른 속성들은 사실 이 문자열에서 가져와진 것입니다.</p>

<p>이 속성은 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}를 사용해서 신규 candidate 객체를 구성 할 때, {{domxref("RTCIceCandidateInit.candidate", "candidate")}} 속성의 값을 지정해서 설정 할 수 있습니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <em>candidate</em> = <em>RTCIceCandidate</em>.candidate;</pre>

<h3 id="값">값</h3>

<p>반환되는 {{domxref("DOMString")}} 값은 {{Glossary("SDP")}}의 속성인 <code>"candidate"</code>에서 직접 가져와진 candidate의 속성에 대해 알려줍니다. candidate 문자열은 해당 candidate에 대한 네트워크 연결 정보를 명시합니다. <code>candidate</code>가 빈 문자열 (<code>""</code>)이라면, 더 이상 남아있는 candidate가 없다는 뜻입니다. 빈 문자열은 "candidate 종료" 표시자로도 알려져있습니다.</p>

<p>candidate 문자열에 대한 구문은 {{RFC(5245, "", 15.1)}}에 설명되어있습니다. </p>

<pre>a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host</pre>

<p>위와 같은 a-line (속성 line)에서 해당하는 <code>candidate </code>문자열의 값은 <code>"candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host"</code>가 됩니다.</p>

<p>{{Glossary("user agent")}}는 항상 가장 높거나 같은 {{domxref("RTCIceCandidate.priority", "priority")}}를 가진 candidate를 선호합니다. 위의 예시에서, 우선 순위는 <code>2043278322</code> 입니다. 속성은 단일 스페이스로 특정한 순서가 있습니다. 위의 candidate에 대한 전체 속성 리스트는 다음과 같습니다:</p>

<ul>
 <li>{{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325</li>
 <li>{{domxref("RTCIceCandidate.component", "component")}} = <code>"rtp"</code> (<code>"rtp"</code>는 1이 문자열에 있고, <code>"rtcp"</code>는 2가 문자열에 있습니다.)</li>
 <li>{{domxref("RTCIceCandidate.protocol", "protocol")}} = <code>"udp"</code></li>
 <li>{{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322</li>
 <li>{{domxref("RTCIceCandidate.ip", "ip")}} = <code>"192.168.0.56"</code></li>
 <li>{{domxref("RTCIceCandidate.port", "port")}} = 44323</li>
 <li>{{domxref("RTCIceCandidate.type", "type")}} = <code>"host"</code></li>
</ul>

<h2 id="예시">예시</h2>

<p>아래 예제에서는 시그널링 과정에서 원격 유저에게서 수신 받은 ICE candidate 정보를 가진 SDP 문자열을 입력으로 받는 함수입니다. </p>

<pre class="brush: js">function handleNewIceCandidate(candidateSDP) {
  var candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}</pre>

<p><code>handleNewIceCandidate()</code> 함수는 수신 받은 candidate의 SDP 문자를 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}에 보내고, candidate를 알려주는 {{domxref("RTCIceCanddiate")}} 객체를 반환 받습니다.</p>

<p>그 후, 신규 candidatesms {{domxref("RTCPeerConnection.addIceCandidate()")}}에 전달되서 candidate의 리스트에 추가해서 WebRTC가 연결 설정으로 사용 하도록 고려합니다. </p>

<p>위 예제는 더 간단하게 표현 될 수 있습니다. ECMAScript 2016의 고급 기능들을 사용해서 아래와 같이 나타낼 수 있습니다:</p>

<pre class="brush: js">let handleNewIceCandidate = candidateSDP =&gt;
  myPeerConnection.addIceCandidate(new RTCIceCandidate(candidateSDP));</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.RTCIceCandidate.candidate")}}
