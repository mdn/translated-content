---
title: ImageCapture
slug: Web/API/ImageCapture
tags:
  - API
  - Experimental
  - ImageCapture
  - Interface
  - MediaStream Image Capture API
  - Reference
translation_of: Web/API/ImageCapture
---
<div>{{APIRef("MediaStream Image")}}</div>

<p><a href="/ko/docs/Web/API/MediaStream_Image_Capture_API">MediaStream Image Capture API</a>의 <strong><code>ImageCapture</code></strong> 인터페이스는 유효한 {{domxref("MediaStreamTrack")}}이 참조하는 카메라 또는 기타 촬영 장치를 통해 이미지나 사진을 촬영하기 위한 메서드를 제공합니다.</p>

<h2 id="생성자">생성자</h2>

<dl>
 <dt>{{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}}</dt>
 <dd>비디오 스트림을 나타내는 {{domxref("MediaStreamTrack")}}에서 정지 프레임(사진)을 캡처하기 위한 <code>ImageCapture</code> 객체를 반환합니다.</dd>
</dl>

<h2 id="속성">속성</h2>

<dl>
 <dt>{{domxref("ImageCapture.track")}} {{readonlyinline}}</dt>
 <dd>생성자에 전달한 {{domxref("MediaStreamTrack")}}의 참조를 반환합니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<p><code>ImageCapture</code> 인터페이스는 {{domxref("EventTarget")}}의 메서드를 상속하며, 다음 메서드도 포함합니다.</p>

<dl>
 <dt>{{domxref("ImageCapture.takePhoto()")}}</dt>
 <dd>{{domxref("MediaStreamTrack")}}의 출처 비디오 캡처 장치를 통해 단일 노출 촬영을 한 후, 그 데이터를 담은 {{domxref("Blob")}}으로 이행하는 {{jsxref("Promise")}}를 반환합니다.</dd>
 <dt>{{domxref("ImageCapture.getPhotoCapabilities()")}}</dt>
 <dd>가능한 설정 옵션을 담은 {{domxref("PhotoCapabilities")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다.</dd>
 <dt>{{domxref("ImageCapture.getPhotoSettings()")}}</dt>
 <dd>현재 사진 설정을 담은 {{domxref("PhotoSettings")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다.</dd>
 <dt>{{domxref("ImageCapture.grabFrame()")}}</dt>
 <dd>{{domxref("MediaStreamTrack")}}의 라이브 비디오에서 스냅샷을 찍은 후, 성공했으면 {{domxref("ImageBitmap")}}을 반환합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<p>다음 코드는 <a href="https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html">Chrome의 Grab Frame - Take Photo Sample</a>에서 가져온 것입니다. <code>ImageCapture</code>는 이미지를 캡처할 도구가 필요하므로, 다음 예제는 브라우저 단말기의 미디어 장치(카메라)로 시작합니다.</p>

<p>이 예제는 {{domxref("MediaStream")}}으로부터 추출한 {{domxref("MediaStreamTrack")}}부터 시작합니다. 그 다음엔 해당 트랙을 사용해 <code>takePhoto()</code>와 <code>grabFrame()</code>을 호출할 <code>ImageCapture</code> 객체를 생성합니다. 마침내, 최종 결과를 캔버스 객체에 적용합니다.</p>

<pre class="brush: js">var imageCapture;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices.getUserMedia({video: true})
  .then(mediaStream =&gt; {
    document.querySelector('video').srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch(error =&gt; console.log(error));
}

function onGrabFrameButtonClick() {
  imageCapture.grabFrame()
  .then(imageBitmap =&gt; {
    const canvas = document.querySelector('#grabFrameCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch(error =&gt; console.log(error));
}

function onTakePhotoButtonClick() {
  imageCapture.takePhoto()
  .then(blob =&gt; createImageBitmap(blob))
  .then(imageBitmap =&gt; {
    const canvas = document.querySelector('#takePhotoCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch(error =&gt; console.log(error));
}

/* Utils */

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split('px')[0];
  canvas.height = getComputedStyle(canvas).height.split('px')[0];
  let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
      x, y, img.width * ratio, img.height * ratio);
}

document.querySelector('video').addEventListener('play', function() {
  document.querySelector('#grabFrameButton').disabled = false;
  document.querySelector('#takePhotoButton').disabled = false;
});</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.ImageCapture")}}</p>
