---
title: ImageCapture.grabFrame()
slug: Web/API/ImageCapture/grabFrame
---

{{APIRef("MediaStream Image")}}

{{domxref("ImageCapture")}} 인터페이스의 **`grabFrame()`** 메서드는 {{domxref("MediaStreamTrack")}}의 라이브 비디오에서 스냅샷을 찍고, 그 결과를 담은 {{domxref("ImageBitmap")}}으로 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 구문

```js
const bitmapPromise = imageCapture.grabFrame();
```

### 반환 값

{{domxref("ImageBitmap")}} 객체로 이행하는 {{jsxref("Promise")}}.

## 예제

다음 예제는 [Simple Image Capture 데모](https://simpl.info/imagecapture/)에서 가져온 것으로, `grabFrame()`이 반환한 {{jsxref("Promise")}}의 {{domxref("ImageBitmap")}}을 사용해 {{htmlelement("canvas")}} 요소에 할당하는 방법을 보입니다. 코드를 짧게 유지하기 위해 {{domxref("ImageCapture")}} 객체의 초기화 과정은 생략했습니다.

```js
var grabFrameButton = document.querySelector("button#grabFrame");
var canvas = document.querySelector("canvas");

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture
    .grabFrame()
    .then(function (imageBitmap) {
      console.log("Grabbed frame:", imageBitmap);
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvas.getContext("2d").drawImage(imageBitmap, 0, 0);
      canvas.classList.remove("hidden");
    })
    .catch(function (error) {
      console.log("grabFrame() error: ", error);
    });
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
