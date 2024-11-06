---
title: ImageCapture.getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
---

{{APIRef("MediaStream Image")}}

{{domxref("ImageCapture")}} 인터페이스의 **`getPhotoCapabilities()`** 메서드는 사용 가능한 설정 옵션을 담은 {{domxref("PhotoCapabilities")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 구문

```js
const capabilitiesPromise = imageCaptureObj.getPhotoCapabilities();
```

### 반환 값

다음 속성을 포함하는 객체로 이행하는 {{jsxref("Promise")}}.

- `redEyeReduction`
  - : 장치의 적목 현상 감소 기능 적용 여부를 나타내는 `"never"`, `"always"`, `"controllable"` 중 하나를 반환합니다.
- `imageHeight`
  - : {{glossary("user agent", "사용자 에이전트")}}가 지원하는 이미지 높이의 범위를 나타내는 객체를 반환합니다.
- `imageWidth`
  - : {{glossary("user agent", "사용자 에이전트")}}가 지원하는 이미지 너비의 범위를 나타내는 객체를 반환합니다.
- `fillLightMode`
  - : 사용 가능한 카메라 플래시 옵션을 담은 배열을 반환합니다. 가능한 값은 `auto`, `off`, `flash`입니다.

## 예제

다음 예제는 [Chrome의 Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html)에서 가져온 코드로, `getPhotoCapabilities()`를 사용해 범위 입력 칸의 크기를 수정합니다. 또한 장치의 {{domxref("MediaStream")}}에서 가져온 {{domxref("MediaStreamTrack")}} 객체를 사용해 {{domxref("ImageCapture")}} 객체를 생성하는 부분도 포함하고 있습니다.

```js
const input = document.querySelector('input[type="range"]');

var imageCapture;

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);

    return imageCapture.getPhotoCapabilities();
  })
  .then((photoCapabilities) => {
    const settings = imageCapture.track.getSettings();

    input.min = photoCapabilities.imageWidth.min;
    input.max = photoCapabilities.imageWidth.max;
    input.step = photoCapabilities.imageWidth.step;

    return imageCapture.getPhotoSettings();
  })
  .then((photoSettings) => {
    input.value = photoSettings.imageWidth;
  })
  .catch((error) => console.log("Argh!", error.name || error));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
