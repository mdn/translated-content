---
title: MediaStreamTrack.readyState
slug: Web/API/MediaStreamTrack/readyState
tags:
  - API
  - Media Capture and Streams
  - MediaStreamTrack
  - Property
  - Read-only
  - Reference
translation_of: Web/API/MediaStreamTrack/readyState
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p><code><strong>MediaStreamTrack.readyState</strong></code> 읽기 전용 속성은 트랙의 상태를 나타내는 열거형 값을 반환합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>state</em> = <em>track</em>.readyState</pre>

<h3 id="값">값</h3>

<p>다음의 두 값 중 하나입니다.</p>

<ul>
 <li><code>"live"</code>는 입력이 연결됐으며 트랙이 실시간 데이터를 받는 중임을 나타냅니다. 이 때, 데이터 출력은 {{domxref("MediaStreamTrack.enabled")}} 속성을 사용해 켜거나 끌 수 있습니다.</li>
 <li><code>"ended"</code>는 입력이 더 이상 데이터를 제공하지 않으며 앞으로도 새로운 데이터를 제공하지 않을 것임을 나타냅니다.</li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.MediaStreamTrack.readyState")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a></li>
 <li>{{domxref("MediaStreamTrack.onended")}}</li>
</ul>
