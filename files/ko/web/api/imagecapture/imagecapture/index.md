---
title: ImageCapture() 생성자
slug: Web/API/ImageCapture/ImageCapture
---

{{APIRef("MediaStream Image")}}

**`ImageCapture()`** 생성자는 새로운 {{domxref("ImageCapture")}} 객체를 생성합니다.

## 구문

```js
const imageCapture = new ImageCapture(videoTrack);
```

### 매개변수

- `videoTrack`
  - : 이미지를 가져올 때 사용할 {{domxref("MediaStreamTrack")}}. 화상전화 스트림, 재생 중인 영화, 웹캠 스트림 등 모든 출처를 사용할 수 있습니다.

### 반환 값

지정한 비디오 트랙에서 정지 프레임을 캡처할 수 있는 `ImageCapture` 객체.

## 예제

다음 예제는 {{domxref("MediaDevices.getUserMedia()")}}을 사용해, `ImageCapture()` 생성자에 필요한 {{domxref("MediaStreamTrack")}}을 가져오는 법을 보입니다.

```js
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch((error) => console.log(error));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
