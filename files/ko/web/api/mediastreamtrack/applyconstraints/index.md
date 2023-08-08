---
title: MediaStreamTrack.applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`applyConstraints()`** 메서드는 트랙에 제약을 적용합니다. 제약을 통해 웹 사이트와 앱은 프레임 레이트, 해상도, 플래시 여부 등, 제약 가능한 속성을 자신이 바라는 이상적인 값과 허용 가능한 범위로 제한할 수 있습니다.

제약을 통해 미디어를 여러분의 선호 가이드라인에 맞출 수 있습니다. 예를 들면 고해상도 비디오를 선호하되 네트워크 사용량 폭증을 막기 위해 다소 낮은 프레임 레이트를 요구할 수 있습니다. 또한 이상적인 크기나, 허용 가능한 크기의 범위를 지정할 수도 있습니다. [기능, 제약, 설정](/ko/docs/Web/API/Media_Streams_API/Constraints) 문서의 [제약 적용](/ko/docs/Web/API/Media_Streams_API/Constraints#Applying_constraints) 항목에서 원하는 제약을 적용하는 방법에 대해 더 알아보세요.

## 구문

```js
const appliedPromise = track.applyConstraints([constraints]);
```

### 매개변수

- `constraints` {{optional_inline}}
  - : 트랙에 적용할 제약 속성을 나열하는 {{domxref("MediaTrackConstraints")}} 객체. 기존에 존재하는 제약은 모두 새로운 값으로 대체하고, `constraints` 매개변수에 포함하지 않은 제약의 경우 기본값으로 돌아갑니다. 매개변수를 생략한 경우, 모든 사용자 지정 제약을 기본값으로 초기화합니다. `constraints` 객체는 {{jsxref("Promise")}}가 이행하기 전에 반드시 적용해야 하는 기본 제약 설정을 나타냅니다. 추가로, 반드시 동일한 조건이어야 함을 나타내는 고급 제약도 `MediaTrackConstrants` 객체 배열로 포함할 수 있습니다.

### 반환 값

제약을 성공적으로 적용한 경우 이행하는 {{jsxref("Promise")}}. 제약 적용에 실패한 경우, 이름이 `OverconstrainedError`인 {{domxref("MediaStreamError")}}로 거부합니다. 제약이 너무 엄격해서 일치하는 조건을 찾지 못한 경우 발생할 수 있습니다.

## 예제

다음 코드는 기본과 고급 제약을 지정하는 법을 보입니다. 우선 페이지와 앱이 640에서 1280의 너비, 480에서 720의 높이가 필요하다고 지정합니다. 이때 뒤쪽의 큰 수를 선호하는 값으로 나타냅니다. 고급 제약은 더 나아가 1920\*1280의 이미지를 선호하며, 이 크기를 제공할 수 없는 경우 가로세로비 1.333을 요구합니다. 이렇게 여러 개의 제약을 두는 것을 명세는 "백오프 전략"이라고 말합니다.

```js
const constraints = {
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  advanced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
};

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  const track = mediaStream.getVideoTracks()[0];
  track
    .applyConstraints(constraints)
    .then(() => {
      // Do something with the track such as using the Image Capture API.
    })
    .catch((e) => {
      // The constraints could not be satisfied by the available devices.
    });
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [MediaStream Image Capture API](/ko/docs/Web/API/MediaStream_Image_Capture_API)
