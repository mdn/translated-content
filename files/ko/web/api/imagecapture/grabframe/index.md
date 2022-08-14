---
title: ImageCapture.grabFrame()
slug: Web/API/ImageCapture/grabFrame
tags:
  - API
  - Experimental
  - ImageCapture
  - MediaStream Image Capture API
  - Method
  - Reference
translation_of: Web/API/ImageCapture/grabFrame
---
<div>{{APIRef("MediaStream Image")}}</div>

<p><span class="seoSummary">{{domxref("ImageCapture")}} 인터페이스의 <strong><code>grabFrame()</code></strong> 메서드는 {{domxref("MediaStreamTrack")}}의 라이브 비디오에서 스냅샷을 찍고, 그 결과를 담은 {{domxref("ImageBitmap")}}으로 이행하는 {{jsxref("Promise")}}를 반환합니다.</span></p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>bitmapPromise</em> = <em>imageCapture</em>.grabFrame()
</pre>

<h3 id="반환_값"><span style='font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif; font-size: 1.375rem;'>반환 값</span></h3>

<p>{{domxref("ImageBitmap")}} 객체로 이행하는 {{jsxref("Promise")}}.</p>

<h2 id="예제">예제</h2>

<p>다음 예제는 <a href="https://simpl.info/imagecapture/">Simple Image Capture 데모</a>에서 가져온 것으로, <code>grabFrame()</code>이 반환한 {{jsxref("Promise")}}의 {{domxref("ImageBitmap")}}을 사용해 {{htmlelement("canvas")}} 요소에 할당하는 방법을 보입니다. 코드를 짧게 유지하기 위해 {{domxref("ImageCapture")}} 객체의 초기화 과정은 생략했습니다.</p>

<pre class="brush: js">var grabFrameButton = document.querySelector('button#grabFrame');
var canvas = document.querySelector('canvas');

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture.grabFrame()
  .then(function(imageBitmap) {
    console.log('Grabbed frame:', imageBitmap);
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
    canvas.classList.remove('hidden');
  })
  .catch(function(error) {
    console.log('grabFrame() error: ', error);
  });
}
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.ImageCapture.grabFrame")}}
