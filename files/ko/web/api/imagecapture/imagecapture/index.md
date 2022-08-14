---
title: ImageCapture() 생성자
slug: Web/API/ImageCapture/ImageCapture
tags:
  - API
  - Constructor
  - Experimental
  - ImageCapture
  - MediaStream Image Capture API
  - Reference
translation_of: Web/API/ImageCapture/ImageCapture
---
<div>{{APIRef("MediaStream Image")}}</div>

<p><span class="seoSummary"><strong><code>ImageCapture()</code></strong> 생성자는 새로운 {{domxref("ImageCapture")}} 객체를 생성합니다.</span></p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>imageCapture</em> = new ImageCapture(<em>videoTrack</em>)</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>videoTrack</code></dt>
 <dd>이미지를 가져올 때 사용할 {{domxref("MediaStreamTrack")}}. 화상전화 스트림, 재생 중인 영화, 웹캠 스트림 등 모든 출처를 사용할 수 있습니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>지정한 비디오 트랙에서 정지 프레임을 캡처할 수 있는 <code>ImageCapture</code> 객체.</p>

<h2 id="예제">예제</h2>

<p>다음 예제는 {{domxref("MediaDevices.getUserMedia()")}}을 사용해, <code>ImageCapture()</code> 생성자에 필요한 {{domxref("MediaStreamTrack")}}을 가져오는 법을 보입니다.</p>

<pre class="brush: js"> navigator.mediaDevices.getUserMedia({video: true})
  .then(mediaStream =&gt; {
    document.querySelector('video').srcObject = mediaStream
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch(error =&gt; console.log(error));</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.ImageCapture.ImageCapture")}}
