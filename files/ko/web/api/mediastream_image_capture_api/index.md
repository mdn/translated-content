---
title: MediaStream Image Capture API
slug: Web/API/MediaStream_Image_Capture_API
---

{{DefaultAPISidebar("Image Capture API")}}

**MediaStream Image Capture API**는 촬영 장치를 사용해 이미지와 비디오를 캡처하기 위한 API입니다. 그러나 데이터 캡처 외에도 이미지 해상도, 적목 현상 감소 기능, 플래시 존재 유무와 현재 사용 여부 등 장치 사양에 대한 정보를 가져올 때에도 사용할 수 있습니다. 거꾸로, Image Capture API를 사용하면 현재 장치의 허용 범위 안에서 해당 기능을 조정할 수도 있습니다.

## 개념과 사용법

이미지 또는 비디오 스트림을 가져오는 절차는 다음과 같습니다. 예제 코드는 [Chrome의 Image Capture 예제](https://googlechrome.github.io/samples/image-capture/)에서 가져온 것입니다.

우선, {{domxref("MediaDevices.getUserMedia()")}}를 사용해 장치를 가리키는 참조를 가져옵니다. 아래 코드는 단순히 사용 가능한 비디오 장치를 아무거나 요청하는 것이지만, `getUserMedia()` 메서드는더 상세한 장치 기능 요청도 허용합니다. 반환 값은 {{domxref("MediaStream")}} 객체로 이행하는 {{jsxref("Promise")}}입니다.

```js
navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  // Do something with the stream.
});
```

그 후, {{domxref("MediaStream.getVideoTracks()")}}를 호출해 미디어 스트림에서 시각적인 부분을 분리합니다. `getVideoTracks()`의 반환 값은 {{domxref("MediaStreamTrack")}} 객체의 배열로, 여기서는 사용해야 할 객체를 배열의 첫 번째 요소라고 가정합니다. 실제 사용 시에는 `MediaStreamTrack` 객체의 속성을 사용해 원하는 객체를 찾을 수 있습니다.

```js
const track = mediaStream.getVideoTracks()[0];
```

이미지를 캡처하기 전에 우선 장치의 기능을 설정하고 싶을 것입니다. 다른 작업을 수행하기 전에, 트랙 객체의 {{domxref("MediaStreamTrack.applyConstraints","applyConstraints()")}} 메서드를 사용하면 됩니다.

```js
let zoom = document.querySelector("#zoom");
const capabilities = track.getCapabilities();
// 확대 지원 여부 판별
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced: [{ zoom: zoom.value }] });
```

마지막으로, `MediaStreamTrack` 객체를 {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} 생성자에 제공합니다. `MediaStream`은 여러 종류의 트랙을 담고 있으며 적절한 트랙을 가져올 때 사용할 수 있는 메서드를 소유하지만, `ImageCapture` 생성자는 {{domxref("MediaStreamTrack.kind")}}가 `"video"` 값이 아닌 경우 `NotSupportedError` {{domxref("DOMException")}}을 던집니다.

```js
let imageCapture = new ImageCapture(track);
```

## 인터페이스

- {{domxref("ImageCapture")}}
  - : 촬영 장치를 참조하는 유효한 {{domxref("MediaStreamTrack")}}을 사용해 이미지를 캡처하기 위한 인터페이스입니다.
- {{domxref("PhotoCapabilities")}}
  - : 장착된 촬영 장치에서 사용 가능한 설정 옵션을 제공합니다. {{domxref("ImageCapture.getPhotoCapabilities()")}}를 호출해서 `PhotoCapabilities` 객체를 가져올 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
