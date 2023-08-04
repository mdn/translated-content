---
title: ImageCapture.getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
---

{{APIRef("MediaStream Image")}}

{{domxref("ImageCapture")}} 인터페이스의 **`getPhotoSettings()`** 메서드는 현재 촬영 설정을 담은 {{domxref("PhotoSettings")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 구문

```js
const settingsPromise = imageCapture.getPhotoSettings();
```

### 반환 값

다음의 속성으로 구성된 {{domxref("PhotoSettings")}} 객체로 이행하는 {{jsxref("Promise")}}.

- `fillLightMode`: 캡처 장치의 플래시 설정. `"auto"`, `"off"`, `"flash"` 중 하나를 사용할 수 있습니다.
- `imageHeight`: 원하는 이미지 크기의 높이를 나타내는 정숫값. 일련의 정해진 크기만 지원하는 경우, {{glossary("user agent", "사용자 에이전트")}}는 이 값과 제일 가까운 높이를 사용합니다.
- `imageWidth`: 원하는 이미지 크기의 너비를 나타내는 정숫값. 일련의 정해진 크기만 지원하는 경우, 사용자 에이전트는 이 값과 제일 가까운 너비를 사용합니다.
- `redEyeReduction`: 적목 현상 감소 기능이 존재하는 경우, 사용할지 나타내는 불리언 값.

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
