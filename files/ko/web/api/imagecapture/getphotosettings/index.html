---
title: ImageCapture.getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
tags:
  - API
  - Experimental
  - ImageCapture
  - MediaStream Image Capture API
  - Method
  - Reference
translation_of: Web/API/ImageCapture/getPhotoSettings
---
<div>{{APIRef("MediaStream Image")}}</div>

<p><span class="seoSummary">{{domxref("ImageCapture")}} 인터페이스의 <strong><code>getPhotoSettings()</code></strong> 메서드는 현재 촬영 설정을 담은 {{domxref("PhotoSettings")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다.</span></p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>settingsPromise</em> = <em>imageCapture</em>.getPhotoSettings()</pre>

<h3 id="반환_값"><span style='font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif; font-size: 1.375rem;'>반환 값</span></h3>

<p>다음의 속성으로 구성된 {{domxref("PhotoSettings")}} 객체로 이행하는 {{jsxref("Promise")}}.</p>

<ul>
 <li><code>fillLightMode</code>: 캡처 장치의 플래시 설정. <code>"auto"</code>, <code>"off"</code>, <code>"flash"</code> 중 하나를 사용할 수 있습니다.</li>
 <li><code>imageHeight</code>: 원하는 이미지 크기의 높이를 나타내는 정숫값. 일련의 정해진 크기만 지원하는 경우, {{glossary("user agent", "사용자 에이전트")}}는 이 값과 제일 가까운 높이를 사용합니다.</li>
 <li><code>imageWidth</code>: 원하는 이미지 크기의 너비를 나타내는 정숫값. 일련의 정해진 크기만 지원하는 경우, 사용자 에이전트는 이 값과 제일 가까운 너비를 사용합니다.</li>
 <li><code>redEyeReduction</code>: 적목 현상 감소 기능이 존재하는 경우, 사용할지 나타내는 불리언 값.</li>
</ul>

<h2 id="예제">예제</h2>

<p>다음 예제는 <a href="https://googlechrome.github.io/samples/image-capture/photo-resolution.html">Chrome의 Image Capture / Photo Resolution Sample</a>에서 가져온 코드로, <code>getPhotoCapabilities()</code>를 사용해 범위 입력 칸의 크기를 수정합니다. 또한 장치의 {{domxref("MediaStream")}}에서 가져온 {{domxref("MediaStreamTrack")}} 객체를 사용해 {{domxref("ImageCapture")}} 객체를 생성하는 부분도 포함하고 있습니다.</p>

<pre class="brush: js"><code>const input = document.querySelector('input[type="range"]');

var imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then(mediaStream =&gt; {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
.then(photoCapabilities =&gt; {
  const settings = imageCapture.track.getSettings();

  input.min = photoCapabilities.imageWidth.min;
  input.max = photoCapabilities.imageWidth.max;
  input.step = photoCapabilities.imageWidth.step;

  return imageCapture.getPhotoSettings();
})
.then(photoSettings =&gt; {
  input.value = photoSettings.imageWidth;
})
.catch(error =&gt; console.log('Argh!', error.name || error));</code></pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.ImageCapture.getPhotoSettings")}}
