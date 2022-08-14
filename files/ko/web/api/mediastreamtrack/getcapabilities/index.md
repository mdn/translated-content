---
title: MediaStreamTrack.getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
tags:
  - API
  - Media Capture and Streams API
  - Media Streams API
  - MediaStreamTrack
  - Method
  - Reference
translation_of: Web/API/MediaStreamTrack/getCapabilities
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p><span class="seoSummary">{{domxref("MediaStreamTrack")}} 인터페이스의 <strong><code>getCapabilities()</code></strong> 메서드는 {{glossary("user agent", "사용자 에이전트")}}가 지원하는 각각의 제약 조건에 적용할 수 있는 값이나 값의 범위를 나타내는 {{domxref('MediaTrackCapabilities')}} 객체를 반환합니다.</span></p>

<p>브라우저의 기능 범위를 알아낸 후에는 스크립트에서 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}를 사용해 트랙의 설정을 이상적인 값으로, 또는 적어도 원하는 범위 안으로 설정할 수 있습니다. <a href="/ko/docs/Web/API/Media_Streams_API/Constraints">기능, 제약, 설정</a> 문서에서 제약 속성 사용법에 대해 자세히 알아보세요.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>capabilities</em> = <em>track</em>.getCapabilities()</pre>

<h3 id="반환_값">반환 값</h3>

<p>사용자 에이전트가 지원하는 제약 속성 각각의 가능한 값 또는 값의 범위를 나타내는 {{domxref('MediaTrackCapabilities')}} 객체.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.MediaStreamTrack.getCapabilities")}}</p>
