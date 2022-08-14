---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
translation_of: Web/API/RTCPeerConnection/canTrickleIceCandidates
---
<div>{{APIRef("WebRTC")}}</div>

<p><span class="seoSummary">읽기 속성인 <strong>{{domxref("RTCPeerConnection")}}</strong> 속성의 <code><strong>canTrickleIceCandidates</strong></code>는 원격유저가 <a href="https://tools.ietf.org/html/draft-ietf-mmusic-trickle-ice">trickled ICE candidates</a>를 승인 할 수 있는지의 여부를 알려주는 {{jsxref("Boolean")}}을 반환합니다.</span></p>

<p><strong>ICE trickling</strong> 은 초기 offer 혹은 answer를 다른 유저에게 이미 전달을 했음에도 계속해서 candidate를 보내는 과정을 뜻합니다.</p>

<p>이 속성은 {{domxref("RTCPeerConnection.setRemoteDescription()")}}가 호출된 후에만 설정됩니다. Signaling 프로토콜이 trickling 지원을 감지하는 방법을 제공해서 이 속성에 의존 할 필요가 없이 하는 것이 가장 좋은 방법입니다. WebRTC 브라우저는 항상 trickle ICE를 지원하게 되어있습니다. 하지만 몇몇 경우에 trickling이 지원이 되지 않거나 애초에 지원하는지를 알 수 없다면, 이 속성의 값이 이상한지 확인하고, 또한 초기 offer를 생성하고 전달하기 이전에 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}의 값이 <code>"completed"</code>로 바뀌기전까지 기다릴 수 있습니다. 이러한 방식으로 offer에 모든 candidate들이 포함되도록 만들 수 있습니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"> var <em>canTrickle</em> = <em>RTCPeerConnection</em>.canTrickleIceCandidates;</pre>

<h3 id="값">값</h3>

<p>{{jsxref("Boolean")}}는 원격 유저가 trickled ICE candidate를 수용 할 수 있으면 <code>true </code>값이고, 그렇지 않으면 <code>false </code>값 입니다. 이미 원격 유저가 생성되었으면, 이 값은 <code>null</code> 입니다.</p>

<div class="note">
<p><strong>참조:</strong> 이 속성의 값은 로컬 피어가 {{domxref("RTCPeerConnection.setRemoteDescription()")}}를 호출하게 되면 결정됩니다. 여기에서 제공된 정보를 사용해서 ICE agent가 원격 유저가 trickled ICE candidate를 지원하는지에 대한 여부를 결정해줍니다.</p>
</div>

<h2 id="예시">예시</h2>

<pre class="brush: js">var pc = new RTCPeerConnection();
// The following code might be used to handle an offer from a peer when
// it isn't known whether it supports trickle ICE.
pc.setRemoteDescription(remoteOffer)
  .then(_ =&gt; pc.createAnswer())
  .then(answer =&gt; pc.setLocalDescription(answer))
  .then(_ =&gt;
    if (pc.canTrickleIceCandidates) {
      return pc.localDescription;
    }
    return new Promise(r =&gt; {
      pc.addEventListener('icegatheringstatechange', e =&gt; {
        if (e.target.iceGatheringState === 'complete') {
          r(pc.localDescription);
        }
      });
    });
  })
  .then(answer =&gt; sendAnswerToPeer(answer)) // signaling message
  .catch(e =&gt; handleError(e));

pc.addEventListener('icecandidate', e =&gt; {
  if (pc.canTrickleIceCandidates) {
    sendCandidateToPeer(e.candidate); // signaling message
  }
});
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.RTCPeerConnection.canTrickleIceCandidates")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
 <li>{{domxref("RTCPeerConnection.addIceCandidate()")}}</li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></li>
</ul>
