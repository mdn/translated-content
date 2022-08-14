---
title: MediaStreamTrack.muted
slug: Web/API/MediaStreamTrack/muted
tags:
  - API
  - Media
  - Media Capture and Streams
  - MediaStreamTrack
  - Property
  - Read-only
  - Reference
translation_of: Web/API/MediaStreamTrack/muted
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p>{{domxref("MediaStreamTrack")}} 인터페이스의 <strong><code>muted</code></strong> 읽기 전용 속성은 트랙이 현재 미디어 출력을 제공할 수 없는 상태인지를 나타내는 {{jsxref("Boolean")}}을 반환합니다.</p>

<div class="note">
<p><strong>참고:</strong> 사용자가 트랙을 음소거할 수 있는 기능을 구현하려면 {{domxref("MediaStreamTrack.enabled", "enabled")}} 속성을 사용하세요. <code>enabled</code>를 <code>false</code>로 바꿔 트랙을 비활성하면 빈 프레임(모든 샘플이 0인 오디오 프레임, 모든 픽셀이 검은색인 비디오 프레임)만 생성합니다.</p>
</div>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>mutedFlag</em> = <em>track.</em>muted</pre>

<h3 id="값">값</h3>

<p>트랙이 중단된 상태면 <code>true</code>, 아니면 <code>false</code>.</p>

<div class="note">
<p><strong>참고:</strong> 되도록이면 트랙의 중단 상태를 알기 위해 <code>muted</code>를 폴링 하는 것보다는 {{event("mute")}}와 {{event("unmute")}} 이벤트를 수신하세요.</p>
</div>

<h2 id="예제">예제</h2>

<p>다음 예제 코드는 {{domxref("MediaStreamTrack")}} 배열에서 중단된 트랙의 수를 셉니다.</p>

<pre class="brush: js">let mutedCount = 0;

trackList.forEach((track) =&gt; {
  if (track.muted) {
    mutedCount += 1;
  }
});</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.MediaStreamTrack.muted")}}</p>
