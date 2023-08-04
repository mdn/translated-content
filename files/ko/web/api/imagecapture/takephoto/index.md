---
title: ImageCapture.takePhoto()
slug: Web/API/ImageCapture/takePhoto
---

{{APIRef("MediaStream Image")}}

{{domxref("ImageCapture")}} 인터페이스의 **`takePhoto()`** 메서드는 {{domxref("MediaStreamTrack")}}을 제공하는 비디오 캡처 장치를 사용해 단일 노출 촬영을 하고, 그 데이터를 담은 {{domxref("Blob")}}으로 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 구문

```js
const blobPromise = imageCaptureObj.takePhoto([photoSettings]);
```

### 매개변수

- `photoSettings` {{optional_inline}}
  - : 사진을 촬영할 때 사용할 옵션을 나타내는 객체. 가능한 옵션은 다음과 같습니다.\* `fillLightMode`: 캡처 장치의 플래시 설정. `"auto"`, `"off"`, `"flash"` 중 하나를 사용할 수 있습니다.
    - `imageHeight`: 원하는 이미지 크기의 높이를 나타내는 정숫값. 일련의 정해진 크기만 지원하는 경우, {{glossary("user agent", "사용자 에이전트")}}는 이 값과 제일 가까운 높이를 사용합니다.
    - `imageWidth`: 원하는 이미지 크기의 너비를 나타내는 정숫값. 일련의 정해진 크기만 지원하는 경우, 사용자 에이전트는 이 값과 제일 가까운 너비를 사용합니다.
    - `redEyeReduction`: 적목 현상 감소 기능이 존재하는 경우, 사용할지 나타내는 불리언 값.

### 반환 값

{{domxref("Blob")}}으로 이행하는 {{jsxref("Promise")}}.

## 예제

다음 코드는 [Simple Image Capture 데모](https://simpl.info/imagecapture/)에서 가져온 것으로, `takePhoto()`가 반환한 {{jsxref("Promise")}}의 {{domxref("Blob")}}을 사용해 {{htmlelement("img")}} 요소에 할당하는 방법을 보입니다. 코드를 짧게 유지하기 위해 {{domxref("ImageCapture")}} 객체의 초기화 과정은 생략했습니다.

```js
var takePhotoButton = document.querySelector("button#takePhoto");
var canvas = document.querySelector("canvas");

takePhotoButton.onclick = takePhoto;

function takePhoto() {
  imageCapture
    .takePhoto()
    .then(function (blob) {
      console.log("Took photo:", blob);
      img.classList.remove("hidden");
      img.src = URL.createObjectURL(blob);
    })
    .catch(function (error) {
      console.log("takePhoto() error: ", error);
    });
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
